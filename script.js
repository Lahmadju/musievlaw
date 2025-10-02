document.addEventListener("DOMContentLoaded", () => {
    const langs = document.querySelectorAll(".header__container-language .lang");

    // словарь переводов
    const translations = {
        ru: {
            Title: "Мусиев & Партнеры",
            Main: "Главная",
            About: "О нас",
            Services: "Услуги",
            Contact: "Контакты",
            Footer: "© Mусиев & партнеры, 2025. Все права защищены.",
            Terms: "Условия пользования сайтом",
            Privacy: "Политика конфиденциальности",
            Disclaimer: "Отказ от ответственности",
            TermsOfUse: "Условия пользования сайтом",
            DisclaimerIntro: "Спасибо, что посетили веб-сайт Musiev & Партнеры. Мы рады предоставить дополнительную информацию или ответить на любые вопросы о нашем бюро.",
            DisclaimerNoAdvice: "Содержимое данного веб-сайта не является юридической консультацией и не должно использоваться в качестве таковой. Musiev & Партнеры не несет ответственности за какие-либо действия или бездействие, основанные на информации, представленной на этом сайте.",
            DisclaimerNoRelation: "Использование данного веб-сайта не создает правоотношения, возникающие между адвокатом и доверителем. Мы всегда рады вам помочь, однако простой контакт с нашим бюро не означает установления такого правоотношения. Прежде чем мы сможем представлять ваши интересы, нам необходимо убедиться в отсутствии конфликта интересов. Поэтому, пожалуйста, не отправляйте конфиденциальную или связанную с делом информацию до того, как мы официально согласимся представлять вас.",
            DisclaimerContact: "Если вам необходима юридическая помощь, пожалуйста, свяжитесь с нами по телефону или в письменной форме.",
            DisclaimerCopyright: "Если не указано иное, весь контент данного веб-сайта защищен авторским правом. Воспроизведение любой части этого веб-сайта в любой форме — печатной, цифровой или иной — запрещено.",
        },
        en: {
            Title: "MUSIEV & ASSOCIATES",
            Main: "Main",
            About: "About",
            Services: "Services",
            Contact: "Contact",
            Footer: "© Musiev & Associates, 2025. All rights reserved.",
            Terms: "Terms of Use",
            Privacy: "Privacy Policy",
            Disclaimer: "Disclaimer",
            TermsOfUse: "Terms of Use",
            DisclaimerIntro: "Thank you for visiting the Musiev & Associates website. We are pleased to provide additional information or answer any questions about our firm.",
            DisclaimerNoAdvice: "The content of this website does not constitute legal advice and should not be relied upon as such. Musiev & Associates is not responsible for any actions or omissions based on the information provided on this site.",
            DisclaimerNoRelation: "Use of this website does not create an attorney-client relationship. We are always happy to assist you, but simply contacting our firm does not establish such a relationship. Before we can represent your interests, we must ensure there is no conflict of interest. Therefore, please do not send confidential or case-related information until we have formally agreed to represent you.",
            DisclaimerContact: "If you require legal assistance, please contact us by phone or in writing.",
            DisclaimerCopyright: "Unless otherwise stated, all content on this website is protected by copyright. Reproduction of any part of this website in any form — print, digital, or otherwise — is prohibited.",
        }
    };

    // проверка сохранённого выбора
    const savedLang = localStorage.getItem("lang") || "ru";
    setLanguage(savedLang);

    langs.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const lang = link.id;
            setLanguage(lang);
            localStorage.setItem("lang", lang);
        });
    });

        function setLanguage(lang) {
        langs.forEach(l => l.classList.remove("active"));
        document.getElementById(lang).classList.add("active");

        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            el.textContent = translations[lang][key] || key;
        });
    }
});
