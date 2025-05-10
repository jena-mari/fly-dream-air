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

// TODO: Fetch upcoming and past flights from localStorage
