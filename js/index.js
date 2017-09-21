/**
 * Created by Administrator on 2016/5/15 0015.
 */
//公告滚动
function marquee (divId){
    var box2=document.getElementById(divId);
    var can=true;
    box2.innerHTML+=box2.innerHTML;
    box2.onmouseover=function(){can=false};
    box2.onmouseout=function(){can=true};
    $(function (){
        var stop=box2.scrollTop%40==0&&!can;
        if(!stop)box2.scrollTop==parseInt(box2.scrollHeight/2)?box2.scrollTop=0:box2.scrollTop++;
        setTimeout(arguments.callee,box2.scrollTop%40?50:2000);
    });
};
//按钮旋转
function hover(hoverDiv,first,second,third){
    $(hoverDiv).each(function(){
        $(this).hover(function(){
            $(this).find(first).stop(true,true).velocity({
                rotateZ: "90deg"
            },450);
            $(this).find(second).stop(true,true).velocity({
                rotateZ: "-180deg"
            },450);
            $(this).find(third).stop(true,true).velocity({
                rotateZ: "90deg"
            },450);
        },function(){
            $(this).find(first).stop(true,true).velocity({
                rotateZ: "0"
            },450);
            $(this).find(second).stop(true,true).velocity({
                rotateZ: "0"
            },450);
            $(this).find(third).stop(true,true).velocity({
                rotateZ: "0"
            },450);
        })
    })
};
//图片移动
function picMove(pic1,pic2,pic3,pic4,pic5){
    $(pic1).hover(function(){
        $(pic1).stop(true,true).velocity({
            scaleX: 1.1,
            scaleY: 1.1
        },300);
        $(pic2).stop(true,true).velocity({
            left: "285px",
			opacity:0.5
        },300);
        $(pic3).stop(true,true).velocity({
            left: "285px",
			opacity:0.5
        },300);
		$(pic4).stop(true,true).velocity({
			opacity:0.5
        },300);
		$(pic5).stop(true,true).velocity({
			opacity:0.5
        },300);
    },function(){
        $(pic1).stop(true,true).velocity({
            scaleX: 1,
            scaleY: 1
        },300);
        $(pic2).stop(true,true).velocity({
            left: "264px",
			opacity:1
        },300);
        $(pic3).stop(true,true).velocity({
            left: "284px",
			opacity:1
        },300);
		$(pic4).stop(true,true).velocity({
			opacity:1
        },300);
		$(pic5).stop(true,true).velocity({
			opacity:1
        },300);
    });
    $(pic2).hover(function(){
        $(pic2).stop(true,true).velocity({
            scaleX: 1.1,
            scaleY: 1.1
        },300);
        $(pic1).stop(true,true).velocity({
            left: "24px",
			opacity:0.5
        },300);
        $(pic3).stop(true,true).velocity({
            top: "190px",
			opacity:0.5
        },300);
		$(pic4).stop(true,true).velocity({
			opacity:0.5
        },300);
        $(pic5).stop(true,true).velocity({
            top: "190px",
            left: "497px",
			opacity:0.5
        },300);
    },function(){
        $(pic2).stop(true,true).velocity({
            scaleX: 1,
            scaleY: 1
        },300);
        $(pic1).stop(true,true).velocity({
            left: "45px",
			opacity:1
        },300);
        $(pic3).stop(true,true).velocity({
            top: "185px",
			opacity:1
        },300);
		$(pic4).stop(true,true).velocity({
			opacity:1
        },300);
        $(pic5).stop(true,true).velocity({
            top: "145px",
            left: "461px",
			opacity:1
        },300);
    });
    $(pic3).hover(function(){
        $(pic3).stop(true,true).velocity({
            scaleX: 1.1,
            scaleY: 1.1
        },300);
        $(pic1).stop(true,true).velocity({
            left: "24px",
			opacity:0.5
        },300);
        $(pic2).stop(true,true).velocity({
            top: "12px",
			opacity:0.5
        },300);
		$(pic4).stop(true,true).velocity({
			opacity:0.5
        },300);
        $(pic5).stop(true,true).velocity({
            left: "497px",
			opacity:0.5
        },300);
    },function(){
        $(pic3).stop(true,true).velocity({
            scaleX: 1,
            scaleY: 1
        },300);
        $(pic1).stop(true,true).velocity({
            left: "45px",
			opacity:1
        },300);
        $(pic2).stop(true,true).velocity({
            top: "14px",
			opacity:1
        },300);
		$(pic4).stop(true,true).velocity({
			opacity:1
        },300);
        $(pic5).stop(true,true).velocity({
            left: "461px",
			opacity:1
        },300);
    });
    $(pic4).hover(function(){
        $(pic4).stop(true,true).velocity({
            scaleX: 1.1,
            scaleY: 1.1
        },300);
		$(pic1).stop(true,true).velocity({
			opacity:0.5
        },300);
		$(pic2).stop(true,true).velocity({
			opacity:0.5
        },300);
		$(pic3).stop(true,true).velocity({
			opacity:0.5
        },300);
        $(pic5).stop(true,true).velocity({
            top: "170px",
            left: "497px",
			opacity:0.5
        },300);
    },function(){
        $(pic4).stop(true,true).velocity({
            scaleX: 1,
            scaleY: 1
        },300);
		$(pic1).stop(true,true).velocity({
			opacity:1
        },300);
		$(pic2).stop(true,true).velocity({
			opacity:1
        },300);
		$(pic3).stop(true,true).velocity({
			opacity:1
        },300);
        $(pic5).stop(true,true).velocity({
            top: "145px",
            left: "461px",
			opacity:1
        },300);
    });
    $(pic5).hover(function(){
        $(pic5).stop(true,true).velocity({
            scaleX: 1.1,
            scaleY: 1.1
        },300);
		$(pic1).stop(true,true).velocity({
			opacity:0.5
        },300);
        $(pic2).stop(true,true).velocity({
            left: "230px",
			opacity:0.5
        },300);
        $(pic3).stop(true,true).velocity({
            left: "240px",
			opacity:0.5
        },300);
        $(pic4).stop(true,true).velocity({
            top: "10px",
			opacity:0.5
        },300);
    },function(){
        $(pic5).stop(true,true).velocity({
            scaleX: 1,
            scaleY: 1
        },300);
		$(pic1).stop(true,true).velocity({
			opacity:1
        },300);
        $(pic2).stop(true,true).velocity({
            left: "264px",
			opacity:1
        },300);
        $(pic3).stop(true,true).velocity({
            left: "284px",
			opacity:1
        },300);
        $(pic4).stop(true,true).velocity({
            top: "35px",
			opacity:1
        },300);
    });
};

