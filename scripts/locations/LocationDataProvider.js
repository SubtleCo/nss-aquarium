const locationCollection = [
    {
        city: "Paris",
        country: "France",
        waterBody: "Seine River",
        landmark: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZWlmZmVsJTIwdG93ZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        alt: "The Eiffel Tower in the daytime"
    },
    {
        city: "Nashville",
        country: "USA",
        waterBody: "Cumberland River",
        landmark: "https://images.unsplash.com/photo-1556033681-83abea291a96?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bmFzaHZpbGxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        alt: "The Nashville Skyline in the daytime"
    }
]

export const useLocation = () => {
    return locationCollection.slice();
}