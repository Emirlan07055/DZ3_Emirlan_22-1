const tabs = document.querySelectorAll(".tabheader__item")
const tabContent = document.querySelectorAll(".tabcontent")
const tabsParent = document.querySelector(".tabheader__items")

const hideTabContent = () => {
    tabContent.forEach((item) => {
        item.style.display = "none"
    })
    tabs.forEach((item) =>{
        item.classList.remove("tabheader__item_active")
    })
}

hideTabContent()

const showTabContent = (i = 0) => {
    tabContent[i].style.display = "block"
    tabs[i].classList.add("tabheader__item_active")
}

hideTabContent()
showTabContent()

tabsParent.addEventListener("click", (event) => {
    const target = event.target

    if (target.classList.contains("tabheader__item")) {
        tabs.forEach((item, i) => {
            if (target === item) {
                hideTabContent(i)
                showTabContent(i)
            }
        })
    }
})

let i = 0
const slidetime =()=>{
    i++
    if(i > 3){
        i = 0
    }
    hideTabContent()
    showTabContent(i)
}

setInterval(slidetime, 2000)


const modal = document.querySelector(".modal")
const modalTrigger = document.querySelector(".btn_white")
const closeModalBtn = document.querySelector(".modal__close")

const openModal = () => {
    modal.classList.add("show")
    modal.classList.remove("hide")
    document.body.style.overflow = "hidden"
}

modalTrigger.addEventListener("click", openModal)

const closeModal = () => {
    modal.classList.add("hide")
    modal.classList.remove("show")
    document.body.style.overflow = ""
}

closeModalBtn.addEventListener("click", closeModal)

modal.addEventListener("click", (event) => {
    if(event.target === modal) {
        closeModal()
    }
})

let checking=0
window.onscroll = function() {
    const scrolled = window.pageYOffset || document.documentElement.scrollTop
    if(scrolled > 3400 && checking===0){
        openModal()
        checking+=1
    }
}