/**
 * func.js
 */
const data = ['Apple', 'Banana', 'Cherry'];

document.querySelector('#show').innerHTML = '';

//화살표 함수
let ul = document.createElement('ul');
document.querySelector('#show').appendChild(ul);

data.forEach(elem =>{
	let li = document.createElement('li');	
	li.innerText = elem; //<li>apple <button>삭제</button></li>
	li.addEventListener('mouseover', e =>{
		li.style.background = 'red';
	})
	li.addEventListener('mouseout', e=>{
		li.style.background = '';
	})
	
	
	let btn = document.createElement('button');
	btn.innerText = '삭제';
	btn.addEventListener('click', e => btn.parentElement.remove());//이벤트 유형
	//button의 상위요소 (li)
	li.appendChild(btn);
	
	ul.appendChild(li);
});
