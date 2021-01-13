import { useFish } from './fish/FishDataProvider.js';
import { FishList } from './fish/FishList.js';
import { useTip } from './tips/TipDataProvider.js';
import { TipList } from './tips/TipList.js';
import { useLocation } from './locations/LocationDataProvider.js';
import { LocationList } from './locations/LocationList.js';

console.log("Welcome to the main module")

FishList()
TipList()
LocationList()