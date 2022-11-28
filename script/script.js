// slider

function turkey() {
    let back = document.getElementById('back1');
    let next = document.getElementById('next1');

    let slideIndex = 1;

    function showSlide() {
        let n = slideIndex;
        let slides = document.getElementsByClassName('slide-turkey');

        if (n > slides.length) {
            slideIndex = 1;
            n = slideIndex;
        } else if (n < 1) {
            slideIndex = slides.length;
            n = slideIndex;
        };

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[n - 1].style.display = "flex";
    }
    next.addEventListener("click", () => {
        slideIndex++;
        showSlide();
    });

    back.addEventListener("click", () => {
        slideIndex--;
        showSlide();
    });
}

function dub() {
    let back = document.getElementById('back2');
    let next = document.getElementById('next2');

    let slideIndex = 1;

    function showSlide() {
        let n = slideIndex;
        let slides = document.getElementsByClassName('slide-dub');

        if (n > slides.length) {
            slideIndex = 1;
            n = slideIndex;
        } else if (n < 1) {
            slideIndex = slides.length;
            n = slideIndex;
        };

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[n - 1].style.display = "flex";
    }
    next.addEventListener("click", () => {
        slideIndex++;
        showSlide();
    });

    back.addEventListener("click", () => {
        slideIndex--;
        showSlide();
    });
}

function eg() {
    let back = document.getElementById('back3');
    let next = document.getElementById('next3');

    let slideIndex = 1;

    function showSlide() {
        let n = slideIndex;
        let slides = document.getElementsByClassName('slide-eg');

        if (n > slides.length) {
            slideIndex = 1;
            n = slideIndex;
        } else if (n < 1) {
            slideIndex = slides.length;
            n = slideIndex;
        };

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[n - 1].style.display = "flex";
    }

    next.addEventListener("click", () => {
        slideIndex++;
        showSlide();
    });
    back.addEventListener("click", () => {
        slideIndex--;
        showSlide();
    });
}

function mal() {
    let back = document.getElementById('back4');
    let next = document.getElementById('next4');

    let slideIndex = 1;

    function showSlide() {
        let n = slideIndex;
        let slides = document.getElementsByClassName('slide-mal');

        if (n > slides.length) {
            slideIndex = 1;
            n = slideIndex;
        } else if (n < 1) {
            slideIndex = slides.length;
            n = slideIndex;
        };

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[n - 1].style.display = "flex";
    }

    next.addEventListener("click", () => {
        slideIndex++;
        showSlide();
    });

    back.addEventListener("click", () => {
        slideIndex--;
        showSlide();
    });
}

function tai() {
    let back = document.getElementById('back5');
    let next = document.getElementById('next5');

    let slideIndex = 1;

    function showSlide() {
        let n = slideIndex;
        let slides = document.getElementsByClassName('slide-tai');

        if (n > slides.length) {
            slideIndex = 1;
            n = slideIndex;
        } else if (n < 1) {
            slideIndex = slides.length;
            n = slideIndex;
        };

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[n - 1].style.display = "flex";
    }

    next.addEventListener("click", () => {
        slideIndex++;
        showSlide();
    });

    back.addEventListener("click", () => {
        slideIndex--;
        showSlide();
    });

}

function sng() {
    let back = document.getElementById('back6');
    let next = document.getElementById('next6');

    let slideIndex = 1;

    function showSlide() {
        let n = slideIndex;
        let slides = document.getElementsByClassName('slide-sng');

        if (n > slides.length) {
            slideIndex = 1;
            n = slideIndex;
        } else if (n < 1) {
            slideIndex = slides.length;
            n = slideIndex;
        };
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[n - 1].style.display = "flex";
    }

    next.addEventListener("click", () => {
        slideIndex++;
        showSlide();

    });

    back.addEventListener("click", () => {
        slideIndex--;
        showSlide();

    });

}
turkey();
dub();
eg();
mal();
tai();
sng();





