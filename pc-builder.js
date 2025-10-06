// PC Builder functionality
let currentBuild = {
  id: null,
  name: "My Custom PC",
  components: {},
  totalPrice: 0,
  createdAt: null,
  updatedAt: null,
};

// Component data for PC Builder
const builderComponents = {
  cpu: [
    {
      id: "cpu-1",
      name: "Intel Core i9-14900K",
      price: 589,
      brand: "Intel",
      image:
        "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=300&h=200&fit=crop",
      specs: ["24 Cores", "32 Threads", "6.0 GHz Max Turbo", "LGA1700 Socket"],
      power: 125,
      socket: "LGA1700",
    },
    {
      id: "cpu-2",
      name: "AMD Ryzen 9 7950X",
      price: 699,
      brand: "AMD",
      image:
        "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=300&h=200&fit=crop",
      specs: ["16 Cores", "32 Threads", "5.7 GHz Max Boost", "AM5 Socket"],
      power: 170,
      socket: "AM5",
    },
    {
      id: "cpu-3",
      name: "Intel Core i7-14700K",
      price: 409,
      brand: "Intel",
      image:
        "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=300&h=200&fit=crop",
      specs: ["20 Cores", "28 Threads", "5.6 GHz Max Turbo", "LGA1700 Socket"],
      power: 125,
      socket: "LGA1700",
    },
    {
      id: "cpu-4",
      name: "AMD Ryzen 7 7800X3D",
      price: 449,
      brand: "AMD",
      image:
        "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=300&h=200&fit=crop",
      specs: [
        "8 Cores",
        "16 Threads",
        "5.0 GHz Max Boost",
        "AM5 Socket",
        "3D V-Cache",
      ],
      power: 120,
      socket: "AM5",
    },
  ],
  gpu: [
    {
      id: "gpu-1",
      name: "NVIDIA RTX 4090",
      price: 1599,
      brand: "NVIDIA",
      image:
        "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=300&h=200&fit=crop",
      specs: ["24GB GDDR6X", "16384 CUDA Cores", "2.52 GHz Boost", "PCIe 4.0"],
      power: 450,
    },
    {
      id: "gpu-2",
      name: "AMD Radeon RX 7900 XTX",
      price: 999,
      brand: "AMD",
      image:
        "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=300&h=200&fit=crop",
      specs: [
        "24GB GDDR6",
        "6144 Stream Processors",
        "2.5 GHz Game Clock",
        "PCIe 4.0",
      ],
      power: 355,
    },
    {
      id: "gpu-3",
      name: "NVIDIA RTX 4070 Super",
      price: 599,
      brand: "NVIDIA",
      image:
        "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=300&h=200&fit=crop",
      specs: ["12GB GDDR6X", "7168 CUDA Cores", "2.48 GHz Boost", "PCIe 4.0"],
      power: 220,
    },
    {
      id: "gpu-4",
      name: "AMD Radeon RX 7800 XT",
      price: 499,
      brand: "AMD",
      image:
        "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=300&h=200&fit=crop",
      specs: [
        "16GB GDDR6",
        "3840 Stream Processors",
        "2.43 GHz Game Clock",
        "PCIe 4.0",
      ],
      power: 263,
    },
  ],
  motherboard: [
    {
      id: "mb-1",
      name: "ASUS ROG Strix Z790-E",
      price: 459,
      brand: "ASUS",
      image:
        "https://images.unsplash.com/photo-1562976540-1502c2145186?w=300&h=200&fit=crop",
      specs: ["LGA1700 Socket", "DDR5 Support", "WiFi 6E", "PCIe 5.0"],
      socket: "LGA1700",
      ramType: "DDR5",
    },
    {
      id: "mb-2",
      name: "MSI MAG X670E Tomahawk",
      price: 289,
      brand: "MSI",
      image:
        "https://images.unsplash.com/photo-1562976540-1502c2145186?w=300&h=200&fit=crop",
      specs: ["AM5 Socket", "DDR5 Support", "WiFi 6E", "PCIe 5.0"],
      socket: "AM5",
      ramType: "DDR5",
    },
    {
      id: "mb-3",
      name: "Gigabyte Z790 AORUS Elite",
      price: 229,
      brand: "Gigabyte",
      image:
        "https://images.unsplash.com/photo-1562976540-1502c2145186?w=300&h=200&fit=crop",
      specs: ["LGA1700 Socket", "DDR5 Support", "WiFi 6", "PCIe 4.0"],
      socket: "LGA1700",
      ramType: "DDR5",
    },
  ],
  ram: [
    {
      id: "ram-1",
      name: "Corsair Vengeance DDR5-5600 32GB",
      price: 179,
      brand: "Corsair",
      image:
        "https://images.unsplash.com/photo-1562976540-1502c2145186?w=300&h=200&fit=crop",
      specs: ["32GB (2x16GB)", "DDR5-5600", "RGB Lighting", "Low Profile"],
      type: "DDR5",
      capacity: 32,
    },
    {
      id: "ram-2",
      name: "G.Skill Trident Z5 DDR5-6000 32GB",
      price: 199,
      brand: "G.Skill",
      image:
        "https://images.unsplash.com/photo-1562976540-1502c2145186?w=300&h=200&fit=crop",
      specs: ["32GB (2x16GB)", "DDR5-6000", "RGB Lighting", "High Performance"],
      type: "DDR5",
      capacity: 32,
    },
    {
      id: "ram-3",
      name: "Corsair Vengeance LPX DDR4-3200 32GB",
      price: 129,
      brand: "Corsair",
      image:
        "https://images.unsplash.com/photo-1562976540-1502c2145186?w=300&h=200&fit=crop",
      specs: ["32GB (2x16GB)", "DDR4-3200", "Low Profile", "Heat Spreader"],
      type: "DDR4",
      capacity: 32,
    },
  ],
  storage: [
    {
      id: "storage-1",
      name: "Samsung 980 PRO 2TB NVMe",
      price: 199,
      brand: "Samsung",
      image:
        "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=300&h=200&fit=crop",
      specs: ["2TB Capacity", "PCIe 4.0", "7000 MB/s Read", "5-Year Warranty"],
      capacity: 2000,
      type: "NVMe SSD",
    },
    {
      id: "storage-2",
      name: "WD Black SN850X 1TB NVMe",
      price: 129,
      brand: "Western Digital",
      image:
        "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=300&h=200&fit=crop",
      specs: ["1TB Capacity", "PCIe 4.0", "7300 MB/s Read", "Gaming Optimized"],
      capacity: 1000,
      type: "NVMe SSD",
    },
    {
      id: "storage-3",
      name: "Seagate Barracuda 4TB HDD",
      price: 89,
      brand: "Seagate",
      image:
        "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=300&h=200&fit=crop",
      specs: ["4TB Capacity", "7200 RPM", "256MB Cache", "SATA 6Gb/s"],
      capacity: 4000,
      type: "HDD",
    },
  ],
  psu: [
    {
      id: "psu-1",
      name: "Corsair RM850x 850W 80+ Gold",
      price: 149,
      brand: "Corsair",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
      specs: [
        "850W Power",
        "80+ Gold Certified",
        "Fully Modular",
        "10-Year Warranty",
      ],
      wattage: 850,
      efficiency: "80+ Gold",
    },
    {
      id: "psu-2",
      name: "EVGA SuperNOVA 1000W 80+ Platinum",
      price: 199,
      brand: "EVGA",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
      specs: [
        "1000W Power",
        "80+ Platinum Certified",
        "Fully Modular",
        "10-Year Warranty",
      ],
      wattage: 1000,
      efficiency: "80+ Platinum",
    },
    {
      id: "psu-3",
      name: "Seasonic Focus GX-750 750W 80+ Gold",
      price: 129,
      brand: "Seasonic",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
      specs: [
        "750W Power",
        "80+ Gold Certified",
        "Fully Modular",
        "10-Year Warranty",
      ],
      wattage: 750,
      efficiency: "80+ Gold",
    },
  ],
  case: [
    {
      id: "case-1",
      name: "Fractal Design Define 7",
      price: 169,
      brand: "Fractal Design",
      image:
        "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=300&h=200&fit=crop",
      specs: [
        "Mid Tower",
        "Sound Dampening",
        "Tempered Glass",
        "Excellent Airflow",
      ],
      formFactor: "Mid Tower",
    },
    {
      id: "case-2",
      name: "NZXT H7 Flow",
      price: 139,
      brand: "NZXT",
      image:
        "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=300&h=200&fit=crop",
      specs: ["Mid Tower", "RGB Lighting", "Tempered Glass", "High Airflow"],
      formFactor: "Mid Tower",
    },
    {
      id: "case-3",
      name: "Corsair 4000D Airflow",
      price: 109,
      brand: "Corsair",
      image:
        "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=300&h=200&fit=crop",
      specs: [
        "Mid Tower",
        "Optimized Airflow",
        "Tempered Glass",
        "Cable Management",
      ],
      formFactor: "Mid Tower",
    },
  ],
};

