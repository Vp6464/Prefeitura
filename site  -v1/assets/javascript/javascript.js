window.onload = function() {
    // Menu 1
    const orgaoP = document.querySelector("#OrgaoP");
    const menu1 = document.querySelector(".menu1");
    orgaoP.addEventListener("mouseenter", function() {
        menu1.style.display = 'flex';
    });
    orgaoP.addEventListener("mouseleave", function() {
        menu1.style.display = 'none';
    });
    menu1.addEventListener("mouseenter", function() {
        menu1.style.display = 'flex';
    });
    menu1.addEventListener("mouseleave", function() {
        menu1.style.display = 'none';
    });

    // Menu 2
    const service = document.querySelector("#Service");
    const menu2 = document.querySelector(".menu2");
    service.addEventListener("mouseenter", function() {
        menu2.style.display = 'flex';
    });
    service.addEventListener("mouseleave", function() {
        menu2.style.display = 'none';
    });
    menu2.addEventListener("mouseenter", function() {
        menu2.style.display = 'flex';
    });
    menu2.addEventListener("mouseleave", function() {
        menu2.style.display = 'none';
    });

     // Menu 3
    const outroN = document.querySelector("#servidor");
    const menu3 = document.querySelector(".menu3");
    outroN.addEventListener("mouseenter", function() {
        menu3.style.display = 'flex';
    });
    outroN.addEventListener("mouseleave", function() {
        menu3.style.display = 'none';
    });
    menu3.addEventListener("mouseenter", function() {
        menu3.style.display = 'flex';
    });
    menu3.addEventListener("mouseleave", function() {
        menu3.style.display = 'none';
    });
}