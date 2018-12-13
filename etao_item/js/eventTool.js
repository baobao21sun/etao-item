//功能：阻止默认行为
//参数：事件对象
//返回值：无
function preventDefault2018(ev){
	if(ev.preventDefault){
		ev.preventDefault
	}else{
		ev.returnValue=false;
	}
}
//功能：绑定事件的函数封装
//参数：dom对象，事件类型，事件处理函数，是否冒泡
//返回值：无
function bindEvent(domObj,eventType,func,isBubble){
	if(domObj.addEventListener){//DOM2
		domObj.addEventListener(eventType,func,isBubble);
	}else if{//IE
		domObj.attachEvent("on"+eventType,func);
	}else{//DOM0
		domObj["on"+eventType]=func;
	}
}  