package goshen.education.domain;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * @author cunli
 * 专业信息
 */
@Entity
public class Demo  implements Serializable{
	
	private static final long serialVersionUID = 1L;

	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	
	@Column(nullable = false)
	private String proName;
	
	@Column(nullable = false)
	private String proCode;

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

	
    
}
