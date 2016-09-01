/**
 * 
 */
package goshen.education.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * @author cunli
 * 2016年8月4日 下午5:08:59
 * 课程信息
 */
@Entity
public class Course {
	@SuppressWarnings("unused")
	private static final long serialVersionUID = 1L;

	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	
	@Column(nullable = false)
	private String courseName;
	
	@Column(nullable = false)
	private String courseCode;
    
	@Column(nullable = false)
	private String courseState;

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
	public String getCourseName() {
		return courseName;
	}

	/**
	 * @param 名称
	 */
	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}

	/**
	 * @return 编码
	 */
	public String getCourseCode() {
		return courseCode;
	}

	/**
	 * @param 编码
	 */
	public void setCourseCode(String courseCode) {
		this.courseCode = courseCode;
	}

	/**
	 * @return 状态
	 */
	public String getCourseState() {
		return courseState;
	}

	/**
	 * @param 状态
	 */
	public void setCourseState(String courseState) {
		this.courseState = courseState;
	}
	
	
	
}
