// Product data with expanded categories
const products = [
  // Desktop PCs
  {
    id: "1",
    name: "Gaming PC RTX 4070 Super",
    price: 1299,
    originalPrice: 1499,
    category: "Desktop PCs",
    brand: "Custom Build",
    image:
      "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400&h=300&fit=crop",
    rating: 4.8,
    reviews: 124,
    inStock: true,
    features: [
      "RTX 4070 Super",
      "Intel i7-13700F",
      "32GB DDR4",
      "1TB NVMe SSD",
    ],
    keywords: ["gaming", "pc", "rtx", "intel", "desktop", "computer"],
  },
  {
    id: "2",
    name: "Workstation PC Intel Xeon",
    price: 2199,
    category: "Desktop PCs",
    brand: "Custom Build",
    image:
      "https://images.unsplash.com/photo-1593640495253-23196b27a87f?w=400&h=300&fit=crop",
    rating: 4.9,
    reviews: 89,
    inStock: true,
    features: [
      "Intel Xeon W-2245",
      "64GB ECC RAM",
      "RTX A4000",
      "2TB NVMe SSD",
    ],
    keywords: [
      "workstation",
      "pc",
      "xeon",
      "professional",
      "desktop",
      "computer",
    ],
  },
  {
    id: "3",
    name: "Budget Gaming PC GTX 1660",
    price: 699,
    originalPrice: 799,
    category: "Desktop PCs",
    brand: "Custom Build",
    image:
      "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=300&fit=crop",
    rating: 4.5,
    reviews: 203,
    inStock: true,
    features: ["GTX 1660 Super", "AMD Ryzen 5 5600", "16GB DDR4", "500GB SSD"],
    keywords: ["budget", "gaming", "pc", "gtx", "amd", "desktop", "computer"],
  },

  // Laptops
  {
    id: "4",
    name: "ASUS ROG Strix G15",
    price: 1599,
    category: "Laptops",
    brand: "ASUS",
    image:
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop",
    rating: 4.7,
    reviews: 156,
    inStock: true,
    features: ["RTX 4060", "AMD Ryzen 7 7735HS", "16GB DDR5", "1TB SSD"],
    keywords: ["laptop", "gaming", "asus", "rog", "portable", "notebook"],
  },
  {
    id: "5",
    name: "MacBook Pro 14-inch M3",
    price: 1999,
    category: "Laptops",
    brand: "Apple",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
    rating: 4.9,
    reviews: 89,
    inStock: false,
    features: [
      "M3 Pro Chip",
      "18GB Unified Memory",
      "512GB SSD",
      "14-inch Liquid Retina XDR",
    ],
    keywords: ["macbook", "apple", "laptop", "m3", "professional", "notebook"],
  },

  // Components
  {
    id: "6",
    name: "Intel Core i9-14900K",
    price: 589,
    category: "Components",
    brand: "Intel",
    image:
      "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=400&h=300&fit=crop",
    rating: 4.8,
    reviews: 234,
    inStock: true,
    features: ["24 Cores", "32 Threads", "6.0 GHz Max Turbo", "LGA1700 Socket"],
    keywords: ["cpu", "processor", "intel", "core", "i9", "component"],
  },
  {
    id: "7",
    name: "AMD Ryzen 9 7950X",
    price: 699,
    originalPrice: 799,
    category: "Components",
    brand: "AMD",
    image:
      "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=400&h=300&fit=crop",
    rating: 4.9,
    reviews: 187,
    inStock: true,
    features: ["16 Cores", "32 Threads", "5.7 GHz Max Boost", "AM5 Socket"],
    keywords: ["cpu", "processor", "amd", "ryzen", "component"],
  },
  {
    id: "8",
    name: "NVIDIA RTX 4090",
    price: 1599,
    category: "Components",
    brand: "NVIDIA",
    image:
      "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop",
    rating: 4.9,
    reviews: 312,
    inStock: true,
    features: ["24GB GDDR6X", "16384 CUDA Cores", "2.52 GHz Boost", "PCIe 4.0"],
    keywords: ["gpu", "graphics", "nvidia", "rtx", "gaming", "component"],
  },
  {
    id: "9",
    name: "AMD Radeon RX 7800 XT",
    price: 499,
    originalPrice: 549,
    category: "Components",
    brand: "AMD",
    image:
      "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop",
    rating: 4.7,
    reviews: 198,
    inStock: true,
    features: [
      "16GB GDDR6",
      "3840 Stream Processors",
      "2.43 GHz Game Clock",
      "PCIe 4.0",
    ],
    keywords: ["gpu", "graphics", "amd", "radeon", "gaming", "component"],
  },
  {
    id: "10",
    name: "Corsair Vengeance LPX 32GB",
    price: 129,
    category: "Components",
    brand: "Corsair",
    image:
      "https://images.unsplash.com/photo-1562976540-1502c2145186?w=400&h=300&fit=crop",
    rating: 4.6,
    reviews: 445,
    inStock: true,
    features: ["DDR4-3200", "32GB (2x16GB)", "Low Profile", "Heat Spreader"],
    keywords: ["ram", "memory", "corsair", "ddr4", "component"],
  },
  {
    id: "11",
    name: "Samsung 980 PRO 2TB NVMe",
    price: 199,
    originalPrice: 249,
    category: "Components",
    brand: "Samsung",
    image:
      "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=300&fit=crop",
    rating: 4.8,
    reviews: 567,
    inStock: true,
    features: ["2TB Capacity", "PCIe 4.0", "7000 MB/s Read", "5-Year Warranty"],
    keywords: ["ssd", "storage", "samsung", "nvme", "component"],
  },

  // Cases
  {
    id: "15",
    name: "Fractal Design Define 7",
    price: 169,
    category: "Cases",
    brand: "Fractal Design",
    image:
      "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400&h=300&fit=crop",
    rating: 4.7,
    reviews: 234,
    inStock: true,
    features: [
      "Mid Tower",
      "Sound Dampening",
      "Tempered Glass",
      "Excellent Airflow",
    ],
    keywords: ["case", "tower", "fractal", "design", "component"],
  },
  {
    id: "16",
    name: "NZXT H7 Flow",
    price: 139,
    category: "Cases",
    brand: "NZXT",
    image:
      "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400&h=300&fit=crop",
    rating: 4.6,
    reviews: 189,
    inStock: true,
    features: ["Mid Tower", "RGB Lighting", "Tempered Glass", "High Airflow"],
    keywords: ["case", "tower", "nzxt", "rgb", "component"],
  },
  {
    id: "17",
    name: "Corsair 4000D Airflow",
    price: 109,
    category: "Cases",
    brand: "Corsair",
    image:
      "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400&h=300&fit=crop",
    rating: 4.5,
    reviews: 298,
    inStock: true,
    features: [
      "Mid Tower",
      "Optimized Airflow",
      "Tempered Glass",
      "Cable Management",
    ],
    keywords: ["case", "tower", "corsair", "airflow", "component"],
  },

  // Controllers
  {
    id: "18",
    name: "Xbox Wireless Controller",
    price: 59,
    category: "Controllers",
    brand: "Microsoft",
    image:
      "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=300&fit=crop",
    rating: 4.8,
    reviews: 1245,
    inStock: true,
    features: [
      "Wireless Connectivity",
      "Bluetooth",
      "3.5mm Audio Jack",
      "Textured Grips",
    ],
    keywords: ["controller", "gamepad", "xbox", "wireless", "gaming"],
  },
  {
    id: "19",
    name: "PlayStation 5 DualSense",
    price: 69,
    category: "Controllers",
    brand: "Sony",
    image:
      "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=300&fit=crop",
    rating: 4.7,
    reviews: 987,
    inStock: true,
    features: [
      "Haptic Feedback",
      "Adaptive Triggers",
      "Built-in Microphone",
      "Motion Sensing",
    ],
    keywords: ["controller", "gamepad", "playstation", "dualsense", "gaming"],
  },
  {
    id: "20",
    name: "Razer Wolverine V2 Pro",
    price: 249,
    category: "Controllers",
    brand: "Razer",
    image:
      "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=300&fit=crop",
    rating: 4.6,
    reviews: 156,
    inStock: true,
    features: [
      "Pro-Level Customization",
      "Remappable Buttons",
      "Hair Triggers",
      "Wireless",
    ],
    keywords: ["controller", "gamepad", "razer", "pro", "gaming"],
  },

  // Mice
  {
    id: "21",
    name: "Logitech G Pro X Superlight",
    price: 149,
    category: "Mice",
    brand: "Logitech",
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop",
    rating: 4.8,
    reviews: 678,
    inStock: true,
    features: [
      "25K DPI Sensor",
      "Ultra-Lightweight 63g",
      "Wireless",
      "80-hour Battery",
    ],
    keywords: ["mouse", "gaming", "logitech", "wireless", "lightweight"],
  },
  {
    id: "22",
    name: "Razer DeathAdder V3 Pro",
    price: 149,
    category: "Mice",
    brand: "Razer",
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop",
    rating: 4.8,
    reviews: 278,
    inStock: true,
    features: [
      "30K DPI Sensor",
      "Wireless",
      "90-hour Battery",
      "Ergonomic Design",
    ],
    keywords: ["mouse", "gaming", "razer", "wireless", "ergonomic"],
  },
  {
    id: "23",
    name: "SteelSeries Rival 650",
    price: 89,
    category: "Mice",
    brand: "SteelSeries",
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop",
    rating: 4.5,
    reviews: 234,
    inStock: true,
    features: [
      "12K DPI Sensor",
      "Weight System",
      "RGB Lighting",
      "Quantum Wireless",
    ],
    keywords: ["mouse", "gaming", "steelseries", "rgb", "customizable"],
  },

  // Monitors
  {
    id: "12",
    name: "ASUS ROG Swift PG279QM",
    price: 599,
    category: "Monitors",
    brand: "ASUS",
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop",
    rating: 4.7,
    reviews: 234,
    inStock: true,
    features: [
      "27-inch QHD",
      "240Hz Refresh",
      "1ms Response",
      "G-SYNC Compatible",
    ],
    keywords: ["monitor", "display", "asus", "gaming", "240hz"],
  },
  {
    id: "24",
    name: "LG 27GP950-B UltraGear",
    price: 799,
    category: "Monitors",
    brand: "LG",
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop",
    rating: 4.6,
    reviews: 189,
    inStock: true,
    features: ["27-inch 4K", "144Hz Refresh", "1ms Response", "HDR600"],
    keywords: ["monitor", "display", "lg", "4k", "hdr"],
  },
  {
    id: "25",
    name: 'Samsung Odyssey G7 32"',
    price: 699,
    originalPrice: 799,
    category: "Monitors",
    brand: "Samsung",
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop",
    rating: 4.5,
    reviews: 345,
    inStock: true,
    features: [
      "32-inch QHD",
      "240Hz Refresh",
      "1000R Curve",
      "G-SYNC Compatible",
    ],
    keywords: ["monitor", "display", "samsung", "curved", "240hz"],
  },

  // Keyboards
  {
    id: "13",
    name: "Logitech G Pro X Mechanical",
    price: 149,
    category: "Keyboards",
    brand: "Logitech",
    image:
      "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
    rating: 4.6,
    reviews: 389,
    inStock: true,
    features: [
      "Mechanical Switches",
      "RGB Lighting",
      "Tenkeyless",
      "Detachable Cable",
    ],
    keywords: ["keyboard", "mechanical", "logitech", "gaming", "rgb"],
  },
  {
    id: "26",
    name: "Corsair K95 RGB Platinum XT",
    price: 199,
    category: "Keyboards",
    brand: "Corsair",
    image:
      "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
    rating: 4.7,
    reviews: 567,
    inStock: true,
    features: [
      "Cherry MX Switches",
      "RGB Per-Key",
      "Macro Keys",
      "Media Controls",
    ],
    keywords: ["keyboard", "mechanical", "corsair", "rgb", "macro"],
  },
  {
    id: "27",
    name: "Razer BlackWidow V4 Pro",
    price: 229,
    category: "Keyboards",
    brand: "Razer",
    image:
      "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
    rating: 4.5,
    reviews: 234,
    inStock: true,
    features: [
      "Green Switches",
      "Command Dial",
      "RGB Lighting",
      "Magnetic Wrist Rest",
    ],
    keywords: ["keyboard", "mechanical", "razer", "rgb", "gaming"],
  },

  // Headphones
  {
    id: "28",
    name: "SteelSeries Arctis 7P",
    price: 149,
    category: "Headphones",
    brand: "SteelSeries",
    image:
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=300&fit=crop",
    rating: 4.6,
    reviews: 456,
    inStock: true,
    features: [
      "Wireless 2.4GHz",
      "24-hour Battery",
      "DTS Headphone:X",
      "ClearCast Microphone",
    ],
    keywords: ["headphones", "gaming", "wireless", "steelseries", "microphone"],
  },
  {
    id: "29",
    name: "HyperX Cloud Alpha S",
    price: 129,
    category: "Headphones",
    brand: "HyperX",
    image:
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=300&fit=crop",
    rating: 4.5,
    reviews: 789,
    inStock: true,
    features: [
      "Dual Chamber Drivers",
      "7.1 Surround Sound",
      "Adjustable Bass",
      "Detachable Mic",
    ],
    keywords: ["headphones", "gaming", "hyperx", "surround", "microphone"],
  },
  {
    id: "30",
    name: "Corsair HS80 RGB Wireless",
    price: 149,
    category: "Headphones",
    brand: "Corsair",
    image:
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=300&fit=crop",
    rating: 4.4,
    reviews: 234,
    inStock: true,
    features: [
      "Wireless 2.4GHz",
      "Dolby Atmos",
      "RGB Lighting",
      "20-hour Battery",
    ],
    keywords: ["headphones", "gaming", "wireless", "corsair", "rgb"],
  },
];

