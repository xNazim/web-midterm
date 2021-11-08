$(".page-header .nav-link, .navbar-brand").on("click", function(e) {
  e.preventDefault();
  const href = $(this).attr("href");
  $("html, body").animate({
    scrollTop: $(href).offset().top - 71
  }, 600);
});