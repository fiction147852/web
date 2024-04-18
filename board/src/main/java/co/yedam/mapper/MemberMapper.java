package co.yedam.mapper;

import java.util.List;

import co.yedam.vo.MemberVO;

public interface MemberMapper {
	public MemberVO selectMember(MemberVO mvo);
	public boolean insertMember(MemberVO mvo);
	public List<MemberVO> selectMembers();
	public int deleteMember(String mid);
	
	public MemberVO selectProduct(MemberVO mvo);
	

	//상품목록
	
	//카트 관련
}
