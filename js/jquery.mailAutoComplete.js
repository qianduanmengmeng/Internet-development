(function($) {
    $.fn.mailAutoComplete = function(options) {
        var defaults = {
            className: "emailist",
            email: ["qq.com","163.com","126.com","sina.com","sohu.com","yeah.net","21cn.com","139.com","189.com"], //邮件数组
            zIndex: 11
        };
        // 最终参数
        var params = $.extend({}, defaults, options || {});

        // 是否现代浏览器
        var isModern = typeof window.screenX === "number", visibility = "visibility";
        // 键值与关键字
        var key = {
            "up": 38,
            "down": 40,
            "enter": 13,
            "esc": 27,
            "tab": 9
        };
        // 组装HTML的方法
        var fnEmailList = function(input) {
            var htmlEmailList = '', arrValue = input.value.split("@"), arrEmailNew = [];
            if(/@/.test(input.value)) {
                $.each (params.email, function (index, email) {
                    if (arrValue.length !== 2 || arrValue[1] === "" || email.indexOf (arrValue[1].toLowerCase ()) === 0) {
                        arrEmailNew.push (email);
                    }
                });
                $.each (arrEmailNew, function (index, email) {
                    htmlEmailList = htmlEmailList + '<li' + (input.indexSelected === index ? ' class="on"' : '') + '>' + arrValue[0] + "@" + email + '</li>';
                });
            }
            return htmlEmailList;
        };
        // 显示还是隐藏
        var fnEmailVisible = function(ul, isIndexChange) {
            var value = $.trim(this.value), htmlList = '';
            if (value === "" || (htmlList = fnEmailList(this)) === "") {
                ul.css(visibility, "hidden");
            } else {
                isIndexChange && (this.indexSelected = -1);
                ul.css(visibility, "visible").html(htmlList);
            }
        };

        return $(this).each(function() {
            this.indexSelected = -1;
            // 列表容器创建
            var element = this;
            var eleUl = $('<ul></ul>').css({
                position: "absolute",
                width: params.width?params.width:element.offsetWidth,
                visibility: "hidden",
                zIndex: params.zIndex,
                maxHeight: '150px',
                overflowY:'auto',
                marginTop: '40px',
                marginLeft:params.marginLeft
            }).addClass(params.className).bind("click", function(e) {
                var target = e && e.target;
                if (target && target.tagName.toLowerCase() === "li") {
                    $(element).val(target.innerHTML).trigger("input");
                    $(this).css(visibility, "hidden");
                    element.focus(); // add on 2013-11-20
                }
            });
            $(this).before(eleUl);
            // IE6的宽度
            if (!window.XMLHttpRequest) { eleUl.width(element.offsetWidth - 2); }

            // 不同浏览器的不同事件
            isModern? $(this).bind("input", function() {
                fnEmailVisible.call(this, eleUl, true);
            }): element.attachEvent("onpropertychange", function(e) {
                if (e.propertyName !== "value") return;
                fnEmailVisible.call(element, eleUl, true);
            });

            $(document).bind({
                "click": function(e) {
                    var target = e && e.target, htmlList = '';
                    if (target == element && element.value && (htmlList = fnEmailList(element, params.email))) {
                        eleUl.css(visibility, "visible").html(htmlList);
                    } else if (target != eleUl.get(0) && target.parentNode != eleUl.get(0)) {
                        eleUl.css(visibility, "hidden");
                    }
                }
            });
        });
    };
})(jQuery);