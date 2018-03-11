var urlParams = new URLSearchParams(window.location.search)

export const auth = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('123-345');
        }, 3000);
    });
}

export const getGroups = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = [{'operatorId': '567'}, {'operatorId': '897'}];
            resolve(urlParams.has('oneGroup') ? [result[0]] : result);
        }, 1500);
    });
}

export const getDialog = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: '79797-979'
            });
        }, 3000);
    });
}

export const getHistory = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {
                    id: '123',
                    type: 'visitor',
                    text: 'yo'
                },
                {
                    id: '456',
                    type: 'operator',
                    text: 'Hi'
                }
            ]);
        }, 1000);
    });
}

export const mockWebSocket = () => (url) => {
    const socket = {
        send: () => {
            // localStorage.setItem('send')
        }
    }
    try {
        window.socketMessage = (data) => {
            socket.onMessage(JSON.parse(data));
        }

    } catch(err) {
        console.error(err);
    }
    return socket;
}