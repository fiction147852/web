package co.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.service.BoardService;
import co.yedam.service.BoardServiceImpl;
import co.yedam.vo.BoardVO;
import co.yedam.vo.SearchVO;

public class BoardControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// Control - Service - Mytis
		// Control - Service - Jdbc

		String bno = req.getParameter("bno");
		//추가파라미터
		String page = req.getParameter("page");
		String sc = req.getParameter("searchCondition");
		String kw = req.getParameter("keyword");
		
		SearchVO search = new SearchVO();
		search.setBno(Integer.parseInt(bno));
		search.setRpage(Integer.parseInt(page));
		
		
		// db조회 -> 페이지재지정.
		BoardService svc = new BoardServiceImpl();// new BoardServiceImpl();
		BoardVO bvo = svc.getBoard(Integer.parseInt(bno));

		req.setAttribute("bvo", bvo);
		req.setAttribute("page", page);
		req.setAttribute("searchCondition", sc);
		req.setAttribute("keyword", kw);

		// 페이지재지정.
		req.getRequestDispatcher("board/board.tiles")//
				.forward(req, resp);

	}
	

}
