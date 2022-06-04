function spotlightNextIcon() {
    oldSpotlight = document.querySelector(".spotlight");
    newSpotlight = null;

    if (oldSpotlight) {
        oldSpotlight.classList.remove('spotlight');
        newSpotlight = oldSpotlight.nextElementSibling;
    }

    if (newSpotlight) {
        newSpotlight.classList.add('spotlight');
    } else {
        document.querySelector(".icon-links").firstElementChild.classList.add('spotlight');
    }
}

function startTimer() {
    spotlightNextIcon();
    setInterval(spotlightNextIcon,2000);
}
