const errorTranslations = {
  es: {
    title: "Página no encontrada.",
    body: "La dirección no existe o ha cambiado.",
    cta: "Volver al inicio",
    language: "Cambiar idioma",
    path: "/"
  },
  ca: {
    title: "Pàgina no trobada.",
    body: "L'adreça no existeix o ha canviat.",
    cta: "Tornar a l'inici",
    language: "Canviar l'idioma",
    path: "/ca/"
  },
  en: {
    title: "Page not found.",
    body: "This address does not exist or has moved.",
    cta: "Go to the homepage",
    language: "Change language",
    path: "/en/"
  }
};

const setErrorLanguage = (language) => {
  const nextLanguage = errorTranslations[language] ? language : "es";
  const content = errorTranslations[nextLanguage];

  document.documentElement.lang = nextLanguage;
  document.querySelector("[data-error-title]").textContent = content.title;
  document.querySelector("[data-error-body]").textContent = content.body;
  document.querySelector("[data-error-cta]").textContent = content.cta;
  document.querySelector("[data-error-home]").setAttribute("href", content.path);
  document.querySelector("[data-error-language]").setAttribute("aria-label", content.language);
  document.querySelectorAll("[data-error-lang]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.errorLang === nextLanguage));
  });

  try {
    window.localStorage.setItem("portfolio-language", nextLanguage);
  } catch {
    // Language switching remains available when storage is disabled.
  }
};

let initialLanguage = navigator.language.toLowerCase().split("-")[0];
try {
  initialLanguage = window.localStorage.getItem("portfolio-language") || initialLanguage;
} catch {
  // Use the browser language when storage is disabled.
}

setErrorLanguage(initialLanguage);
document.querySelectorAll("[data-error-lang]").forEach((button) => {
  button.addEventListener("click", () => setErrorLanguage(button.dataset.errorLang));
});
