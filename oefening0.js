let oefening0 = () => {
  let title = document.querySelector('title');
  let navigation = document.querySelector('.navbar-brand');
  let img = document.createElement('img');

  //Set title
  title.innerText='Dries Van Hool';

  //Clear nav-brand & add img
  navigation.innerText='';
  img.setAttribute('src', 'img/logo_thomas_more.png');  
  img.setAttribute('width', '100px');
  navigation.appendChild(img);
}