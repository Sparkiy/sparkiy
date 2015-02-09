function ResolveFullHeight() {
    $(".hero").height($(window).height() - $(".snavbar").height());
    $(".hero img").height(Math.min($(".hero").height() - 70, 600));
}

ResolveFullHeight();

$(window).resize(function () {
    ResolveFullHeight();
});