//在线客服
function service(div1,mouseDown,ul1,btn1,text1,btn2){
//弹框拖拽
var oDiv=document.getElementById(div1);
var oTop=document.getElementById(mouseDown);
var leftP=0;
var topP=0;
oTop.onmousedown =function(ev){
	var oEvent=ev||event;
	leftP=oEvent.clientX-oDiv.offsetLeft;
	topP=oEvent.clientY-oDiv.offsetTop;
	document.onmousemove =function(ev){
		var oEvent=ev||event;
		var l=oEvent.clientX-leftP;
		var t=oEvent.clientY-topP;
		if(l<0){
			l=0;
		}else if(l>document.documentElement.clientWidth-oDiv.clientWidth){
			l=document.documentElement.clientWidth-oDiv.clientWidth;
		};
		if(t<0){
			t=0;
		}else if(t>document.documentElement.clientHeight-oDiv.clientHeight){
			t=document.documentElement.clientHeight-oDiv.clientHeight;
		};
		oDiv.style.left=l+'px';
		oDiv.style.top=t+'px';
		oDiv.style.marginTop=0+'px';
		oDiv.style.marginLeft=0+'px';
		window.onresize=function(){
			var l=oEvent.clientX-leftP;
			var t=oEvent.clientY-topP;
			if(l<0){
				l=0;
			}else if(l>document.documentElement.clientWidth-oDiv.clientWidth){
				l=document.documentElement.clientWidth-oDiv.clientWidth;
			};
			if(t<0){
				t=0;
			}else if(t>document.documentElement.clientHeight-oDiv.clientHeight){
				t=document.documentElement.clientHeight-oDiv.clientHeight;
			};
			oDiv.style.left=l+'px';
			oDiv.style.top=t+'px';
		};
	};
	document.onmouseup =function(){
		document.onmousemove=null;
		document.onmouseup=null;
	};
	return false;
};

//生成对话
var oUl= document.getElementById(ul1);
var oBtn = document.getElementById(btn1);
var oText = document.getElementById(text1);
oBtn.onclick = function(){
	if(oText.value==''){
		alert('请输入文字')
	}else{
		var oDate = new Date();
		var oDay ;
		var oGetDay= oDate.getDay();
		switch (oGetDay)
		{
		case 0:
		  oDay="日";
		  break;
		case 1:
		  oDay="一";
		  break;
		case 2:
		  oDay="二";
		  break;
		case 3:
		  oDay="三";
		  break;
		case 4:
		  oDay="四";
		  break;
		case 5:
		  oDay="五";
		  break;
		case 6:
		  oDay="六";
		  break;
		};
		var noon ;
		if(oDate.getHours()<=12){
			noon='上午';
		}else{
			noon='下午';
		};
		var oP = oDate.getFullYear()+"/"+(oDate.getMonth()-1)+"/"+oDate.getDate()+" 星期"+oDay+" "+noon+ " "+oDate.getHours()+":"+oDate.getMinutes()+":"+oDate.getSeconds();
		var oName=oTop.getElementsByTagName('p');
		var oLi = document.createElement('li');
		oLi.setAttribute("class", "clearfix");
		var aLi = oUl.getElementsByTagName('li');
		
		var oValue = oText.value;
		oLi.innerHTML = '<p>'+oP+'</p><div><span>'+oValue+'</span></div><img src="img/property.png" />';
		oUl.appendChild(oLi,aLi[0]);
		oText.value=null;
	};
	
};
//开关弹窗
var oBtnn= document.getElementById(btn2);
oBtnn.onclick=function(){
	if(oDiv.style.display=="none"){
		oDiv.style.display="block";
	}else{
		oDiv.style.display="none";
		var oLi=oUl.getElementsByTagName('li');
		var i=0;
		var clear=oLi.length;
		for(i=0;i<clear;i++){
			oLi[0].remove();
		};
		
	}
};
var closed = oTop.getElementsByTagName('em')[0];
closed.onclick=function(){
	oDiv.style.display="none";
	var oLi=oUl.getElementsByTagName('li');
	var i=0;
	var clear=oLi.length;
	for(i=0;i<clear;i++){
		oLi[0].remove();
	};
	
};
}
//选项卡弹射切换
function controlMove(ul,li,active,btn){
	var oUl=$(ul)[0];
	var aLi=oUl.getElementsByTagName(li);
	
	var arr = [];
	var iNow = aLi.length-1;
	for(var i=0;i<iNow+1;i++){
		arr.push([aLi[i].offsetLeft,aLi[i].offsetTop])
	}
	for(var i=0;i<iNow+1;i++){
		aLi[i].style.position='absolute';
		aLi[i].style.left = arr[i][0]+'px';
		aLi[i].style.top = arr[i][1]+'px';
		aLi[i].style.margin = 0;
	}
	
	var prevIndex;
	$(btn).each(function(){
		$(this).click(function(){
			$(this).addClass(active);
			var optionIndex = $(this).index();
			if(prevIndex==undefined){prevIndex=0};
			$(this).siblings().removeClass(active);
			oUl=$(ul).eq(prevIndex)[0];
			aLi=oUl.getElementsByTagName(li);
			var aLiNumber = aLi.length;
			
			for(var i=0;i<aLiNumber;i++){
				arr.push([aLi[i].offsetLeft,aLi[i].offsetTop])
			}
			for(var i=0;i<aLiNumber;i++){
				aLi[i].style.position='absolute';
				aLi[i].style.left = arr[i][0]+'px';
				aLi[i].style.top = arr[i][1]+'px';
				aLi[i].style.margin = 0;
			}
			var timer = setInterval(function(){
				$(aLi[iNow]).velocity({ 
					left: "780px",
					top:"500px",
					opacity:0
				}, 500);
				if(iNow == 0){
					clearInterval(timer); 
					$(ul).eq(optionIndex).css("display","block");
					$(ul).eq(optionIndex).siblings(ul).css("display","none");
					oUl=$(ul).eq(optionIndex)[0];
					aLi=oUl.getElementsByTagName("li");
					aLiNumber = aLi.length;
					for(var i=0;i<aLiNumber;i++){
						aLi[i].style.position='absolute';
						aLi[i].style.left = 780+'px';
						aLi[i].style.top = 500+'px';
						aLi[i].style.margin = 0;
						aLi[i].style.opacity = 0;
					}
					iNow = aLiNumber-1;
					var timer2 = setInterval(function(){
						$(aLi[iNow]).velocity({ 
							left: arr[iNow][0],
							top: arr[iNow][1],
							opacity:100
						}, 500);
						if(iNow == 0){
							clearInterval(timer2); 
							iNow = aLiNumber-1;
						}else{
							iNow--;
						}
					},100);
				}else{
					iNow--;
				}
			},100);
			prevIndex = $(this).index();
			return prevIndex;
			
		})
		
	})	
}
			
