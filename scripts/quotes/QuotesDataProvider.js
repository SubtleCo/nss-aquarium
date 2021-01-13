const quoteCollection = [
    {
        text: "Some fish are smarter than others.",
        author: "Fishy Joe",
        location: "The hot swamps of Florida",
        date: "01/13/1997"
    },
    {
        text: "Ten fish is more than eight.",
        author: "Smelly Jim",
        location: "Petsmart",
        date: "09/16/2020"
    },
    {
        text: "Another collection of words.",
        author: "The lead singer of Good Charlotte",
        location: "Here and there",
        date: "05/26/2024"
    },
]

export const useQuote = () => {
    return quoteCollection.slice();
}