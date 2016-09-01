package goshen.education.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * @author cunli
 * 教学计划
 */
@Entity
public class TeachingPlan {
	
	@SuppressWarnings("unused")
	private static final long serialVersionUID = 1L;

	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	
	/**
	 * 学历类型
	 */
	@Column(nullable = false)
	private String tpType;
	
	/**
	 * 专业
	 */
	@Column(nullable = false)
	private String tyProfessional;
	
	@Column(nullable = false)
	private String tyTemplate;
	
	@Column(nullable = false)
	private String tpCode;
	
	@Column(nullable = false)
	private String freeScore;
	
	@Column(nullable = true)
	private String memo;
	
	@Column(nullable = false)
	private String finishScore;

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
	 * @return 学历类型
	 */
	public String getTpType() {
		return tpType;
	}

	/**
	 * @param 学历类型
	 */
	public void setTpType(String tpType) {
		this.tpType = tpType;
	}

	/**
	 * @return 专业
	 */
	public String getTyProfessional() {
		return tyProfessional;
	}

	/**
	 * @param 专业
	 */
	public void setTyProfessional(String tyProfessional) {
		this.tyProfessional = tyProfessional;
	}

	/**
	 * @return 模板
	 */
	public String getTyTemplate() {
		return tyTemplate;
	}

	/**
	 * @param 模板
	 */
	public void setTyTemplate(String tyTemplate) {
		this.tyTemplate = tyTemplate;
	}

	/**
	 * @return 教学计划编码
	 */
	public String getTpCode() {
		return tpCode;
	}

	/**
	 * @param 教学计划编码
	 */
	public void setTpCode(String tpCode) {
		this.tpCode = tpCode;
	}

	/**
	 * @return 免考分数
	 */
	public String getFreeScore() {
		return freeScore;
	}

	/**
	 * @param 免考分数
	 */
	public void setFreeScore(String freeScore) {
		this.freeScore = freeScore;
	}

	/**
	 * @return 备注
	 */
	public String getMemo() {
		return memo;
	}

	/**
	 * @param 备注
	 */
	public void setMemo(String memo) {
		this.memo = memo;
	}

	/**
	 * @return 毕业分数
	 */
	public String getFinishScore() {
		return finishScore;
	}

	/**
	 * @param 毕业分数
	 */
	public void setFinishScore(String finishScore) {
		this.finishScore = finishScore;
	}
    
	
	
	
    
}
