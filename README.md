#js-route

\<body\> <br>
    \\<div id="test"\> <br>
		\<a href="type/page/1"\>type/page/1\</a\> <br>
		\<a href="type/page/2"\>type/page/2\</a\> <br>
		\<a href="type/page/3"\>type/page/3\</a\> <br>
		\<a href="type/1/id/3"\>type/1/id/3\</a\> <br>
	\</div> <br>
 \</body> <br>

 \<script type="text/javascript"\>
	$(function(){
		//注册路由 与 回调方法
		$.useRoute({
			"type/page/{id}":function(retobj){
				alert(retobj.id)
			},
			"type/{type}/id/{id}":function(retobj){
				alert(retobj.type+'||'+retobj.id)
			}
		});
	});
 \</script\>

