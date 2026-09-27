document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const toggle = document.querySelector(".theme-toggle");
  const icon = document.querySelector(".theme-icon");
  const logoSwitches = document.querySelectorAll(".logo-switch");

  const savedTheme = localStorage.getItem("portfolio-theme");
  const initialTheme = savedTheme === "light" ? "light" : "dark";

  const setTheme = (theme) => {
    root.dataset.theme = theme;
    const isLight = theme === "light";

    if (toggle) {
      toggle.setAttribute("aria-pressed", String(isLight));
      toggle.setAttribute("aria-label", isLight ? "Switch to dark theme" : "Switch to light theme");
    }

    if (icon) icon.textContent = isLight ? "☾" : "☼";

    logoSwitches.forEach((logo) => {
      logo.classList.remove("is-changing");
      void logo.offsetWidth;
      logo.classList.add("is-changing");
      window.setTimeout(() => logo.classList.remove("is-changing"), 420);
    });
  };

  setTheme(initialTheme);

  toggle?.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "light" ? "dark" : "light";
    localStorage.setItem("portfolio-theme", nextTheme);
    setTheme(nextTheme);
  });
});
