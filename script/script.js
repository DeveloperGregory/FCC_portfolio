const contactTextLinks ={
    "profile-link" : '<a href="https://www.freecodecamp.org/fcc1efbc055-4ab5-45c4-add9-907d1865cf6e" target="_blank">My Free Code Camp Profile</a>',
    "twitter-link" : '<a href="https://twitter.com/developer_greg" target="_blank">My Twitter Account</a>',
    "git-link" : '<a href="https://github.com/DeveloperGregory" target="_blank">My Git Hub</a>',
    "email-link" : '<a href="">My Email Address</a>'
};
const contactIconLinks ={
    "profile-link" : '<a href="https://www.freecodecamp.org/fcc1efbc055-4ab5-45c4-add9-907d1865cf6e" target="_blank"><i class="fab fa-free-code-camp"></i></a>',
    "twitter-link" : '<a href="https://twitter.com/developer_greg" target="_blank"><i class="fab fa-twitter"></i></a>',
    "git-link" : '<a href="https://github.com/DeveloperGregory" target="_blank"><i class="fab fa-github"></i></a>',
    "email-link" : '<a href=""><i class="fas fa-at"></i></a>'
};

$(document).ready(function (){
    $('#my-name').addClass('animate__animated animate__lightSpeedInLeft');
    $('#my-title').addClass('animate__animated animate__lightSpeedInRight');
    
    
    
    const changeToText = function (elem){
        let theID = whichID(elem);
        //alert(theID)
        if(theID != null){
            $("#"+theID).addClass('icon-not-shown');
            $("#"+theID).removeClass('icon-shown');
            document.getElementById(theID).innerHTML = contactTextLinks[theID];
        }
        
    };
    const changeToIcon = function(elem){
        //alert(oldHTML)
        let theID = whichID(elem);
        if(theID != null){
            $("#"+theID).addClass('icon-shown');
            $("#"+theID).removeClass('icon-not-shown');
            document.getElementById(theID).innerHTML = contactIconLinks[theID] ;
        }
        
    };

    function whichID(ev){
        let target = $(ev.target);
        let elId = target.attr('id');
        if(target.is(".reach-me")){
            return elId;
        }
        
        
    }

    $('.reach-me').mouseenter(changeToText);
    $('.reach-me').mouseleave(changeToIcon);
    //$('#twitter-link').hover(changeToText,changeToIcon);
    //$('#git-link').hover(changeToText,changeToIcon);
    //$('#email-link').hover(changeToText,changeToIcon);
    
});