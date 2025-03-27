var x;
var y;

function pageLoad(){
    x = document.getElementById("login");
    y = document.getElementById("register");
    var form_state = document.getElementById("form_state").value;
    // console.log(form_state);
    if(form_state == "signup"){
        register();
    }
}
 
window.onload = pageLoad;

function login() {
    if(window.innerWidth>375){
        x.style.left = "50px";
        y.style.right = "-600px";
        x.style.opacity = 1;
        y.style.opacity = 0;
    }else{
        x.style.left = "0px";
        y.style.right = "-375px";
        x.style.opacity = 1;
        y.style.opacity = 0;
    }
}

function register() {
    if(window.innerWidth>375){
        x.style.left = "-600px";
        y.style.right = "50px";
        x.style.opacity = 0;
        y.style.opacity = 1;
    }else{
        x.style.left = "-375px";
        y.style.right = "0px";
        x.style.opacity = 0;
        y.style.opacity = 1;     
    }

}