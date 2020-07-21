var btnlist = document.querySelectorAll(".btnlist ul li a")
var img = document.querySelector(".img img");
var bigimg = document.querySelector(".bigdiv img");
console.log(btnlist.length);
console.log(img);
for (let i = 0; i < btnlist.length; i++) {
    btnlist[i].onmouseover = function () {

        img.src = "img/" + (i + 1) + ".jpg";
        bigimg.src="img/" + (i + 1) + ".jpg";
    }
}

var baoguo = document.querySelector(".baoguo");
var fangda = document.querySelector(".fangda");
var bigdiv = document.querySelector(".bigdiv");
baoguo.onmouseover = function () {
    fangda.style.display = "block";
    bigdiv.style.display = "block";
}
baoguo.onmouseout = function () {
    fangda.style.display = "none";
    bigdiv.style.display = "none";
}






function move(type) {
    this.div = document.querySelector(type);
    this.x = "";
    this.y = "";
    this.max = {
        minx: "", maxx: "", miny: "", maxy: ""
    }

}
move.prototype = {

    main(callback) {
        var divx = (parseInt(getComputedStyle(this.div, null).width)) / 2;
        var divy = (parseInt(getComputedStyle(this.div, null).height)) / 2;
        console.log(divx);
        console.log(divy)
        var that = this;
        var parent = this.div.parentElement;
        console.log(parent.getBoundingClientRect().top);
        parent.onmousemove = function (down) {
            var ux = this.getBoundingClientRect().left;
            var uy = this.getBoundingClientRect().top;

            console.log(ux);
            console.log(uy);
            var dx = down.clientX;
            var dy = down.clientY;
            console.log(dx);
            var realx = dx - ux;
            var realy = dy - uy;
            console.log(realx)
            if (that.max.minx !== "") {

                if (that.max.minx > realx) {
                    realx = that.max.minx;
                }
            }
            if (that.max.maxx !== "") {
                if (that.max.maxx < realx) {
                    realx = that.max.maxx;
                }
            }
            if (that.max.miny !== "") {
                if (that.max.miny > realy) {
                    realy = 0;
                }
            }
            if (that.max.maxy !== "") {
                if (that.max.maxy < realy) {
                    realy = that.max.maxy;
                }
            }
            if (realx < 40 || realy < 54) {
                return
            } else {
                that.div.style.left = realx - divx + "px";
                that.div.style.top = realy - divy + "px";
                bigimg.style="transform:scale(1.5,1.5);transform-origin: left top;";
                bigimg.style.marginLeft=-(realx-divx) + "px";
                bigimg.style.marginTop=-(realy-divy)+ "px";
            }

            if(callback){
                callback.call(that);
            }
        }
    }
}