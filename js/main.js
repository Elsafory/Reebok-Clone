//nav scroll
let nav = $(".rim-rattlink").offset().top;
$(window).scroll(function(){
    let scroll = $(window).scrollTop();
    if(scroll > nav +50){
        $(".header").css("visibility",'hidden')
    }
    else{
        $(".header").css("visibility",'visible')
    }
})
// new arrival;
$('#new_arrival').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    dots:true,
    slideBy:4,
    navText : ["<i class='fa-solid fa-arrow-left-long'></i>","<i class='fa-solid fa-arrow-right-long'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
// FEATURING THE BEST;
$('#the_best').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    dots:false,
    slideBy:4,
    navText : ["<i class='fa-solid fa-arrow-left-long'></i>","<i class='fa-solid fa-arrow-right-long'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
// gift;
$('#gift').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    dots:false,
    slideBy:4,
    navText : ["<i class='fa-solid fa-arrow-left-long'></i>","<i class='fa-solid fa-arrow-right-long'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
// gift;
$('#keep-fresh').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    dots:true,
    slideBy:4,
    navText : ["<i class='fa-solid fa-arrow-left-long'></i>","<i class='fa-solid fa-arrow-right-long'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})





