
import { useTip } from './TipDataProvider.js';
import { Tip } from './Tip.js';

export const TipList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".containerRight__tipList")
    const tips = useTip()

    let tipHTMLRepresentations = "";
    for (const tip of tips) {
        tipHTMLRepresentations += Tip(tip);
    }

    // Add to the existing HTML in the content element
    contentElement.innerHTML += tipHTMLRepresentations
}