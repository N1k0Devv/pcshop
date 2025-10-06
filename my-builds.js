// My Builds page functionality
document.addEventListener("DOMContentLoaded", function () {
  if (window.location.pathname.includes("my-builds.html")) {
    initializeMyBuilds();
    updateAuthUI();
  }
});

function initializeMyBuilds() {
  const buildsContent = document.getElementById("builds-content");

  if (!isLoggedIn()) {
    // Show login prompt
    buildsContent.innerHTML = `
            <div class="auth-prompt">
                <div class="auth-prompt-card">
                    <div class="auth-prompt-icon">
                        <i class="fas fa-lock"></i>
                    </div>
                    <h2>Login Required</h2>
                    <p>Please log in to view and manage your saved PC builds.</p>
                    <div class="auth-prompt-actions">
                        <button class="btn btn-primary" onclick="window.location.href='login.html'">
                            <i class="fas fa-sign-in-alt"></i> Login
                        </button>
                        <button class="btn btn-outline" onclick="window.location.href='register.html'">
                            <i class="fas fa-user-plus"></i> Create Account
                        </button>
                    </div>
                </div>
            </div>
        `;
    return;
  }

  // Load user builds
  loadUserBuilds();
}

function loadUserBuilds() {
  const buildsContent = document.getElementById("builds-content");
  const userBuilds = getUserBuilds();

  if (userBuilds.length === 0) {
    buildsContent.innerHTML = `
            <div class="empty-builds">
                <div class="empty-builds-icon">
                    <i class="fas fa-desktop"></i>
                </div>
                <h2>No Saved Builds</h2>
                <p>You haven't saved any PC builds yet. Start building your dream PC!</p>
                <button class="btn btn-primary" onclick="window.location.href='pc-builder.html'">
                    <i class="fas fa-plus"></i> Create Your First Build
                </button>
            </div>
        `;
    return;
  }

  // Display builds
  buildsContent.innerHTML = `
        <div class="builds-grid">
            ${userBuilds
              .map(
                (build) => `
                <div class="build-card">
                    <div class="build-header">
                        <h3>${build.name}</h3>
                        <div class="build-actions">
                            <button class="btn-icon" onclick="viewBuildDetails('${
                              build.id
                            }')" title="View Details">
                                <i class="fas fa-eye"></i>
                            </button>
                            <button class="btn-icon" onclick="editBuild('${
                              build.id
                            }')" title="Edit Build">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button class="btn-icon delete" onclick="deleteBuild('${
                              build.id
                            }')" title="Delete Build">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                    
                    <div class="build-preview">
                        <div class="build-image">
                            <img src="https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=300&h=200&fit=crop" alt="${
                              build.name
                            }">
                        </div>
                        <div class="build-specs">
                            ${getBuildSpecs(build)
                              .map(
                                (spec) => `
                                <div class="spec-item">
                                    <i class="${spec.icon}"></i>
                                    <span>${spec.name}</span>
                                </div>
                            `
                              )
                              .join("")}
                        </div>
                    </div>
                    
                    <div class="build-footer">
                        <div class="build-price">
                            <span class="price">$${build.totalPrice.toFixed(
                              2
                            )}</span>
                        </div>
                        <div class="build-date">
                            <small>Updated: ${new Date(
                              build.updatedAt
                            ).toLocaleDateString()}</small>
                        </div>
                        <div class="build-actions-footer">
                            <button class="btn btn-outline btn-sm" onclick="duplicateBuild('${
                              build.id
                            }')">
                                <i class="fas fa-copy"></i> Duplicate
                            </button>
                            <button class="btn btn-primary btn-sm" onclick="addBuildToCartFromList('${
                              build.id
                            }')">
                                <i class="fas fa-shopping-cart"></i> Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            `
              )
              .join("")}
        </div>
    `;
}

function getBuildSpecs(build) {
  const specs = [];

  // Get component names
  if (build.components.cpu) {
    const cpu = builderComponents.cpu?.find(
      (c) => c.id === build.components.cpu
    );
    if (cpu)
      specs.push({
        icon: "fas fa-microchip",
        name: cpu.name.split(" ").slice(0, 3).join(" "),
      });
  }

  if (build.components.gpu) {
    const gpu = builderComponents.gpu?.find(
      (c) => c.id === build.components.gpu
    );
    if (gpu)
      specs.push({
        icon: "fas fa-tv",
        name: gpu.name.split(" ").slice(0, 3).join(" "),
      });
  }

  if (build.components.ram) {
    const ram = builderComponents.ram?.find(
      (c) => c.id === build.components.ram
    );
    if (ram)
      specs.push({ icon: "fas fa-memory", name: `${ram.capacity}GB RAM` });
  }

  if (build.components.storage) {
    const storage = builderComponents.storage?.find(
      (c) => c.id === build.components.storage
    );
    if (storage)
      specs.push({
        icon: "fas fa-hdd",
        name: `${storage.capacity}GB ${storage.type}`,
      });
  }

  return specs.slice(0, 4); // Show max 4 specs
}

