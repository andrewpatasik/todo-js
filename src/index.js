import './styles/main.css';
import './styles/project.css';
import './styles/todo.css';

import { navigation } from './js/nav';


(() => {
  let title = 'my Project';
  let navComponent = navigation();
  const loadPage = () => {
    let wrapper = document.getElementById('wrapper');
    wrapper.appendChild(navComponent(title));
    console.log(navComponent());
  }

  return loadPage();
})();
