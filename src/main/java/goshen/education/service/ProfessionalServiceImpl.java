package goshen.education.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import goshen.education.domain.Professional;
import goshen.education.repository.ProfessionalRepository;
/**
 * @author cunli
 * 2016年8月9日 下午10:11:01
 * 专业信息 业务逻辑的实现
 */
@Transactional
@Service
public class ProfessionalServiceImpl implements ProfessionalService{

	@Autowired
	private ProfessionalRepository professionalRepository;

	@Override
	public boolean professionalSave(Professional professional) {
		professional = professionalRepository.save(professional);
		boolean saved = false;
		if (professional != null) {
			saved = true;
		}
		return saved;
	}

	@Override
	public void deleteProfessional(long id) {
		professionalRepository.delete(id);
	}

	@Override
	public boolean updateProfessional(goshen.education.domain.web.Professional professional) {
		Professional professionalDomain = new Professional();
		if (professional != null) {
			professionalDomain.setId(professional.getId());
			professionalDomain.setCompany(professional.getCompany());
			professionalDomain.setProName(professional.getProName());
		}
		
		return professionalSave(professionalDomain);
	}

	/* (non-Javadoc) 生成专业编码
	 * @see goshen.education.service.ProfessionalService#randomProcode()
	 */
	@Override
	public String randomProcode() {

		String procode = "zhuanye"+ System.currentTimeMillis();//生成一个临时专业
		
		return procode;
	}
	
	

}
