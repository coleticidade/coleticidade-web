// JavaScript Document

						
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
						
						
			
			
			
