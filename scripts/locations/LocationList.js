import { useLocation } from "./LocationDataProvider.js";
import { Location } from "./Location.js";

export const LocationList = () => {
    const contentElement = document.querySelector(".containerLeft__travelLocations");
    const locations = useLocation();

    let locationsHTMLRepresentations = "";
    for (const location of locations) {
        locationsHTMLRepresentations += Location(location);
    }

    contentElement.innerHTML += locationsHTMLRepresentations;

}