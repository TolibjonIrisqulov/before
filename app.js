// Versiyalarni saqlash uchun ob'ekt
const serviceVersions = {
    v1: [ "[Sizning Kompaniya Ismingiz] o'z mijozlariga keng ko'lamli xizmatlar taklif etadi:", "Dasturlash va Ilovalar: Har qanday komplekslikdagi mobil va veb ilovalarini ishlab chiqish.", "Ma'lumotlar Tahlili: Ma'lumotlarni yig'ish, tahlil qilish va strategik qarorlar qabul qilish uchun maxsus yechimlar.", "Kiberxavfsizlik: Tizimlar va ma'lumotlaringizni himoya qilish uchun kompleks xavfsizlik yechimlari.", "IT Konsalting: Biznes jarayonlarini optimallashtirish va texnologik yechimlar ishlab chiqish bo'yicha maslahatlar.", "O'qitish va Treninglar: Jamoangizni zamonaviy texnologiyalar va dasturlash tillari bo'yicha tayyorlash."],
    v2: ["Xizmat 2.1", "Xizmat 2.2", "Xizmat 2.3"],
    v3: ["Xizmat 3.1", "Xizmat 3.2", "Xizmat 3.3", "Xizmat 3.4"],
};

// Fikr-mulohazalar ro'yxati
let feedbacks = [];

// Versiyani tanlash va xizmatlar ro'yxatini yangilash
function updateServiceList(version) {
    const serviceList = document.getElementById('serviceList');
    serviceList.innerHTML = ""; // Ro'yxatni tozalash
    serviceVersions[version].forEach(service => {
        const li = document.createElement('li');
        li.textContent = service;
        serviceList.appendChild(li);
    });
}

// Dastlabki versiyani yuklash
updateServiceList('v1');

// Tugma orqali versiyani o'zgartirish
document.getElementById('learnMore').addEventListener('click', function() {
    const currentVersion = prompt("IT sohasida eng yaxshi ma'lumotlar va resurslar, o'z ichiga olgan ko'plab imkoniyatlar va foydali manbalar mavjud. Quyida IT sohasidagi muhim jihatlar va resurslar keltirilgan:1. O'qish va Ta'limOnlayn kurslar: Coursera, edX, Udacity va Khan Academy kabi platformalar, dasturlash, ma'lumotlar tahlili, sun'iy intellekt, va boshqa ko'plab sohalarda kurslar taklif etadi.YouTube: Dasturlash va texnologiya bo'yicha ko'plab bepul darsliklar va videolar mavjud.2. Texnologik YangiliklarTechCrunch, Wired, Ars Technica: Yangiliklar va maqolalar orqali IT va texnologiyalardagi oxirgi voqealar bilan tanishib boring.RSS o‘quvchilar: Eng sevimli texnologiya saytlaringizni kuzatib boring.3. O'zaro Aloqa va ForumlarStack Overflow: Dasturchilar va IT mutaxassislari uchun eng yaxshi savol-javob platformasi.Reddit: IT va dasturlash bo'yicha subreddits (masalan, r/programming, r/learnprogramming) ko'p foydali ma'lumotlar va maslahatlar taklif etadi.4. Dasturlash TillariPython: Oson o'rganilishi va keng qo'llanilishi tufayli yangi boshlovchilar uchun juda yaxshi tanlov.JavaScript: Veb dasturlashda asosiy til. Frontend va backend (Node.js) uchun juda muhim.Java, C#, C++: Katta loyihalar va tizim dasturlashida qo'llaniladi.5. Ma'lumotlar va TahlilSQL: Ma'lumotlar bazalari bilan ishlash uchun muhim.Pandas va NumPy: Python kutubxonalari ma'lumotlar tahlili uchun juda mashhur.6. KiberxavfsizlikCertifications: CompTIA Security+, CISSP kabi sertifikatlar kiberxavfsizlikda malaka oshirish uchun yaxshi imkoniyatlar.O'qish resurslari: Cybrary va OWASP kabi platformalarda resurslar mavjud.7. Sun'iy Intellekt va Mashina O'qitishTensorFlow va PyTorch: Sun'iy intellekt va mashina o'qitish uchun eng mashhur kutubxonalar.Kurslar: Andrew Ng tomonidan taklif etilgan Machine Learning kursi juda mashhur va foydali.8. Professional TarmoqLinkedIn: Professional aloqalar o'rnatish va o'z tarmog'ingizni kengaytirish uchun yaxshi platforma.GitHub: Dasturlash loyihalaringizni joylashtirish va boshqa dasturchilar bilan hamkorlik qilish imkoniyatlari.FoydasiKaryera imkoniyatlari: IT sohasi tez o‘sayotgan soha, talab va ish imkoniyatlari ko‘plab.Yuqori daromad: IT mutaxassislari ko‘pincha yuqori maosh olishadi.Innovatsiya: IT orqali yangiliklarni yaratish va ilg'or texnologiyalarni tatbiq etish imkoniyati");
    if (serviceVersions[currentVersion]) {
        updateServiceList(currentVersion);
    } else {
        alert("Bunday versiya topilmadi!");
    }
});

// Galereyani to'ldirish
const imageGallery = document.getElementById('imageGallery');
const images = [
    'https://cdn.mos.cms.futurecdn.net/nkic6k2zdP4YfEiHo9q5x6.jpg',
    'https://storage.kun.uz/source/2/N4Kup8bNiTEqI4Ga8B-Q4G53eFw5O2b6.jpg',
    'https://static.review.uz/crop/3/2/1400__100_3289977373.jpg?v=1593674696',
    'https://yoshlarkelajagimiz.uz/wp-content/uploads/2023/05/191002133404544e.jpg',
];

images.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    imageGallery.appendChild(img);
});

// Fikr-mulohaza formasini yuborish
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Formani yuborishdan to'xtatish
    const name = this[0].value;
    const feedback = this[1].value;
    feedbacks.push({ name, feedback });
    this.reset(); // Formani tozalash
    displayFeedbacks();
});

// Fikr-mulohazalarni ko'rsatish
function displayFeedbacks() {
    const feedbackList = document.getElementById('feedbackList');
    feedbackList.innerHTML = ""; // Ro'yxatni tozalash
    feedbacks.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name}: ${item.feedback}`;
        feedbackList.appendChild(li);
    });
}

// Aloqa formasini yuborish
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Formani yuborishdan to'xtatish
    alert('Xabaringiz yuborildi!');
    this.reset(); // Formani tozalash
});
