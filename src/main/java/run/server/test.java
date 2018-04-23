package run.server;

import java.io.File;

import org.apache.catalina.startup.Tomcat;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class test {

	private static Logger log = LoggerFactory.getLogger(test.class);
	
	public static void main(String[] args) {
		log.info("aaa");
		String webappDirLocation = "src/main/webapp/";
		Tomcat tomcat = new Tomcat();
		tomcat.setPort(8081);
		tomcat.setBaseDir(new File("target").getAbsolutePath());
		try {
			tomcat.addWebapp("/", new File(webappDirLocation).getAbsolutePath());
			tomcat.start();
			tomcat.getServer().await();
		} catch (Exception e) {
		}
	}
}
