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
});

// Badge

//_.throttle(함수, 시간을 추가)
const badgeEl = document.querySelector('header .badges')
window.addEventListener('scroll' , _.throttle(
    function(){
        console.log(window.scrollY)
        if(window.scrollY > 500){
            //배찌 숨기기
            gsap.to(badgeEl, 0.6, {
                opacity: 0,
                display : 'none' 
            })
        }else{
            //배찌 보이기
            gsap.to(badgeEl, 0.6, {
                opacity: 1,
                display : 'block'
            })
            
        }
    }, 300
))

const fadeEls = document.querySelectorAll('.visual .fade-in')
fadeEls.forEach(function(fadeEl, index){
    // fadeEls가 반복하면서 밑의 코드를 실행한다
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * 0.7,
        opacity: 1
    })
})




