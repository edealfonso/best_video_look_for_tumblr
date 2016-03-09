<!-- 
BEST VIDEO LOOK v1.0 for TUMBLR
by elsa.de.alfonso@gmail.com
Part 1/3
-->

<script type="text/javascript">
$(function() {
    $("iframe").each(function() {
        var $obj = $(this);
        var data = $obj.attr("data");
        var vsrc = $obj.attr("src");
        var oldW = $obj.attr("width");
        var oldH = $obj.attr("height");
        var newW = 500;
        var newH = 281;
        if (vsrc.search("youtube") > 0) {
            var opts = "rel=0&autohide=1&showinfo=0&color=white&modestbranding=1&theme=light&vq=hd720";
            var theID = vsrc.slice(30,41); 
            $obj.replaceWith("<iframe src='http://www.youtube.com/embed/"+theID+"?"+opts+"' width='"+newW+"' height='"+newH+"' frameborder='0'  webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>");
        }            
       if (vsrc.search("vimeo") > 0) {
            var opts = "title=0&byline=0&portrait=0";
            var color = "00dbd6";
            var theID = vsrc.slice(31,40); 
            $obj.replaceWith("<iframe src='"+vsrc+"?"+opts+"&color="+color+"' width='"+newW+"' height='"+newH+"' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>");
        }          
    });
})

$(function() {
    $("img").each(function() {
        var $obj = $(this);
        var vsrc = $obj.attr("src");
        if (vsrc.search("vimeo") > 0) {
            var sty = $obj.attr("style");
            var clas = $obj.attr("class");
            var wid = $obj.attr("width");            
            var res = "_640x360.jpg";
            var cutsrc = vsrc.slice(0,38); 
            var repl = 
            $obj.replaceWith("<img style='"+sty+"' class='"+clas+"' width='"+wid+"' src='"+cutsrc+res+"' />");
        }        
        if (vsrc.search("ytimg") > 0) {
            var sty = $obj.attr("style");
            var clas = $obj.attr("class");
            var wid = $obj.attr("width");            
            var res = "sddefault.jpg";
            var cutsrc = vsrc.slice(0,35); 
            var repl = 
            $obj.replaceWith("<img style='"+sty+"' class='"+clas+"' width='"+wid+"' src='"+cutsrc+res+"' />");
        }            
    });
})
</script>

<!-- End of BEST VIDEO LOOK (Part 1/3) -->
