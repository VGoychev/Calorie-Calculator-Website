document.addEventListener('DOMContentLoaded',() => {
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

//Fade in effect description heading
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

//Fade in effect description preview
const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
            console.log('Added .show class'); 
        } else {
            entry.target.classList.remove('show');
            console.log('Removed .show class');
        }
    });
});

const descriptionPreview = document.querySelectorAll('.description-preview');
descriptionPreview.forEach((el) => observer3.observe(el));

//Fade in effect description text
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

const descriptionText = document.querySelectorAll('.dsc-text');
descriptionText.forEach((el) => observer4.observe(el));

//Fade in effect features heading
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

const featuresHeading = document.querySelectorAll('.features-heading');
featuresHeading.forEach((el) => observer5.observe(el));

//Fade in effect git heading
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

const gitHeading = document.querySelectorAll('.git-heading');
gitHeading.forEach((el) => observer6.observe(el));

//Fade in effect git text
const observer7 = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const gitText = document.querySelectorAll('.git-text');
gitText.forEach((el) => observer7.observe(el));

document.addEventListener('DOMContentLoaded', function() {
    const languageSelectMain = document.getElementById('languageSelectMain');
    const languageSelectMobile = document.getElementById('languageSelectMobile');

    // Define the translations object first
    const translations = {
        en: {
            home: 'Home',
            aboutUs: 'About Us',
            download: '<i class="fas fa-download"></i> Download',
            heroHeading: 'Our Story',
            heroText: 'Calorie Calculator was created to simplify the process of tracking calories, nutrients, and overall food intake. In a world full of confusing nutritional advice, our goal is to empower you to take control of your health with an easy-to-use tool that provides clarity and convenience.',
            readMore: 'Read more',
            meetTheDev: 'Meet the Developer',
            devDescription: 'Vladimir Goychev, also known as VGoychev, is the creator behind Calorie Calculator.<br><br>Combining his passion for technology and fitness, he developed this app to help users easily achieve their health goals. As the sole developer, he has put his heart into crafting a user-friendly, reliable tool for anyone on a fitness journey.',
            ourFeatures: 'Our Features',
            ff: 'Accurate Counting<br><br><i>- Easily track the calories of everything you eat daily.</i>',
            sf:'Nutritional Information<br><br><i>- Get insights into the nutrients you consume, including proteins, fats and carbohydrates.</i>',
            tf: 'Personalized Goals<br><br><i>- Set your calorie intake based on your specific health goals, whether it’s losing weight, gaining muscle, or maintaining your current weight.</i>',
            fourthf: 'User-Friendly Interface<br><br><i>- A clean and intuitive design that makes tracking your diet simple and stress-free.</i>',
            gitHeading:'Get in Touch <i class="fas fa-user-friends"></i>',
            gitText: 'Have questions, suggestions, or feedback? We’d love to hear from you! Feel free to reach out at <a href="mailto:vladimirgoichev@gmail.com"><b>support@caloriecalculator.com.</b></a><br><br>Thank you for choosing Calorie Calculator as your trusted health companion. Together, let’s make every calorie count!',
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
            heroHeading: 'Нашата История',
            heroText: 'Калориен калкулатор е създаден, за да опрости процеса на проследяване на калории, хранителни нутриенти и цялостния прием на храна. В свят, пълен с объркващи съвети за хранене, нашата цел е да ви даде възможност да поемете контрола върху здравето си с лесен за използване инструмент, който осигурява яснота и удобство.',
            readMore: 'Прочети повече',
            meetTheDev: 'Запознай се със Създателя',
            devDescription: 'Владимир Гойчев, известен още като VGoychev, е създателят на Calorie Calculator.<br><br>Комбинирайки страстта си към технологиите и фитнеса, той разработва това приложение, за да помогне на потребителите лесно да постигнат своите здравни цели. Като единствен разработчик, той е вложил сърцето си в създаването на удобен за потребителя, надежден инструмент за всеки, който е на път за промяна в личен план.',
            ourFeatures: 'Нашите функции',
            ff: 'Точно броене<br><br><i>- Проследявайте лесно калориите на всичко, което ядете ежедневно.</i>',
            sf: 'Хранителна информация<br><br><i>- Получете представа за хранителните нутриенти, които консумирате, включително протеини, мазнини и въглехидрати.</i>',
            tf: 'Персонализирани цели<br><br><i>- Следвай своя калориен прием въз основа на конкретните ви здравни цели, независимо дали става въпрос за отслабване, натрупване на мускули или поддържане на сегашното ви тегло.</i>',
            fourthf: 'Удобен за потребителя интерфейс<br><br><i>- Изчистен и интуитивен дизайн, който прави проследяването на вашата диета лесно и без стрес.</i>',
            gitHeading: 'Свържете се с нас <i class="fas fa-user-friends"></i>',
            gitText: 'Имате въпроси, предложения или отзиви? Ще се радваме да ги чуем! Можете да се свържете с нас чрез <a href="mailto:vladimirgoichev@gmail.com"><b>support@caloriecalculator.com.</b></a><br><br>Благодарим ви, че избрахте Калориен Калкулатор като ваш доверен спътник за здравето. Нека заедно направим така, че всяка калория да се брои!',
            fQ: 'Мога ли да следя други хранителни нутриенти освен калориите?',
            fQa: 'Да, нашето приложение ви позволява да проследявате различни хранителни нутриенти като въглехидрати, протеини и мазнини. Когато добавите вашите ястия, приложението предоставя подробна разбивка на всички хранителни нутриенти, за да ви помогне да поддържате балансирана диета.',
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