//togle icon nacbar

let menuicon = document.querySelector('#manu-icon');
let navbar = document.querySelector('.navbar');

menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}




//scroll section

let section = document.querySelectorAll('section');
let navlinks = document.querySelector('header nav a');

window.onscroll = () =>{
    section.forEach(sec => {
        let top = window.scrollY;
        let offset  = sec.offsetTop -100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            //active navbar links
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*' + id + ']').classList.add('active');
            })
        }
    })
}

function redirectToFacebook(facebookUrl) {
    // Open the Facebook page in a new tab
    window.open(facebookUrl, '_blank');
}

function redirectToLinkedIn(linkedinUrl) {
    // Open the LinkedIn profile in a new tab
    window.open(linkedinUrl, '_blank');
}


//scrol section

window.onscroll = () => {
    //stiky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);


menuicon.classList.remove('bx-x');
navbar.classList.remove('active');
}



function redirectToContactPage() {
    // You can replace 'contact.html' with the actual URL of your contact page
    window.location.href = '.contact';
}


function toggleParagraph() {
    var hiddenParagraph = document.getElementById('hiddenParagraph');
    if (hiddenParagraph.style.display === 'none') {
        hiddenParagraph.style.display = 'block';
    } else {
        hiddenParagraph.style.display = 'none';
    }
}