(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),p:""};function t(e){e.classList.add("popup_is-opened")}function n(e){e.classList.remove("popup_is-opened")}function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return(t=function(e){var t=function(e){if("object"!=o(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==o(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}e.d({},{Tp:()=>h,y6:()=>L,Tk:()=>G});var i="3f7c8419-2234-4e11-ad7d-25691204c1cb",a="frontend-st-cohort-201",l="https://nomoreparties.co/v1/".concat(a);function p(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return fetch("".concat(l).concat(e),c(c({},t),{},{headers:c({authorization:i,"Content-Type":"application/json"},t.headers)})).then(p)}function d(e,n){var o=h.querySelector(".places__item").cloneNode(!0),r=o.querySelector(".card__image"),c=o.querySelector(".card__title"),u=o.querySelector(".card__delete-button"),a=o.querySelector(".card__like-button"),l=document.createElement("span");return l.classList.add("card__like-count"),l.textContent=e.likes.length,a.after(l),e.owner._id!==n&&(u.style.display="none"),r.src=e.link,r.alt=e.name,c.textContent=e.name,u.addEventListener("click",(function(){G((function(){var t;(t=e._id,fetch("https://nomoreparties.co/v1/".concat("frontend-st-cohort-201","/cards/").concat(t),{method:"DELETE",headers:{authorization:i}}).then(p)).then((function(){o.remove()})).catch((function(e){return console.error("Ошибка при удалении карточки:",e)}))}))})),a.addEventListener("click",(function(){var t,n,o,r=a.classList.contains("card__like-button_is-active");(t=e._id,n=!r,o=n?"PUT":"DELETE",s("/cards/".concat(t,"/likes"),{method:o})).then((function(e){a.classList.toggle("card__like-button_is-active",!r),l.textContent=e.likes.length})).catch((function(e){return console.error("Ошибка изменения лайка: ".concat(e))}))})),r.addEventListener("click",(function(){var n=L.querySelector(".popup__image"),o=L.querySelector(".popup__caption");n.src=e.link,n.alt=e.name,o.textContent=e.name,t(L)})),o}var f=function(e,t,n){t.validity.valid?m(e,t,n):_(e,t,n)},_=function(e,t,n){var o=e.querySelector(".popup__error_".concat(t.name));o&&(t.classList.add(n.inputErrorClass),o.textContent=t.validationMessage,o.classList.add(n.errorClass))},m=function(e,t,n){var o=e.querySelector(".popup__error_".concat(t.name));o?(t.classList.remove(n.inputErrorClass),o.textContent="",o.classList.remove(n.errorClass)):console.warn("Error element not found for input: ".concat(t.name))},y=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(n.inactiveButtonClass),t.disabled=!1):(t.classList.add(n.inactiveButtonClass),t.disabled=!0)};const v=e.p+"0863e5bc26221680f1e2.svg";document.querySelector(".header__logo").src=v;var b,S="",h=document.querySelector("#card-template").content,q=document.querySelector(".places__list"),E=document.querySelector(".popup_type_edit"),g=document.querySelector(".popup_type_new-card"),L=document.querySelector(".popup_type_image"),k=document.querySelector(".profile__edit-button"),C=E.querySelector(".popup__form"),O=E.querySelector(".popup__input_type_name"),j=E.querySelector(".popup__input_type_description"),P=document.querySelector(".profile__title"),w=document.querySelector(".profile__description"),x=document.querySelector(".profile__image"),T=g.querySelector(".popup__form"),A=g.querySelector(".popup__input_type_card-name"),D=g.querySelector(".popup__input_type_url"),B=document.querySelector(".profile__add-button"),N=document.querySelector(".popup__input_type_avatar"),z=document.querySelector(".popup_type_avatar"),J=document.querySelector(".profile__edit-avatar-button"),H=document.querySelector(".popup_type_confirm"),I=H.querySelector(".popup__button"),M={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function U(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Сохранение...";t?(e.textContent=n,e.disabled=!0):(e.textContent=e.dataset.defaultText,e.disabled=!1)}function F(e){var t=document.querySelector(".error-message");t?(t.textContent=e,t.classList.add("error-message_visible"),setTimeout((function(){return t.classList.remove("error-message_visible")}),5e3)):console.error(e)}function G(e){t(H),I.onclick=function(){e(),n(H)}}b=M,document.querySelectorAll(b.formSelector).forEach((function(e){e.addEventListener("submit",(function(e){return e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),o=e.querySelector(t.submitButtonSelector);y(n,o,t),n.forEach((function(r){r.addEventListener("input",(function(){f(e,r,t),y(n,o,t)}))}))}(e,b)})),k.addEventListener("click",(function(){O.value=P.textContent,j.value=w.textContent,t(E)})),B.addEventListener("click",(function(){A.value="",D.value="";var e=[A,D],n=T.querySelector(M.submitButtonSelector);y(e,n,M),t(g)})),document.querySelector(".popup__form_type_avatar").addEventListener("submit",(function(e){e.preventDefault();var t,o=e.submitter;U(o,!0),(t=N.value,fetch("https://nomoreparties.co/v1/".concat(a,"/users/me/avatar"),{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:i},body:JSON.stringify({avatar:t})}).then((function(e){if(!e.ok)throw new Error("Не удалось обновить аватар");return e.json()}))).then((function(e){x.style.backgroundImage="url('".concat(e.avatar,"')"),n(z)})).catch((function(e){return F("Ошибка обновления аватара: ".concat(e))})).finally((function(){return U(o,!1)}))})),J.addEventListener("click",(function(){t(z)})),document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".popup__close").forEach((function(e){var t=e.closest(".popup");e.addEventListener("click",(function(){return n(t)}))})),document.querySelectorAll(".popup").forEach((function(e){e.addEventListener("click",(function(t){t.target===e&&n(e)}))})),document.addEventListener("keydown",(function(e){if("Escape"===e.key){var t=document.querySelector(".popup_is-opened");t&&n(t)}})),s("/users/me").then((function(e){S=e._id,P.textContent=e.name,w.textContent=e.about,x.style.backgroundImage="url('".concat(e.avatar,"')")})).catch((function(e){return F("Ошибка загрузки данных пользователя: ".concat(e))})),s("/cards").then((function(e){e.forEach((function(e){var t=d(e,S);q.append(t)}))})).catch((function(e){return F("Ошибка загрузки карточек: ".concat(e))})),document.querySelectorAll(".popup").forEach((function(e){e.classList.add("popup_is-animated")}))})),document.querySelectorAll(".popup__close").forEach((function(e){var t=e.closest(".popup");e.addEventListener("click",(function(){return n(t)}))})),document.querySelectorAll(".popup").forEach((function(e){e.addEventListener("click",(function(t){t.target===e&&n(e)}))})),document.addEventListener("keydown",(function(e){if("Escape"===e.key){var t=document.querySelector(".popup_is-opened");t&&n(t)}})),T.addEventListener("submit",(function(e){e.preventDefault();var t,o=e.submitter;U(o,!0),(t={name:A.value,link:D.value},s("/cards",{method:"POST",body:JSON.stringify(t)})).then((function(e){var t=d(e,S);q.prepend(t),n(T.closest(".popup"))})).catch((function(e){return F("Ошибка добавления карточки: ".concat(e))})).finally((function(){return U(o,!1)}))})),C.addEventListener("submit",(function(e){e.preventDefault();var t,o=e.submitter;U(o,!0),(t={name:O.value,about:j.value},s("/users/me",{method:"PATCH",body:JSON.stringify(t)})).then((function(e){P.textContent=e.name,w.textContent=e.about,n(C.closest(".popup"))})).catch((function(e){return F("Ошибка обновления профиля: ".concat(e))})).finally((function(){return U(o,!1)}))}))})();