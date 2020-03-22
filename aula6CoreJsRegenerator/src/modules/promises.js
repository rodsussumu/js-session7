function promise() {
    return new Promise((resolve, reject ) => {
        setTimeout(()=>{
            console.log('Sou uma promessa');
            resolve();
        }, 200)
    });
}

export default async function () {
    await promise();
    console.log('Terminou')
}