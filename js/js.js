function show() {
    if ($('#slide1').hasClass("d-block")) {
        //Show and hide text
        $('#slide1text').addClass("d-none").removeClass("d-block")
        $('#slide2text').addClass("d-block").removeClass("d-none")

        //Show and hide img
        $('#slide1').addClass("d-none").removeClass("d-block")
        $('#slide2').addClass("d-block").removeClass("d-none")

    } else {
        //Show and hide text
        $('#slide2text').addClass("d-none").removeClass("d-block")
        $('#slide1text').addClass("d-block").removeClass("d-none")

        //Show and hide img
        $('#slide2').addClass("d-none").removeClass("d-block")
        $('#slide1').addClass("d-block").removeClass("d-none")
    }

}

