export const scroolToSection = (gotTo) => {
    document.querySelector("#" + gotTo).scrollIntoView({behavior:"smooth"})
}