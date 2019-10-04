(function () {

    var scaleGameViewport = function () {
        var container = document.querySelector("#container");
        var game = document.querySelector(".game-container");

        var widthRatio = Math.min(1, container.offsetWidth / 600);
        var heightRatio = Math.min(1, container.offsetHeight / 450);
        var ratio = Math.min(widthRatio, heightRatio);

        if (ratio !== 1) {
            var css = "transform: scale(" + ratio + ");";
            game.style.cssText = css;
            console.log(widthRatio, heightRatio, ratio);
        } else {
            game.style.cssText = "";
        }
    }

    window.addEventListener("resize", function () {
        scaleGameViewport();
    })

    window.addEventListener("orientation", function () {
        scaleGameViewport();
    })

    scaleGameViewport();

})();
