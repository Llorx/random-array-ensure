# random-array-ensure
Don't you hate that when you get a random element from an array, sometimes the randomizer gets the same entry in a short period?

This library will ensure that for a given array, you will receive a random element one time per loop (A.K.A. shuffle) with the addition that when all items are received, will shuffle the array again ensuring that the last elements of the old shuffle will not be on the first positions the next time. This way you will have a completely random array but with no "duplicated" entries feeling.

So, for a `length = 1000` array and `ensure = 0.25` (25%), you will get 1000 random entries without any duplicate and then will shuffle the array again to get another 1000 random entries without any duplicate, but ensuring that 25% of the last entries received in the old shuffle won't be stored on the first 25% positions of the next shuffle, increasing the "randomness without duplication" feeling.

# Install
```
npm install random-array-ensure
```

# Usage
```JavaScript
import { RandomEnsure } from random-array-ensure;

let list = new RandomEnsure([0, 1, 2, 3, 4]);

for (let i = 0; i < 1000; i++) {
    let elem = list.next(); // Get next random ensured element.
}

// Giving a custom random() function
let list = new RandomEnsure([0, 1, 2, 3, 4], {
    random: () => {
        // Your custom function that returns a number between 0 and 1
        // must be 0 inclusive and 1 exclusive
        // Default is Math.random()
        return Math.random();
    }
});

// Giving a custom ensuring option
let list = new RandomEnsure([0, 1, 2, 3, 4], {
    // A number between 0 and 0.5 (treated as a %)
    // or an absolute number between 1 and half of the array length
    // Default is 0.25
    ensure: 0.5
});
```