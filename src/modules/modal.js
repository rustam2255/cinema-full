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