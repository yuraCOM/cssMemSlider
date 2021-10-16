let data = [
    'Фраза не очем!!!',
    'Это Смешная Фраза!!!',
    'Это Очень Смешная Фраза!!!',
    'Это Самая-Присамая Смешная Фраза!!!',
    'А Это Просто Космическая Шутка Надорвать Живот!!!',
    'Смешнее Этой Фразы Нет Во Вселенной!!!',
]
let sliderImg = document.querySelector('.img-slider')

let phase = document.querySelector('.phase')
phase.innerHTML = data[1]

let dots = document.querySelector('.control').querySelectorAll('li')
// dots[0].classList.add('.active')

dots.forEach( item =>{
    item.addEventListener('click', ()=>{
        clearActive()
        console.log(item.id)
        item.classList.add('active')

        phase.style.animation = 'moveout 2s'
        sliderImg.style.animation = 'moveout 2s'

        setTimeout(()=>{
            phase.innerHTML = data[ item.id[3] ]
            phase.style.animation = 'visible 3s'
            sliderImg.src = `img/${item.id[3]}.jpg`
            sliderImg.style.animation = 'visible 3s'
        }, 1000)

    })
})

function clearActive() {
    dots.forEach( item =>{
        item.classList.remove('active')
    })

}