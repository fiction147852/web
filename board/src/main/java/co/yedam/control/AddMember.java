package co.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.service.MemberService;
import co.yedam.service.MemberServiceImpl;
import co.yedam.vo.MemberVO;

public class AddMember implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String id = req.getParameter("id");
		String pw = req.getParameter("pw");
		String name = req.getParameter("name");
		String phone = req.getParameter("phone");
		
		MemberVO vo = new MemberVO();
		vo.setMemberId(id);
		vo.setMemberPw(pw);
		vo.setMemberNm(name);
		vo.setPhone(phone);
		
		MemberService svc = new MemberServiceImpl();
		if(svc.addMember(vo)) {
			resp.sendRedirect("boardList.do");
		}else {
			req.setAttribute("msg", "등록중 에러가 발생.");
			req.getRequestDispatcher("WEB-INF/view/error.jsp").forward(req, resp);

		}
		
		
	}

	
}
