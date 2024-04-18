/**
 * ajax.js
 */
$(document).ready(function() {
	// 페이지로딩 후 목록 출력.memberAjax.do
	// fetch().then().then().then().catch()
	$.ajax({
		url: '../memberAjax.do', //호출페이지.
		method: 'get',
		dataType: 'json' // JSON.parse();//이렇게 하면 알아서 파싱한다 JSON.parse 안해도댐
	})
		.done(function(result) {
			console.log(result);

			// 목록출력. id, 이름, 연락처, 비번. => 작성.
			result.forEach(member => {
				$('#show tbody').append($('<tr />').append($('<td />').text(member.memberId),
					$('<td />').text(member.memberNm),
					$('<td />').text(member.phone),
					$('<td />').text(member.memberPw),
					($('<td />').append($('<button>삭제</button>').click(function() {
						// 삭제 버튼 클릭 시 동작
						deleteMember(member.memberId);
					})))
				));

			})

		})
		.fail(function(err) {
			console.error(err);
		})
		.always(function(data) {
			//console.log(data);
		})

	// 등록버튼 이벤트.
	$('div#register form[name="myFrm"]').on('submit', function(e) {
		e.preventDefault(); // 
		$.ajax({
			url: '../addMemberAjax.do',
			method: 'post',
			data: $('form[name="myFrm"]').serialize(), // 전송데이터
			//{mid:?, name:?} 이렇게해도 가능하다
			dataType: 'json'
		})
			.done(function(result) {
				console.log(result);
				
				const member = {
					memberId: $("input[name='memberId']").val(),
					memberNm: $("input[name='memberNm']").val(),
					memberPw: $("input[name='memberPw']").val(),
					phone: $("input[name='phone']").val()
				}

			})
			.fail(function(err) {
			})
	})
})
