import _ from 'lodash';
import './style.css';
import Icon from './icon.png';

function component() {
  var container = document.createElement('div');

  
  var element = document.createElement('h1');
  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // Using class from loaded css
  element.classList.add('centered');

  // Add the image to our existing div.
  var element2 = document.createElement('div');
  var myIcon = new Image();
  myIcon.src = Icon;
  element2.appendChild(myIcon);
  element2.classList.add('centered');

  //Append elements to container
  container.appendChild(element);
  container.appendChild(element2);
  
  return container;
}

document.body.appendChild(component());
