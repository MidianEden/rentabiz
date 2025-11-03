// --- Smooth Scroll for Anchor Links ---
// This will work with the "How It Works" and "Opportunities" nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    // Check if the href is just "#" (like the logo)
    if (this.getAttribute('href') === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Check if the target element exists
    const targetElement = document.querySelector(this.getAttribute('href'));
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});


// --- Live Search Filter for Investment Listings ---
// Updated to search the new card content
document.getElementById('search-bar').addEventListener('keyup', function() {
  // Get the search term and convert to lower case
  let searchTerm = this.value.toLowerCase();
  
  // Get all the listing cards
  let listingCards = document.querySelectorAll('#listing-grid .listing-card');

  // Loop through each card
  listingCards.forEach(function(card) {
    // Get the text content from the card's title, category, and description
    let title = card.querySelector('h3').textContent.toLowerCase();
    let category = card.querySelector('.category').textContent.toLowerCase();
    let description = card.querySelector('.description').textContent.toLowerCase();

    // Check if the search term is in the title, category, OR description
    if (title.includes(searchTerm) || category.includes(searchTerm) || description.includes(searchTerm)) {
      // If it matches, show the card
      card.style.display = 'flex'; // Use 'flex' since the card is a flex container
    } else {
      // If it doesn't match, hide the card
      card.style.display = 'none';
    }
  });
});
