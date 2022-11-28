function error() {
    function first() {
        let first = document.getElementById('first');
        first.addEventListener("click", () => {
            alert('Ссылка временно не работает, приносим свои извинения!')
        })
    }

    function two() {
        let first = document.getElementById('two');
        first.addEventListener("click", () => {
            alert('Ссылка временно не работает, приносим свои извинения!')
        })
    }

    function three() {
        let first = document.getElementById('three');
        first.addEventListener("click", () => {
            alert('Ссылка временно не работает, приносим свои извинения!')
        })
    }








    first();
    two();
    three();
}
error();