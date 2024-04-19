package co.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.service.CartService;
import co.yedam.service.CartServiceImpl;

public class RemoveCart implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String no = req.getParameter("no");

		CartService cs = new CartServiceImpl();

		if (cs.removeCart(Integer.parseInt(no))) {
			// "{"retCode": "Success"}
			resp.getWriter().print("{\"retCode\": \"Success\"}");
		} else {
			// "{"retCode": "Fail"}
			resp.getWriter().print("{\"retCode\": \"Fail\"}");
		}

	}
}
