let fccLink = document.getElementById('profile-link');
let fccLinkHTML = "<a href='https://www.freecodecamp.org/fcc1efbc055-4ab5-45c4-add9-907d1865cf6e' target='_blank'><i class='fab fa-free-code-camp'></i> </a>";

$(document).ready(function (){
    $('#my-name').addClass('animate__animated animate__lightSpeedInLeft');
    $('#my-title').addClass('animate__animated animate__lightSpeedInRight');
    let oldHTML = '';
    $('#profile-link').hover(function (){
        oldHTML = fccLink.innerHTML;
        $('#profile-link').addClass('icon-not-shown');
        $('#profile-link').removeClass('icon-shown');
        fccLink.innerHTML = '<a href="https://www.freecodecamp.org/fcc1efbc055-4ab5-45c4-add9-907d1865cf6e" target="_blank">My Free Code Camp Profile</i> </a>'
    }, function(){
        $('#profile-link').addClass('icon-shown');
        $('#profile-link').removeClass('icon-not-shown');
        fccLink.innerHTML = '<a href="https://www.freecodecamp.org/fcc1efbc055-4ab5-45c4-add9-907d1865cf6e" target="_blank"><i class="fab fa-free-code-camp"></i> </a>'
    });
    
});