// Preset builds
const presetBuilds = [
  {
    id: "preset-1",
    name: "Gaming Beast",
    description: "Ultimate gaming performance with RTX 4090",
    price: 3899,
    image:
      "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400&h=300&fit=crop",
    components: {
      cpu: "cpu-1",
      gpu: "gpu-1",
      motherboard: "mb-1",
      ram: "ram-2",
      storage: "storage-1",
      psu: "psu-2",
      case: "case-1",
    },
  },
  {
    id: "preset-2",
    name: "Content Creator Pro",
    description: "Perfect for streaming and content creation",
    price: 2799,
    image:
      "https://images.unsplash.com/photo-1593640495253-23196b27a87f?w=400&h=300&fit=crop",
    components: {
      cpu: "cpu-2",
      gpu: "gpu-2",
      motherboard: "mb-2",
      ram: "ram-1",
      storage: "storage-1",
      psu: "psu-1",
      case: "case-2",
    },
  },
  {
    id: "preset-3",
    name: "Budget Gaming",
    description: "Great gaming performance at an affordable price",
    price: 1599,
    image:
      "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=300&fit=crop",
    components: {
      cpu: "cpu-3",
      gpu: "gpu-3",
      motherboard: "mb-3",
      ram: "ram-3",
      storage: "storage-2",
      psu: "psu-3",
      case: "case-3",
    },
  },
];

