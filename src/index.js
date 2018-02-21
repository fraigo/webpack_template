import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import GitHubIcon from './github.png';
import Data from '../package.json';
import imageIcon from './utils.js';

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
  
  var codeContainer = document.createElement('div');
  
  var code=document.createElement('div');
	code.classList.add("code");
	code.innerHTML=JSON.stringify(Data,null,2);
	console.log(Data);
	codeContainer.appendChild(code);
  container.appendChild(codeContainer);
  
  
  return container;
}




document.body.appendChild(component());
