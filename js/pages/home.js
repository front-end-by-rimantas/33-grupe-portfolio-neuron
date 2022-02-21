// IMPORTS
import { services } from '../components/services/services.js';
import { servicesData } from '../data/servicesData.js';
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
function video() {
    let popup = document.getElementById('vidPopup');
    popup.classList.toggle('show');
}
function videoClose() {
    let popup = document.getElementById('vidPopup');
    popup.classList.toggle('hide');
}
/* about block 2 end */

/* counter block start */
/* counter block end */

/* services block start */

/*const [serviceErr, serviceMsg] = services('#services_block', servicesData);
if (serviceErr) {
    console.error(serviceMsg);
} else {
    console.log(serviceMsg);
}*/
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
