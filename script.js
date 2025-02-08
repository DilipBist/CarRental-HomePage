// on scroll fixed nav
window.addEventListener("scroll", () => {
    let nav = document.getElementById("navbar");
    if (window.scrollY > 100) {
        nav.classList.add(
            "bg-lightGrey",
            "shadow-md",
            "py-1",
            "w-full",
            "fixed",
            "top-0"
        );
        nav.classList.remove("py-3");
    } else {
        nav.classList.add("py-3");
        nav.classList.remove(
            "bg-white",
            "shadow-md",
            "py-1",
            "w-full",
            "fixed",
            "top-0"
        );
    }
});

// show and hide menu bar
const menuBar = document.querySelector(".menubar");
const navlinks = document.querySelector(".navlinks");
const menuIcon = document.querySelector(".menuIcon");
menuBar.addEventListener("click", () => {
    console.log("cliked");
    if (navlinks.classList.contains("max-h-0")) {
        navlinks.classList.remove("max-h-0");
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark", "transform", "rotate-180");
        navlinks.classList.add("max-h-[500px]", "py-7");
    } else {
        navlinks.classList.add("max-h-0");
        navlinks.classList.remove("max-h-[500px]", "py-7");
        menuIcon.classList.add("fa-bars");
        menuIcon.classList.remove("fa-xmark", "transform", "rotate-180");
    }
});

// swiper js
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 50,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1440: {
            slidesPerView: 4,
            spaceBetween: 40
        }
    }
});


// top packages
const places = [
    {
        image:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/ef/5c/54/durbar-square-bhaktapur.jpg?w=500&h=400&s=1",
        location: "Pasupati, Kathmandu",
        duration: "2D",
        price: 10000,
        originalPrice: 15000,
    },
    {
        image:
            "https://lp-cms-production.imgix.net/2019-06/53693064.jpg?w=600&h=400",
        location: "Pokhara, Kaski",
        duration: "3D",
        price: 12000,
        originalPrice: 18000,
    },
    {
        image:
            "https://www.nepalsanctuarytreks.com/wp-content/uploads/2018/10/lumbini.jpg",
        location: "Lumbini, Rupandehi",
        duration: "2D",
        price: 8000,
        originalPrice: 12000,
    },
    {
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfqe1OLVXJnKKdzcjoruKDhGtcdN6SQ8bq-A&s",
        location: "Chitwan National Park, Chitwan",
        duration: "3D",
        price: 14000,
        originalPrice: 20000,
    },
    {
        image:
            "https://media-cdn.tripadvisor.com/media/photo-c/1280x250/11/fe/70/8f/breathtaking-view-of.jpg",
        location: "Ilam, Province 1",
        duration: "4D",
        price: 11000,
        originalPrice: 16000,
    },
    {
        image:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/85/3f/22/rara-lake-lies-in-western.jpg?w=1200&h=-1&s=1",
        location: "Rara Lake, Mugu",
        duration: "5D",
        price: 18000,
        originalPrice: 25000,
    },
    {
        image: "https://media.sublimetrails.com/uploads/img/breathtaking-landscape-of-mustang-nepal1.webp",
        location: "Mustang, Gandaki",
        duration: "5D",
        price: 25000,
        originalPrice: 32000,
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYvdvCFciMvc34FCBpPDYIbx-8-gb5JZWx6g&s",
        location: "Tansen, Palpa",
        duration: "3D",
        price: 9000,
        originalPrice: 13000,
    },
    {
        image: "https://www.holidaynepal.com/pilgrim-site/images/kalinchowk-img.jpg",
        location: "Kalinchowk, Dolakha",
        duration: "2D",
        price: 8500,
        originalPrice: 12000,
    },

];

const TourSliderContainer = document.getElementById("tourSlider");

let generatedHTML = "";

places.forEach((place) => {
    generatedHTML += `
             <div class="swiper-slide py-5">
                                <div class="flex m-10 sm:m-0 flex-col gap-4 p-5 shadow-md bg-white rounded-md">
                                    <img src=${place.image}
                                        alt=${place.location} class="w-full rounded-md aspect-video object-cover">
                                    <div class="flex flex-col gap-5">
                                        <div class="flex items-center justify-between">
                                            <p class="text-xl text-brand font-semibold line-clamp-1">${place.location}</p>
                                            <p class="text-gray-500 font-semibold"> <span class="mr-1"><i
                                                        class="fa-regular fa-clock"></i></span> ${place.duration} </p>
                                        </div>
                                        <div class="flex items-center justify-between">
                                            <p class="text-xl font-semibold font-epilogue">NPR ${place.price} <span
                                                    class="line-through text-gray-500 text-sm">${place.originalPrice}</span>
                                            </p>
                                            <div class="signIn flex items-center justify-center">
                                                <button
                                                    class="bg-brand text-xs sm:text-base shadow-md font-semibold text-white px-2 sm:px-3 py-1 rounded-md cursor-pointer ">Buy
                                                    Now</button>
                                                <i
                                                    class="fa-solid transform h-[35px] w-[35px] grid items-center justify-center -rotate-45 fa-arrow-right bg-brand shadow-md p-2 rounded-full text-white text-xl transition duration-300 ease-linear will-change-transform"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
        `;

    TourSliderContainer.innerHTML = generatedHTML;
});


