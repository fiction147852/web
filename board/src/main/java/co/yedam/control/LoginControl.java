package co.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import co.yedam.common.Control;
import co.yedam.service.MemberService;
import co.yedam.service.MemberServiceImpl;
import co.yedam.vo.MemberVO;

public class LoginControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String id = req.getParameter("id");
		String pw = req.getParameter("pw");
		
		MemberVO vo = new MemberVO();	
		vo.setMemberId(id);
		vo.setMemberPw(pw);
		
		MemberService svc = new MemberServiceImpl();
		
		vo = svc.loginCheck(vo);
		if(svc.loginCheck(vo) != null) {
			//로그인성공하면 로그인id를 세션에 저장.
			HttpSession session = req.getSession();
			session.setAttribute("logId", id); //id = vo.getMemberId();
			session.setAttribute("auth", svc);
			
			resp.sendRedirect("boardList.do");
			
		} else {
			req.setAttribute("msg", "id와 password를 확인하세요.");
			req.getRequestDispatcher("loginForm.tiles").forward(req, resp);
			
		}
	}

}
