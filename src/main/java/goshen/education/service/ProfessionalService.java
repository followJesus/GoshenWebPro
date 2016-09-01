package goshen.education.service;

import goshen.education.domain.Professional;
/**
 * @author cunli
 * 专业信息 业务接口
 */
public interface ProfessionalService {
	
	/**
     * @param professional 专业信心
     * @return 保存专业信息
     */
    boolean professionalSave(Professional professional);
    
    void deleteProfessional(long id);
    
    boolean updateProfessional(goshen.education.domain.web.Professional professional);
    
    /**
     * @return 生成专业编码
     */
    String randomProcode();
}
