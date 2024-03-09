const form = document.querySelector("form");
const fullname = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const subject = document.getElementById("subject");

//   Validate Form before sending the email

function validateAndSendEmail(event) {
    event.preventDefault(); // Prevent the form from submitting by default

    var email = document.getElementById('email').value;
    var emailError = document.getElementById('emailError');

    // Regular expression for basic email validation
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (emailRegex.test(email)) {
        // Email format is correct, you can proceed with sending the email
        console.log('Email format is correct. Proceed with sending the email.');
        // Here you can add your code to send the email
        // For example, you might want to use AJAX to send the email without reloading the page

        // Hide the error message
        emailError.style.display = 'none';

        // Call the function to send the email
        sendEmail();
    } else {
        // Email format is incorrect, show an error message
        console.log('Invalid email format.');
        emailError.style.display = 'block';
    }
}


// Functional Email to send
function sendEmail() {
    const bodyMessage = `Full Name: ${fullname.value}<br> Email: ${email.value}<br> Message: ${message.value}<br> subject: ${subject.value}<br>`;
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "coolboydhanraj@gmail.com",
      Password: "5F66B9200B3574D9B673A4EA557D4A680E3C",
      To: "coolboydhanraj@gmail.com",
      From: "coolboydhanraj@gmail.com",
      Subject: subject.value,
      Body: bodyMessage
    }).then(message =>{
      if(message == "OK"){
        Swal.fire({
            title: "Successfull !",
            text: "Your message sent successfully !",
            icon: "success"
          });
      }
      document.getElementById('emailForm').reset();
    })
  }


// Attach the event listener to the form
document.getElementById('emailForm').addEventListener('submit', validateAndSendEmail);

form.addEventListener("submit", (e) => {
    validateAndSendEmail();
    sendEmail();
});
  


/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
  window.onscroll = function() {headerShadow()};

  function headerShadow() {
    const navHeader =document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";

    } else {

      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";

    }
  }


/* ----- TYPING EFFECT ----- */
 var typingEffect = new Typed(".typedText",{
    strings : ["Frontend Developer"],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
 })


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
 const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true     
 })

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-button',{delay: 200})
sr.reveal('.social_icon',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})
srLeft.reveal('.scroll-btn',{delay: 100})
srLeft.reveal('#git-link',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

    }  else {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}

window.addEventListener('scroll', scrollActive);

