//검색창 요소(search)찾기
const searchEl = document.querySelector('.search');
const searchInputEl = document.querySelector('input');

//검색창 요소를 클릭하면 실행
searchEl.addEventListener('click', function(){
  searchInputEl.focus();
});

//검색창 요소 내부 실제 input 요소에 포커스 되면 실행
searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder','통합검색');
});

//검색창 요소 내부 실제 input 요소에서 포커스가 해제(블러) 되면 실행
searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder','');
});

//페이지 스크롤에 따른 요소 제어
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', function(){
  console.log(window.scrollY);
  if(window.scrollY > 500){
    //Badge 요소 숨기기!
    gsap.to(badgeEl, .6, {
      opacity : 0,
      display : 'none'
    });
    //상단으로 이동 버튼 보이기!
    gsap.to(toTopEl, .6, {
      opacity : 1,
      x:0
    });
  }else{
    //Badge 요소 보이기!
    gsap.to(badgeEl, .6, {
      opacity : 1,
      display : 'block'
    });
    //상단으로 이동 버튼 숨기기!
    gsap.to(toTopEl, .6, {
      opacity : 0,
      x:100
    });
  }
});
toTopEl.addEventListener('click',function(){
  gsap.to(window, .6,{
    scrollTo : 0
  });
})

//나타날 요소 (.fade-in)들을 찾기
const fadeEls = document.querySelectorAll('.visual .fade-in');
//요소들을 하나씩 반복해서 처리
fadeEls.forEach(function(fadeEl, index){
  gsap.to(fadeEl, 1, {
    delay: (index +1) * .7,
    opacity : 1
  });
});

new Swiper('.notice .swiper',{
  direction : 'vertical',
  autoplay : true,
  loop:true
}); 

new Swiper('.promotion .swiper',{
  //direction:'horizontal', //수평 슬라이드
  autoplay:true, //자동 재생여부
  loop : true, //반복 재생 여부
  slidesPerView : 3, // 한 번에 보여줄 슬라이드 개수
  spaceBetween : 10, //슬라이드 사이 여백
  centeredSlides:true, // 1번 슬라이드가 가운데 보이게
  pagination : {
    el:'.promotion .swiper-pagination', //페이지 번호 요소
    clickable:true //사용자의 페이지 번호 제어 여부
  },
  navigation :{ //슬라이드 이전, 다음 버튼 사용
    prevEl:'.promotion .swiper-button-prev',
    nextEl:'.promotion .swiper-button-next'
  }
});

const promotionEl = document.querySelector('section.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');

promotionToggleBtn.addEventListener('click',function(){
  if(promotionEl.classList.contains('hide')){
    promotionEl.classList.remove('hide');
  }else{
    promotionEl.classList.add('hide');
  }
});

gsap.to('.floating1',1.5, {
  delay : 1, //얼마나 늦게 애니메이션을 시작할 것인지 지연 시간 설정.
  y:15, //transform : transkateY(수치):와 같음. 수직으로 얼마나 움직일지 설정
  repeat:-1,  //몇 번 반복하는지 설정. -1은 무한반복
  yoyo:true,  //한 번 재생된 애니메이션을 다시 뒤로 재생
  ease:Power2.easeInOut //Easing 함수 적용. 
});
gsap.to('.floating2',2, {
  delay : .5, //얼마나 늦게 애니메이션을 시작할 것인지 지연 시간 설정.
  y:15, //transform : transkateY(수치):와 같음. 수직으로 얼마나 움직일지 설정
  repeat:-1,  //몇 번 반복하는지 설정. -1은 무한반복
  yoyo:true,  //한 번 재생된 애니메이션을 다시 뒤로 재생
  ease:Power2.easeInOut //Easing 함수 적용. 
});
gsap.to('.floating3',2.5, {
  delay : 1.5, //얼마나 늦게 애니메이션을 시작할 것인지 지연 시간 설정.
  y:20, //transform : transkateY(수치):와 같음. 수직으로 얼마나 움직일지 설정
  repeat:-1,  //몇 번 반복하는지 설정. -1은 무한반복
  yoyo:true,  //한 번 재생된 애니메이션을 다시 뒤로 재생
  ease:Power2.easeInOut //Easing 함수 적용. 
});

const spyEls = document.querySelectorAll('.scroll-spy');

spyEls.forEach(function(spyEl){
  new ScrollMagic
  .Scene({ //감시할 장면추가(Scen)
    triggerElement:spyEl, // 보여짐 여부를 감시할 요소 지정
    triggerHook:.8 //화면의 80% 지점에서 보여짐 여부 감시
  })
  .setClassToggle(spyEl, 'show') //요소가 화면에 보이면  show 클래스 추가
  .addTo(new ScrollMagic.Controller()); //컬드롤러에 장면 할당(필수!)
});

new Swiper('.awards .swiper',{
  autoplay : true,
  loop:true,
  spaceBetween : 30,
  slidesPerView : 5,
  navigation:{
    prevEl : '.awards .swiper-button-prev',
    nextEl :  '.awards .swiper-button-next'
  }
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
