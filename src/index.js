import "bootstrap-loader";
import "./css/app.css"
import a from "./awake.js";

let container = document.createElement('div');
container.className = 'container';
let h1 = document.createElement('h1');
h1.className = 'text-center';
h1.innerText = a;
container.appendChild(h1);
document.body.appendChild(container);
