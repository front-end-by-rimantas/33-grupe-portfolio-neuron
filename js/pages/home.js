// IMPORTS
// import videoWindow from './components/videoWindow';
// CODE EXECUTION BELOW THIS COMMENT LINE

/* header start */
/* header end */

/* hero start */
/* hero end --> */

/* about block 1 start */
/* about block 1 end */

/* about block 2 start */
function video(id, src) {
    let popup = document.getElementById(id);
    popup.classList.toggle('show');
    let a = document.getElementById('videoAbout2');
    if (a === null) {
        let iframe = document.createElement('iframe');
        // iframe.classList.add("vid");
        iframe.classList.add('vid');
        iframe.id = 'videoAbout2';
        iframe.src = src;
        //  + '?rel=0';
        iframe.title = null;
        let element = document.getElementById(id);
        element.appendChild(iframe);
    }
    // let iframe = document.createElement('iframe');
    // iframe.classList.add("vid");
    // iframe.classList.add("video1");
    // iframe.id='videoAbout2';
    // iframe.src=src;
    // let element = document.getElementById(id);
    // element.appendChild(iframe);
}

function videoClose(id) {
    let popup = document.getElementById(id);
    let elmnt = document.getElementById(id);
    elmnt.remove();
    popup.classList.toggle('hide');
}

// function remove(){
//     const text = document.querySelectorAll('video1');
//     for (const el of text) {
//         el.remove();
//     }
// }
/* about block 2 end */

/* counter block start */
/* counter block end */

/* services block start */
/* services block end */

/* our latest proget start */
/* our latest proget end */

/* subscribe block start */
/* subscribe block end */

/* logo block start */
/* logo block end */

/* how we work block start */
/* how we work block end */

/* recent block start */
/* recent block logos end */

/* contact block start */
/* contact block logos end */

/* footer start */
/* footer end */
