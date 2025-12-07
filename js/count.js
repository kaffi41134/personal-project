function $(id) {
    return document.getElementById(id);
}
function init() {
    $("btnMinus").onclick = function (e) {
        let qty = this.nextElementSibling;
        if (!qty) return;
        let value = parseInt(qty.value);
        if (value <= 1) {
            qty.value = 1;
            return;
        }
        qty.value = value - 1;
    }
    $("btnPlus").onclick = function (e) {
        let qty = this.previousElementSibling;
        if (!qty) return;
        let value = parseInt(qty.value);
        qty.value = value + 1;
    }
} window.addEventListener("load", init);