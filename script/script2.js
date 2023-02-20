const $nav = document.querySelector("nav.cabecalho-navegacao");
const $burguer = document.querySelector("#burguer-menu");
const $close = document.querySelector("span.close");
const $body = document.querySelector("body");

$burguer.addEventListener("click", () => {
    if ($nav.classList.contains("cabecalho-navegacao-closed")) {
        $nav.classList.remove("cabecalho-navegacao-closed");
    }
    $burguer.style.display = "";
    $nav.classList.add("cabecalho-navegacao-opened");
    createFilter($body);
});

$close.addEventListener("click", () => {
    $nav.classList.remove("cabecalho-navegacao-opened");
    $nav.classList.add("cabecalho-navegacao-closed");
    $body.firstElementChild.remove();
});

function createFilter(element) {
    const newElement = document.createElement("div");
    newElement.classList.add("filter");
    newElement.style.backgroundColor = "rgba(172, 172, 172, 0.8)";
    newElement.style.width = "100%";
    newElement.style.height = "100%";
    newElement.style.position = "absolute";
    newElement.style.top = "0px";
    newElement.style.left = "0px";
    element.prepend(newElement);
}