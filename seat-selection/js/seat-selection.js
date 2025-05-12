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

        // Add a new line in the ticket info div for selected seats
        const selectedSeatsInfo = document.createElement('div');
        selectedSeatsInfo.id = 'selected-seats-info';
        selectedSeatsInfo.textContent = 'Number of selected seats: Please save some seats.';
        ticketDetailsElement.appendChild(selectedSeatsInfo);

        const nextPageButton = document.getElementById('next-page-btn');
        nextPageButton.style.pointerEvents = 'none'; // Disable the button initially
        nextPageButton.style.opacity = '0.5'; // Grey out the button initially

        saveSeatsButton.addEventListener('click', () => {
            const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats')) || [];
            const selectedSeatsCount = selectedSeats.length;

            selectedSeatsInfo.textContent = `Number of selected seats: ${selectedSeatsCount}`;

            if (selectedSeatsCount === totalDesiredTickets) {
                nextPageButton.style.pointerEvents = 'auto'; // Enable the button
                nextPageButton.style.opacity = '1'; // Ungrey the button
            } else {
                nextPageButton.style.pointerEvents = 'none'; // Disable the button
                nextPageButton.style.opacity = '0.5'; // Grey out the button
            }
        });
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