    // 메인배너 
    var swiper = new Swiper(".main-banner", {
      loop: true,                      // 반복 재생
      centeredSlides: true,           // 슬라이드 중앙 정렬
      effect: "fade",                 // fade 전환 효과 사용
      fadeEffect: {
        crossFade: true,             // 이전 슬라이드와 부드럽게 겹쳐 전환
      },
      speed: 2000,                    // 전환 속도 (ms) → 2초
      autoplay: {
        delay: 3000,                  // 자동 재생 간격 (3초)
        disableOnInteraction: false, // 사용자 조작 후에도 자동재생 유지
      },
      pagination: {
        el: ".swiper-pagination",     // 페이지네이션 요소
        clickable: true,              // 클릭 가능하게 설정
      },
    });
    AOS.init({
      duration: 800,
      once: true,
    });
    // 스크롤 시 메뉴 고정 및 색 변경
    $(function () {
      $(document).ready(function () {

        var scrollOffset = $('header').offset();

        $(window).scroll(function () {
          if ($(document).scrollTop() > scrollOffset.top) {
            $('header').addClass('scroll-fixed');
          }
          else {
            $('header').removeClass('scroll-fixed');
          }
        });
      });
    });
    // 베스트
    var swiper1 = new Swiper(".best-slide", {
      loop: true,
      slidesPerView: 5,
      spaceBetween: 30,
      centeredSlides: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      speed: 1000,
      autoplay: {
        delay: 5000,                  // 자동 재생 간격 (3초)
        disableOnInteraction: false, // 사용자 조작 후에도 자동재생 유지
      },
      navigation: {
        nextEl: ".best-slide .swiper-button-next"
      },
    });

    $('.best-slide .swiper-slide').hover(function () {
      swiper1.autoplay.stop();
    }, function () {
      swiper1.autoplay.start();
    });

    // 시즈널
    var swiper2 = new Swiper(".about07-shop", {
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: ".about07-shop .swiper-button-next",
        prevEl: ".about07-shop .swiper-button-prev",
      },
      slidesPerView: 2,
    });
    // 오프라인
    var swiper3 = new Swiper(".offline", {
      loop: true,                      // 반복 재생
      centeredSlides: true,           // 슬라이드 중앙 정렬
      effect: "fade",                 // fade 전환 효과 사용
      fadeEffect: {
        crossFade: true,             // 이전 슬라이드와 부드럽게 겹쳐 전환
      },
      speed: 2000,                    // 전환 속도 (ms) → 2초
      autoplay: {
        delay: 3000,                  // 자동 재생 간격 (3초)
        disableOnInteraction: false, // 사용자 조작 후에도 자동재생 유지
      },
      pagination: {
        el: ".offline02 .swiper-pagination",     // 페이지네이션 요소
        clickable: true,              // 클릭 가능하게 설정
      },
    });
    // 갤러리 센터
    var swiper4 = new Swiper(".center", {
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: true,
      navigation: {
        nextEl: ".center .swiper-button-next",
        prevEl: ".center .swiper-button-prev",
      },
      loop: true,
    });