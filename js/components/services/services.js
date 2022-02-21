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
    for (const service of data) {
        if (typeof service !== 'object') {
            continue;
        }
        HTML += `<div class="short-about service">
        <img class="icon-services" src="./img/icon/img-icon-visible/${service.img}.png"alt="${service.alt}" />
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

    servicesDOM.innerHTML = HTML;

    return [false, 'OK'];
}
export { services };
