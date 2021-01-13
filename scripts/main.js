import { useFish } from './fish/FishDataProvider.js';
import { FishList } from './fish/FishList.js';

console.log("Welcome to the main module")

const allTheFish = useFish()

for (const fish of allTheFish) {
    console.log(fish)
}

FishList()