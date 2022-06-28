const drawStar = (target) => {
    document.querySelector(`.star1 span`).style.width = `${target.value * 10}%`;
}