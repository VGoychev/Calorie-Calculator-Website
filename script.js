// FAQ Accordion
document.addEventListener('DOMContentLoaded',() => {
    const faqContainer = document.querySelector('.faq-content');

    faqContainer.addEventListener('click', (e) => {
        const groupHeader = e.target.closest('.faq-group-header');

        if(!groupHeader) return;

        const group = groupHeader.parentElement;
        const groupBody = group.querySelector('.faq-group-body');
        const icon = groupHeader.querySelector('i');

        //Toggle icon
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');

        //Toggle visibility of body
        groupBody.classList.toggle('open');

        // Close other open FAQ bodies
        const otherGroups = faqContainer.querySelectorAll('.faq-group');

        otherGroups.forEach((otherGroup) => { 
            if(otherGroup !== group) {
                const otherGroupBody = otherGroup.querySelector('.faq-group-body');
                const otherIcon = otherGroup.querySelector('.faq-group-header i');
                otherGroupBody.classList.remove('open');
                otherIcon.classList.remove('fa-minus');
                otherIcon.classList.add('fa-plus');
            }
        });
    });

    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    const scrollThreshold = 50;
    window.addEventListener('scroll', function() {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scrolling down
            if (scrollTop > scrollThreshold) {
                navbar.classList.add('hide');
            }
        } else {
            // Scrolling up
            navbar.classList.remove('hide');
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    });
});



//Mobile Menu
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu'); 

    hamburgerButton.addEventListener('click', () => mobileMenu.classList.toggle('active')
);
 
});

//Fade In effect for cards
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const cards = document.querySelectorAll('.card');
cards.forEach((el) => observer.observe(el));

//Fade in effect Hero container
const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const heroContainer = document.querySelectorAll('.container-hero');
heroContainer.forEach((el) => observer1.observe(el));


//Fade in effect description text
const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const descriptionHeading = document.querySelectorAll('.description-heading');
descriptionHeading.forEach((el) => observer2.observe(el));

//Fade in effect description image
const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const descriptionImage = document.querySelectorAll('.dsc-content');
descriptionImage.forEach((el) => observer3.observe(el));

//Fade in effect reviews heading
const observer4 = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const reviewsHeading = document.querySelectorAll('.reviews-heading');
reviewsHeading.forEach((el) => observer4.observe(el));

//Fade in effect faq heading
const observer5 = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const faqHeading = document.querySelectorAll('.faq-heading');
faqHeading.forEach((el) => observer5.observe(el));

//Fade in effect faq group
const observer6 = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const faqGroup = document.querySelectorAll('.faq-group');
faqGroup.forEach((el) => observer6.observe(el));

