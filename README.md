#js-route
### html 代码
	<body>
		<div id="test">
		<a href="type/page/1"\>type/page/1</a>
		<a href="type/page/2"\>type/page/2</a>
		<a href="type/page/3"\>type/page/3</a>
		<a href="type/1/id/3"\>type/1/id/3</a>
		</div>
	</body>
### js 代码
	<script type="text/javascript"> <br>
		$(function(){
			//注册路由 与 回调方法
			$.useRoute({
				"type/page/{id}":function(retobj){
					alert(retobj.id);
				}, <br>
				"type/{type}/id/{id}":function(retobj){
					alert(retobj.type+'||'+retobj.id);
				}
			});
		});
 	</script>