function Eco() {
    let ecoSlideT = document.getElementById('ecoT');
    let ecoSlideDub = document.getElementById('ecoDub');
    let ecoSlideEg = document.getElementById('ecoEg');
    let ecoSlideMal = document.getElementById('ecoMal');
    let ecoSlideTai = document.getElementById('ecoTai');
    let ecoSlideSng = document.getElementById('ecoSng');

    let winEco = document.getElementById('win-eco');
    let windowsAll = document.getElementsByClassName('window');

    for (let i = 0; i < windowsAll.length; i++) {
        windowsAll[i].style.display = "none"
    }


    ecoSlideT.addEventListener("click", () => {
        winEco.style.display = "flex";
    })
    ecoSlideDub.addEventListener("click", () => {
        winEco.style.display = "flex";
    })
    ecoSlideEg.addEventListener("click", () => {
        winEco.style.display = "flex";
    })
    ecoSlideMal.addEventListener("click", () => {
        winEco.style.display = "flex";
    })
    ecoSlideTai.addEventListener("click", () => {
        winEco.style.display = "flex";
    })
    ecoSlideSng.addEventListener("click", () => {
        winEco.style.display = "flex";
    })
}
Eco();

function Stan() {
    let ecoSlideT = document.getElementById('stanT');
    let ecoSlideDub = document.getElementById('stanDub');
    let ecoSlideEg = document.getElementById('stanEg');
    let ecoSlideMal = document.getElementById('stanMal');
    let ecoSlideTai = document.getElementById('stanTai');
    let ecoSlideSng = document.getElementById('stanSng');

    let winEco = document.getElementById('win-stan');
    let windowsAll = document.getElementsByClassName('window');

    for (let i = 0; i < windowsAll.length; i++) {
        windowsAll[i].style.display = "none"
    }


    ecoSlideT.addEventListener("click", () => {
        winEco.style.display = "flex";
    })
    ecoSlideDub.addEventListener("click", () => {
        winEco.style.display = "flex";
    })
    ecoSlideEg.addEventListener("click", () => {
        winEco.style.display = "flex";
    })
    ecoSlideMal.addEventListener("click", () => {
        winEco.style.display = "flex";
    })
    ecoSlideTai.addEventListener("click", () => {
        winEco.style.display = "flex";
    })
    ecoSlideSng.addEventListener("click", () => {
        winEco.style.display = "flex";
    })
}
Stan();

function Kids() {
    let ecoSlideT = document.getElementById('kidsT');
    let ecoSlideDub = document.getElementById('kidsDub');
    let ecoSlideEg = document.getElementById('kidsEg');
    let ecoSlideMal = document.getElementById('kidsMal');
    let ecoSlideTai = document.getElementById('kidsTai');
    let ecoSlideSng = document.getElementById('kidsSng');

    let winEco = document.getElementById('win-kids');
    let windowsAll = document.getElementsByClassName('window');

    for (let i = 0; i < windowsAll.length; i++) {
        windowsAll[i].style.display = "none"
    }


    ecoSlideT.addEventListener("click", () => {
        winEco.style.display = "flex";
    })
    ecoSlideDub.addEventListener("click", () => {
        winEco.style.display = "flex";
    })
    ecoSlideEg.addEventListener("click", () => {
        winEco.style.display = "flex";
    })
    ecoSlideMal.addEventListener("click", () => {
        winEco.style.display = "flex";
    })
    ecoSlideTai.addEventListener("click", () => {
        winEco.style.display = "flex";
    })
    ecoSlideSng.addEventListener("click", () => {
        winEco.style.display = "flex";
    })
}
Kids();

function StanP() {
    let ecoSlideT = document.getElementById('stanPT');
    let ecoSlideDub = document.getElementById('stanPDub');
    let ecoSlideEg = document.getElementById('stanPEg');
    let ecoSlideMal = document.getElementById('stanPMal');
    let ecoSlideTai = document.getElementById('stanPTai');
    let ecoSlideSng = document.getElementById('stanPSng');

    let winEco = document.getElementById('win-stanP');
    let windowsAll = document.getElementsByClassName('window');

    for (let i = 0; i < windowsAll.length; i++) {
        windowsAll[i].style.display = "none"
    }


    ecoSlideT.addEventListener("click", () => {
        winEco.style.display = "flex";
    })
    ecoSlideDub.addEventListener("click", () => {
        winEco.style.display = "flex";
    })
    ecoSlideEg.addEventListener("click", () => {
        winEco.style.display = "flex";
    })
    ecoSlideMal.addEventListener("click", () => {
        winEco.style.display = "flex";
    })
    ecoSlideTai.addEventListener("click", () => {
        winEco.style.display = "flex";
    })
    ecoSlideSng.addEventListener("click", () => {
        winEco.style.display = "flex";
    })
}
StanP();

