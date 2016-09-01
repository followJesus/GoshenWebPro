package goshen.education.web;

import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;

import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author cunli
 * return json data
 */
@RestController
public class HelloController {
    
    @RequestMapping("/index")
    public String index() {
    	
    	 Gson gson = new Gson();
    	 gson.toJson("hello");
    	 
        return "Greetings from Spring Boot!";
    }
    
}
