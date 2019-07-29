form1.addEventListener('submit',(e)=>{
    e.preventDefault()
    let formData = new FormData()
    let fileInput =document.querySelector('input[name="file"]')
     formData.append('file',fileInput.files[0])
     
    let xhr = new XMLHttpRequest()
    xhr.open('POST',form1.action)
    xhr.onload=()=>{
       img1.src = `http://127.0.0.1:3000/preview/${xhr.response}`
    }
    
    xhr.send(formData)
  })
  