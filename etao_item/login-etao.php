<?php 
	header("Content-type:text/html;charset=utf-8");
	//1.接收数据
	$username = $_POST['userName'];
	$userpass = $_POST['userPass'];
	//2.查询，响应
	$con=mysql_connect("localhost","root","root");
	if(!$con){
		//die('服务器连接失败'.mysql_error());
	}else{
		//echo '服务器连接成功'.'<br/>';
		mysql_select_db("yanglisql",$con);
		$str="select * from emp where empname='$username' and emppass='$userpass'";
		$result=mysql_query($str,$con);
		$rows=mysql_num_rows($result);
		mysql_close($con);
		if($rows==0){
			//3.响应
			echo "登录失败,请重新<a href='login-etao.html'>登录</a>";
		}else{
			echo "登录成功,请进入<a href='index-etao.html'>首页</a>";
		}
		/*if($rows==0){
			echo "登录失败";
		}else{
			echo "登录成功";
		}*/
	}
 ?>