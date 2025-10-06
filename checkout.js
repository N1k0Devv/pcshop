// Checkout functionality
let currentStep = 1;
let orderData = {
  shipping: {},
  payment: {},
  items: [],
  totals: {},
};

// Initialize checkout
document.addEventListener("DOMContentLoaded", function () {
  initializeCheckout();
  setupEventListeners();
  loadCartItems();
  calculateTotals();
});

// Initialize checkout process
function initializeCheckout() {
  // Check if user is logged in and pre-fill information
  const currentUser = getCurrentUser();
  if (currentUser) {
    document.getElementById("firstName").value = currentUser.firstName || "";
    document.getElementById("lastName").value = currentUser.lastName || "";
    document.getElementById("email").value = currentUser.email || "";
  }

  // Set up form validation
  setupFormValidation();

  // Initialize payment method handlers
  setupPaymentMethods();

  // Update cart count
  updateCartCount();
}

// Setup event listeners
function setupEventListeners() {
  // Shipping options change
  document.querySelectorAll('input[name="shipping"]').forEach((radio) => {
    radio.addEventListener("change", calculateTotals);
  });

  // Payment method change
  document.querySelectorAll('input[name="paymentMethod"]').forEach((radio) => {
    radio.addEventListener("change", handlePaymentMethodChange);
  });

  // Card number formatting
  const cardNumberInput = document.getElementById("cardNumber");
  if (cardNumberInput) {
    cardNumberInput.addEventListener("input", formatCardNumber);
  }

  // Expiry date formatting
  const expiryInput = document.getElementById("expiryDate");
  if (expiryInput) {
    expiryInput.addEventListener("input", formatExpiryDate);
  }

  // CVV input restriction
  const cvvInput = document.getElementById("cvv");
  if (cvvInput) {
    cvvInput.addEventListener("input", function (e) {
      e.target.value = e.target.value.replace(/\D/g, "");
    });
  }
}

// Setup form validation
function setupFormValidation() {
  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
    });
  });
}

// Setup payment methods
function setupPaymentMethods() {
  const paymentMethods = document.querySelectorAll(
    'input[name="paymentMethod"]'
  );
  paymentMethods.forEach((method) => {
    method.addEventListener("change", handlePaymentMethodChange);
  });
}

// Handle payment method change
function handlePaymentMethodChange(e) {
  const cardDetails = document.getElementById("card-details");
  if (e.target.value === "card") {
    cardDetails.style.display = "block";
    // Make card fields required
    document.getElementById("cardNumber").required = true;
    document.getElementById("expiryDate").required = true;
    document.getElementById("cvv").required = true;
    document.getElementById("cardName").required = true;
  } else {
    cardDetails.style.display = "none";
    // Remove required attribute from card fields
    document.getElementById("cardNumber").required = false;
    document.getElementById("expiryDate").required = false;
    document.getElementById("cvv").required = false;
    document.getElementById("cardName").required = false;
  }
}

// Format card number input
function formatCardNumber(e) {
  let value = e.target.value.replace(/\s/g, "").replace(/\D/g, "");
  let formattedValue = value.match(/.{1,4}/g)?.join(" ") || value;
  if (formattedValue !== e.target.value) {
    e.target.value = formattedValue;
  }
}

// Format expiry date input
function formatExpiryDate(e) {
  let value = e.target.value.replace(/\D/g, "");
  if (value.length >= 2) {
    value = value.substring(0, 2) + "/" + value.substring(2, 4);
  }
  e.target.value = value;
}

// Load cart items for checkout
function loadCartItems() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const checkoutItems = document.getElementById("checkout-items");

  if (cart.length === 0) {
    checkoutItems.innerHTML = `
            <div class="empty-checkout">
                <i class="fas fa-shopping-cart"></i>
                <h3>Your cart is empty</h3>
                <p>Add some items to your cart before checkout</p>
                <button class="btn btn-primary" onclick="window.location.href='index.html#products'">
                    Continue Shopping
                </button>
            </div>
        `;
    return;
  }

  checkoutItems.innerHTML = cart
    .map(
      (item) => `
        <div class="checkout-item">
            <img src="${item.image}" alt="${item.name}" class="item-image">
            <div class="item-info">
                <h4>${item.name}</h4>
                <p>${item.brand}</p>
                <div class="item-quantity">Qty: ${item.quantity}</div>
            </div>
            <div class="item-total">$${(item.price * item.quantity).toFixed(
              2
            )}</div>
        </div>
    `
    )
    .join("");

  orderData.items = cart;
}

// Calculate totals
function calculateTotals() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Get shipping cost
  const selectedShipping = document.querySelector(
    'input[name="shipping"]:checked'
  );
  let shippingCost = 0;
  let shippingText = "Free";

  if (selectedShipping) {
    switch (selectedShipping.value) {
      case "express":
        shippingCost = 15.99;
        shippingText = "$15.99";
        break;
      case "overnight":
        shippingCost = 29.99;
        shippingText = "$29.99";
        break;
      default:
        shippingCost = 0;
        shippingText = "Free";
    }
  }

  const tax = (subtotal + shippingCost) * 0.08; // 8% tax
  const total = subtotal + shippingCost + tax;

  // Update display
  document.getElementById(
    "checkout-subtotal"
  ).textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById("checkout-shipping").textContent = shippingText;
  document.getElementById("checkout-tax").textContent = `$${tax.toFixed(2)}`;
  document.getElementById("checkout-total").textContent = `$${total.toFixed(
    2
  )}`;

  // Store totals
  orderData.totals = {
    subtotal: subtotal,
    shipping: shippingCost,
    tax: tax,
    total: total,
  };
}

