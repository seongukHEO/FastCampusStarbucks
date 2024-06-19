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
            //버튼 보이기
            gsap.to('#to-top' , 0.2, {
                x: 0,
                
            })

        }else{
            //배찌 보이기
            gsap.to(badgeEl, 0.6, {
                opacity: 1,
                display : 'block'
            })

            //버튼 숨기기
            gsap.to('#to-top' , 0.2, {
                x: 100,

            })
            
        }
    }, 300
))

const toTopEl = document.querySelector('#to-top')
toTopEl.addEventListener('click', function(){
    gsap.to(window, 0.7, {
        scrollTo: 0
    })
})



const fadeEls = document.querySelectorAll('.visual .fade-in')
fadeEls.forEach(function(fadeEl, index){
    // fadeEls가 반복하면서 밑의 코드를 실행한다
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * 0.7,
        opacity: 1
    })
})


new Swiper('.notice-line .swiper', {
    direction: 'vertical',
    autoplay: true,
    loop: true
})

new Swiper('.promotion .swiper', {
    direction: 'horizontal',
    slidesPerView: 3, //한 번에 보여줄 슬라이드 갯수
    spaceBetween: 10, //슬라이드 사이 여백
    centeredSlides: true, //1번 슬라이드가 가운데 보이기
    loop: true, 
    autoplay: {
        delay: 3000
    },
    pagination: {
        el : '.promotion .swiper-pagination',  //페이지 번호 선택
        clickable: true, //사용자의 페이지 번호 요소 제어 가능 여부

    },

    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next',
    }
    
})

new Swiper('.awards .swiper', {
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next'
    }
})








const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion')
let isHidePromotion = false

promotionToggleBtn.addEventListener('click', function(){
    isHidePromotion = !isHidePromotion
    if(isHidePromotion){
        //숨김 처리
        promotionEl.classList.add('hide')
    }else{
        //보여짐 처리
        promotionEl.classList.remove('hide')

    }
})

//에니메이션
function floationObject(selector){
    gsap.to(selector, 1, {
        y: 20,
        repeat: -1,
        yoyo: true,
        ease: Power1.easeInOut,
        delay: 1,
    })
}

floationObject('.floating')

const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function(spyEl){
    new ScrollMagic.Scene({
        triggerElement: spyEl, 
        triggerHook: 0.8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller())
})

//올해가 몇년도인지 계산
const thisYear = document.querySelector('.this-year')
//요소가 가지고 있는 text
thisYear.textContent = new Date().getFullYear()









