//功能：保存cookie
//参数：键、值、有效期(天)
//返回值：无
function saveCookie(key,value,days,path){
	var d=new Date();
	d.setDate(d.getDate()+days);
	var str=key+"="+escape(value)+";expires="+d.toGMTString();
	if(path!=undefined){
		str+="path="+path;
	}
	document.cookie=str;
}
//功能：获取cookie
//参数：键
//返回值：值
function getCookie(key){
	var str=unescape(document.cookie);
	var arr=str.split('; ');
	for(var i=0;i<arr.length;i++){
		if(arr[i].indexOf(key+"=")==0){
			return arr[i].substring((key+"=").length);
		}
	}
	return null;
}
//功能：删除cookie
//参数：键
//返回值：无
function deleteCookie(key){
	saveCookie(key,'',-1);
}