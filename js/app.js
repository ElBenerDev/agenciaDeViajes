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

    // Actualiza la clase activa en los botones de idioma
    document.querySelectorAll('.btn-language').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.language === lang) {
            btn.classList.add('active');
        }
    });
}

// Función para cargar el idioma guardado o el predeterminado
function loadLanguage() {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'es';
    changeLanguage(savedLanguage);
}

// Agregar event listeners a los botones de idioma
document.addEventListener('DOMContentLoaded', () => {
    // Cargar el idioma inicial
    loadLanguage();
    
    // Agregar event listeners a los botones
    document.querySelectorAll('.btn-language').forEach(button => {
        button.addEventListener('click', (e) => {
            const language = e.target.dataset.language;
            changeLanguage(language);
        });
    });
});