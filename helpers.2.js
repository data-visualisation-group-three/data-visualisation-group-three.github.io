// HANDLE CHART VISIBILITY
const sections = [...document.querySelectorAll("div#gun-deaths, div#gun-owners")];

let options = {
  rootMargin: "0px",
  threshold: 0.25
};

const callback = (entries, observer) => {
  entries.forEach(entry => {
    const { target } = entry;
        
    if (entry.intersectionRatio >= 0.25) {
      target.classList.add("is-visible");
    } else {
      target.classList.remove("is-visible");
    }
  });
};

const observer = new IntersectionObserver(callback, options);

sections.forEach((section, index) => {
  observer.observe(section);
});

// HANDLE AUDIENCE LINKS
$("a.nav-link").on("click", function() {
  var audienceType = $(this).data("audience-type");
  $("div.audience-accordion").hide();
  $(`#audience-${audienceType}`).show();
  $(`#audience-${audienceType}`)[0].scrollIntoView();
}); 

// INITIAL STATE
$("div.audience-accordion").hide();
