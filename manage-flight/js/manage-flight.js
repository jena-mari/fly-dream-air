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

// Function to get flight data from localStorage
function getFlightData(flightId) {
  const flights = JSON.parse(localStorage.getItem('userFlights')) || testFlights;
  const allFlights = [...flights.upcoming, ...flights.past];
  return allFlights.find(flight => flight.id === flightId);
}

// Function to update flight details in the UI
function updateFlightDetails(flight) {
  if (!flight) {
    alert('Flight not found');
    window.location.href = '/user-flight-info';
    return;
  }

  // Update flight header
  document.querySelector('.flight-number').textContent = `Flight #${flight.id}`;
  document.querySelector('.flight-route').textContent = flight.route;
  document.querySelector('.flight-status').textContent = flight.status;
  document.querySelector('.flight-status').className =
    `flight-status status-badge status-${flight.status.toLowerCase()}`;

  // Update departure details
  document.querySelector('.departure-time').textContent = flight.departure.time;
  document.querySelector('.departure-airport').textContent = flight.departure.airport;
  document.querySelector('.departure-terminal').textContent = flight.departure.terminal;

  // Update flight duration
  document.querySelector('.flight-duration').textContent = flight.duration;
  document.querySelector('.flight-type').textContent = flight.type;

  // Update arrival details
  document.querySelector('.arrival-time').textContent = flight.arrival.time;
  document.querySelector('.arrival-airport').textContent = flight.arrival.airport;
  document.querySelector('.arrival-terminal').textContent = flight.arrival.terminal;

  // Update passenger information
  document.querySelector('.passenger-name').textContent = flight.passenger.name;
  document.querySelector('.passenger-seat').textContent = `Seat: ${flight.passenger.seat}`;

  // Update flight details
  document.querySelector('.aircraft-info').textContent =
    `Aircraft: ${flight.flightDetails.aircraft}`;
  document.querySelector('.flight-class').textContent =
    `Flight Class: ${flight.flightDetails.class}`;

  // Update booking information
  document.querySelector('.booking-date').textContent = `Booking Date: ${flight.booking.date}`;
  document.querySelector('.booking-id').textContent = `Booking ID: ${flight.booking.id}`;
  document.querySelector('.flight-number-info').textContent =
    `Flight Number: ${flight.booking.flightNumber}`;
  document.querySelector('.booking-price').textContent = `Price: ${flight.booking.price}`;

  // Pre-fill booking reference in the form
  document.querySelector('.booking-reference-input').value = flight.booking.id;
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function () {
  // Get flight ID from localStorage
  const flightId = localStorage.getItem('selectedFlightId');
  console.log('Flight ID from localStorage:', flightId);

  if (!flightId) {
    console.error('No flight ID provided');
    window.location.href = '/user-flight-info';
    return;
  }

  // Get flight data
  const flight = getFlightData(flightId);

  if (!flight) {
    console.error('Flight not found:', flightId);
    window.location.href = '/user-flight-info';
    return;
  }

  // Update the UI with flight details
  updateFlightDetails(flight);

  // Handle concern buttons
  const concernBtns = document.querySelectorAll('.concern-btn');
  concernBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      concernBtns.forEach(b => b.classList.remove('concern-selected'));
      btn.classList.add('concern-selected');
    });
  });
});
