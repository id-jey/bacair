(function ($, Drupal) {
	Drupal.behaviors.myModuleBehavior = {
		attach: function (context) {
			$('#edit-select-department').once().on("change", function () {
				const value = $( "#edit-select-department option:selected" ).text();
				$('.block-selected-department').replaceWith("<div class='block-selected-department'>" + value + "</div>");
			});
		}
	};
})(jQuery, Drupal);