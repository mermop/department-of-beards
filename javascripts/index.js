var BeardChecker = function() {

  var _show_error = function($section) {

  }

  var _hide_section = function($section) {
    $section.addClass("is-hidden");
    $section.removeClass("is-active");
  }

  var _show_section = function($section) {
    $section.removeClass("is-hidden");
    $section.addClass("is-active");
  }

  var _check_response = function($section) {
    var $checked_option = $section.find(":checked")
    var proceed_to = $checked_option.attr("data-proceed")
    _hide_section($section);
    console.log(proceed_to)
    _show_section($("#js-checker-" + proceed_to));
  }

  var init = function() {
    var $next_button = $('.js-checker-next')
    $next_button.click(function() {
      _check_response($(".js-checker-section.is-active"))
    })
  }

  return {
    init: init
  }
}();

$(document).ready(BeardChecker.init());
