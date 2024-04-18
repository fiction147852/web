package co.yedam.mapper;

import java.util.List;

import co.yedam.vo.CartVO;

public interface CartMapper {
	public List<CartVO> cartListView();
	public int removeCart(int no);		//
	public int updateCart(CartVO vo);
	
	
}
