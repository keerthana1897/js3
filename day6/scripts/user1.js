let i=0;
let j=0;
function divchange(){
    let divtag=document.getElementById("div1");
    let bgcolor=["red","blue","green","yellow","black","pink"];
    document.body.style.backgroundColor=bgcolor[i];
    i=(i+1)%bgcolor.length;
}
setInterval(divchange,5000);