// Global state
let filteredProducts = [...products];
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let currentFilters = {
  category: "all",
  brand: "all",
  price: "all",
  sort: "name",
  search: "",
};

// Initialize the application
document.addEventListener("DOMContentLoaded", function () {
  renderProducts();
  updateCartCount();
  setupEventListeners();
  initializeChat();
  updateAuthUI();
  setupSearch();
});

// Setup search functionality
function setupSearch() {
  const searchButton = document.querySelector('.nav-icon[onclick*="search"]');
  if (searchButton) {
    searchButton.onclick = toggleSearch;
  }
}

// Toggle search functionality
function toggleSearch() {
  // Remove existing search
  const existingSearch = document.querySelector(".search-overlay");
  if (existingSearch) {
    existingSearch.remove();
    return;
  }

  // Create search overlay
  const searchOverlay = document.createElement("div");
  searchOverlay.className = "search-overlay";
  searchOverlay.innerHTML = `
        <div class="search-container">
            <div class="search-header">
                <h3><i class="fas fa-search"></i> Search Products</h3>
                <button class="search-close" onclick="closeSearch()">&times;</button>
            </div>
            <div class="search-input-container">
                <input type="text" id="search-input" placeholder="Search for products, brands, categories..." autofocus>
                <button class="search-btn" onclick="performSearch()">
                    <i class="fas fa-search"></i>
                </button>
            </div>
            <div class="search-results" id="search-results">
                <div class="search-suggestions">
                    <h4>Popular Searches</h4>
                    <div class="suggestion-tags">
                        <span class="suggestion-tag" onclick="searchFor('gaming pc')">Gaming PC</span>
                        <span class="suggestion-tag" onclick="searchFor('rtx 4090')">RTX 4090</span>
                        <span class="suggestion-tag" onclick="searchFor('mechanical keyboard')">Mechanical Keyboard</span>
                        <span class="suggestion-tag" onclick="searchFor('gaming mouse')">Gaming Mouse</span>
                        <span class="suggestion-tag" onclick="searchFor('monitor')">Monitor</span>
                        <span class="suggestion-tag" onclick="searchFor('headphones')">Headphones</span>
                    </div>
                </div>
            </div>
        </div>
    `;

  document.body.appendChild(searchOverlay);
  document.body.style.overflow = "hidden";

  // Setup search input listener
  const searchInput = document.getElementById("search-input");
  searchInput.addEventListener("input", debounce(handleSearchInput, 300));
  searchInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      performSearch();
    }
  });
}