// Navigate to next step
function nextStep() {
  if (validateCurrentStep()) {
    saveCurrentStepData();
    currentStep++;
    showStep(currentStep);

    if (currentStep === 3) {
      populateReviewSection();
    }
  }
}

// Navigate to previous step
function prevStep() {
  currentStep--;
  showStep(currentStep);
}

// Go to specific step
function goToStep(step) {
  currentStep = step;
  showStep(currentStep);
}

// Show specific step
function showStep(step) {
  // Hide all steps
  document.querySelectorAll(".checkout-step").forEach((stepEl) => {
    stepEl.classList.remove("active");
  });

  // Show current step
  document.getElementById(`step-${step}`).classList.add("active");

  // Update step indicators
  document.querySelectorAll(".step").forEach((stepEl, index) => {
    stepEl.classList.remove("active", "completed");
    if (index + 1 < step) {
      stepEl.classList.add("completed");
    } else if (index + 1 === step) {
      stepEl.classList.add("active");
    }
  });

  // Scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Validate current step
function validateCurrentStep() {
  const currentStepEl = document.getElementById(`step-${currentStep}`);
  const form = currentStepEl.querySelector("form");

  if (!form) return true;

  const requiredFields = form.querySelectorAll("[required]");
  let isValid = true;

  requiredFields.forEach((field) => {
    if (!field.value.trim()) {
      field.classList.add("error");
      isValid = false;
    } else {
      field.classList.remove("error");
    }
  });

  // Additional validation for specific steps
  if (currentStep === 1) {
    // Validate email format
    const email = document.getElementById("email");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
      email.classList.add("error");
      isValid = false;
      showToast("error", "Invalid Email", "Please enter a valid email address");
    }

    // Validate phone format
    const phone = document.getElementById("phone");
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!phoneRegex.test(phone.value.replace(/\D/g, ""))) {
      phone.classList.add("error");
      isValid = false;
      showToast("error", "Invalid Phone", "Please enter a valid phone number");
    }

    // Validate ZIP code
    const zipCode = document.getElementById("zipCode");
    const zipRegex = /^\d{5}(-\d{4})?$/;
    if (!zipRegex.test(zipCode.value)) {
      zipCode.classList.add("error");
      isValid = false;
      showToast("error", "Invalid ZIP Code", "Please enter a valid ZIP code");
    }
  }

  if (currentStep === 2) {
    const paymentMethod = document.querySelector(
      'input[name="paymentMethod"]:checked'
    ).value;

    if (paymentMethod === "card") {
      // Validate card number
      const cardNumber = document.getElementById("cardNumber");
      const cardNumberClean = cardNumber.value.replace(/\s/g, "");
      if (cardNumberClean.length < 13 || cardNumberClean.length > 19) {
        cardNumber.classList.add("error");
        isValid = false;
        showToast(
          "error",
          "Invalid Card Number",
          "Please enter a valid card number"
        );
      }

      // Validate expiry date
      const expiryDate = document.getElementById("expiryDate");
      const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
      if (!expiryRegex.test(expiryDate.value)) {
        expiryDate.classList.add("error");
        isValid = false;
        showToast(
          "error",
          "Invalid Expiry Date",
          "Please enter a valid expiry date (MM/YY)"
        );
      }

      // Validate CVV
      const cvv = document.getElementById("cvv");
      if (cvv.value.length < 3 || cvv.value.length > 4) {
        cvv.classList.add("error");
        isValid = false;
        showToast("error", "Invalid CVV", "Please enter a valid CVV");
      }
    }
  }

  if (!isValid) {
    showToast(
      "error",
      "Please Fix Errors",
      "Please correct the highlighted fields before continuing"
    );
  }

  return isValid;
}

// Save current step data
function saveCurrentStepData() {
  if (currentStep === 1) {
    // Save shipping information
    const form = document.getElementById("shipping-form");
    const formData = new FormData(form);
    orderData.shipping = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      address: formData.get("address"),
      address2: formData.get("address2"),
      city: formData.get("city"),
      state: formData.get("state"),
      zipCode: formData.get("zipCode"),
      shippingOption: formData.get("shipping"),
    };
  } else if (currentStep === 2) {
    // Save payment information
    const form = document.getElementById("payment-form");
    const formData = new FormData(form);
    const paymentMethod = formData.get("paymentMethod");

    orderData.payment = {
      method: paymentMethod,
      sameAsShipping: formData.get("sameAsShipping") === "on",
    };

    if (paymentMethod === "card") {
      orderData.payment.card = {
        number: formData.get("cardNumber"),
        expiry: formData.get("expiryDate"),
        cvv: formData.get("cvv"),
        name: formData.get("cardName"),
      };
    }

    if (!orderData.payment.sameAsShipping) {
      orderData.payment.billingAddress = {
        address: formData.get("billingAddress"),
        city: formData.get("billingCity"),
        state: formData.get("billingState"),
        zipCode: formData.get("billingZip"),
      };
    }
  }
}

