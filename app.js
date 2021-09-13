import fetch from 'node-fetch';

export function getName({ name }) {
    return name;
}

export function copyAndPush(arr, newElement) {
    return [...arr, newElement];
}

export function capitalizeAndFilter(arr) {
    const capitalizedStrings = arr.map((str) => {
        return str[0].toUpperCase() + str.slice(1);
    });
    return capitalizedStrings.filter((str) => {
        return str[0] !== 'F';
    });
}

export async function fetchQuotes() {
    const URL = 'https://futuramaapi.herokuapp.com/api/quotes';
    const response = await fetch(URL);
    const result = await response.json();
    return result[0];
}
