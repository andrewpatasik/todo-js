import './styles/main.css';
import './styles/project.css';
import './styles/todo.css';
import './styles/animationStyle.css';
import "animate.css";

// import WOW from 'wow.js/dist/wow.js';


import { navigation } from './js/nav';
import { home, addProject } from './js/homeComponent';


(() => {
  let title = 'my Project';
  let navComponent = navigation();
  let homeComponent = home();
  const loadPage = () => {
    let wrapper = document.getElementById('wrapper');
    wrapper.appendChild(navComponent(title));
    wrapper.appendChild(homeComponent);
    addProject();
  }
  // new WOW().init();
  return loadPage();
})();
