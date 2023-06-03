export default function createHTMLElement(options) {
    const { element, text, className, src } = options;

    const newDomElement = document.createElement(element);

    if (text) {
        newDomElement.textContent = text;
    }

    if (className) {
        if (Array.isArray(className)) {
            className.forEach((cn) => newDomElement.classList.add(cn));
        } else {
            newDomElement.classList.add(className);
        }
    }
    if (src) {
        newDomElement.src = src;
    }

    return newDomElement;
}
