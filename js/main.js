const searchEl = document.querySelector('.search')
const searchInput = searchEl.querySelector('input')

searchEl.addEventListener('click', function(){
    //로직 입력
    searchInput.focus()
})

searchInput.addEventListener('focus', function(){
    searchEl.classList.add('focused')
    searchInput.setAttribute('placeholder', '통합검색')
})

searchInput.addEventListener('blur', function(){
    searchEl.classList.remove('focused')
    searchInput.setAttribute('placeholder', '')
})