// car data/ fleet data 
const cars = [
    {
        name: "Voyager GT",
        category: "Luxury Car",
        image: "./assets/cars/car8.png",
        passengers: 3,
        pricePerDay: 250
    },
    {
        name: "Phantom Elite",
        category: "Luxury Car",
        image: "./assets/cars/car1.png",
        passengers: 4,
        pricePerDay: 400
    },
    {
        name: "Tesla Model X",
        category: "Electric SUV",
        image: "./assets/cars/car2.png",
        passengers: 5,
        pricePerDay: 350
    },
    {
        name: "BMW M8",
        category: "Sports Car",
        image: "./assets/cars/car3.png",
        passengers: 2,
        pricePerDay: 500
    },
    {
        name: "Audi R8",
        category: "Luxury Coupe",
        image: "./assets/cars/car4.png",
        passengers: 2,
        pricePerDay: 450
    },
    {
        name: "Range Rover Sport",
        category: "SUV",
        image: "./assets/cars/car5.png",
        passengers: 5,
        pricePerDay: 300
    },
    {
        name: "Lamborghini Urus",
        category: "Luxury SUV",
        image: "./assets/cars/car6.png",
        passengers: 4,
        pricePerDay: 600
    },
    {
        name: "Mercedes S-Class",
        category: "Executive Sedan",
        image: "./assets/cars/car7.png",
        passengers: 4,
        pricePerDay: 350
    },
    {
        name: "Porsche 911",
        category: "Sports Coupe",
        image: "./assets/cars/car9.png",
        passengers: 2,
        pricePerDay: 550
    },
    {
        name: "Bentley Continental GT",
        category: "Luxury Coupe",
        image: "./assets/cars/car10.png",
        passengers: 4,
        pricePerDay: 700
    }
];

// swiper js
var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 4,
    spaceBetween: 50,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1440: {
            slidesPerView: 4,
            spaceBetween: 40
        }
    }
});

const fleetSliderContainer = document.getElementById('fleetSlider');
let html = '';

cars.forEach(car => {
    html += `
        <div class="flex max-w-[350px] swiper-slide  flex-col gap-3 bg-white p-5 rounded-3xl shadow-md  relative ">
                    <div>
                        <img src=${car.image} class="w-full aspect-video object-contain " alt=${car.name}">
                    </div>
                    <p
                        class="px-3 bg-brand text-white py-1 rounded-2xl w-fit capitalize shadow-md absolute top-[10px] left-[10px]">
                        ${car.category}</p>
                    <div class="pb-2">
                        <p class="text-brand font-semibold text-2xl pb-5">${car.name}</p>
                        <div class="flex items-center justify-between text-xl">
                            <p>Passangers</p>
                            <p>${car.passengers}</p>
                        </div>
                    </div>
                    <div class="flex items-center justify-between border-t border-brand pt-3">
                        <p><span class="text-brand text-xl font-semibold">NPR ${car.pricePerDay}</span>/Per Day</p>
                        <div class="signIn inline-block cursor-pointer">
                            <i
                                class="fa-solid transform h-[35px] w-[35px] grid items-center justify-center -rotate-45 fa-arrow-right shadow-md bg-brand p-2 rounded-full text-white text-xl transition duration-300 ease-linear will-change-transform"></i>
                        </div>
                    </div>
                </div>

    `
    fleetSliderContainer.innerHTML = html;
});



// scroll to top 

const topScroll = document.querySelector('.topScroll');
window.addEventListener('scroll', ()=>{
    
if(window.scrollY > 200 )
    {
        topScroll.classList.add('block');
        topScroll.classList.remove('hidden');
    }else{
        topScroll.classList.remove('block');
        topScroll.classList.add('hidden');
    }
    
})
topScroll.addEventListener('click', ()=>{
    window.scrollTo ({
        top: 0,
        behavior: "smooth"
    })
})


// client review data storing in array 

