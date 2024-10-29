export const getCurrentDate = () => {
    const today = new Date();
    return today.getDate();
};

export const isNovember24 = () => {
    const today = new Date();
    return today.getMonth() === 10 && today.getFullYear() === 2024;
};