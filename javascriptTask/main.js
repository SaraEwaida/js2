document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('conversionForm').addEventListener('submit', function(e) {
        e.preventDefault();  
        
        const rates = {
            dollar: 3.4,
            dinar: 5.50,
            nis: 1      
        };

        const amountElement = document.getElementById('amount');
        const currencyElement = document.getElementById('exchange');
        const resultElement = document.getElementById('result');

        const amount = parseFloat(amountElement.value) || 0;
        if (amount < 0) {
            resultElement.innerText = "Please enter a non-negative amount.";
            return;
        }

        const currency = currencyElement.value;
        const rate = rates[currency];
        if (!rate) {
            resultElement.innerText = `Conversion rate for ${currency} not found.`;
            return;
        }

        const result = amount / rate;

        resultElement.innerText = `Converted amount: ${result.toFixed(2)} ${currency}`;
    });
});
