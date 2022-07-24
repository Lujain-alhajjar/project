let header = document.querySelector(".he");
let imgsArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

let clikable = document.querySelector(".fa-cog");
let stu = document.querySelector(".stu")
clikable.addEventListener("click", function () {
    stu.classList.toggle("active");
})
let mainColor = localStorage.getItem("colors");
let color = document.querySelectorAll(".stu span");
color.forEach(li => {
    li.addEventListener("click", function (e) {
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
        localStorage.setItem('colors', e.target.dataset.color);
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");

        });
        e.target.classList.add("active");
    });
});

if (mainColor !== null) {
    document.documentElement.style.setProperty('--main-color', mainColor);
    document.querySelectorAll(".stu .one span").forEach(element => {
        element.classList.remove("active");
        if (element.dataset.color === mainColor) {
            element.classList.add("active");
        };
    });

};
let change = document.querySelectorAll(".stu .two button");
let background = true;
let backgroundInterval;
change.forEach(li => {
    li.addEventListener("click", function (e) {
        if (e.target.dataset.lo === "yes") {
            background = true;
            randumImg();
        } else {
            background = false;
            clearInterval(backgroundInterval);
        }
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");
        });
        e.target.classList.add("active");
        localStorage.setItem('imgs', background);
    });
});
let back = document.querySelectorAll(".two button");

back.forEach(span => {
    addEventListener("click", (e) => {

    })
})

function randumImg() {
    if (background === true) {
        backgroundInterval = setInterval(() => {
            let randomNumbers = Math.floor(Math.random() * imgsArray.length);
            he.style.backgroundImage = 'url("./imgs/' + imgsArray[randomNumbers] + '")';
        }, 5000)
    }
}
randumImg();
let full = document.querySelectorAll(".gallry .imgs img");
full.forEach(img => {
    img.addEventListener("click", (e) => {
        let div = document.createElement("div");
        div.classList.add("all");
        let inset = document.createElement("div");
        inset.className = 'inset';
        let imgsgallry = document.createElement("img");
        let xdiv = document.createElement("div");
        let x = document.createTextNode("X");
        xdiv.className = 'x';
        imgsgallry.src = img.src;
        imgsgallry.className = 'imog';
        xdiv.addEventListener('click', (E) => {
            E.target.parentElement.remove();
            div.remove();
        })
        xdiv.appendChild(x);
        inset.appendChild(xdiv);
        inset.appendChild(imgsgallry);
        document.body.appendChild(div);
        document.body.appendChild(inset);
    });
});
// let ourSkills = document.querySelector(".skills");
// let allSkills = document.querySelectorAll(".skills .two2");
// window.onscroll = function () {
//     let skillsOffTop = ourSkills.offsetTop;
//     let skillsouterHeight = ourSkills.offsetHeight;
//     let windowHight = this.innerHeight;
//     let windowScroolTop = this.pageYoffset;
//     if (windowScroolTop < (skillsOffTop + skillsouterHeight - windowHight)) {
//         let allSkills = document.querySelectorAll(".skills .two2");
//         allSkills.forEach(skill => {
//             skill.style.width = skill.target.dataset.width;
//         });
//     };
// };
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {

    // Skills Offset Top
    let skillsOffsetTop = ourSkills.offsetTop;

    // Skills Outer Height
    let skillsOuterHeight = ourSkills.offsetHeight;

    // Window Height
    let windowHeight = this.innerHeight;

    // Window ScrollTop
    let windowScrollTop = this.scrollY;

    if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {

        let allSkills = document.querySelectorAll(".skills div span");

        allSkills.forEach(skill => {

            skill.style.width = skill.dataset.width;

        });

    } else {
        let allSkills = document.querySelectorAll(".skills div span");
        allSkills.forEach(skill => {

            skill.style.width = 0;

        });

    }

};
