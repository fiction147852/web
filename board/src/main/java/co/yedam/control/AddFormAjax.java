package co.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;

import co.yedam.common.Control;
import co.yedam.service.BoardService;
import co.yedam.service.BoardServiceImpl;
import co.yedam.vo.BoardVO;

public class AddFormAjax implements Control {

	
	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		String savePath = req.getServletContext().getRealPath("upload");
		int maxSize = 1024 * 1024 * 5;
		
		MultipartRequest multi =//
				new MultipartRequest(req, savePath,maxSize, "utf-8", new DefaultFileRenamePolicy() );
		
		String title = multi.getParameter("title");
		String content = multi.getParameter("content");
		String writer = multi.getParameter("writer");
		String myImg = multi.getFilesystemName("myImg");
		
		BoardVO bvo = new BoardVO();
		bvo.setTitle(title);
		bvo.setContent(content);
		bvo.setWriter(writer);
		bvo.setImg(myImg);
		
		BoardService bsv = new BoardServiceImpl();
		if(bsv.addBoard(bvo)) {
			//"{"retCode": "Success"}
			resp.getWriter().print("{\"retCode\": \"Success\"}");
		}else {
			//"{"retCode": "Success"}
			resp.getWriter().print("{\"retCode\": \"Fail\"}");
		}
		
		
	}

}
