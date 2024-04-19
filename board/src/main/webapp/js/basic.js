/**
 * 
 */
console.log('basic.js start.')

//매개값 입력 => 반환.
function sum(n1 = 0, n2 = 0){
	return n1 + n2;
}
let result = sum(10);
console.log(result);

const sum1 = function(a = 0, b = 0){
	return a + b;	
}
const sum2 = sum1;

console.log(sum1() + sum2(10));	//()없으면 함수 자체를 표시 ()있으면 함수 실행 계산

function sum3(n1 = [0, 10]){
	let result = 0;
	for(let num of n1){
		result += num;	
	}
	return result;
}
result = sum3([10,20,30]);
console.log(result);

function showDay(day = []){
	//#header =>th생성	
	let tr = document.createElement('tr');
	day.forEach(function(elem){
		let th = document.createElement('th');
		th.innerText = elem;
		tr.appendChild(th);
	})
	console.log(tr);
	document.getElementById('header').appendChild(tr);
	
}
showDay(['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'])
//달력
const showDate = function(start = 1, end = 31){
	console.log(start,end);
	let spaces = getSpace(5);
	
	
	let tr = document.createElement('tr');
	//빈공간 td.
	for(let d=0; d<spaces; d++){
		let td = document.createElement('td');
		td.innerText= '';
		tr.appendChild(td);
	}
	
	for(let d = start; d<=end; d++){
		let td = document.createElement('td');
		td.innerText= d;
		tr.appendChild(td);
		
		if((d + spaces)% 7 == 0){
			document.querySelector('#list').appendChild(tr)
			tr = document.createElement('tr');
		}
	}
	document.querySelector('#list').appendChild(tr)
}
showDate(1, getLastDate(5));

//공백계산함수
function getSpace(month = 1){ //아무것도 안쓰면 1월달로 알것이다 
	switch(month){
		case 1: return 1;
		case 4: return 4;
		case 5: return 3;
	}
}

function getLastDate(month =1){
	switch(month){
		case 1: return 31;
		case 4: return 30;
		case 5: return 31;
		
	}
}

























