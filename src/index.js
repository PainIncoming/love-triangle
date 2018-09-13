/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let loveTrianglesCount = 0;

    if (preferences.length > 2) {
        for (let index = 0; index < preferences.length; index++) {
            if (preferences[index] === null) continue;

            let firstIndex  = preferences[index],
                secondIndex = preferences[firstIndex - 1],
                thirdIndex  = preferences[secondIndex - 1];

            if (index + 1 === thirdIndex && secondIndex !== thirdIndex) {
                [index, --firstIndex, --secondIndex].forEach(item => {
                    preferences[item] = null;
                });
                loveTrianglesCount++;
            }
        }
    }

    return loveTrianglesCount;
};
