$(function () {
    $("#area_select_filter>svg").children().css('cursor', 'pointer').click(function () {
        if ($(this).attr('fill') == 'url(#filter_area_off)') {
            $(this).attr('fill', 'url(#filter_area_on)');
            console.log($(this).data("value"));
        } else {
            $(this).attr('fill', 'url(#filter_area_off)');
        }
    })
    $("#allCheck").on('click', function () {
        if ($(this).is(":checked")) {
            console.log("체크");
            $("#area_select_filter>svg").children().attr('fill', 'url(#filter_area_on)');
        } else {
            console.log("노체크");
            $("#area_select_filter>svg").children().attr('fill', 'url(#filter_area_off)');
        }
    })
})