  const toggleBtn = document.getElementById("toggleBtn");
  const layout = document.querySelector(".main-layout");

  toggleBtn.addEventListener("click", () => {
    layout.classList.toggle("sidebar-hidden");
  });


