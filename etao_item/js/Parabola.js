
//抛物线
function Parabola(obj){
	let defaultObj = {
		domObj:null,
		goodsObj:{
			imgpath:'img/t.bmp',
			width:50,
			height:50
		},
		startPoint:{x:0,y:0},
		endPoint:{x:500,y:500},
		timeLong:2000,
		openDirection:'右',
		func:null,
		isDisappear:true//当到达终点好，是否消失
	}
	for(let key in defaultObj){
		obj[key]!==undefined?(this[key] = obj[key]):(this[key] = defaultObj[key]);
	}
	this.createUI();
	this.go();
}

Parabola.prototype.createUI = function() {
	this.domObj = document.createElement("img");
	this.domObj.src= this.goodsObj.imgpath;	
	this.domObj.style.cssText = "position:absolute;display:none;";
	this.domObj.style.width = this.goodsObj.width+"px";
	this.domObj.style.height = this.goodsObj.height+"px";
	document.body.appendChild(this.domObj);
	this.domObj.style.left = this.startPoint.x+"px";
	this.domObj.style.top = this.startPoint.y+"px";		
};

//抛物线运动
//dom元素
//起始位置
//结束位置
//时间长度
//开口方向（上下左右）
//回调函数（当运动做完后，要执行的代码）
	
Parabola.prototype.go = function(){
	this.domObj.style.display = "block";

	//计算起点和终点所成夹角的度数，来决定开口的方向
	//起点和终点
	//let startPoint = {x:$("#startDiv").offsetLeft,y:$("#startDiv").offsetTop};
	//let endPoint = {x:$("#endDiv").offsetLeft,y:$("#endDiv").offsetTop};
	//平移到原点
	let x = this.endPoint.x-this.startPoint.x;
	let y = this.endPoint.y-this.startPoint.y;
	
	//let p = y*y/(2*x);//y^2=2px;  p = y^2/(2x);//依赖于：开口方向决定
	let p;
	switch(this.openDirection){
		case "左": p = Math.abs(y*y/(2*x));break; //y^2=-2px;
		case "上": p = Math.abs(x*x/(2*y));break; //x^2=2py;
		case "右": p = Math.abs(y*y/(2*x));break; //y^2=2px;
		case "下": p = Math.abs(x*x/(2*y));break; //x^2=-2py;
		default: p = Math.abs(y*y/(2*x));break;
	}
	
	let left = 0;//x
	let top1 = 0;//y;
	
	//let direction = 1;//依赖于：起点和终点的位置，开口方向决定
	let direction;
	switch(this.openDirection){
		case "左":  direction=-1;break;
		case "上":  direction=-1;break;
		case "右":  direction=1;break; 
		case "下":  direction=1;break; 
		default:direction=1;break;
	}
	
	let timeSpace = 10;
	
	//let step = Math.abs(startPoint.x-endPoint.x)/(timeLong/timeSpace);//依赖于：开口方向决定
	let dis;
	switch(this.openDirection){
		case "左":; 
		case "右":dis = this.startPoint.x-this.endPoint.x;break; 
		case "上": 
		case "下":dis = this.startPoint.y-this.endPoint.y;break; 
		default:dis = this.startPoint.x-this.endPoint.x;break;
	}
	let step = Math.abs(dis)/(this.timeLong/timeSpace);
	
	var myTimer = setInterval(()=>{
		//1、改变数据		
		switch(this.openDirection){
			case "左":
			case "右":{
						//纵向的方向
						let VDirection = this.endPoint.y>this.startPoint.y?1:-1;
						left=left+direction*step;
					    top1= VDirection*Math.sqrt(2*p*Math.abs(left));
						break;
			          }
			case "上": 
			case "下":{
						//横向的方向
						let HDirection = this.endPoint.x>this.startPoint.x?1:-1;
						top1=top1+direction*step;
					    left= HDirection*Math.sqrt(2*p*Math.abs(top1));//x^2 = 2py
						break; 
			          } 
			default:{
						//纵向的方向
						let VDirection = this.endPoint.y>this.startPoint.y?1:-1;
						left=left+direction*step;
					    top1= VDirection*Math.sqrt(2*p*Math.abs(left));
						break;
			        }
		}
				

		//2、边界处理 
		let isOver = false;
		switch(this.openDirection){
			case "左":if(left<=this.endPoint.x-this.startPoint.x){
						left=this.endPoint.x-this.startPoint.x;
						isOver = true;
					}
					break;  
			case "右":if(left>=(this.endPoint.x-this.startPoint.x)){
						left=this.endPoint.x-this.startPoint.x;
						isOver = true;
					}
					break;
			case "上": if(top1<=(this.endPoint.y-this.startPoint.y)){
							top1=this.endPoint.y-this.startPoint.y;
							isOver = true;
						}
						break;
			case "下":if(top1>=(this.endPoint.y-this.startPoint.y)){
							top1=this.endPoint.y-this.startPoint.y;
							isOver = true;
						}
						break;
			default:if(left>=(this.endPoint.x-this.startPoint.x)){
						left=this.endPoint.x-this.startPoint.x;
						isOver = true;
					}
					break;
		}
		
		if(isOver){
			window.clearInterval(myTimer);
			this.isDisappear&&(this.domObj.style.display="none");
			this.func&&this.func();
		}
		
		//3、改变外观
		this.domObj.style.left = left+this.startPoint.x+"px";
		this.domObj.style.top = top1+this.startPoint.y+"px";		
	},timeSpace);
}

