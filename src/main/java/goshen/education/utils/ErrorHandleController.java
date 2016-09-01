package goshen.education.utils;

import org.springframework.boot.autoconfigure.web.ErrorController;
import org.springframework.stereotype.Controller;

/**
 * @author cunli
 * 错误处理
 */
@Controller
public class ErrorHandleController implements ErrorController{

	/* (non-Javadoc) 错误页面
	 * @see org.springframework.boot.autoconfigure.web.ErrorController#getErrorPath()
	 */
	@Override
	public String getErrorPath() {
		return "error"; 
	}

}
