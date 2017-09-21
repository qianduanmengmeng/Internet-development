$(function(){
    //初始化二级菜单位置
    var l=$(".nav li").length;
    $(".nav li").each(function(){
        var w=$(this).width();
        var i=$(this).index();
        var l=$(this).position().left+150;
        $(".subnav_con ul").eq(i).css("width",w+"px");
        $(".subnav_con ul").eq(i).css("left",(w*i+200)+"px");
    });
    //二级菜单显示/隐藏
    $(".nav li").each(function(){
        var a=$(this);//一级导航
        var i=a.index();//获取一级导航的位置
        var ul=$(".subnav_con ul");
        var con=$(".subnav_con");
        var con_bg=$(".subnav_bg");
        a.find("a").hover(function(){
            //判断相对的二级导航的display：none？block
            var d=ul.eq(i).css("display");
            if(d=="none"){//二级导航隐藏的时候
                q=setTimeout(function(){//延迟事件
                    var t=ul.eq(i).find("li").text();//判断二级导航的内容
                    if(t!=''){//如果二级导航不为空
                        ul.eq(i).stop(true).show();//二级导航内容显示
                        var ch=ul.eq(i).height()+30;//获取二级导航内容高度
                        con.stop(true).animate({height: ch+'px'},300);//给二级导航容器赋值高度
                        con_bg.stop(true).animate({height: ch+'px'},300);//给二级导航容器赋值高度
                    }
                }, 100);
            }else{
                clearTimeout(w);//二级导航显示状态，清除延迟执行事件w
            }
        },function(){
            clearTimeout(q);//鼠标离开一级导航时，清除延迟事件q
            e=setTimeout(function(){
                ul.stop(true).hide();
                con.stop(true).animate({height: '0'});
                con_bg.stop(true).animate({height: '0'});
            }, 10);
        });
        ul.eq(i).hover(function(){
            clearTimeout(e);
        },function(){
            w=setTimeout(function(){
                con.stop(true).animate({height: '0'},300);
                con_bg.stop(true).animate({height: '0'},300);
                ul.stop(true).hide();
            }, 10);
        });
    });
    //二级菜单显示/隐藏
    /* $(".nav li").each(function(){
        var a=$(this);//一级导航
        var i=a.index();//获取一级导航的位置
        var inner=$(".subnav_con .subnav_con_inner");
        var con=$(".subnav_con");
        var con_bg=$(".subnav_bg");
        a.hover(function(){
            //判断相对的二级导航的display：none？block
            var d=inner.eq(i).css("display");
            if(d=="none"){//二级导航隐藏的时候
                q=setTimeout(function(){//延迟事件
                    var t=inner.eq(i).text(); //判断二级导航的内容
                    if(t!=''){//如果二级导航不为空
                        inner.eq(i).stop(true).show();//二级导航内容显示
                        var ch=inner.eq(i).height();//获取二级导航内容高度
                        con.stop(true).animate({height: ch+'px'},300);//给二级导航容器赋值高度
                        con_bg.stop(true).animate({height: ch+'px'},300);//给二级导航容器赋值高度
                    }
                }, 100);
            }else{
                w=setTimeout(function(){
                    con.stop(true).animate({height: '0'},300);
                    con_bg.stop(true).animate({height: '0'},300);
                    inner.stop(true).hide();
                }, 10);
                clearTimeout(w);//二级导航显示状态，清除延迟执行事件w
            }
        },function(){
            clearTimeout(q);//鼠标离开一级导航时，清除延迟事件q
            e=setTimeout(function(){
                inner.stop(true).hide();
                con.stop(true).animate({height: '0'});
                con_bg.stop(true).animate({height: '0'});
            }, 10);
        });
        inner.eq(i).hover(function(){
            clearTimeout(e);
        },function(){
            w=setTimeout(function(){
                con.stop(true).animate({height: '0'},300);
                con_bg.stop(true).animate({height: '0'},300);
                inner.stop(true).hide();
            }, 10);
        });
    }); */

    //tab切换
    (function($) {
        $.fn.TabSwitch = function(options) {
            var opts = $.extend({},$.fn.TabSwitch.defaults,options);
            return this.each(function(){
                var tab = $(this);
                var menu = tab.find(opts.menu);
                var content = tab.find(opts.content);
                menu[opts.type](function(){
                    $(this).addClass(opts.classname).siblings().removeClass(opts.classname);
                    content.eq($(this).index()).show().siblings().hide();
                });
            });
        };

        $.fn.TabSwitch.defaults = {
            classname: 'active',    //菜单选中样式
            type: 'click',          //菜单切换事件，click/mouseover
            menu: '.btn span',      //菜单单个btn
            content: '.content li'  //内容单个con
        };

        $(".yumingsousuo-b22 input").focus(function(){
            if(this.value=="输入域名，如：300"){
                this.value="";
                this.style.color="#333";
            }
        }).blur(function(){
            if(this.value==""){
                this.style.color="#ccc";
                this.value="输入域名，如：300";
            }
        })

        $(".yumingsousuo-b22-ymxl li").hover(function(){
            this.style.backgroundColor="#f6f6f6";
        },function(){
            this.style.backgroundColor="";
        })

        $("#ymss").click(function(e){
            $(".yumingsousuo-b22-ymxl").css("display","");

            e.stopPropagation();
        })

        $("#ymss").click(function(){
            $(".yumingsousuo-b22-ymxl").css("display","none");
        })

        $(".yumingsousuo-b22-ymxl li").click(function(){
            $(".yumingsousuo-b22-ym").html($(this).html());
        })

    })(jQuery);

    //footer关注我们微信弹出二维码
    $(".gz-wx").hover(function(){
        $(".ewm").fadeIn();
    },function(){
        t=setTimeout(function(){
            $(".ewm").fadeOut();
        }, 10);
    });
    $(".ewm").hover(function(){
        clearTimeout(t);
    },function(){
        $(".ewm").fadeOut();
    });


    //工作机会列表页展开按钮
    $(".job-add .zhankai a").bind("click",function(){
        var c=$(this).attr("class");
        if(c=="close"){
            $(".job-add").css("height","auto");
            $(this).addClass("open").removeClass("close").html("收起");
        }
        if(c=="open"){
            $(".job-add").css("height","32px");
            $(this).addClass("close").removeClass("open").html("展开");
        }
    });

    //联系我们页面，分公司显示、隐藏
    $(".branch-info a.close").bind("click",function(){
        $(".branch-info").hide();
    });
    $(".branch-map a").bind("click",function(){
        $(".branch-info").show();
    });
    //企业荣誉页面，点击图片显示大图
    $(".pop").css("height",document.body.clientHeight);
    $(".pop a").bind("click",function(){
        $(".pop").hide();
    });
    $(".pop .pop-bg").bind("click",function(){
        $(".pop").hide();
    });
    $(".img").each(function(){
        var a=$(this);
        a.find("a").bind("click",function(){
            var src=$(this).find("img").attr("src");
            $(".pop .content img").attr("src",src);
            var img = new Image();
            img.src =src;
            var imgh=0;
            var imgw=0;
            if(img.height>600){
                imgh=600;
                imgw=600/img.height*img.width;
                if(imgw>1100){
                    imgh=1100/imgw*600;
                    imgw=1100;
                }
            }else{
                if(img.width>1100){
                    imgw=1100;
                    imgh=1100/img.width*img.height;
                }else{
                     imgw=img.width;
                     imgh=img.height;
                }
            }
            var cw = (imgw+40)/2*-1;
            var ch = (imgh+40)/2*-1;
            $(".pop .content").css({ "margin-left": cw+"px", "margin-top": ch+"px" });
            $(".pop").show();
        });
    });

    function sendYzm(flag){
        if(flag == 1){
            var mycall = $('#mycall_bottom').val();
        }else{
            var mycall = $('#mycall').val();
        }
        if(mycall == ''){
            alert('手机号码不能为空');
        }
        $.get('/e/enews/send.php',{mobile:mycall, action:'send'},function(data){
            if (data.match("^{(.+:.+,*){1,}}$")){
               var reg = eval("("+data+")");
                if(reg.code){
                    alert(reg.msg);
                    return;
                }
            }
            alert('发送成功');
       });
    }



    /************************省市切换 begain*****************************/
    // //刷新页面载入所有省
    // $.each(GP,function(i){
    //     $(".province").append("<li>" + GP[i] + "</li>");
    // });
    // //点击下拉菜单弹出
    // $('[name="nice-select"]').click(function(e){
    //     $('[name="nice-select"]').find('ul').hide();
    //     $(this).find('ul').show();
    //     e.stopPropagation();
    // });
    // $('[name="nice-select"] li').hover(function(e){
    //     $(this).toggleClass('on');
    //     e.stopPropagation();
    // });
    // $('[name="nice-select"] li').click(function(e){
    //     var val = $(this).text();
    //     var dataVal = $(this).attr("data-value");
    //     $(this).parents('[name="nice-select"]').find('input').val(val);
    //     $('[name="nice-select"] ul').hide();
    //     var a=0;//拿到选中省的位置
    //     for(i=0;i<GP.length;i++){
    //         if(val==GP[i]){
    //             a=i;
    //         }
    //     }
    //     if (a != 0){//获取选中省下的市
    //         $(".city").html("");
    //         $.each(GT[a],function(i){
    //             $(".city").append("<li>" + GT[a][i] + "</li>");
    //         });//绑定市的点击事件
    //         $(".gtt").click(function(ev){
    //             $(".city").show();
    //             ev.stopPropagation();
    //         });
    //         $(".city li").hover(function(ev){
    //             $(this).toggleClass('on');
    //             ev.stopPropagation();
    //         });
    //          $(".city li").click(function(ev){
    //             var val = $(this).text();
    //             $(".gtt input").val(val);
    //             $(".city").hide();
    //             ev.stopPropagation();
    //         });
    //     }
    //     e.stopPropagation();
    // });
    // //点击空白隐藏下拉菜单
    // $(document).click(function(){
    //     $('[name="nice-select"] ul').hide();
    // });
    /************************省市切换 END*****************************/

    // 在线咨询弹窗显示与隐藏
    $('.onlineserver ul li').live('mouseover', function() {
        $(this).stop().animate({'width': 194},300).addClass('on').siblings('').removeClass('on');
    });
    $('.onlineserver ul li').live('mouseout', function() {
        $(this).stop().animate({'width': 51},300).removeClass('on');
    });

    // 活动推广
    $('.activityrecommend .shouqi').live('mouseenter', function() {
        $('.activityrecommend').css({'width':'144px','height':'203px'});
        $('.activityrecommend .shouqi').hide();
        $('.activityrecommend .zhankai').fadeIn();
    });

    $('.activityrecommend .zhankai').live('mouseleave', function() {
        $('.activityrecommend').css({'width':'51px','height':'51px'});
        $('.activityrecommend .zhankai').hide();
        $('.activityrecommend .shouqi').fadeIn();
    });

    /*左侧浮窗-建站服务*/
    $('.jz-service-close').click(function(event) {
        $(this).parent('.jz-service-open').hide().siblings('.jz-service-packup').show();
    });
    $('.jz-service-packup').mouseenter(function() {
        $(this).hide().siblings('.jz-service-open').show();
    });
    // 延迟咨询弹窗
      function yuyuePop(){
        $('.pop-yuyue').fadeIn();
      }
      var timer=window.setTimeout(yuyuePop,3000);
      window.clearTimeout(timer);
      window.setTimeout(yuyuePop,3000);
      $('.refuse-btn').bind('click',function(){$('.pop-yuyue').fadeOut();return false;});
      $('.pop-yuyue-close').bind('click',function(){$('.pop-yuyue').fadeOut();return false;});

    // 行业选择
    $('.hy_belong').find('.gp').click(function(ev){
        $(this).siblings().show();
        ev.stopPropagation();
    });
    $('.hy_belong').find('li').hover(function(ev){
        $(this).addClass('on').siblings().removeClass('on');
        ev.stopPropagation();
    });
    $('.hy_belong').find('li').click(function(ev){
        var val = $(this).text();
        $(this).parent().siblings('input').val(val);
        $(this).parent().hide();
        ev.stopPropagation();
    });

    $(document).click(function(){
        $('[name="nice-select"] ul').hide();
    });
});


//给轮播图和按钮分别赋高度
    // if($(window).height()>=850){//判断屏幕的高度大于850的时候
    //     $(".main").css("height",$(window).height());
    //     $(".banner").css("height","80%");
    //     $(".DB_bgSet li").css("height",$(window).height()*0.8+"px");
    //     $(".DB_imgSet").css("top",($(window).height()*0.8-650)/2+"px");
    //     $(".menu").css("height","20%");
    // }

// window.onresize=function(){
//         //给轮播图和按钮分别赋高度
//         if($(window).height()>=850){
//             $(".main").css("height",$(window).height());
//             $(".banner").css("height","80%");
//             $(".DB_bgSet li").css("height",$(window).height()*0.8+"px");
//             $(".DB_imgSet").css("top",($(window).height()*0.8-650)/2+"px");
//             $(".menu").css("height","20%");
//         }
//     }
