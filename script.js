function openTab(evt, tabName) {
    // 1. Отримуємо всі елементи з контентом вкладок і ховаємо їх
    var tabContent = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none"; // Ховаємо миттєво
        tabContent[i].classList.remove("active-tab"); // Прибираємо клас анімації
    }

    // 2. Отримуємо всі кнопки навігації і прибираємо клас "active"
    var navBtns = document.getElementsByClassName("nav-btn");
    for (var i = 0; i < navBtns.length; i++) {
        navBtns[i].classList.remove("active");
    }

    // 3. Показуємо поточну вкладку і додаємо клас для запуску CSS-анімації
    document.getElementById(tabName).style.display = "block";
    
    // Невелика затримка, щоб браузер "побачив" зміну display перед додаванням класу анімації
    setTimeout(() => {
        document.getElementById(tabName).classList.add("active-tab");
    }, 10);

    // 4. Додаємо клас "active" натиснутій кнопці
    evt.currentTarget.classList.add("active");
}