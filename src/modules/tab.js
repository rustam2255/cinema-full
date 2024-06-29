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