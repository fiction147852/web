/**
 * board.js
 */
import { svc } from './boardService.js';
console.log(svc);
svc.replyList(bno, function() {
	console.log(result);
	result.forEach(elem => {
		let li = document.createElement('li');
		let span = document.createElement('span');
		span.innerText = elem.replyNo;
		span.className = 'col-sm-2';
		li.appendChild(span);

		span = document.createElement('span');
		span.innerText = elem.reply;
		span.className = 'col-sm-5';
		li.appendChild(span);

		span = document.createElement('span');
		span.innerText = elem.replyer;
		span.className = 'col-sm-5';
		li.appendChild(span);

		let btn = document.createElement('button');
		btn.innerText = '삭제';
		li.appendChild(btn);


		//ul
		document.querySelector('div.content ul').appendChild(li);

	});
});

function deleteFormFunc() {
	document.forms[1].action = "removeForm.do";
	document.forms[1].submit();
	document.forms[1].action = "modifyForm.do";
}

//submitForm



document.querySelector('form[name="submitForm"]').addEventListener('submit', function(e) {
	e.preventDefault(); //기본기능 차단.
	if (logId == writer) {
		this.submit();
	} else {
		alert('권한이 없습니다.');
	}
})