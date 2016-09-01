package goshen.education.domain.web;

/**
 * @author cunli
 * 专业信息
 */
public class Professional {
	
    public long id;
    public String proName;//名称
    public String proCode;//编码
    
    /*教育类型*/
    public int xueli;//0：非学历  1：学历
   
    public int proState;//状态
    public String company;//开发单位
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getProName() {
		return proName;
	}
	public void setProName(String proName) {
		this.proName = proName;
	}
	public String getProCode() {
		return proCode;
	}
	public void setProCode(String proCode) {
		this.proCode = proCode;
	}
	public int getXueli() {
		return xueli;
	}
	public void setXueli(int xueli) {
		this.xueli = xueli;
	}
	public int getProState() {
		return proState;
	}
	public void setProState(int proState) {
		this.proState = proState;
	}
	public String getCompany() {
		return company;
	}
	public void setCompany(String company) {
		this.company = company;
	}
    
}
