/**
 * Created by Lenovo on 2016/7/9.
 */
$(function () {
	var timer;
	var n=0;
	var length=$(".banner3 img").length;
	function banner3(){
		$(".banner3 img").eq(n).show().siblings().hide();
		n=n>=length-1?0:++n;

	}
	//banner3();
	setInterval(function(){
		banner3();
	},3000);

	function refresh() {
		var endTime=new Date("July 17,2016 20:00:00");
		var nowTime=new Date();
		var leftsecond=parseInt((endTime.getTime()-nowTime.getTime())/1000);
		if(leftsecond<0){
			leftsecond=0;
		}
		var hour=parseInt((leftsecond/3600)%24);
		var minute=parseInt((leftsecond/60)%60);
		var second=parseInt(leftsecond%60);
        if(hour<10){
	        $(".time i:nth-child(1)").html("0"+hour);
        }else{
	        $(".time i:nth-child(1)").html(hour);
        }

        if(minute<10){
	        $(".time i:nth-child(2)").html("0"+minute);
        }else{
	        $(".time i:nth-child(2)").html(minute);
        }
        if(second<10){
	        $(".time i:nth-child(3)").html("0"+second);
        }else{
	        $(".time i:nth-child(3)").html(second);
        }
	}
	refresh();
	timer=setInterval(refresh,1000);

	getShopData();
	function getShopData(){
		$.ajax({
			type: "get",
			url: "http://iwen.wiki/zhichenshop/shop.php",
			dataType: "json",
			success: function (data) {
				shoplistViewAdapter(data,shopView);

			},
			error: function (errordata) {
				log(errordata);
			}
		});
	}

	function shoplistViewAdapter(data,callback) {
		for (var i = 1; i < data.length; i++) {
			var cloneli = $(".shopli").eq(0).clone();
			cloneli.attr("data-shopid",i);
			$(".shoplist").append(cloneli);
			callback(data);
		}
	}

	function shopView(data) {
		$(".shopli").each(function (index,ele) {
			$(".bl").eq(index).attr('src', data[index%5].shopicon);
			$(".bm>h2").eq(index).text(data[index%5].shopname);
			$(".cb").eq(index).text(data[index%5].shopnum + "件商品" + " | " + "月售" + data[index%5].sell + "单");
		})
	}

	$(window).scroll(function(){
		var lastShop = $(".shopli:last").offset().top;
		var scrollHeight = $(window).scrollTop();
		var winHeight = $(window).height();
		if(lastShop < scrollHeight+winHeight){
			getShopData();
			addIndex+=5;
		}

	});
});
