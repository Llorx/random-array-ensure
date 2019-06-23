# random-array-ensure
Don't you hate that when you get a random element from an array, sometimes the randomizer gets the same entry in a short period?

This library will ensure that for a given array, you will receive a random element one time per loop (A.K.A. shuffle) with the addition that when all items are received, will shuffle the array again ensuring that the last elements of the old shuffle will not be on the first positions the next time. This way you will have a completely random array but with no "duplicated" entries feeling.

So, for a `length = 1000` array and `ensure = 0.25` (25%), you will get 1000 random entries without any duplicate and then will shuffle the array again to get another 1000 random entries without any duplicate, but ensuring that 25% of the last entries received in the old shuffle won't be stored on the first 25% positions of the next shuffle, increasing the "randomness without duplication" feeling.