// Populate review section
function populateReviewSection() {
  // Populate shipping review
  const shippingReview = document.getElementById("review-shipping");
  const shipping = orderData.shipping;
  const shippingOptions = {
    standard: "Standard Shipping (5-7 business days) - Free",
    express: "Express Shipping (2-3 business days) - $15.99",
    overnight: "Overnight Shipping (Next business day) - $29.99",
  };

  shippingReview.innerHTML = `
        <div class="review-item">
            <strong>${shipping.firstName} ${shipping.lastName}</strong><br>
            ${shipping.address}${
    shipping.address2 ? ", " + shipping.address2 : ""
  }<br>
            ${shipping.city}, ${shipping.state} ${shipping.zipCode}<br>
            <strong>Phone:</strong> ${shipping.phone}<br>
            <strong>Email:</strong> ${shipping.email}<br>
            <strong>Shipping:</strong> ${
              shippingOptions[shipping.shippingOption]
            }
        </div>
    `;

  // Populate payment review
  const paymentReview = document.getElementById("review-payment");
  const payment = orderData.payment;
  let paymentText = "";

  switch (payment.method) {
    case "card":
      const cardNumber = payment.card.number;
      const maskedCard = "**** **** **** " + cardNumber.slice(-4);
      paymentText = `Credit Card ending in ${cardNumber.slice(-4)}<br>
                         ${payment.card.name}<br>
                         Expires: ${payment.card.expiry}`;
      break;
    case "paypal":
      paymentText = "PayPal";
      break;
    case "apple":
      paymentText = "Apple Pay";
      break;
    case "google":
      paymentText = "Google Pay";
      break;
  }

  paymentReview.innerHTML = `<div class="review-item">${paymentText}</div>`;

  // Populate items review
  const itemsReview = document.getElementById("review-items");
  itemsReview.innerHTML = orderData.items
    .map(
      (item) => `
        <div class="review-item-row">
            <img src="${item.image}" alt="${
        item.name
      }" class="review-item-image">
            <div class="review-item-info">
                <strong>${item.name}</strong><br>
                ${item.brand}<br>
                Quantity: ${item.quantity}
            </div>
            <div class="review-item-price">$${(
              item.price * item.quantity
            ).toFixed(2)}</div>
        </div>
    `
    )
    .join("");
}

// Toggle billing address visibility
function toggleBillingAddress() {
  const checkbox = document.getElementById("sameAsShipping");
  const billingAddress = document.getElementById("billing-address");

  if (checkbox.checked) {
    billingAddress.style.display = "none";
    // Remove required attributes
    billingAddress.querySelectorAll("input, select").forEach((field) => {
      field.required = false;
    });
  } else {
    billingAddress.style.display = "block";
    // Add required attributes
    billingAddress.querySelectorAll("input, select").forEach((field) => {
      if (field.id !== "billingAddress2") {
        // Address line 2 is optional
        field.required = true;
      }
    });
  }
}

// Place order
function placeOrder() {
  // Show loading state
  const placeOrderBtn = document.querySelector(".btn-primary");
  const originalText = placeOrderBtn.innerHTML;
  placeOrderBtn.innerHTML =
    '<i class="fas fa-spinner fa-spin"></i> Processing...';
  placeOrderBtn.disabled = true;

  // Simulate order processing
  setTimeout(() => {
    // Generate order number
    const orderNumber = "TS" + Date.now().toString().slice(-8);
    document.getElementById("order-number").textContent = orderNumber;
    document.getElementById("confirmation-email").textContent =
      orderData.shipping.email;

    // Save order to localStorage (in real app, this would be sent to server)
    const orders = JSON.parse(localStorage.getItem("orders") || "[]");
    const newOrder = {
      orderNumber: orderNumber,
      date: new Date().toISOString(),
      ...orderData,
      status: "confirmed",
    };
    orders.push(newOrder);
    localStorage.setItem("orders", JSON.stringify(orders));

    // Clear cart
    localStorage.removeItem("cart");
    updateCartCount();

    // Show confirmation step
    currentStep = 4;
    showStep(currentStep);

    // Show success toast
    showToast(
      "success",
      "Order Placed!",
      `Order ${orderNumber} has been confirmed`
    );

    // Reset button
    placeOrderBtn.innerHTML = originalText;
    placeOrderBtn.disabled = false;
  }, 3000); // 3 second delay to simulate processing
}

// Initialize checkout when page loads
if (window.location.pathname.includes("checkout.html")) {
  // Check if cart is empty and redirect if necessary
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  if (cart.length === 0) {
    showToast(
      "info",
      "Empty Cart",
      "Your cart is empty. Redirecting to products..."
    );
    setTimeout(() => {
      window.location.href = "index.html#products";
    }, 2000);
  }
}