// Close search overlay
function closeSearch() {
  const searchOverlay = document.querySelector(".search-overlay");
  if (searchOverlay) {
    searchOverlay.remove();
    document.body.style.overflow = "auto";
  }
}

// Handle search input
function handleSearchInput(event) {
  const query = event.target.value.trim();
  if (query.length < 2) {
    showSearchSuggestions();
    return;
  }

  const results = searchProducts(query);
  displaySearchResults(results, query);
}

// Search products
function searchProducts(query) {
  const searchTerms = query
    .toLowerCase()
    .split(" ")
    .filter((term) => term.length > 0);

  return products
    .filter((product) => {
      const searchableText = [
        product.name,
        product.brand,
        product.category,
        ...product.features,
        ...product.keywords,
      ]
        .join(" ")
        .toLowerCase();

      return searchTerms.every((term) => searchableText.includes(term));
    })
    .sort((a, b) => {
      // Sort by relevance (name matches first, then brand, then features)
      const aName = a.name.toLowerCase();
      const bName = b.name.toLowerCase();
      const queryLower = query.toLowerCase();

      if (aName.includes(queryLower) && !bName.includes(queryLower)) return -1;
      if (!aName.includes(queryLower) && bName.includes(queryLower)) return 1;

      return a.name.localeCompare(b.name);
    });
}

