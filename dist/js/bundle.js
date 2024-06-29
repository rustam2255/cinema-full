/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/class.js":
/*!******************************!*\
  !*** ./src/modules/class.js ***!
  \******************************/
/***/ ((module) => {

function clas(){
  

  //Class
  class Menucard {
    constructor(src, alt, title, descr, price, parentSelector){
      this.src = src
      this.alt = alt
      this.title = title
      this.descr = descr
      this.price = price
      this.transfer = 11000
      this.parent = document.querySelector(parentSelector)
      this.changetoUzs()
    }

    changetoUzs() {
      this.price = this.price * this.transfer
    }


render() {
      const element = document.createElement('div')
      element.innerHTML = `
      <div class="menu__item">
        <img src=${this.src} alt=${this.alt} />
        <h3 class="menu__item-subtitle">${this.title}</h3>
        <div class="menu__item-descr">
          ${this.descr}
        </div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
          <div class="menu__item-cost">Price:</div>
          <div class="menu__item-total"><span>${this.price}</span> uzs/month</div>
        </div>
      </div>
      `
      this.parent.append(element)
    }
  }
  axios.get('http://localhost:3000/menu').then((data) => {
    data.data.forEach(({img, altimg,  title, descr, price}) => {
      new Menucard(img,altimg,title,descr, price,'.menu .container'
      ).render()
  })
})
}
module.exports = clas

/***/ }),

/***/ "./src/modules/form.js":
/*!*****************************!*\
  !*** ./src/modules/form.js ***!
  \*****************************/
/***/ ((module) => {

function form () {
      // Forms
      const forms = document.querySelectorAll('form')
      forms.forEach((form) => {
        bindPostData(form)
      })
  
      async function postData(url, data){
        const res = await fetch(url, {
          method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: data,
        })
        return await res.json()
      }
      const msg = {
        loading: 'Loading...',
        succes: 'Thanks for submitting our from',
        failure: 'Something went wrong'
      }
      function bindPostData(form){
        form.addEventListener('submit', (e) => {
          e.preventDefault()
          const statusMessage = document.createElement('div')
          statusMessage.textContent = msg.loading
          form.append(statusMessage)
          const formData = new FormData(form)
          const obj = {}
            formData.forEach((val, key) => {
              obj[key] = val
            })
          
         postData('http://localhost:3000/request', JSON.stringify(obj))
          .then((data) => {
            console.log(data)
            statusMessage.textContent = msg.succes
            form.reset()
            setTimeout(() => {
              statusMessage.remove()
            },2000)
          }).catch(() => {
            statusMessage.textContent = msg.failure
          })
        })
      }
}
module.exports =form

/***/ }),

/***/ "./src/modules/loader.js":
/*!*******************************!*\
  !*** ./src/modules/loader.js ***!
  \*******************************/