const clientReviews = [
    {
        image: "https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_640.png",
        name: "John Doe",
        review: "Amazing service! The ride was smooth, and the driver was very professional. Highly recommended!",
        rating: 4
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsynwv-5qtogtOwJbIjaPFJUmHpzhxgqIAug&s",
        name: "Jane Smith",
        review: "The limo was clean, and the experience was luxurious. I will definitely book again for my next event.",
        rating: 5
    },
    {
        image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        name: "Michael Brown",
        review: "Very punctual and professional service. Lorem ipsum dolor sit amet. It made my airport transfer hassle-free.",
        rating: 4
    },
    {
        image: "https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg=",
        name: "Emily Johnson",
        review: "The chauffeur was courteous and drove safely. I felt like a VIP!.  Lorem ipsum dolor sit amet.",
        rating: 3
    },
    {
        image: "https://cdni.iconscout.com/illustration/premium/thumb/female-user-image-illustration-download-in-svg-png-gif-file-formats--person-girl-business-pack-illustrations-6515859.png?f=webp",
        name: "Chris Wilson",
        review: "Booked a limo for my wedding day, and it was the best decision ever! Excellent service.",
        rating: 4
    },
    {
        image: "https://cdn.pixabay.com/photo/2021/09/20/03/24/skeleton-6639547_1280.png",
        name: "Sophia Martinez",
        review: "Perfect ride for my corporate event. It was  Lorem ipsum dolor sit amet. smooth, elegant, and professional.",
        rating: 5
    }
]

const clientContainer = document.querySelector('#clientSlider');
let clientHtml = '';
clientReviews.forEach(client => {
    clientHtml += `
            <div class="swiper-slide py-5 ">
                                <div class="max-w-[400px]  bg-white px-4 py-6 rounded-3xl shadow-md flex flex-col gap-4  mx-auto">
                                    <div class="text-brand">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star-half-stroke"></i>
                                    </div>
                                    <p>${client.review}</p>
                                    <div class="flex gap-5 items-center border-t border-brand pt-3">
                                        <div class="w-20 h-20 rounded-full overflow-hidden">
                                            <img src=${client.image} alt=${client.name} class="object-cover w-full" >
                                        </div>
                                        <div>
                                            <p class="text-xl font-semibold text-brand">${client.name}</p>
                                            <p class="text-gray-500"> lorem ipusm</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
            
    `
    clientContainer.innerHTML = clientHtml;
})

// show and hide the service submenu/ mega menu 
const checkBox =document.querySelector('.check');
const angle =document.querySelector('.angle');
checkBox.addEventListener('change', () =>{
    if (checkBox.checked) { 
        angle.classList.add("transform","rotate-180"); 
    } else {
        angle.classList.remove("transform","rotate-180"); 
    }
})


// according data in array 

const accordionData = [
    {
        question: "What services do you offer?",
        answer: "We provide professional limo and car services including airport transfers, corporate travel, weddings, and private tours.Yes, all our drivers are certified, experienced, and undergo regular training to ensure a safe and smooth ride."
    },
    {
        question: "How can I book a ride?",
        answer: "You can book a ride through our website, mobile app, or by calling our customer service.We provide professional limo and car services including airport transfers, corporate travel, weddings, and private tours."
    },
    {
        question: "Are your drivers professionally trained?",
        answer: "Yes, all our drivers are certified, experienced, and undergo regular training to ensure a safe and smooth ride.You can book a ride through our website, mobile app, or by calling our customer service."
    },
    {
        question: "Do you provide 24/7 service?",
        answer: "Yes, our limo and car services are available 24/7 for your convenience.You can book a ride through our website, mobile app, or by calling our customer service."
    }
];
const accordingContainer = document.getElementById('accordionContainer');
let accordioncontentHtml = '';

accordionData.forEach((acordion, index) => {

    const open = index === 0 ? "max-h-[200px] p-3" : "max-h-0";
    const rotate = index === 0 ? "rotate-180" : "";

    accordioncontentHtml += `
        <div class="bg-white max-w-2xl mx-auto shadow-md">
            <button 
                class="bg-brand w-full text-white py-2 flex items-center justify-between px-3 border-b cursor-pointer" 
                onclick="toggleAccordion(${index})"
            >
                <span>${acordion.question}</span>
                <span>
                    <i class="fa-solid fa-chevron-down transition-transform duration-300 ${rotate}" id="icon-${index}"></i>
                </span>
            </button>
            <div class="transition-all duration-700 ease-in-out  max-h-0  overflow-hidden ${open}" id="answer-${index}">
                <p>${acordion.answer}</p>
            </div>
        </div>
    `;
    accordingContainer.innerHTML = accordioncontentHtml;
});


function toggleAccordion(index) {
    const answer = document.getElementById(`answer-${index}`);
    const icon = document.getElementById(`icon-${index}`);

    if (answer.classList.contains("max-h-0")) {

        document.querySelectorAll("[id^=answer-]").forEach((el) => {
            el.classList.remove("max-h-[200px]", "p-3");
            el.classList.add("max-h-0");
        });

        document.querySelectorAll(".fa-chevron-down").forEach((el) => {
            el.classList.remove("rotate-180");
        });

        answer.classList.remove("max-h-0");
        answer.classList.add("max-h-[200px]");
        answer.classList.add("p-3");
        icon.classList.add("rotate-180");
    } else {
        answer.classList.remove("max-h-[200px]");
        answer.classList.remove("p-3");
        answer.classList.add("max-h-0");
        icon.classList.remove("rotate-180");
    }
}