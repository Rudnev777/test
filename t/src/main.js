import './style.css';

const btn = document.querySelector("button");
const img = document.querySelector('img');
let i = 0;
btn.addEventListener("click" ,() => {
  console.log('111')
let s = fetch("https://dixaba.xyz/cat.php?stats").then((r) => {
  return r.json();
}).then(data => console.log(data));

console.log(s);
})