// Tooltip

 $("body").tooltip({ selector: '[data-toggle=tooltip]' });
 
	

// Botão dropdown //
	$('button[data-toggle=popover]').popover({ 
		html : true,
		content: function() {
		return $('#popover_content_wrapper').html();
		}
	});
			
// Tab Collapse 
	$('.collapse').on('shown.bs.collapse', function(){
	$(this).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
	}).on('hidden.bs.collapse', function(){
	$(this).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
	});
	
// Fechar Div
	$('#link-close').click(function(){
       $("#close-div").toggleClass('hide');

	});


// Seguir este projeto	

	$('.follow-project').click(function(){
       $(this).toggleClass('active');
	   
	   imagePath = $("#seguir-tag").attr("src");
	   if(imagePath == "assets/image/project/icon-tag.png") {
			$("#seguir-tag").attr("src", "assets/image/project/icon-tag-selected.png") ;
	   }else{
			$("#seguir-tag").attr("src", "assets/image/project/icon-tag.png") ;
	   };
	   
	});

//Mudar texto do Seguir	
				
				
	$(".swap-text").on("click", function() {
	  var el = $(this);
	  if (el.text() == el.data("text-swap")) {
		el.text(el.data("text-original"));
	  } else {
		el.data("text-original", el.text());
		el.text(el.data("text-swap"));
	  }
	});
	

// Loading

$('.loading').click(function(){
    var btn = $(this); 
    btn.button('loading');
});
			
