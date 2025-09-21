const btn =
document.getElementById("btn-2");
const taesan =
document.getElementById("taesan");
const est =
document.getElementById("est");

btn.addEventListener("click", () => { taesan.classList.add("muncul");
    taesan.classList.add("muncul");
});

taesan.addEventListener("click", () => {
    est.classList.add("muncul");
});