document.addEventListener('DOMContentLoaded', function() {
    const languageSelectMain = document.getElementById('languageSelectMain');
    const languageSelectMobile = document.getElementById('languageSelectMobile');

    // Define the translations object first
    const translations = {
        en: {
            home: 'Home',
            aboutUs: 'About Us',
            download: '<i class="fas fa-download"></i>  Download',
            heroHeading: 'Nutrition counting simplified.',
            heroText: 'Track your daily intake effortlessly and stay on top of your health goals. With Calorie Calculator, managing your diet has never been so simple.',
            readMore: 'Read more',
            simpleUI: 'Simple User Interface, made for everyone! <i class="fas fa-user-friends"></i>',
            whatUsersThink: 'What users think about the App',
            firstUserText: '"I love how easy this calorie calculator app is to use! The interface is straightforward and clean, making it simple to track my daily intake without any hassle. Highly recommend for anyone looking to manage their diet effortlessly!"',
            firstUserName: 'Isabella Konova -- via Google Play Store',
            secondUserText:'"This app is fantastic! It has a simple, user-friendly design that makes tracking calories a breeze. I appreciate not having to navigate through complicated menus. It’s perfect for anyone wanting a straightforward calorie tracker."',
            secondUserName: 'Angel Yordanov -- via Google Play Store',
            thirdUserText: '"I’ve tried several calorie counting apps, but this one stands out for its simplicity. The UI is very intuitive, and I can log my meals quickly and easily. Great for people who want an uncomplicated way to monitor their diet. Super easy to use!"',
            thirdUserName:'Emilia Luiz -- via Google Play Store',
            faq: 'Frequently Asked Questions',
            fQ: 'Can I track other nutrients besides calories?',
            fQa: 'Yes, our app allows you to track various nutrients, including carbohydrates, proteins and fats. When you add your meals, the app provides a detailed breakdown of all the nutrients to help you maintain a balanced diet.',
            sQ: 'Is my data stored securely?',
            sQa: 'Absolutely. All the data you input into the app is stored locally on your device. We do not send your data to any external servers or store it in the cloud, ensuring your privacy and security.',
            tQ: 'Is the app free to use?',
            tQa: 'Yes, the app is completely FREE to use! It can be downloaded from the Google Play Store.',
            fourthQ: 'Can I add new item to the menu list?',
            fourthQa: 'Yes, by accessing the menu, on the left side there is a button which navigates you to the "Add New Meal Screen". You add your custom meal by writing down name, fats, carbs and proteins per 100g.',
            fifthQ: 'Can I delete a meal from Today’s meals list or Menu list?',
            fifthQa: 'Yes, you can delete an item in Today’s meals list by sliding to left. You can also delete a item which is in the Menu list by clcking over the item and then clicking the delete button.',
            appName: 'Calorie Calculator',
            joinUs: 'Join us',
            resources: 'Resources',
            contact: 'Contact us at',
            copyright: 'All Rights Reserved &copy; Copyright 2024 Calorie Calculator'

        },
        bg: {
            home: 'Начало',
            aboutUs: 'За нас',
            download: '<i class="fas fa-download"></i> Изтегляне',
            heroHeading: 'Улеснено броене на калории.',
            heroText: 'Проследявай ежедневния си прием без усилие и бъди на върха на здравните си цели. С Калориен Калкулатор управлението на твоята диета никога не е било толкова лесно.',
            readMore: 'Прочети повече',
            simpleUI: 'Опростен потребителски интерфейс, удобен за всеки! <i class="fas fa-user-friends"></i>',
            whatUsersThink: 'Какво мислят потребителите за приложението',
            firstUserText: '"Харесва ми колко лесно се използва този Калориен Калкулатор! Интерфейсът е ясен и чист, което го прави улеснен за да проследя дневния си прием без никакви проблеми. Горещо препоръчвам за всеки, който иска да управлява диетата си без усилия!"<br><br>',
            firstUserName: 'Изабела Конова -- през Google Play Store',
            secondUserText: '"Това приложение е фантастично! Оценявам, че не се налага да навигирам в сложни и излишни менюта. Има прост, удобен за потребителя дизайн, който прави проследяването на калории лесно. Идеално е за всеки, който иска лесен инструмент за проследяване на калории."<br><br>',
            secondUserName: 'Ангел Йорданов -- през Google Play Store',
            thirdUserText: '"Опитвала съм няколко приложения за броене на калории, но това се отличава със своята простота. Потребителският интерфейс е много интуитивен и мога да регистрирам храната си бързо и лесно. Чудесно за хора, които искат лесен начин да наблюдават диетата си - като мен! Супер лесен за използване!"',
            thirdUserName: 'Емилия Луиз - през Google Play Store',
            faq: 'Често задавани въпроси',
            fQ: 'Мога ли да следя други хранителни нутриенти освен калориите?',
            fQa: 'Да, нашето приложение ви позволява да проследявате различни хранителни нутриенти като въглехидрати, протеини и мазнини. Когато добавите вашите ястия, приложението предоставя подробна разбивка на всички хранителни нутриенти, за да ви помогне да поддържате балансирана диета.',
            sQ: 'Моите данни съхраняват ли се сигурно?',
            sQa: 'Абсолютно. Всички данни, които въвеждате в приложението, се съхраняват локално на вашето устройство. Ние не изпращаме вашите данни до външни сървъри и не ги съхраняваме в облак, като гарантираме вашата поверителност и сигурност.',
            tQ: 'Приложението безплатно ли е за използване?',
            tQa: 'Да, приложението е напълно БЕЗПЛАТНО за използване! Може да бъде изтеглено от Google Play Store.',
            fourthQ: 'Мога ли да добавя нова храна към списъка с менюто?',
            fourthQa: 'Да, като влезете в менюто, от лявата страна има бутон, който ви навигира до „Екран за добавяне на ново хранене“. Добавяте вашето персонализирано ястие, като записвате име, мазнини, въглехидрати и протеини на 100 g.',
            fifthQ: 'Мога ли да изтрия храна от списъка с Днешни Ястия или от Менюто?',
            fifthQa: 'Да, можете да изтриете елемент в списъка с Днешни Ястия, като плъзнете НАЛЯВО. Можете също така да изтриете елемент, който е в Менюто, като щракнете върху елемента и след това щракнете върху бутона за изтриване.',
            appName: 'Калориен Калкулатор',
            joinUs: 'Последвайте ни',
            resources: 'Ресурси',
            contact: 'Контакти',
            copyright: 'Всички права запазени &copy; 2024 Калориен Калкулатор'
        }
    };

     // Check for saved language preference in localStorage
     const savedLanguage = localStorage.getItem('language');
     if (savedLanguage) {
         setLanguage(savedLanguage);
         languageSelectMain.value = savedLanguage;
         languageSelectMobile.value = savedLanguage;
     } else {
         setLanguage('en');
     }
 
     // Event listeners for both selectors
     languageSelectMain.addEventListener('change', function() {
         const selectedLanguage = this.value;
         updateLanguage(selectedLanguage);
         location.reload();
     });
 
     languageSelectMobile.addEventListener('change', function() {
         const selectedLanguage = this.value;
         updateLanguage(selectedLanguage);
         location.reload();
     });
 
     function updateLanguage(language) {
         setLanguage(language);
         localStorage.setItem('language', language);
         languageSelectMain.value = language;
         languageSelectMobile.value = language;
     }
 
     function setLanguage(language) {
         const elements = document.querySelectorAll('[data-lang]');
 
         elements.forEach(element => {
             const key = element.getAttribute('data-lang');
             if (translations[language][key]) {
                 element.innerHTML = translations[language][key];
             } else {
                 console.error(`Translation key "${key}" not found for language "${language}"`);
             }
         });
     }
 });
