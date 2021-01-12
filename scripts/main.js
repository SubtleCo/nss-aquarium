import { useFish } from './FishDataProvider.js'

console.log("Welcome to the main module")

const allTheFish = useFish()

for (const fish of allTheFish) {
    console.log(fish)
}