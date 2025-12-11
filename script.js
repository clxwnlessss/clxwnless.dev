// --- 1. Словник перекладів ---
const translations = {
    'uk': {
        // Загальне
        'page_title': 'clxwnless.dev - Портфоліо та Магазин',
        'nav_about': 'Про мене',
        'nav_store': 'Магазин',
        'lang_button': 'Мова',

        // About/Hero
        'hero_title': 'Привіт, я clxwnless',
        'hero_subtitle': 'Developer | Discord & Telegram Bot Creator | Student',
        'btn_my_bio': 'МОЄ БІО',
        'bio_title': '👋 Трохи про мене',
        'bio_text_1': 'Всім привіт, я Даня, мені 17 років. Я створюю складних та функціональних ботів для Discord і Telegram, а також розробляю сайти. Наразі навчаюсь в університеті, але весь вільний час присвячую коду.',
        'bio_text_2': 'Мій підхід — це чистий код, швидкість та увага до деталей. Якщо тобі потрібен інструмент для автоматизації спільноти або бізнесу — ти за адресою.',
        'btn_show_projects': '⬇ ПОКАЗАТИ ПРОЕКТИ',
        
        // Категорії
        'cat_discord': 'Боти',
        'cat_telegram': 'Боти',
        'cat_web': 'Сайти',

        // Проекти Discord
        'proj_support_title': '🤖 Support Bot',
        'proj_support_desc': 'Бот для ідентифікації користувачів. Команди для вибору гендеру (Хлопець/Дівчина), автоматичний бан за твінки та система перевірки.',
        'proj_mod_title': '🛡️ Moderation System',
        'proj_mod_desc': 'Потужна модерація з кнопками. Виявлення твінків, повна інформація про акаунт (дата створення, ролі), логи дій.',
        'proj_finder_title': '❤️ Finder (Dating)',
        'proj_finder_desc': 'Бот для знайомств. Гарні ембеди, створення анкети через модальне вікно. Кнопка "Написати" перекидає в профіль людини.',
        'proj_music_title': '🎵 DJ Music',
        'proj_music_desc': 'Музичний бот. Команда /play + посилання. Підтримка YouTube треків до 5 хвилин. Висока якість звуку.',

        // Проекти Telegram
        'proj_shop_title': '👕 ClothShop',
        'proj_shop_desc': 'Повноцінний магазин одягу в Telegram. Меню з кнопками, каталог товарів, система відгуків та форма оформлення замовлення.',
        
        // Проекти Web
        'proj_first_title': '🌐 My First Site',
        'proj_first_desc': 'Цей сайт-портфоліо є моєю першою публічною веб-розробкою. Розділ буде оновлюватися новими проектами згодом.',
        
        // Магазин - Загальне
        'store_main_title': 'Магазин Послуг',
        'store_subtitle': 'Готові рішення для вашого сервера чи бізнесу',
        'btn_buy': 'Купити',
        'btn_order': 'Замовити',

        // Магазин - Позиції
        'store_support_title': 'Support Bot',
        'store_support_desc': 'Ідентифікація, гендери, анти-твінк система.',
        'store_mod_title': 'Moderation Bot',
        'store_mod_desc': 'Кнопкова модерація, логи, інфо про акаунт.',
        'store_finder_title': 'Finder (Dating)',
        'store_finder_desc': 'Система анкет, знайомства, модальні вікна.',
        'store_music_title': 'DJ Music Bot',
        'store_music_desc': 'Музика у войсі, проста команда /play.',
        'store_shop_title': 'ClothShop (TG)',
        'store_shop_desc': 'Магазин в Телеграм під ключ з адмінкою.',
        'store_web_title': 'Web Site',
        'store_web_desc': 'Сайт-візитка або портфоліо (HTML/CSS/JS).',
        'store_web_price': 'Від 500 ₴',

        // Індивідуальне замовлення
        'custom_order_title': 'Потрібно щось унікальне?',
        'custom_order_desc': 'Я можу розробити бота або сайт під твоє технічне завдання.',
        'btn_custom_order': '📩 ЗАМОВИТИ ІНШЕ',
        
        // Теги (НЕ ПЕРЕКЛАДАЮТЬСЯ, але для прикладу)
        'tag_security': 'Security', 'tag_admin': 'Admin', 'tag_logs': 'Logs',
        'tag_social': 'Social', 'tag_modals': 'Modals', 'tag_music': 'Music',
        'tag_voice': 'Voice', 'tag_ecommerce': 'E-commerce', 'tag_shop': 'Shop',
    },
    'en': {
        // General
        'page_title': 'clxwnless.dev - Portfolio & Store',
        'nav_about': 'About Me',
        'nav_store': 'Store',
        'lang_button': 'Language',

        // About/Hero
        'hero_title': 'Hi, I\'m clxwnless',
        'hero_subtitle': 'Developer | Discord & Telegram Bot Creator | Student',
        'btn_my_bio': 'MY BIO',
        'bio_title': '👋 A little bit about me',
        'bio_text_1': 'Hello everyone, I\'m Danya, 17 years old. I create complex and functional bots for Discord and Telegram, and also develop websites. I am currently studying at the university, but I devote all my free time to code.',
        'bio_text_2': 'My approach is clean code, speed, and attention to detail. If you need a tool to automate your community or business — you\'ve come to the right place.',
        'btn_show_projects': '⬇ SHOW PROJECTS',
        
        // Categories
        'cat_discord': 'Bots',
        'cat_telegram': 'Bots',
        'cat_web': 'Websites',

        // Discord Projects
        'proj_support_title': '🤖 Support Bot',
        'proj_support_desc': 'Bot for user identification. Commands for selecting gender (Male/Female), automatic ban for alt accounts (twinks), and verification system.',
        'proj_mod_title': '🛡️ Moderation System',
        'proj_mod_desc': 'Powerful moderation with buttons. Alt account detection, full account information (creation date, roles), action logs.',
        'proj_finder_title': '❤️ Finder (Dating)',
        'proj_finder_desc': 'Dating bot. Beautiful embeds, profile creation via a modal window. The "Message" button redirects to the user\'s profile.',
        'proj_music_title': '🎵 DJ Music',
        'proj_music_desc': 'Music bot. Command /play + link. Support for YouTube tracks up to 5 minutes. High sound quality.',

        // Telegram Projects
        'proj_shop_title': '👕 ClothShop',
        'proj_shop_desc': 'Full-fledged clothing store in Telegram. Menu with buttons, product catalog, review system, and order form.',
        
        // Web Projects
        'proj_first_title': '🌐 My First Site',
        'proj_first_desc': 'This portfolio website is my first public web development project. The section will be updated with new projects later.',
        
        // Store - General
        'store_main_title': 'Service Store',
        'store_subtitle': 'Ready-made solutions for your server or business',
        'btn_buy': 'Buy',
        'btn_order': 'Order',

        // Store - Items
        'store_support_title': 'Support Bot',
        'store_support_desc': 'Identification, genders, anti-alt system.',
        'store_mod_title': 'Moderation Bot',
        'store_mod_desc': 'Button moderation, logs, account info.',
        'store_finder_title': 'Finder (Dating)',
        'store_finder_desc': 'Profile system, dating, modals.',
        'store_music_title': 'DJ Music Bot',
        'store_music_desc': 'Music in voice, simple /play command.',
        'store_shop_title': 'ClothShop (TG)',
        'store_shop_desc': 'Telegram store turnkey with admin panel.',
        'store_web_title': 'Web Site',
        'store_web_desc': 'Business card website or portfolio (HTML/CSS/JS).',
        'store_web_price': 'From 500 ₴',

        // Custom Order
        'custom_order_title': 'Need something unique?',
        'custom_order_desc': 'I can develop a bot or website according to your technical requirements.',
        'btn_custom_order': '📩 ORDER OTHER',

        // Tags
        'tag_security': 'Security', 'tag_admin': 'Admin', 'tag_logs': 'Logs',
        'tag_social': 'Social', 'tag_modals': 'Modals', 'tag_music': 'Music',
        'tag_voice': 'Voice', 'tag_ecommerce': 'E-commerce', 'tag_shop': 'Shop',
    },
    'ru': {
        // Общее
        'page_title': 'clxwnless.dev - Портфолио и Магазин',
        'nav_about': 'Обо мне',
        'nav_store': 'Магазин',
        'lang_button': 'Язык',

        // About/Hero
        'hero_title': 'Привет, я clxwnless',
        'hero_subtitle': 'Developer | Discord & Telegram Bot Creator | Student',
        'btn_my_bio': 'МОЕ БИО',
        'bio_title': '👋 Немного обо мне',
        'bio_text_1': 'Всем привет, я Даня, мне 17 лет. Я создаю сложных и функциональных ботов для Discord и Telegram, а также разрабатываю сайты. Сейчас учусь в университете, но все свободное время посвящаю коду.',
        'bio_text_2': 'Мой подход — это чистый код, скорость и внимание к деталям. Если тебе нужен инструмент для автоматизации сообщества или бизнеса — ты по адресу.',
        'btn_show_projects': '⬇ ПОКАЗАТЬ ПРОЕКТЫ',
        
        // Категории
        'cat_discord': 'Боты',
        'cat_telegram': 'Боты',
        'cat_web': 'Сайты',

        // Проекты Discord
        'proj_support_title': '🤖 Support Bot',
        'proj_support_desc': 'Бот для идентификации пользователей. Команды для выбора гендера (Парень/Девушка), автоматический бан за твинки и система проверки.',
        'proj_mod_title': '🛡️ Moderation System',
        'proj_mod_desc': 'Мощная модерация с кнопками. Обнаружение твинков, полная информация об аккаунте (дата создания, роли), логи действий.',
        'proj_finder_title': '❤️ Finder (Dating)',
        'proj_finder_desc': 'Бот для знакомств. Красивые эмбеды, создание анкеты через модальное окно. Кнопка "Написать" перекидывает в профиль человека.',
        'proj_music_title': '🎵 DJ Music',
        'proj_music_desc': 'Музыкальный бот. Команда /play + ссылка. Поддержка YouTube треков до 5 минут. Высокое качество звука.',

        // Проекты Telegram
        'proj_shop_title': '👕 ClothShop',
        'proj_shop_desc': 'Полноценный магазин одежды в Telegram. Меню с кнопками, каталог товаров, система отзывов и форма оформления заказа.',
        
        // Проекты Web
        'proj_first_title': '🌐 My First Site',
        'proj_first_desc': 'Этот сайт-портфолио является моей первой публичной веб-разработкой. Раздел будет обновляться новыми проектами позже.',
        
        // Магазин - Общее
        'store_main_title': 'Магазин Услуг',
        'store_subtitle': 'Готовые решения для вашего сервера или бизнеса',
        'btn_buy': 'Купить',
        'btn_order': 'Заказать',

        // Магазин - Позиции
        'store_support_title': 'Support Bot',
        'store_support_desc': 'Идентификация, гендеры, анти-твинк система.',
        'store_mod_title': 'Moderation Bot',
        'store_mod_desc': 'Кнопочная модерация, логи, инфо об аккаунте.',
        'store_finder_title': 'Finder (Dating)',
        'store_finder_desc': 'Система анкет, знакомства, модальные окна.',
        'store_music_title': 'DJ Music Bot',
        'store_music_desc': 'Музыка в войсе, простая команда /play.',
        'store_shop_title': 'ClothShop (TG)',
        'store_shop_desc': 'Магазин в Телеграм под ключ с админкой.',
        'store_web_title': 'Web Site',
        'store_web_desc': 'Сайт-визитка или портфолио (HTML/CSS/JS).',
        'store_web_price': 'От 500 ₴',

        // Индивидуальный заказ
        'custom_order_title': 'Нужно что-то уникальное?',
        'custom_order_desc': 'Я могу разработать бота или сайт под ваше техническое задание.',
        'btn_custom_order': '📩 ЗАКАЗАТЬ ДРУГОЕ',

        // Теги
        'tag_security': 'Security', 'tag_admin': 'Admin', 'tag_logs': 'Logs',
        'tag_social': 'Social', 'tag_modals': 'Modals', 'tag_music': 'Music',
        'tag_voice': 'Voice', 'tag_ecommerce': 'E-commerce', 'tag_shop': 'Shop',
    }
};

