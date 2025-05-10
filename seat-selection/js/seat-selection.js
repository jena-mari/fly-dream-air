document.addEventListener('DOMContentLoaded', () => {
    const flightDetailsElement = document.getElementById('flight-details');
    const seatMapDiv = document.getElementById('seat-map');
    const saveSeatsButton = document.getElementById('save-seats');
    const ticketDetailsElement = document.getElementById('ticket-details');

    // Load flight information from localStorage
    const bookingData = JSON.parse(localStorage.getItem('bookingData')) || {};
    const { from, to, departure, return: returnDate, passengers } = bookingData;

    // Calculate total desired tickets from passengers object
    if (passengers && typeof passengers === 'object') {
        const { adults = 0, children = 0, infants = 0 } = passengers;
        const totalDesiredTickets = adults + children + infants;
    
        //update the ticket details element with the total desired tickets
        ticketDetailsElement.innerHTML = `
            <div><strong>Total Desired Tickets:</strong> ${totalDesiredTickets}</div>
        `;
    } else {
        ticketDetailsElement.textContent = 'Passenger information is missing.';
    }


    if (from && to && departure && returnDate && passengers) {
        // Structure the flight details with keys bolded and each item on a new line
        flightDetailsElement.innerHTML = `
            <div><strong>From:</strong> ${from}</div>
            <div><strong>To:</strong> ${to}</div>
            <div><strong>Departure:</strong> ${departure}</div>
            <div><strong>Return:</strong> ${returnDate}</div>
            <div><strong>Passengers:</strong> ${passengers.adults} Adults, ${passengers.children} Children, ${passengers.infants} Infants</div>
        `;    
    } else {
        flightDetailsElement.textContent = 'Flight details are not available.';
    }

    // Save selected seats to localStorage
    saveSeatsButton.addEventListener('click', () => {
        localStorage.setItem('selectedSeats', JSON.stringify([...selectedSeats]));
        alert('Selected seats saved!');
    });
});