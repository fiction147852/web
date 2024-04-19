package co.yedam.service;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import co.yedam.common.DataSource;
import co.yedam.mapper.CartMapper;
import co.yedam.vo.CartVO;

public class CartServiceImpl implements CartService{
	SqlSession session = DataSource.getInstance()//
			.openSession(true);

	CartMapper mapper = session.getMapper(CartMapper.class);
//	@Override
//	public boolean addCart(CartVO vo) {
//		return mapper.insertCart(vo);
//	}

	@Override
	public boolean removeCart(int no) {
		return mapper.removeCart(no) == 1;
	}

	@Override
	public List<CartVO> cartList() {
		return mapper.cartListView();
	}

	@Override
	public boolean modifyCart(CartVO vo) {
		return mapper.updateCart(vo) == 1;
	}
	
	
}
