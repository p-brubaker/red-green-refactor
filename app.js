export function getName({ name }) {
    return name;
}

export function copyAndPush(arr, newElement) {
    return [...arr, newElement];
}

export function capitalizeAndFilter(arr) {
    const newArr = [];
    let newStr;
    for (const str of arr) {
        newStr = str[0].toUpperCase() + str.slice(1);
        if (newStr[0] !== 'F') {
            newArr.push(newStr);
        }
    }
    return newArr;
}