// Display search results
function displaySearchResults(results, query) {
  const resultsContainer = document.getElementById("search-results");

  if (results.length === 0) {
    resultsContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h4>No results found for "${query}"</h4>
                <p>Try different keywords or check the spelling</p>
            </div>
        `;
    return;
  }

  resultsContainer.innerHTML = `
        <div class="search-results-header">
            <h4>Found ${results.length} result${
    results.length !== 1 ? "s" : ""
  } for "${query}"</h4>
        </div>
        <div class="search-results-list">
            ${results
              .slice(0, 8)
              .map(
                (product) => `
                <div class="search-result-item" onclick="selectSearchResult('${product.id}')">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="search-result-info">
                        <h5>${product.name}</h5>
                        <div class="search-result-brand">${product.brand}</div>
                        <div class="search-result-category">${product.category}</div>
                        <div class="search-result-price">$${product.price}</div>
                    </div>
                </div>
            `
              )
              .join("")}
        </div>
        ${
          results.length > 8
            ? `
            <div class="search-results-footer">
                <button class="btn btn-primary" onclick="viewAllResults('${query}')">
                    View All ${results.length} Results
                </button>
            </div>
        `
            : ""
        }
    `;
}

// Show search suggestions
function showSearchSuggestions() {
  const resultsContainer = document.getElementById("search-results");
  resultsContainer.innerHTML = `
        <div class="search-suggestions">
            <h4>Popular Searches</h4>
            <div class="suggestion-tags">
                <span class="suggestion-tag" onclick="searchFor('gaming pc')">Gaming PC</span>
                <span class="suggestion-tag" onclick="searchFor('rtx 4090')">RTX 4090</span>
                <span class="suggestion-tag" onclick="searchFor('mechanical keyboard')">Mechanical Keyboard</span>
                <span class="suggestion-tag" onclick="searchFor('gaming mouse')">Gaming Mouse</span>
                <span class="suggestion-tag" onclick="searchFor('monitor')">Monitor</span>
                <span class="suggestion-tag" onclick="searchFor('headphones')">Headphones</span>
            </div>
            
            <h4>Browse by Category</h4>
            <div class="category-suggestions">
                <div class="category-suggestion" onclick="searchFor('Desktop PCs')">
                    <i class="fas fa-desktop"></i>
                    <span>Desktop PCs</span>
                </div>
                <div class="category-suggestion" onclick="searchFor('Laptops')">
                    <i class="fas fa-laptop"></i>
                    <span>Laptops</span>
                </div>
                <div class="category-suggestion" onclick="searchFor('Components')">
                    <i class="fas fa-microchip"></i>
                    <span>Components</span>
                </div>
                <div class="category-suggestion" onclick="searchFor('Monitors')">
                    <i class="fas fa-tv"></i>
                    <span>Monitors</span>
                </div>
                <div class="category-suggestion" onclick="searchFor('Keyboards')">
                    <i class="fas fa-keyboard"></i>
                    <span>Keyboards</span>
                </div>
                <div class="category-suggestion" onclick="searchFor('Mice')">
                    <i class="fas fa-mouse"></i>
                    <span>Mice</span>
                </div>
            </div>
        </div>
    `;
}

// Search for specific term
function searchFor(term) {
  const searchInput = document.getElementById("search-input");
  searchInput.value = term;
  performSearch();
}

// Perform search
function performSearch() {
  const searchInput = document.getElementById("search-input");
  const query = searchInput.value.trim();

  if (!query) {
    showToast("info", "Search", "Please enter a search term");
    return;
  }

  // Update filters and navigate to products section
  currentFilters.search = query;
  closeSearch();

  // Navigate to products section if not already there
  if (
    !window.location.pathname.includes("index.html") &&
    !window.location.pathname.endsWith("/")
  ) {
    window.location.href = "index.html#products";
    return;
  }

  scrollToSection("products");
  applyFilters();
  showToast(
    "success",
    "Search Results",
    `Found ${filteredProducts.length} products for "${query}"`
  );
}

// Select search result
function selectSearchResult(productId) {
  closeSearch();
  showProductDetail(productId);
}

// View all search results
function viewAllResults(query) {
  currentFilters.search = query;
  closeSearch();
  scrollToSection("products");
  applyFilters();
}

// Debounce function
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Event listeners
function setupEventListeners() {
  // Mobile navigation toggle
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (navToggle) {
    navToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");
    });
  }

  // Close modals when clicking outside
  window.addEventListener("click", function (event) {
    const cartModal = document.getElementById("cart-modal");
    const productModal = document.getElementById("product-modal");
    const searchOverlay = document.querySelector(".search-overlay");

    if (event.target === cartModal) {
      toggleCart();
    }
    if (event.target === productModal) {
      closeProductModal();
    }
    if (event.target === searchOverlay) {
      closeSearch();
    }
  });

  // Update chat timestamp
  updateChatTimestamps();
  setInterval(updateChatTimestamps, 60000); // Update every minute
}

// Smooth scrolling
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

// Product filtering and rendering
function applyFilters() {
  const categoryFilter =
    document.getElementById("category-filter")?.value || "all";
  const brandFilter = document.getElementById("brand-filter")?.value || "all";
  const priceFilter = document.getElementById("price-filter")?.value || "all";
  const sortFilter = document.getElementById("sort-filter")?.value || "name";

  currentFilters = {
    category: categoryFilter,
    brand: brandFilter,
    price: priceFilter,
    sort: sortFilter,
    search: currentFilters.search || "",
  };

  filteredProducts = products.filter((product) => {
    // Search filter
    if (currentFilters.search) {
      const searchTerms = currentFilters.search
        .toLowerCase()
        .split(" ")
        .filter((term) => term.length > 0);
      const searchableText = [
        product.name,
        product.brand,
        product.category,
        ...product.features,
        ...product.keywords,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch = searchTerms.every((term) =>
        searchableText.includes(term)
      );
      if (!matchesSearch) return false;
    }

    // Category filter
    if (categoryFilter !== "all" && product.category !== categoryFilter) {
      return false;
    }

    // Brand filter
    if (brandFilter !== "all" && product.brand !== brandFilter) {
      return false;
    }

    // Price filter
    if (priceFilter !== "all") {
      const price = product.price;
      switch (priceFilter) {
        case "0-200":
          if (price >= 200) return false;
          break;
        case "200-500":
          if (price < 200 || price >= 500) return false;
          break;
        case "500-1000":
          if (price < 500 || price >= 1000) return false;
          break;
        case "1000-2000":
          if (price < 1000 || price >= 2000) return false;
          break;
        case "2000+":
          if (price < 2000) return false;
          break;
      }
    }

    return true;
  });

  // Sort products
  filteredProducts.sort((a, b) => {
    switch (sortFilter) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "name":
      default:
        return a.name.localeCompare(b.name);
    }
  });

  renderProducts();
}

function clearFilters() {
  const categoryFilter = document.getElementById("category-filter");
  const brandFilter = document.getElementById("brand-filter");
  const priceFilter = document.getElementById("price-filter");
  const sortFilter = document.getElementById("sort-filter");

  if (categoryFilter) categoryFilter.value = "all";
  if (brandFilter) brandFilter.value = "all";
  if (priceFilter) priceFilter.value = "all";
  if (sortFilter) sortFilter.value = "name";

  currentFilters = {
    category: "all",
    brand: "all",
    price: "all",
    sort: "name",
    search: "",
  };

  filteredProducts = [...products];
  renderProducts();
}

function renderProducts() {
  const productsGrid = document.getElementById("products-grid");
  const productsCount = document.getElementById("products-count");

  if (!productsGrid || !productsCount) return;

  const searchText = currentFilters.search
    ? ` for "${currentFilters.search}"`
    : "";
  productsCount.textContent = `Showing ${filteredProducts.length} of ${products.length} products${searchText}`;

  if (filteredProducts.length === 0) {
    productsGrid.innerHTML = `
            <div class="empty-products">
                <i class="fas fa-search" style="font-size: 3rem; color: #d1d5db; margin-bottom: 1rem;"></i>
                <h3>No products found</h3>
                <p>Try adjusting your filters or search criteria</p>
                <button class="btn btn-primary" onclick="clearFilters()">Clear Filters</button>
            </div>
        `;
    return;
  }

  productsGrid.innerHTML = filteredProducts
    .map(
      (product) => `
        <div class="product-card" onclick="showProductDetail('${product.id}')">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                ${
                  product.originalPrice
                    ? `<div class="product-badge">-${Math.round(
                        ((product.originalPrice - product.price) /
                          product.originalPrice) *
                          100
                      )}%</div>`
                    : ""
                }
                ${
                  !product.inStock
                    ? '<div class="product-badge out-of-stock">Out of Stock</div>'
                    : ""
                }
                <div class="product-overlay">
                    <button class="btn btn-secondary" onclick="event.stopPropagation(); showProductDetail('${
                      product.id
                    }')">
                        <i class="fas fa-eye"></i> View Details
                    </button>
                </div>
            </div>
            <div class="product-content">
                <div class="product-category">${product.category}</div>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-brand">${product.brand}</div>
                <div class="product-rating">
                    <div class="stars">
                        ${generateStars(product.rating)}
                    </div>
                    <span class="rating-text">${product.rating} (${
        product.reviews
      })</span>
                </div>
                <div class="product-price">
                    <span class="current-price">$${product.price}</span>
                    ${
                      product.originalPrice
                        ? `<span class="original-price">$${product.originalPrice}</span>`
                        : ""
                    }
                </div>
                <div class="product-features">
                    <ul>
                        ${product.features
                          .slice(0, 2)
                          .map((feature) => `<li>${feature}</li>`)
                          .join("")}
                    </ul>
                </div>
                <div class="product-actions">
                    <button class="btn-add-cart" onclick="event.stopPropagation(); addToCart('${
                      product.id
                    }')" ${!product.inStock ? "disabled" : ""}>
                        <i class="fas fa-shopping-cart"></i>
                        ${product.inStock ? "Add to Cart" : "Out of Stock"}
                    </button>
                    <button class="btn-wishlist" onclick="event.stopPropagation(); addToWishlist('${
                      product.id
                    }')">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    `
    )
    .join("");
}

