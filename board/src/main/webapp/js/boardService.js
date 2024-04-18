/**
 * boardService.js
 * XMLHttpRequest -> fetch
 */

const n1 = 100;
const n2 = 200;

const svc = {
	//메소드.
	replyList(param = { bno: 1, page: 1 }, successCall) {	//(실행할 실제값, 실행할 함수)
		/*let xhtp = new XMLHttpRequest();
		xhtp.open('get', 'replyList.do?bno=' + param.bno + '&page=' + param.page);
		xhtp.send()
		xhtp.onload = function() {
			let result = JSON.parse(xhtp.response);
			successCall(result);

		}
		*/
		//fetch
		let url = 'replyList.do?bno=' + param.bno + '&page=' + param.page;
		fetch(url, {
			method: 'get',
			mode: "cors",
			cache: "no-cache",
			credentials: "same-origin",
		})
			.then(result => result.json()) //body값 -> 자바스크립트 객체 타입으로 변경시켜주는 코드
			.then((successCall))
			.catch(function(err) {
				console.error(err);
			})
	},
	//댓글삭제
	removeReply(rno = 1, successCall, errorCall) {
		fetch('removeReply.do?rno=' + rno)
			.then(result => result.json())
			.then(result => {
				if (result.retCode == 'Success') {
					successCall();
				} else {
					errorCall();
				}
			})
			.catch(err => console.error(err));

	},
	//페이징목록
	pagigList(bno = 1, successCall) {
		//fetch('pagingList.do?no=' + no)
		//.then(result => reuslt.json())
		//.then()
		let xhtp = new XMLHttpRequest();
		xhtp.open('get', 'replyCount.do?bno=' + bno);
		xhtp.send();
		xhtp.onload = function() {
			let result = JSON.parse(xhtp.response); //"json" -> obj.
			successCall(result);
		}
	},

	//댓글등록
	addReply(rvo = { bno, reply, replyer }, successCall) {

		fetch('addReply.do', {
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: 'bno=' + rvo.bno + '&reply=' + rvo.reply + '&replyer=' + rvo.replyer

		})
			.then(result => result.json())
			.then(successCall)
			.catch(err => console.error(err));

	}



} //end of svc.



export { svc };