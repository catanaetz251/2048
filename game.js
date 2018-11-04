// event handler pe buton
$(document).ready(function () {
    $(".add-tile").click(function () {
        putRandomTile();
    });
});
// functia de adaugare random tile in gridul de 4x4
function putRandomTile() {
    // caut un random cell in care sa pun unul din cele 2 cell-uri
    let randomCell = Math.floor(Math.random() * $('.grid-cell').length);
    if ($(randomCell).hasClass('grid-cell-two') || $(randomCell).hasClass('grid-cell-four')) {
        putRandomTile();    
    } else {
        $('.grid-cell').eq(randomCell).removeClass('grid-cell').addClass(function () {
            // generez un numar random de la 0 la 100 si trimit ca parametru clasa two sau four in functie de procent
            let randomNumber = Math.floor(Math.random() * 100);
            if (randomNumber <= 90) {
                return 'grid-cell-two'
            } else return 'grid-cell-four'
        });
    }
}