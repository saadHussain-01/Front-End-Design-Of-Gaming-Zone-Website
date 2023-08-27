/* ANIMATION USING JAVACRIPT */


/* for all main headings */
const animateElement = document.querySelectorAll('#heading');
gsap.from(animateElement, { x: -window.innerWidth, duration: 1.5, ease: "power2.out" });

/* for who we are section */
const animateElement1 =document.getElementsByClassName('who-content');
gsap.from(animateElement1, {x: -window.innerWidth, duration: 2, ease: "power2.out"});

const animateElement2 =document.getElementsByClassName('who-image');
gsap.from(animateElement2, {x: window.innerWidth, duration: 2, ease: "power2.out"});

/* for gallery section */
const animateElement3 = document.querySelectorAll('#gall');
gsap.from(animateElement3, { scale: 0, opacity: 0, duration: 2, delay: 0.5 });

/* for workers section */
const animateElement4 =document.querySelectorAll('#work1');
gsap.from(animateElement4, {x: -window.innerWidth, duration: 2, ease: "power2.out"});

const animateElement5 =document.querySelectorAll('#work2');
gsap.from(animateElement5, {x: window.innerWidth, duration: 2, ease: "power2.out"});

/* for packages section */
const animateElement6 =document.getElementsByClassName('box-2');
gsap.from(animateElement6, { x: -100, opacity: 0, duration: 2, delay: 0.5 });


/* for client section */
const animateElement7 =document.getElementsByClassName('box-3');
gsap.from(animateElement7, { x: 100, opacity: 0, duration: 2, delay: 0.5 });

/* for about section */
const animateElement8 =document.querySelectorAll('#about1');
gsap.from(animateElement8, {x: -window.innerWidth, duration: 2, ease: "power2.out"});

const animateElement9 =document.querySelectorAll('#about2');
gsap.from(animateElement9, {x: window.innerWidth, duration: 2, ease: "power2.out"});

/* for service section */
const animateElement10 =document.querySelectorAll('#service1');
gsap.from(animateElement10, { scale: 0, opacity: 0, duration: 2, delay: 0.5 });

/* for contact section */
const animateElement11 =document.getElementById('contactForm');
gsap.from(animateElement11, {x: -window.innerWidth, duration: 2, ease: "power2.out"});

const animateElement12 =document.getElementById('contactForm1');
gsap.from(animateElement12, {x: window.innerWidth, duration: 2, ease: "power2.out"});

/* for blog section */
const animateElement13 =document.getElementById('blog1');
gsap.from(animateElement13, {x: -window.innerWidth, duration: 2, ease: "power2.out"});

const animateElement14 =document.getElementById('blog2');
gsap.from(animateElement14, {x: window.innerWidth, duration: 2, ease: "power2.out"});

const animateElement15 =document.getElementById('blog3');
gsap.from(animateElement15, {x: -window.innerWidth, duration: 2, ease: "power2.out"});

const animateElement16 =document.getElementById('blog4');
gsap.from(animateElement16, {x: window.innerWidth, duration: 2, ease: "power2.out"});



/* FORM VALIDATION */

/* FORM 1 */


const contactForm1 = document.getElementById('contactForm1');

    contactForm1.addEventListener('submit' ,function(event){
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    if(firstName === ''){
        alert('firstname is required');
        return;
    }

    const lastName = document.getElementById('lastName').value;
    if(lastName === ''){
        alert('lastname is required');
        return;
    }

   
   const email = document.getElementById('email').value;
   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
   if (!emailRegex.test(email)) {
     alert("Please enter a valid email address.");
     return;
   }


    const message = document.getElementById('message').value;
    if(message === ''){
        alert('message is required');
        return;
    }


    contactForm1.submit();
    alert('form is submitted');
}); 


/* FORM 2 */


const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event){
    event.preventDefault();

    var firstName1 = document.getElementById('firstName1').value;
    if(firstName1 ===""){
        alert('please enter first name');
        return;
    }

    var lastName1 = document.getElementById('lastName1').value;
    if(lastName1 ===""){
        alert('please enter last name');
        return;
    }

    var number = document.getElementById('number').value;
    if(number ===""){
        alert('please enter phone number');
        return;
    }

    var dateInput = document.getElementById('dateOfBooking');
    dateInput.addEventListener('input' , function(){
        const dateValue = this.value;
        const datePattern = 'mm/dd/yyyy';
         if(!datePattern.test(dateValue)){
            this.setCustomValidity('please enter the right date format');
         }else{
            this.setCustomValidity("");
         }

    });

    var number1 = document.getElementById('number1').value;
    if(number1 ===""){
        alert('please enter number of people');
        return;
    }

    var gameType = document.getElementById('gameType').value;
    if(gameType === ""){
        alert('please select the game type');
        return;
    }

    contactForm.submit();
    alert('form is submitted');


});  


/* FOR MAKING CURRENT PAGE ACTIVE */

const links = document.querySelectorAll('a');

for(const link of links){
    links.addEventListener('click', function(){
         const href = this.href;
         const activeClass = 'active';

         links.forEach(function(){
            link.classList.remove(activeClass);
         });

         link.classList.add(activeClass);
    });
}










