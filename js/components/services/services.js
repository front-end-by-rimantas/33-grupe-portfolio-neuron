function services(selector, data) {
    const servicesDOM = document.querySelector(selector);
    let HTML = '';
    for (const service of data) {
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

    return;
}
export { services };
