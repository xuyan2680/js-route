(function($) {
	/** 
	 *  路由规则注册 eg:hash.jsp
	 * 	定义hash事件 锚点定义规则#/details/{type}/{id}
	 *  返回对象:返回键值对对象{id:v1,type:v2,...}
	 *  eg:
	 *  route:{
	 *	/detail/{id}/{type}:function(obj){
	 *	 	alert(obj.id+'||'+obj.type);
	 *	  }
	 *  }
	 **/
	$.extend({
		useRoute : function(route) {
			window.onhashchange = function() {
				var hashstr = location.hash;
				hashstr = hashstr.substring(1);
				for(url in route){
					// 转换/detail/{type}/{id} 为/detail/([^\/]*)/([^\/]*) 正则表达式
					var urlpattern = url.replace(/\{.*?\}/ig,'([^\/]*)');
					// 加上尾边界$
					urlpattern = urlpattern+"$";
					var regExp = new RegExp(urlpattern);
					//hash匹配，能匹配上，1:提取key 2:提取值 3:执行回调函数
					if(regExp.test(hashstr)){
						//1 提取key
						var key = url.replace(/{/g,'');
						key = key.replace(/}/g,'');
						var keyarry = key.match(regExp);
						//2 提取值
						var valuearray = hashstr.match(regExp);
						var len = valuearray.length;
						var retobj = {};
						for(i=1;i<len;i++){
							retobj[keyarry[i]] = valuearray[i];
						}
						//回调函数
						if(route[url])
							route[url](retobj);
						break;
					}else{
						continue;
					}
				}
			}
			function special(){
				var appv = window.navigator.appVersion;
				if (appv.indexOf('MSIE 7') === -1 && appv.indexOf('MSIE 6') === -1){
					window.onhashchange();
					return;
				}
				var lurl = window.location.href;
				window.setInterval(function() {
					var curl = window.location.href;
					if (lurl == curl)
						return;
					lurl = curl;
					if (window.onhashchange)
						window.onhashchange();
				}, 500);
			}
			special();
		}
	});
})(jQuery);