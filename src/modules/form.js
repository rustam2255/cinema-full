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