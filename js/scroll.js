/*jslint browser: true*/
/*global $, jQuery*/

var scrollWaarde;
var eindPositie = 0;
var navSticky = $('nav');
var naviHoogte = navSticky.outerHeight();


function schuifMenu() {
    scrollWaarde = $(this).scrollTop();
    if (scrollWaarde > eindPositie){
        //Er wordt naar beneden gescrolt
        console.log('Er wordt naar beneden gescrolt');
       eindPositie=scrollWaarde
       navSticky.css('top', -naviHoogte + 'px')
    } else {
        console.log('Er wordt naar boven gescrolt');
        eindPositie = scrollWaarde
        navSticky.css('top', 0)
    }
    

}
$(window).on('scroll', schuifMenu); 