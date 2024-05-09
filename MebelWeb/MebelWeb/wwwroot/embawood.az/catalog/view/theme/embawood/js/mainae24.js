$(document).ready(function () {
    const select = document.querySelector('#city-select')

    if (select) {
        select.addEventListener('change', (e) => {
            let value = e.target.value
            localStorage.setItem('cityId', value)
        })

        if (localStorage.getItem('cityId')) {
            select.value = localStorage.getItem(('cityId'))
        } else {
            select.querySelectorAll("option:first-child").selected = true
        }
    }

    $(".scrollTop").click(function () {
        $("html, body").animate({scrollTop: 0}, "slow");
        return false;
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 250) {
            $(".scrollTop").addClass("show");
        } else {
            $(".scrollTop").removeClass("show");
        }
    });

    $(window).scroll(function () {
        fixedProduct();
    });

    /*window.onload = _snowCanvas({
        el: document.getElementById("snow"),
        snowColor: "#d5d5d5",
        background: "transparent",
        maxSpeed: 2,
        minSpeed: 1,
        width: "",
        height: "",
        amount: 120,
        rMax: 4,
        rMin: 1
    });*/

    function fixedProduct() {
        if ($(window).scrollTop() > 250) {
            $(".sticky-product").addClass("show");
        } else {
            $(".sticky-product").removeClass("show");
        }
    }

    if ($(".description_category").height() > 55) {
        $(".show-more").css("display", "block");
    }

    $(".show-more").on("click", function () {
        if ($(".description_category").hasClass("show")) {
            $(".description_category").removeClass("show", 400);
            $(this).html('Daha çox göstər <i class="icon-arrow-down5"></i>')
        } else {
            $(".description_category").addClass("show", 400);
            $(this).html('Daha az göstər <i class="icon-arrow-up5"></i>')
        }
    });

    $(".collapse-element").click(function () {
        const collapse_element = $(this).attr('data-toggle-element');
        if ($(this).find('i').hasClass('icon-arrow-down5')) {
            $(this).find('i').removeClass('icon-arrow-down5').addClass('icon-arrow-up5');
        } else {
            $(this).find('i').removeClass('icon-arrow-up5').addClass('icon-arrow-down5');
        }
        $(`#${collapse_element}`).slideToggle("fast");

    });

    $('.dropdown-menu').on('click', function (event) {
        var events = $._data(document, 'events') || {};
        events = events.click || [];
        for (var i = 0; i < events.length; i++) {
            if (events[i].selector) {
                if ($(event.target).is(events[i].selector)) {
                    events[i].handler.call(event.target, event);
                }
                $(event.target).parents(events[i].selector).each(function () {
                    events[i].handler.call(this, event);
                });
            }
        }
        event.stopPropagation();
    });

    $(".main-slider").slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000
    });

    $(".carousel-category").slick({
        dots: false,
        arrows: true,
        speed: 300,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 567,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $(".carousel-product-wrapper").slick({
        dots: false,
        arrows: true,
        speed: 300,
        rows: 2,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1439,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 567,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $(".viewed-carousel-product").slick({
        dots: false,
        arrows: true,
        speed: 300,
        rows: 1,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 567,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $(".drop-footer-menu").click(function () {
        var menu_type = $(this).attr("id");
        $(this).find(".footer_but i").toggleClass("icon-arrow-up32");
        $(".footer-menu").find("ul[data-id=" + menu_type + "]").slideToggle("100");
    });

    $(".mobile-search-button").click(function () {
        $(".mobile-search-wrapper").show();
        $(".mobile-search-wrapper input[name=mobile_search_input]").focus();
    });

    $(".close-mobile-search").click(function () {
        $(".mobile-search-wrapper").hide();
        $(".mobile-search-wrapper input[name=mobile_search_input]").val('');
    });

    /* Rating review */
    if ($().rating) {
        $("#review-rating").rating({
            "value": 1,
            "click": function (e) {
                $("#starsInput").val(e.stars);
            }
        });
    }

    $(".add-wishlist").click(function (e) {
        e.preventDefault();
    });

    function s(e) {
        var t = $("input[name=" + e + "]").val();
        return "" !== t ? 0 : t;
    }

    if ($().slider) {
        var min_price = parseFloat($("input[name=min_price]").attr("min"));
        var max_price = parseFloat($("input[name=max_price]").attr("max"));
        $(".slider-range").slider({
            range: !0,
            min: min_price,
            max: max_price,
            step: 10,
            values: [s("min_price"), s("max_price")],
            slide: function (e, t) {
                $("input[name=min_price]").val(t.values[0]);
                $("input[name=max_price]").val(t.values[1]);
            },
        });
        $(".slider-range").slider({values: [$("input[name=min_price]").val(), $("input[name=max_price]").val()]})
    }

    $("input[name=min_price]").change(function (e) {
        var min_price = parseFloat($(this).val()),
            max_price = parseFloat($("input[name=max_price]").val());

        if (min_price > max_price) {
            $(this).val(min_price);
            $("input[name=max_price]").val(min_price);
            $(".slider-range").slider({values: [min_price, min_price]});
        } else {
            $(".slider-range").slider({values: [min_price, max_price]});
        }
    });

    $("input[name=max_price]").change(function (e) {
        var max_price = parseFloat($(this).val()),
            min_price = parseFloat($("input[name=min_price]").val());
        if (max_price < min_price) {
            $(this).val(max_price);
            $("input[name=min_price]").val(max_price);
            $(".slider-range").slider({values: [max_price, max_price]});
        } else {
            $(".slider-range").slider({values: [min_price, max_price]});
        }
    });

    /* Mobile Filter menu */
    $(".mobile-filter .btn").click(function () {
        $(".mobile_filter_menu").toggleClass("isActive");
        $("body", "html").css("overflow", "hidden");
    });

    $(".menu-close, .mobile_filter_menu .body_overlay").click(function () {
        $(".mobile_filter_menu").removeClass("isActive");
        $("body", "html").css("overflow", "auto");
    });

    $(function () {
        $('.slider-for').lightGallery({
            thumbnail: false,
            download: true,
            autoplay: false,
            autoplayControls: false,
            actualSize: false,
            fullScreen: false,
            share: false,
            auto: false,
            pager: false,
            loadYoutubeThumbnail: true,
            youtubeThumbSize: 'default',
            startClass: '',
            enableSwipe: true,
            enableDrag: true,
            speed: 500
        });
        var $carousel = $('.slider-for');
        $carousel
            .slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                fade: true,
                adaptiveHeight: true,
                asNavFor: '.slider-nav'
            });

        $('.slider-nav').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            vertical: true,
            asNavFor: '.slider-for',
            dots: false,
            focusOnSelect: true,
            verticalSwiping: true,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        vertical: false,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        vertical: false,
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        vertical: false,
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 380,
                    settings: {
                        vertical: false,
                        slidesToShow: 3,
                    }
                }
            ]
        });
    });

    $('#video-modal').on('hidden.bs.modal', function (e) {
        var iframe = $(".video-container iframe");
        if (iframe !== null) {
            var iframeSrc = iframe.attr('src');
            iframe.attr('src', iframeSrc);
        }
    })

    $(".change-components").click(function () {
        $('html, body').animate({
            scrollTop: $("#component").offset().top
        }, 700);
    });

    $(".elementor-accordion-title").click(function () {
        $(this).toggleClass("active").next("div").slideToggle();
    });

    /* Kredit Kalkulyatoru */
    $(".calc_range").ionRangeSlider({
        type: "single",
        min: 3,
        max: 30,
        grid: true,
        postfix: ' ay',
        skin: "round",
        values: [
            "3", "6", "9", "12", "15", "18", "24"
        ],
    });

    $(".calc_range, .calc_range_mobile").change(function (e) {
        var credit_month = $(this).val(),
            total_price = parseFloat($(".product-price-current span").text().replace(',', ''));
        //credit_condition(credit_month, total_price);
        credit_monthly_price();
    });

    //credit_condition($(".credit_calc").val(), parseFloat($(".product-price-current span").text().replace(',', '')));
    credit_monthly_price();

    function credit_condition(credit_month, total_price) {
        if (credit_month <= 12) {
            $(".commission_price span").text(total_price * 2 / 100);
        } else if (credit_month > 12 && credit_month <= 18) {
            $(".commission_price span").text(total_price * 10 / 100);
        } else {
            $(".commission_price span").text(total_price * 0 / 100);
        }
    }

    function annuitet_calc(total_price, percent, month) {
        var monthly_percent = parseFloat(percent / 1200).toFixed(4);
        var x = parseFloat(1 + parseFloat(monthly_percent));
        var power = Math.pow(x, month);
        var monthly_price = (total_price * monthly_percent) / (1 - 1 / power);

        return monthly_price.toFixed(2);
    }

    function credit_monthly_price() {
        const credit_month = $(".calc_range").val() || $(".calc_range_mobile").val(),
            isSpecial = $(".price-block").find("input[name=special]").val();

        let total_price;

        let result_price;

        let specialPrice = parseFloat($(".product__content-price--current").data("pr_special_offer"))

        isSpecial === "true" ? total_price = parseFloat($(".product-price-old span").first().text().replace(',', ''))
            : total_price = parseFloat($(".product-price-current span").first().text().replace(',', ''));

        if (credit_month <= 3) {
            result_price = total_price - (total_price * 12 / 100);
            $(".monthly_price p span").text(parseFloat(result_price / credit_month).toFixed(2));
        } else if (credit_month <= 6) {
            result_price = total_price - (total_price * 10 / 100);
            $(".monthly_price p span").text(parseFloat(result_price / credit_month).toFixed(2));
        } else if (credit_month <= 9) {
            result_price = total_price - (total_price * 5 / 100);
            $(".monthly_price p span").text(parseFloat(result_price / credit_month).toFixed(2));
        } else if (credit_month <= 12) {
            if(specialPrice === 50) {
                result_price = $(".product-price-old span").length ? parseFloat($(".product-price-old span").first().text().replace(',', '')) * 0.7 : parseFloat($(".product__content-price--current span").first().text().replace(',', '')) * 0.7
            } else if(specialPrice === 40) {
                result_price = $(".product-price-old span").length ? parseFloat($(".product-price-old span").first().text().replace(',', '')) * 0.75 : parseFloat($(".product__content-price--current span").first().text().replace(',', '')) * 0.75
            } else {
                result_price = $(".product-price-old span").length ? parseFloat($(".product-price-old span").first().text().replace(',', '')) : parseFloat($(".product__content-price--current span").first().text().replace(',', ''));
            }
            // result_price = total_price;
            // result_price = total_price - (total_price * 15 / 100);
            $(".monthly_price p span").text(parseFloat(result_price / credit_month).toFixed(2));
        } else if (credit_month <= 18) {
            // result_price = total_price;
            if(specialPrice === 50) {
                result_price = $(".product-price-old span").length ? parseFloat($(".product-price-old span").first().text().replace(',', '')) * 0.7 : parseFloat($(".product__content-price--current span").first().text().replace(',', '')) * 0.7
            } else {
                result_price = total_price + (total_price * 4 / 100);
            }
            $(".monthly_price p span").text(parseFloat(result_price / credit_month).toFixed(2));
        }  else if (credit_month > 18) {
            result_price = total_price + (total_price * 12 / 100);
            $(".monthly_price p span").text(parseFloat(result_price / credit_month).toFixed(2));
        }
        /*else if(credit_month>18 && credit_month <=30){
            $(".monthly_price h4 span").text(annuitet_calc(total_price, 34, credit_month));
            //console.log(total_price);
        }*/
    }

    /* Count up and down */
    function count_up($this) {
        var current_count = $this.prev("input[type='number']").val();
        $this.prev("input[type='number']").val(++current_count);
        const sub_product = $this.parents(".cart-product-table").next(".sub-product").find(".cart-sub-product input[type='number']");
        sub_product.each(function(idx, sub) {
            $(sub).val(parseInt($(sub).val()) + parseInt($(sub).data("default-count")));
        })
        return current_count;
    }

    function count_down($this) {
        var current_count = $this.next("input[type='number']").val();
        if ($this.parent().hasClass("not-less-than-one") && current_count > 1) {
            $this.next("input[type='number']").val(--current_count);
        } else if (!$this.parent().hasClass("not-less-than-one") && current_count > 0) {
            $this.next("input[type='number']").val(--current_count);
        }
        const sub_product = $this.parents(".cart-product-table").next(".sub-product").find(".cart-sub-product input[type='number']");
        sub_product.each(function(idx, sub) {
            $(sub).val(parseInt($(sub).val()) - parseInt($(sub).data("default-count")));
        })
        return current_count;
    }

    /* Modul change */
    function calc_product($this, total_price, old_total_price, pr_price, pr_old_price, state_val, not_less_one) {
        var current_count,
            data_state,
            total_price_,
            old_total_price_;

        var string_pr_price = pr_price.toString(),
            string_pr_old_price = pr_old_price.toString();

        if ($this.hasClass("count_up")) {
            current_count = count_up($this);
            data_state = 1;
            total_price_ = (parseFloat(total_price.text().replace(',', '')) + parseFloat(string_pr_price.replace(',', ''))).toFixed(2);
            old_total_price_ = (parseFloat(old_total_price.text().replace(',', '')) + parseFloat(string_pr_old_price.replace(',', ''))).toFixed(2);
        } else if ($this.hasClass("count_down")) {
            current_count = count_down($this);
            if (current_count > not_less_one) {
                data_state = 1;
                total_price_ = ((parseFloat(total_price.text().replace(',', '')) - parseFloat(string_pr_price.replace(',', ''))).toFixed(2)).toString();
                old_total_price_ = ((parseFloat(old_total_price.text().replace(',', '')) - parseFloat(string_pr_old_price.replace(',', ''))).toFixed(2)).toString();
            } else if (current_count == not_less_one && state_val == "1") {
                data_state = 0;
                total_price_ = ((parseFloat(total_price.text().replace(',', '')) - parseFloat(string_pr_price.replace(',', ''))).toFixed(2)).toString();
                old_total_price_ = ((parseFloat(old_total_price.text().replace(',', '')) - parseFloat(string_pr_old_price.replace(',', ''))).toFixed(2)).toString();
            }
        }
        return {
            current_count: current_count,
            data_state: data_state,
            total_price: total_price_,
            old_total_price: old_total_price_
        };
    }

    $(document).on("click", ".product-module-table .count_up, .product-module-table .count_down", function () {
        var current_price_block = $(".product-price-current span"),
            old_price_block = $(".product-price-old span"),
            pr_price = $(this).parents(".product__multiple-item").data("module-price"),
            pr_old_price = $(this).parents(".product__multiple-item").data("module-old-price"),
            module_old_price = $(this).parents(".product__multiple-item").find(".module-old__price span"),
            module_price = $(this).parents(".product__multiple-item").find(".module-current__price span"),
            state = $(this).parents(".product__multiple-item").attr("data-state");
        var result = calc_product($(this), current_price_block, old_price_block, pr_price, pr_old_price, state, not_less_one = 0);

        $(this).parents(".product__multiple-item").attr("data-state", result.data_state);
        current_price_block.text(result.total_price);
        old_price_block.text(result.old_total_price);
        module_old_price.text(parseFloat(parseFloat(pr_old_price.replace(',', '')) * result.current_count).toFixed(2));
        module_price.text(parseFloat(parseFloat(pr_price.replace(',', '')) * result.current_count).toFixed(2));
        $(".sticky-price-current span").text(result.total_price);
        $(".sticky-price-old span").text(result.old_total_price);
        credit_monthly_price();
        //credit_condition($(".credit_calc").val(), current_price_block.text());
    });

    $(document).on("click", ".pr-module-wrapper .count_up, .pr-module-wrapper .count_down", function () {
        var current_price_block = $(".product-price-current span"),
            old_price_block = $(".product-price-old span"),
            pr_price = $(".product-price-current").data("pr_current_price"),
            pr_old_price = $(".product-price-current").data("pr_old_price"),
            state = $(this).parent(".pr-module-wrapper").find(".count-input").val() === "1" ? 0 : 1;
        var result = calc_product($(this), current_price_block, old_price_block, pr_price, pr_old_price, state, not_less_one = 1);

        $(this).parents("tr").attr("data-state", result.data_state);
        current_price_block.text(result.total_price);
        old_price_block.text(result.old_total_price);
        $(".sticky-price-current span").text(result.total_price);
        $(".sticky-price-old span").text(result.old_total_price);
        credit_monthly_price();
        //credit_condition($(".credit_calc").val(), current_price_block.text());
    });

    $(document).on("click", ".cart-product-table .count_up, .cart-product-table .count_down", function () {
        var current_price_block = $(".cart-total-price"),
            old_price_block = $(".cart-total-old-price"),
            pr_price = $(this).parents(".pr-wrapper").data("module-price"),
            pr_old_price = $(this).parents(".pr-wrapper").data("module-old-price"),
            state,
            not_less__one = $(this).parents(".cart-product-table").hasClass("cart-sub-product") ? 0 : 1;
        const hasSubProduct = $(this).parents(".hasSubProduct");
        const isSubProduct = $(this).parents(".cart-sub-product");

        if (hasSubProduct.length && !isSubProduct.length) {
            if ($(this).hasClass("increase")) {
                $(this).parents(".hasSubProduct").find(".cart-sub-product .count-input").each(function(i, item) {
                    $(item).val(parseInt($(item).val()) + parseInt($(item).data("min-quantity")));
                })
            } else {
                $(this).parents(".hasSubProduct").find(".cart-sub-product .count-input").each(function(i, item) {
                    if (parseInt($(item).val()) - parseInt($(item).data("min-quantity")) > 0) {
                        $(item).val(parseInt($(item).val()) - parseInt($(item).data("min-quantity")));
                    }
                })
            }
        }

        if ($(this).parents(".cart-product-table").hasClass("cart-sub-product")) {
            state = $(this).parents(".pr-wrapper").find(".count-input").val() === "0" ? 0 : 1;
        } else if ($(this).parents(".pr-wrapper").find(".count-input").val() === "1") {
            state = 0;
        } else {
            state = 1;
        }

        var result = calc_product($(this), current_price_block, old_price_block, pr_price, pr_old_price, state, not_less_one = not_less__one);
        $(this).parents(".cart-product-table").attr("data-state", result.data_state);
        current_price_block.text(result.total_price);
        old_price_block.text(result.old_total_price);

        const cartToken = $(this).parents("form").find("input[type=hidden]");

        const countInputs = $(this).parents("form").find(".number.count-input");
        const countData = Array
            .from(countInputs)
            .filter(input => !!input.getAttribute("name"))
            .map(input => ({[input.getAttribute("name")]: input.value}))

        const data = new FormData()
        data.append(cartToken.attr("name"), cartToken.val())
        countData.forEach(d => data.append(
            Object.keys(d)[0],
            Object.values(d)[0]
        ))

        $.ajax({
            url: 'index.php?route=checkout/cart/edit',
            type: 'post',
            data: data,
            contentType: false,
            processData: false,
            beforeSend: function () {
                document.body.insertAdjacentHTML('afterbegin', `
                    <div class="loader-wrapper">
                        <div class="loader"></div>
                    <div>
                `);
            },
            success: function (json) {
                if (json['error']) {
                    if (json['error']['option']) {
                        for (i in json['error']['option']) {
                            var element = $('#input-option' + i.replace('_', '-'));

                            if (element.parent().hasClass('input-group')) {
                                element.parent().after('<div class="text-danger">' + json['error']['option'][i] + '</div>');
                            } else {
                                element.after('<div class="text-danger">' + json['error']['option'][i] + '</div>');
                            }
                        }
                    }

                    if (json['error']['sub']) {
                        if (json['error']['sub'][0].product_id) {
                            $('#sub_product_' + json['error']['sub'][0].product_id).after('<tr><td colspan="3" class="text-danger border-top-0">' + json['error']['sub'][0].error_message + '</tr>');
                        } else {
                            $('.product-modul-table').before('<div class="text-danger">' + json['error']['sub'][0].error_message + '</div>');
                        }
                    }

                    if (json['error']['recurring']) {
                        $('select[name=\'recurring_id\']').after('<div class="text-danger">' + json['error']['recurring'] + '</div>');
                    }

                    // Highlight any found errors
                    $('.text-danger').parent().addClass('has-error');
                }

                if (json['success']) {
                    new PNotify({
                        title: json['success'],
                        icon: 'icon-checkmark3',
                        type: 'success',
                        delay: 2000
                    });
                    $('.header-cart-product-count').text(json['total'].split(" ")[0]);
                    document.querySelector(".loader-wrapper").remove();
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
            }
        });
    });

    function gtag_report_conversion(url) {
        var callback = function () {
            if (typeof (url) != 'undefined') {

            }
        };

        gtag('event', 'conversion', {
            'send_to': 'AW-793698559/iwPdCLnP34ACEP_Bu_oC',
            'event_callback': callback
        });
        return false;
    }

    $('.add-to-cart').on('click', function (e) {
        e.preventDefault();
        var parent_product_id = $(this).parents(".product-add").find("input[name='parent_product_id']").val();
        var parent_product_count = 1;
        var pr_arr = [];

        gtag_report_conversion(window.location.href);

        if ($(this).parents(".product-add").find("input[name=sub_product_id]").length) {
            $(this).parents(".product-add").find("input[name=sub_product_id]").each(function (index, item) {
                var pr_item = {};
                var pr_id = $(this).val();
                pr_item = {
                    product_id: pr_id,
                    product_count: $(item).data("count") || 1
                };
                pr_arr.push(pr_item);
            });
        }

        var pr_object = {
            parent_product_id: parent_product_id,
            parent_product_count: parent_product_count,
            sub_product_info: pr_arr
        };

        $.ajax({
            url: 'index.php?route=checkout/cart/add',
            type: 'post',
            data: {cart_info: pr_object},
            dataType: 'json',
            beforeSend: function () {
                $('#button-cart').attr('disabled', true);
            },
            complete: function () {
                $('#button-cart').attr('disabled', false);
            },
            success: function (json) {
                $('.alert-dismissible, .text-danger').remove();
                $('.form-group').removeClass('has-error');

                if (json['error']) {
                    if (json['error']['option']) {
                        for (i in json['error']['option']) {
                            var element = $('#input-option' + i.replace('_', '-'));

                            if (element.parent().hasClass('input-group')) {
                                element.parent().after('<div class="text-danger">' + json['error']['option'][i] + '</div>');
                            } else {
                                element.after('<div class="text-danger">' + json['error']['option'][i] + '</div>');
                            }
                        }
                    }

                    if (json['error']['sub']) {
                        if (json['error']['sub'][0].product_id) {
                            $('#sub_product_' + json['error']['sub'][0].product_id).after('<tr><td colspan="3" class="text-danger border-top-0">' + json['error']['sub'][0].error_message + '</tr>');
                        } else {
                            $('.product-modul-table').before('<div class="text-danger">' + json['error']['sub'][0].error_message + '</div>');
                        }
                    }

                    if (json['error']['recurring']) {
                        $('select[name=\'recurring_id\']').after('<div class="text-danger">' + json['error']['recurring'] + '</div>');
                    }

                    // Highlight any found errors
                    $('.text-danger').parent().addClass('has-error');
                }

                if (json['success']) {
                    new PNotify({
                        title: json['success'],
                        icon: 'icon-checkmark3',
                        type: 'success',
                        delay: 2000
                    });
                    $('.header-cart-product-count').text(json['total'].split(" ")[0]);
                    $('html, body').animate({scrollTop: 0}, 'slow');
                    //
                    // location="index.php?route=checkout/cart";
                    $('.basket-wrapper').load('index.php?route=common/cart/info .basket-wrapper-content');
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
            }
        });
    });

    $('.category__grid-wrapper').on('click', function (e) {
        if (!$(e.target).hasClass("category-add-to-cart")) {
            return;
        }

        e.preventDefault();
        var parent_product_id = $(e.target).parents(".product-add").find("input[name='parent_product_id']").val();
        var parent_product_count = 1;
        var pr_arr = [];

        gtag_report_conversion(window.location.href);

        if ($(e.target).parents(".product-add").find("input[name=sub_product_id]").length) {
            $(e.target).parents(".product-add").find("input[name=sub_product_id]").each(function (index, item) {
                var pr_item = {};
                var pr_id = $(this).val();
                pr_item = {
                    product_id: pr_id,
                    product_count: $(item).data("count") || 1
                };
                pr_arr.push(pr_item);
            });
        }

        var pr_object = {
            parent_product_id: parent_product_id,
            parent_product_count: parent_product_count,
            sub_product_info: pr_arr
        };

        $.ajax({
            url: 'index.php?route=checkout/cart/add',
            type: 'post',
            data: {cart_info: pr_object},
            dataType: 'json',
            beforeSend: function () {
                $('#button-cart').attr('disabled', true);
            },
            complete: function () {
                $('#button-cart').attr('disabled', false);
            },
            success: function (json) {
                $('.alert-dismissible, .text-danger').remove();
                $('.form-group').removeClass('has-error');

                if (json['error']) {
                    if (json['error']['option']) {
                        for (i in json['error']['option']) {
                            var element = $('#input-option' + i.replace('_', '-'));

                            if (element.parent().hasClass('input-group')) {
                                element.parent().after('<div class="text-danger">' + json['error']['option'][i] + '</div>');
                            } else {
                                element.after('<div class="text-danger">' + json['error']['option'][i] + '</div>');
                            }
                        }
                    }

                    if (json['error']['sub']) {
                        if (json['error']['sub'][0].product_id) {
                            $('#sub_product_' + json['error']['sub'][0].product_id).after('<tr><td colspan="3" class="text-danger border-top-0">' + json['error']['sub'][0].error_message + '</tr>');
                        } else {
                            $('.product-modul-table').before('<div class="text-danger">' + json['error']['sub'][0].error_message + '</div>');
                        }
                    }

                    if (json['error']['recurring']) {
                        $('select[name=\'recurring_id\']').after('<div class="text-danger">' + json['error']['recurring'] + '</div>');
                    }

                    // Highlight any found errors
                    $('.text-danger').parent().addClass('has-error');
                }

                if (json['success']) {
                    new PNotify({
                        title: json['success'],
                        icon: 'icon-checkmark3',
                        type: 'success',
                        delay: 2000
                    });
                    $('.header-cart-product-count').text(json['total'].split(" ")[0]);
                    $('html, body').animate({scrollTop: 0}, 'slow');
                    //
                    // location="index.php?route=checkout/cart";
                    $('.basket-wrapper').load('index.php?route=common/cart/info .basket-wrapper-content');
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
            }
        });
    });


    /* Checkout */
    $(document).on("click", '.hire-purchase-table tbody tr', function () {
        var $this_radio = $(this).find("input[type=radio]");
        $this_radio.prop('checked', $this_radio.prop('checked') === 'false' ? 'true' : 'false');
    });

    $(document).on("click", "#civilServant", function(e) {
        $("[name=credit_info_fincode]").attr("disabled", $(this).prop("checked"));
        $("[name=credit_info_fincode]").attr("readonly", $(this).prop("checked"));
        $("[name=credit_info_personal]").attr("disabled", $(this).prop("checked"));
        $("[name=credit_info_personal]").attr("readonly", $(this).prop("checked"));
    });

    $(document).on("click", ".payment_method", function () {
        $('.hire-purchase-table tbody tr').find("input[type=radio]").each(function () {
            $(this).prop('checked', false);
        });
        if ($(this).hasClass("hire-purchase_method")) {
            $(".sub-block").hide();
            $(".hire-purchase-option-wrapper").show();
        } else if ($(this).hasClass("credit_method")) {
            $(".sub-block").hide();
            $(".credit-condition-wrapper").show();
        } else {
            $(".sub-block").hide();
        }
    });

    $(document).on("click", ".bank-cart-item", function () {
        $('.tab-pane tbody tr').find("input[type=radio]").each(function () {
            $(this).prop('checked', false);
        });

        var payment_method = $(this).attr("href").substring(1);
        $("input[name='payment_method']").val(payment_method);

    });

    $(".btn-call-form").on("click", function () {

        var book_id = $(this).parent().data('id');
        var name = $("input[name=call-form-name]").val(),
            number = $("input[name=call-form-number]").val(),
            city = $("select[name=call-form-city]").val(),
            interest = $("input[name=call-form-interest]").val();

        if (name != '' && number != '' && interest != '') {
            $.ajax({
                type: "POST",
                //contentType: "application/json; charset=utf-8",
                url: "https://embawood.az/index.php?route=information/videochat",
                data: {"name": name, "number": number, "interest": interest, "city": city},
                beforeSend: function () {
                    // setting a timeout
                    $(".modal-dialog-centered .modal-body")
                        .html("<div class='row'>\n" +
                            "     <div class='col-lg-9'>\n" +
                            "        <h4 class='success-message'>Gözləyin...</h4>\n" +
                            "     </div>\n" +
                            "  </div>");
                },
                success: function (result) {
                    $(".modal-dialog-centered .modal-body")
                        .html("<div class='row'>\n" +
                            "     <div class='col-lg-9'>\n" +
                            "        <h4 class='success-message'>Məlumatlarınız uğurla göndərildi, sizinlə tezliklə əlaqə yaradılacaq.</h4>\n" +
                            "     </div>\n" +
                            "  </div>");
                    setTimeout(function () {
                        $('.videoCallModal').modal('hide');
                    }, 5000);

                }
            })
        } else {
            $(".modal-dialog-centered .modal-body .message").html('<div class="alert alert-danger" role="alert">\n' +
                '  Məlumatları tam doldurduğunuzu nəzərdən keçirin zəhmət olmasa.\n' +
                '</div>')
        }

    })

    $(".submit-fast-order").click(function () {
        const number = $("input[name=fast_order]").val();

        if (number.trim().length) {
            $.ajax({
                url: 'index.php?route=information/telefon',
                type: 'post',
                data: {"number": number},
                beforeSend: function () {
                    $(".submit-fast-order").attr('disabled', true);
                },
                complete: function () {
                    $(".submit-fast-order").attr('disabled', false);
                },
                success: function (json) {
                    $("#fastOrderModal .modal-body").prepend('<div class="alert alert-success alert-dismissible"><i class="fa fa-check-circle"></i>Nömrəniz qeydə alındı, sizinlə ən qısa zamanda əlaqə saxlanılacaq.<button type="button" class="btn-close" data-bs-dismiss="alert"></button></div>')
                    setTimeout(() => {
                        $("#fastOrderModal").modal('hide');
                    }, 1500)
                    $(".error-mobile-input").addClass("hide");
                },
                error: function (err) {
                    console.log(err);
                }
            });
        } else {
            $(".error-mobile-input").removeClass("hide");
        }

    });

    $('#fastOrderModal').on('hidden.bs.modal', function (e) {
        $("#fastOrderModal .modal-body .alert-dismissible").remove();
        $("input[name=fast_order]").val('');
    });

    /* Stores */
    //nermin
    // $(document).on("change", "#city-select", function () {
    //     var city=$(this).val();
    //     console.log(city);
    //     $.ajax({
    //         url: '/catalog/view/theme/embawood/js/city.json',
    //         dataType: 'json',
    //         success: function(data) {
    //             $(".shop_address_wrapper").html("");
    //             console.log(data[city]);
    //             data[city]?.map(function (el, index) {
    //                 $(".shop_address_wrapper").append('<div class="col-lg-4 col-md-6 mb-2">\n' +
    //                     '                        <a href="' + el.src + '" target="_blank" class="mb-3">\n' +
    //                     '                            <div class="shop">\n' +
    //                     '                                <p class="shop-name">'+ el.name +'</p>\n' +
    //                     '                                <span class="shop-address mb-1">'+ el.address +'</span>\n' +
    //                     '                                <span class="shop-phone"> '+el.phone.join(",")+'</span>\n' +
    //                     '                            </div>\n' +
    //                     '                        </a>\n' +
    //                     '                    </div>');
    //             });
    //         }
    //     })
    // });
//nermin

    //edcode
    $('#city-select, #city-select-mobile').change(function () {
        var val = $(this).val();
        var lastThreeChars = val.substring(val.length - 3);
        $('.city').hide();
        $('div[class$="' + lastThreeChars + '"]').show();
    });
    $('.city').hide();
    $('div[class$="22"]').show();


    //edcode

    window.addEventListener('replaceState', (a) => console.log(a))

    $(".announcement-bar__lang-selected").click(function (e) {
        e.stopPropagation();
        $(this).next().toggleClass("show");
    });
    $("body").click(function () {
        if ($(".announcement-bar__lang-selected").next().hasClass("show")) {
            $(".announcement-bar__lang-selected").next().removeClass("show");
        }
    })

    const mainBannerSlider = new Swiper(".main-banner-slider", {
        loop: true,
        pagination: {
            el: ".swiper-pagination",
        },
        navigation: {
            nextEl: ".main-banner-slider-container .swiper-button-next",
            prevEl: ".main-banner-slider-container .swiper-button-prev",
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });

    const amazingFurnitureSliderFeatured = new Swiper(".amazing-furniture-slider-featured", {
        slidesPerView: 3,
        spaceBetween: 25,
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 25
            }
        },
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next-featured",
            prevEl: ".swiper-button-prev-featured",
        },
        pagination: {
            el: ".amazing-furniture-featured-pagination",
        }
    });

    const amazingFurnitureSliderSales = new Swiper(".amazing-furniture-slider-sales", {
        slidesPerView: 3,
        spaceBetween: 25,
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 25
            }
        },
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next-sales",
            prevEl: ".swiper-button-prev-sales",
        },
        pagination: {
            el: ".amazing-furniture-sales-pagination",
        }
    });

    const amazingFurnitureSliderViewed = new Swiper(".amazing-furniture-slider-viewed", {
        slidesPerView: 3,
        spaceBetween: 25,
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 25
            }
        },
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next-viewed",
            prevEl: ".swiper-button-prev-viewed",
        },
        pagination: {
            el: ".amazing-furniture-viewed-pagination",
        }
    });

    document.querySelectorAll(".drawer__item").forEach(item => {
        item.querySelector(".drawer__item-remove").addEventListener("click", e => {
            e.preventDefault();
            const { value } = item.querySelector("input[type=hidden]");
            $.ajax({
                url: `index.php?route=account/wishlist&remove=${value}`,
                type: 'post',
                success: function (data, status, response) {
                    if (response.status === 200) {
                        sessionStorage.setItem("openDrawer", JSON.stringify(true))
                        window.location.reload();
                    }
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
                }
            });
        })
    })

    document.querySelectorAll(".announcement-bar__mobile-hamburger, .announcement-bar__mobile-close").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelector(".announcement-bar__mobile-menu").classList.toggle("open");
        })
    })

    // FILTER TABS FOR SLIDER SECTIONS (featured, sales, etc.)
    // const filterTabs = document.querySelectorAll(".filter-tab li")
    // filterTabs.forEach(tab => tab.addEventListener("click", () => {
    //     filterTabs.forEach(tab => tab.classList.remove("active"))
    //     tab.classList.add("active")
    // }))

    $('.add-single-product').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var product_id = $(this).parents(".product__multiple-item--desc-bottom").find("input[name='product_id']").val();
        var product_count = $(this).parents(".product__multiple-item--desc-bottom").find(".count-input").val();

        gtag_report_conversion(window.location.href);

        var pr_object = {
            parent_product_id: product_id,
            parent_product_count: product_count
        };

        $.ajax({
            url: 'index.php?route=checkout/cart/add',
            type: 'post',
            data: {cart_info: pr_object},
            dataType: 'json',
            beforeSend: function () {
                $('#button-cart').attr('disabled', true);
            },
            complete: function () {
                $('#button-cart').attr('disabled', false);
            },
            success: function (json) {
                $('.alert-dismissible, .text-danger').remove();
                $('.form-group').removeClass('has-error');

                if (json['error']) {
                    if (json['error']['option']) {
                        for (i in json['error']['option']) {
                            var element = $('#input-option' + i.replace('_', '-'));

                            if (element.parent().hasClass('input-group')) {
                                element.parent().after('<div class="text-danger">' + json['error']['option'][i] + '</div>');
                            } else {
                                element.after('<div class="text-danger">' + json['error']['option'][i] + '</div>');
                            }
                        }
                    }

                    if (json['error']['sub']) {
                        if (json['error']['sub'][0].product_id) {
                            $('#sub_product_' + json['error']['sub'][0].product_id).after('<tr><td colspan="3" class="text-danger border-top-0">' + json['error']['sub'][0].error_message + '</tr>');
                        } else {
                            $('.product-modul-table').before('<div class="text-danger">' + json['error']['sub'][0].error_message + '</div>');
                        }
                    }

                    if (json['error']['recurring']) {
                        $('select[name=\'recurring_id\']').after('<div class="text-danger">' + json['error']['recurring'] + '</div>');
                    }

                    // Highlight any found errors
                    $('.text-danger').parent().addClass('has-error');
                }

                if (json['success']) {
                    new PNotify({
                        title: json['success'],
                        icon: 'icon-checkmark3',
                        type: 'success',
                        delay: 2000
                    });
                    $('.header-cart-product-count').text(json['total'].split(" ")[0]);
                    $('html, body').animate({scrollTop: 0}, 'slow');
                    //
                    // location="index.php?route=checkout/cart";
                    $('.basket-wrapper').load('index.php?route=common/cart/info .basket-wrapper-content');
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
            }
        });
    });
});

window.addEventListener("DOMContentLoaded", () => {
    if (JSON.parse(sessionStorage.getItem("openDrawer"))) {
        const drawerWishlist = new bootstrap.Offcanvas("#offcanvasWishlist");
        drawerWishlist.show();
        sessionStorage.removeItem("openDrawer");
    }
})