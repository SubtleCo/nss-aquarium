import { useFish } from './fish/FishDataProvider.js';
import { FishList } from './fish/FishList.js';
import { useTip } from './tips/TipDataProvider.js';
import { TipList } from './tips/TipList.js';

console.log("Welcome to the main module")

const allTheFish = useFish()

FishList()

const allTips = useTip()

TipList()