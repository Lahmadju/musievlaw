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
            // Условия пользования сайтом
            DisclaimerIntro: "Спасибо, что посетили веб-сайт Musiev & Партнеры. Мы рады предоставить дополнительную информацию или ответить на любые вопросы о нашем бюро.",
            DisclaimerNoAdvice: "Содержимое данного веб-сайта не является юридической консультацией и не должно использоваться в качестве таковой. Musiev & Партнеры не несет ответственности за какие-либо действия или бездействие, основанные на информации, представленной на этом сайте.",
            DisclaimerNoRelation: "Использование данного веб-сайта не создает правоотношения, возникающие между адвокатом и доверителем. Мы всегда рады вам помочь, однако простой контакт с нашим бюро не означает установления такого правоотношения. Прежде чем мы сможем представлять ваши интересы, нам необходимо убедиться в отсутствии конфликта интересов. Поэтому, пожалуйста, не отправляйте конфиденциальную или связанную с делом информацию до того, как мы официально согласимся представлять вас.",
            DisclaimerContact: "Если вам необходима юридическая помощь, пожалуйста, свяжитесь с нами по телефону или в письменной форме.",
            DisclaimerCopyright: "Если не указано иное, весь контент данного веб-сайта защищен авторским правом. Воспроизведение любой части этого веб-сайта в любой форме — печатной, цифровой или иной — запрещено.",
            // Политика конфиденциальности
            "Privacy1": "1. Общие положения", 
            "Privacy1.1": "1.1. Настоящая Политика конфиденциальности (далее – «Политика») разработана в соответствии с требованиями Федерального закона РФ от 27.07.2006 № 152-ФЗ «О персональных данных» и иных нормативно-правовых актов, регулирующих обработку и защиту персональных данных.", 
            "Privacy1.2": "1.2. Политика определяет порядок обработки и защиты персональных данных пользователей (далее – «Пользователь») веб-сайта https://www.musiev.com/ (далее – «Сайт»).", 
            "Privacy1.3": "1.3. Использование Сайта означает согласие Пользователя с условиями настоящей Политики.", 
            "Privacy2": "2. Обрабатываемые данные", 
            "Privacy2.1": "2.1. Оператор обрабатывает персональные данные Пользователей, включая, но не ограничиваясь: ФИО; Контактные данные (номер телефона, адрес электронной почты); IP-адрес, информация о браузере и устройстве; Данные о местоположении (при необходимости); Иные данные, предоставленные Пользователем добровольно.", 
            "Privacy2.2": "2.2. Оператор не собирает специальные категории персональных данных (например, данные о здоровье, расовой или этнической принадлежности и пр.), если их обработка не требуется по закону.", 
            "Privacy3": "3. Цели обработки персональных данных", 
            "Privacy3.1": "3.1. Оператор обрабатывает персональные данные для следующих целей: Идентификация Пользователя; Обратная связь с Пользователем; Улучшение работы Сайта, анализ поведения Пользователей; Направление рекламных и информационных сообщений при наличии согласия Пользователя; Соблюдение требований законодательства.", 
            "Privacy4": "4. Основания обработки персональных данных", 
            "Privacy4.1": "4.1. Обработка персональных данных осуществляется на следующих основаниях: Согласие Пользователя на обработку данных; Выполнение договора с Пользователем; Выполнение обязанностей Оператора по закону.", 
            "Privacy5": "5. Передача данных третьим лицам", 
            "Privacy5.1": "5.1. Оператор может передавать персональные данные третьим лицам в следующих случаях: Если это необходимо для предоставления услуг Пользователю; При привлечении третьих лиц для исполнения обязательств Оператора (например, хостинг-провайдеры, платежные системы).", 
            "Privacy6": "6. Хранение и защита данных", 
            "Privacy6.1": "6.1. Оператор принимает все необходимые меры для защиты персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения.",  
            "Privacy7": "7. Права Пользователей", 
            "Privacy7.1": "7.1. Пользователь имеет право: Запросить информацию о своих персональных данных и порядке их обработки; Требовать внесения изменений в свои данные; Отозвать согласие на обработку персональных данных; Требовать удаления своих данных, если их обработка более не требуется.", 
            "Privacy8": "8. Использование файлов cookie", 
            "Privacy8.1": "8.1. Сайт использует файлы cookie для улучшения работы и удобства Пользователей.", 
            "Privacy8.2": "8.2. Пользователь может изменить настройки браузера для отключения cookie, но это может повлиять на функциональность Сайта.", 
            "Privacy9": "9. Изменения Политики", 
            "Privacy9.1": "9.1. Оператор вправе вносить изменения в Политику. Актуальная версия размещается на Сайте и вступает в силу с момента публикации.",
            // Отказ от ответственности
            "WelcomeMessage": "Благодарим вас за посещение сайта Мусиев и Партнеры. Мы рады предоставить дополнительную информацию или ответить на любые вопросы о нашей фирме.",
            "DisclaimerMessage": "Содержание этого сайта не предназначено для использования в качестве юридической консультации и не должно использоваться для этой цели. Мусиев и Партнеры не несет ответственности за любые действия, предпринятые или не предпринятые на основе информации, представленной здесь.",
            "NoAttorneyClientRelation": "Использование этого сайта не устанавливает отношений адвокат-клиент с Мусиев и Партнеры. Хотя мы приветствуем запросы, простое обращение в нашу фирму не создает таких отношений. Прежде чем мы сможем представлять клиента, мы должны убедиться в отсутствии конфликта интересов. Поэтому, пожалуйста, не отправляйте конфиденциальную или связанную с делом информацию, пока мы официально не согласились представлять вас.",
            "ContactForRepresentation": "Если вы заинтересованы в юридическом представительстве, пожалуйста, свяжитесь с нашим офисом по телефону или в письменной форме.",
            "CopyrightNotice": "Если не указано иное, все содержание этого сайта защищено авторским правом Мусиев и Партнеры.",
            
            "AcceptSubTitle": "Согласие на обработку персональных данных",
            "ConsentStatement": "Отправляя форму на этом сайте, я настоящим свободно, добровольно и в своих интересах даю согласие на обработку моих персональных данных, в том числе с использованием средств автоматизации и/или без таковых, владельцу данного сайта (далее – «Оператор»).",
            "ConsentConfirmation": "Я подтверждаю, что ознакомился и согласен со следующим:",
            
            "DataSubTitle": "Объем обрабатываемых персональных данных:",
            "DataCollected": "Имя, адрес электронной почты, номер телефона, IP-адрес, данные cookie, информация о моих действиях на сайте и любая другая информация, добровольно предоставленная мной при заполнении форм на сайте.",
            
            "ProcessingSubTitle": "Цели обработки персональных данных:",
            "ProcessingPurposes1": "– Обработка запросов и предоставление обратной связи;",
            "ProcessingPurposes2": "– Предоставление доступа к функциональности сайта;",
            "ProcessingPurposes3": "– Улучшение пользовательского опыта;",
            "ProcessingPurposes4": "– Выполнение обязательств Оператора перед пользователями;",
            "ProcessingPurposes5": "– Осуществление маркетинговой, аналитической и статистической деятельности, если это разрешено применимым законодательством.",

            "LegalBasisSubTitle": "Правовые основания для обработки:",
            "LegalBasis1": "– В соответствии с Федеральным законом № 152-ФЗ от 27 июля 2006 года («О персональных данных») Российской Федерации;",
            
            "ThirdPartyDisclosureSubTitle": "Раскрытие третьим лицам:",
            "ThirdPartyDisclosure": "Персональные данные могут быть переданы третьим лицам (в том числе за пределами страны моего проживания), если это необходимо для достижения указанных целей и в соответствии с требованиями законодательства, включая использование Стандартных договорных условий при передаче данных в другие юрисдикции.",
            
            "DataRetentionSubTitle": "Срок хранения данных:",
            "DataRetention": "Персональные данные будут храниться до достижения целей обработки или до отзыва мною согласия, если иное не предусмотрено законом.",
            
            "UserRightsSubTitle": "Мои права:",
            "UserRights1": "– Право на доступ, исправление или удаление моих данных;",
            "UserRights2": "– Право на ограничение или возражение против обработки;",
            "UserRights3": "– Право отозвать свое согласие в любое время, уведомив Оператора;",
            "UserRights4": "– Право подать жалобу в компетентный надзорный орган.",
            
            "WithdrawalSubTitle": "Отзыв согласия:",
            "WithdrawalStatement": "Я понимаю, что могу отозвать это согласие в любое время, отправив запрос с использованием контактных данных Оператора, и что такой отзыв не влияет на законность обработки до отзыва.",
            
            "FinalConsentStatement": "Нажимая кнопку «Отправить» (или эквивалент), я подтверждаю, что прочитал и согласен с условиями обработки персональных данных и настоящим даю свое согласие.",
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
            "Privacy1": "1. General Provisions", 
            "Privacy1.1": "1.1. This Privacy Policy (hereinafter – the “Policy”) is developed in accordance with the Federal Law of the Russian Federation No. 152-FZ of 27.07.2006 'On Personal Data' and other applicable regulations.", 
            "Privacy1.2": "1.2. The Policy defines the procedure for processing and protecting personal data of users (hereinafter – 'User') of the website https://www.musiev.com/ (hereinafter – 'Website').", 
            "Privacy1.3": "1.3. Use of the Website implies the User’s consent to the terms of this Policy.", 
            "Privacy2": "2. Processed Data", 
            "Privacy2.1": "2.1. The Operator processes Users’ personal data, including but not limited to: Full name; Contact details (phone, email); IP address, browser and device info; Location data (if necessary); Other voluntarily provided data.", 
            "Privacy2.2": "2.2. The Operator does not collect special categories of personal data (e.g., health, race, ethnicity, etc.) unless required by law.", 
            "Privacy3": "3. Purposes of Processing Personal Data", 
            "Privacy3.1": "3.1. The Operator processes personal data for the following purposes: User identification; Feedback; Improving the Website and analyzing user behavior; Sending marketing and informational messages with consent; Compliance with legal requirements.", 
            "Privacy4": "4. Legal Basis for Data Processing", 
            "Privacy4.1": "4.1. Personal data is processed on the basis of: User consent; Contract performance; Legal obligations.", 
            "Privacy5": "5. Data Transfer to Third Parties", 
            "Privacy5.1": "5.1. The Operator may transfer personal data to third parties in the following cases: If necessary to provide services to the User; When engaging third parties to fulfill the Operator’s obligations (e.g., hosting providers, payment systems).", 
            "Privacy6": "6. Data Storage and Protection", 
            "Privacy6.1": "6.1. The Operator takes all necessary measures to protect personal data from unauthorized access, modification, disclosure, or destruction.", 
            "Privacy7": "7. User Rights", 
            "Privacy7.1": "7.1. The User has the right to: Request information about their personal data and its processing; Require corrections; Withdraw consent; Request deletion if processing is no longer necessary.", 
            "Privacy8": "8. Use of Cookies", 
            "Privacy8.1": "8.1. The Website uses cookies to improve performance and user experience.", 
            "Privacy8.2": "8.2. The User may disable cookies in their browser settings, but this may affect Website functionality.", 
            "Privacy9": "9. Changes to the Policy", 
            "Privacy9.1": "9.1. The Operator may amend this Policy. The current version is published on the Website and is effective from the date of publication.",
            // Отказ от ответственности
            "WelcomeMessage": "Thank you for visiting Musiev & Associates website. We are happy to provide additional information or address any questions you may have about our firm.",
            "DisclaimerMessage": "The content on this website is not intended to serve as legal advice and should not be relied upon for that purpose. Musiev & Associates is not liable for any actions taken or not taken based on the information presented here.",
            "NoAttorneyClientRelation": "Using this website does not establish an attorney-client relationship with Musiev & Associates. While we welcome inquiries, simply reaching out to our firm does not create such a relationship. Before we can represent a client, we must ensure there are no conflicts of interest. Therefore, please do not send confidential or case-related information until we have formally agreed to represent you.",
            "ContactForRepresentation": "If you are interested in legal representation, please contact our office by phone or in writing.",
            "CopyrightNotice": "Unless otherwise indicated, all content on this website is copyrighted by Musiev & Associates.",
            
            "AcceptSubTitle": "Consent to the processing of personal data",
            "ConsentStatement": "By submitting the form on this website, I hereby freely, voluntarily, and in my own interest give my consent to the processing of my personal data, including by automated means and/or without such means, by the owner of this website (hereinafter referred to as the «Operator»).",
            "ConsentConfirmation": "I confirm that I have read and agree to the following:",
            
            "DataSubTitle": "Scope of personal data processed:",
            "DataCollected": "Name, email address, phone number, IP address, cookie data, information about my actions on the website, and any other information voluntarily provided by me when filling out the forms on the site.",
            
            "ProcessingSubTitle": "Purposes of personal data processing:",
            "ProcessingPurposes1": "– To process inquiries and provide feedback;",
            "ProcessingPurposes2": "– To provide access to website functionality;",
            "ProcessingPurposes3": "– To improve user experience;",
            "ProcessingPurposes4": "– To fulfill the Operator's obligations to users;",
            "ProcessingPurposes5": "– To carry out marketing, analytics, and statistical activities, if permitted by applicable law.",

            "LegalBasisSubTitle": "Legal grounds for processing:",
            "LegalBasis1": "– In accordance with Federal Law No. 152-FZ of July 27, 2006 («On Personal Data») of the Russian Federation;",
            
            "ThirdPartyDisclosureSubTitle": "Disclosure to third parties:",
            "ThirdPartyDisclosure": "Personal data may be shared with third parties (including outside the country of my residence) if necessary to achieve the stated purposes and in compliance with legal requirements, including the use of Standard Contractual Clauses when transferring data to other jurisdictions.",
            
            "DataRetentionSubTitle": "Data retention period:",
            "DataRetention": "Personal data will be stored until the purposes of processing are fulfilled or until I withdraw my consent, unless otherwise required by law.",
            
            "UserRightsSubTitle": "My rights:",
            "UserRights1": "– The right to access, correct, or delete my data;",
            "UserRights2": "– The right to restrict or object to processing;",
            "UserRights3": "– The right to withdraw my consent at any time by notifying the Operator;",
            "UserRights4": "– The right to lodge a complaint with the competent supervisory authority.",
            
            "WithdrawalSubTitle": "Withdrawal of consent:",
            "WithdrawalStatement": "I understand that I may withdraw this consent at any time by submitting a request using the Operator's contact details, and that such withdrawal does not affect the legality of processing prior to the withdrawal.",
            
            "FinalConsentStatement": "By clicking the «Submit» button (or equivalent), I confirm that I have read and agree to the terms of personal data processing and hereby give my consent.",
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
