/**
 * Created by DELL on 2017/6/27.
 */

;(function(){
 var more = document.querySelector(".more")
     ,sidebar = document.querySelector("#sidebar")
     ,mask = document.querySelector("#mask")
     ,close_bar = document.querySelector(".fa-close")
     ,scroll_top = document.querySelector("#scroll_top")
     ,side_width
     ,section_green = document.querySelector('.green-section')
     ,double_down = document.querySelector(".fa-angle-double-down")

 ;


 // scroll_top.onclick = function () {
 //     document.documentElement.scrollTop = document.body.scrollTop =0;
 // };

/*
double_down.onclick = function () {


};*/

 /*
 页面所有的点击事件
  */


    //点击more触发onclick事件，打开sidebar
    more.onclick = sidebarShow;
    //点击mask\close_bar触发onclick事件，关闭sidebar
    mask.onclick = sidebarHide;
    close_bar.onclick = sidebarHide;

    //点击double_down
/*    double_down.onclick = function () {
        // var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        // var scroll_height = document.documentElement.clientHeight;
        // scroll_top = scroll_height + "px";
        // document.documentElement.scrollTop = scroll_top + "px";
document.body.scrollTop = '575px';
    };*/









/*
* 页面所有定义的函数
* */

    function $(id) {
        return document.getElementById(id);
    }

    function sidebarShow(){
        sidebar.style.right = 0;
        show(mask);

    }

    function sidebarHide() {
        side_width = getStyle(sidebar, "width");
        sidebar.style.right = '-'+ side_width;
        hide(mask);
    }

    function show(obj) {
        obj.style.display = "block";
    }

    function hide(obj) {
        obj.style.display = "none";
    }


    
    
    

    //封装获取样式(兼容)
    function getStyle(obj,attr) {
        if(obj.currentStyle){
            return obj.currentStyle[attr];  //IE /Opera
        }else{
            return window.getComputedStyle(obj,null)[attr];
        }
    }






   /* function scrollFn() {
        if(window.pageYOffset != null)
        {
            return {
                left: window.pageXOffset,
                top: window.pageYOffset
            }
        }else if(document.compatMode == "CSS1Compat"){
            return {
                left: document.documentElement.scrollLeft,
                top: document.documentElement.scrollTop
            }
        }
        return {
            left: document.body.scrollLeft,
            top: document.body.scrollTop
        }
    }


    function scroll() {
        scrollFn().top > 0 ? show(scroll_top) : hide(scroll_top);
         leader = Math.ceil(scroll().top);
         console.log(leader);

    }

    //封装缓动动画
    function animateFn() {
        var leader=0,target = 0,timer=null;
        timer = setInterval(function () {
            leader  =   leader + (target - leader) /10;
            window.scrollTo(0,leader);

            if(leader == target){
                clearInterval(timer);
                console.log("执行完毕了");
            }

        },20)

    }
*/








})();








