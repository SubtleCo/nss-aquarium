/**
 *  Fish which renders individual fish objects as HTML
 */
export const Fish = (fish) => {
    return `
        <section class="fish__card">
            <div><img  class="fish__image image--card" src="${fish.image}" /></div>
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species">Species: ${fish.species}</div>
            <div class="fish__length">Length: ${fish.length} inches</div>
            <div class="fish__location">Location: ${fish.location}</div>
            <div class="fish__diet">Diet: ${fish.food}</div>
        </section>
    `
}
