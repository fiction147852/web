/**
 * cartService.js
 */

const svc = {
	// 장바구니 목록.
	cartList(successCall, errorCall) {
		fetch('cartList.do')
			.then(resolve => resolve.json())
			.then(successCall)
			.catch(errorCall);
	},
	cartUpdate(vo = {}, successCall, errorCall) {
		fetch('cartmodify.do', {
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: 'no=' + vo.no + '&qty=' + vo.qty
		})
			.then(resolve => resolve.json())
			.then(successCall)
			.catch(errorCall);
	},
	cartRemove(no = 1, successCall, errorCall) {
		fetch('removeCart.do', {
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: 'no=' + no
		})
			.then(resolve => resolve.json())
			.then(successCall)
			.catch(errorCall);
	}
}