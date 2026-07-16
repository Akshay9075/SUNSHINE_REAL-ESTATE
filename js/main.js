(function ($) {
    "use strict";

    // Shared premium content and subtle reveal animation across every page.
    $(function () {
        var page = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
        var strip = '<section class="experience-strip reveal-on-scroll" aria-label="Sunshine Real Estate highlights"><div class="experience-strip__inner">' +
            '<div class="experience-stat"><i class="fa fa-shield-alt"></i><div><strong>Trusted</strong><span>Transparent property guidance</span></div></div>' +
            '<div class="experience-stat"><i class="fa fa-map-marked-alt"></i><div><strong>Nagpur & Maharashtra</strong><span>Opportunities in prime locations</span></div></div>' +
            '<div class="experience-stat"><i class="fa fa-handshake"></i><div><strong>Personal Support</strong><span>From site visit to final decision</span></div></div>' +
            '</div></section>';
        var showcase = '<section class="property-showcase"><div class="container text-center reveal-on-scroll"><p class="eyebrow">The Collection</p><h2>Curated spaces. Enduring value.</h2><p class="intro">A considered collection of opportunities for modern living, investment and an elevated everyday.</p><div class="showcase-grid">' +
            '<article class="showcase-card"><img loading="lazy" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80" alt="Contemporary villa exterior"><div class="showcase-copy"><small>Residential</small><h3>Modern Living</h3><p>Villas and homes designed around lifestyle.</p></div></article>' +
            '<article class="showcase-card"><img loading="lazy" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80" alt="Elegant modern home interior"><div class="showcase-copy"><small>Curated choices</small><h3>Smart Investments</h3><p>Plots and spaces with genuine potential.</p></div></article>' +
            '<article class="showcase-card"><img loading="lazy" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80" alt="Premium property interior"><div class="showcase-copy"><small>Guided journey</small><h3>Move With Confidence</h3><p>Clear advice at every important step.</p></div></article>' +
            '</div></div></section>' +
            '<section class="container"><div class="enquiry-banner reveal-on-scroll"><h2>Ready to find the right property?</h2><p>Speak with our team for tailored options, site visits and straightforward answers to your property questions.</p><a class="btn" href="contact.html">Schedule a Consultation <i class="fa fa-arrow-right ml-1"></i></a></div></section>';
        var signature = '<section class="signature-section signature-home"><div class="container"><div class="row align-items-center"><div class="col-lg-6 signature-copy reveal-on-scroll"><div class="signature-kicker">The Sunshine Promise</div><h2>Property decisions, made with complete confidence.</h2><p>Every exceptional address begins with clear advice. Our team brings together local insight, transparent documentation and personal attention to help you choose a place that feels right today and holds value tomorrow.</p><div class="signature-points"><div class="signature-point"><i class="fa fa-check"></i>Personally curated opportunities</div><div class="signature-point"><i class="fa fa-check"></i>Guidance for site visits &amp; paperwork</div><div class="signature-point"><i class="fa fa-check"></i>Transparent, relationship-led service</div><div class="signature-point"><i class="fa fa-check"></i>Support beyond the first conversation</div></div></div><div class="col-lg-5 offset-lg-1 reveal-on-scroll"><div class="signature-image"><img loading="lazy" src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85" alt="Luxury contemporary living space"></div></div></div></div></section>';
        var homeGallery = '<section class="home-gallery"><div class="container"><div class="row align-items-end"><div class="col-lg-5 reveal-on-scroll"><p class="gallery-label">A life beautifully placed</p><h2>Find more than a property. Find your feeling of home.</h2><p>From bright modern homes to high-potential land, discover spaces selected to complement the way you want to live.</p><a href="service.html" class="gallery-link">Explore our projects <i class="fa fa-arrow-right"></i></a></div><div class="col-lg-7 reveal-on-scroll"><div class="gallery-mosaic"><img class="gallery-main" loading="lazy" src="https://images.unsplash.com/photo-1600585152915-d208bec867a1?auto=format&fit=crop&w=1100&q=85" alt="Luxury villa with garden"><img class="gallery-top" loading="lazy" src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=650&q=85" alt="Elegant home interior"><div class="gallery-note"><b>Curated for you</b><span>Comfort, value &amp; clarity</span></div></div></div></div></div></section>';
        var aboutStory = '<section class="story-ribbon"><div class="container"><div class="row align-items-center"><div class="col-lg-5 reveal-on-scroll"><p class="story-label">Built on relationships</p><h2>Local insight. Lasting trust.</h2><p class="story-copy">Real estate is never just a transaction. It is a meaningful decision for families and investors alike. We listen first, clarify every detail and guide every client with integrity.</p><div class="story-values"><span><i class="fa fa-gem"></i>Carefully selected</span><span><i class="fa fa-file-alt"></i>Clear documentation</span><span><i class="fa fa-heart"></i>Client-first advice</span></div></div><div class="col-lg-6 offset-lg-1 reveal-on-scroll"><div class="story-image"><img loading="lazy" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85" alt="Elegant modern home"><span>Trust, beautifully built.</span></div></div></div></div></section>';
        var projectJourney = '<section class="journey-section"><div class="container"><div class="row align-items-center"><div class="col-lg-5 reveal-on-scroll"><p class="journey-label">A clear way forward</p><h2>Your property journey, simplified.</h2><p class="journey-intro">A thoughtful process, personal guidance and the right opportunity at every step.</p></div><div class="col-lg-7 reveal-on-scroll"><div class="journey-steps"><div><b>01</b><h3>Discover</h3><p>Tell us the lifestyle or investment you have in mind.</p></div><div><b>02</b><h3>Explore</h3><p>Review suitable options and plan a convenient site visit.</p></div><div><b>03</b><h3>Decide</h3><p>Move ahead with transparent guidance and confidence.</p></div></div></div></div></div></section>';
        var teamCulture = '<section class="people-section"><div class="container"><div class="people-panel reveal-on-scroll"><p>More than a team</p><h2>People who make property feel personal.</h2><span>From your first enquiry to the final handshake, our people bring warmth, local knowledge and careful attention to every conversation.</span><a href="contact.html">Talk to our team <i class="fa fa-arrow-right"></i></a></div></div></section>';
        var contactVisit = '<section class="visit-section"><div class="container"><div class="visit-card reveal-on-scroll"><div><p>Private Consultation</p><h2>Let’s discuss your next address.</h2><span>Connect with us for a relaxed, no-pressure conversation about your property goals.</span><br><a class="btn" href="tel:+919028510897"><i class="fa fa-phone-alt"></i> Call +91 9028510897</a></div><div class="visit-image"><img loading="lazy" src="https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=750&q=85" alt="Premium home exterior"></div></div></div></section>';
        var pageContent = {
            'index.html': signature + homeGallery,
            'about.html': aboutStory,
            'service.html': projectJourney,
            'team.html': teamCulture,
            'contact.html': contactVisit,
            'portfolio.html': showcase
        };
        if (page === 'about.html' && $('.page-header').length) {
            $('.page-header').after(strip);
        }
        $('.footer').first().before(pageContent[page] || signature);

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } });
        }, { threshold: 0.12 });
        document.querySelectorAll('.reveal-on-scroll').forEach(function (element) { observer.observe(element); });
    });
    
    // Initiate the wowjs
    new WOW().init();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // Send homepage property enquiries to WhatsApp with the completed form details.
    $(document).on('submit', '#propertyEnquiryForm', function (event) {
        event.preventDefault();

        var form = this;
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        var name = form.elements['Name'].value.trim();
        var mobile = form.elements['Mobile'].value.trim();
        var email = form.elements['Email'].value.trim();
        var enquiryType = form.elements['Enquiry Type'].value;
        var requirement = form.elements['Message'].value.trim() || 'Not specified';
        var message = 'Hello SUNSHINE REAL ESTATE,%0A%0A' +
            '*New Property Enquiry*%0A' +
            '*Name:* ' + name + '%0A' +
            '*Mobile:* ' + mobile + '%0A' +
            '*Email:* ' + email + '%0A' +
            '*Enquiry Type:* ' + enquiryType + '%0A' +
            '*Requirement:* ' + requirement;

        window.open('https://wa.me/919028510897?text=' + encodeURIComponent(message.replace(/%0A/g, '\n')), '_blank');
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 90) {
            $('.nav-bar').addClass('nav-sticky');
            $('.carousel, .page-header').css("margin-top", "73px");
        } else {
            $('.nav-bar').removeClass('nav-sticky');
            $('.carousel, .page-header').css("margin-top", "0");
        }
    });
    
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // jQuery counterUp
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    
    
    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Testimonial Slider
    $('.testimonial-slider').slick({
        infinite: true,
        autoplay: true,
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.testimonial-slider-nav'
    });
    $('.testimonial-slider-nav').slick({
        arrows: false,
        dots: false,
        focusOnSelect: true,
        centerMode: true,
        centerPadding: '22px',
        slidesToShow: 3,
        asNavFor: '.testimonial-slider'
    });
    $('.testimonial .slider-nav').css({"position": "relative", "height": "160px"});
    
    
    // Blogs carousel
    $(".related-slider").owlCarousel({
        autoplay: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            }
        }
    });
    
    
    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);
