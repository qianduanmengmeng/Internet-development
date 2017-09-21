/**
 * 表单提交
 * @author 高世岑
 */

;(function($){
    var zixunTime = true;
    var feedbackTime = true;
    var paixunTime = true;
    var zeroTime = true;
	var form = {
		init : function(){},
		// 免费咨询表单提交
		marketPaySubmit:function(obj){
			var form = $(obj).parents('form');
	    	var company = form.find("input[name=company]");
	    	var mycall = form.find("input[name=mobile]");
			var gp = form.find("input[name=province]");
			var gt = form.find("input[name=city]");
			var gd = form.find("input[name=district]");
			var name = form.find("input[name=truename]");
            var yzm = form.find("input[name=yzm]");
			var email = form.find("input[name=email]");

			if(!validate.checkCity(gp.val(), gt.val(), gd.val()) || mycall.val() == '' || (name.val() == '' && name.length > 0)){
				alert('信息不能为空!');return false;
			}
			if(!validate.checkMobile(mycall.val()) ){
				alert('手机号码格式有误');
				return false;
			}
			if(!validate.checkEmail(email.val()) && email.length > 0){
				alert('email格式有误');
				return false;
			}
			return form.submit();
		},
		zixunSubmit : function(obj, form){
            var method = form;
            if( !zixunTime ){
                alert('已提交，不需要重复提交！'); return;
            }
            var admin_add_value = $(obj).attr('value');
            if( !admin_add_value ){
                admin_add_value = $('#admin_add_value').val();
            }else{
                $('#admin_add_value').val(admin_add_value);
            }
			var admin_add = $('#admin_add').val();
	    	var form = $(obj).parents('form');
	    	var company = form.find("input[name=company]");
            var gd = form.find("input[name=district]");
	    	var ischeckMobile = form.find("input[name=ischeckMobile]");
	    	var yzm = form.find("input[name=yzm]");
	    	var mycall = form.find("input[name=mobile]");
			var gp = form.find("input[name=province]");
			var gt = form.find("input[name=city]");
			var name = form.find("input[name=truename]");
			var sex = form.find("input[name='sex']:checked");
			var email = form.find("input[name=email]");
			var mcode = form.find("input[name=mcode]");
			var indu = form.find("input[name=indu]");
			var client = form.find("input[name=client]");
            var brand = form.find("input[name=brand]");  // 车万家行业汽车品牌
            var agree = form.find("input[name=agree]");  // 车万家行业使用协议
			$('#hidden_value').val(admin_add);
			if(!validate.checkCity(gp.val(), gt.val(), gd.val()) || mycall.val() == '' || (name.val() == '' && name.length > 0) || (sex.val() == '' && sex.length > 0) || ( mcode.val() == '' && mcode.length > 0)){
                alert('信息不能为空!');return;
			}
			if(!validate.checkMobile(mycall.val()) ){
				alert('手机号码格式有误');
				return;
			}
			
			if(!validate.checkEmail(email.val()) && email.length > 0){
				alert('email格式有误');
				return;
			}
            if(brand.val() == '' && brand.length > 0){
                var brands = '未提供';
            }else{
                var brands = brand.val();
            }
            if( agree.length > 0 && agree.attr('checked') != 'checked' ){
                alert('您还未同意《车万家行业方案使用协议》');return;
            }
            
			var data = {
			   company:company.val(),
			   truename:name.val(),
			   province:gp.val(),
			   city:gt.val(),
               district:gd.val(),
			   sex:sex.val(),
			   mobile:mycall.val(),
			   email:email.val(),
			   admin_add:admin_add,
			   mcode:mcode.val(),
               brand:brands,
               point:admin_add_value
			};
			if(ischeckMobile.val() == '1' ||  yzm.length > 0){
				data.ischeckMobile = 1;
				data.yzm = yzm.val();
				if(yzm.val() == '' || yzm.val() == '输入验证码'){
					alert('请填写验证码');
					return ;
				}
			}
			// 阻止提交
            zixunTime = false;
			if(client.length > 0){data.client = client.val();}
			if(indu.length > 0){data.indu = indu.val();}
			$.getJSON(form.attr('action') + '&callback=?',data,function(data){
				if (data.status != '1'){
                    // 允许提交
                    zixunTime = true;
                    alert(data.info);return;
                }
				if($('#is_vip').val() == '1'){
					ZQDL.cookie.set('case_phone',mycall.val(),{expires:3600*24*360});
					window.location.href="/case";
					return false;
				}
				form[0].reset();				
				gp.val("请选择省份");
				gt.val("请选择城市");
				gd.val('请选择区/县');
				if(form.find("input[name=is_pop]").val() == 1){
					form[0].reset();	                
					$(".zx_pop").hide();
					if(typeof gp != 'undefined')gp.val('请选择省份');
					if(typeof gt != 'undefined')gt.val('请选择城市');
					if(typeof gd != 'undefined')gd.val('请选择区/县');
				}
                method.submitCount();
		    	alert('提交成功');
                // 设置过期时间，一分钟之内不允许提交
                setTimeout(function(){
                    zixunTime = true;
                },60000);
			},'json');
		},
		// 意见反馈表单提交
		feedbackSubmit:function(obj){
            if( !feedbackTime ){
                alert('已提交，不需要重复提交！'); return;
            }
	    	var form = $(obj).parents('form');
	    	var company = form.find("input[name=title]");
	    	var mycall = form.find("input[name=phone]");
			var gp = form.find("input[name=province]");
			var gt = form.find("input[name=city]");
            var gd = form.find("input[name=district]");
			var name = form.find("input[name=truename]");
			var sex = form.find("input[name='sex']:checked");
			var email = form.find("input[name=email]");
			var content = form.find("textarea[name=content]");
			
			if(content.val() == '' || !validate.checkCity(gp.val(), gt.val(), gd.val()) || mycall.val() == '' || name.val() == '' || sex.val() == '' || email.val() == '' ){
				alert('信息不能为空!');return;
			}
			if(!validate.checkMobile(mycall.val())){
				alert('手机号码格式有误');
				return;
			}
			if(!validate.checkEmail(email.val())){
				alert('email格式有误');
				return;
			}
            // 阻止提交
            feedbackTime = false;
            // 提交表单
            $(this).ajaxSubmit();
		},
		// 意见反馈表单提交
		caseVipSubmit:function(obj){
			//var admin_add = $('#admin_add').val();	
	    	var form = $(obj).parents('form');
	    	var mycall = form.find("input[name=mobile]");
			var gp = form.find("input[name=province]");
			var gt = form.find("input[name=city]");
            var gd = form.find("input[name=district]");
			var email = form.find("input[name=email]");
			var indu = form.find("textarea[name=indu]");
			
			if(indu.val() == '' || gp.val() == '' || gt.val() == '' || gp.val()=='请选择省份' || gt.val() == '请选择城市' ||  mycall.val() == ''){
				alert('信息不能为空!');return;
			}
			if(!validate.checkMobile(mycall.val())){
				alert('手机号码格式有误');
				return;
			}
			if(email.val() != '' && !validate.checkEmail(email.val())){
				alert('email格式有误');
				return;
			}
			var data = form.serialize();
			data += "&admin_add="+$('#admin_add').val();
			$.post(form.attr('action'),data,function(data){
				if (data.status != '1'){
                   	alert(data.info);return;
  				}
				ZQDL.cookie.set('case_phone',mycall.val(),{expires:3600*24*360});
				gp.val("请选择省份");gt.val("请选择城市");gd.val('请选择区/县');
				mycall.val("");
				form.find("input[name=company]").val(""); 
				email.val("");
				indu.val('');
				window.location.href="/case"
			},'json');
		},

        // 客户培训提交
        paixunSubmit:function(obj){
            if( !paixunTime ){
                alert('已提交，不需要重复提交！');return;
            }
            var form = $(obj).parents('form');
            var company = form.find("input[name=title]");
            var mycall = form.find("input[name=mobile]");
            var gp = form.find("input[name=province]");
            var gt = form.find("input[name=city]");
            var gd = form.find("input[name=district]");
            var email = form.find("input[name=email]");
            var number = form.find("input[name=number]");
            var name = form.find("input[name=truename]");
            if(!validate.checkCity(gp.val(), gt.val(), gd.val()) || mycall.val() == '' || name.val() == '' || email.val() == '' || number.val() == ''){
                alert('信息不能为空!');return;
            }
            if(!validate.checkMobile(mycall.val())){
                alert('手机号码格式有误');
                return;
            }
            if(email.val() != '' && !validate.checkEmail(email.val())){
                alert('email格式有误');
                return;
            }
            // 阻止提交
            paixunTime = false;
            $.post(form.attr('action'), form.serialize(),function(data){
                if (data.status != '1'){
                    // 允许提交
                    paixunTime = true;
                    alert(data.info);return;
                }
                paixunTime = false;
                setTimeout(function(){
                    paixunTime = true;
                },60000);
                alert(data.info);
                gp.val('请选择省份'); gt.val('请选择城市');
                company.val(''); mycall.val('');
                email.val(''); number.val('');
                name.val('');gd.val('请选择区/县');
            });
        },
        // 0元体验咨询表单提交
		zeroSubmit : function(obj, form){
            if( !zeroTime ){
                alert('已提交，不需要重复提交！');return;
            }
            var method = form;
			var admin_add = $('#admin_add').val();
            var admin_add_value = $('#admin_add_value').val();
	    	var form = $(obj).parents('form');
	    	var mycall = form.find("input[name=mobile]");
			var gp = form.find("input[name=province]");
			var gt = form.find("input[name=city]");
            var gd = form.find("input[name=district]");
			var name = form.find("input[name=truename]");
			$('#hidden_value').val(admin_add);
			
			if(!validate.checkCity(gp.val(), gt.val(), gd.val()) ||  mycall.val() == '' || name.val() == ''){
				alert('信息不能为空!');return;
			}
			if(!validate.checkMobile(mycall.val())){
				alert('手机号码格式有误');
				return;
			}
            // 阻止提交
            zeroTime = false;
			var data = {
			   truename:name.val(),
			   province:gp.val(),
			   city:gt.val(),
               district:gd.val(),
			   mobile:mycall.val(),
			   admin_add:admin_add,
               point:admin_add_value
			};
			
			$.post(form.attr('action'),data,function(data){
				if (data.status != '1'){
                    // 允许提交
                    zeroTime = true;
                    alert(data.info);return;
                }
                setTimeout(function(){
                    zeroTime = true;
                },60000);
				if($('#is_vip').val() == '1'){
					ZQDL.cookie.set('case_phone',mycall.val(),{expires:3600*24*360});
					window.location.href="/case";
					return false;
				}
				gp.val("请选择省份");gt.val("请选择城市");mycall.val("");name.val("");gd.val('请选择区/县');
				if(form.find("input[name=is_pop]").val() == 1){
					//$(".dzsw-pop").hide();
					$(".zero_pop").hide();
				}
                method.submitCount();
		    	alert('提交成功');
			},'json');
		},
        tqCount : function(obj){
            var className = $(obj).attr('clickadd');
            var ch = $('#ch').val();
            var firstid = $('#firstid').val();
            var admin_add = $('#admin_add').val();
            var url = document.location.href;
            var ip = ZQDL.position.getIp();
            if(!ip) ip = '';
            var data = {admin_add : admin_add,
                class_name : className,
                firstid : firstid,
                url : url,
                ch : ch,
                ip : ip
            }
            $.post('/count/countTQ',data,function(data){

            });
        },
        submitCount: function (data) {
            var admin_add_value = $('#admin_add_value').val();
            var admin_add = $('#admin_add').val();
            var ch = $('#ch').val();
            var firstid = $('#firstid').val();
            var url = document.location.href;
            var ip = ZQDL.position.getIp();
            if(!ip) ip = '';
            var data = {admin_add : admin_add,
                point : admin_add_value,
                firstid : firstid,
                url : url,
                ch : ch,
                ip : ip
            }
            $.post('/count/countSubmit',data,function(data){

            });
        }

	};


	$('.marketPaySubmit').on('click',function(){form.marketPaySubmit(this);});
	$('.zixunsubmit').on('click',function(){form.zixunSubmit(this,form);});
	// $('.feedbackSubmit').on('click',function(){form.feedbackSubmit(this);});
	$('.submitCaseVip').on('click',function(){form.caseVipSubmit(this);});
	$('.paixunSubmit').on('click',function(){form.paixunSubmit(this);});
	$('.zerosubmit').on('click',function(){form.zeroSubmit(this, form);});
    $('a[clickcount="true"]').live('click', function(){form.tqCount(this);});

})(jQuery);	

/**
 * 表单验证
 */
var validate = {
	checkEmail : function(email){
		var email_reg = /^[a-z0-9]+([._-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
        if(email == '' || email == null) return true;
		if(!email_reg.test(email))return false;
		return true;
	},
	checkMobile : function(mobile){
		var mobile_reg = /^0?(13|15|17|18|14)[0-9]{9}$/;
		if(!mobile_reg.test(mobile))return false;
		return true;
	},
	notempty : function (val){
		if(val != '') return true;
		return false;
	},
    checkCity : function(gp, gt, gd){
        if(gp == '请选择省份' || gp == '') return false;
        for(var p in provincesdata){
            if(p == gp){
                if(!provincesdata[p]['sub']) {
                    if(gp == gt && gp == gd) return true;
                        return false;
                }
                if(gt == '请选择城市' || gt == '') return false;
                for(var t in provincesdata[p]['sub']){
                    if(t == gt){
                        if(!provincesdata[p]['sub'][t]['sub']) {
                            if(gt == gd) return true;
                            return false;
                        }
                        if(gd == '请选择区/县' || gd == '') return false;
                        return true;
                    }
                }
            }
        }
    }
}