function generateStars(rating) {
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars += '<i class="fas fa-star star"></i>';
    } else {
      stars += '<i class="fas fa-star star empty"></i>';
    }
  }
  return stars;
}

// Product detail modal
function showProductDetail(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  const modal = document.getElementById("product-modal");
  const content = document.getElementById("product-detail-content");

  const discountPercentage = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  content.innerHTML = `
        <div class="product-detail">
            <div class="product-detail-layout">
                <div class="product-detail-images">
                    <div class="main-image">
                        <img src="${product.image}" alt="${product.name}">
                        ${
                          discountPercentage > 0
                            ? `<div class="product-badge">-${discountPercentage}%</div>`
                            : ""
                        }
                        ${
                          !product.inStock
                            ? '<div class="product-badge out-of-stock">Out of Stock</div>'
                            : ""
                        }
                    </div>
                </div>
                <div class="product-detail-info">
                    <div class="product-category">${product.category}</div>
                    <h1 class="product-detail-title">${product.name}</h1>
                    <div class="product-brand">${product.brand}</div>
                    
                    <div class="product-rating">
                        <div class="stars">
                            ${generateStars(product.rating)}
                        </div>
                        <span class="rating-text">${product.rating} (${
    product.reviews
  } reviews)</span>
                    </div>
                    
                    <div class="product-price">
                        <span class="current-price">$${product.price}</span>
                        ${
                          product.originalPrice
                            ? `<span class="original-price">$${product.originalPrice}</span>`
                            : ""
                        }
                    </div>
                    
                    ${
                      discountPercentage > 0
                        ? `<div class="savings">You save $${
                            product.originalPrice - product.price
                          } (${discountPercentage}% off)</div>`
                        : ""
                    }
                    
                    <div class="stock-status">
                        ${
                          product.inStock
                            ? '<span class="in-stock"><i class="fas fa-check-circle"></i> In Stock</span>'
                            : '<span class="out-of-stock"><i class="fas fa-times-circle"></i> Out of Stock</span>'
                        }
                    </div>
                    
                    <div class="product-features">
                        <h3>Key Features</h3>
                        <ul>
                            ${product.features
                              .map(
                                (feature) =>
                                  `<li><i class="fas fa-check"></i> ${feature}</li>`
                              )
                              .join("")}
                        </ul>
                    </div>
                    
                    <div class="quantity-selector">
                        <label>Quantity:</label>
                        <div class="quantity-controls">
                            <button class="quantity-btn" onclick="changeQuantity(-1)">-</button>
                            <span id="detail-quantity">1</span>
                            <button class="quantity-btn" onclick="changeQuantity(1)">+</button>
                        </div>
                    </div>
                    
                    <div class="product-actions">
                        <button class="btn btn-primary btn-full" onclick="addToCartFromDetail('${
                          product.id
                        }')" ${!product.inStock ? "disabled" : ""}>
                            <i class="fas fa-shopping-cart"></i>
                            ${product.inStock ? "Add to Cart" : "Out of Stock"}
                        </button>
                        <div class="action-buttons">
                            <button class="btn btn-outline" onclick="addToWishlist('${
                              product.id
                            }')">
                                <i class="fas fa-heart"></i> Wishlist
                            </button>
                            <button class="btn btn-outline" onclick="shareProduct('${
                              product.id
                            }')">
                                <i class="fas fa-share"></i> Share
                            </button>
                        </div>
                    </div>
                    
                    <div class="shipping-info">
                        <div class="shipping-item">
                            <i class="fas fa-truck"></i>
                            <span>Free shipping on orders over $100</span>
                        </div>
                        <div class="shipping-item">
                            <i class="fas fa-shield-alt"></i>
                            <span>2-year manufacturer warranty</span>
                        </div>
                        <div class="shipping-item">
                            <i class="fas fa-undo"></i>
                            <span>30-day return policy</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="product-description">
                <div class="description-tabs">
                    <button class="tab-btn active" onclick="showTab('description')">Description</button>
                    <button class="tab-btn" onclick="showTab('specifications')">Specifications</button>
                    <button class="tab-btn" onclick="showTab('reviews')">Reviews (${
                      product.reviews
                    })</button>
                </div>
                
                <div class="tab-content active" id="description-tab">
                    <h3>Product Description</h3>
                    <p>The ${
                      product.name
                    } represents the pinnacle of ${product.category.toLowerCase()} technology, designed for professionals and enthusiasts who demand the best performance. With cutting-edge features and premium build quality, this product delivers exceptional value and reliability.</p>
                    <p>Whether you're gaming, creating content, or running demanding applications, the ${
                      product.name
                    } provides the power and efficiency you need to excel in your tasks.</p>
                </div>
                
                <div class="tab-content" id="specifications-tab">
                    <h3>Technical Specifications</h3>
                    <div class="spec-grid">
                        <div class="spec-item">
                            <span class="spec-label">Brand:</span>
                            <span class="spec-value">${product.brand}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">Category:</span>
                            <span class="spec-value">${product.category}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">Rating:</span>
                            <span class="spec-value">${product.rating}/5</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">Reviews:</span>
                            <span class="spec-value">${product.reviews}</span>
                        </div>
                        ${product.features
                          .map(
                            (feature) => `
                            <div class="spec-item">
                                <span class="spec-label">Feature:</span>
                                <span class="spec-value">${feature}</span>
                            </div>
                        `
                          )
                          .join("")}
                    </div>
                </div>
                
                <div class="tab-content" id="reviews-tab">
                    <h3>Customer Reviews</h3>
                    <div class="reviews-summary">
                        <div class="rating-overview">
                            <div class="rating-score">${product.rating}</div>
                            <div class="rating-stars">${generateStars(
                              product.rating
                            )}</div>
                            <div class="rating-count">Based on ${
                              product.reviews
                            } reviews</div>
                        </div>
                    </div>
                    <div class="sample-reviews">
                        <div class="review">
                            <div class="review-header">
                                <span class="reviewer-name">John D.</span>
                                <div class="review-rating">${generateStars(
                                  5
                                )}</div>
                                <span class="review-date">2024-01-15</span>
                            </div>
                            <p class="review-text">Excellent product! Works perfectly and arrived quickly. Highly recommended for anyone looking for quality and performance.</p>
                        </div>
                        <div class="review">
                            <div class="review-header">
                                <span class="reviewer-name">Sarah M.</span>
                                <div class="review-rating">${generateStars(
                                  4
                                )}</div>
                                <span class="review-date">2024-01-10</span>
                            </div>
                            <p class="review-text">Good quality product, though shipping took a bit longer than expected. Overall satisfied with the purchase.</p>
                        </div>
                        <div class="review">
                            <div class="review-header">
                                <span class="reviewer-name">Mike R.</span>
                                <div class="review-rating">${generateStars(
                                  5
                                )}</div>
                                <span class="review-date">2024-01-05</span>
                            </div>
                            <p class="review-text">Outstanding performance and great value for money! This has exceeded all my expectations.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeProductModal() {
  const modal = document.getElementById("product-modal");
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

function showTab(tabName) {
  // Remove active class from all tabs and content
  document
    .querySelectorAll(".tab-btn")
    .forEach((btn) => btn.classList.remove("active"));
  document
    .querySelectorAll(".tab-content")
    .forEach((content) => content.classList.remove("active"));

  // Add active class to clicked tab and corresponding content
  event.target.classList.add("active");
  document.getElementById(tabName + "-tab").classList.add("active");
}

function changeQuantity(delta) {
  const quantityElement = document.getElementById("detail-quantity");
  let quantity = parseInt(quantityElement.textContent);
  quantity = Math.max(1, quantity + delta);
  quantityElement.textContent = quantity;
}

function addToCartFromDetail(productId) {
  const quantity = parseInt(
    document.getElementById("detail-quantity").textContent
  );
  addToCart(productId, quantity);
  closeProductModal();
}

// Shopping cart functionality
function addToCart(productId, quantity = 1, customProduct = null) {
  let product;

  if (customProduct) {
    product = customProduct;
  } else {
    product = products.find((p) => p.id === productId);
    if (!product || !product.inStock) return;
  }

  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      ...product,
      quantity: quantity,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  showToast(
    "success",
    "Added to Cart",
    `${product.name} has been added to your cart!`
  );
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  renderCart();
  showToast("success", "Removed", "Item removed from cart");
}

function updateCartQuantity(productId, newQuantity) {
  if (newQuantity <= 0) {
    removeFromCart(productId);
    return;
  }

  const item = cart.find((item) => item.id === productId);
  if (item) {
    item.quantity = newQuantity;
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    renderCart();
  }
}

function clearCart() {
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  renderCart();
  showToast("success", "Cart Cleared", "All items removed from cart");
}

function updateCartCount() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartCountElements = document.querySelectorAll(
    "#cart-count, #cart-modal-count"
  );
  cartCountElements.forEach((element) => {
    element.textContent = totalItems;
    element.style.display = totalItems > 0 ? "block" : "none";
  });
}

function toggleCart() {
  const modal = document.getElementById("cart-modal");
  const isActive = modal.classList.contains("active");

  if (isActive) {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  } else {
    renderCart();
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function renderCart() {
  const cartItems = document.getElementById("cart-items");
  const cartSummary = document.getElementById("cart-summary");

  if (cart.length === 0) {
    cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <h3>Your cart is empty</h3>
                <p>Add some products to get started!</p>
                <button class="btn btn-primary" onclick="toggleCart(); scrollToSection('products')">
                    Continue Shopping
                </button>
            </div>
        `;
    cartSummary.innerHTML = "";
    return;
  }

  cartItems.innerHTML = cart
    .map(
      (item) => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-brand">${item.brand}</div>
                <div class="cart-item-price">$${item.price}</div>
            </div>
            <div class="cart-item-controls">
                <button class="quantity-btn" onclick="updateCartQuantity('${
                  item.id
                }', ${item.quantity - 1})" ${
        item.quantity <= 1 ? "disabled" : ""
      }>
                    <i class="fas fa-minus"></i>
                </button>
                <span class="cart-item-quantity">${item.quantity}</span>
                <button class="quantity-btn" onclick="updateCartQuantity('${
                  item.id
                }', ${item.quantity + 1})">
                    <i class="fas fa-plus"></i>
                </button>
            </div>
            <div class="cart-item-total">$${(
              item.price * item.quantity
            ).toFixed(2)}</div>
            <button class="cart-item-remove" onclick="removeFromCart('${
              item.id
            }')">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `
    )
    .join("");

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 100 ? 0 : 15;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  cartSummary.innerHTML = `
        <div class="cart-summary-row">
            <span>Subtotal:</span>
            <span>$${subtotal.toFixed(2)}</span>
        </div>
        <div class="cart-summary-row">
            <span>Shipping:</span>
            <span>${shipping === 0 ? "Free" : "$" + shipping.toFixed(2)}</span>
        </div>
        <div class="cart-summary-row">
            <span>Tax:</span>
            <span>$${tax.toFixed(2)}</span>
        </div>
        <div class="cart-summary-row total">
            <span>Total:</span>
            <span>$${total.toFixed(2)}</span>
        </div>
        ${
          subtotal < 100
            ? `<div class="free-shipping-notice">Add $${(
                100 - subtotal
              ).toFixed(2)} more for free shipping!</div>`
            : ""
        }
        <div class="cart-actions">
            <button class="btn btn-primary btn-full" onclick="checkout()">
                <i class="fas fa-credit-card"></i> Checkout - $${total.toFixed(
                  2
                )}
            </button>
            <button class="btn btn-outline btn-full" onclick="toggleCart()">
                Continue Shopping
            </button>
        </div>
    `;
}

