package com.testrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		junit="--step-notifications",
		plugin = {"pretty","json:target/cucumber.json", //create a HTML and JSON report in target folder
				  "html:target"},
		features ="src\\test\\resources\\Features", //path of the feature file
		glue= {"com.step_definitions"},	//package name of step definition file
		tags= {"@Wall_Stickers"}
		
	
		)

public class AsianPaintsTestRunner {

}
