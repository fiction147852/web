package co.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.service.CartService;
import co.yedam.service.CartServiceImpl;
import co.yedam.vo.CartVO;

public class Cartmodify implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String no = req.getParameter("no");
		String qty = req.getParameter("qty");
		
		
		CartVO vo = new CartVO();
		vo.setNo(Integer.parseInt(no));
		vo.setQty(Integer.parseInt(qty));
		
		CartService cs = new CartServiceImpl();
		if(cs.modifyCart(vo)) {
			//"{"retCode": "Success"}
			resp.getWriter().print("{\"retCode\": \"Success\"}");
		}else {
			//"{"retCode": "Fail"}
			resp.getWriter().print("{\"retCode\": \"Fail\"}");
		}
		
	}

}
