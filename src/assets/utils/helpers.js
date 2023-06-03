export const getCategories = (array) => [...new Set(array.map(item => item.category))];

export const removeDuplicates = (array) => {
    let seen = {};
    return array.filter(item => seen.hasOwnProperty(item) ? false : (seen[item] = true)
)};

export const getArrayProperty = (array, property) => array.map(item => item[property]);