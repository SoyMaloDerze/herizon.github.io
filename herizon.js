//function for about owner details

function moreAboutMe(){
    let readAboutMe = document.getElementById("moreAbout");
    if (readAboutMe.style.display === "none"){
        readAboutMe.style.display = "block";
    } else {
        readAboutMe.style.display = "none";
    }
}


function closeAboutMe(){
    let hideAboutMe = document.getElementById("moreAbout");
    if (hideAboutMe.style.display === "block"){
        hideAboutMe.style.display = "none";
    } else {
        hideAboutMe.style.display = "block";
    }
}



//function to toggle Contact page open & close



function contactMeButton(){
    let openTalk = document.getElementById("contactMe");
    if (openTalk.style.display === "none"){
        openTalk.style.display = "block";
    } else {
        openTalk.style.display = "none";
    }
}


let menu = document.getElementById("menu");

function menuToggle(){
    let contactALink = document.querySelector(".contactA");
    if (contactALink.style.display === "none"){
        contactALink.style.display = "block";
        menu.src = "menu-left.png"
    } else {
        contactALink.style.display = "none";
        menu.src = "menu-right.png"
    }
}


























// function sendEmail(){
//     sendEmail.send({
//         Host : "smtp.gmail.com",
//         Username : "gueroderze@gmail.com",
//         Password : "SoyMaloDerze",
//         To : 'ebokag@gmail.com',
//         From : document.getElementById("email").value,
//         Subject : "New Contact Form Enquiry",
//         Body : "Name: " + document.getElementById("name").value
//             + "<br> Email: " + document.getElementById("email").value
//             + "<br> Message: " + document.getElementById("message").value
//     }).then(
//         message => alert("Message Sent Successfully")
//     );
// }








