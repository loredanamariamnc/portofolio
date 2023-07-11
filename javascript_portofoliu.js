
//carusel imagini

const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const messageForm = document.getElementById('messageForm');

const skillsList = document.getElementsByClassName('skills_list');
console.log(skillsList, 'skill');
const skills = [
 {
 name : "HTML",
 imagePath : "./resources/img1Html.jpg",
 alt : "html logo",
 draggable : false
},
{
 name : "CSS",
 imagePath : "./resources/img2Css.jpg",
 alt : "css logo",
 draggable : false
},
{
 name : "JavaScript",
 imagePath : "./resources/img3JavaScript.jpg",
 alt : "javaScript logo",
 draggable : false
},{
 name : "Git",
 imagePath : "./resources/img4.png",
 alt : "git logo",
 draggable : false
},{
 name : "SQL",
 imagePath : "./resources/img5Sql.jpg",
 alt : "sql logo",
 draggable : false
},{
 name : "React",
 imagePath : "./resources/imgg6React.png",
 alt : "react logo",
 draggable : false
},
];
let skillsItems = '';
skills.forEach(element => {
 skillsItems += `
   <img src="${element.imagePath}" alt="${element.alt}" draggable="${element.draggable}">
 `
})
skillsList[0].innerHTML = skillsItems;

//form

form.addEventListener('submit', (event) => {
    event.preventDefault();

  checkInputs();
});

function checkInputs() {

  const fnameValue = fname.value.trim();
  const lnameValue = lname.value.trim();
  const emailValue = email.value.trim();
  const messageFormValue = messageForm.value.trim();

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

  if(messageFormValue === '') {
    setErrorfor(messageForm, 'Message cannot be blank');
  } else {
    setSuccessFor(messageForm);
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
}
	

// carousel
const carousel = document.querySelector(".skills_list"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapperSkills i");
let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;
const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}
arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});

//footer

document.getElementById("year").innerHTML = new Date().getFullYear();




