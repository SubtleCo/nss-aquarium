/**
 *  FishList which renders individual fish objects as HTML
 */

// TODO: Import `useFish` from the data provider module
import { boringFish, mostHolyFish, soldierFish, useFish } from './FishDataProvider.js';
import { Fish } from './Fish.js';

export const FishList = () => {

// Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".content")

// This is Martin's ordered list
    const holyFish = mostHolyFish();
    const soldiers = soldierFish();
    const borings = boringFish();
    const fishes = holyFish.concat(soldiers, borings);

// This is the normal, undordered list
    // const fishes = useFish()
    
    let fishHTMLRepresentations = "";
    for (const fish of fishes) {
        fishHTMLRepresentations += Fish(fish);
    }

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <article class="fishList">
            ${fishHTMLRepresentations}
        </article>
    `
}