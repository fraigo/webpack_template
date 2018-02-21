import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import GitHubIcon from './github.png';

function component() {
  var container = document.createElement('div');
  container.classList.add('centered');

  
  var element = document.createElement('h1');
  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // Using class from loaded css

  //Append elements to container
  container.appendChild(imageIcon(Icon));
  container.appendChild(element);
  
  var link=document.createElement("a");
  link.href="https://github.com/fraigo/webpack_template/";
  link.appendChild(imageIcon(GitHubIcon))
  
  container.appendChild(link);
  
  return container;
}


function imageIcon(obj){
	var img=document.createElement("img");
	img.src=obj;
	return img;
}

document.body.appendChild(component());