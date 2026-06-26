document.addEventListener("DOMContentLoaded", () => {
  const productDetails = {
    core: `
      <p><strong>Luminous Core</strong> is the central hub of your smart ecosystem. 
      It uses AI to manage devices, optimize energy usage, and provide real-time analytics. 
      Features include voice control, seamless integration with IoT devices, and advanced security protocols.</p>
    `,
    vision: `
      <p><strong>Luminous Vision</strong> are AR glasses designed to merge the digital and physical worlds. 
      They offer immersive experiences, real-time translation, and interactive overlays for work and entertainment. 
      Lightweight design ensures comfort for extended use.</p>
    `,
    cloud: `
      <p><strong>Luminous Cloud</strong> provides secure, scalable cloud solutions. 
      It supports enterprise-level storage, AI-powered data insights, and robust backup systems. 
      Designed for businesses that demand reliability and flexibility.</p>
    `
  };

  document.querySelectorAll(".learn-more").forEach(button => {
    button.addEventListener("click", () => {
      const product = button.getAttribute("data-product");
      const infoBox = document.getElementById(`${product}-info`);
      
      if (infoBox.innerHTML === "") {
        infoBox.innerHTML = productDetails[product];
      } else {
        infoBox.innerHTML = ""; // toggle off if clicked again
      }
    });
  });
});
