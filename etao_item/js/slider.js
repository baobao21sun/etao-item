//1.构造函数创造一个轮播图对象
function Slider(boxDom,width,height,imgs,btnSize,btnColor,btnHighColor,isCircle,timeSpace){
	//box属性
	this.boxDom=boxDom;
	this.width=width;
	this.height=height;
	this.imgs=imgs;//一个图片数组
	//按钮属性
	this.btnSize=btnSize;
	this.btnColor=btnColor;
	this.btnHighColor=btnHighColor;
	this.isCircle=isCircle;
	//其他属性
	this.timer=null;
	this.currIndex=0;
	this.timeSpace=timeSpace;
	//呈现页面的方法:img,ul,li
	this.createUI=function(){
		//添加图片
		this.boxDom.style.overflow="hidden";
		for(let i=0;i<this.imgs.length;i++){
			let imgDom=document.createElement("img");
			imgDom.src=this.imgs[i];
			imgDom.style.cssText="position:absolute;top:0;";
			imgDom.style.width=this.width+"px";
			imgDom.style.height=this.height+"px";
			if(i==0){
				imgDom.style.left=0+"px";
			}else{
				imgDom.style.left=this.width+"px";
			}
			this.boxDom.appendChild(imgDom);
		}
		//添加按钮ul
		let ulDom=document.createElement("ul");
		ulDom.style.cssText="list-style:none;z-index:1;position:absolute;right:20px;bottom:10px;";
		this.boxDom.appendChild(ulDom);
		//添加按钮li
		for(let i=0;i<this.imgs.length;i++){
			let liDom=document.createElement("li");
			liDom.style.cssText="float:left;margin-right:10px;";
			liDom.style.width=this.btnSize+"px";
			liDom.style.height=this.btnSize+"px";
			if(this.isCircle){
				liDom.style.borderRadius="50%";
			}
			if(i==0){
				liDom.style.backgroundColor=this.btnHighColor;
			}else{
				liDom.style.backgroundColor=this.btnColor;
			}
			ulDom.appendChild(liDom);
		}
	}
	//自动播放:设置定时器改图片改豆豆
	this.autoPlay=function(){
		if(this.timer!=null){
			return;
		}
		this.timer=setInterval(()=>{
			//1.改变图片序号(下标)
			let outIndex=this.currIndex;
			this.currIndex++;
			//2.边界处理
			if(this.currIndex>this.imgs.length-1 || this.currIndex<0){
				this.currIndex=0;
			}
			//3.改变样式
			this.changeImg(outIndex,this.currIndex);
		},this.timeSpace);//此处时间变为1000，不影响主要呈现，只是加快了更换图片
	}
	//停止播放
	this.stopPlay=function(){
		if(this.timer!=null){
			window.clearInterval(this.timer);
			this.timer=null;
		}
	}
	//outIndex:滑出图片的序号
	//inIndex:滑入图片的序号
	this.changeImg=function(outIndex,inIndex){
		//1)改变图片
		let imgs=this.boxDom.children;
		imgs[inIndex].style.left=this.width+"px";
		//让inIndex滑入
		move3(imgs[inIndex],"left",this.width,0,300);
		//让outIndex滑入
		move3(imgs[outIndex],"left",0,-1*this.width,300);
		//2)改变豆豆
		let lis=this.boxDom.lastElementChild.children;
		for(let i=0;i<lis.length;i++){
			lis[i].style.backgroundColor=this.btnColor;
		}
		lis[this.currIndex].style.backgroundColor=this.btnHighColor;
	}
	//跳转到指定图片
	this.goImg=function(tranIndex){
		//1.改变下标
		//currIndex=tranIndex;
		let outIndex=this.currIndex;
		this.currIndex=tranIndex;
		//2.边界处理
		if(this.currIndex>this.imgs.length-1 || this.currIndex<0){
			this.currIndex=0;
		}
		//3.改变样式
		this.changeImg(outIndex,this.currIndex);
	}
	//可以将鼠标滑入、滑出、跳转到指定图片同时放入到一个事件方法中
	this.addEvent=function(){
		let that = this;
		this.boxDom.onmouseover=function(){//对象是boxDom
			that.stopPlay();//对象是图片
		}
		this.boxDom.onmouseout=function(){//对象是boxDom
			that.autoPlay();//对象是图片
		}
		let lis=this.boxDom.lastElementChild.children;
		for(let i=0;i<lis.length;i++){
			lis[i].setAttribute("index",i);
			//给每个li添加一个index属性，值是li的下标
			lis[i].onclick=function(){
				that.goImg(this.getAttribute("index"));
			}
		}
	}
}