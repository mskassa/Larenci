function phone() {
    function first() {
        let win = document.getElementById('win');
        let click = document.getElementById('first');
        click.addEventListener("click", () => {
            win.style.display = "flex";
        })
    }

    function two() {
        let win = document.getElementById('win');
        let click = document.getElementById('two');
        click.addEventListener("click", () => {
            win.style.display = "flex";
        })
    }

    function three() {
        let win = document.getElementById('win');
        let click = document.getElementById('three');
        click.addEventListener("click", () => {
            win.style.display = "flex";
        })
    }

    function four() {
        let win = document.getElementById('win');
        let click = document.getElementById('four');
        click.addEventListener("click", () => {
            win.style.display = "flex";
        })
    }

    function fif() {
        let win = document.getElementById('win');
        let click = document.getElementById('fif');
        click.addEventListener("click", () => {
            win.style.display = "flex";
        })
    }


    first();
    two();
    three();
    four();
    fif();

    function close() {
        let winStan = document.getElementById('win');
        let sub = document.getElementById('submit');
        let btns = document.getElementById('btn-win-s');
        sub.addEventListener("click", () => {
            winStan.style.display = "none";
        })
        btns.addEventListener("click", () => {
            winStan.style.display = "none";
        })
    }
    close();
}
phone();