//导航翻转
function navRotate(hover,ul,li){
	$(hover).hover(function(){
		if($(this).find(ul)[0]== undefined){return;};
		$(this).find(ul)[0].style.display = 'block';
		
		var thisUl = $(this).find(ul)[0];
		var aLi = thisUl.getElementsByTagName(li);
		for(i=0;i<aLi.length;i++){
			$(aLi[i]).velocity({ 
				rotateY: "90deg"
			}, 0);
		}
		var iNow = aLi.length;
		var timer0 = setInterval(function(){
			$(aLi[iNow]).stop(true,true).velocity({ 
				rotateY: "0"
			}, 250);
			if(iNow==0){
				clearInterval(timer0); 
			}else{
				iNow--;
			}
			
		},50);
		
	},function(){
		if($(this).find(ul)[0]== undefined){return;};
		var thisUl = $(this).find(ul)[0];
		var aLi = thisUl.getElementsByTagName(li);
	
		var iNow = aLi.length;
		var timer01 = setInterval(function(){
			$(aLi[iNow]).stop(true,true).velocity({ 
				rotateY: "90deg"
			}, 250);
			if(iNow==0){
				clearInterval(timer01); 
			}else{
				iNow--;
			}
		},50);
		if(!-[1,]){
			var timer02 = setTimeout(function(){
				thisUl.style.display = 'none';
			},500)
		}
	})	
}
