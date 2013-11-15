require(
    [
        "jqueryNoConflict"
    ],

    function (jQuery) {

        (function ($) {
            var version = $().jquery;
            $('#version').text(version);
        })(jQuery);

    }
);