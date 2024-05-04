// translation.js

const TRANSLATION = [
    // ... (your translation logic)
];

let language = "en";
function toggleLanguage() {
    language = (language == "en") ? "hi" : "en";
    translateTo(language);
}

function translateTo(lang) {
    for (let o of TRANSLATION)
        (get(o.selector) || {}).innerText = o[lang];
}
