! function() {
    function e(e) {
        e.readyState ? e.onreadystatechange = function() {
            ("complete" == this.readyState || "loaded" == this.readyState) && n()
        } : e.onload = n
    }

    function t(t) {
        var n = document.createElement("script");
        n.setAttribute("type", "text/javascript"), n.setAttribute("src", t), e(n), (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(n)
    }

    function n() {
        s += 1, s == i && o(window.jQuery.noConflict(!0))
    }

    function o(e) {
        easyXDM && (PagarMeCheckout.easyXDM = easyXDM.noConflict("PagarMeCheckout")), e.isReady ? a(e) : e(document).ready(a)
    }

    function a(e) {
        function t(e) {
            return e && e.encryption_key ? (this.params = e, this.view = n, this.id = t.scriptsCount_++, t.scripts[this.id] = this, void(t.bridge || (t.bridge = n.create()))) : (alert("Encryption key missing."), null)
        }
        var n, o, a, i = window.navigator.userAgent,
            s = function() {
                return /(iPad|iPhone|iPod)/i.test(i)
            },
            c = function() {
                return /(Windows\sPhone|IEMobile)/i.test(i)
            },
            d = function() {
                return /Android/.test(i)
            },
            u = function() {
                return s() || c() || d()
            },
            l = function(e, n) {
                var o = t.scripts[e];
                o.success(n)
            },
            p = {
                remotePath: "/modal.html",
                props: {
                    style: {
                        zIndex: 9999,
                        background: "transparent",
                        border: "0 none transparent",
                        overflowX: "hidden",
                        overflowY: "auto",
                        margin: 0,
                        padding: 0,
                        "-webkit-tap-highlight-color": "transparent",
                        "-webkit-touch-callout": "none",
                        position: "fixed",
                        left: 0,
                        top: 0,
                        width: "100%",
                        height: "100%"
                    }
                },
                closeModal: function() {
                    return p.container.hide(), p.container.find("iframe").blur(), !0
                },
                openModal: function() {
                    p.container.show(), p.container.find("iframe").focus()
                },
                beforeOpen: function(e) {
                    e && e()
                },
                create: function() {
                    var t = e("<div></div>").hide();
                    return e("body").append(t), p.container = t, new PagarMeCheckout.easyXDM.Rpc({
                        remote: r + p.remotePath,
                        container: t.get(0),
                        props: p.props
                    }, {
                        local: {
                            closeModal: p.closeModal,
                            submitForm: function(e, t) {
                                p.closeModal(), l(e, t)
                            }
                        },
                        remote: {
                            config: {},
                            animateIn: {}
                        }
                    })
                }
            },
            f = {
                remotePath: "/tab-mid.html",
                props: {
                    style: {
                        display: "none"
                    }
                },
                closeModal: function() {
                    o.close(), o = null, a.setSource(null), a.restart()
                },
                beforeOpen: function(e) {
                    o && !o.closed && o.close(), o = window.open(r + "/tab.html"), o.blur(), a.setSource(o), e && e()
                },
                openModal: function() {},
                create: function() {
                    return a = createTransport({
                        closeModal: function() {
                            f.closeModal()
                        },
                        submitForm: function(e, t) {
                            f.closeModal(), l(e, t)
                        }
                    }, r), {
                        config: function(e, t) {
                            a.callMethod("config", e, t)
                        },
                        animateIn: function() {
                            a.callMethod("animateIn")
                        }
                    }
                }
            };
        n = u() ? f : p, t.scriptsCount_ = 0, t.scripts = {}, t.prototype.mapIframeParameters_ = function(e) {
            var t = {
                card_brands: "brands"
            };
            for (var n in t) e[n] && (e[t[n]] = e[n], delete e[n])
        }, t.prototype.open = function(e) {
            var n = t.bridge,
                o = this,
                a = e;
            for (var r in this.params) a[r] = this.params[r];
            this.mapIframeParameters_(a), a.script_id = this.id, this.view.beforeOpen(function() {
                n.config(a, function() {
                    o.view.openModal(), n.animateIn()
                })
            })
        }, t.prototype.close = function() {
            t.bridge.closeModal()
        }, t.prototype.success = function(e) {
            this.params.success && this.params.success.call(this, e)
        };
        for (var m = function() {
                var t = e(this).data("checkout"),
                    n = y(e("[data-checkout-id=" + e(this).data("script") + "]"));
                t.open(n)
            }, h = function() {
                for (var t = e("script"), n = [], o = 0; o < t.length; o++) - 1 != t[o].src.indexOf(r + "checkout.js") && n.push(e(t[o]));
                return n
            }, g = function(e) {
                var t = e;
                try {
                    t = decodeURIComponent(escape(e))
                } catch (n) {}
                return t
            }, y = function(e) {
                for (var t = ["create-token", "customer-data", "payment-methods", "brands", "card-brands", "amount", "postback-url", "max-installments", "encryption-key", "ui-color", "interest-rate", "customer-name", "customer-document-number", "customer-email", "customer-address-street", "customer-address-street-number", "customer-address-complementary", "customer-address-neighborhood", "customer-address-city", "customer-address-state", "customer-address-zipcode", "customer-phone-ddd", "customer-phone-number"], n = {}, o = 0; o < t.length; o++) void 0 !== e.attr("data-" + t[o]) && (n[t[o].replace(/-/g, "_")] = g(e.attr("data-" + t[o])));
                return n
            }, v = function(t) {
                t = t || "Pagar";
                var n = e('<input class="pagarme-checkout-btn" type="button" value="' + g(t) + '" />');
                return n.click(m), n
            }, b = h(), w = 0; w < b.length; w++) {
            var k = b[w],
                M = k.parents("form");
            if (M && M.length && k.data("amount") && k.data("encryption-key")) {
                var P = v(k.data("button-text"));
                P.insertBefore(k), k.data("button-class") && P.addClass(k.data("button-class"));
                var j, C = new t({
                    encryption_key: k.data("encryption-key"),
                    success: function(t) {
                        var n = e("[data-checkout-id=" + this.id + "]"),
                            o = n.parents("form"),
                            a = null,
                            r = function(t, n) {
                                n = n, e.each(t, function(t) {
                                    var a;
                                    if (a = n ? n + "[" + t + "]" : t, e.isPlainObject(this)) r(this, a);
                                    else {
                                        var i = e("<input />", {
                                            name: a,
                                            type: "hidden",
                                            val: this
                                        });
                                        o.append(i)
                                    }
                                })
                            };
                        t.token || (a = "pagarme"), r(t, a), o.submit()
                    }
                });
                j = C.id, k.attr("data-checkout-id", j), P.data("script", j), P.data("checkout", C)
            }
        }
    }
    var r = "https://pagar.me/assets/checkout/";
    ! function(e) {
        var t, n, o = [],
            a = {},
            r = 0,
            i = function(e) {
                return Array.prototype.slice.call(e)
            },
            s = function() {
                d(JSON.stringify({
                    method: "_pending"
                }))
            },
            c = function() {
                for (var e in a)
                    if (!a[e].responded) return void d(a[e].message)
            },
            d = function(e) {
                t.postMessage(e, n)
            },
            u = function() {
                var e, t = i(arguments),
                    n = t.shift();
                e = t.length && "function" == typeof t[t.length - 1] ? t.pop() : function() {}, r += 1;
                var o = JSON.stringify({
                    method: n,
                    args: t,
                    id: r
                });
                a[r] = {
                    message: o,
                    cb: e
                }, d(o)
            };
        e.createTransport = function(e, r) {
            return n = r || "*", setInterval(function() {
                t && s()
            }, 300), window.addEventListener("message", function(t) {
                var n = document.createElement("a"),
                    i = document.createElement("a");
                if (n.href = r, i.href = t.origin, !r || n.hostname === i.hostname) {
                    var s = t.source,
                        d = t.origin,
                        u = JSON.parse(t.data);
                    if ("_ack" == u.method) a[u.id] && (a[u.id].cb(), delete a[u.id]);
                    else if ("_pending" == u.method) c();
                    else {
                        if (-1 != o.indexOf(u.id)) return;
                        o.push(u.id), s.postMessage(JSON.stringify({
                            method: "_ack",
                            id: u.id
                        }), d), e[u.method] && e[u.method].apply(null, u.args)
                    }
                }
            }), {
                callMethod: function() {
                    u.apply(null, arguments)
                },
                setSource: function(e) {
                    t = e
                },
                restart: function() {
                    o = []
                }
            }
        }
    }(window);
    var i = 1,
        s = 0;
    window.PagarMeCheckout = window.PagarMeCheckout || {}, window.PagarMeCheckoutLoadedRetail || (window.PagarMeCheckoutLoadedRetail = !0, (void 0 === window.jQuery || "1.10.1" !== window.jQuery.version) && (i += 1, t("http://code.jquery.com/jquery.js")), "object" != typeof window.JSON && (i += 1, t(r + "/json.min.js")), t(r + "/easyXDM.js"))
}();