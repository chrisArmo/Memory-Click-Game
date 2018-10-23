/**
 * Utility Helper
 */

// Functions -------------------- /

// Get random number
const getRandomNumber = (max, base = 0) => Math.floor((Math.random() * max) + base);

// Shuffle images
export const shuffleImages = (images) => {
    const imgs = [...images],
        shuffled = [];
    while (imgs.length > 0) {
        const index = getRandomNumber(imgs.length);
        shuffled.push(imgs.splice(index, 1)[0]);
    }
    return shuffled;
};
