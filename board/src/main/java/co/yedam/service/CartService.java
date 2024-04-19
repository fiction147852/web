package co.yedam.service;

import java.util.List;

import co.yedam.vo.CartVO;

public interface  CartService {
//	public boolean addCart(CartVO vo);
	public List<CartVO> cartList();
	public boolean removeCart(int no);
	
	boolean modifyCart(CartVO vo);
}
