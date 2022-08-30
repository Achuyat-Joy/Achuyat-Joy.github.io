function buttonClick(){
    document.body.classList.toggle("dark-mode");
    var change = document.getElementById("link").style.color;

    if(change === "white"){
        document.getElementById("link").style.color = "black"; 
    }else{
        document.getElementById("link").style.color = "white";
    }


    var change = document.getElementById("link1").style.color;

    if(change === "white"){
        document.getElementById("link1").style.color = "black"; 
    }else{
        document.getElementById("link1").style.color = "white";
    }


    var change = document.getElementById("link2").style.color;

    if(change === "white"){
        document.getElementById("link2").style.color = "black"; 
    }else{
        document.getElementById("link2").style.color = "white";
    }
}

var button = document.getElementById("sunHere").addEventListener('click', buttonClick);
