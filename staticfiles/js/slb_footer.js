if (!!window.jQuery) {
    (function($) {
        $(document).ready(function() {
            if (!!window.SLB && SLB.has_child('View.init')) {
                SLB.View.init({
                    "ui_autofit": true,
                    "ui_animate": true,
                    "slideshow_autostart": true,
                    "slideshow_duration": "6",
                    "group_loop": true,
                    "ui_overlay_opacity": "0.8",
                    "ui_title_default": false,
                    "theme_default": "slb_black",
                    "ui_labels": {
                        "loading": "Loading",
                        "close": "Close",
                        "nav_next": "Next",
                        "nav_prev": "Previous",
                        "slideshow_start": "Start slideshow",
                        "slideshow_stop": "Stop slideshow",
                        "group_status": "Item %current% of %total%"
                    }
                });
            }
            if (!!window.SLB && SLB.has_child('View.assets')) {
                {
                    $.extend(SLB.View.assets, {
                        "1538831480": {
                            "id": 133,
                            "type": "image",
                            "internal": true,
                            "source": "http:\/\/nordthemes.com\/wild-book-demo\/wp-content\/uploads\/sites\/14\/2017\/08\/DeathtoStock_Holiday2.jpg",
                            "title": "DeathtoStock_Holiday2",
                            "caption": "",
                            "description": ""
                        },
                        "1079335812": {
                            "id": 134,
                            "type": "image",
                            "internal": true,
                            "source": "http:\/\/nordthemes.com\/wild-book-demo\/wp-content\/uploads\/sites\/14\/2017\/08\/DeathtoStock_NotStock8.jpg",
                            "title": "DeathtoStock_NotStock8",
                            "caption": "",
                            "description": ""
                        },
                        "663676363": {
                            "id": 135,
                            "type": "image",
                            "internal": true,
                            "source": "http:\/\/nordthemes.com\/wild-book-demo\/wp-content\/uploads\/sites\/14\/2017\/08\/IMG_1185.jpg",
                            "title": "IMG_1185",
                            "caption": "",
                            "description": ""
                        },
                        "1249555455": {
                            "id": 136,
                            "type": "image",
                            "internal": true,
                            "source": "http:\/\/nordthemes.com\/wild-book-demo\/wp-content\/uploads\/sites\/14\/2017\/08\/peter-kisteman-329830.jpg",
                            "title": "peter-kisteman-329830",
                            "caption": "",
                            "description": ""
                        }
                    });
                }
            }
            /* THM */
            if (!!window.SLB && SLB.has_child('View.extend_theme')) {
                SLB.View.extend_theme('slb_baseline', {
                    "name": "Baseline",
                    "parent": "",
                    "styles": [{
                        "handle": "base",
                        "uri": "http:\/\/nordthemes.com\/wild-book-demo\/wp-content\/plugins\/simple-lightbox\/themes\/baseline\/css\/style.css",
                        "deps": []
                    }],
                    "layout_raw": "<div class=\"slb_container\"><div class=\"slb_content\">{{item.content}}<div class=\"slb_nav\"><span class=\"slb_prev\">{{ui.nav_prev}}<\/span><span class=\"slb_next\">{{ui.nav_next}}<\/span><\/div><div class=\"slb_controls\"><span class=\"slb_close\">{{ui.close}}<\/span><span class=\"slb_slideshow\">{{ui.slideshow_control}}<\/span><\/div><div class=\"slb_loading\">{{ui.loading}}<\/div><\/div><div class=\"slb_details\"><div class=\"inner\"><div class=\"slb_data\"><div class=\"slb_data_content\"><span class=\"slb_data_title\">{{item.title}}<\/span><span class=\"slb_group_status\">{{ui.group_status}}<\/span><div class=\"slb_data_desc\">{{item.description}}<\/div><\/div><\/div><div class=\"slb_nav\"><span class=\"slb_prev\">{{ui.nav_prev}}<\/span><span class=\"slb_next\">{{ui.nav_next}}<\/span><\/div><\/div><\/div><\/div>"
                });
            }
            if (!!window.SLB && SLB.has_child('View.extend_theme')) {
                SLB.View.extend_theme('slb_default', {
                    "name": "Default (Light)",
                    "parent": "slb_baseline",
                    "styles": [{
                        "handle": "base",
                        "uri": "http:\/\/nordthemes.com\/wild-book-demo\/wp-content\/plugins\/simple-lightbox\/themes\/default\/css\/style.css",
                        "deps": []
                    }]
                });
            }
            if (!!window.SLB && SLB.has_child('View.extend_theme')) {
                SLB.View.extend_theme('slb_black', {
                    "name": "Default (Dark)",
                    "parent": "slb_default",
                    "styles": [{
                        "handle": "base",
                        "uri": "http:\/\/nordthemes.com\/wild-book-demo\/wp-content\/plugins\/simple-lightbox\/themes\/black\/css\/style.css",
                        "deps": []
                    }]
                });
            }
        })
    })(jQuery);
}