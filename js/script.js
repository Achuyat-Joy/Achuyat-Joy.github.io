// const button = document.getElementById("sunHere");
// .addEventListener('click', buttonClick)

// button.addEventListener('click', () => {
//     document.body.classList.toggle("dark-mode");
// });

const toggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');

toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    navigation.classList.toggle('active');
});

const nightButton = document.querySelector('.nightMoodButton');

nightButton.addEventListener('click', () => {
    nightButton.classList.toggle('active');
    document.body.classList.toggle("dark-mode");
})


// function buttonClick(){
//     document.body.classList.toggle("dark-mode");
//     // var change = document.getElementById("link").style.color;

//     // if(change === "white"){
//     //     document.getElementById("link").style.color = "black"; 
//     // }else{
//     //     document.getElementById("link").style.color = "white";
//     // }


//     // var change = document.getElementById("link1").style.color;

//     // if(change === "white"){
//     //     document.getElementById("link1").style.color = "black"; 
//     // }else{
//     //     document.getElementById("link1").style.color = "white";
//     // }


//     // var change = document.getElementById("link2").style.color;

//     // if(change === "white"){
//     //     document.getElementById("link2").style.color = "black"; 
//     // }else{
//     //     document.getElementById("link2").style.color = "white";
//     // }

//     // var change = document.getElementById("navigation").style.backgroundColor;

//     // if(change === "white"){
//     //     document.getElementById("navigation").style.backgroundColor = "black"; 
//     // }else{
//     //     document.getElementById("navigation").style.backgroundColor = "white";
//     // }

// }

