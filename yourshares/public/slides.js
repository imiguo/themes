var banners=new Array()
var cards=new Array()
//SET IMAGE PATHS. Extend or contract array as needed (img, page, target window)
banners[0]=["images/head1.jpg","@a=signup",""]
banners[1]=["images/head2.jpg","@a=signup",""] 
banners[2]=["images/head3.jpg","@a=signup",""]

var fadebgcolor="white"
 
////NO need to edit beyond here/////////////
 
var fadearray=new Array() //array to cache fadeshow instances
var fadeclear=new Array() //array to cache corresponding clearinterval pointers
 
var dom=(document.getElementById) //modern dom browsers
var iebrowser=document.all
 
function fadeshow(theimages, fadewidth, fadeheight, borderwidth, delay, pause, displayorder){
this.pausecheck=pause
this.mouseovercheck=0
this.delay=delay
this.degree=10 //initial opacity degree (10%)
this.curimageindex=0
this.nextimageindex=1
fadearray[fadearray.length]=this
this.slideshowid=fadearray.length-1
this.canvasbase="canvas"+this.slideshowid
this.curcanvas=this.canvasbase+"_0"
if (typeof displayorder!="undefined")
theimages.sort(function() {return 0.5 - Math.random();}) //thanks to Mike (aka Mwinter) :)
this.theimages=theimages
this.imageborder=parseInt(borderwidth)
this.postimages=new Array() //preload images
for (p=0;p<theimages.length;p++){
this.postimages[p]=new Image()
this.postimages[p].src=theimages[p][0]
}
 
var fadewidth=fadewidth+this.imageborder*2
var fadeheight=fadeheight+this.imageborder*2
 
if (iebrowser&&dom||dom) //if IE5+ or modern browsers (ie: Firefox)
document.write('<div id="master'+this.slideshowid+'" style="position:relative;width:'+fadewidth+'px;height:'+fadeheight+'px;overflow:hidden;"><div id="'+this.canvasbase+'_0" style="position:absolute;width:'+fadewidth+'px;height:'+fadeheight+'px;top:0;left:0;filter:progid:DXImageTransform.Microsoft.alpha(opacity=10);-moz-opacity:10;-khtml-opacity:10;background-color:'+fadebgcolor+'"></div><div id="'+this.canvasbase+'_1" style="position:absolute;width:'+fadewidth+'px;height:'+fadeheight+'px;top:0;left:0;filter:progid:DXImageTransform.Microsoft.alpha(opacity=10);-moz-opacity:10;background-color:'+fadebgcolor+'"></div></div>')
else
document.write('<div><img name="defaultslide'+this.slideshowid+'" src="'+this.postimages[0].src+'"></div>')
 
if (iebrowser&&dom||dom) //if IE5+ or modern browsers such as Firefox
this.startit()
else{
this.curimageindex++
setInterval("fadearray["+this.slideshowid+"].rotateimage()", this.delay)
}
}

function fadepic(obj){
if (obj.degree<100){
obj.degree+=10
if (obj.tempobj.filters&&obj.tempobj.filters[0]){
if (typeof obj.tempobj.filters[0].opacity=="number") //if IE6+
obj.tempobj.filters[0].opacity=obj.degree
else //else if IE5.5-
obj.tempobj.style.filter="alpha(opacity="+obj.degree+")"
}
else if (obj.tempobj.style.MozOpacity)
obj.tempobj.style.MozOpacity=obj.degree/101
else if (obj.tempobj.style.KhtmlOpacity)
obj.tempobj.style.KhtmlOpacity=obj.degree/100
}
else{
clearInterval(fadeclear[obj.slideshowid])
obj.nextcanvas=(obj.curcanvas==obj.canvasbase+"_0")? obj.canvasbase+"_0" : obj.canvasbase+"_1"
obj.tempobj=iebrowser? iebrowser[obj.nextcanvas] : document.getElementById(obj.nextcanvas)


obj.populateslide(obj.tempobj, obj.nextimageindex)
obj.nextimageindex=(obj.nextimageindex<obj.postimages.length-1)? obj.nextimageindex+1 : 0
setTimeout("fadearray["+obj.slideshowid+"].rotateimage()", obj.delay)
}
}
 
fadeshow.prototype.populateslide=function(picobj, picindex){
var slideHTML=""
if (this.theimages[picindex][1]!="") //if associated link exists for image
slideHTML='<a href="'+this.theimages[picindex][1]+'" target="'+this.theimages[picindex][2]+'">'
slideHTML+='<img src="'+this.postimages[picindex].src+'" border="'+this.imageborder+'px">'
if (this.theimages[picindex][1]!="") //if associated link exists for image
slideHTML+='</a>'
picobj.innerHTML=slideHTML
}
 
 
fadeshow.prototype.rotateimage=function(){
if (this.pausecheck==1) //if pause onMouseover enabled, cache object
var cacheobj=this
if (this.mouseovercheck==1)
setTimeout(function(){cacheobj.rotateimage()}, 100)
else if (iebrowser&&dom||dom){
this.resetit()
var crossobj=this.tempobj=iebrowser? iebrowser[this.curcanvas] : document.getElementById(this.curcanvas)
crossobj.style.zIndex++
fadeclear[this.slideshowid]=setInterval("fadepic(fadearray["+this.slideshowid+"])",50)
this.curcanvas=(this.curcanvas==this.canvasbase+"_0")? this.canvasbase+"_1" : this.canvasbase+"_0"
}
else{
var ns4imgobj=document.images['defaultslide'+this.slideshowid]
ns4imgobj.src=this.postimages[this.curimageindex].src
}
this.curimageindex=(this.curimageindex<this.postimages.length-1)? this.curimageindex+1 : 0
}
 
fadeshow.prototype.resetit=function(){
this.degree=10
var crossobj=iebrowser? iebrowser[this.curcanvas] : document.getElementById(this.curcanvas)
if (crossobj.filters&&crossobj.filters[0]){
if (typeof crossobj.filters[0].opacity=="number") //if IE6+
crossobj.filters(0).opacity=this.degree
else //else if IE5.5-
crossobj.style.filter="alpha(opacity="+this.degree+")"
}
else if (crossobj.style.MozOpacity)
crossobj.style.MozOpacity=this.degree/101
else if (crossobj.style.KhtmlOpacity)
crossobj.style.KhtmlOpacity=obj.degree/100
}
 
 
fadeshow.prototype.startit=function(){
var crossobj=iebrowser? iebrowser[this.curcanvas] : document.getElementById(this.curcanvas)
this.populateslide(crossobj, this.curimageindex)
if (this.pausecheck==1){ //IF SLIDESHOW SHOULD PAUSE ONMOUSEOVER
var cacheobj=this
var crossobjcontainer=iebrowser? iebrowser["master"+this.slideshowid] : document.getElementById("master"+this.slideshowid)
crossobjcontainer.onmouseover=function(){cacheobj.mouseovercheck=1}
crossobjcontainer.onmouseout=function(){cacheobj.mouseovercheck=0}
}
this.rotateimage()
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}