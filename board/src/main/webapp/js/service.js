const fields = ['memberId', 'memberPw', 'memberNm', 'phone'];

function makeRow(member = {}) {
    let tr = document.createElement('tr');
    fields.forEach(function(elem) {
        let td = document.createElement('td');
        td.innerText = member[elem] == undefined ? '' : member[elem];
        tr.appendChild(td);
    });

    let btn = document.createElement('button');
    btn.innerText = '삭제';
    btn.addEventListener('click', function(e) {
        const delHtp = new XMLHttpRequest();
       	
        delHtp.open('get', 'removeMember.do?mid=' + member.memberId);
        delHtp.send();
        delHtp.onload = function() {
            let result = JSON.parse(delHtp.response);
            if (result.retCode == 'Success') {
                alert('삭제 성공');
                tr.remove(); // 화면에서도 삭제
            } else if (result.retCode == 'Fail') {
                alert('삭제처리중 에러');
            } else {
                alert('알 수 없는 코드');
            }
        };
    });

    let td = document.createElement('td');
    td.append(btn);
    tr.append(td);

    return tr;
}

// Ajax 호출
const xhtp = new XMLHttpRequest();
xhtp.open('get', 'memberAjax.do');
xhtp.send();

xhtp.onload = function() {
    let members = JSON.parse(xhtp.response);
    members.forEach(member => {
        document.getElementById('list').appendChild(makeRow(member)); // tr 생성
    });
};

// 등록 버튼 클릭 이벤트
document.getElementById('addBtn').addEventListener('click', function(e) {
    let id = document.getElementById('memberId').value;
    let pw = document.getElementById('memberPw').value;
    let name = document.getElementById('memberNm').value;
    let phone = document.getElementById('phone').value;

    const addHtp = new XMLHttpRequest();
    addHtp.open('get', 'addMemberAjax.do?memberId=' + id + '&memberPw=' + pw + '&memberNm=' + name + '&phone=' + phone);
    addHtp.send();
    addHtp.onload = function() {
        // 서버 응답을 처리하는 로직 추가
        
	let result = JSON.parse(addHtp.response);
	    if (result.retCode == 'Success') {
	        alert('추가 성공');
	         let newMember = {
                memberId: id,
                memberPw: pw,
                memberNm: name,
                phone: phone
            };
	        document.getElementById('list').append(makeRow(newMember))
	    } else if (result.retCode == 'Fail') {
	        alert('추가처리중 에러');
	    } else {
	        alert('알 수 없는 코드');
	    }
	};


    
});
