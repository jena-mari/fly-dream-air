document.addEventListener('DOMContentLoaded', () => {
    const flightInfoDiv = document.getElementById('flight-info');
    const ticketCountDiv = document.getElementById('ticket-count'); // Get the ticket count element

    // Load flight information from localStorage
    const bookingInfo = JSON.parse(localStorage.getItem('bookingInfo')) || {};
    const { departure, arrival, departureDate, arrivalDate, adults, children } = bookingInfo;

    if (departure && arrival && departureDate && arrivalDate) {
        document.getElementById('from-location').textContent = departure;
        document.getElementById('departure-date').textContent = departureDate;
        document.getElementById('to-location').textContent = arrival;
        document.getElementById('return-date').textContent = arrivalDate;
    } else {
        flightInfoDiv.textContent = 'Flight details are not available.';
    }

    // Calculate total tickets and update the ticket count
    const totalTickets = (+adults || 0) + (+children || 0);
    ticketCountDiv.textContent = `${totalTickets} tickets`;
});