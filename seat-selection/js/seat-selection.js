document.addEventListener('DOMContentLoaded', () => {
    const flightDetailsElement = document.getElementById('flight-details');
    const seatMapDiv = document.getElementById('seat-map');
    const saveSeatsButton = document.getElementById('save-seats');

    // Load flight information from localStorage
    const bookingData = JSON.parse(localStorage.getItem('bookingData')) || {};
    const { from, to, departure, return: returnDate, passengers } = bookingData;

    if (from && to && departure && returnDate && passengers) {
        flightDetailsElement.textContent = `From: ${from}, To: ${to}, Departure: ${departure}, Return: ${returnDate}, Passengers: ${passengers.adults} Adults, ${passengers.children} Children, ${passengers.infants} Infants`;
    } else {
        flightDetailsElement.textContent = 'Flight details are not available.';
    }

    // Generate seat map
    const rows = 6;
    const cols = 6;
    const selectedSeats = new Set(JSON.parse(localStorage.getItem('selectedSeats')) || []);

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const seatId = `${row}-${col}`;
            const seatDiv = document.createElement('div');
            seatDiv.classList.add('seat', 'bg-green-500', 'text-white', 'flex', 'items-center', 'justify-center', 'cursor-pointer');
            if (selectedSeats.has(seatId)) {
                seatDiv.classList.add('bg-yellow-500');
            }
            seatDiv.textContent = seatId;
            seatDiv.addEventListener('click', () => {
                if (seatDiv.classList.contains('bg-yellow-500')) {
                    seatDiv.classList.remove('bg-yellow-500');
                    seatDiv.classList.add('bg-green-500');
                    selectedSeats.delete(seatId);
                } else {
                    seatDiv.classList.remove('bg-green-500');
                    seatDiv.classList.add('bg-yellow-500');
                    selectedSeats.add(seatId);
                }
            });
            seatMapDiv.appendChild(seatDiv);
        }
    }

    // Save selected seats to localStorage
    saveSeatsButton.addEventListener('click', () => {
        localStorage.setItem('selectedSeats', JSON.stringify([...selectedSeats]));
        alert('Selected seats saved!');
    });
});