// --- 2. Функції керування мовою ---

function setLanguage(lang) {
    const elementsToTranslate = document.querySelectorAll('[data-key]');
    const langData = translations[lang];

    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-key');
        if (langData[key]) {
            // Оновлення тексту елемента
            element.textContent = langData[key];
        }
    });
    
    // Спеціальна обробка для title сторінки (оскільки title не має .textContent)
    document.title = translations[lang]['page_title'];
    
    // Збереження обраної мови у локальному сховищі
    localStorage.setItem('websiteLang', lang);
    
    // Оновлення атрибуту lang для HTML (для SEO)
    document.documentElement.setAttribute('lang', lang);
}

// 3. Обробка подій випадаючого меню
document.getElementById('lang-button').addEventListener('click', function() {
    document.getElementById('language-dropdown').classList.toggle('show');
});

document.querySelectorAll('.lang-option').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); 
        const selectedLang = this.getAttribute('data-lang');
        setLanguage(selectedLang);
        // Закрити випадаючий список після вибору
        document.getElementById('language-dropdown').classList.remove('show');
    });
});

// Закрити випадаючий список, якщо користувач клацає поза ним
window.onclick = function(event) {
    if (!event.target.closest('.language-selector')) {
        const dropdown = document.getElementById('language-dropdown');
        if (dropdown && dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    }
}

// 4. Запуск при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
    // Встановлюємо збережену мову (або uk за замовчуванням)
    const savedLang = localStorage.getItem('websiteLang') || 'uk'; 
    setLanguage(savedLang);
});


// --- 5. Ваші оригінальні функції ---

function openTab(evt, tabName) {
    var tabContent = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
        tabContent[i].classList.remove("active-tab");
    }

    var navBtns = document.getElementsByClassName("nav-btn");
    // Ми не чіпаємо кнопку мови, тому ітеруємо лише по кнопках Про мене/Магазин
    for (var i = 0; i < navBtns.length; i++) {
        if (!navBtns[i].closest('.language-selector')) {
             navBtns[i].classList.remove("active");
        }
    }

    document.getElementById(tabName).style.display = "block";
    
    setTimeout(() => {
        document.getElementById(tabName).classList.add("active-tab");
    }, 10);

    // Додаємо клас "active" лише кнопкам Про мене/Магазин
    if (!evt.currentTarget.closest('.language-selector')) {
        evt.currentTarget.classList.add("active");
    }
}

function showBio() {
    var bioBtn = document.getElementById("bio-btn");
    var bioBlock = document.getElementById("bio-block");
    
    bioBtn.style.display = "none";
    bioBlock.style.display = "block";
}

function showProjects() {
    var projectsBlock = document.getElementById("projects-block");
    projectsBlock.style.display = "block";
    
    projectsBlock.scrollIntoView({ behavior: 'smooth' });
}
