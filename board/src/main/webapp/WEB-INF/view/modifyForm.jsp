<%@page import="co.yedam.vo.BoardVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!-- modifyForm.jsp -->
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>


<form action="modifyBoard.do">
  <input type="hidden" name="boardNo" value="${bvo.boardNo}">
  <input type="hidden" name="page" value="${page}">
  <input type="hidden" name="searchCondition" value="${searchCondition}">
  <input type="hidden" name="keyword" value="${keyword}">
  <table class="table">
    <tr>
      <th>글번호</th>
      <td><c:out value="${bvo.boardNo}"></c:out></td>
      <th>글제목</th>
      <td><input class="form-control" type="text" name="title" value="${bvo.title}"></td>
    </tr>
    <tr>
      <th>글내용</th>
      <td colspan="3"><textarea class="form-control" name="content">${bvo.content}</textarea></td>
    </tr>
    <tr>
      <th>작성자</th>
      <td><c:out value="${bvo.writer}"/></td>
      <th>작성일시</th>
      <td><c:out value="${bvo.createDate}"/></td>
    </tr>
    <tr>
      <td colspan="4" align="center">
        <button type="submit" class="btn btn-primary">저장</button>
      </td>
    </tr>
  </table>
</form>
