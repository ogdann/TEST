let dropbox = document.getElementById('dropdownBox');
let droplist = document.getElementById('dropdownlist');
let dropdownBox = document.getElementById('dropdownBox');

dropbox.onclick = function (){
    if(droplist.classList[droplist.classList.length-1] === 'hidden'){
        droplist.classList.remove('hidden');
        droplist.classList.add('flex');
    } else{
        droplist.classList.add('hidden');
        droplist.classList.remove('flex');
    }
}


let everestmenu = document.getElementById('everestmenu')
let everestbutton = document.getElementById('everestbutton')
let close2 = document.getElementById('close2');

everestbutton.addEventListener('click', () => {
    everestmenu.classList.remove('hidden');
})


close2.addEventListener('click', () => {
    everestmenu.classList.add('hidden');
    
})


let kilimanjaromenu = document.getElementById('kilimanjaromenu')
let kilimanjarobutton = document.getElementById('kilimanjarobutton')
let close3 = document.getElementById('close3');

kilimanjarobutton.addEventListener('click', () => {
    kilimanjaromenu.classList.remove('hidden');
})


close3.addEventListener('click', () => {
    kilimanjaromenu.classList.add('hidden');
    
})


let himalayasmenu = document.getElementById('himalayasmenu')
let himalayasbutton = document.getElementById('himalayasbutton')
let close4 = document.getElementById('close4');

himalayasbutton.addEventListener('click', () => {
    himalayasmenu.classList.remove('hidden');
})

close4.addEventListener('click', () => {
    himalayasmenu.classList.add('hidden');
    
})


if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  
  // Whenever the user explicitly chooses light mode
  localStorage.theme = 'light'
  
  // Whenever the user explicitly chooses dark mode
  localStorage.theme = 'dark'
  
  // Whenever the user explicitly chooses to respect the OS preference
  localStorage.removeItem('theme')

  var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
  var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
  
  // Change the icons inside the button based on previous settings
  if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      themeToggleLightIcon.classList.remove('hidden');
  } else {
      themeToggleDarkIcon.classList.remove('hidden');
  }
  
  var themeToggleBtn = document.getElementById('theme-toggle');
  
  themeToggleBtn.addEventListener('click', function() {
  
      // toggle icons inside button
      themeToggleDarkIcon.classList.toggle('hidden');
      themeToggleLightIcon.classList.toggle('hidden');
  
      // if set via local storage previously
      if (localStorage.getItem('color-theme')) {
          if (localStorage.getItem('color-theme') === 'light') {
              document.documentElement.classList.add('dark');
              localStorage.setItem('color-theme', 'dark');
          } else {
              document.documentElement.classList.remove('dark');
              localStorage.setItem('color-theme', 'light');
          }
  
      // if NOT set via local storage previously
      } else {
          if (document.documentElement.classList.contains('dark')) {
              document.documentElement.classList.remove('dark');
              localStorage.setItem('color-theme', 'light');
          } else {
              document.documentElement.classList.add('dark');
              localStorage.setItem('color-theme', 'dark');
          }
      }
      
  });