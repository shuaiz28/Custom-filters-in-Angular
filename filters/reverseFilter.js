app.filter('myReverse', function() {
	return function(input) {
    	var result = '';
        input = input || '';
        for (var i=input.length-1; i>=0; i--) {
        	result += input.charAt(i);
        }
        return result;
    };
})