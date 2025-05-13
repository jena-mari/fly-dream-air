document.addEventListener('DOMContentLoaded', () => {
    const flightInfoDiv = document.getElementById('flight-info');

    // Load flight information from localStorage
    const bookingData = JSON.parse(localStorage.getItem('bookingData')) || {};
    const { from, to, departure, return: returnDate, passengers } = bookingData;

    if (from && to && departure && returnDate && passengers) {
        flightInfoDiv.innerHTML = `
            <div><span>From:</span> ${from}</div>
            <div><span>To:</span> ${to}</div>
            <div><span>Departure:</span> ${departure}</div>
            <div><span>Return:</span> ${returnDate}</div>
            <div><span>Passengers:</span> ${passengers.adults} Adults, ${passengers.children} Children, ${passengers.infants} Infants</div>
        `;
    } else {
        flightInfoDiv.textContent = 'Flight details are not available.';
    }
});