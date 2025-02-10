// Función para cambiar el idioma
function changeLanguage(lang) {
    // Guarda el idioma seleccionado en localStorage
    localStorage.setItem('selectedLanguage', lang);
    
    // Actualiza el atributo lang del HTML
    document.documentElement.lang = lang;
    
    // Actualiza todos los elementos traducibles
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Función para cargar el idioma guardado o el predeterminado
function loadLanguage() {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'es';
    changeLanguage(savedLanguage);
}

// Cargar el idioma cuando se carga la página
document.addEventListener('DOMContentLoaded', loadLanguage);