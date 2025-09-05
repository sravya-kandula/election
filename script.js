document.addEventListener("DOMContentLoaded", () => {
  const profileMenu = document.querySelector(".profile-menu");
  const profileDropdown = profileMenu.querySelector(".dropdown");

  const langMenu = document.querySelector(".language-menu");
  const langDropdown = langMenu.querySelector(".lang-dropdown");
  const langLabel = document.querySelector(".lang-label");

  const hideAll = () => {
    profileDropdown.style.display = "none";
    langDropdown.style.display = "none";
  };

  // Toggle Profile dropdown
  profileMenu.addEventListener("click", (e) => {
    e.stopPropagation();
    langDropdown.style.display = "none"; // close other
    profileDropdown.style.display =
      profileDropdown.style.display === "block" ? "none" : "block";
  });

  // Toggle Language dropdown
  langMenu.addEventListener("click", (e) => {
    e.stopPropagation();
    profileDropdown.style.display = "none"; // close other
    langDropdown.style.display =
      langDropdown.style.display === "block" ? "none" : "block";
  });

  // Update label when language is picked
  langDropdown.addEventListener("click", (e) => {
    const li = e.target.closest("li");
    if (!li) return;
    langLabel.innerHTML = `Language: ${li.textContent} &#9662;`;
    langDropdown.style.display = "none";
  });

  // Close when clicking outside
  window.addEventListener("click", hideAll);
});
