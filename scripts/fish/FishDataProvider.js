const fishCollection = [
    {
        image: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZmlzaHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        name: "Bart",
        species: "Turtle",
        length: 36,
        location: "Great Barrier Reef",
        food: "goldfish"
    },
    {
        image: "https://images.unsplash.com/photo-1497671954146-59a89ff626ff?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8ZmlzaHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        name: "Jimjim",
        species: "Orange Striper",
        length: 15,
        location: "Under water",
        food: "gremlins"
    },
    {
        image: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmlzaHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        name: "Franklin Delano Gillsevelt",
        species: "Clownfish",
        length: 7,
        location: "Pixar Films",
        food: "nibblins"
    },
    {
        image: "https://images.unsplash.com/photo-1520990056956-5d29b4884100?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8ZmlzaHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        name: "Skid",
        species: "Pointyboi",
        length: 9,
        location: "Punk bars",
        food: "dreams"
    },
    {
        image: "https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fGZpc2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        name: "Hollis",
        species: "Tennis Ball",
        length: 14,
        location: "On the courts",
        food: "opponents"
    },

]

export const useFish = () => {
    return fishCollection.slice()
}

export const mostHolyFish = () => {
    let holyFish = [];
    for (const fish of fishCollection) {
        if (fish.length % 3 === 0) {
            holyFish.push(fish)
        }
    }
    return holyFish.slice();
}

export const soldierFish = () => {
    const soldiers = [];
    for (const fish of fishCollection) {
        if (fish.length % 5 === 0) {
            soldiers.push(fish)
        }
    }
    return soldiers.slice();
}

export const boringFish = () => {
    const borings = [];
    for (const fish of fishCollection) {
        if (fish.length % 3 !== 0 && fish.length % 5 !== 0) {
            borings.push(fish)
        }
    }
    return borings.slice();
}