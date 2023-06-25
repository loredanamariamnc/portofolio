
// Button Load More

let buttonLoadMore = document.querySelector('LoadMore');
let currentItem = 3;


function clickedButton(){
   let boxes = [...document.querySelectorAll('.section1 .article .articleBox')];
   for (var i = currentItem; i < currentItem + 3; i++){
      boxes[i].style.display = 'inline-block';
   }
   currentItem += 3;

   if(currentItem >= boxes.length){
    buttonLoadMore.style.display = 'none';
    }
}

// Form

const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');


form.addEventListener('submit', (event) => {
   event.preventDefault();

 checkInputs();
 
});

function checkInputs() {

 const fnameValue = fname.value.trim();
 const lnameValue = lname.value.trim();
 const emailValue = email.value.trim();

 if(fnameValue === '') {
   //show error
   //add error class
   setErrorfor(fname, 'First name cannot be blank');
 } else {
   //add succes class
   setSuccessFor(fname);
 }

 if(lnameValue === '') {
   setErrorfor(lname, 'Last name cannot be blank');
   } else {
     setSuccessFor(lname);
   }

 if(emailValue === '') {
     setErrorfor(email, 'Email cannot be blank');
  } else {
     setSuccessFor(email);
  }
}

function setErrorfor(input, message) {
   const formControl = input.parentElement;
   const small = formControl.querySelector('small');
 
   // add error message inside small
   small.innerText = message;
 
   // add error class
   formControl.className = 'form-control error';
 }
 
 
 function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    return true;
 }
    






