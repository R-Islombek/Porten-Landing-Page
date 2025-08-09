document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const headerList = document.querySelector('.header__list');
    
    mobileMenuButton.addEventListener('click', function() {
        headerList.classList.toggle('active');
        

        const icon = this.querySelector('i');
        if (headerList.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
 
    const headerLinks = document.querySelectorAll('.header__link');
    headerLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (headerList.classList.contains('active')) {
                headerList.classList.remove('active');
                const icon = mobileMenuButton.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });
});



// 1-Funcksiyalar masalalar ishlash;

// let a = Number(prompt("a sonini kiriting"));
// let b = Number(prompt("b sonini kiriting"));


// function sum(a, b){
//     S = a * b;
//     P = 2 * (a + b);
//     console.log(`S = ${S}, P = ${P}`);
// }
// sum(a, b)

// 2-Masala;

// let a = prompt("a sonini kiriting");

// function sum(a){
//     S = Math.pow(a, 2);
//     P = 4 * a;
//     console.log(`S = ${S}, P = ${P}`);
// }
// sum(a)

// 3-Masala;

// let a = Number(prompt("a sonini kiriting"));

// function sum(a){
//     sum = 0;

//     for (let i = 0; i < a; i++) {
//         sum += i;
//     }
//  console.log(sum);
 
// }
// sum(a)
