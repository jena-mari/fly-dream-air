document.addEventListener('DOMContentLoaded', () => {
    const ticketCountDiv = document.getElementById('ticket-count');
    const checkedBaggageDiv = document.querySelector('.bg-gray-300'); // Checked-baggage div

    // Get booking info from localStorage
    const bookingInfo = JSON.parse(localStorage.getItem('bookingInfo')) || {};
    const { departure, arrival, departureDate, arrivalDate, adults, children } = bookingInfo;

    if (departure && arrival && departureDate && arrivalDate) {
        document.getElementById('from-location').textContent = departure;
        document.getElementById('departure-date').textContent = departureDate;
        document.getElementById('to-location').textContent = arrival;
        document.getElementById('return-date').textContent = arrivalDate;
    }

    const totalTickets = (+adults || 0) + (+children || 0);
    ticketCountDiv.textContent = `${totalTickets} tickets`;

    // Initialize counts for all weights
    const baggageCounts = {
        '7kg': totalTickets,
        '10kg': 0,
        '20kg': 0
    };

    // Initialize counter displays
    document.querySelectorAll('.baggage-counter').forEach(counter => {
        const weight = counter.dataset.weight;
        counter.textContent = baggageCounts[weight];
    });

    // Add event listeners to all minus buttons
    document.querySelectorAll('.baggage-minus').forEach(button => {
        button.addEventListener('click', () => {
            const weight = button.dataset.weight;
            if (baggageCounts[weight] > 0) {
                baggageCounts[weight]--;
                updateCounter(weight);
                validateBaggageCount();
            }
        });
    });

    // Add event listeners to all plus buttons
    document.querySelectorAll('.baggage-plus').forEach(button => {
        button.addEventListener('click', () => {
            const weight = button.dataset.weight;
            baggageCounts[weight]++;
            updateCounter(weight);
            validateBaggageCount();
        });
    });

    function updateCounter(weight) {
        const counter = document.querySelector(`.baggage-counter[data-weight="${weight}"]`);
        if (counter) {
            counter.textContent = baggageCounts[weight];
        }
    }

    function validateBaggageCount() {
        const totalBaggageCount = Object.values(baggageCounts).reduce((sum, count) => sum + count, 0);
        if (totalBaggageCount === totalTickets) {
            checkedBaggageDiv.classList.remove('bg-red-100');
            checkedBaggageDiv.classList.add('bg-gray-300');
        } else {
            checkedBaggageDiv.classList.remove('bg-gray-300');
            checkedBaggageDiv.classList.add('bg-red-100');
        }
    }

    // Initial validation
    validateBaggageCount();
});