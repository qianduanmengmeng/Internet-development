/**
 * ���ύ
 * @author �����
 */

;(function($){
    var zixunTime = true;
    var feedbackTime = true;
    var paixunTime = true;
    var zeroTime = true;
	var form = {
		init : function(){},
		// �����ѯ���ύ
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
				alert('��Ϣ����Ϊ��!');return false;
			}
			if(!validate.checkMobile(mycall.val()) ){
				alert('�ֻ������ʽ����');
				return false;
			}
			if(!validate.checkEmail(email.val()) && email.length > 0){
				alert('email��ʽ����');
				return false;
			}
			return form.submit();
		},
		zixunSubmit : function(obj, form){
            var method = form;
            if( !zixunTime ){
                alert('���ύ������Ҫ�ظ��ύ��'); return;
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
            var brand = form.find("input[name=brand]");  // �������ҵ����Ʒ��
            var agree = form.find("input[name=agree]");  // �������ҵʹ��Э��
			$('#hidden_value').val(admin_add);
			if(!validate.checkCity(gp.val(), gt.val(), gd.val()) || mycall.val() == '' || (name.val() == '' && name.length > 0) || (sex.val() == '' && sex.length > 0) || ( mcode.val() == '' && mcode.length > 0)){
                alert('��Ϣ����Ϊ��!');return;
			}
			if(!validate.checkMobile(mycall.val()) ){
				alert('�ֻ������ʽ����');
				return;
			}
			
			if(!validate.checkEmail(email.val()) && email.length > 0){
				alert('email��ʽ����');
				return;
			}
            if(brand.val() == '' && brand.length > 0){
                var brands = 'δ�ṩ';
            }else{
                var brands = brand.val();
            }
            if( agree.length > 0 && agree.attr('checked') != 'checked' ){
                alert('����δͬ�⡶�������ҵ����ʹ��Э�顷');return;
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
				if(yzm.val() == '' || yzm.val() == '������֤��'){
					alert('����д��֤��');
					return ;
				}
			}
			// ��ֹ�ύ
            zixunTime = false;
			if(client.length > 0){data.client = client.val();}
			if(indu.length > 0){data.indu = indu.val();}
			$.getJSON(form.attr('action') + '&callback=?',data,function(data){
				if (data.status != '1'){
                    // �����ύ
                    zixunTime = true;
                    alert(data.info);return;
                }
				if($('#is_vip').val() == '1'){
					ZQDL.cookie.set('case_phone',mycall.val(),{expires:3600*24*360});
					window.location.href="/case";
					return false;
				}
				form[0].reset();				
				gp.val("��ѡ��ʡ��");
				gt.val("��ѡ�����");
				gd.val('��ѡ����/��');
				if(form.find("input[name=is_pop]").val() == 1){
					form[0].reset();	                
					$(".zx_pop").hide();
					if(typeof gp != 'undefined')gp.val('��ѡ��ʡ��');
					if(typeof gt != 'undefined')gt.val('��ѡ�����');
					if(typeof gd != 'undefined')gd.val('��ѡ����/��');
				}
                method.submitCount();
		    	alert('�ύ�ɹ�');
                // ���ù���ʱ�䣬һ����֮�ڲ������ύ
                setTimeout(function(){
                    zixunTime = true;
                },60000);
			},'json');
		},
		// ����������ύ
		feedbackSubmit:function(obj){
            if( !feedbackTime ){
                alert('���ύ������Ҫ�ظ��ύ��'); return;
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
				alert('��Ϣ����Ϊ��!');return;
			}
			if(!validate.checkMobile(mycall.val())){
				alert('�ֻ������ʽ����');
				return;
			}
			if(!validate.checkEmail(email.val())){
				alert('email��ʽ����');
				return;
			}
            // ��ֹ�ύ
            feedbackTime = false;
            // �ύ��
            $(this).ajaxSubmit();
		},
		// ����������ύ
		caseVipSubmit:function(obj){
			//var admin_add = $('#admin_add').val();	
	    	var form = $(obj).parents('form');
	    	var mycall = form.find("input[name=mobile]");
			var gp = form.find("input[name=province]");
			var gt = form.find("input[name=city]");
            var gd = form.find("input[name=district]");
			var email = form.find("input[name=email]");
			var indu = form.find("textarea[name=indu]");
			
			if(indu.val() == '' || gp.val() == '' || gt.val() == '' || gp.val()=='��ѡ��ʡ��' || gt.val() == '��ѡ�����' ||  mycall.val() == ''){
				alert('��Ϣ����Ϊ��!');return;
			}
			if(!validate.checkMobile(mycall.val())){
				alert('�ֻ������ʽ����');
				return;
			}
			if(email.val() != '' && !validate.checkEmail(email.val())){
				alert('email��ʽ����');
				return;
			}
			var data = form.serialize();
			data += "&admin_add="+$('#admin_add').val();
			$.post(form.attr('action'),data,function(data){
				if (data.status != '1'){
                   	alert(data.info);return;
  				}
				ZQDL.cookie.set('case_phone',mycall.val(),{expires:3600*24*360});
				gp.val("��ѡ��ʡ��");gt.val("��ѡ�����");gd.val('��ѡ����/��');
				mycall.val("");
				form.find("input[name=company]").val(""); 
				email.val("");
				indu.val('');
				window.location.href="/case"
			},'json');
		},

        // �ͻ���ѵ�ύ
        paixunSubmit:function(obj){
            if( !paixunTime ){
                alert('���ύ������Ҫ�ظ��ύ��');return;
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
                alert('��Ϣ����Ϊ��!');return;
            }
            if(!validate.checkMobile(mycall.val())){
                alert('�ֻ������ʽ����');
                return;
            }
            if(email.val() != '' && !validate.checkEmail(email.val())){
                alert('email��ʽ����');
                return;
            }
            // ��ֹ�ύ
            paixunTime = false;
            $.post(form.attr('action'), form.serialize(),function(data){
                if (data.status != '1'){
                    // �����ύ
                    paixunTime = true;
                    alert(data.info);return;
                }
                paixunTime = false;
                setTimeout(function(){
                    paixunTime = true;
                },60000);
                alert(data.info);
                gp.val('��ѡ��ʡ��'); gt.val('��ѡ�����');
                company.val(''); mycall.val('');
                email.val(''); number.val('');
                name.val('');gd.val('��ѡ����/��');
            });
        },
        // 0Ԫ������ѯ���ύ
		zeroSubmit : function(obj, form){
            if( !zeroTime ){
                alert('���ύ������Ҫ�ظ��ύ��');return;
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
				alert('��Ϣ����Ϊ��!');return;
			}
			if(!validate.checkMobile(mycall.val())){
				alert('�ֻ������ʽ����');
				return;
			}
            // ��ֹ�ύ
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
                    // �����ύ
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
				gp.val("��ѡ��ʡ��");gt.val("��ѡ�����");mycall.val("");name.val("");gd.val('��ѡ����/��');
				if(form.find("input[name=is_pop]").val() == 1){
					//$(".dzsw-pop").hide();
					$(".zero_pop").hide();
				}
                method.submitCount();
		    	alert('�ύ�ɹ�');
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
 * ����֤
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
        if(gp == '��ѡ��ʡ��' || gp == '') return false;
        for(var p in provincesdata){
            if(p == gp){
                if(!provincesdata[p]['sub']) {
                    if(gp == gt && gp == gd) return true;
                        return false;
                }
                if(gt == '��ѡ�����' || gt == '') return false;
                for(var t in provincesdata[p]['sub']){
                    if(t == gt){
                        if(!provincesdata[p]['sub'][t]['sub']) {
                            if(gt == gd) return true;
                            return false;
                        }
                        if(gd == '��ѡ����/��' || gd == '') return false;
                        return true;
                    }
                }
            }
        }
    }
}