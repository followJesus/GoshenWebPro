package goshen.education.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import goshen.education.domain.Professional;
import goshen.education.domain.netpackage.NetPackage;
import goshen.education.domain.netpackage.ProfessionalFindPackage;
import goshen.education.service.ProfessionalService;
import goshen.education.utils.Tools;

/**
 * @author cunli
 * 2016年8月9日 下午11:14:33
 * 专业信息
 */
@Controller
public class ProfessionalController {

	@Autowired
	private ProfessionalService professionalService;

	/**
	 * 新建专业
	 * 
	 * @param professional
	 *            专业
	 * @return 新建专业 成功 或 失败
	 */
	@RequestMapping("/saveProfessional")
	public String saveProfessional(Professional professional) {

		boolean bl = professionalService.professionalSave(professional);

		System.out.println("------bl------ " + bl);

		return "layout/success";
	}
	
	/**
	 * @return 网站首页
	 */
	@RequestMapping("/")
	public String index(Model model) {
		
		//自动生成专业编码
		model.addAttribute("procode", professionalService.randomProcode());

		return "professional";

	}

	@RequestMapping("/updateProfessional")
	public String updateProfessional() {

		// System.out.println("-----getProName-------
		// "+professional.getProName());
		// goshen.education.domain.web.Professional professional
		// System.out.println("-------getProCode-----
		// "+professional.getProCode());
		// System.out.println("------getXueli------ "+professional.getXueli());
		// System.out.println("------getProState------
		// "+professional.getProState());
		// System.out.println("-----getCompany-------
		// "+professional.getCompany());

		goshen.education.domain.web.Professional professional = new goshen.education.domain.web.Professional();
		professional.setId(2);
		professional.setCompany("哈利路亚");
		professional.setProName("感谢主");

		boolean bl = professionalService.updateProfessional(professional);

		System.out.println("------bl------ " + bl);

		return "ok";
	}

	@RequestMapping("/del-{id}-pf")
	public String delProfessional(@PathVariable Long id) {

		System.out.println("-----delProfessional------- " + id);

		professionalService.deleteProfessional(id);

		return "ok";

	}

	@RequestMapping("/professional/find")
	public String findProfessional(NetPackage npackage) {
		String json = npackage.getJson();
		ProfessionalFindPackage pa = Tools.fromJson(json, ProfessionalFindPackage.class);

		System.out.println("-----------" + pa.getScoolName());

		return "{findProfessional}";
	}

	

	@RequestMapping("/ok")
	public String greeting(@RequestParam(value = "name", required = false, defaultValue = "World") String name,
			Model model) {
		System.out.println("\n\n\n");
		System.out.print("-----------889-------" + name);
		System.out.println("\n\n\n");
		model.addAttribute("name", name);
		return "ok";
	}

	// @RequestMapping("/greeting")
	// public String greeting(@RequestParam(value = "name", required = false,
	// defaultValue = "World") String name,
	// Model model) {
	// System.out.print("------------------" + name);
	// model.addAttribute("name", name);
	// return "greeting";
	// }

}
