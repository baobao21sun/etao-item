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
/*功能:判断一个年份是不是闰年
参数:year
返回值:true是闰年，false是平年 */
function isLeapYear(year){
	if((year%4==0 && year%100!=0) || year%400==0){
		return true;
	}
	return false;	
}
/*功能:判断一个数是不是素数
参数:num
返回值:true是素数，false是合数*/
function isPrime(num){
	for(var i=2; i<num; i++){
		if(num%i==0){
			return false;
		}	
	}
	return true;
}
/*功能:输入数字显示星期的表示用于Date对象中
参数:数字num
返回值:星期的字符串*/
function numToWeek(num){
	var str = '';
	switch(num1){
		case 1: str="星期一";break;
		case 2: str="星期二";break;
		case 3: str="星期三";break;
		case 4: str="星期四";break;
		case 5: str="星期五";break;
		case 6: str="星期六";break;
		case 0: str="星期日";break;
		default: str="输入错误";break;
	}
	return str;
}
/*功能:根据身高体重判断健康指数
参数:身高、体重
返回值:-1太瘦，0标准体重，1太胖*/
function testf(weight,height){
	var standardWeight=height-105;
	if(weight>standardWeight+5){
		num=1;
	}else if(weight<standardWeight-5){
		num=-1;
	}else{
		num=0;
	}
	return num;
}
//功能：判断年月日是否合法
//参数：（已知条件）年，月，日
//返回值：true：合法：false：不合法
function isDate(year,month,date){
	if(year<0){
		return false;
	}
	if(month<1 || month>12){
		return false;
	}
	if(date<1 || date>31){
		return false;
	}
	if(month==4 || month==6 || month==9 || month==11){
		if(date>30){
			return false;
		}
	}
	if(month==2){
		if(isLeapYear(year)==true){
			if(date>29){
				return false;
			}
		}else{
			if(date>28){
				return false;
			}
		}
	}
	return true;

}
//#20cd4f
function getColor(){
	var str="#";
	for(var i=0;i<6;i++){
		str+=(parseInt(Math.random()*16)).toString(16);
	}
	return str;
}