window.addEventListener('DOMContentLoaded', function() {
	const form = document.getElementById('calc-form');
	if (form) {
		setupIntialValues();
		form.addEventListener('submit', function(e) {
			e.preventDefault();
			update();
		});
	}
});

function getCurrentUIValues() {
	return {
		amount: +document.getElementById('loan-amount').value,
		years: +document.getElementById('loan-years').value,
		rate: +document.getElementById('loan-rate').value
	};
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
	document.getElementById('loan-amount').value = 10000;
	document.getElementById('loan-years').value = 5;
	document.getElementById('loan-rate').value = 30;
}

// Get the current values from the UI
// Update the monthly payment
function update() {
	updateMonthly(calculateMonthlyPayment(getCurrentUIValues()));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
	let p = values.amount;
	let i = values.rate / 100 / 12;
	let n = values.years * 12;
	let monthPay = p * i / (1 - Math.pow(1 + i, -n));
	let MonthPayString = monthPay.toFixed(2).toString();
	return MonthPayString;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
	let payDisplay = document.querySelector('#monthly-payment');
	payDisplay.innerText = monthly;
}
