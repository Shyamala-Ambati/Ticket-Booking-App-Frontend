document.getElementById('searchForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const travelType = document.getElementById('travelType').value;
  const from = document.getElementById('from').value.trim();
  const to = document.getElementById('to').value.trim();
  const date = document.getElementById('date').value;

  if (!travelType || !from || !to || !date) {
    alert('Please fill all fields');
    return;
  }

  // For demo, just show a fake ticket list
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = (
    <p>
      Searching ${travelType} tickets from <b>${from}</b> to <b>${to}</b> on{' '}
      <b>${date}</b>...
    </p>
  );

  // Simulate found tickets
  setTimeout(() => {
    resultsDiv.innerHTML = `
      <ul>
        <li>
          ${travelType.toUpperCase()} Ticket 1 - Departure: 10:00 AM - Price: ₹500
          <button onclick="bookNow('${travelType}', '${from}', '${to}', '${date}', '10:00 AM', '500')">Book Now</button>
        </li>
        <li>
          ${travelType.toUpperCase()} Ticket 2 - Departure: 02:00 PM - Price: ₹650
          <button onclick="bookNow('${travelType}', '${from}', '${to}', '${date}', '02:00 PM', '650')">Book Now</button>
        </li>
        <li>
          ${travelType.toUpperCase()} Ticket 3 - Departure: 06:00 PM - Price: ₹700
          <button onclick="bookNow('${travelType}', '${from}', '${to}', '${date}', '06:00 PM', '700')">Book Now</button>
        </li>
      </ul>
    `;
  }, 1000);

  // Add this function outside your event listener:
  function bookNow(type, from, to, date, time, price) {
    // Save data to localStorage
    const ticket = { type, from, to, date, time, price };
    localStorage.setItem('selectedTicket', JSON.stringify(ticket));
    // Redirect to booking page
    window.location.href = 'booking.html';
  }
});
