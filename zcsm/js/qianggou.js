/**
 * Created by Lenovo on 2016/7/13.
 */

(function () {
	function refresh(hou, min, sec, myendtime) {
		var endTime = new Date(myendtime);
		var nowTime = new Date();
		var leftsecond = parseInt((endTime.getTime() - nowTime.getTime()) / 1000);
		if (leftsecond < 0) {
			leftsecond = 0;
		}
		day = parseInt(leftsecond / 3600 / 24);
		hour = parseInt((leftsecond / 3600) % 24);
		minute = parseInt((leftsecond / 60) % 60);
		second = parseInt(leftsecond % 60);

		if (hour < 10) {
			$(hou).html("0" + hour);
		} else {
			$(hou).html(hour);
		}

		if (minute < 10) {
			$(min).html("0" + minute);
		} else {
			$(min).html(minute);
		}

		if (second < 10) {
			$(sec).html("0" + second);
		} else {
			$(sec).html(second);
		}
	}

	refresh();

	window.refresh = refresh;
})();
$(function(){

	var time;

		$.ajax({
			type: "get",
			url: "http://localhost/time.php",
			dataType: "json",
			success: function (data) {

				qianggouView(data);
			},
			error: function (e) {

			}
		});

	function qianggouView(data){
		//$(".timee").html("");
		if(new Date().getHours()>=0 && new Date().getHours()<8){
			$(data[0]).each(function(index,ele){
				$(".timee").eq(index).html(data[4][index]);
			})
		}
		if(new Date().getHours()>=8 && new Date().getHours()<12){
			$(data[0]).each(function(index,ele){
				$(".timee").eq(index).html(data[0][index]);
			})
		}
		if(new Date().getHours()>=12 && new Date().getHours()<16){
			$(data[0]).each(function(index,ele){
				$(".timee").eq(index).html(data[1][index]);
			})
		}
		if(new Date().getHours()>=16 && new Date().getHours()<20){
			$(data[0]).each(function(index,ele){
				$(".timee").eq(index).html(data[2][index]);
			})

		}
		if(new Date().getHours()>=20 && new Date().getHours()<24){
			$(data[0]).each(function(index,ele){
				$(".timee").eq(index).html(data[3][index]);
			})
		}
	}

	(function tt(m){
		refresh($(".timea i:nth-child(1)"),$(".timea i:nth-child(2)"),$(".timea i:nth-child(3)"),"june 18,2019 "+m+":00");
		window.tt=tt;
	})();
	time=setInterval('tt($(".ccc").html())',1000);
	$(".ba li").on("click",function(){
		clearInterval(time);
		if($(this).index() == 0){
			$(this).addClass("active").siblings().removeClass("active");
			time=setInterval('tt($(".ccc").html())',1000);
		}else{
			$(this).addClass("active").siblings().removeClass("active");
			time=setInterval('tt($(".active>span").html())',1000);
		}

	})
});