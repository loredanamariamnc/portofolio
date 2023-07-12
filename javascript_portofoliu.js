
// CARUSEL - IMAGINI OOP

const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const messageForm = document.getElementById('messageForm');

const skillsList = document.getElementsByClassName('skills_list');

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




// BUTOANE CARUSEL

const carousel = document.querySelector(".skills_list");
firstImg = carousel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".wrapperSkills i");

// butonul Left

const showHideIcons = () => {
  if (carousel.scrollLeft == 0) { 
      arrowIcons[0].style.display = "none";
  } else {
      arrowIcons[0].style.display = "block";
  } // butonul stanga dispare atunci cand "scrolled width" este egala cu 0.
}

// functionarea propriu-zisa a butoanelor

arrowIcons.forEach(icon => {
  icon.addEventListener("click", () => {
    let firstImgWidth = firstImg.clientWidth + 14; // se ia latimea primei imagini si se adauga 14 px. 

    // daca se apasa stanga, se reduc cei 14 px, in sens exact invers

    carousel.scrollLeft += icon.id == "left" ? - firstImgWidth : firstImgWidth;

    setTimeout(() => showHideIcons(), 60); // metoda prin care iconitele dispar dupa 60 ms
  });
});

// FOOTER

document.getElementById("year").innerHTML = new Date().getFullYear();



// FORMULAR

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
    setErrorfor(fname, 'First name cannot be blank');
  } else {
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

  small.innerText = message;
  formControl.className = 'form-control error';
}


function setSuccessFor(input) {
	const formControl = input.parentElement;
	
  formControl.className = 'form-control success';
}
	







