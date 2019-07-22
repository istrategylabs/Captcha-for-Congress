import "./style.scss";
import facebook from "./facebook";
import twitter from "./twitter";
import men from "./men";

/**
 * Exposing this object globally in case we want to provide an API
 */
const C4C = {
  mount,
  DEBUG: false
};
window.C4C = C4C;

/**
 * Create a whole bunch of DOM elements for the modal, shadow, content, buttons, etc.
 */
const container = document.createElement("div");
const modal = document.createElement("div");
const header = document.createElement("header");
const imageContainer = document.createElement("div");
const footer = document.createElement("footer");
const verifyButton = document.createElement("button");
const modalStepTwo = document.createElement("div");

/**
 * Global-ish boolean for if we have shown the modal or not.
 * Gets toggled in `ping()`
 */
let hasBeenShown = false;

let leftPercent = -1;
let topPercent = -1;
/**
 * The above DOM elements all have a bunch of markup, content, etc.
 * So set that up here!
 */
(function setupDOMElements() {
  container.classList.add("C4C__shadow");
  modal.classList.add("C4C__modal");
  container.appendChild(modal);

  header.classList.add("C4C__header");
  header.innerHTML = `<p>Select all images of</p>
    <p class="C4C__text--large">people who should not be planning my family.</p>
    <p><a id="C4C__header__id" href="#">Click verify once you're done.</a></p>
  `;
  modal.appendChild(header);

  imageContainer.classList.add("C4C__image-container", "C4C__clearfix");
  modal.appendChild(imageContainer);

  men.forEach(({ name, photo }) => {
    const imageOuter = document.createElement("a");
    imageOuter.classList.add("C4C__image__outer");
    imageOuter.setAttribute("href", "#");
    const image = document.createElement("img");
    image.setAttribute("data-captcha-img", "1");
    image.setAttribute("alt", name);
    image.src = photo;
    imageOuter.appendChild(image);
    imageContainer.appendChild(imageOuter);
  });

  footer.classList.add("C4C__footer");
  verifyButton.innerHTML = "Verify";
  verifyButton.classList.add("C4C__button");
  footer.appendChild(verifyButton);
  modal.appendChild(footer);

  modalStepTwo.classList.add("C4C__modalStepTwo");
  modal.appendChild(modalStepTwo);
})();

/**
 * Select (or unselect) an image. Toggles a class on the parent <div>
 * for stylistic reasons.
 */
function selectImage(e) {
  const imageOuter = e.target.closest(".C4C__image__outer");
  imageOuter.classList.toggle("active");
}

/**
 * Upon opening the modal (only the first time), ping our Google Script
 * to update views and send the referring URL.
 */
function ping() {
  if (hasBeenShown) return;
  hasBeenShown = true;
  const referringURL = window.location.host + window.location.pathname;
  fetch(
    "https://script.google.com/macros/s/AKfycbwVe12OgYnwyvJ91EwUOJjj5g02lQlbTC_g1wr2pumW32ePtPA/exec",
    {
      method: "POST",
      body: referringURL,
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      }
    }
  );
}

function clamp(n, min, max) {
  if (n < min) return min;
  if (n > max) return max;
  return n;
}

/**
 *
 * @param {MouseEvent} e
 * @param {boolean} hideShadow
 * @param {boolean} escReset
 */
function showModal(e, hideShadow = false, escReset = false) {
  if (hasBeenShown) return;
  document.body.appendChild(container);
  if (hideShadow) container.classList.add("C4C__shadow--hideShadow");
  container.__C4C_escReset = escReset;
  setTimeout(() => {
    document.getElementById('C4C__header__id').focus();
    document.body.style.overflow = "hidden";
    const { width, height } = modal.getBoundingClientRect();
    let x = e.pageX - width / 2;
    if (x < 0) x = 0;
    if (x > window.innerWidth - width) x = window.innerWidth - width;
    let y = e.pageY - height / 2;
    if (y < 0) y = 0;
    if (y + height > window.innerHeight) y = window.innerHeight - height;
    container.classList.add("active");
    modal.style.left = x + "px";
    leftPercent = x / window.innerWidth;
    modal.style.top = y + "px";
    topPercent = y / window.innerHeight;
    ping();
  }, 100);
}

