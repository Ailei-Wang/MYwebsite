document.documentElement.classList.add("js");

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -4% 0px" }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const languageToggle = document.querySelector("[data-language-toggle]");
const translatableItems = document.querySelectorAll("[data-en][data-zh]");

if (languageToggle && translatableItems.length) {
  const storedLanguage = localStorage.getItem("portfolio-language") || "en";

  const setLanguage = (language) => {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    translatableItems.forEach((item) => {
      item.textContent = item.dataset[language];
    });
    languageToggle.textContent = language === "en" ? "EN / 中文" : "中文 / EN";
    languageToggle.setAttribute(
      "aria-label",
      language === "en" ? "切换到中文" : "Switch to English"
    );
    languageToggle.dataset.language = language;
    localStorage.setItem("portfolio-language", language);
  };

  setLanguage(storedLanguage);

  languageToggle.addEventListener("click", () => {
    setLanguage(languageToggle.dataset.language === "en" ? "zh" : "en");
  });
}

document.querySelectorAll("[data-current-year]").forEach((item) => {
  item.textContent = new Date().getFullYear();
});
