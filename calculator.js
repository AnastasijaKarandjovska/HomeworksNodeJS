function sobiranje(a, b) {
    return a + b;
}
function odzemanje(a, b) {
    return a - b;
}
function delenje(a, b) {
    return a / b;
}
function mnozenje(a, b) {
    return a * b;
}
function slozenaoperacija1(a, b) {
    return a + b - a;
}
function slozenaoperacija2(a, b) {
    return a * b - a;
}

module.exports = {
    sobiranje,
    odzemanje,
    delenje,
    mnozenje,
    slozenaoperacija1,
    slozenaoperacija2,
};