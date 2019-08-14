function cratePromise() {
    const myPromise = new Promise((resolve, reject) => {
        if (false) {
            setTimeout(() => {
                resolve('I have succeeded');
            }, 1000);
        } else {
            reject('I have filed');
        }
    });

    myPromise
        .then(value => value + '!!!!')
        .then(newvlue => console.log(newvlue))
        .catch(reason => console.log(reason));
}