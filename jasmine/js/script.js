function pow (a, x)
	{
		x = Math.round(x); 
		
		if (x == 0) {
			if (a == 0) {
				//alert('Ноль в нулевой степени не имеет смысла');
				return 'ERROR1';
			}
			return 1;
			}
			
			
		if (x > 0) {
			var result=1;
			for (var i=1; i<=x; i++) result=result*a;
			return result;
			}
		
		if (x < 0) {
			if (a == 0) {
				//alert('Ноль нельзя возвести в отрицательную степень');
				return 'ERROR2';
			}
			var result=1;
			for (var i=1; i<=(-x); i++) result=result/a;
			return result;
			}
			
			
	};
		


	try{
	    module.exports.pow = pow;
		}
	catch(e){};
