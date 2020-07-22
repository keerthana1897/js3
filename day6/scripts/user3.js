let name = prompt("Enter your name");
demo.innerText="Welcome"+name;
function dark(){
    var element=document.body;
    element.classList.toggle("dark");
}
const localtime=document.getElementById('clock')
function clock(){
    let date=new Date();
    let time=date.toLocaleTimeString();
    localtime.innerText=time;

}
setInterval(clock,1000);