// 숫자 3자리 콤마찍기
Number.prototype.formatNumber = function() {
	if (this == 0)
		return 0;
	let regex = /(^[+-]?\d+)(\d{3})/;
	let nstr = (this + '');
	while (regex.test(nstr)) {
		nstr = nstr.replace(regex, '$1' + ',' + '$2');
	}
	return nstr;
};

let basket = {
	cartCount: 0, // 전체수량.
	cartTotal: 0, // 전체금액.

	cartList: function() {
		// 목록.
	},

	delItem: function() {
	},

	reCalc: function() {
		//수량, 금액 합계 계산
		
		//합계 자리에 출력
		document.querySelector('#sum_p_num span').textContent = basket.cartCount;
		document.querySelector('#sum_p_price span').textContent = basket.cartTotal;
	},

	changePNum: function() {

	},

	delCheckedItem: function() {
	},

	delAllItem: function() {
	},
};

basket.cartList();