function hideModal() {
  // reset everything
  document.body.style.overflow = "";
  container.classList.remove("active");
  Array.from(document.querySelectorAll("[data-captcha-img]")).forEach(el =>
    el.parentNode.classList.remove("active")
  );
  setTimeout(() => {
    if (document.body.contains(container)) document.body.removeChild(container);
    modalStepTwo.classList.remove("active");
  }, 100);
}

/**
 * Step two should show different content depending on if the user selected all 9 images or not.
 */
function verifySelected(numSelected) {
  modalStepTwo.innerHTML = "";
  const body = document.createElement("div");
  body.classList.add("C4C__modalStepTwo__body");
  if (numSelected < 9) {
    const who = Array.from(document.querySelectorAll("[data-captcha-img]"))
      .filter(el => !el.parentNode.classList.contains("active"))[0]
      .getAttribute("alt");
    const belief = "abortion should be illegal in all cases after 6 weeks";
    body.innerHTML = `<h2>Hold up there...</h2>
      <p><small>Do you really want ${who} in the driver's seat of your uterus?</small></p>`;
  } else {
    body.classList.add("C4C__modalStepTwo__body--large");
    body.innerHTML =
      "<h2>You Got It!</h2><p>Lawmakers should not be part of our family planning process.</p>";
  }
  modalStepTwo.appendChild(body);
  const share = document.createElement("div");
  share.classList.add("C4C__share");
  share.innerHTML = `<div>
    <p class="caps C4C__share__eyebrow">But what can I do about it?</p>
      <h2>Share Captcha for Congress</h2>
      <p>Help keep reproductive rights at the top of everyone's mind on the Internet.</p>
      <div>
        <a class="C4C__share__button" href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fcaptchaforcongress.com&text=Bots%20don%27t%20belong%20on%20the%20Internet.%20Congress%20doesn%27t%20belong%20between%20our%20legs.%20Get%20Captcha%20for%20Congress%20and%20show%20your%20support%20for%20reproductive%20rights!" target="_blank">${twitter}</a>
        <a class="C4C__share__button" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fcaptchaforcongress.com" target="_blank">${facebook}</a>
      </div>
    </div>`;
  modalStepTwo.appendChild(share);
  modalStepTwo.classList.add("active");
}

function verify() {
  const numSelected = Array.from(
    document.querySelectorAll("[data-captcha-img]")
  ).filter(el => el.parentNode.classList.contains("active")).length;
  verifySelected(numSelected);
}

// clicking on the shadow should hide it
container.addEventListener("click", e => {
  console.log(e.target);
  if (e.target === container) hideModal();
  if (e.target.classList.contains("C4C__image__outer")) return selectImage(e);
  if (e.target.getAttribute("data-captcha-img")) selectImage(e);
  if (e.target === verifyButton) verify();
});

// press esc to close
window.addEventListener("keydown", e => {
  if (e.keyCode === 27 && container.__C4C_escReset) {
    Array.from(document.querySelectorAll("[data-captcha-img]")).forEach(el =>
      el.parentNode.classList.remove("active")
    );
    modalStepTwo.classList.remove("active");
    return;
  }
  if (e.keyCode === 27) hideModal();
});

window.addEventListener("resize", () => {
  if (!container.classList.contains("active")) return;
  // maintain leftPercent and topPercent ratio
  const left = leftPercent * window.innerWidth;
  const top = topPercent * window.innerHeight;
  modal.style.left = left + "px";
  modal.style.top = top + "px";
});

function mountAtElement(el) {
  if (window.C4C.DEBUG) console.log("mounting", el);
  if (el.getAttribute("data-c4c") === "auto") {
    const rect = el.getBoundingClientRect();
    showModal(
      {
        pageX: rect.left + rect.width / 2,
        pageY: rect.top + rect.height / 2
      },
      el.getAttribute("data-c4c-shadow") === "none",
      el.getAttribute("data-c4c-esc") === "reset"
    );
  } else {
    el.addEventListener("click", showModal);
  }
}

function mount(el = null) {
  if (el) return mountAtElement(el);
  const targets = Array.from(document.querySelectorAll("[data-c4c]"));
  targets.forEach(mountAtElement);
}

window.addEventListener("DOMContentLoaded", () => mount());
