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