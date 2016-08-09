var currentpos,timer; 
function initialize() 
{
    timer = setInterval("scrollwindow()", 50);
} 
function clr(){
    clearInterval(timer);
} 
function scrollwindow() 
{
    currentpos=document.body.scrollTop; window.scroll(0,++currentpos); 
    if (currentpos != document.body.scrollTop) clr();
} 
document.onmousedown = clr;
document.ondblclick  = initialize;

document.onkeydown = gotopage;
function gotopage() {
    return;
    if (event.keyCode==37) document.location= "1.htm"
    if (event.keyCode==39) document.location= "1.htm"
    if (event.keyCode==13) document.location= "1.htm"
}