function checkout() {
  // Check if cart has items
  if (cart.length === 0) {
    showToast("error", "Empty Cart", "Your cart is empty");
    return;
  }

  // Close cart modal and redirect to checkout
  toggleCart();
  window.location.href = "checkout.html";
}

// Wishlist functionality
function addToWishlist(productId) {
  const product = products.find((p) => p.id === productId);
  if (product) {
    showToast(
      "success",
      "Added to Wishlist",
      `${product.name} has been added to your wishlist!`
    );
  }
}

function shareProduct(productId) {
  const product = products.find((p) => p.id === productId);
  if (product) {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: `Check out this ${product.name} from TechStore!`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      showToast("success", "Link Copied", "Product link copied to clipboard!");
    }
  }
}

// Live chat functionality
let chatMessages = [];
let isChatMinimized = false;

function initializeChat() {
  chatMessages = [
    {
      id: "1",
      text: "Hello! Welcome to TechStore. How can I help you today?",
      sender: "agent",
      timestamp: new Date(),
    },
  ];
  renderChatMessages();
}

function toggleChat() {
  const chatWidget = document.getElementById("chat-widget");
  const chatFloatBtn = document.getElementById("chat-float-btn");

  const isActive = chatWidget.classList.contains("active");

  if (isActive) {
    chatWidget.classList.remove("active");
    chatFloatBtn.style.display = "flex";
  } else {
    chatWidget.classList.add("active");
    chatFloatBtn.style.display = "none";
    isChatMinimized = false;
    chatWidget.classList.remove("minimized");

    // Focus on input
    setTimeout(() => {
      document.getElementById("chat-input-field").focus();
    }, 100);
  }
}

