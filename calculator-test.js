it('should calculate the monthly rate correctly', function() {
	expect(calculateMonthlyPayment({ amount: 10000, years: 5, rate: 30 })).toEqual('323.53');
});

it('should return a result with 2 decimal places', function() {
	let testValues = {
		amount: 15000,
		years: 5,
		rate: 5
	};

	expect(calculateMonthlyPayment(testValues).split('.')[1].length).toEqual(2);
});

/// etc
