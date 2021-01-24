
import { useTip } from './TipDataProvider.js';
import { Tip } from './Tip.js';

export const TipList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".containerRight__tipList")
    const tips = useTip()
    contentElement.innerHTML += tips.map(tip => Tip(tip)).join("")
}