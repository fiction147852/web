package co.yedam.mapper;

import java.util.List;

import co.yedam.common.SearchVO;
import co.yedam.vo.BoardVO;

public interface BoardMapper {
	public String getTimes();
	public List<BoardVO> selectList(SearchVO search);
	public int selectCount();
	public int insertBoard(BoardVO bo);
	public int deleteBoard(int bno);
	public BoardVO getBoard(int bno);
	public int updateBoard(BoardVO vo);
    public List<BoardVO> boardList();

}
