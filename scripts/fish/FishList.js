/**
 *  FishList which renders individual fish objects as HTML
 */

// TODO: Import `useFish` from the data provider module
import { useFish } from './FishDataProvider.js';
import { Fish } from './Fish.js';

export const FishList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".content")
    const fishes = useFish()

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