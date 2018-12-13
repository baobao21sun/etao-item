<?php 
	header("Content-type:text/html;charset=utf-8");
	//1.接收数据
	$username = $_POST['userName'];
	$userpass = $_POST['userPass'];
	//2.判断、处理
	//a.连接数据库的服务器
	$con = mysql_connect("localhost","root","root");
	if(!$con){
		echo die("服务器连接失败".mysql_error());
	}else{
		// echo "服务器连接成功".'<br/>';
		//b.选择数据库
		mysql_select_db("yanglisql",$con);
		//c.执行SQL语句
		//1)查询注册名是否存在于数据库中
		$str="select * from emp where empname='$username'";
		$result=mysql_query($str,$con);//返回一个表格
		$rows=mysql_num_rows($result);//返回表格的行
		if($rows==0){//注册名可用
			echo "0";
		}else{//注册名已存在
			echo "1";
		}
	}
?>