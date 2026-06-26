document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const container = document.querySelector("#order-form .container");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const product = document.getElementById("product").value;
    const quantity = document.getElementById("quantity").value;
    const payment = document.querySelector("input[name='payment']:checked")?.value;

    // Remove any old message
    const oldMsg = document.getElementById("confirmation");
    if (oldMsg) oldMsg.remove();

    // Validation
    if (!name || !product || !quantity || !payment) {
      const errorBox = document.createElement("div");
      errorBox.id = "confirmation";
      errorBox.className = "error-box";
      errorBox.textContent = "⚠️ Please complete all required fields before submitting.";
      container.appendChild(errorBox);
      return;
    }

    // Success message
    const successBox = document.createElement("div");
    successBox.id = "confirmation";
    successBox.className = "success-box";
    successBox.innerHTML = `
      ✅ Thank you, <strong>${name}</strong>!<br>
      Your order for <strong>${quantity} x ${product}</strong> has been received.<br>
      Payment Method: <strong>${payment}</strong><br>
      We’ll send confirmation to your email shortly.
    `;
    container.appendChild(successBox);

    // Uncomment when backend is ready:
    // this.submit();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form form");
  const container = document.querySelector(".contact-form");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Remove old confirmation if exists
    const oldMsg = document.getElementById("confirmation");
    if (oldMsg) oldMsg.remove();

    // Validation
    if (!name || !email || !message) {
      const errorBox = document.createElement("div");
      errorBox.id = "confirmation";
      errorBox.className = "error-box";
      errorBox.textContent = "⚠️ Please complete all fields before sending.";
      container.appendChild(errorBox);
      return;
    }

    // Success message
    const successBox = document.createElement("div");
    successBox.id = "confirmation";
    successBox.className = "success-box";
    successBox.innerHTML = `
      ✅ Thank you, <strong>${name}</strong>!<br>
      Your message has been sent successfully.<br>
      We’ll reply to <strong>${email}</strong> as soon as possible.
    `;
    container.appendChild(successBox);

    // Uncomment when backend is ready:
    // this.submit();
  });
});
