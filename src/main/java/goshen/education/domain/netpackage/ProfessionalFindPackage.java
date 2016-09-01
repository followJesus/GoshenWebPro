package goshen.education.domain.netpackage;

/**
 * 查询专业数据包
 * @author yu
 *
 */
public class ProfessionalFindPackage{
	
	private String scoolName="";//学校名称
	private String professionalName="";//专业名称
	private String educationPlan="";//教学计划
	private String studentId="";//学号
	private String score="";//平时成绩
	
	
	public String getScoolName() {
		return scoolName;
	}
	public void setScoolName(String scoolName) {
		this.scoolName = scoolName;
	}
	public String getProfessionalName() {
		return professionalName;
	}
	public void setProfessionalName(String professionalName) {
		this.professionalName = professionalName;
	}
	public String getEducationPlan() {
		return educationPlan;
	}
	public void setEducationPlan(String educationPlan) {
		this.educationPlan = educationPlan;
	}
	public String getStudentId() {
		return studentId;
	}
	public void setStudentId(String studentId) {
		this.studentId = studentId;
	}
	public String getScore() {
		return score;
	}
	public void setScore(String score) {
		this.score = score;
	}


}
