package co.yedam.service;

import java.util.List;
import java.util.Map;

import co.yedam.vo.ReplyVO;
import co.yedam.vo.SearchVO;

public interface ReplyService {
    public List<ReplyVO> replyList(SearchVO search);
    public boolean removeReply(int rno);
    public int getReplyCount(int bno);
    public boolean addReply(ReplyVO rvo);
	List<Map<String, Object>> getCntByMember();
    

}
