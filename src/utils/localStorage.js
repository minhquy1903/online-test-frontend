export const getLocalStorage = (key) => {
    const data = localStorage.getItem(key);

    if (!data) {
        return {};
    }
    return JSON.parse(data);
};
