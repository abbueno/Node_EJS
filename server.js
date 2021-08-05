const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    const items = [
        {
            title: "D",
            message: "- Desenvolver aplicações/ serviços de forma fácil"
        },
        {
            title: "E",
            message: "- EJS usa JavaScript para renderizar HTML"
        },
        {
            title: "M",
            message: "- Muito fácil de programar"
        },
        {
            title: "A",
            message: "- A melhor opção pra você"
        },
        {
            title: "I",
            message: "- Install EJS"
        },
        {
            title: "S",
            message: "- Simples sintaxe"
        },
    ];

    const subtitle = "Uma linguagem de modelagem para criação de páginas HTML utilizando JS"
    res.render("pages/index", {
        qualitys: items,
        subtitle: subtitle,
    });
})

app.get("/sobre", function (req, res) {
    res.render("pages/about");
})

app.listen(8080);
console.log("rodando")