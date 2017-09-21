(function($){
    $.fn.cityselect = function(options){

        var defaults = {
            provinceClass:'province', //省份外框样式
            cityClass:'city', //城市外框样式
            focusClass:'on', // 高亮样式
            districtClass:'district'
        }
        var settings = $.extend({}, defaults, options || {});
        var pc = settings.provinceClass, cc = settings.cityClass, fc = settings.focusClass, dc = settings.districtClass;
        var provHtml = getProvince(pc);
        var that = $(this), citys = settings.cityNode, districts = settings.districtNode;
        that.parent().find('.'+pc).remove();
        that.parent().append(provHtml);
        $(this).each(function(){
            that.click(function(e){
                $(this).siblings().show();
                citys.siblings().hide();
                districts.siblings().hide();
                e.stopPropagation();
            });
            that.parent().find('li').hover(function(e){
                $(this).toggleClass(fc);
                e.stopPropagation();
            });
            that.parent().find('li').click(function(e){
                var val = $(this).text();
                that.val(val);
                citys.val('请选择城市');
                districts.val('请选择区/县');
                districts.parent().find('.'+dc).remove();
                that.siblings().hide();
                var cityHhtml = getCitys(val, cc);
                citys.siblings().hide();
                citys.parent().find('.'+cc).remove();
                citys.parent().append(cityHhtml);
                e.stopPropagation();
            });
            citys.click(function(e){
                $(this).siblings().show();
                that.siblings().hide();
                districts.siblings().hide();
                e.stopPropagation();
            });
            citys.parent().delegate('li', 'hover', function(e){
                $(this).toggleClass(fc);
                e.stopPropagation();
            });
            citys.parent().delegate('li', 'click', function(e){
                var val = $(this).text();
                var pval = that.val();
                citys.val(val);
                districts.val('请选择区/县');
                citys.siblings().hide();
                var districtsHtml = getDistricts(pval, val, dc);
                districts.parent().find('.'+dc).remove();
                districts.parent().append(districtsHtml);
                e.stopPropagation();
            });
            districts.click(function (e) {
                $(this).siblings().show();
                that.siblings().hide();
                citys.siblings().hide();
                e.stopPropagation();
            });
            districts.parent().delegate('li', 'hover', function(e){
                $(this).toggleClass(fc);
                e.stopPropagation();
            });
            districts.parent().delegate('li', 'click', function(e){
                var val = $(this).text();
                districts.val(val);
                districts.siblings().hide();
                e.stopPropagation();
            });
        });
        $(document).click(function(){
            citys.siblings().hide();
            that.siblings().hide();
        });
        that.setPosition(options);
    };

    $.fn.setPosition = function(options){
        var defaults = {
            provinceClass:'province', //省份外框样式
            cityClass:'city', //城市外框样式
            focusClass:'on', // 高亮样式
            districtClass:'district'
        }
        var settings = $.extend({}, defaults, options || {});
        var cc = settings.cityClass, fc = settings.focusClass, dc = settings.districtClass;
        var that = $(this), citys = settings.cityNode, districts = settings.districtNode;
        var position = ZQDL.position.getCity();
        var res = getInf(position.province, position.district);
        if(res.province && res.city && res.district){
            $(this).each(function(){
                // 填充省
                that.val(res.province);
                // 填充市
                var cityHtml = getCitys(res.province, cc);
                citys.val(res.city);
                citys.parent().find('.'+cc).remove();
                citys.parent().append(cityHtml);
                // 填充区
                districts.val(res.district);
                var districtHtml = getDistricts(res.province, res.city, dc);
                districts.parent().find('.'+dc).remove();
                districts.parent().append(districtHtml);
            });
        }
    };
    function getProvince(pc){
        var html = '<ul calss="'+pc+'" style="display:none;">';
        $.each(provincesdata,function(i){
            html += "<li>" + i + "</li>";
        });
        html += '</ul>';
        return html;
    }

    function getCitys(val, cc){
        var html = '<ul class="'+cc+'" style="display:none;">';
        if(provincesdata[val]['sub']) {
            $.each(provincesdata[val]['sub'],function(i){
                html += "<li>" + i + "</li>";
            });
        }else{
            html += "<li>" + val + "</li>";
        }
        html += '</ul>';
        return html;
    }

    function getDistricts(pval, val, dc){
        var html = '<ul class="'+dc+'" style="display:none;">';
        if(provincesdata[pval]['sub']) {
            if(provincesdata[pval]['sub'][val]['sub']){
                $.each(provincesdata[pval]['sub'][val]['sub'],function(i){
                    html += "<li>" + i + "</li>";
                });
            }else{
                html += "<li>" + val + "</li>";
            }
        }else{
            html += "<li>" + val + "</li>";
        }
        html += '</ul>';
        return html;
    }

    function getInf(pv, dv){
        var res = {};
        res['province'] = res['city'] = res['district'] = '';
        if(!provincesdata[pv]){
            return res;
        }
        for(var c in provincesdata[pv]['sub']){
            for(var d in provincesdata[pv]['sub'][c]['sub']){
                if(dv == d){
                    res['province'] = pv;
                    res['city'] = c;
                    res['district'] = d;
                }
            }
        }
        return res;
    }
})(jQuery);