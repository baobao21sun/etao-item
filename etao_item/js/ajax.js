//功能：发送ajax请求
//参数：请求方式、请求地址、请求参数、是否异步、回调函数
//返回值：无，因为是在回调函数出响应
function ajax01(method,url,param,isAsync,func){
	//1.创建对象
	let xhr = new XMLHttpRequest();
	//2.设置请求参数
	let urlAndParam = url;
	if(method.toLowerCase()=="get" && param!=''){
		urlAndParam += "?"+param;
	}
	xhr.open(method,urlAndParam,isAsync);//此处需注意
	//3.设置回调函数
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){
			func(xhr.responseText);
		}
	}
	//4.发送请求
	if(method.toLowerCase()=="post"){
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(param);
	}else{
		xhr.send();
	}
}
//功能：发送ajax请求
//参数：一个json对象包含：请求方式、请求地址、请求参数、是否异步、回调函数
//返回值：无，因为是在回调函数出响应
//比如调用ajax02(obj)
/*ajax02({
	url:"t.php",
	method:"get",
	param:"a=1&b=2",
	isAsync:true,
	func:function(){
		
	}
});*/
function ajax02(obj){
	//1.创建对象
	let xhr = new XMLHttpRequest();
	//2.设置请求参数
	let urlAndParam = obj.url;
	if(obj.method.toLowerCase()=="get" && obj.param!=''){
		urlAndParam += "?"+obj.param;
	}
	xhr.open(obj.method,urlAndParam,obj.isAsync);//此处需注意
	//3.设置回调函数
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){
			obj.func(xhr.responseText);
		}
	}
	//4.发送请求
	if(obj.method.toLowerCase()=="post"){
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(obj.param);
	}else{
		xhr.send();
	}
}
//功能：发送ajax请求
//参数：参数是json对象包含：请求方式、请求地址、请求参数、是否异步、回调函数
//并有默认值
//返回值：无，因为是在回调函数出响应
/*ajax03({
	url:"t.php",
	param:"a=1&b=2",
	func:function(){}
});*/
function ajax03(obj){
	let defaultObj={
		method:"get",
		url:"#",
		param:"",
		isAsync:true,
		func:null
	}
	//obj的键若多于defaultObj，则defaultObj的键也会增加，但是无实质意义
	/*for(let key in obj){
		obj[key]&&(defaultObj[key]=obj[key]);//逻辑短路
	}*/
	//obj的键若多于defaultObj，不会存在增加defaultObj的键，故采用此种
	for(let key in defaultObj){
		obj[key]&&(defaultObj[key]=obj[key]);//逻辑短路
	}
	//1.创建对象
	let xhr = new XMLHttpRequest();
	//2.设置请求参数
	let urlAndParam = defaultObj.url;
	if(defaultObj.method.toLowerCase()=="get" && defaultObj.param!=''){
		urlAndParam += "?"+defaultObj.param;
	}
	xhr.open(defaultObj.method,urlAndParam,defaultObj.isAsync);//此处需注意
	//3.设置回调函数
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){
			defaultObj.func&&defaultObj.func(xhr.responseText);
		}
	}
	//4.发送请求
	if(defaultObj.method.toLowerCase()=="post"){
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(defaultObj.param);
	}else{
		xhr.send();
	}
}
//功能：使用Promise发送ajax请求,无回调函数
//参数：参数是json对象包含：请求方式、请求地址、请求参数、是否异步
//并有默认值
//返回值：无，
/*ajax03({
	url:"t.php",
	param:"a=1&b=2",
});*/
function ajax04UsePromise(obj){
	let defaultObj={
		method:"get",
		url:"#",
		isAsync:true,
		param:""
	}
	for(let key in defaultObj){
		obj[key]&&(defaultObj[key]=obj[key]);
	}
	let xhr=new XMLHttpRequest();
	let urlAndParam=defaultObj.url;
	if(defaultObj.method.toLowerCase()=="get" && defaultObj.param!=""){
		urlAndParam+="?"+defaultObj.param;
	}
	xhr.open(defaultObj.method,urlAndParam,defaultObj.isAsync);
	//将回调函数放到Promise对象中
	let p=new Promise(function(resolve,reject){
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4 && xhr.status==200){
				resolve&&resolve(xhr.responseText);
			}
		}
	});
	if(defaultObj.method.toLowerCase()=="post"){
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(defaultObj.param);
	}else{
		xhr.send();
	}
	return p;//此处注意
}
	