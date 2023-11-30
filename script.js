function updateParagraph() {
    const paragraph = document.getElementById('myParagraph');
    if (window.innerWidth <= 768) {
        if (paragraph) {
            paragraph.innerHTML = "Hi, I’m Maciej.I’m interested in sport, music, chess, economics, animals, cinematography and IT. <br>I specialise mainly in object-oriented programming and databases but I am very flexible and open to various cooperation. My greatest passion is sport and all sorts of disciplines from mixed martial arts to chess and billiards. I also love running, swimming,cycling, volleyball, tennis, snooker and climbing mountains. <br>In cinematography, my favourite characters are Beatrix Kiddo played by Uma Thurman and John Wick played by Keanu Reeves.";
        }
    } else {
        if (paragraph) {
            paragraph.innerHTML = "Hi, I’m Maciej.I’m interested in sport, music, chess, economics, animals, cinematography and IT. <br>I specialise mainly in object-oriented programming and databases but I am very flexible and open to various cooperation.<br> My greatest passion is sport and all sorts of disciplines from mixed martial arts to chess and billiards. <br>I also love running, swimming, cycling, volleyball, tennis, snooker and climbing mountains. <br>In cinematography, my favourite characters are Beatrix Kiddo played by Uma Thurman and John Wick played by Keanu Reeves.";
        }
    }
}

function handleResize() {
    if (window.innerWidth <= 768) {
        window.addEventListener('resize', updateParagraph);
    } else {
        window.removeEventListener('resize', updateParagraph);
    }
}

window.addEventListener('load', function () {
    updateParagraph();
    handleResize();
});

// Initial setup
handleResize();


let indexValue = 1;

let btm_slide =(e)=>{
  showImg(indexValue = e);   
}

let side_slide =(e)=>{
  showImg(indexValue += e);   
}

let showImg =(e)=>{
 let i;   
 let img = document.querySelectorAll('.container2 .images img');
 let sliders = document.querySelectorAll('.container2 .btn-sliders span');
 if(e > img.length){
   indexValue = 1;     
 }
 if(e < 1){
   indexValue = img.length;     
}
for(let i=0;i<img.length;i++){
  img[i].classList.remove('active');
  img[i].classList.add('inactive');
  sliders[i].style.background = 'dimgrey';
}
  img[indexValue - 1].classList.remove('inactive'); 
  img[indexValue - 1].classList.add('active');  
  sliders[indexValue - 1].style.background = 'white';  
}

setInterval(()=>{
 indexValue += 1;
 showImg(indexValue)
},3500)
showImg(indexValue)

const header = document.querySelector(".navbar")


// Wait for the document to be ready
$(document).ready(function() {
	// Handle the scroll event
	$(window).scroll(function() {
	  var top = $(window).scrollTop();
  
	  if (top >= 100) {
		$(".navbar").addClass('navbarDark');
	  } else {
		$(".navbar").removeClass('navbarDark');
	  }
	});
  });
 
(function($) { "use strict";
 
 	//Parallax            
              
	function scrollBanner() {
	  $(document).on('scroll', function(){
      var scrollPos = $(this).scrollTop();
        $('.parallax-fade-top').css({
          'top' : (scrollPos/2)+'px',
          'opacity' : 1-(scrollPos/700)
        });
        $('.parallax-00').css({
          'top' : (scrollPos/-3.5)+'px'
        });
        $('.parallax-01').css({
          'top' : (scrollPos/-2.8)+'px'
        });
        $('.parallax-top-shadow').css({
          'top' : (scrollPos/-2)+'px'
        });
      });    
	  }
	scrollBanner();	              

	//Page cursors

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
        t.style.left = n.clientX + "px", 
		t.style.top = n.clientY + "px", 
		e.style.left = n.clientX + "px", 
		e.style.top = n.clientY + "px", 
		i.style.left = n.clientX + "px", 
		i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }              
              
  
//Scroll back to top
              
$(document).ready(function() {	
		var offset = 300;
		var duration = 400;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.scroll-to-top').addClass('active-arrow');
			} else {
				jQuery('.scroll-to-top').removeClass('active-arrow');
			}
		});				
		jQuery('.scroll-to-top').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})
  
  		
		/* Hero Case study images */			
		
		$('.case-study-name:nth-child(1)').on('mouseenter', function() {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(1)').addClass("show");
			$('.case-study-name:nth-child(1)').addClass('active');
		})
		$('.case-study-name:nth-child(2)').on('mouseenter', function() {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(2)').addClass("show");
			$('.case-study-name:nth-child(2)').addClass('active');
		})
		$('.case-study-name:nth-child(3)').on('mouseenter', function() {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(3)').addClass("show");
			$('.case-study-name:nth-child(3)').addClass('active');
		})
		$('.case-study-name:nth-child(4)').on('mouseenter', function() {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(4)').addClass("show");
			$('.case-study-name:nth-child(4)').addClass('active');
		})
		$('.case-study-name:nth-child(1)').trigger('mouseenter')
  
  });            
              
})(jQuery);