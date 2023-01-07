/**
 * Template Name: Selecao - v4.9.1
 * Template URL: https://bootstrapmade.com/selecao-bootstrap-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */



(function() {
    "use strict";
    const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
    }
     /**
     * Porfolio isotope and filter
     */
     window.addEventListener('load', () => {
        let portfolioContainer = select('.portfolio-container');
        if (portfolioContainer) {
            let portfolioIsotope = new Isotope(portfolioContainer, {
                itemSelector: '.portfolio-item',
            });

            let portfolioFilters = select('#portfolio-flters li', true);

            on('click', '#portfolio-flters li', function(e) {
                e.preventDefault();
                portfolioFilters.forEach(function(el) {
                    el.classList.remove('filter-active');
                });
                this.classList.add('filter-active');

                portfolioIsotope.arrange({
                    filter: this.getAttribute('data-filter')
                });
                portfolioIsotope.on('arrangeComplete', function() {
                    AOS.refresh()
                });
            }, true);
        }

    });


    const portfolioLightbox = GLightbox({
        selector: '.portfolio-lightbox'
    });

    /**
     * Portfolio details slider
     */
    new Swiper('.portfolio-details-slider', {
        speed: 400,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        }
    });
   

    

    // var navLinks = document.querySelectorAll('#navbar .scrollto');
    // window.addEventListener('scroll', function() {
    //   var scrollPos = window.scrollY;
    //   navLinks.forEach(function(link) {
    //     var section = document.querySelector(link.hash);
    //     if (scrollPos >= section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)) {
    //       link.classList.add('active');
    //     } else {
    //       link.classList.remove('active');
    //     }
    //   });
    // });
    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }

    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all)
        if (selectEl) {
            if (all) {
                selectEl.forEach(e => e.addEventListener(type, listener))
            } else {
                selectEl.addEventListener(type, listener)
            }
        }
    }

    /**
     * Easy on scroll event listener 
     */
    
    // 
    // 

    // const sections = document.querySelectorAll("section");
    // const navLi = document.querySelectorAll("navbar ul li");
    // window.onscroll = () => {
    //   var current = "";
    
    //   sections.forEach((section) => {
    //     const sectionTop = section.offsetTop;
    //     if (scrollY >= sectionTop - 60) {
    //       current = section.getAttribute("id"); }
    //   });
    
    //   navLi.forEach((li) => {
    //     li.classList.remove("active");
    //     if (li.classList.contains(current)) {
    //       li.classList.add("active");
    //     }
    //   });
    // };
    /**
     * Navbar links active state on scroll
     * 
     * 
    //  */
   
   
    /**
     * Scrolls to an element with header offset
     */
    const scrollto = (el) => {
        let header = select('#header')
        let offset = header.offsetHeight

        let elementPos = select(el).offsetTop
        window.scrollTo({
            top: elementPos - offset,
            behavior: 'smooth'
        })
    }

    /**
     * Toggle .header-scrolled class to #header when page is scrolled
     */
    
    /**
     * Back to top button
     */
    let backtotop = select('.back-to-top')
    if (backtotop) {
        const toggleBacktotop = () => {
            if (window.scrollY > 100) {
                backtotop.classList.add('active')
            } else {
                backtotop.classList.remove('active')
            }
        }
        window.addEventListener('load', toggleBacktotop)
        onscroll(document, toggleBacktotop)
    }

    /**
     * Mobile nav toggle
     */
    on('click', '.mobile-nav-toggle', function(e) {
        select('#navbar').classList.toggle('navbar-mobile')
        this.classList.toggle('bi-list')
        this.classList.toggle('bi-x')
    })

    /**
     * Mobile nav dropdowns activate
     */

    
    // on('click', '.navbar .dropdown > a', function(e) {
    //     if (select('#navbar').classList.contains('navbar-mobile')) {
    //         e.preventDefault()
    //         this.nextElementSibling.classList.toggle('dropdown-active')
    //     }
    // }, true)

    /**
     * Scrool with ofset on links with a class name .scrollto
     */
    // on('click', '.scrollto', function(e) {
    //     if (select(this.hash)) {
    //         e.preventDefault()

    //         let navbar = select('#navbar')
    //         if (navbar.classList.contains('navbar-mobile')) {
    //             navbar.classList.remove('navbar-mobile')
    //             let navbarToggle = select('.mobile-nav-toggle')
    //             navbarToggle.classList.toggle('bi-list')
    //             navbarToggle.classList.toggle('bi-x')
    //         }
    //         scrollto(this.hash)
    //     }
    // }, true)

    /**
     * Scroll with ofset on page load with hash links in the url
     */
    window.addEventListener('load', () => {
        if (window.location.hash) {
            if (select(window.location.hash)) {
                scrollto(window.location.hash)
            }
        }
    });

   
    /**
     * Initiate portfolio lightbox 
     */
    


    /**
     * Animation on scroll
     */
    window.addEventListener('load', () => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false,
        })
    });
    
})()


// 'use strict';






//   
$('#maindiv').width($('#div1').width());
