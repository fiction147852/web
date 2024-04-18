/**
 * array.js
 */

document.querySelector('form').remove();
document.getElementById('show').innerHTML = '';
 
const fruits = ['사과'];
 
fruits.push('수박');
fruits.push('복숭아');
fruits.pop();
fruits.unshift('포도');
fruits.shift();

fruits.splice(1, 0, '참외') 
fruits.splice(1,1);


console.log(fruits);

const members = [{name:"홍길동", age: 20}];
members.push({name: "김길동", age: 21})
members.push({name: "박길동", age: 22})

//forEach 반환:  값이 없으면 undefined
members.forEach(elem => {
	console.log(elem);
})

//filter 반환 : 배열반환.
let result = members.filter(elem => elem.age>20);

//map : A - A' => 원래 있는 배열을 다시 사용 재활용 느낌
result = members.map(elem => {
	let obj = {}
	obj.fullName = elem.name;
	obj.age = elem.age;
	obj.point = 100;
	
	return obj;
});

//평균 구하기.
result = [10, 20, 30, 40, 23, 19].reduce((acc, elem, idx, ary)=>{		//reduce 누적 합을 구하는 과정
	console.log(acc, elem, idx, ary);
	if(idx +1 == ary.length){
		return (acc + elem) / ary.length;
	}
	
	//누적합 구하기
	return acc + elem;
	
	//return acc > elem ? elem : acc;	//acc활용		//acc > elem ? elem : acc;여기서 acc> elem 이라는 값이 조건이 맞다면 ? :의 왼쪽이 출력 아니라면 :의 오른쪽이 출력
}, 0);	//, 뒤에 오는 값은 초기값을 몇으로 할지

console.log(result);

let ul = document.createElement('ul');
document.getElementById('show').appendChild(ul);
members.reduce((acc, elem)=>{
	let li = document.createElement('li');
	li.innerHTML = '이름:' + elem.name + ', 나이: ' + elem.age;
	acc.appendChild(li);
	return acc;
}, ul); //<ul><li></li></ul>