// Initialize PC Builder
document.addEventListener("DOMContentLoaded", function () {
  if (window.location.pathname.includes("pc-builder.html")) {
    initializePCBuilder();
    updateAuthUI();
  }
});

function initializePCBuilder() {
  loadComponents();
  updateBuildSummary();
  checkCompatibility();
}

function loadComponents() {
  Object.keys(builderComponents).forEach((category) => {
    const grid = document.getElementById(`${category}-grid`);
    if (grid) {
      grid.innerHTML = builderComponents[category]
        .map(
          (component) => `
                <div class="component-item ${
                  currentBuild.components[category] === component.id
                    ? "selected"
                    : ""
                }" 
                     onclick="selectComponent('${category}', '${
            component.id
          }')">
                    <div class="component-image">
                        <img src="${component.image}" alt="${component.name}">
                    </div>
                    <div class="component-info">
                        <h4>${component.name}</h4>
                        <div class="component-brand">${component.brand}</div>
                        <div class="component-price">$${component.price}</div>
                        <div class="component-specs">
                            ${component.specs
                              .slice(0, 2)
                              .map((spec) => `<div class="spec">${spec}</div>`)
                              .join("")}
                        </div>
                    </div>
                    <div class="component-actions">
                        <button class="btn btn-sm ${
                          currentBuild.components[category] === component.id
                            ? "btn-secondary"
                            : "btn-primary"
                        }">
                            ${
                              currentBuild.components[category] === component.id
                                ? "Selected"
                                : "Select"
                            }
                        </button>
                    </div>
                </div>
            `
        )
        .join("");
    }
  });
}

function toggleCategory(category) {
  const content = document.getElementById(`${category}-content`);
  const header = content.previousElementSibling;
  const icon = header.querySelector(".fa-chevron-down");

  if (content.style.display === "none" || !content.style.display) {
    content.style.display = "block";
    icon.style.transform = "rotate(180deg)";
  } else {
    content.style.display = "none";
    icon.style.transform = "rotate(0deg)";
  }
}

function selectComponent(category, componentId) {
  // Update current build
  currentBuild.components[category] = componentId;

  // Update UI
  loadComponents();
  updateBuildSummary();
  updateCategoryStatus(category);
  checkCompatibility();
}

