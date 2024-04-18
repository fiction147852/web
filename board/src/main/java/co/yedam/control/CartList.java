package co.yedam.control;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.common.Control;
import co.yedam.service.CartService;
import co.yedam.service.CartServiceImpl;
import co.yedam.vo.CartVO;

public class CartList implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		
		CartService cs = new CartServiceImpl();
		List<CartVO> list = cs.cartList();
		
		Gson gson = new GsonBuilder().create();
		String json = gson.toJson(list);
		
		resp.getWriter().print(json);
	}
}
