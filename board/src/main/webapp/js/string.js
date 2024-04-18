/**
 * String.js
 */
//	form.요소 제거
document.querySelector('form').remove();
document.getElementById('show').innerHTML ='';

let str1 = new String('hello');
console.log(typeof str1);

let str2 = 'hello';

console.log(str2.toUpperCase().substring(0,2));
console.log(str2.toUpperCase().slice(-2));
console.log(str2.trim().toUpperCase().slice(-2));

let str3 = 'hello,nice,kind';
console.log(str3.indexOf('nice'));

let str4 = str3.replace('hello', '안녕');
console.log(str3, str4);

let str3Ary = str3.split(",");
console.log(str3Ary);
str3.charAt(0); //위치의 인덱스에 해당하는 문자반환


//성별을 구분하는 함수
function checkGender(sso = '031005-3234567'){
	/*
		//1,3 ->남자 반환
	if(sso.slice(-7).charAt(0) == '1' ||sso.slice(-7).charAt(0) == '3'){
		console.log("남자");
	}else if (sso.slice(-7).charAt(0) == '2' ||sso.slice(-7).charAt(0) == '4'){
		//2,4 ->여자 반환
		console.log("여자");
	}
	*/

		
//	    let genChar = sso.slice(-7).charAt(0);
//		let genChar = sso.replace(/\w/, '');
		let genChar = sso.replace('-', '');
	    switch (genChar) {
    	case '1':
        case '3':
            console.log("남자");
            break;
        case '2':
        case '4':
            console.log("여자");
            break;
        default:
            console.log("잘못된 주민등록번호입니다.");
    }

}



let numbers = ['990102-2345678', '010204-3123456', '0303044123456', '970304 1123456'];
numbers.forEach(elem => checkGender(elem));

console.clear();
//Date객체.
const today = new Date(); 			//실행시점의 시스템 시간
console.log(today);
today.setFullYear(2020);
today.setMonth(0);					//1
today.setDate(1);					//0으로 가면 전으로 넘어간다

console.log('말일:', today.getDate());

console.log(today.getFullYear());	//년도
console.log(today.getMonth()+1);	//월(0부터 시작)
console.log(today.getDate());		//날짜	
console.log(today.getHours());		//시
console.log(today.getMinutes());	//분	
console.log(today.getSeconds());	//초	
console.log(today.getDay());		//요일(0~6) 0은 월요일





function createCalendar(year = 2024, month = 4-1){
	
	//출력위치 지정
	const show =document.querySelector('#show');
	
	show.innerHTML = "<h3>" + year + "년" + month + "월" + "</h3>"
	
	
	document.getElementById('calBtn').addEventListener('click', function(e){
		const year = document.getElementById('year');
		const mon = document.getElementById('month');
		createCalendar(year, month);
	})
	
	
	
	const thisMonth = new Date(year, month -1, 1);
	console.log(thisMonth);
	//테이블 생성
	let table =document.createElement('table');
	table.className = 'table';
	show.appendChild(table);
	
	//요일 출력
	const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat']
	let thead = document.createElement('thead');
	let tr = document.createElement('tr');
	
	days.forEach(function(elem){
		let th = document.createElement('th');
		th.innerText = elem;
		tr.appendChild(th);
	})
	thead.appendChild(tr);
	table.appendChild(thead);
	
	//날짜 출력()
	let tbody = document.createElement('tbody');
	

	//요일 지정()
	let spaces = thisMonth.getDay();
	tr = document.createElement('tr');
	
	//빈공간
		for(let d=0; d<spaces; d++){
		let td = document.createElement('td');
		td.innerText= '';
		tr.appendChild(td);
	}
	
	
	//날짜 출력
	thisMonth.setMonth(month);
	thisMonth.setDate(0);
	
	let end = thisMonth.getDate();
	
	for (let d=1; d<=end; d++){
		let td = document.createElement('td');
		td.innerText = d;
		tr.appendChild(td);
		
		//주말 색 구분
		if((d + spaces) % 7 ==0){
			td.style.background ='red';
			td.style.color = 'yellow';
		}else if ((d + spaces) % 7 == 1){
			td.style.background ='blue';
			td.style.color = 'yellow';
		}
		//시작 빈공간
		if((d + spaces) % 7 == 0){
			tbody.appendChild(tr)
			tr = document.createElement('tr');
		}
	}
	table.appendChild(tbody);
	tbody.appendChild(tr);
	
}
createCalendar(2024,5);


//timber
let timer = document.getElementById('timer');
//setInterval(함수, 시간간격);

setInterval(function(){
	let now = new Date();
	timer.innerHTML = now
}, 1000);

Date.prototype.format = function(){
	let yyyy = this.getFullYear();
	let MM = this.getMonth() +1;
	let dd = this.getDate();
	let hh = this.getHours();
	let mm = this.getMinutes();
	let ss = this.getSeconds();
	
	return yyyy+ "/" + ("0" + MM).slice(-2) + "/" + ("0" + dd).slice(-2)
		+ " " + ("0" + hh).slice(-2) + ":" + ("0" + mm).slice(-2)//
		+ ":" + ("0" + ss).slice(-2);
}