function toggleChatMinimize() {
  const chatWidget = document.getElementById("chat-widget");
  const chatMinimizeBtn = document.getElementById("chat-minimize");

  isChatMinimized = !isChatMinimized;

  if (isChatMinimized) {
    chatWidget.classList.add("minimized");
    chatMinimizeBtn.innerHTML = '<i class="fas fa-plus"></i>';
  } else {
    chatWidget.classList.remove("minimized");
    chatMinimizeBtn.innerHTML = '<i class="fas fa-minus"></i>';
  }
}

function sendChatMessage() {
  const input = document.getElementById("chat-input-field");
  const message = input.value.trim();

  if (!message) return;

  // Add user message
  chatMessages.push({
    id: Date.now().toString(),
    text: message,
    sender: "user",
    timestamp: new Date(),
  });

  input.value = "";
  renderChatMessages();

  // Simulate agent response
  setTimeout(() => {
    const responses = [
      "Thank you for your message! I'll help you with that right away.",
      "That's a great question! Let me find the best solution for you.",
      "I understand your concern. Our team can definitely assist you with this.",
      "Thanks for reaching out! I have some recommendations that might interest you.",
      "Great choice! That product is very popular. Would you like to know more about it?",
      "I'd be happy to help you find the perfect product for your needs.",
      "That's an excellent question about our products. Let me provide you with detailed information.",
      "I can see you're interested in our tech products. What specific features are you looking for?",
      "Our customer service team is here to help! Is there anything specific you'd like to know about our products or services?",
    ];

    chatMessages.push({
      id: (Date.now() + 1).toString(),
      text: responses[Math.floor(Math.random() * responses.length)],
      sender: "agent",
      timestamp: new Date(),
    });

    renderChatMessages();
  }, 1000 + Math.random() * 2000);
}

