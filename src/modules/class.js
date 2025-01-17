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