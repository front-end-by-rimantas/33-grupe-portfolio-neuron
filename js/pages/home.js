// IMPORTS
// import videoWindow from './components/videoWindow';
// CODE EXECUTION BELOW THIS COMMENT LINE

/* header start */
window.onscroll = function () {
    toggleHeader();
};

var header = document.getElementById('header');
var headerOffset = header.offsetTop;

function toggleHeader() {
    if (window.pageYOffset > headerOffset) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
}
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
        iframe.classList.add('about2-vid');
        iframe.id = 'videoAbout2';
        iframe.src = src + '?rel=0';
        iframe.title = null;
        let element = document.getElementById(id);
        element.appendChild(iframe);
        let closeX = document.createElement('p');
        closeX.textContent = 'x';
        closeX.id = 'x';
        closeX.classList.add('about2-closeVid');
        closeX.setAttribute('onclick','videoClose("videoAbout2");');
        element.appendChild(closeX);
        element.appendChild(iframe);
        let vidBackGroundColor = document.createElement('div');
        vidBackGroundColor.id = 'vidBackGroundColor';
        vidBackGroundColor.classList.add('about2-video-background');
        element.appendChild(vidBackGroundColor);
        // console.log(`%c errors that appear when opening iframe will be fixed later`, 'color: green; font-weight: bold; font-size: 1rem');
    }
}

function videoClose(id) {
    document.getElementById('x').remove();
    document.getElementById('vidBackGroundColor').remove();
    document.getElementById(id).remove();
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
