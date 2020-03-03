$(document).ready(function($) {
        // $("body").css("margin-bottom",$("footer").height() + "px");
        // $("footer").css("height",$("footer").height() + "px");
 
        $('#myCarousel').carousel({
                interval: 5000
        });
 
        //Handles the carousel thumbnails
        $('[id^=carousel-selector-]').click(function () {
        var id_selector = $(this).attr("id");
        try {
            var id = /-(\d+)$/.exec(id_selector)[1];
            console.log(id_selector, id);
            jQuery('#myCarousel').carousel(parseInt(id));
        } catch (e) {
            console.log('Regex failed!', e);
        }
        });
        // When the carousel slides, auto update the text
        $('#myCarousel').on('slid.bs.carousel', function (e) {
                 var id = $('.item.active').data('slide-number');
                $('#carousel-text').html($('#slide-content-'+id).html());
        });
        //scroll top
        $('#to-top').on('click',function (e) {
            e.preventDefault();
            $("html, body").animate({ scrollTop: "0px" }, 1200);
        });
        // set current year copyright
        var currentTime = new Date();
        var year = currentTime.getFullYear();
        $('.year').text(year);
});