/***/ ((module) => {

function loader(){
  const loader = document.querySelector('.loader')
  setTimeout(() => {
    loader.style.opacity = '0'
    setTimeout(() => {
      loader.style.display = 'none'
    }, 500)
  },2000)
}
module.exports = loader

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((module) => {

function modal (){
    // modal
    const modalTrigger = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal'),
    modalCloseBtn = document.querySelector('[data-close]')
  function openModal () {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
    clearInterval(modalTimer)
  }
  function closeModal () {
    modal.style.display = 'none'
    document.body.style.overflow = ''
  }
  modalTrigger.forEach(item => {
    item.addEventListener('click', openModal)
  })
  modalCloseBtn.addEventListener('click',closeModal)
  modal.addEventListener('click', (e) => {
    if(e.target == modal){
      closeModal()
    }
  })
  document.addEventListener('keydown',(e) => {
    if(e.code === 'Escape'){
      closeModal()
    }
  })
  const modalTimer = setTimeout(openModal, 3000)
  function showMOdalByScroll() {
    if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
      openModal()
      window.removeEventListener('scroll', showMOdalByScroll)
    }
  }
  window.addEventListener('scroll', showMOdalByScroll)
}
module.exports = modal

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((module) => {

function slider() {
    //Slider
    const slides = document.querySelectorAll('.offer__slide'),
      next = document.querySelector('.offer__slider-next'),
      prev = document.querySelector('.offer__slider-prev'),
      total = document.querySelector('#total'),
      current = document.querySelector('#current')
    if(slides.length < 10){
      total.textContent = `0${slides.length}`
    }else{
      total.textContent = slides.length
    }
       
    let slideIndex = 1
    function showSlides(idx){
      if(idx > slides.length){
        slideIndex = 1
      }
      if(idx < 1){
        slideIndex = slides.length
      }
      slides.forEach((item) => {
        item.style.display = 'none'
      })
      slides[slideIndex-1].style.display = 'block'
      if(slides.length < 10){
        current.textContent = `0${slideIndex}`
      }else{
        current.textContent = slideIndex
      }
    }
    showSlides()
    function plusSlides(idx){
      showSlides(slideIndex = slideIndex + idx)
    }
    next.addEventListener('click', () => {
      plusSlides(1)
    })
    prev.addEventListener('click', () => {
      plusSlides(-1)
    })
}
module.exports = slider

/***/ }),

/***/ "./src/modules/tab.js":
/*!****************************!*\
  !*** ./src/modules/tab.js ***!
  \****************************/
/***/ ((module) => {

function tab(){
  const tabParent = document.querySelector('.tabheader__items'),
  tabs = document.querySelectorAll('.tabheader__item'),
  tabsContent = document.querySelectorAll('.tabcontent')
// Tabs
function hideTabContent () {
  tabsContent.forEach((item) => {
    item.style.display = 'none'
  })
  tabs.forEach((item) => {
    item.classList.remove('tabheader__item_active')
  })
}
function showTabContent (i) {
  tabsContent[i].style.display = 'block'
  tabs[i].classList.add('tabheader__item_active')
}
hideTabContent()
showTabContent(2)
tabParent.addEventListener('click', (event) => {
  const target = event.target
  if(target && target.classList.contains('tabheader__item')){
    tabs.forEach((item, idx) => {
      if(target == item){
        hideTabContent()
        showTabContent(idx)
      }
    })
  }
})
}
module.exports = tab

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((module) => {

function timer () {
    //Timer
    const deadline = '2024-06-21'
    function getTimeRemaing (endtime){
      let days, hours, minutes, seconds
      const timer = Date.parse(endtime) - Date.parse(new Date())
      if(timer <= 0){
        days = 0
        hours = 0
        minutes = 0
        seconds = 0
      }else{
        days = Math.floor(timer / (1000 * 60 * 60 * 24))
        hours = Math.floor((timer / (100 * 60 * 60)) % 24)
        minutes = Math.floor((timer / (1000 * 60)) % 60)
        seconds = Math.floor((timer / (1000)) % 60)
      }
     
      return {timer, days, hours, minutes, seconds}
    }
    function getZero(num){
      if(num >= 0 && num < 10){
        return `0${num}`
      }else{
        return num
      }
    }
    
    function setClock (selector, endtime) {
      const timer = document.querySelector(selector),
        days = timer.querySelector('#days'),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        timeInterval = setInterval(updateClock,1000)
      
      updateClock()
  
      function updateClock(){
        const t = getTimeRemaing(endtime)
  
        days.innerHTML = getZero(t.days)
        hours.innerHTML = getZero(t.hours)
        minutes.innerHTML = getZero(t.minutes)
        seconds.innerHTML = getZero(t.seconds)
        if(t.timer<=0){
          clearInterval(timeInterval)
        }
      }
    }
    setClock('.timer', deadline)
}
module.exports = timer

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
window.addEventListener('DOMContentLoaded',() => {
 const clas = __webpack_require__(/*! ../modules/class */ "./src/modules/class.js"),
  form = __webpack_require__(/*! ../modules/form */ "./src/modules/form.js"),
  loader = __webpack_require__(/*! ../modules/loader */ "./src/modules/loader.js"),
  modal = __webpack_require__(/*! ../modules/modal */ "./src/modules/modal.js"),
  slider = __webpack_require__(/*! ../modules/slider */ "./src/modules/slider.js"),
  tab = __webpack_require__(/*! ../modules/tab */ "./src/modules/tab.js"),
  timer = __webpack_require__(/*! ../modules/timer */ "./src/modules/timer.js")
  clas()
  form()
  loader()
  modal()
  slider()
  tab()
  timer()
})

/******/ })()
;
//# sourceMappingURL=bundle.js.map