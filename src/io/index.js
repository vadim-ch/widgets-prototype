export const getGroups = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([{'operatorId': '567'}, {'operatorId': '897'}]);
            // resolve([{'operatorId': '567'}]);
        }, 1500);
    });
}

export const getDialog = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('123-345');
        }, 3000);
    });
}