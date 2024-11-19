const navs = document.querySelectorAll('.nav-list li');
const cube = document.querySelector('.box');
const sections = document.querySelectorAll('.section');
const resumeLists = document.querySelectorAll('.resume-list');
const resumeBoxs = document.querySelectorAll('.resume-box');
const portfoliolist = document.querySelectorAll('.portfolio-list');
const portfolioBoxs = document.querySelectorAll('.portfolio-box');

navs.forEach((nav, idx) => {
  nav.addEventListener('click', () => {
    // Remove 'active' class from the currently active tab
    const activeTab = document.querySelector('.nav-list li.active');
    if (activeTab) activeTab.classList.remove('active');

    // Add 'active' class to the clicked tab
    nav.classList.add('active');

    // Rotate the cube to the corresponding face
    cube.style.transform = `rotateY(${idx * -90}deg)`;
    document.querySelector('.section.active').classList.remove('active');
    sections[idx].classList.add('active');
     
      const array=Array.from (sections);
      const arrSecs=array.slice(1,-1);
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

