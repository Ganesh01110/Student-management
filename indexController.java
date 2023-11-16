package com.saleniumexpress.demo.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class indexController {

	
	@RequestMapping("/ganesh")
	public  ModelAndView myIndex() {
		
		return new ModelAndView("index");
		
	}
}
