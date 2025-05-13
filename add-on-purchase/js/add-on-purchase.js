document.addEventListener('DOMContentLoaded', () => {
    const flightInfoDiv = document.getElementById('flight-info');

    // Load flight information from localStorage
    const bookingData = JSON.parse(localStorage.getItem('bookingData')) || {};
    const { from, to, departure, return: returnDate, passengers } = bookingData;

    if (from && to && departure && returnDate) {
        document.getElementById('from-location').textContent = from;
        document.getElementById('departure-date').textContent = departure;
        document.getElementById('to-location').textContent = to;
        document.getElementById('return-date').textContent = returnDate;
    } else {
        flightInfoDiv.textContent = 'Flight details are not available.';
    }
});