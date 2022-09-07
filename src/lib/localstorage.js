export const setLS = (key, datas ) => {
    localStorage.setItem(key, JSON.stringify(datas));
}

export const getLS = (key) => {
    return JSON.parse(localStorage.getItem(key));
}

export const deleteLS = (key) => {
    localStorage.removeItem(key);
}