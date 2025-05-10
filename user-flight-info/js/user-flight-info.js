// Test data for flights
const testFlights = {
  upcoming: [
    {
      id: 'FD1234',
      route: 'Sydney (SYD) → Melbourne (MEL)',
      status: 'Confirmed',
      departure: {
        time: '10:30 AM',
        airport: 'Sydney (SYD)',
        terminal: 'Terminal 1',
      },
      arrival: {
        time: '12:00 PM',
        airport: 'Melbourne (MEL)',
        terminal: 'Terminal 2',
      },
      duration: '1h 30m',
      type: 'Direct Flight',
      passenger: {
        name: 'John Doe',
        seat: '12A',
      },
      flightDetails: {
        aircraft: 'Boeing 737-800',
        class: 'Economy',
      },
      booking: {
        date: '15 Mar 2024',
        id: 'BK123456',
        flightNumber: 'FD1234',
        price: '$299.00',
      },
    },
    {
      id: 'FD5678',
      route: 'Melbourne (MEL) → Brisbane (BNE)',
      status: 'Confirmed',
      departure: {
        time: '08:15 AM',
        airport: 'Melbourne (MEL)',
        terminal: 'Terminal 3',
      },
      arrival: {
        time: '10:45 AM',
        airport: 'Brisbane (BNE)',
        terminal: 'Terminal 1',
      },
      duration: '2h 30m',
      type: 'Direct Flight',
      passenger: {
        name: 'John Doe',
        seat: '15B',
      },
      flightDetails: {
        aircraft: 'Airbus A320',
        class: 'Business',
      },
      booking: {
        date: '20 Mar 2024',
        id: 'BK789012',
        flightNumber: 'FD5678',
        price: '$599.00',
      },
    },
  ],
  past: [
    {
      id: 'FD9012',
      route: 'Sydney (SYD) → Gold Coast (OOL)',
      status: 'Completed',
      departure: {
        time: '09:00 AM',
        airport: 'Sydney (SYD)',
        terminal: 'Terminal 2',
      },
      arrival: {
        time: '10:30 AM',
        airport: 'Gold Coast (OOL)',
        terminal: 'Terminal 1',
      },
      duration: '1h 30m',
      type: 'Direct Flight',
      passenger: {
        name: 'John Doe',
        seat: '8C',
      },
      flightDetails: {
        aircraft: 'Boeing 737-800',
        class: 'Economy',
      },
      booking: {
        date: '01 Mar 2024',
        id: 'BK345678',
        flightNumber: 'FD9012',
        price: '$249.00',
      },
    },
    {
      id: 'FD3456',
      route: 'Brisbane (BNE) → Sydney (SYD)',
      status: 'Completed',
      departure: {
        time: '02:45 PM',
        airport: 'Brisbane (BNE)',
        terminal: 'Terminal 2',
      },
      arrival: {
        time: '05:15 PM',
        airport: 'Sydney (SYD)',
        terminal: 'Terminal 1',
      },
      duration: '2h 30m',
      type: 'Direct Flight',
      passenger: {
        name: 'John Doe',
        seat: '22F',
      },
      flightDetails: {
        aircraft: 'Airbus A320',
        class: 'Premium Economy',
      },
      booking: {
        date: '25 Feb 2024',
        id: 'BK901234',
        flightNumber: 'FD3456',
        price: '$399.00',
      },
    },
  ],
};

// Function to get flights from localStorage or use test data
function getFlights() {
  const storedFlights = localStorage.getItem('userFlights');
  return storedFlights ? JSON.parse(storedFlights) : testFlights;
}

// Function to create flight card HTML
function createFlightCard(flight) {
  return `
        <div class="flight-card p-6 mb-6">
            <div class="flex justify-between items-center mb-6">
                <div>
                    <h2 class="text-xl font-semibold text-gray-800">Flight #${flight.id}</h2>
                    <p class="text-gray-600">${flight.route}</p>
                </div>
                <span class="status-badge status-${flight.status.toLowerCase()}">${flight.status}</span>
            </div>

            <div class="grid grid-cols-3 gap-8">
                <div class="text-center">
                    <p class="text-2xl font-bold text-gray-800">${flight.departure.time}</p>
                    <p class="text-gray-600">${flight.departure.airport}</p>
                    <p class="text-sm text-gray-500">${flight.departure.terminal}</p>
                </div>

                <div class="flight-info px-8 flex flex-col items-center justify-center">
                    <p class="text-gray-600">${flight.duration}</p>
                    <div class="w-full h-0.5 bg-gray-300 my-2"></div>
                    <p class="text-sm text-gray-500">${flight.type}</p>
                </div>

                <div class="text-center">
                    <p class="text-2xl font-bold text-gray-800">${flight.arrival.time}</p>
                    <p class="text-gray-600">${flight.arrival.airport}</p>
                    <p class="text-sm text-gray-500">${flight.arrival.terminal}</p>
                </div>
            </div>

            <div class="mt-8 grid grid-cols-3 gap-6">
                <div>
                    <h3 class="font-semibold text-gray-800 mb-2">Passenger Information</h3>
                    <p class="text-gray-600">${flight.passenger.name}</p>
                    <p class="text-gray-600">Seat: ${flight.passenger.seat}</p>
                </div>
                <div>
                    <h3 class="font-semibold text-gray-800 mb-2">Flight Details</h3>
                    <p class="text-gray-600">Aircraft: ${flight.flightDetails.aircraft}</p>
                    <p class="text-gray-600">Flight Class: ${flight.flightDetails.class}</p>
                </div>
                <div>
                    <h3 class="font-semibold text-gray-800 mb-2">Booking Information</h3>
                    <p class="text-gray-600">Booking Date: ${flight.booking.date}</p>
                    <p class="text-gray-600">Booking ID: ${flight.booking.id}</p>
                    <p class="text-gray-600">Flight Number: ${flight.booking.flightNumber}</p>
                    <p class="text-gray-600">Price: ${flight.booking.price}</p>
                </div>
            </div>

            <div class="mt-8 flex gap-4">
                <button onclick="localStorage.setItem('selectedFlightId', '${flight.id}'); window.location.href='/manage-flight'"
                    class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Manage Flight
                </button>
            </div>
        </div>
    `;
}

// Function to render flights
function renderFlights() {
  const flights = getFlights();

  // Render upcoming flights
  const upcomingContainer = document.querySelector('#upcoming .max-w-4xl');
  upcomingContainer.innerHTML = flights.upcoming.map(flight => createFlightCard(flight)).join('');

  // Render past flights
  const pastContainer = document.querySelector('#past .max-w-4xl');
  pastContainer.innerHTML = flights.past.map(flight => createFlightCard(flight)).join('');
}

// Function to switch tabs
function switchTab(tabId) {
  // Hide all tab contents
  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.remove('active');
  });

  // Remove active class from all tabs
  document.querySelectorAll('.tab-button').forEach(button => {
    button.classList.remove('tab-active');
    button.classList.add('text-gray-500');
  });

  // Show selected tab content
  document.getElementById(tabId).classList.add('active');

  // Add active class to selected tab
  event.target.classList.add('tab-active');
  event.target.classList.remove('text-gray-500');
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
  renderFlights();
});
