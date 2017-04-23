// Èë¿ÚÎÄ¼þ
var app=angular.module("myapp",['routeJs','ngRoute']);
app.controller("mainctrl",function($scope){
	//用户名
	$scope.userName = '刘承睿';
	//用户头像地址
	$scope.photosrc = 'images/b2.jpg';
	//粉丝数
	$scope.fans = 250;
	//点赞数
	$scope.like = 2000;
	//下拉菜单默认显示
	$scope.listShow = false;
	//左侧边栏默认显示
	$scope.leftShow = true;
	//默认没有点赞
	$scope.dis1 = false;
	//默认没有关注
	$scope.dis2 = false;

	$scope.list = [{'name':'首页'},{'name':'简介'},{'name':'信息'}];

	//点赞方法
	$scope.likeIt = function(){	
		$scope.like = $scope.like+1;
		if (!$scope.dis1) {	
			$scope.dis1 = true;
		}
		document.getElementById('likeId').innerHTML="已赞";
	}

	$scope.focusIt = function(){	
		$scope.fans = $scope.fans+1;
		if (!$scope.dis2) {	
			$scope.dis2 = true;
		}
		document.getElementById('focusId').innerHTML="已关注";
	}

	//sendMsg方法
	$scope.sendMsg = function(){	
		//获取当前用户名
		var username = $scope.userName;
		//获取当前头像地址
		var photo = $scope.photosrc;
		//获取输入内容
		var msg = document.getElementById('commentMsg').value;
		//设置为空
		document.getElementById('commentMsg').value = "";
		//发出的评论
		$scope.commentMsg = msg;
		//新建div，并设置为评论格式
		var newItem = document.createElement("div");
		//获取当前时间
		var myDate = new Date();
		var mytime = myDate.toLocaleTimeString();
		newItem.innerHTML = "<div class='m-l-lg'><a class='pull-left thumb-sm avatar'><img src='"+photo+"'></a><div class='m-l-xxl panel b-a'><div class='panel-heading pos-rlt'><span class='arrow left pull-up'></span><span class='text-muted m-l-sm pull-right'>"+mytime+"</span><a href=''>"+username+"：</a>"+msg+"</div></div></div>";
		document.getElementById("commentArea").insertBefore(newItem,document.getElementById('comment'));

	}
	$scope.submit = function(){	
		//用户名修改
		var username=document.getElementById("inputUsername").value;
		$scope.userName=username;
		//头像地址修改
		var photosrc=document.getElementById("inputSrc").value;
		if(photosrc=="")
		{
			$scope.photosrc="images/b2.jpg";
		}
		else
		{
			$scope.photosrc="images/"+photosrc.substr(12);
		}
	}

	$scope.displayList = function(){	
		$scope.listShow=!$scope.listShow;
	}

	$scope.displayLeft = function(){	
		$scope.leftShow = !$scope.leftShow;

	}
});
