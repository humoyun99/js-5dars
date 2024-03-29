// const link=document.querySelector('a')
// console.log(link)
// link.setAttribute('href','https://www.yandex.ru')
// link.innerHTML='go to yandex main page'
// const text=document.querySelector('p')
// console.log(text.getAttribute('class'))
// text.setAttribute('class','sccus')
// text.setAttribute('style','color:red')
// const heading=document.querySelector('h1')
// heading.setAttribute('style','margin;50px')
// heading.style.margin='30px'
// heading.style.color='red'

// const content=document.querySelector('p')
// console.log(content.classList)
// const text=document.querySelector('h1')
// text.classList.add('error')
// text.classList.remove('error')
const ul=document.querySelector('ul')
const button=document.querySelector('button')
button.addEventListener('click',()=>{
    ul.innerHTML+='<li>somthing new text</li>'
})
//addEventlistener buton bosilgan bosilmaganini tikshirib
//bosilgan bbulsa bitta funksiyani ishga tushurib yuboradi
// button,addEventListener('click',()=>{
//     console.log('item clicked')
// })
const item=document.querySelectorAll('li')
item.forEach((items)=>{
    items.addEventListener('click',(e)=>{
        // console.log(e.target)
        e.target.style.backgroundColor=' rgb(45, 31, 200)'
    })
})

// ul.remove()
//ewrewr
