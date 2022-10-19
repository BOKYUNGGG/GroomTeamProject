function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}

function download(url){
    return new Promise(resolve => {
        fetch(url)
        .then(response => response.blob())
    })
}

async function delayDownload(url, filename){
    await download(url, filename)
    await delay(1000)
}

async function execute(){
    for (const {courseId, title} of data){
        await delayDownload()
    }
    console.log()
}