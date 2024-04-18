/**
 * member.js
 */
const fields = ['id', 'first_name', 'last_name', 'email', 'salary', 'gender'];

document.querySelector('#show>table').innerHTML = '';
const tab = document.querySelector('#show>table');
tab.appendChild(makeHeader()); //thead
tab.appendChild(makeBody());	//tbody

//thead생성
function makeHeader(){
	//thead 생성 . tr생성 th*5 
	let thd =document.createElement('thead');
	let tr = document.createElement('tr');
	thd.appendChild(tr);
	fields.forEach(field => {
		let th = document.createElement('th');
		th.innerHTML = field;
		tr.appendChild(th);
	});
	return thd;
} 
//tbody 생성 데이터 기반 생성
function makeBody(){
	let thd = document.createElement('tbody');
	members.forEach((elem, idx)=>{
		//console.log(elem, idx);
		if(idx<2 )
		thd.appendChild(makeRow(elem));
	})
	return thd;
}

//row 생성
function makeRow(member = {}){
	let tr = document.createElement('tr');
	fields.forEach(field => {
		let td =document.createElement('td');
		td.innerHTML = member[field];
		tr.appendChild(td);
	})
	//console.dir(tr.children[2].innerHTML);	//td>Louis</td

	
	
	
	tr.addEventListener('click', function(e){
		e.stopPropagation();
		document.getElementById('mid').value = item.children[0].innerHTML;
		document.getElementById('fname').value = item.children[1].innerHTML;
		document.getElementById('lname').value = item.children[2].innerHTML;
		document.getElementById('email').value = item.children[3].innerHTML;
		document.getElementById('salary').value = item.children[4].innerHTML;
		document.getElementById('gender').value = item.children[5].innerHTML;
	}, false);	//capturing(상->하), bubbling(하 ->상)
	
	//버튼추가
    let btn = document.createElement('button');
    btn.innerText = '삭제';
    btn.className = "btn";					//<button class="btn" /> btn.setAttribute('class', 'btn')
    btn.classList.add('btn-danger');
    btn.addEventListener('click', e => {
        //tr.remove();
        e.stopPropagation();
        btn.parentElement.parentElement.remove();
        
    }, false);
	let td = document.createElement('td');
	td.appendChild(btn);
	tr.appendChild(td);
	
	
	return tr;
	}


//저장 버튼 이벤트
document.getElementById('addBtn').addEventListener('click', function(e){
	console.log('message')
});

document.querySelector('form:nth-of-type(1)')//
	.addEventListener('submit', function(evt){
		evt.preventDefault();
		console.log(evt);
		
		//id,fname, lanme, email, gender, salary, =>입력값
		const userVal = {}
		userVal.id = document.getElementById('mid').value;
		userVal.first_name = document.getElementById('fname').value;
		userVal.last_name = document.getElementById('lname').value;
		userVal.email = document.getElementById('email').value;
		userVal.gender = document.getElementById('gender').value;
		userVal.salary = document.getElementById('salary').value;
		
		let tr = makeRow(userVal);
		document.querySelector('#show tbody').appendChild(tr);
	})
	
// 각 행에 클릭 이벤트 추가
document.querySelectorAll('#show tbody tr').forEach(element => {
    element.addEventListener('click', function() {
        const rowData = {};
        fields.forEach((field, index) => {
            rowData[field] = element.children[index].innerHTML; 
        });

        document.getElementById('mid').value = rowData.id;  
        document.getElementById('fname').value = rowData.first_name;
        document.getElementById('lname').value = rowData.last_name;
        document.getElementById('email').value = rowData.email;
        document.getElementById('gender').value = rowData.gender;
        document.getElementById('salary').value = rowData.salary;
    });
});


document.querySelector('form:nth-of-type(1)')//
	.addEventListener('submit', function(evt){
		evt.preventDefault(); //submit 기본기능 차단
	})
	
	
//수정처리
document.querySelectorAll('#show tbody tr').forEach(item =>{
	console.log(item.children[0].innerHTML);
	
})

document.getElementById('editBtn').addEventListener('click', function(e){
    const mid = document.getElementById('mid').value;

    // 각 행을 순회하며 입력된 ID와 일치하는 행을 찾습니다.
    document.querySelectorAll('#show tbody tr').forEach(item => {
        if(mid === item.children[0].innerHTML) {
            // ID가 일치하는 행을 찾았을 때, 해당 행의 정보를 입력칸에 설정합니다.
            item.children[1].innerHTML = document.getElementById('fname').value; 
            item.children[2].innerHTML = document.getElementById('lname').value; 
            item.children[3].innerHTML = document.getElementById('email').value; 
            item.children[4].innerHTML = document.getElementById('gender').value; 
            item.children[5].innerHTML = document.getElementById('salary').value; 

            // 수정할 정보를 입력한 후, 더 이상의 처리를 하지 않고 반복문을 종료합니다.
            return;
        }
    });
});