function handleChatKeyPress(event) {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    sendChatMessage();
  }
}

function renderChatMessages() {
  const messagesContainer = document.getElementById("chat-messages");

  messagesContainer.innerHTML = chatMessages
    .map(
      (message) => `
        <div class="message ${message.sender}-message">
            <div class="message-avatar">
                <i class="fas fa-${
                  message.sender === "user" ? "user" : "robot"
                }"></i>
            </div>
            <div class="message-content">
                <p>${message.text}</p>
                <span class="message-time" data-timestamp="${message.timestamp.getTime()}"></span>
            </div>
        </div>
    `
    )
    .join("");

  // Scroll to bottom
  messagesContainer.scrollTop = messagesContainer.scrollHeight;

  // Update timestamps
  updateChatTimestamps();
}

function updateChatTimestamps() {
  const timeElements = document.querySelectorAll(
    ".message-time[data-timestamp]"
  );
  const now = new Date();

  timeElements.forEach((element) => {
    const timestamp = new Date(parseInt(element.dataset.timestamp));
    const diff = now - timestamp;

    let timeText = "";
    if (diff < 60000) {
      // Less than 1 minute
      timeText = "Just now";
    } else if (diff < 3600000) {
      // Less than 1 hour
      timeText = `${Math.floor(diff / 60000)}m ago`;
    } else if (diff < 86400000) {
      // Less than 1 day
      timeText = `${Math.floor(diff / 3600000)}h ago`;
    } else {
      timeText = timestamp.toLocaleDateString();
    }

    element.textContent = timeText;
  });
}

// Contact form functionality
function submitContactForm(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
    timestamp: new Date().toISOString(),
  };

  // Simulate form submission
  const submitBtn = event.target.querySelector('button[type="submit"]');
  const originalText = submitBtn.innerHTML;

  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
  submitBtn.disabled = true;

  setTimeout(() => {
    // Store message locally for demo
    const messages = JSON.parse(
      localStorage.getItem("contactMessages") || "[]"
    );
    messages.push(data);
    localStorage.setItem("contactMessages", JSON.stringify(messages));

    showToast(
      "success",
      "Message Sent!",
      "Thank you for your message. We'll get back to you within 24 hours."
    );
    event.target.reset();

    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;
  }, 2000);
}

// Toast notification system
function showToast(type = "info", title = "", message = "") {
  const container = document.getElementById("toast-container");
  const toastId = "toast-" + Date.now();

  const iconMap = {
    success: "fas fa-check-circle",
    error: "fas fa-exclamation-circle",
    info: "fas fa-info-circle",
    warning: "fas fa-exclamation-triangle",
  };

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.id = toastId;
  toast.innerHTML = `
        <div class="toast-icon">
            <i class="${iconMap[type] || iconMap.info}"></i>
        </div>
        <div class="toast-content">
            ${title ? `<div class="toast-title">${title}</div>` : ""}
            <div class="toast-message">${message}</div>
        </div>
        <button class="toast-close" onclick="removeToast('${toastId}')">
            <i class="fas fa-times"></i>
        </button>
    `;

  container.appendChild(toast);

  // Auto remove after 5 seconds
  setTimeout(() => {
    removeToast(toastId);
  }, 5000);
}

function removeToast(toastId) {
  const toast = document.getElementById(toastId);
  if (toast) {
    toast.style.animation = "toastSlideOut 0.3s ease forwards";
    setTimeout(() => {
      toast.remove();
    }, 300);
  }
}
