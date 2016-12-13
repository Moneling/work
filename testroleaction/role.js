$(function(){
	var roleData=[
    {
        "text":"系统管理",
        "id":"module-2",
        "iconCls":"null",
        "url":"",
        "leaf":"false",
        "children":[
            {
                "text":"管理员管理",
                "id":"module-3",
                "iconCls":"null",
                "url":"security_add",
                "leaf":"true",
                "children":[
                    
                ]
            },
            {
                "text":"权限组管理",
                "id":"module-4",
                "iconCls":"null",
                "url":"security_add",
                "leaf":"true",
                "children":[
                    
                ]
            },
            {
                "text":"模块管理",
                "id":"module-20",
                "iconCls":"null",
                "url":"module_delete",
                "leaf":"true",
                "children":[
                    
                ]
            },
            {
                "text":"登录注销日志",
                "id":"module-22",
                "iconCls":"null",
                "url":"monitor_update",
                "leaf":"true",
                "children":[
                    
                ]
            },
            {
                "text":"系统日志",
                "id":"module-11",
                "iconCls":"null",
                "url":"module_scan",
                "leaf":"true",
                "children":[
                    
                ]
            }
        ]
    },
    {
        "text":"素材管理",
        "id":"module-26",
        "iconCls":"null",
        "url":"",
        "leaf":"false",
        "children":[
            {
                "text":"文本消息创建",
                "id":"module-27",
                "iconCls":"null",
                "url":"management_update",
                "leaf":"true",
                "children":[
                    
                ]
            },
            {
                "text":"图文消息创建",
                "id":"module-29",
                "iconCls":"null",
                "url":"management_add",
                "leaf":"true",
                "children":[
                    
                ]
            },
            {
                "text":"素材消息创建",
                "id":"module-28",
                "iconCls":"null",
                "url":"management_update",
                "leaf":"true",
                "children":[
                    
                ]
            }
        ]
    },
    {
        "text":"公众号管理",
        "id":"module-30",
        "iconCls":"null",
        "url":"",
        "leaf":"false",
        "children":[
            {
                "text":"公众号信息",
                "id":"module-31",
                "iconCls":"null",
                "url":"management_update",
                "leaf":"true",
                "children":[
                    
                ]
            }
        ]
    },
    {
        "text":"微信用户管理",
        "id":"module-58",
        "iconCls":"null",
        "url":"",
        "leaf":"false",
        "children":[
            {
                "text":"关注用户",
                "id":"module-59",
                "iconCls":"null",
                "url":"management_add",
                "leaf":"true",
                "children":[
                    
                ]
            },
            {
                "text":"取消关注用户",
                "id":"module-66",
                "iconCls":"null",
                "url":"management_delete",
                "leaf":"true",
                "children":[
                    
                ]
            }
        ]
    },
    {
        "text":"消息管理",
        "id":"module-60",
        "iconCls":"null",
        "url":"",
        "leaf":"false",
        "children":[
            {
                "text":"接收消息",
                "id":"module-61",
                "iconCls":"null",
                "url":"management_scan",
                "leaf":"true",
                "children":[
                    
                ]
            },
            {
                "text":"群发消息",
                "id":"module-64",
                "iconCls":"null",
                "url":"management_add",
                "leaf":"true",
                "children":[
                    
                ]
            },
            {
                "text":"消息自动回复",
                "id":"module-53",
                "iconCls":"null",
                "url":"management_add",
                "leaf":"true",
                "children":[
                    
                ]
            },
            {
                "text":"分组管理",
                "id":"module-68",
                "iconCls":"null",
                "url":"management_scan",
                "leaf":"true",
                "children":[
                    
                ]
            }
        ]
    },
    {
        "text":"活动发布",
        "id":"module-83",
        "iconCls":"null",
        "url":"",
        "leaf":"false",
        "children":[
            {
                "text":"活动管理",
                "id":"module-84",
                "iconCls":"null",
                "url":"management_update",
                "leaf":"true",
                "children":[
                    
                ]
            },
            {
                "text":"抽奖详情",
                "id":"module-89",
                "iconCls":"null",
                "url":"management_add",
                "leaf":"true",
                "children":[
                    
                ]
            }
        ]
    },
    {
        "text":"公众号菜单管理",
        "id":"module-93",
        "iconCls":"null",
        "url":"",
        "leaf":"false",
        "children":[
            {
                "text":"菜单管理",
                "id":"module-32",
                "iconCls":"null",
                "url":"management_update",
                "leaf":"true",
                "children":[
                    
                ]
            }
        ]
    }
]

/*var roleAction =roleData[0].children[0].url;
	$(".btn").hide();
	userRoleArr =roleAction.split("_");
	if(userRoleArr!=0){
		userAction = userRoleArr[1]
		$("."+userAction).show();
	}*/
   /* var listLeft =$(".mid-left");
    var dataChild=roleData.length;
            console.log(roleData[6].text);
            console.log(dataChild);
            for(var i=0;i<dataChild;i++){
                $(roleData[i]).text;
                console.log(roleData[i].text);
                
            }*/
    getPageUrl("ifr")

    function getPageUrl(id){
    var page = $("#"+id);
        var pageUrl =  $(page, parent.document).attr("src");
        var requestUrl=""
        var requestData=""
                console.log("url:::"+pageUrl);
        $.ajax({
         url:pageUrl,
         data:requestData,
         async:true,
         cache:false,
         dataType:"json",
         type:"post",
         success:function(resultData){
             var data =["user_updatePart","user_detail","user_search","user_query","user_reset"]
             //var data1 =resultData;
             /*根据"_"解析字符串  将新的字符串组成一个新的数组*/
            var classArr =[]
                for(var i=0;i<data.length;i++){
                    classArr.push(data[i].split("_")[1])
                }
       /* 默认全部操作按钮不显示*/
         $(".btn").hide();
         for(var j=0;j<classArr.length;j++){
            (function(j){
              $("."+classArr[j]).show();
            })(j)
                    
         }
                    console.log("请求成功....");
         },
         error:function(){
            console.log("请求失败....");
         }
         
     });

    }

})