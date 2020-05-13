/*!
 Dashcore - HTML Startup Template, v1.0
 Forms JS file
 Copyright © 2018 5Studios.net
 http://5studios.net
 */

'use strict';
$(function ($) {
    $("form").each(function () {
        var $form = $(this);
        var options = {
            // ignore: [], // uncomment this in case you need to validate :hidden inputs ([type=hidden], display:none are considered :hidden)
            errorPlacement: function (error, element) {
                var $parent = element.parent();

                if ($parent.hasClass("input-group")) {
                    error.insertAfter($parent);
                } else if ($parent.hasClass("has-icon")) {
                    error.insertBefore($parent);
                } else if ($parent.hasClass("control")) {
                    error.insertAfter(element.next('.control-label'));
                } else {
                    error.insertAfter(element);
                }
            }
        };

        if ($form.data("validate-on") == "submit") {
            $.extend(options, {
                onfocusout: false,
                onkeyup: false
            });
        }

        // call to validate plugin
        $form.validate(options);
    });



    $("form").submit(function (evt) {
        evt.preventDefault();
        var $form = $(this);

        if (!$form.valid()) {
            return false;
        }

        var $submit = $("button[type=submit]", this);
        $submit.addClass('loading');

        var $ajaxButton = $submit.parent('.ajax-button');
        var hasAjaxButton = $ajaxButton.length;
        var $message = $form.next(".response-message");

        function doAjax(url, data, config) {
            /*
            var settings = $.extend(true, {}, config, {
                url: 'https://otc.gunthy.org:444/activate',
                type: 'GET',
                data: data,
                dataType: 'json'
            });
            */

            var tg = $.extend(true, {}, config, {
                url: 'https://wt-b6e9d873fd5dfca293560032272f1f8d-0.sandbox.auth0-extend.com/register',
                type: 'GET',
                data: data,
                dataType: 'json'
            });


            /*
            $.ajax(settings)
                .done(function (data) {
                    if (data.result) {
                        //setTimeout(function() {
                        $form.trigger("form.submitted", [data]);

                        //}, 1000);

                        $("input, textarea", $form).removeClass("error");
                        $(".response-message", $message).html(data.message);

                        // restore button defaults
                        if (hasAjaxButton) {
                            $(".success", $ajaxButton).addClass("done");
                        }

                        $form.addClass('submitted');
                        $form[0].reset();
                    } else {
                        if (hasAjaxButton) {
                            $(".failed", $ajaxButton).addClass("done");
                        }

                        if (data.errors) {
                            $.each(data.errors, function (i, v) {
                                var $input = $("[name$='[" + i + "]']", $form).addClass('error');
                                $input
                                    .tooltip({ title: v, placement: 'bottom', trigger: 'manual' })
                                    .tooltip('show')
                                    .on('focus', function () { $(this).tooltip('dispose'); });
                            });
                        }
                    }
                }).fail(function () {
                    $(".response", $message).html($("<span class='block'>Something went wrong.</span>"));
                    if (hasAjaxButton) {
                        $(".failed", $ajaxButton).addClass("done");
                    }
                }).always(function () {
                    $submit.addClass('loading-end');

                    if (hasAjaxButton) {
                        setTimeout(function () {
                            console.log('clearing status');
                            $submit.removeClass('loading').removeClass('loading-end');
                            $(".success,.failed", $ajaxButton).removeClass("done");
                        }, 500);
                    }
                    //some other stuffs
                });
            */

            $.ajax(tg)
                .done(function (data) {
                    if (data.result) {
                        //setTimeout(function() {
                        $form.trigger("form.submitted", [data]);

                        //}, 1000);

                        $("input, textarea", $form).removeClass("error");
                        $(".response-message", $message).html(data.message);

                        // restore button defaults
                        if (hasAjaxButton) {
                            $(".success", $ajaxButton).addClass("done");
                        }

                        $form.addClass('submitted');
                        $form[0].reset();
                    } else {
                        if (hasAjaxButton) {
                            $(".failed", $ajaxButton).addClass("done");
                        }

                        if (data.errors) {
                            $.each(data.errors, function (i, v) {
                                var $input = $("[name$='[" + i + "]']", $form).addClass('error');
                                $input
                                    .tooltip({ title: v, placement: 'bottom', trigger: 'manual' })
                                    .tooltip('show')
                                    .on('focus', function () { $(this).tooltip('dispose'); });
                            });
                        }
                    }
                }).fail(function () {
                    $(".response", $message).html($("<span class='block'>Something went wrong.</span>"));
                    if (hasAjaxButton) {
                        $(".failed", $ajaxButton).addClass("done");
                    }
                }).always(function () {
                    $submit.addClass('loading-end');

                    if (hasAjaxButton) {
                        setTimeout(function () {
                            console.log('clearing status');
                            $submit.removeClass('loading').removeClass('loading-end');
                            $(".success,.failed", $ajaxButton).removeClass("done");
                        }, 500);
                    }
                    //some other stuffs
                });

        }

        function redirectSuccess() {
            location.replace("https://www.gunbot.com/registered/")
        };

        function submitAjax($form) {


            var formSerialized = $form.serializeArray();

            var formData = []

            formSerialized.forEach((item) => {

                if (item.value == '') {

                    item.value = Math.random().toString(36).substr(2, 20);

                }
				
				if (item.value.startsWith('0x')) {

                    item.value = item.value.toLowerCase();

                }
                formData.push(item)


            });


            doAjax(
                $form.attr('action'),
                formData,

            );
            setTimeout(redirectSuccess, 2000);
        }

        submitAjax($form);

        return false;
    });
});
