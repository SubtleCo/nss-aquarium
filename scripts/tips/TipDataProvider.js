const tipCollection = [
    {
        text: "Keep 'em in water"
    },
    {
        text: "No cookin' my fish"
    },
    {
        text: "Wash your hands a lot"
    },
    {
        text: "Don't forget to feed them"
    },
    {
        text: "Fish love friends"
    },
    {
        text: "Just a lil extra tip"
    }

]

export const useTip = () => {
    return tipCollection.slice()
}