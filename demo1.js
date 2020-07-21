function move(type) {
    this.div = document.querySelector(type);
    this.x = "";
    this.y = "";
    this.max={
        minx:"",maxx:"",miny:"",maxy:""
    }
}

move.prototype = {
    main(callback) {
        var that = this;
        this.div.onmousedown = function (down) {
            var ux = that.div.offsetLeft;
            var uy = that.div.offsetTop;
            console.log(ux);
            var dx = down.clientX;
            var dy = down.clientY;
            var realx = dx - ux;
            var realy = dy - uy;
            console.log(realx)
            document.onmousemove = function (res) {
                var x = res.clientX - realx;
                var y = res.clientY - realy;
                if(that.max.minx!==""){
                    
                    if(that.max.minx>x){
                        x=that.max.minx;
                    }
                }
                if(that.max.maxx!==""){
                    if(that.max.maxx<x){
                        x=that.max.maxx;
                    }
                }
                if(that.max.miny!==""){
                    if(that.max.miny>y){
                        y=0;
                    }
                }
                if(that.max.maxy!==""){
                    if(that.max.maxy<y){
                        y=that.max.maxy;
                    }
                }
                if (that.x) {
                    that.div.style.left = x + "px";
                }
                if (that.y) {
                    that.div.style.top = y + "px";
                }
                res.preventDefault();
            }
            document.onmouseup = function (res) {
                document.onmousemove = null;
                document.onmousedown = null;
                if(callback){
                    callback.call(that);
                }
            }

        }
    }
}