$(function() {  
  var mqlMaxTablet = window.matchMedia("(max-width: 767px)");

  // Swiper
  var topSwiper = new Swiper ('.js-swiper', {
    pagination: '.swiper-pagination',
    paginationClickable: true
  });

  var destinationGallery = new Swiper('.js-destination-gallery', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
  });

  $(".js-destination-thumbs").on('click', '.destination-thumb', function(){
    destinationGallery.slideTo($(this).index(), 300);
  });

  var taNav = new Swiper('.js-ta-nav', {
    slidesPerView: 'auto',
    preventClicks: false
    // nextButton: '.ta-nav-button-next',
    // prevButton: '.ta-nav-button-prev',
  });

  var profilePicturesNav = new Swiper('.js-profile-pictures', {
    slidesPerView: 'auto'
  });

  var newsTemplatesSwiper = new Swiper('.js-ta-news-templates-swiper', {
    slidesPerView: 2,
    slidesPerGroup: 2,
    slidesPerColumn: 2,
    paginationClickable: true,
    spaceBetween: 10,
    nextButton: '.ta-news-templates-button--next',
    prevButton: '.ta-news-templates-button--prev',
  });

  // jQuery UI Tabs
  $('.jqueryui-tabs').tabs();
  $('.jqueryui-news-post-tabs').tabs({
    active: 1
  });

  // Init FAQs Accordion
  function initFAQsAccordion() {
    if (mqlMaxTablet.matches) {
      $( ".jqueryui-faqs-accordion" ).accordion({
        header: ".faqs-header",
        collapsible: true,
        heightStyle: "content"
      });
    }
  }

  // Toggle Question
  function toggleQuestion() {
    $('.js-question-close-button').on('click', function() {
      var $this = $(this);
      $this.siblings('.faq-answer').hide();
      $this.siblings('.faqs-question-title').addClass('faqs-question-title--closed');
      $this.hide();
    })
    $('.js-faqs-question-title').on('click', function() {
      var $this = $(this);
      $this.siblings('.faq-answer').show();
      $this.removeClass('faqs-question-title--closed');
      $this.siblings('.question-close-button').show();
    })
  }

  // jQuery UI DatePicker
  $('.js-datepicker').datepicker({
    showOtherMonths: true,
    selectOtherMonths: true
  }).datepicker("setDate", new Date());

  $('.js-datepicker--extended').datepicker({
    showOtherMonths: true,
    selectOtherMonths: true
  }).datepicker( "option", "dateFormat", "DD d M yy" )
    .datepicker("setDate", new Date());

  $('.js-ta-datepicker').datepicker({
    showOtherMonths: true,
    altField: "#datepicker-alternate",
    altFormat: "MM d yy"
  });

  $( "#datepicker-from" ).datepicker({
    showOtherMonths: true,
    selectOtherMonths: true,
    altField: "#from-alternate",
    onClose: function( selectedDate ) {
      $( "#datepicker-to" ).datepicker( "option", "minDate", selectedDate );
    },
    beforeShow: function(input, inst) {
      $('#ui-datepicker-div').addClass('ta-datepicker ta-datepicker--dashboard');
    }
  });
  $( "#datepicker-to" ).datepicker({
    showOtherMonths: true,
    selectOtherMonths: true,
    altField: "#to-alternate",
    onClose: function( selectedDate ) {
      $( "#datepicker-from" ).datepicker( "option", "maxDate", selectedDate );
    },
    beforeShow: function(input, inst) {
      $('#ui-datepicker-div').addClass('ta-datepicker ta-datepicker--dashboard');
    }
  });

  /* jquery-timepicker v1.8.9 - A jQuery timepicker plugin inspired by Google Calendar. 
   * It supports both mouse and keyboard navigation.
   * Copyright (c) 2015 Jon Thornton - http://jonthornton.github.com/jquery-timepicker/
   */
  $('.js-timepicker').timepicker();

  // jQuery UI SelectMenu
  $('.jqueryui-selectmenu').selectmenu();

  var $jqueryuiGraySelectmenu = $('.jqueryui-gray-selectmenu');
  if ($jqueryuiGraySelectmenu.length) {
    $('.jqueryui-gray-selectmenu')
      .selectmenu()
        .selectmenu( 'widget' )
          .addClass('ui-selectmenu-button--gray')
        .end()
        .selectmenu( 'menuWidget' )
          .addClass('ui-menu--gray');
  }

  var $jqueryuiBrandSelectmenu = $('.jqueryui-brand-selectmenu');
  if ($jqueryuiBrandSelectmenu.length) {
    $jqueryuiBrandSelectmenu
      .selectmenu()
        .selectmenu( 'widget' )
          .addClass('ui-selectmenu-button--brand')
        .end()
        .selectmenu( 'menuWidget' )
          .addClass('ui-menu--brand');
  }

  // jQuery UI ToolTip
  $('.jqueryui-tooltip').tooltip();

  // jQuery UI Dialog
  $( "#register-dialog" ).dialog({
    autoOpen: false,
    dialogClass: "ui-dialog--gray hasArrow",
    draggable: false,
    modal: true,
    resizable: false,
    position: {
      my: "left-20 top+20", 
      at: "left bottom", 
      of: '#register-dialog-trigger',
      collision: 'none'
    },
    width: 532
  });
  $( "#login-dialog" ).dialog({
    autoOpen: false,
    dialogClass: "ui-dialog--gray hasArrow",
    draggable: false,
    modal: true,
    resizable: false,
    position: {
      my: "left-30 top+20", 
      at: "left bottom", 
      of: '#login-dialog-trigger',
      collision: 'none'
    },
    width: 268
  });
  $( "#travel-agent-dialog" ).dialog({
    autoOpen: false,
    dialogClass: "ui-dialog--gray hasArrow ui-travel-agent-dialog",
    draggable: false,
    modal: true,
    resizable: false,
    position: {
      my: "left-10 top+20", 
      at: "left bottom", 
      of: '#travel-agent-dialog-trigger',
      collision: 'none'
    },
    width: 770
  });
  $('.js-dialog-button').on( "click", function() {
    var id = $(this).data('id');
    $(".ui-dialog-content").dialog("close");
    $('#'+id).dialog("open");
  });
  $( "#retrieve-password-dialog" ).dialog({
    autoOpen: false,
    dialogClass: "ui-dialog--gray",
    draggable: false,
    modal: true,
    resizable: false,
    position: {
      my: "left+20 top", 
      at: "right top", 
      of: '#login-dialog',
      collision: 'none'
    },
    width: 286
  });
  $('.js-retrieve-password-button').on( "click", function() {
    var id = $(this).data('id');
    $('#'+id).dialog("open");
  });
  // Init Message Diaolog
  $( ".js-dialog-container" ).dialog({
    autoOpen: false,
    draggable: false,
    modal: true,
    resizable: false,
    width: 970
  });
  
  // Show Book Transfer
  function showBookTransfer() {
    $('.js-more-info').on('click', function(event) {
      event.stopImmediatePropagation();
    });
    $('.js-transfer-item').on('click', function() {
      $(this).addClass('transfer-item--active')
             .siblings('.transfer-item').removeClass('transfer-item--active');
    });
  };

  function toggleMenu() {

    if (mqlMaxTablet.matches) {
      var backButton = '<a class="top-nav__item-title top-nav__item-title--back" href="#">Back</a>',
          topNavIconTemplate = '<li class="top-nav-icon"></li>',
          menu = '.top-nav',
          $menu = $(menu),
          menuItem = '.top-nav__item',
          $menuItem = $(menuItem),
          subMenuTrigger = '.js-submenu-trigger',
          $subMenuTrigger = $(subMenuTrigger),
          topNavIcon = '.top-nav-icon',
          $topNavIcon = $(topNavIcon);
      
      // Toggle Menu
      $('#menu-trigger').on('click', function() {
        $('#top-nav').toggleClass('top-nav--opened');
        $menu.removeClass('top-nav--current top-nav--subview');
        $menuItem.removeClass('top-nav__item--current top-nav__item--subview');
        $('.top-nav__item-title--submenu').removeClass('top-nav__item-title--current').addClass('js-submenu-trigger');
      });

      // Toggle SubMenu
      $subMenuTrigger.click(function(e) {
        var $this = $(this);

        if ( $this.hasClass('js-submenu-trigger') ) {
          e.preventDefault();

          // if ($this.siblings( $menu ).is(':hidden')) {
            $this.toggleClass('js-submenu-trigger top-nav__item-title--current');

            $this.parent( menuItem ).addClass('top-nav__item--current')
                 .parent( menu ).addClass('top-nav--subview').removeClass('top-nav--current')
                 .parent( menuItem ).toggleClass('top-nav__item--current top-nav__item--subview');

            $this.siblings( menu ).addClass('top-nav--current');
          // } else {

            // $this.toggleClass('js-submenu-trigger top-nav__item-title--current')
            //      .siblings( $menu ).removeClass('top-nav--current');
            // $this.parent( $menuItem ).removeClass('top-nav__item--current')
            //      .parent( $menu ).removeClass('top-nav--subview').addClass('top-nav--current')
            //      .parent( $menuItem ).removeClass('top-nav__item--subview').addClass('top-nav__item--current');
          // }
        }

      });

      // Add Back Button
      if ( !$subMenuTrigger.prev('.top-nav__item-title--back').length ) {
        $subMenuTrigger.before(backButton);
      }

      // Back Action
      $('.top-nav__item-title--back').click(function(e) {
        var $this = $(this);
        e.preventDefault();

        $this.siblings('.top-nav__item-title').toggleClass('js-submenu-trigger top-nav__item-title--current');
        $this.siblings( menu ).removeClass('top-nav--current');
        $this.parent( menuItem ).removeClass('top-nav__item--current')
             .parent( menu ).removeClass('top-nav--subview').addClass('top-nav--current')
             .parent( menuItem ).removeClass('top-nav__item--subview').addClass('top-nav__item--current');
      });

      // Add Icon Button
      if ( !$menu.children( topNavIcon ).length ) {
        $menu.prepend(topNavIconTemplate);
      }

      // Icon Action
      $('.top-nav-icon').click(function() {
        var $this = $(this),
            $thisParent = $this.parent( menu );

        $thisParent.removeClass('top-nav--subview').addClass('top-nav--current');
        $thisParent.find(menu).removeClass('top-nav--current top-nav--subview');
        $thisParent.find(menuItem).removeClass('top-nav__item--current top-nav__item--subview');
        $thisParent.find('.top-nav__item-title--submenu').removeClass('top-nav__item-title--current')
                                                         .addClass('js-submenu-trigger');
        $thisParent.parent('.top-nav__item--subview').toggleClass('top-nav__item--subview top-nav__item--current');
      })
    }
  };

  showBookTransfer();
  toggleQuestion();  
  initFAQsAccordion();
  toggleMenu();

  $( window ).resize(function() {
    initFAQsAccordion();
    toggleMenu();
  });
  
});

// Init google maps for destination page
function initMap() {
  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, {
    center: {lat: 17.656, lng: -101.620},
    zoom: 8
  });
}