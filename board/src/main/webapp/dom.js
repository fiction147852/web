/**
 * 
 */
	//Ajax 호출
fetch('memberData.do') //서버의 페이지 요청.
	.then(function(data){	//이렇게 가져온 데이터를 반환한다
		return data.json(); //이 제이슨 데이터 문자열을 반환 //{"name":"홍길동"}=>{name:"홍길동"}
		
	})
	.then(function(data){
		console.log(data);
		///////
		const members = data;
		
		let tab = document.createElement('table');
		tab.setAttribute('class', 'table');
		// 회원정보를 표로 출력. 작성.
		for (let member of members) {
		    // tr>td*3
		    let tr = document.createElement('tr');
		    for (let prop in member) {
		        let td = document.createElement('td');
		        td.innerText = member[prop];
		        tr.appendChild(td);
		    }
		    tab.appendChild(tr);
		}
		document.querySelector('#show').appendChild(tab);

	})
	.catch(function(err){
		console.log(err);
	})