package jdbc;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class AddMemberServelet
 */
@WebServlet("/addMemberServelet")
public class AddMemberServelet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    
    public AddMemberServelet() {
        super();
        
    }

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// 요청정보 param.
		request.setCharacterEncoding("utf-8"); // 인코딩 방식 한글처리.
		response.setContentType("text/json;charset=utf-8");
		
		 String id = request.getParameter("mid");
		 String pw = request.getParameter("mpw");
		 String nm = request.getParameter("mnm");
		 
		 Member member = new Member();
		 member.setMemberId(id);
		 member.setMemberPw(pw);
		 member.setMemberName(nm);
		 System.out.println(member);

		 

		MemberManage dao = MemberManage.getInstance();
		int addCnt = dao.registCustomer(member);
		
		// 처리결과를 ajax 호출한 페이지로 반환.
		if(addCnt == 1) {
			// {"retCode": "success", "memberId": "user1", "memberPw": 1234, "memberName": "사용자"} json 형태의 데이터로 만들어 넘기겠다.
			String json = "{\"retCode\": \"success\", \"memberId\":\""+id+"\", \"memberPw\": "+pw+", \"memberName\": \""+nm+"\"}";
			response.getWriter().print(json);
		} else {
			String json = "{\"retCode\": \"fail\"}";
			response.getWriter().print(json);

		}
	}

}
