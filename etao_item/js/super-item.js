//构造一个更新商品列表插件
function Super(obj){
	let defaultObj={
		boxDom : null,
		width : 1190,
		height : 233,
		imgs : [],
		sImg : []
	};
	for(let key in defaultObj){
		obj[key]!==undefined?(this[key] = obj[key]):(this[key] = defaultObj[key]);
	}
	this.createUI();	
}
Super.prototype.createUI=function(){
	// leftDom
	let leftDom = document.createElement("div");
	leftDom.style.cssText = "float:left;width:544px;height:233px;position:relative;";
	this.boxDom.appendChild(leftDom);
		// imgDom
		for(let i=0;i<this.imgs.length;i++){
			let imgDom = document.createElement("img");
			imgDom.style.cssText = "z-index:1;display:block;width:544px;height:233px;position:absolute;top:0;left:0;";
			imgDom.src = this.imgs[i];
			leftDom.appendChild(imgDom);
		}
		//mask
		let divMask = document.createElement("div");
		divMask.style.cssText="z-index:2;position:absolute;top:0;left:0;width:544px;height:233px;background:black;opacity:0.3;"
		leftDom.appendChild(divMask);
		// text
		let divText = document.createElement("div");
		divText.style.cssText="z-index:3;position:absolute;top:0;left:0;width:544px;height:233px;"
		leftDom.appendChild(divText);
			// imgCircle
			for(let i=0;i<this.sImg.length;i++){
				let imgCircle = document.createElement("img");
				imgCircle.style.cssText="z-index:4;display:block;margin:20px auto;width:80px;opacity:1;height:80px;background:white;border-radius:50%;0";
				imgCircle.src=this.sImg[i];
				divText.appendChild(imgCircle);
			}
			// pTitle
			let pTitle = document.createElement("p");
			pTitle.style.cssText="z-index:4;height:34px;line-height:34px;color:white;text-align:center;font-weight:600;font-size:24px;";
			pTitle.innerHTML="双12大促活动";
			divText.appendChild(pTitle);
			// pCountDown
			let pCountDown = document.createElement("p");
			pCountDown.style.cssText="z-index:4;margin-top:25px;height:22px;line-height:22px;color:white;text-align:center;font-size:14px;";
			pCountDown.innerHTML="仅剩4天9小时";
			divText.appendChild(pCountDown);
	// rightDom
	let rightDom = document.createElement("div");
		rightDom.style.cssText = "float:left;padding-left:20px;width:626px;height:233px;background:white;";
		this.boxDom.appendChild(rightDom);
		// divHeader
		let divHeader = document.createElement("div");
		divHeader.style.cssText = "padding:10px 0;width:626px;height:30px;line-height:30px;";
			// h3Dom,pDom,spanDom
			let h3Dom = document.createElement("h3");
			h3Dom.style.cssText="float:left;font-weight:600;font-size:16px;color:#333";
			h3Dom.innerHTML="超级返利：";
			divHeader.appendChild(h3Dom);
			let pDom = document.createElement("p");
			pDom.style.cssText="float:left;color:#FB3434;";
			pDom.innerHTML="全场最高再返18%";
			divHeader.appendChild(pDom);
			let spanDom = document.createElement("span");
			spanDom.style.cssText="float:right;margin-right:29px;margin-top:1px;padding:0 14px;border:1px solid #fb3434;color:#fb3434;background:#fff;border-radius:29px;transition: .2s;";
			spanDom.innerHTML="共885件好货";
			divHeader.appendChild(spanDom);
		rightDom.appendChild(divHeader);
		// divImg
		let divImg = document.createElement("div");
		for(let i=0;i<3;i++){
			let div = document.createElement("div");
			div.style.cssText="margin-right:20px;float:left;";
				// imgD
				let imgD = document.createElement("img");
				imgD.style.cssText="display:block;width:128px;height:128px;";
				imgD.src = "img/small.jpg";
				div.appendChild(imgD);
				// span1
				let span1 = document.createElement("span");
				span1.style.cssText="float:left;color:#333;padding:8px;";
				span1.innerHTML = "￥19";
				div.appendChild(span1);
				// span2
				let span2 = document.createElement("span");
				span2.style.cssText="float:left;color:#FB3434;font-weight:600;padding:8px;";
				span2.innerHTML = "再返0.59";
				div.appendChild(span2);

			divImg.appendChild(div);
		}
		rightDom.appendChild(divImg);
		



}