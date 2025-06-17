(() => {
    const categories = [
      {
        id: 'vegetables',
        name: 'Vegetables',
        description: 'Fresh and organic vegetables sourced from trusted farms.',
        image: 'https://...vegetables.png',
        alt: 'Fresh vegetables',
      },
      {
        id: 'fruits',
        name: 'Fruits',
        description: 'Seasonal fruits, ripe and juicy.',
        image: 'https://...fruits.png',
        alt: 'Basket of fruits',
      },
      {
        id: 'flowers',
        name: 'Flowers',
        description: 'Colorful flowers to brighten up any day.',
        image: 'https://...flowers.png',
        alt: 'Flower bouquet',
      },
      // Add remaining categories here...
    ];
  
    const grid = document.getElementById('categoryGrid');
    const searchInput = document.getElementById('categorySearch');
  
    function sanitize(text) {
      return text.toLowerCase().replace(/[^\w\s]/gi, '');
    }
  
    function render(categoriesList) {
      grid.innerHTML = '';
  
      if (!categoriesList.length) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; color:#7c3aed; font-weight:600;">No matching categories found.</p>`;
        return;
      }
  
      categoriesList.forEach(cat => {
        const card = document.createElement('article');
        card.className = 'category-card';
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'listitem');
  
        card.innerHTML = `
          <div class="category-image">
            <img src="${cat.image}" alt="${cat.alt}" loading="lazy" />
          </div>
          <div class="category-content">
            <h2 class="category-title">${cat.name}</h2>
            <p class="category-description">${cat.description}</p>
            <a href="/products/${cat.id}" class="btn-view" style="margin-top:auto; font-weight:bold; color:#7c3aed;">View Products →</a>
          </div>
        `;
  
        grid.appendChild(card);
      });
    }
  
    render(categories);
  
    searchInput.addEventListener('input', () => {
      const query = sanitize(searchInput.value);
      const filtered = categories.filter(cat =>
        sanitize(cat.name).includes(query) ||
        sanitize(cat.description).includes(query)
      );
      render(filtered);
    });
  })();
  