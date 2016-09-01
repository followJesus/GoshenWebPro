package goshen.education.utils;

import com.google.gson.Gson;

/**
 * 工具类
 * @author yu
 *
 */
public class Tools {
	
	//解析obj
	public static String toJson(Object obj)
	{
	    Gson gson=new Gson();
		return gson.toJson(obj);
	}
	//解析json 字符串
	public static <T> T fromJson(String str,Class<T> obj)
	{
	    Gson gson=new Gson();
		return gson.fromJson(str, obj);
	}
	

}
