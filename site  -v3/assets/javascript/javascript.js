const menus = [
    { ativ: ".menu1_ativ", sub: ".menu1_sub" },
    { ativ: ".menu2_ativ", sub: ".menu2_sub" },
    { ativ: ".menu3_ativ", sub: ".menu3_sub" }
];

menus.forEach(menu => {
    const ativ = document.querySelector(menu.ativ);
    const sub = document.querySelector(menu.sub);

    if (ativ && sub) {
        // Abrir submenu ao passar o mouse
        ativ.addEventListener("mouseenter", function() {
            sub.style.display = "block";
        });

        // Fechar submenu ao tirar o mouse
        ativ.addEventListener("mouseleave", function() {
            sub.style.display = "none";
        });
        sub.addEventListener("mouseenter", function() {
            sub.style.display = "block";
        });
        sub.addEventListener("mouseleave", function() {
            sub.style.display = "none";
        });
    }
});

