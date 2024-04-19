<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<h3>글등록</h3>
<form action="addMember.do" method="post">
	<table class="table">

		<tr>
			<th>아이디</th>
			<td><input class="form-control" type="text" name="id"></td>
		</tr>
		<tr>
			<th>비밀번호</th>
			<td><input class="form-control" type="text" name="pw"></td>
		</tr>
		<tr>
			<th>이름</th>
			<td><input class="form-control" type="text" name="name"></td>
		</tr>
		<tr>
			<th>휴대폰</th>
			<td><input class="form-control" type="text" name="phone"></td>
		</tr>
		<tr>
      <td colspan="2" align="center">
        <input class="btn btn-primary" type="submit" value="등록">
      </td>
    </tr>
	</table>
</form>
