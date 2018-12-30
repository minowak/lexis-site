(function ($) {
  "use strict"; // Start of use strict

  var setPl = function () {
    $('#services_menu_item').html("Oferta");
    $('#prices_menu_item').html("Cennik");
    $('#about_menu_item').html("Dojazd");
    $('#team_menu_item').html("O mnie");
    $('#contact_menu_item').html("Kontakt");
    $('#lead_in').html("Barbara Nowak<br>Tłumacz przysięgły języka włoskiego");
    $('#services_button').html("Oferta");
    $('#services_title').html("Oferta");
    $('#services_subheading').html("Wykonuję tłumaczenia zwykłe, specjalistyczne i uwierzytelnione z języka włoskiego i na język włoski.<br>Dokumenty wymagające uwierzytelnienia to między innymi:");
    $('#court_documents').html("Dokumenty sądowe");
    $('#court_documents_list').html("Postanowienia, wyroki, materiały potrzebne do prowadzenia sprawy");
    $('#acts').html("Akty i zaświadczenia");
    $('#acts_list').html("Akty notarialne, umowy spółek, umowy kupna, akty urzędu stanu cywilnego, zaświadczenia urzędowe");
    $('#other').html("Inne");
    $('#other_list').html("Świadectwa i dyplomy szkolne, zaświadczenia lekarskie i dokumentacja medyczna, dokumenty samochodowe");
    $('#prices_header').html("Cennik");
    $('#prices_content').html("Standardowa cena tłumaczenia:<br>- z języka włoskiego na polski: 40,00 zł<br>- z języka polskiego na włoski: 46,00 zł");
    $('#prices_content_2').html("Cena umowna w zależności od rodzaju i stopnia trudności tekstu. Tłumaczenia powyżej 10 stron - 5% rabatu; powyżej 20 stron - 10% rabatu. Wystawiam faktury zwykłe, firma zwolniona z VAT.");
    $('#about_header').html("Dojazd");
    $('#address').html("ul. Chocimska 33/3<br>30-057, Kraków");
    $('#team_header').html("O mnie");
    $('#team_content').html("Absolwentka italianistyki Uniwersytetu Jagiellońskiego w Krakowie, tłumacz przysięgły od 2005 roku.");
    $('#translator_caption').html("Tłumacz przysięgły");
    $('#team_content_2').html('Wpisana na <a href="http://bip.ms.gov.pl/pl/rejestry-i-ewidencje/tlumacze-przysiegli/lista-tlumaczy-przysieglych/search.html?Name=barbara&Surname=nowak&Language=22">' +
      'listę tłumaczy przysięgłych Ministerstwa Sprawiedliwości</a> pod numerem <b>TP/2830/05</b> i na listę tłumaczy uznanych przez Konsulat Republiki Włoskiej w Warszawie. Posiadam wieloletnią praktykę ' +
      'w tłumaczeniach przysięgłych i zwykłych z różnych dziedzin,z języka włoskiego i na język włoski.');
    $('#team_content_3').html("Zapewniam pełną dyskrecję i ochronę danych osobowych. Realizuję tłumaczenia w krótkich terminach, solidnie i z zachowaniem wszelkich wymaganych standardów.");
    $('#team_content_4').html("Dokumenty można dostarczać osobiście lub drogą e-mailową. Odbiór osobisty lub wysyłka pocztą albo kurierem.");
    $('#contact_header').html("Kontakt");
  }

  var setIt = function () {
    $('#services_menu_item').html("OFFERTA");
    $('#prices_menu_item').html("PREZZI");
    $('#about_menu_item').html("COME ARRIVARE");
    $('#team_menu_item').html("CHI SONO");
    $('#contact_menu_item').html("CONTATTO");
    $('#lead_in').html("Barbara Nowak<br>Traduttrice giurata della lingua italiana");
    $('#services_button').html("Offerta");
    $('#services_title').html("Offerta");
    $('#services_subheading').html("Realizzo traduzioni semplici e asseverate dall’italiano in polacco e dal polacco in italiano. I documenti che richiedono traduzione asseverata sono, tra l’altro:");
    $('#court_documents').html("Documenti giudiziari");
    $('#court_documents_list').html("Decreti, sentenze, materiali e istanze per procedimenti giudiziari");
    $('#acts').html("Atti e certificazioni");
    $('#acts_list').html("Atti notarili, contratti societari, statuti, atti di Ufficio di Stato Civile, certificati ufficiali, licenze");
    $('#other').html("Altro");
    $('#other_list').html("Certificati scolastici, diplomi, lauree e supplementi, cartelle cliniche, certificati e referti medici, carte di circolazione di autoveicoli, patenti di guida, carte d’identità ecc.");
    $('#prices_header').html("Prezzi");
    $('#prices_content').html("Prezzo delle traduzioni standard:<br>- dall’italiano in polacco: 40,00 PLN<br>- dal polacco in italiano: 46,00 PLN");
    $('#prices_content_2').html("Il prezzo è trattabile e varia a seconda del tipo e del grado di difficoltà del testo. Rilascio fatture semplici, la ditta è esente dall’IVA (VAT). Per le traduzioni di oltre 10 cartelle applico 5% di sconto; oltre 20 cartelle - 10% di sconto.");
    $('#about_header').html("Come arrivare");
    $('#address').html("ul. Chocimska 33/3<br>30-057, Kraków");
    $('#team_header').html("Chi sono");
    $('#team_content').html("Mgr Barbara Nowak, laureata in lingua e lettere italiane presso l’Università Jagellonica di Cracovia.");
    $('#translator_caption').html("Traduttrice giurata della lingua italiana");
    $('#team_content_2').html('Iscritta all’albo dei <a href="http://bip.ms.gov.pl/pl/rejestry-i-ewidencje/tlumacze-przysiegli/lista-tlumaczy-przysieglych/search.html?Name=barbara&Surname=nowak&Language=22">Traduttori Giurati del Ministero della Giustizia della Repubblica di Polonia</a>' +
    ' al numero <b>TP/2830/05</b> nonché all’elenco di traduttori giurati riconosciuti dall’Ambasciata d’Italia a Varsavia. Ho un esperienza pluriennale nelle traduzioni giurate di testi  di diversi campi sia dall’italiano in polacco che dal polacco in italiano.');
    $('#team_content_3').html("Garatisco assoluta riservatezza e segreto professionale nonchè l’osservazione degli standard richiesti in merito al trattamento dei dati personali. Realizzo le traduzioni nei tempi più brevi possibili e con la dovuta cur e precisione.");
    $('#team_content_4').html("I documenti da tradurre possono essere consegnati personalmente o via e-mail previo contatto telefonico. Ritiro personale, per posta o con posta celere.");
    $('#contact_header').html("Contatto");
  }

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  $("#mainNav").addClass("navbar-shrink");
  // Collapse now if page is not at top
  // navbarCollapse();
  // Collapse the navbar when page is scrolled
  // $(window).scroll(navbarCollapse);

  // Hide navbar when modals trigger
  $('.portfolio-modal').on('show.bs.modal', function (e) {
    $('.navbar').addClass('d-none');
  })
  $('.portfolio-modal').on('hidden.bs.modal', function (e) {
    $('.navbar').removeClass('d-none');
  })

  setPl();

  $('#plFlag').on('click', function (e) {
    setPl();
  })
  $('#itFlag').on('click', function (e) {
    setIt();
  })

})(jQuery); // End of use strict
