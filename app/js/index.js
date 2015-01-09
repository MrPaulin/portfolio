$(document).ready(function (){

  // Galeries light box
  
  $(".fancybox").fancybox();

  // Divers composants bootstrap

  $('.dropdown-toggle').dropdown();



  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  // Smooth scroll

  var links=$(".postit a,.elem a");
  links.on('click', function(){
    var link=$(this);
    var href=link.attr('href');
    var target=$(href).offset().top;
    $('body,html').stop().animate({
      scrollTop:target-310
    },1000);
    return false;
  });
  
  var olinks=$(".souspostit a,.cat a");
  olinks.on('click', function(){
    var olink=$(this);
    var ohref=olink.attr('href');
    var otarget=$(ohref).offset().top;
    $('body,html').stop().animate({
      scrollTop:otarget-10
    },1000);
    return false;
  });

  //Fade au scroll
  
  var sections=$('[data-scrollspy]');
  $(document).on('scroll',function(){
    var target = $(this).scrollTop() + $(window).height()/2;
    sections.each(function(){
      var top = $(this).offset().top;
      if (top < target){
        $(this).addClass('show');
      }
      if (top > target){
        $(this).removeClass('show');
      }
    })
  });
  
  // Indication du déplacement dans le menu

  var links=$('.postit a');
  var linkSections = links.map(function(){
    var href = $(this).attr('href');
    return $(href);
  });
  
  $(document).on('scroll',function(){
    
    var scrollTop = $(this).scrollTop();
    var target = scrollTop + $(window).height()/2;
    
    var current = $("#accueil");
    
    linkSections.each(function (){
      if($(this).offset().top < target){
        current = this;
      }
    });

    var id = current[0].id;

    if(id=="realisations"){
      $(".souspostit").fadeIn("slow");
      $("#menucontact").addClass("contact");
    }
    else{
      $(".souspostit").css("display","none");
      $("#menucontact").removeClass("contact");
    }

    if(scrollTop>=$("#about").offset().top + 10){
      var bar = $('.progress-bar');
      $(bar).each(function(){
        bar_width = $(this).attr('aria-valuenow');
        $(this).width(bar_width + '%');
      });
    }
    
    links.parent().removeClass('active');
    
    links.filter('[href=#'+id+']').parent().addClass('active');
  });
  
});




