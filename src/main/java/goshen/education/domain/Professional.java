package goshen.education.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.validator.constraints.Email;

/**
 * @author cunli
 * 专业信息
 */
@Entity
public class Professional {
	
	@SuppressWarnings("unused")
	private static final long serialVersionUID = 1L;

	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	
	/**
	 * 名称
	 */
	@Email(message = "必须是Email 格式")
	@Column(nullable = false)
	private String proName;
	
	/**
	 * 编码
	 */
	@Column(nullable = false)
	private String proCode;
    
    /*教育类型*/
	/**
	 * 学历
	 */
	@Column(nullable = false)
	private String xueli;
	
	/**
	 * 学科或类别
	 */
	@Column(nullable = false)
	private String xueke;
	
	/**
	 * 层次或行业
	 */
	@Column(nullable = false)
	private String hangye;
   
	/**
	 * 状态
	 */
	@Column(nullable = false)
	private String proState;
	
	/**
	 * 	开发单位
	 */
	@Column(nullable = false)
	private String company;

	/**
	 * @return the id
	 */
	public long getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(long id) {
		this.id = id;
	}

	/**
	 * @return 名称
	 */
	public String getProName() {
		return proName;
	}

	/**
	 * @param 名称
	 */
	public void setProName(String proName) {
		this.proName = proName;
	}

	/**
	 * @return 编码
	 */
	public String getProCode() {
		return proCode;
	}

	/**
	 * @param 编码
	 */
	public void setProCode(String proCode) {
		this.proCode = proCode;
	}

	/**
	 * @return the 学历
	 */
	public String getXueli() {
		return xueli;
	}

	/**
	 * @param 学历
	 */
	public void setXueli(String xueli) {
		this.xueli = xueli;
	}

	/**
	 * @return 学科
	 */
	public String getXueke() {
		return xueke;
	}

	/**
	 * @param 学科
	 */
	public void setXueke(String xueke) {
		this.xueke = xueke;
	}

	/**
	 * @return 行业
	 */
	public String getHangye() {
		return hangye;
	}

	/**
	 * @param 行业
	 */
	public void setHangye(String hangye) {
		this.hangye = hangye;
	}

	/**
	 * @return 状态
	 */
	public String getProState() {
		return proState;
	}

	/**
	 * @param 状态
	 */
	public void setProState(String proState) {
		this.proState = proState;
	}

	/**
	 * @return 开发单位
	 */
	public String getCompany() {
		return company;
	}

	/**
	 * @param 开发单位
	 */
	public void setCompany(String company) {
		this.company = company;
	}
	
	
}
