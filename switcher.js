document.querySelector(".switcher-button").onclick = () => {
  document.querySelector(".switcher").classList.toggle("active");
};

function changeBackground(color) {
  document.body.style.background = color;
  const navbar = document.querySelector('#header');
  let links = document.querySelectorAll('a.links');
  if(color == '#2C3E50 '){
    navbar.style.background = color;
    document.querySelector(".logo").src="Assets/logo-s.png";    
    [].slice.call(links).forEach(function(elem) {
      elem.style.color = 'white';
  });

  }else if(color == 'white'){
    navbar.style.background = color;
    document.querySelector(".logo").src="Assets/logo.png";    
    [].slice.call(links).forEach(function(elem) {
      elem.style.color = 'black';
  });
  }else if(color == '#212F3D'){
    navbar.style.background = color;
    document.querySelector(".logo").src="Assets/logo-s.png";    
    [].slice.call(links).forEach(function(elem) {
      elem.style.color = 'white';
  });
  }
}


function defaultFont(){
  document.querySelector('.gallery h1').style.fontSize = "3rem";
  document.querySelector('.gallery').style.fontSize = "1em";
}

function mediumFont(){
  document.querySelector('.gallery h1').style.fontSize = "2.5em";
  document.querySelector('.gallery').style.fontSize = "1.3em";

}

function largeFont(){
  document.querySelector('.gallery h1').style.fontSize = "2.8em";
  document.querySelector('.gallery').style.fontSize = "1.5em";
}