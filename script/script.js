$(document).ready(function (){
    $('#my-name').addClass('animate__animated animate__lightSpeedInLeft');
    $('#my-title').addClass('animate__animated animate__lightSpeedInRight');
    
});

const yearsBRI = document.getElementById('years-BRI');
const BRISTARTDATE = 2003;
let date = new Date();
let currYear = date.getFullYear();

yearsBRI.innerHTML = currYear - BRISTARTDATE;
