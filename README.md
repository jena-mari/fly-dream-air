# FlyDreamAir: Flight Booking and Management System

**University of Wollongong - CSIT214**

**Project Delivery Date:** May 30, 2025

## Project Summary

This repository contains the IT Software System developed for FlyDreamAir, a major airline system. The system is designed to manage customer interactions, allowing users to book flights, manage reservations, select seats, and purchase ancillary in-flight services like food and beverages.

This system aims to enhance FlyDreamAir's operational efficiency and customer experience by providing a centralized online portal for all flight-related activities. It supports the airline's goals for both short-term profitability through improved efficiency and customer retention, and long-term strategic growth as a data-driven organization.

## Key Functionalities

The system implements the following core features:

- **Flight History:** Record and retrieve customers' flight history.
- **Flight Search:** Search for available flights based on user-specified criteria (destination, time).
- **Flight Booking:** Securely book flights, process payments, generate e-tickets, and update booking status.
- **Booking Management:** Allow users to manage their bookings, including rescheduling and requesting refunds.
- **Seat Selection:** View seat availability and reserve specific seats.
- **Ancillary Services:** Purchase additional services such as food and beverages, checked baggage, and in-flight entertainment.

## Project Structure

The application is organized into separate modules:

- `book-flight/` - Flight booking interface
- `manage-flight/` - Tools for managing existing bookings
- `seat-selection/` - Seat selection interface
- `add-on-purchase/` - Interface for purchasing additional services
- `passenger-payment/` - Payment processing interface
- `user-flight-info/` - User flight history and information

Each module contains its own HTML, CSS, and JavaScript files for modular development.

## Non-Functional Requirements Highlights

- **Performance:** Designed to handle high traffic volumes without significant lag.
- **Reliability:** Aims for high uptime.
- **Security:** Plans include HTTPS for data encryption and multi-factor authentication to protect user data.
- **User Experience:** Focuses on a user-friendly and intuitive interface design.

## Technology Stack

- **Frontend:**
  - HTML5, CSS3, and JavaScript (ES6+)
  - [Tailwind CSS](https://tailwindcss.com/) for responsive styling
  - UI/UX designed using Figma
- **Backend:** Since this is just a prototype, the backend logic is implemented with JavaScript
- **Data Storage:** Browser's LocalStorage for prototype data persistence
- **Security:** Implementation of HTTPS and Multi-Factor Authentication is planned
- **Development Tools:**
  - npm for package management
  - Prettier for code formatting

## Project Status & Deliverables

- **Current Status:** Project completion planned for May 30, 2025.
- **Key Deliverables:**
  - High-fidelity prototype.
  - Working website/web application implementing key functionalities.
  - Comprehensive project documentation (Business Case, Charter, Scope, WBS, Risk Management, etc.).

## Future Enhancements

Potential future developments include:

- Integration with third-party APIs to fetch real flight data.
- Addition of more ancillary services (e.g., seat upgrades, priority boarding).
- Full implementation of the high-fidelity UI design.
- Full implementation with an actual backend framework and database like MySQL.
- Creation of native mobile application.

## Team & Contributors

- **Project Sponsor:** Christopher Tolevski
- **Project Manager:** Seth Gillies
- **Documentation Manager:** Jenamari Bathan
- **Project Planner:** Gia Han Pham
- **System Analyst:** Elijah Jose Arcedera
- **Business Analyst:** Lee Guan Yi

## Installation & Setup

### Prerequisites

- Node.js (v14.0.0 or higher recommended)
- Git
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Setup Instructions

```bash
# Clone the repository
git clone https://github.com/your-username/fly-dream-air.git
cd fly-dream-air

# Install dependencies
npm install

# Format code using Prettier (optional)
npm run format
```

### Running the Application

The application is primarily HTML, CSS, and JavaScript based. To view it:

1. Open `index.html` in your web browser

   ```bash
   # macOS
   open index.html

   # Windows
   start index.html

   # Linux
   xdg-open index.html
   ```

2. Alternatively, you can use a local development server:

   ```bash
   # Using Python (if installed)
   # Python 3
   python -m http.server

   # Python 2
   python -m SimpleHTTPServer

   # Or using Node.js with a simple http-server
   npx http-server
   ```

   Then open `http://localhost:8000` in your browser.

### Development

- All flight data is currently stored in browser's LocalStorage
- Edit HTML/CSS/JavaScript files directly to modify functionality
- Run `npm run format` to format code according to project standards

### Module Navigation

1. **Main Page**: index.html - Flight search and homepage
2. **Book Flight**: book-flight/index.html - Flight booking process
3. **Manage Flight**: manage-flight/index.html - Flight management options
4. **Seat Selection**: seat-selection/index.html - Seat selection interface
5. **Add-ons**: add-on-purchase/index.html - Purchase additional services
6. **Payment**: passenger-payment/index.html - Payment processing
7. **Flight Info**: user-flight-info/index.html - User flight information

## Browser Compatibility

This application is optimized for:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 University of Wollongong - CSIT214 Project Team. All rights reserved.
