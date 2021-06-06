let sidemenu = document.querySelector(".sidemenu");
let sidemenu_background = document.querySelector(".contentblack");
let sidemenu_btn = document.querySelector(".menubutton");
let sidemenu_close_btn = document.querySelector(".sidemenu_close_btn");
// let closed_region = document.querySelector(".closed_region");

sidemenu_btn.onclick = () => {
  sidemenu.classList.add('show');
  sidemenu_background.classList.add('show');
}
sidemenu_background.onclick = () => {
  sidemenu.classList.remove('show');
  sidemenu_background.classList.remove('show');
}
sidemenu_close_btn.onclick = () => {
  sidemenu.classList.remove('show');
  sidemenu_background.classList.remove('show');
}
