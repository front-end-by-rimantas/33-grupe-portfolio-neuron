function services(selector, data) {
    if (typeof selector !== 'string' || selector === '') {
        return [true, `Selector has to be a not-empty string`];
    }
    if (!Array.isArray(data)) {
        return [true, `Data has to be an array`];
    }
    if (data.length === 0) {
        return [true, 'Could not found DOM element based on given selector'];
    }

    const servicesDOM = document.querySelector(selector);
    if (!servicesDOM) {
        return [true, `Could not found DOM element based on given selector`];
    }

    let HTML = '';
    const isValidServiceObject = (service) => {
        if (
            typeof service !== 'object' ||
            service === null ||
            Array.isArray(service)
        ) {
            return false;
        }

        const keys = Object.keys(service);
        if (keys.length < 3 || keys.length > 4) {
            return false;
        }
        return true;
    };

    const isValidServiceImg = (img) => {
        if (typeof img !== 'string' || img === '') {
            return false;
        }
        const parts = img.split('.');
        if (
            parts.length < 2 ||
            parts[0].trimStart() === '' ||
            parts[1].trim() === ''
        ) {
            return false;
        }
        return true;
    };

    const isValidServiceAlt = (alt) => {
        if (typeof alt !== 'string') {
            return false;
        }
        return true;
    };

    const isValidServiceTitle = (h3) => {
        if (typeof h3 !== 'string') {
            return false;
        }
        return true;
    };

    const isValidServiceDescription = (description) => {
        if (typeof description !== 'string') {
            return false;
        }
        return true;
    };

    const isValidService = (service) => {
        if (
            !isValidServiceObject(service) ||
            !isValidServiceImg(service.img) ||
            !isValidServiceAlt(service.alt) ||
            !isValidServiceTitle(service.h3) ||
            !isValidServiceDescription(service.description)
        ) {
            return false;
        }
        return true;
    };

    for (const service of data) {
        if (!isValidService(service)) {
            continue;
        }
        HTML += `<div class="short-about service">
        <img class="icon-services" src="./img/icon/img-icon-visible/${service.img.trim()}"alt="${
            service.alt
        }" />
        <div class="short-about-title ">
        <h3>${service.h3}</h3>
        </div>
        <div class="short-about-descr">
        <p class="description">
          ${service.description}
         </p>
         </div>
      </div>`;
    }
    if (HTML === '') {
        return [true, 'Data has no valid service objects'];
    }
    servicesDOM.innerHTML = HTML;

    return [false, 'OK'];
}
export { services };
