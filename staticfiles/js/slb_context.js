if (!!window.jQuery) {
    (function($) {
        $(document).ready(function() {
            if (!!window.SLB) {
                {
                    $.extend(SLB, {
                        "context": ["public", "user_guest"]
                    });
                }
            }
        })
    })(jQuery);
}