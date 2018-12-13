//功能：求某天是一年中的第几天
//参数：年，月，日
//返回值：第几天的结果
function judge(year,month,date){
	function isLeapYear(year){
		if((year%4==0 && year%100!=0) || year%400==0){
			return true;
		}
		return false;
	}
	// console.log(isLeapYear(year));
	var febDay=28;
	if(isLeapYear(year)==true){//此处需注意
		febDay=29;
	}
	console.log(febDay);
	var days=0;
	switch(month){
		case 12:days=days+30;//需要渗透
		case 11:days=days+31;
		case 10:days=days+30;
		case 9:days=days+31;
		case 8:days=days+31;
		case 7:days=days+30;
		case 6:days=days+31;
		case 5:days=days+30;
		case 4:days=days+31;
		case 3:days=days+febDay;	
		case 2:days=days+31;
		case 1:days=days+date;
	}
	return days;
}
//功能：数字字母混合验证码
//参数：n
//返回值：n位验证码
function mixCode(n){
	var str='';
	for(var i=0;i<20;i++){
		//var a = String.fromCharCode(random(90,65));//A-Z
		var b = String.fromCharCode(random(102,97));//a-z
		var c = String.fromCharCode(random(57,48));//0-9
		str += b+c;
	}
	// console.log(str);
	var result='';
	for(var j=0;j<n;j++){
		var index=parseInt(Math.random()*str.length);//体现随机取得下标
		// result += str.charAt(index);建议采用此种方法
		result += str[index];
	}
	return result;
}
function random(max,min){
	return Math.floor(Math.random()*(max-min+1)+min);
}
/*功能:各种方法获取节点
参数:选择器
返回值: 节点*/
function $(str) { //#id  .class  tag
	if(str.charAt(0) == "#") { //'#a1'
		return document.getElementById(str.substring(1));
	} else if(str.charAt(0) == ".") { //.class
		return document.getElementsByClassName(str.substring(1));
	} else {
		return document.getElementsByTagName(str);
	}
}