const navs = document.querySelectorAll('.nav-list li');
const cube = document.querySelector('.box');
const sections = document.querySelectorAll('.section');
const resumeLists = document.querySelectorAll('.resume-list');
const resumeBoxs = document.querySelectorAll('.resume-box');
const portfoliolist = document.querySelectorAll('.portfolio-list');
const portfolioBoxs = document.querySelectorAll('.portfolio-box');




window.onload=()=>{
  let welcome=document.getElementsByClassName("time")
  let icons=document.createElement("img");
  icons.classList.add("one-img")
  
  let greetings=document.createElement("h3")
  greetings.classList.add("two-img")
  console.log(welcome)
const now=new Date();
const time=now.getHours();
const minutes=now.getMinutes();
let exact=time+"."+minutes;
let accurate=parseFloat(exact)
console.log(accurate)
  if(accurate>12 && time<16){
    greetings.textContent="Happy Afternoon";
    icons.src="./images/sun main.gif"
   
  }
  else if(accurate>16 && accurate<18.30){
     icons.src="./images/sunset.webp"
     icons.style.height="5rem"
     icons.style.width="5rem"
    greetings.textContent="Good Evening";

  
  }
  
  else if(accurate>18.30 && accurate<23.00){
      icons.src="./images/moon.png";
      greetings.textContent="Good Night";
 
     }
  else if(accurate>22){
    icons.src="./images/sleep.png.png";
    icons.style.height="6rem"
    icons.style.width="5rem"
    greetings.textContent="Get some rest";
  }
  else{
    icons.src="./images/sun.png";
    greetings.textContent="Happy Morning";
  }
  welcome[0].appendChild(icons)
  welcome[0].appendChild(greetings)

}
navs.forEach((nav, idx) => {
  nav.addEventListener('click', () => {
    // Remove 'active' class from the currently active tab
    const activeTab = document.querySelector('.nav-list li.active');
    if (activeTab) activeTab.classList.remove('active');

    // Add 'active' class to the clicked tab
    nav.classList.add('active');

    // Rotate the cube to the corresponding face
   
      arrSecs.forEach(arrsec=>{
        if(arrsec.classList.contains('active')){
          sections[4].classList.add('action-contact')
        }
      })
  }); 
   if(sections[0].classList.contains('active')){
    sections[4].classList.remove('action-contact')
   }
});

// Resume section: Handling tab-list clicks
resumeLists.forEach((list, idx) => {
  list.addEventListener('click', () => {
    // Remove 'active' class from the currently active tab and content box
    document.querySelector('.resume-list.active').classList.remove('active');
    document.querySelector('.resume-box.active').classList.remove('active');

    // Add 'active' class to the clicked tab and the corresponding content box
    list.classList.add('active');
    resumeBoxs[idx].classList.add('active');
  });
});
portfoliolist.forEach((list, idx) => {
  list.addEventListener('click', () => {
    // Remove 'active' class from the currently active tab and content box
    document.querySelector('.portfolio-list.active').classList.remove('active');


    // Add 'active' class to the clicked tab and the corresponding content box
    list.classList.add('active');

    document.querySelector('.portfolio-box.active').classList.remove('active');
    portfolioBoxs[idx].classList.add('active');

  });
});
setTimeout(() => {
  sections[4].classList.remove('active');
}, 1500);


function navigateToSection(id) {
    const targetElement = document.getElementById(id);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }