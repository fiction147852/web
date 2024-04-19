package co.yedam.common;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

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
		if (vo != null) {
			// 로그인 성공하면 로그인 id를 세션에 저장
			HttpSession session = req.getSession(); // get에 받아놓은 값은 한번받고 나면 끊어짐
			session.setAttribute("logId", vo.getMemberId());// session에 받아놓은 값은 로그아웃 하기 전까지 값을 담고있따
			session.setAttribute("auth", vo.getResponsibility());

			if (vo.getResponsibility().equals("Admin")) {
				// 관리자 페이지.
				req.getRequestDispatcher("member/user.tiles").forward(req, resp);
			} else {
				// 사용자 페이지.
				req.getRequestDispatcher("user/user.tiles").forward(req, resp);
				// resp.sendRedirect("boardList.do");
			}

		} else {
			req.setAttribute("msg", "id와 password를 확인하세요");
			req.getRequestDispatcher("WEB-INF/view/loginForm.jsp").forward(req, resp);
		}
	}

}