function Night() {
    let ecoSlideT = document.getElementById('nightT');
    let ecoSlideDub = document.getElementById('nightDub');
    let ecoSlideEg = document.getElementById('nightEg');
    let ecoSlideMal = document.getElementById('nightMal');
    let ecoSlideTai = document.getElementById('nightTai');
    let ecoSlideSng = document.getElementById('nightSng');

    let winEco = document.getElementById('win-night');
    let windowsAll = document.getElementsByClassName('window');

    for (let i = 0; i < windowsAll.length; i++) {
        windowsAll[i].style.display = "none"
    }


    ecoSlideT.addEventListener("click", () => {
        winEco.style.display = "flex";
    })
    ecoSlideDub.addEventListener("click", () => {
        winEco.style.display = "flex";
    })
    ecoSlideEg.addEventListener("click", () => {
        winEco.style.display = "flex";
    })
    ecoSlideMal.addEventListener("click", () => {
        winEco.style.display = "flex";
    })
    ecoSlideTai.addEventListener("click", () => {
        winEco.style.display = "flex";
    })
    ecoSlideSng.addEventListener("click", () => {
        winEco.style.display = "flex";
    })
}
Night();

function Busines() {
    let ecoSlideT = document.getElementById('busT');
    let ecoSlideDub = document.getElementById('busDub');
    let ecoSlideEg = document.getElementById('busEg');
    let ecoSlideMal = document.getElementById('busMal');
    let ecoSlideTai = document.getElementById('busTai');
    let ecoSlideSng = document.getElementById('busSng');

    let winEco = document.getElementById('win-bus');
    let windowsAll = document.getElementsByClassName('window');

    for (let i = 0; i < windowsAll.length; i++) {
        windowsAll[i].style.display = "none"
    }


    ecoSlideT.addEventListener("click", () => {
        winEco.style.display = "flex";
    })
    ecoSlideDub.addEventListener("click", () => {
        winEco.style.display = "flex";
    })
    ecoSlideEg.addEventListener("click", () => {
        winEco.style.display = "flex";
    })
    ecoSlideMal.addEventListener("click", () => {
        winEco.style.display = "flex";
    })
    ecoSlideTai.addEventListener("click", () => {
        winEco.style.display = "flex";
    })
    ecoSlideSng.addEventListener("click", () => {
        winEco.style.display = "flex";
    })
}
Busines();







function close() {
    let winEco = document.getElementById('win-eco');
    let winStan = document.getElementById('win-stan');
    let winStanP = document.getElementById('win-StanP');
    let winKids = document.getElementById('win-kids');
    let winNight = document.getElementById('win-night');
    let winBus = document.getElementById('win-bus');

    let btnE = document.getElementById('btn-win-e');
    let btns = document.getElementById('btn-win-s');
    let btnsp = document.getElementById('btn-win-sp');
    let btnk = document.getElementById('btn-win-k');
    let btnn = document.getElementById('btn-win-n');
    let btnb = document.getElementById('btn-win-b');

    btnE.addEventListener("click", () => {
        winEco.style.display = "none";

    })

    btns.addEventListener("click", () => {

        winStan.style.display = "none";

    })

    btnsp.addEventListener("click", () => {

        winStanP.style.display = "none";

    })

    btnk.addEventListener("click", () => {

        winKids.style.display = "none";

    })

    btnn.addEventListener("click", () => {

        winNight.style.display = "none";

    })

    btnb.addEventListener("click", () => {

        winBus.style.display = "none";
    })
}
close();