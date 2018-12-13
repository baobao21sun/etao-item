//功能：实现位移：分别到达
//参数：DOM元素,属性，起始值，结束值，步长，时间间隔
//返回值：无
function move1(domObj,attr,startValue,endValue,step,timeSpace){
	var currValue=startValue;
	var timer=setInterval(function(){
		currValue=currValue+step;
		if(currValue>=endValue){
			currValue=endValue;
			window.clearInterval(timer);
		}
		$('box').style[attr]=currValue+"px";
	},timeSpace);
}
//功能：实现位移:同时到达
//参数：DOM元素,属性，起始值，结束值，步长，总时长
//总时长:(endValue-startValue)/step*timeSpace=timeLong
//返回值：无
function move2(domObj,attr,startValue,endValue,timeLong){
	let timeSpace=10;
	let step=(endValue-startValue)*timeSpace/timeLong;
	let currValue=startValue;
	let timer=setInterval(function(){
		currValue=currValue+step;
		if(currValue>=endValue){
			currValue=endValue;
			window.clearInterval(timer);
		}
		$('box').style[attr]=currValue+"px";
	},timeSpace);
}
//功能：多属性实现位移，正反方向都有
//参数：DOM元素,JSON对象(样式属性名和终点值组成的键值对)，
//总时长:(endValue-startValue)/step*timeSpace=timeLong
//返回值：无
function move3(domObj,attr,startValue,endValue,timeLong){
	let timeSpace=10;
	let step=Math.abs(endValue-startValue)*timeSpace/timeLong;
	let direction=startValue<endValue?1:-1;
	let currValue=startValue;
	let timer=setInterval(function(){
		currValue=currValue+step*direction;
		if(Math.abs((currValue-step*direction)-endValue)<=step){
			currValue=endValue;
			window.clearInterval(timer);
		}
		if(attr=="opacity"){
			domObj.style[attr]=currValue;
		}else{
			domObj.style[attr]=currValue+"px";
		}
	},timeSpace);
}
//功能：多属性实现位移:正反向
//参数：DOM元素,属性，起始值，结束值，步长，总时长
//总时长:(endValue-startValue)/step*timeSpace=timeLong
//返回值：无
function animate(domObj,attrObj,timeLong){
	//let startValue=parseFloat(getStyle(domObj,attr));
	let startObj={};//起始值json对象
	for(let key in attrObj){//获取样式属性名
		startObj[key]=parseFloat(getStyle(domObj,key));
	}
	let timeSpace=10;
	//let step=Math.abs(endValue-startValue)*timeSpace/timeLong;
	let stepObj={};
	for(let key in attrObj){
		stepObj[key]=Math.abs(attrObj[key]-startObj[key])*timeSpace/timeLong;
	}
	//let direction=startValue<endValue?1:-1;
	let directionObj={};
	for(let key in attrObj){
		directionObj[key]=startObj[key]<attrObj[key]?1:-1;
	}
	//let currValue=startValue;
	let currObj={};
	for(let key in attrObj){
		currObj[key]=startObj[key];
	}
	let timer=setInterval(function(){
		//1.改变数据
		//currValue=currValue+step*direction;
		for(let key in attrObj){
			currObj[key]+=stepObj[key]*directionObj[key];
		}
		//2.边界处理
		/*if(Math.abs((currValue-step*direction)-endValue)<=step){
			currValue=endValue;
			window.clearInterval(timer);
		}*/
		let isOver=false;
		for(let key in attrObj){
			if(Math.abs((currObj[key]-stepObj[key]*directionObj[key])-attrObj[key])<=stepObj[key]){
			currObj[key]=attrObj[key];
			isOver=true;
			}
		}
		if(isOver){
			window.clearInterval(timer);
		}
		//3.改变样式外观
		for(let key in attrObj){
			if(key=="opacity"){
				domObj.style[key]=currObj[key];
			}else{
				domObj.style[key]=currObj[key]+"px";
			}
		}
	},timeSpace);
}