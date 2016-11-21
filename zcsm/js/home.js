/**
 * Created by Lenovo on 2016/7/11.
 */
$(function(){
	$(".u10").on("click","li",function(e){
		$(this).addClass("um").siblings().removeClass("um");
		$(".uk").html("");
		getCategoryData(e.target.innerHTML);
	});


	/*
	* 解析URL
	* */

	function getQueryStringArgs() {
		var qs = location.search.length > 0 ? location.search.substring(1) : "";
		var args = {};
		var item = [];
		var name = null;
		var value = null;
		var items = qs.length ? qs.split("&") : [];
		for (var i = 0; i < items.length; i++) {
			item = items[i].split("=");
			name = item[0];
			value = item[1];

			if (name.length) {
				args[name] = value;
			}
		}
		return args;
	}

	if(getQueryStringArgs().rightnav){
		$(".ud").focus();
		getFocusHandler();
	}


	getCategoryData("水果蔬菜");


	function getCategoryData(cat) {
		$.ajax({
			type: "get",
			url: "http://iwen.wiki/zhichenshop/category.php",
			data: {
				category: cat
			},
			dataType: "json",
			success: function (data) {
				console.log(data);
				categoryView(data);
			},
			error: function (dataerror) {
				console.log(dataerror);
			}
		})
	}

	function categoryView(data) {
		$(data).each(function (index) {
			$(".uk").append("<dl><dt>"+data[index].fruit+"</dt><dd class='uq'></dd></dl>");
			$(data[index].fruitimg).each(function (sonindex) {
				$(".uq").eq(index).append("<a href='#'><img src='" + data[index].fruitimg[sonindex] + "'><span>" + data[index].fruitdesc[sonindex] + "</span></a>");
			})
		});

	}

	});


