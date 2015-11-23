#js-route
### html 代码
>\<body\> <br>
>	\<div id="test"\> <br>
>		\<a href="type/page/1"\>type/page/1\</a\> <br>
>		\<a href="type/page/2"\>type/page/2\</a\> <br>
>		\<a href="type/page/3"\>type/page/3\</a\> <br>
>		\<a href="type/1/id/3"\>type/1/id/3\</a\> <br>
>	\</div> <br>
> \</body> <br>
### js 代码
 \<script type="text/javascript"\> <br>
	$(function(){ <br>
		//注册路由 与 回调方法 <br>
		$.useRoute({ <br>
			"type/page/{id}":function(retobj){ <br>
				alert(retobj.id) <br>
			}, <br>
			"type/{type}/id/{id}":function(retobj){ <br>
				alert(retobj.type+'||'+retobj.id) <br>
			} <br>
		}); <br>
	}); <br>
 \</script\>