function viewBuildDetails(buildId) {
  const build = getUserBuilds().find((b) => b.id === buildId);
  if (!build) return;

  const modal = document.getElementById("build-detail-modal");
  const title = document.getElementById("build-detail-title");
  const content = document.getElementById("build-detail-content");

  title.textContent = build.name;

  content.innerHTML = `
        <div class="build-detail-content">
            <div class="build-detail-header">
                <div class="build-info">
                    <h2>${build.name}</h2>
                    <div class="build-meta">
                        <span>Created: ${new Date(
                          build.createdAt
                        ).toLocaleDateString()}</span>
                        <span>Updated: ${new Date(
                          build.updatedAt
                        ).toLocaleDateString()}</span>
                        <span class="build-total">Total: $${build.totalPrice.toFixed(
                          2
                        )}</span>
                    </div>
                </div>
            </div>
            
            <div class="build-components">
                <h3>Components</h3>
                <div class="components-list">
                    ${Object.keys(build.components)
                      .map((category) => {
                        const componentId = build.components[category];
                        const component = builderComponents[category]?.find(
                          (c) => c.id === componentId
                        );
                        if (!component) return "";

                        return `
                            <div class="component-detail">
                                <div class="component-category">${category.toUpperCase()}</div>
                                <div class="component-info">
                                    <div class="component-name">${
                                      component.name
                                    }</div>
                                    <div class="component-brand">${
                                      component.brand
                                    }</div>
                                    <div class="component-price">$${
                                      component.price
                                    }</div>
                                </div>
                                <div class="component-specs">
                                    ${component.specs
                                      .map(
                                        (spec) =>
                                          `<span class="spec">${spec}</span>`
                                      )
                                      .join("")}
                                </div>
                            </div>
                        `;
                      })
                      .join("")}
                </div>
            </div>
            
            <div class="build-actions-detail">
                <button class="btn btn-outline" onclick="editBuild('${buildId}'); closeBuildDetailModal();">
                    <i class="fas fa-edit"></i> Edit Build
                </button>
                <button class="btn btn-secondary" onclick="duplicateBuild('${buildId}'); closeBuildDetailModal();">
                    <i class="fas fa-copy"></i> Duplicate
                </button>
                <button class="btn btn-primary" onclick="addBuildToCartFromList('${buildId}'); closeBuildDetailModal();">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
            </div>
        </div>
    `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeBuildDetailModal() {
  const modal = document.getElementById("build-detail-modal");
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

function editBuild(buildId) {
  const build = getUserBuilds().find((b) => b.id === buildId);
  if (!build) return;

  // Store build in session storage for editing
  sessionStorage.setItem("editingBuild", JSON.stringify(build));

  // Redirect to PC builder
  window.location.href = "pc-builder.html";
}

function duplicateBuild(buildId) {
  const build = getUserBuilds().find((b) => b.id === buildId);
  if (!build) return;

  const duplicatedBuild = {
    ...build,
    id: Date.now().toString(),
    name: `${build.name} (Copy)`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  if (saveUserBuild(duplicatedBuild)) {
    loadUserBuilds();
    showToast(
      "success",
      "Build Duplicated!",
      `${duplicatedBuild.name} has been created.`
    );
  }
}

function deleteBuild(buildId) {
  const build = getUserBuilds().find((b) => b.id === buildId);
  if (!build) return;

  if (
    confirm(
      `Are you sure you want to delete "${build.name}"? This action cannot be undone.`
    )
  ) {
    if (deleteUserBuild(buildId)) {
      loadUserBuilds();
      showToast("success", "Build Deleted", `${build.name} has been deleted.`);
    }
  }
}

function addBuildToCartFromList(buildId) {
  const build = getUserBuilds().find((b) => b.id === buildId);
  if (!build) return;

  // Create a custom build product for the cart
  const buildProduct = {
    id: "build-" + buildId,
    name: build.name,
    price: build.totalPrice,
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
    components: { ...build.components },
  };

  // Add to cart using the custom addToCart function
  if (window.addToCart) {
    window.addToCart(buildProduct.id, 1, buildProduct);
  }
}

// Check for editing build on PC builder page
if (window.location.pathname.includes("pc-builder.html")) {
  document.addEventListener("DOMContentLoaded", function () {
    const editingBuild = sessionStorage.getItem("editingBuild");
    if (editingBuild) {
      const build = JSON.parse(editingBuild);

      // Load the build into current build
      currentBuild = {
        id: build.id,
        name: build.name,
        components: { ...build.components },
        totalPrice: build.totalPrice,
        createdAt: build.createdAt,
        updatedAt: build.updatedAt,
      };

      // Update UI
      document.getElementById("build-name").value = build.name;

      // Clear session storage
      sessionStorage.removeItem("editingBuild");

      showToast(
        "info",
        "Build Loaded",
        `${build.name} is now ready for editing.`
      );
    }
  });
}
