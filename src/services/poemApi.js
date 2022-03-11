
export const getPoems = () => fetch('https://poetrydb.org/random/6').then((response) => response.json())
