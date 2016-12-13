(function(window){
	// 添加一级菜单按钮

	var addmenuItems = document.getElementById("add-menu-items");
var menuName =document.getElementById("menu-name");//菜单文本框
var menuUrlName =document.getElementById("menu-url-name");//菜单url文本框
var menuSend =document.getElementsByName("menu-send");
var menuAdd=document.getElementById("menu-add");
//再次添加菜单按钮 菜单栏的加号
var menuSecendAdd=document.getElementById("add-new-items");
//获取右面是否显示
var menuDtailContent=document.getElementById("menuDtailContent");
//获取图文信息区域
var contentTypeText=document.getElementById("content-type-text");
//获取url信息区域
var contentTypeUrl=document.getElementById("content-type-url");

var menuItems = document.getElementById("menu-items");
//二次添加符号“＋”
var menuItemAdd =document.getElementById("menu-item-add");
//保存并发布
var saveSubmit =document.getElementById("save-submit");

//默认不显示url输入
contentTypeUrl.style.display="none";

//初始化数据库
var menuList ={"items":[{"text":"菜单22","type":"send-msg","id":"9870472945800697","typeValue":"这里是自定义的文本信息"},
{"text":"菜单33","type":"send-msg","id":"1210756470570773","typeValue":"这里是自定义的文本信息"},
{"text":"菜单444","type":"send-msg","id":"8624156396620348","typeValue":"这里是自定义的文本信息"}]}

showmenuType()
//首次加载判断页面菜单结构显示内容
function showmenuType(){
	if(menuList.length==0){
		menuDtailContent.style.display="none";
		menuItems.style.visibility="hidden";
	}	
	else {
		menuAdd.style.display="none";
	menuItems.style.visibility="visible";
		
	
}
//初次添加菜单
addmenuItems.addEventListener("click",function(){
	getLocalData();

})

	//再次添加菜单
menuSecendAdd.addEventListener("click",function(){
	alert("fff")
	getLocalData();
})
	


// 保存数据（其实是更新）
saveSubmit.addEventListener("click",function(){
	getLocalData();
	alert("success......")
})
//获取本地数据 将数据封装为一个json 添加到数据库
function getLocalData(){
	//默认菜单选择内容类型
	var menuSendValue="";
	var menuSendTypeValue="";
	//菜单标题
	var menuNameValue =menuName.value?menuName.value:"菜单一";

	for(var i=0;i<menuSend.length;i++){
		if(menuSend[i].checked){
			menuSendValue =menuSend[i].value;

		}
	}
	if(menuSendValue=="send-msg"){
		menuSendTypeValue="这里是自定义的文本信息"
	}
	else if(menuSendValue=="send-url"){
		menuSendTypeValue=menuUrlName.value;
	}else {
		console.log("there is err");
	}

	menuList.push({
		text:menuNameValue,
		type:menuSendValue,
		id:Math.random().toString().substring(2),
		typeValue:menuSendTypeValue
	})
	strorData(menuList);
	getLineData("items");
	setSecondmenuPostion();
	window.location.reload();
}
getLineData("items");

//获取数据库数据 根据数据库数据显示前台数据
function getLineData(items) {
			console.log(menuList);
	//var menuList =JSON.parse(window.localStorage.getItem("items") || '[]');
			var str="";
			for(var i=0;i<menuList.items.length;i++){
				var appendEle=`<div class="menu-item menuStyle">${menuList.items[i].text}
							<div class ="secend-menu">
								<ul><li><a href="#"  class="addSecondmenu">+</a></li></ul>
								</div>
							</div>
						</div>`;
						str+=appendEle;	
				}
					
		if(menuList.length>0 && menuList.length<=3){
			menuAdd.style.display="none";
			menuItemAdd.style.visibility="visible";
			return;
		}else {
			//menuAdd.style.display="none";
			menuItemAdd.style.display="none";
			return;
		}
	menuItems.innerHTML+=str;
}

// window 下挂载一个全局函数用于发送内容模块切换显示
window["sendtype"] = function(){
	for(var i=0;i<menuSend.length;i++){
		if(menuSend[i].checked==true){
			if(menuSend[i].value=='send-msg'){
				contentTypeUrl.style.display="none";
				contentTypeText.style.display="block";
			}else if(menuSend[i].value=='send-url'){
				contentTypeUrl.style.display="block";
				contentTypeText.style.display="none";
			}
		}
	}
};

 //数据持久化
 /*function strorData(menuList){
 	window.localStorage.setItem("items",JSON.stringify(menuList));
 	var menuLists=JSON.parse(window.localStorage.getItem("items") || '[]');
 	showOfState(menuLists);
 }*/
//该方法用于显示发送类型模块
function showOfState(state){
	if(state.length!=0){
		menuDtailContent.style.display="block";
		menuAdd.style.display="none";
	}
/*	else {
		menuDtailContent.style.display="none";
		menuAdd.style.display="block";
	}	*/
}
setSecondmenuPostion()
function setSecondmenuPostion(){
	//二级菜单标题
	var menuItems = document.querySelectorAll(".menu-item");
	var secendmenus = document.querySelectorAll(".secend-menu");
		//设置子菜单的显示位置
		for(var i=0;i<secendmenus.length;i++){
			secendmenus[i].style.top = "-"+(parseInt( secendmenus[i].offsetHeight)+15)+"px";
			secendmenus[i].style.visibility ="hidden";

		}
		for(var i=0;i<menuItems.length;i++){
			menuItems[i].onclick=function(){
				for(var j=0;j<menuItems.length;j++){
					menuItems[j].className="menu-item menuStyle";

					if(menuItems[j].childNodes.length>0){
						menuItems[j].childNodes[1].style.visibility="hidden";
					}
				}

				this.className="menu-item menuStyle active";
				if(this.className=="menu-item menuStyle active"){
					var _that =this.childNodes[1];
					_that.style.visibility="visible";
				}
			}
		}
	}

 
		/*添加二级菜单*/

	var addSecondmenu= document.querySelectorAll(".addSecondmenu");
		for(var i=0;i<addSecondmenu.length;i++){
			addSecondmenu[i].onclick= function(){
				var newLi = document.createElement("li");
				console.log(3333);
				newLi.innerHTML="子菜单一";
				this.parentNode.parentNode.insertBefore(newLi,this.parentNode);
				var secendmenus = document.querySelectorAll(".secend-menu");
				var secendmenusUl = document.querySelectorAll(".secend-menu ul li")[0];
				var secendmenusUlHeight = document.querySelectorAll(".secend-menu ul li")[0].offsetHeight;
				//设置子菜单的显示位置
				for(var i=0;i<secendmenus.length;i++){
					secendmenus[i].style.top = "-"+(parseInt( secendmenus[i].offsetHeight)+15)+"px";
					if(this.parentNode.parentNode.childNodes.length==6){
						this.parentNode.parentNode.removeChild(this.parentNode);
						secendmenus[i].style.top = "-"+(parseInt( secendmenus[i].offsetHeight)+15)+"px";
					}}
			
		}
	}

}

		
//获取本地数据 将数据封装为一个json 添加到数据库
function getLocalData(){
	//默认菜单选择内容类型
	var menuSendValue="";
	var menuSendTypeValue="";
	//菜单标题
	var menuNameValue =menuName.value?menuName.value:"菜单一";

	for(var i=0;i<menuSend.length;i++){
		if(menuSend[i].checked){
			menuSendValue =menuSend[i].value;

		}
	}
	if(menuSendValue=="send-msg"){
		menuSendTypeValue="这里是自定义的文本信息"
	}
	else if(menuSendValue=="send-url"){
		menuSendTypeValue=menuUrlName.value;
	}else {
		console.log("there is err");
	}

	menuList.push({
		text:menuNameValue,
		type:menuSendValue,
		id:Math.random().toString().substring(2),
		typeValue:menuSendTypeValue
	})
	strorData(menuList);
	getLineData("items");
	setSecondmenuPostion();
	//window.location.reload();
}
getLineData("items");

//获取数据库数据 根据数据库数据显示前台数据
function getLineData(items) {
	var menuList =JSON.parse(window.localStorage.getItem("items") || '[]');
			var str="";
			for(var i=0;i<menuList.length;i++){
				var appendEle=`<div class="menu-item menuStyle">${menuList[i].text}
							<div class ="secend-menu">
								<ul><li><a href="#"  class="addSecondmenu">+</a></li></ul>
								</div>
							</div>
						</div> `;
						str+=appendEle;	
				}
		if(menuList.length>0 && menuList.length<3){
			menuAdd.style.display="none";
			menuItemAdd.style.visibility="visible";
		}else {
			//menuAdd.style.display="none";
			menuItemAdd.style.display="none";
		}
		menuItems.innerHTML+=str;
}
// showFirstmenu();
function showFirstmenu(){
	var menuList = getLineData("items");
	for(var i=0;i<menuList.length;i++){
		var menuDiv = document.createElement("div");
		menuDiv.innerHTML =menuList[i].text;
		menuDiv.className ="menu-item menuStyle";
		menuItems.appendChild(menuDiv);

	}
}
// window 下挂载一个全局函数用于发送内容模块切换显示
window["sendtype"] = function(){
	for(var i=0;i<menuSend.length;i++){
		if(menuSend[i].checked==true){
			if(menuSend[i].value=='send-msg'){
				contentTypeUrl.style.display="none";
				contentTypeText.style.display="block";
			}else if(menuSend[i].value=='send-url'){
				contentTypeUrl.style.display="block";
				contentTypeText.style.display="none";
			}
		}
	}
};

 //数据持久化
 function strorData(menuList){
 	window.localStorage.setItem("items",JSON.stringify(menuList));
 	var menuLists=JSON.parse(window.localStorage.getItem("items") || '[]');
 	showOfState(menuLists);
 }
//该方法用于显示发送类型模块
function showOfState(state){
	if(state.length!=0){
		menuDtailContent.style.display="block";
		menuAdd.style.display="none";
	}	
}
setSecondmenuPostion()
function setSecondmenuPostion()
	{
	//二级菜单标题
	var menuItems = document.querySelectorAll(".menu-item");
	var secendmenus = document.querySelectorAll(".secend-menu");
		//设置子菜单的显示位置
		for(var i=0;i<secendmenus.length;i++){
			secendmenus[i].style.top = "-"+(parseInt( secendmenus[i].offsetHeight)+15)+"px";
			secendmenus[i].style.visibility ="hidden";

		}
		for(var i=0;i<menuItems.length;i++){
			menuItems[i].onclick=function(){
				for(var j=0;j<menuItems.length;j++){
					menuItems[j].className="menu-item menuStyle";

					if(menuItems[j].childNodes.length>0){
						menuItems[j].childNodes[1].style.visibility="hidden";
					}
				}

				this.className="menu-item menuStyle active";
				if(this.className=="menu-item menuStyle active"){
					var _that =this.childNodes[1];
					_that.style.visibility="visible";
				}
			}
		}
	}


/*添加二级菜单*/
addSecendmenuFn();
function addSecendmenuFn(){
	var addSecondmenu= document.querySelectorAll(".addSecondmenu");
		for(var i=0;i<addSecondmenu.length;i++){
			addSecondmenu[i].onclick= function(){
				var newLi = document.createElement("li");
				newLi.innerHTML="子菜单一";
				this.parentNode.parentNode.insertBefore(newLi,this.parentNode);
				var secendmenus = document.querySelectorAll(".secend-menu");
				var secendmenusUl = document.querySelectorAll(".secend-menu ul li")[0];
				var secendmenusUlHeight = document.querySelectorAll(".secend-menu ul li")[0].offsetHeight;
		//设置子菜单的显示位置
		for(var i=0;i<secendmenus.length;i++){
			secendmenus[i].style.top = "-"+(parseInt( secendmenus[i].offsetHeight)+15)+"px";
			if(this.parentNode.parentNode.childNodes.length==6){
				this.parentNode.parentNode.removeChild(this.parentNode);
				secendmenus[i].style.top = "-"+(parseInt( secendmenus[i].offsetHeight)+15)+"px";
			}}
		}
	}
}
	


})(window);
