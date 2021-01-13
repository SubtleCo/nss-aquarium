import { Quote } from "./Quote.js";
import { useQuote } from "./QuotesDataProvider.js";


export const QuoteList = () => {
    const documentElement = document.querySelector(".containerLeft__travelQuotescontentArticle");
    const quotes = useQuote();

    let quoteHTMLRepresentation = ""
    for (const quote of quotes) {
        quoteHTMLRepresentation += Quote(quote)
    }

    documentElement.innerHTML += quoteHTMLRepresentation;
}