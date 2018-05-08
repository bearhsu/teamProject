package test.mysql;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;


public class MySqlTest {
	
	public static void main(String[] args) throws ClassNotFoundException, SQLException {
		MySqlTest mySqlTest = new MySqlTest();
		Connection connection = mySqlTest.getConnection();
		Statement sta = connection.createStatement();
		
		sta.executeUpdate("insert into user(ID) values('6')");
//		System.out.println(rs.toString());
	}

	public Connection getConnection() throws ClassNotFoundException, SQLException {
		String driver = "com.mysql.jdbc.Driver";
		String url = "jdbc:mysql://192.168.0.xxx:3306/xx";
		String username = "root";
		String password = "root";
		
		getClass().forName(driver);
		
		Connection connection = DriverManager.getConnection(url, username, password);
		return connection;
		
	}
}
