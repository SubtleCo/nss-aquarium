import { Quote } from "./Quote.js";
import { useQuote } from "./QuotesDataProvider.js";


export const QuoteList = () => {
    const documentElement = document.querySelector(".containerLeft__travelQuotescontentArticle");
    const quotes = useQuote();

    documentElement.innerHTML += quotes.map(quote => Quote(quote)).join("");
}