const accordionHeader = document.querySelectorAll(".accordion-header");
const accordionBody = document.querySelectorAll(".accordion-body");
const upArrow = document.querySelectorAll(".upArrow");
const downArrow = document.querySelectorAll(".downArrow");


// accordion show hide
accordionHeader.forEach((header) => {
  header.onclick = (e) => {
    accordionBody.forEach((body) => {
      body.classList.add("hidden");
    });
    downArrow.forEach((arrow) => {
      arrow.classList.remove("hidden");
    });
    upArrow.forEach((arrow) => {
      arrow.classList.add("hidden");
    });
    e.target.children[1].classList.add("hidden");
    e.target.children[2].classList.remove("hidden");
    e.target.nextElementSibling.classList.remove("hidden");
  };
});
