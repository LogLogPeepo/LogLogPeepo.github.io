			$(function(){
				html = {
					panel: $("#console"),
					log: function(m) {
						this.panel.append("<div>&gt; "+m+"</div>");
					}
				};
			});		
