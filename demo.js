const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky",this.window.scrollY > 120);
})
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector('.navlist');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
}

window.onscroll = () =>{
    menu.remove.toggle('bx-x');
    navlist.remove.toggle('active');
}

// skill section 

// const circles = document.querySelectorAll('.circle');
// circles.forEach(elem=>{
//     var dots =elem.getAttribute("data-dots");
//      var marked = elem.getAttribute("data-precent");
//      var percent = Math.floor(dots*marked/100);
//      var points = "";
//      var rotate = 360 / dots;

//      for(let i =0 ; i < dots ; i++){
//         points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;

//     }
//         elem.innerHTML= points;

//         const pointsMarked = elem.querySelectorAll('.points');
//         for( let i = 0; i <percent ; i++){
//             pointsMarked[i].classList.add('marked')
//         }
    
// })

// my code 
const form =document.querySelector('form');

const fullName = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

function sendEmail(){
    const bodyMessage = `Full Name : ${fullName.value}<br> Email: ${email.value}<br> Message: ${message.value} `;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "balrajbala580@gmail.com",
        Password : "19ED821E4B1041AA8CA2199A2D11D6676182",
        To : 'balrajbala580@gmail.com',
        From :"balrajbala580@gmail.com" ,
        Subject : message.value,
        Body :bodyMessage ,
        // document.getElementById('email').value
    }).then(
      message =>
        {
        if(message =='OK'){
            Swal.fire({
                title: "Good job!",
                text: "Message Send Successfully!",
                icon: "success"
              }); 
          
        }
        else{
            Swal.fire({
                title: "Error!",
                text: "You Maybe Wrong!",
                icon: "Failed!"
              }); 
        }
      } 
    );
}
form.addEventListener("submit",(e)=>{
    e.preventDefault();

    sendEmail();
});