function updateCategoryStatus(category) {
  const selectedElement = document.getElementById(`${category}-selected`);
  if (currentBuild.components[category]) {
    const component = builderComponents[category].find(
      (c) => c.id === currentBuild.components[category]
    );
    selectedElement.textContent = component ? component.name : "Not Selected";
    selectedElement.style.color = "#10b981";
  } else {
    selectedElement.textContent = "Not Selected";
    selectedElement.style.color = "#6b7280";
  }
}

function updateBuildSummary() {
  let totalPrice = 0;

  // Calculate components total
  Object.keys(currentBuild.components).forEach((category) => {
    const componentId = currentBuild.components[category];
    if (componentId) {
      const component = builderComponents[category].find(
        (c) => c.id === componentId
      );
      if (component) {
        totalPrice += component.price;
      }
    }
  });

  // Update UI
  document.getElementById(
    "components-total"
  ).textContent = `$${totalPrice.toFixed(2)}`;

  const assemblyPrice = 99;
  const buildTotal = totalPrice + assemblyPrice;

  document.getElementById("build-total").textContent = `$${buildTotal.toFixed(
    2
  )}`;

  // Update current build
  currentBuild.totalPrice = buildTotal;

  // Enable/disable add to cart button
  const addBuildBtn = document.getElementById("add-build-btn");
  const hasAllComponents = Object.keys(builderComponents).every(
    (category) => currentBuild.components[category]
  );

  addBuildBtn.disabled = !hasAllComponents;
  addBuildBtn.textContent = hasAllComponents
    ? "Add Complete Build to Cart"
    : "Select All Components First";
}

function checkCompatibility() {
  let totalPower = 0;
  let isCompatible = true;
  let compatibilityIssues = [];

  // Check power consumption
  Object.keys(currentBuild.components).forEach((category) => {
    const componentId = currentBuild.components[category];
    if (componentId) {
      const component = builderComponents[category].find(
        (c) => c.id === componentId
      );
      if (component && component.power) {
        totalPower += component.power;
      }
    }
  });

  // Check PSU capacity
  const psuId = currentBuild.components.psu;
  if (psuId) {
    const psu = builderComponents.psu.find((c) => c.id === psuId);
    if (psu && totalPower > psu.wattage * 0.8) {
      // 80% rule
      isCompatible = false;
      compatibilityIssues.push(
        "PSU may be insufficient for power requirements"
      );
    }
  }

  // Check socket compatibility
  const cpuId = currentBuild.components.cpu;
  const motherboardId = currentBuild.components.motherboard;

  if (cpuId && motherboardId) {
    const cpu = builderComponents.cpu.find((c) => c.id === cpuId);
    const motherboard = builderComponents.motherboard.find(
      (c) => c.id === motherboardId
    );

    if (cpu && motherboard && cpu.socket !== motherboard.socket) {
      isCompatible = false;
      compatibilityIssues.push("CPU and motherboard socket mismatch");
    }
  }

  // Check RAM compatibility
  const ramId = currentBuild.components.ram;
  if (ramId && motherboardId) {
    const ram = builderComponents.ram.find((c) => c.id === ramId);
    const motherboard = builderComponents.motherboard.find(
      (c) => c.id === motherboardId
    );

    if (ram && motherboard && ram.type !== motherboard.ramType) {
      isCompatible = false;
      compatibilityIssues.push("RAM and motherboard type mismatch");
    }
  }

  // Update UI
  const powerCheck = document.getElementById("power-check");
  const compatibilityCheck = document.getElementById("compatibility-check");

  powerCheck.querySelector(".status").textContent = `${totalPower}W`;
  powerCheck.querySelector(".status").style.color =
    totalPower > 0 ? "#10b981" : "#6b7280";

  compatibilityCheck.querySelector(".status").textContent = isCompatible
    ? "Good"
    : "Issues Found";
  compatibilityCheck.querySelector(".status").style.color = isCompatible
    ? "#10b981"
    : "#ef4444";

  if (!isCompatible) {
    compatibilityCheck.title = compatibilityIssues.join(", ");
  }
}

function clearBuild() {
  if (confirm("Are you sure you want to clear the current build?")) {
    currentBuild = {
      id: null,
      name: "My Custom PC",
      components: {},
      totalPrice: 0,
      createdAt: null,
      updatedAt: null,
    };

    document.getElementById("build-name").value = "My Custom PC";
    loadComponents();
    updateBuildSummary();

    // Update all category statuses
    Object.keys(builderComponents).forEach((category) => {
      updateCategoryStatus(category);
    });

    checkCompatibility();
    showToast(
      "success",
      "Build Cleared",
      "All components have been removed from the build."
    );
  }
}

