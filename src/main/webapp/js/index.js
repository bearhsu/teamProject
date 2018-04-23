$(document).ready(function(){
	

	
	
	$(window).scroll(function(){
        if($(window).scrollTop()>=$(".p01").offset().top && $(window).scrollTop()<$(".p02").offset().top){
			$(".nav li").css("background-color","white")//除了被點擊到的游標，其他都恢復成原來的顏色
			$(".nav li:eq(0)").css("background-color","#46dd46")
        }else if($(window).scrollTop()>=$(".p02").offset().top && $(window).scrollTop()<$(".p03").offset().top){
			$(".nav li").css("background-color","white")//除了被點擊到的游標，其他都恢復成原來的顏色
			$(".nav li:eq(1)").css("background-color","#46dd46")
        }else if($(window).scrollTop()>=$(".p03").offset().top && $(window).scrollTop()<$(".p04").offset().top){
			$(".nav li").css("background-color","white")//除了被點擊到的游標，其他都恢復成原來的顏色
			$(".nav li:eq(2)").css("background-color","#46dd46")
		}else if($(window).scrollTop()>=$(".p04").offset().top && $(window).scrollTop()<$(".p05").offset().top){
			$(".nav li").css("background-color","white")//除了被點擊到的游標，其他都恢復成原來的顏色
			$(".nav li:eq(3)").css("background-color","#46dd46")
        }else if($(window).scrollTop()>=$(".p05").offset().top){
			$(".nav li").css("background-color","white")//除了被點擊到的游標，其他都恢復成原來的顏色
			$(".nav li:eq(4)").css("background-color","#46dd46")
        }
    })
	
	console.log("offset(p01):"+$(".p01").offset().top)
    console.log("offset(p02):"+$(".p02").offset().top)
    console.log("offset(p03):"+$(".p03").offset().top)
    console.log("offset(p04):"+$(".p04").offset().top)
    console.log("offset(p05):"+$(".p05").offset().top)
    console.log("scrollTop:"+$(window).scrollTop())

	n = 1
	moving = 0
	$(window).mousewheel(function(e){
		$("html,body").stop()
		if(moving == 0){
			moving = 1
			if(e.deltaY == -1){
				if(n<num_li){
					n++				
				}
			}else{
				if(n>1){
					n--				
				}
			}
		}
		$("html,body").animate({"scrollTop":$(".p0"+n).offset().top},function(){moving=0})
		console.log(n)
	})
	
	//移動到指定頁面
	var num_li=$("li").length
	for(i=0;i<=num_li;i++){
		$(".nav li:eq("+i+")").click({id:i},function(e){
			$(".nav li").css("background-color","white")
			page = e.data.id+1
			$("html,body").animate({"scrollTop":$(".p0"+page).offset().top})
			$(".nav li:eq(" + e.data.id + ")").css("background-color","#46dd46")
			n = e.data.id+1
		})
	}
		
	center();
	
	$(window).resize(function(){
		center();
	})
	
    function center(){
		pos=$(window).height()/2-$(".nav").height()/2
		$(".nav").css("top",pos);
    }
	
})