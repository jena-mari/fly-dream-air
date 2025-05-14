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

        // First remove any conflicting background classes
        checkedBaggageDiv.classList.remove('bg-red-100', 'bg-gray-300');

        // Add correct one
        if (totalBaggageCount === totalTickets) {
            checkedBaggageDiv.classList.add('bg-gray-300');
        } else {
            checkedBaggageDiv.classList.add('bg-red-100');
        }
    }

    // Initial validation
    validateBaggageCount();

    const viewMenuButton = document.querySelector('.bg-white.text-gray-700.text-lg.font-semibold.px-6.py-2');
    const body = document.body;

    // Create the menu overlay div
    const menuOverlay = document.createElement('div');
    menuOverlay.style.position = 'fixed';
    menuOverlay.style.top = '0';
    menuOverlay.style.left = '0';
    menuOverlay.style.width = '100%';
    menuOverlay.style.height = '100%';
    menuOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    menuOverlay.style.display = 'none';
    menuOverlay.style.justifyContent = 'center';
    menuOverlay.style.alignItems = 'center';
    menuOverlay.style.zIndex = '1000';

    // Create the menu content div
    const menuContent = document.createElement('div');
    menuContent.style.backgroundColor = 'white';
    menuContent.style.padding = '20px';
    menuContent.style.borderRadius = '8px';
    menuContent.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    menuContent.style.textAlign = 'center';
    menuContent.style.position = 'relative';

    // Adjust the menu content size
    menuContent.style.width = '50%';
    menuContent.style.height = '50%';
    menuContent.style.overflowY = 'auto';

    // Add header to menu content
    const menuHeader = document.createElement('h2');
    menuHeader.textContent = 'Menu';
    menuHeader.style.fontSize = '1.5rem';
    menuHeader.style.marginBottom = '20px';
    menuContent.appendChild(menuHeader);

    // Add close button to menu content
    const closeButton = document.createElement('button');
    closeButton.textContent = 'x';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px';
    closeButton.style.right = '10px';
    closeButton.style.backgroundColor = 'lightgray';
    closeButton.style.border = 'none';
    closeButton.style.borderRadius = '50%';
    closeButton.style.width = '30px';
    closeButton.style.height = '30px';
    closeButton.style.cursor = 'pointer';
    closeButton.addEventListener('click', () => {
        menuOverlay.style.display = 'none';
    });
    menuContent.appendChild(closeButton);

    // Create three light gray boxes for menu items
    const menuItemsContainer = document.createElement('div');
    menuItemsContainer.style.display = 'flex';
    menuItemsContainer.style.justifyContent = 'space-around';
    menuItemsContainer.style.marginTop = '20px';

    for (let i = 0; i < 3; i++) {
        const menuItem = document.createElement('div');
        menuItem.style.backgroundColor = 'lightgray';
        menuItem.style.width = '30%';
        menuItem.style.height = '60%';
        menuItem.style.borderRadius = '8px';
        menuItem.style.display = 'flex';
        menuItem.style.flexDirection = 'column';
        menuItem.style.alignItems = 'center';
        menuItem.style.justifyContent = 'center';
        menuItem.style.padding = '10px';

        // Add image placeholder
        const imagePlaceholder = document.createElement('div');
        imagePlaceholder.style.width = '100%';
        imagePlaceholder.style.height = '70%';
        imagePlaceholder.style.backgroundColor = 'white';
        imagePlaceholder.style.borderRadius = '8px';
        imagePlaceholder.style.marginBottom = '10px';
        menuItem.appendChild(imagePlaceholder);

        // Add meal name placeholder
        const mealName = document.createElement('p');
        mealName.textContent = `Meal ${i + 1}`;
        mealName.style.fontSize = '1rem';
        mealName.style.fontWeight = 'bold';
        menuItem.appendChild(mealName);

        menuItemsContainer.appendChild(menuItem);
    }

    menuContent.appendChild(menuItemsContainer);

    menuOverlay.appendChild(menuContent);
    body.appendChild(menuOverlay);

    // Show menu overlay on button click
    viewMenuButton.addEventListener('click', () => {
        menuOverlay.style.display = 'flex';
    });

    // Add event listeners to meal amount buttons
    const mealButtons = document.querySelectorAll('.meal-btn');

    mealButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove outline from all buttons
            mealButtons.forEach(btn => {
                btn.style.outline = 'none';
                btn.style.outlineOffset = '0';
            });

            // Add outline to the selected button
            button.style.outline = '2px solid #6AABDD';
            button.style.outlineOffset = '-2px';
        });
    });

    // Set default selected button
    if (mealButtons.length > 0) {
        mealButtons[0].style.outline = '2px solid #6AABDD';
        mealButtons[0].style.outlineOffset = '-2px';
    }
});