function loadPresetBuild() {
  const modal = document.getElementById("preset-modal");
  const grid = document.getElementById("preset-grid");

  grid.innerHTML = presetBuilds
    .map(
      (preset) => `
        <div class="preset-card" onclick="selectPreset('${preset.id}')">
            <div class="preset-image">
                <img src="${preset.image}" alt="${preset.name}">
            </div>
            <div class="preset-info">
                <h3>${preset.name}</h3>
                <p>${preset.description}</p>
                <div class="preset-price">$${preset.price}</div>
                <button class="btn btn-primary btn-sm">Load Build</button>
            </div>
        </div>
    `
    )
    .join("");

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closePresetModal() {
  const modal = document.getElementById("preset-modal");
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

function selectPreset(presetId) {
  const preset = presetBuilds.find((p) => p.id === presetId);
  if (!preset) return;

  currentBuild = {
    id: null,
    name: preset.name,
    components: { ...preset.components },
    totalPrice: preset.price,
    createdAt: null,
    updatedAt: null,
  };

  document.getElementById("build-name").value = preset.name;
  loadComponents();
  updateBuildSummary();

  // Update all category statuses
  Object.keys(builderComponents).forEach((category) => {
    updateCategoryStatus(category);
  });

  checkCompatibility();
  closePresetModal();

  showToast(
    "success",
    "Preset Loaded!",
    `${preset.name} configuration has been loaded.`
  );
}

function saveBuild() {
  if (!isLoggedIn()) {
    showToast("error", "Login Required", "Please log in to save your builds.");
    setTimeout(() => {
      window.location.href = "login.html";
    }, 2000);
    return;
  }

  const buildName = document.getElementById("build-name").value.trim();
  if (!buildName) {
    showToast(
      "error",
      "Build Name Required",
      "Please enter a name for your build."
    );
    return;
  }

  // Check if all components are selected
  const hasAllComponents = Object.keys(builderComponents).every(
    (category) => currentBuild.components[category]
  );

  if (!hasAllComponents) {
    showToast(
      "error",
      "Incomplete Build",
      "Please select all components before saving."
    );
    return;
  }

  // Create build object
  const build = {
    id: currentBuild.id || Date.now().toString(),
    name: buildName,
    components: { ...currentBuild.components },
    totalPrice: currentBuild.totalPrice,
    createdAt: currentBuild.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  // Save build
  if (saveUserBuild(build)) {
    currentBuild.id = build.id;
    currentBuild.createdAt = build.createdAt;
    currentBuild.updatedAt = build.updatedAt;
  }
}

function addBuildToCart() {
  const hasAllComponents = Object.keys(builderComponents).every(
    (category) => currentBuild.components[category]
  );

  if (!hasAllComponents) {
    showToast(
      "error",
      "Incomplete Build",
      "Please select all components before adding to cart."
    );
    return;
  }

  // Create a custom build product for the cart
  const buildProduct = {
    id: "build-" + Date.now(),
    name: document.getElementById("build-name").value || "Custom PC Build",
    price: currentBuild.totalPrice,
    category: "Custom Build",
    brand: "TechStore Custom",
    image:
      "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400&h=300&fit=crop",
    rating: 5.0,
    reviews: 0,
    inStock: true,
    features: [
      "Custom Configuration",
      "Professional Assembly",
      "2-Year Warranty",
      "Free Setup",
    ],
    isCustomBuild: true,
    components: { ...currentBuild.components },
  };

  // Add to cart
  addToCart(buildProduct.id, 1, buildProduct);
  showToast(
    "success",
    "Build Added to Cart!",
    "Your custom PC build has been added to the cart."
  );
}

// Override addToCart function to handle custom builds
const originalAddToCart = window.addToCart;
window.addToCart = function (productId, quantity = 1, customProduct = null) {
  if (customProduct) {
    // Handle custom build
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingItem = cart.find((item) => item.id === productId);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({
        ...customProduct,
        quantity: quantity,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    return;
  }

  // Use original function for regular products
  if (originalAddToCart) {
    originalAddToCart(productId, quantity);
  }
};
