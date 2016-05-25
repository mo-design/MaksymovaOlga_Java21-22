var app = require('../js/script.js');


describe("pow", function() {
	
	
	it("Positive power", function() {
		var result;
		result = app.pow(3, 4);
		expect(result).toBe(81);	
	});
  
  
	it("Zero power", function() {
		var result;
		result = app.pow(5, 0);
		expect(result).toBe(1);	
	});

  
	it("Negative power", function() {
		var result;
		result = app.pow(10, -3);
		expect(result).toBe(0.001);	
	});
 

	it("Zero to zero power", function() {
		var result;
		result = app.pow(0, 0);
		expect(result).toBe('ERROR1');	
	});
  

  	it("Zero to negative power", function() {
		var result;
		result = app.pow(0, -4);
		expect(result).toBe('ERROR2');	
	});
  
  
});



	
