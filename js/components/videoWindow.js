// function video(id, src) {
//     let popup = document.getElementById(id);
//     popup.classList.toggle('show');
//     let a = document.getElementById('videoAbout2');
//     if (a === null) {
//         let iframe = document.createElement('iframe');
//         iframe.classList.add('about2-vid');
//         iframe.id = 'videoAbout2';
//         iframe.src = src + '?rel=0';
//         iframe.title = null;
//         let element = document.getElementById(id);
//         element.appendChild(iframe);
//         let closeX = document.createElement('p');
//         closeX.textContent = 'x';
//         closeX.id = 'x';
//         closeX.classList.add('about2-closeVid');
//         closeX.setAttribute('onclick','videoClose("videoAbout2");');
//         element.appendChild(closeX);
//         element.appendChild(iframe);
//         let vidBackGroundColor = document.createElement('div');
//         vidBackGroundColor.id = 'vidBackGroundColor';
//         vidBackGroundColor.classList.add('about2-video-background');
//         element.appendChild(vidBackGroundColor);
//     }
// }

// function videoClose(id) {
//     document.getElementById('x').remove();
//     document.getElementById('vidBackGroundColor').remove();
//     document.getElementById(id).remove();
// }