var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _name, _distance, _description, _category, _onButtonClick, _createHeader, _createTitle, _createButton, _bindEvent, _createRestaurantIcon, _getImageSrc, _RestaurantInfo_instances, createRestaurantInfo_fn, _createRestaurantItem, _button, _createButton2, _bindEvent2, _createOption, _createInputDropDown, _createInputFormItem, _createNameFormItem, _createDescriptionFormItem, _createLinkFormItem, _createLabel, _createInput, _createTextarea, _createSpan, _modal, _modalContainer, _modalBackdrop, _createModal, _bindEvents, _modalForm, _cancelButton, _addButton, _categoryDropDown, _nameInput, _distanceDropDown, _descriptionInput, _linkInput, _init, _createAddModal, _createModalForm, _createModalFormScrollable, _createButtonContainer, _handleAddButton, _handleCancelButton, _handleAddRestaurant;
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const DOM = {
  APP: document.getElementById("app"),
  RESTAURANT_LIST: document.getElementById("restaurant-list")
};
class Restaurant {
  constructor(name, distance, description, category) {
    __privateAdd(this, _name);
    __privateAdd(this, _distance);
    __privateAdd(this, _description);
    __privateAdd(this, _category);
    __privateSet(this, _name, name);
    __privateSet(this, _distance, distance);
    __privateSet(this, _description, description);
    __privateSet(this, _category, category);
  }
  getName() {
    return String(__privateGet(this, _name));
  }
  getDistance() {
    return String(__privateGet(this, _distance));
  }
  getDescription() {
    return String(__privateGet(this, _description));
  }
  getCategory() {
    return String(__privateGet(this, _category));
  }
}
_name = new WeakMap();
_distance = new WeakMap();
_description = new WeakMap();
_category = new WeakMap();
const Rest1 = new Restaurant(
  "피양콩할마니",
  "10",
  "평양 출신의 할머니가 수십 년간 운영해온 비지 전문점 피양콩 할마니. 두부를 빼지 않은 되비지를 맛볼 수 있는 곳으로, ‘피양’은 평안도 사투리로 ‘평양’을 의미한다. 딸과 함께 운영하는 이곳에선 맷돌로 직접 간 콩만을 사용하며, 일체의 조미료를 넣지 않은 건강식을 선보인다. 콩비지와 피양 만두가 이곳의 대표 메뉴지만, 할머니가 옛날 방식을 고수하며 만들어내는 비지전골 또한 이 집의 역사를 느낄 수 있는 특별한 메뉴다. 반찬은 손님들이 먹고 싶은 만큼 덜어 먹을 수 있게 준비돼 있다.",
  "한식"
);
const Rest2 = new Restaurant(
  "친친",
  "5",
  "Since 2004 편리한 교통과 주차, 그리고 관록만큼 깊은 맛과 정성으로 정통 중식의 세계를 펼쳐갑니다",
  "중식"
);
const Rest3 = new Restaurant(
  "잇쇼우",
  "10",
  "잇쇼우는 정통 자가제면 사누끼 우동이 대표메뉴입니다. 기술은 정성을 이길 수 없다는 신념으로 모든 음식에최선을 다하는 잇쇼우는 고객 한분 한분께 최선을 다하겠습니다",
  "한식"
);
const Rest4 = new Restaurant("이태리키친", "20", "늘 변화를 추구하는 이태리키친입니다.", "양식");
const Rest5 = new Restaurant("호아빈 삼성점", "15", "푸짐한 양에 국물이 일품인 쌀국수", "아시안");
const Rest6 = new Restaurant("도스타코스 선릉점", "5", "멕시칸 캐주얼 그릴", "기타");
const RestaurantList = [Rest1, Rest2, Rest3, Rest4, Rest5, Rest6];
const BUTTON_IMAGE_SRC = Object.freeze({
  ADD_BUTTON: "./public/assets/add-button.png"
});
const CATEGORY_IMAGE_SRC = Object.freeze({
  KOREAN: "./public/assets/category-korean.png",
  CHINESE: "./public/assets/category-chinese.png",
  JAPANESE: "./public/assets/category-japanese.png",
  WESTERN: "./public/assets/category-western.png",
  ASIAN: "./public/assets/category-asian.png",
  ETC: "./public/assets/category-etc.png"
});
class Header {
  constructor(onButtonClick) {
    __privateAdd(this, _onButtonClick);
    __privateAdd(this, _createHeader, () => {
      const header = document.createElement("header");
      header.classList.add("gnb");
      const title = __privateGet(this, _createTitle).call(this, "점심 뭐 먹지");
      const addButton = __privateGet(this, _createButton).call(this, BUTTON_IMAGE_SRC.ADD_BUTTON, "음식점 추가");
      header.appendChild(title);
      header.appendChild(addButton);
      DOM.APP.prepend(header);
    });
    __privateAdd(this, _createTitle, (titleText) => {
      const title = document.createElement("h1");
      title.classList.add("gnb__title", "text-title");
      title.textContent = titleText;
      return title;
    });
    __privateAdd(this, _createButton, (buttonImageSrc, buttonImageAlt) => {
      const button = document.createElement("button");
      button.type = "button";
      button.classList.add("gnb__button");
      button.setAttribute("aria-label", buttonImageAlt);
      const buttonImage = document.createElement("img");
      buttonImage.src = buttonImageSrc;
      buttonImage.alt = buttonImageAlt;
      button.appendChild(buttonImage);
      return button;
    });
    __privateAdd(this, _bindEvent, () => {
      const addButton = document.querySelector(".gnb__button");
      addButton.addEventListener("click", __privateGet(this, _onButtonClick));
    });
    __privateSet(this, _onButtonClick, onButtonClick);
    __privateGet(this, _createHeader).call(this);
    __privateGet(this, _bindEvent).call(this);
  }
}
_onButtonClick = new WeakMap();
_createHeader = new WeakMap();
_createTitle = new WeakMap();
_createButton = new WeakMap();
_bindEvent = new WeakMap();
const CATEGORY = Object.freeze({
  KOREAN: {
    SRC: CATEGORY_IMAGE_SRC.KOREAN,
    ALT: "한식"
  },
  CHINESE: {
    SRC: CATEGORY_IMAGE_SRC.CHINESE,
    ALT: "중식"
  },
  JAPANESE: {
    SRC: CATEGORY_IMAGE_SRC.JAPANESE,
    ALT: "일식"
  },
  WESTERN: {
    SRC: CATEGORY_IMAGE_SRC.WESTERN,
    ALT: "양식"
  },
  ASIAN: {
    SRC: CATEGORY_IMAGE_SRC.ASIAN,
    ALT: "아시안"
  },
  ETC: {
    SRC: CATEGORY_IMAGE_SRC.ETC,
    ALT: "기타"
  }
});
class RestaurantIcon {
  constructor(category) {
    __privateAdd(this, _createRestaurantIcon, (category) => {
      const divIcon = document.createElement("div");
      divIcon.classList = "restaurant__category";
      const img = document.createElement("img");
      img.classList.add("category-icon");
      img.src = __privateGet(this, _getImageSrc).call(this, category);
      img.alt = category;
      divIcon.appendChild(img);
      return divIcon;
    });
    __privateAdd(this, _getImageSrc, (category) => {
      if (category === CATEGORY.KOREAN.ALT) return CATEGORY.KOREAN.SRC;
      if (category === CATEGORY.CHINESE.ALT) return CATEGORY.CHINESE.SRC;
      if (category === CATEGORY.JAPANESE.ALT) return CATEGORY.JAPANESE.SRC;
      if (category === CATEGORY.WESTERN.ALT) return CATEGORY.WESTERN.SRC;
      if (category === CATEGORY.ASIAN.ALT) return CATEGORY.ASIAN.SRC;
      if (category === CATEGORY.ETC.ALT) return CATEGORY.ETC.SRC;
    });
    return __privateGet(this, _createRestaurantIcon).call(this, category);
  }
  getElement() {
    return this.element;
  }
}
_createRestaurantIcon = new WeakMap();
_getImageSrc = new WeakMap();
class RestaurantInfo {
  constructor(name, distance, description) {
    __privateAdd(this, _RestaurantInfo_instances);
    return __privateMethod(this, _RestaurantInfo_instances, createRestaurantInfo_fn).call(this, name, distance, description);
  }
}
_RestaurantInfo_instances = new WeakSet();
createRestaurantInfo_fn = function(name, distance, description) {
  const restaurantInfo = document.createElement("div");
  restaurantInfo.classList = "restaurant__info";
  const restaurantName = document.createElement("h3");
  restaurantName.classList.add("restaurant__name", "text-subtitle");
  restaurantName.textContent = name;
  const restaurantDistance = document.createElement("span");
  restaurantDistance.classList.add("restaurant__distance", "text-body");
  restaurantDistance.textContent = `캠퍼스부터 ${distance}분 내`;
  const restaurantDescription = document.createElement("p");
  restaurantDescription.classList.add("restaurant__description", "text-body");
  restaurantDescription.textContent = description;
  restaurantInfo.appendChild(restaurantName);
  restaurantInfo.appendChild(restaurantDistance);
  restaurantInfo.appendChild(restaurantDescription);
  return restaurantInfo;
};
class RestaurantItem {
  constructor(restaurant) {
    __privateAdd(this, _createRestaurantItem, (restaurant) => {
      const li = document.createElement("li");
      const icon = new RestaurantIcon(restaurant.getCategory());
      const info = new RestaurantInfo(restaurant.getName(), restaurant.getDistance(), restaurant.getDescription());
      li.classList.add("restaurant");
      li.appendChild(icon);
      li.appendChild(info);
      return li;
    });
    return __privateGet(this, _createRestaurantItem).call(this, restaurant);
  }
}
_createRestaurantItem = new WeakMap();
class Button {
  constructor(type, className, buttonText, listener) {
    __privateAdd(this, _button);
    __privateAdd(this, _createButton2, (type, className, buttonText) => {
      const button = document.createElement("button");
      button.type = type;
      button.classList.add("button", className);
      button.textContent = buttonText;
      return button;
    });
    __privateAdd(this, _bindEvent2, (listener) => {
      __privateGet(this, _button).addEventListener("click", listener);
    });
    __privateSet(this, _button, __privateGet(this, _createButton2).call(this, type, className, buttonText));
    __privateGet(this, _bindEvent2).call(this, listener);
    return __privateGet(this, _button);
  }
}
_button = new WeakMap();
_createButton2 = new WeakMap();
_bindEvent2 = new WeakMap();
const TAG_MAP = {
  "카테고리": "category",
  "거리(도보 이동 시간)": "distance"
};
class InputDropDown {
  constructor(title, List) {
    __privateAdd(this, _createOption, (value, textContent) => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = textContent;
      return option;
    });
    __privateAdd(this, _createInputDropDown, (title, optionList) => {
      const inputDropDown = document.createElement("div");
      inputDropDown.classList.add("form-item");
      inputDropDown.classList.add("form-item--required");
      const tag = TAG_MAP[title];
      const label = document.createElement("label");
      label.setAttribute("for", tag);
      label.classList.add("text-caption");
      label.textContent = title;
      const select = document.createElement("select");
      select.name = tag;
      select.id = tag;
      select.classList.add("select-input");
      select.required = true;
      const defaultOption = __privateGet(this, _createOption).call(this, "", "선택해주세요");
      select.appendChild(defaultOption);
      optionList.forEach(([value, textContent]) => {
        const option = __privateGet(this, _createOption).call(this, value, textContent);
        select.appendChild(option);
      });
      inputDropDown.appendChild(label);
      inputDropDown.appendChild(select);
      return inputDropDown;
    });
    return __privateGet(this, _createInputDropDown).call(this, title, List);
  }
}
_createOption = new WeakMap();
_createInputDropDown = new WeakMap();
class InputText {
  constructor(title) {
    __privateAdd(this, _createInputFormItem, (title) => {
      if (title === "이름") return __privateGet(this, _createNameFormItem).call(this, title);
      if (title === "설명") return __privateGet(this, _createDescriptionFormItem).call(this, title);
      if (title === "참조 링크") return __privateGet(this, _createLinkFormItem).call(this, title);
    });
    __privateAdd(this, _createNameFormItem, () => {
      const formItem = document.createElement("div");
      formItem.classList.add("form-item");
      formItem.classList.add("form-item--required");
      formItem.appendChild(__privateGet(this, _createLabel).call(this, "name", "이름"));
      formItem.appendChild(__privateGet(this, _createInput).call(this, "name"));
      return formItem;
    });
    __privateAdd(this, _createDescriptionFormItem, () => {
      const formItem = document.createElement("div");
      formItem.classList.add("form-item");
      formItem.appendChild(__privateGet(this, _createLabel).call(this, "description", "설명"));
      formItem.appendChild(__privateGet(this, _createTextarea).call(this));
      formItem.appendChild(__privateGet(this, _createSpan).call(this, "메뉴 등 추가 정보를 입력해 주세요."));
      return formItem;
    });
    __privateAdd(this, _createLinkFormItem, () => {
      const formItem = document.createElement("div");
      formItem.classList.add("form-item");
      formItem.appendChild(__privateGet(this, _createLabel).call(this, "link", "참고 링크"));
      formItem.appendChild(__privateGet(this, _createInput).call(this, "link"));
      formItem.appendChild(__privateGet(this, _createSpan).call(this, "매장 정보를 확인할 수 있는 링크를 입력해 주세요."));
      return formItem;
    });
    __privateAdd(this, _createLabel, (type, title) => {
      const label = document.createElement("label");
      label.setAttribute("for", type);
      label.classList.add("text-caption");
      label.textContent = title;
      return label;
    });
    __privateAdd(this, _createInput, (tag) => {
      const input = document.createElement("input");
      input.type = "text";
      input.name = tag;
      input.id = tag;
      input.required = true;
      return input;
    });
    __privateAdd(this, _createTextarea, () => {
      const textarea = document.createElement("textarea");
      textarea.name = "description";
      textarea.id = "description";
      textarea.cols = 30;
      textarea.rows = 5;
      return textarea;
    });
    __privateAdd(this, _createSpan, (text) => {
      const span = document.createElement("span");
      span.classList.add("help-text");
      span.classList.add("text-caption");
      span.textContent = text;
      return span;
    });
    return __privateGet(this, _createInputFormItem).call(this, title);
  }
}
_createInputFormItem = new WeakMap();
_createNameFormItem = new WeakMap();
_createDescriptionFormItem = new WeakMap();
_createLinkFormItem = new WeakMap();
_createLabel = new WeakMap();
_createInput = new WeakMap();
_createTextarea = new WeakMap();
_createSpan = new WeakMap();
class Modal {
  constructor() {
    __privateAdd(this, _modal);
    __privateAdd(this, _modalContainer);
    __privateAdd(this, _modalBackdrop);
    __privateAdd(this, _createModal, () => {
      const modal = document.createElement("div");
      modal.classList.add("modal", "modal--open");
      modal.classList.toggle("modal--open");
      __privateSet(this, _modalBackdrop, document.createElement("div"));
      __privateGet(this, _modalBackdrop).classList.add("modal-backdrop");
      __privateSet(this, _modalContainer, document.createElement("div"));
      __privateGet(this, _modalContainer).classList.add("modal-container");
      modal.appendChild(__privateGet(this, _modalBackdrop));
      modal.appendChild(__privateGet(this, _modalContainer));
      DOM.APP.appendChild(modal);
      return modal;
    });
    __privateAdd(this, _bindEvents, () => {
      __privateGet(this, _modalBackdrop).addEventListener("click", () => {
        this.handleToggleModal();
      });
      document.addEventListener("keyup", (event) => {
        if (event.key === "Escape" && this.checkModalOpen()) {
          this.handleToggleModal();
        }
      });
    });
    __publicField(this, "addElementToModalContainer", (element) => {
      __privateGet(this, _modalContainer).appendChild(element);
    });
    __publicField(this, "toggleModal", () => {
      __privateGet(this, _modal).classList.toggle("modal--open");
      document.body.style.overflow = __privateGet(this, _modal).classList.contains("modal--open") ? "hidden" : "";
    });
    __publicField(this, "checkModalOpen", () => {
      return __privateGet(this, _modal).classList.contains("modal--open");
    });
    __publicField(this, "handleToggleModal", () => {
      this.toggleModal();
    });
    __privateSet(this, _modal, __privateGet(this, _createModal).call(this));
    __privateGet(this, _bindEvents).call(this);
  }
}
_modal = new WeakMap();
_modalContainer = new WeakMap();
_modalBackdrop = new WeakMap();
_createModal = new WeakMap();
_bindEvents = new WeakMap();
const ERROR_MESSAGES = Object.freeze({
  NOT_SELECTED: (title) => {
    return `${title}이(가) 선택되지 않았어요.`;
  },
  IS_BLANK: "이름이 작성되지 않았어요",
  INVALID_NAME_LENGTH: "가게 이름은 1글자 이상 20글자 이하여야 해요",
  INVALID_DESCRIPTION_LENGTH: "가게 설명은 200자 이내여야 해요",
  INVALID_LINK_FORMAT: "링크는 프로토콜(https:// or http://)이 접두사로 붙어야 해요."
});
const isBlank = (name) => {
  if (!name || name.trim() === "") return true;
};
const validateDropDown = (title, input) => {
  if (isBlank(input)) {
    throw new Error(ERROR_MESSAGES.NOT_SELECTED(title));
  }
};
const isInvalidLength = (name, length) => {
  if (name.length > length) return true;
};
const validateName = (name) => {
  if (isBlank(name)) {
    throw new Error(ERROR_MESSAGES.IS_BLANK);
  }
  if (isInvalidLength(name, 20)) {
    throw new Error(ERROR_MESSAGES.INVALID_NAME_LENGTH);
  }
};
const validateDescription = (description) => {
  if (isInvalidLength(description, 200)) {
    throw new Error(ERROR_MESSAGES.INVALID_DESCRIPTION_LENGTH);
  }
};
const hasNotPrefixProtocol = (input) => {
  if (!input.match(/https?:\/\/[\w\-\.]+/g)) return true;
};
const validateLink = (input) => {
  if (isBlank(input)) return;
  if (hasNotPrefixProtocol(input)) {
    throw new Error(ERROR_MESSAGES.INVALID_LINK_FORMAT);
  }
};
const validateRestaurantData = (restaurantData) => {
  validateDropDown("카테고리", restaurantData.category);
  validateName(restaurantData.name);
  validateDropDown("거리", restaurantData.distance);
  validateDescription(restaurantData.description);
  validateLink(restaurantData.link);
};
const addRestaurant = (restaurantData) => {
  validateRestaurantData(restaurantData);
  const newRestaurant = new Restaurant(
    restaurantData.name,
    restaurantData.distance,
    restaurantData.description,
    restaurantData.category
  );
  RestaurantList.push(newRestaurant);
  return newRestaurant;
};
const CATEGORY_LIST = [
  ["한식", "한식"],
  ["중식", "중식"],
  ["일식", "일식"],
  ["양식", "양식"],
  ["아시안", "아시안"],
  ["기타", "기타"]
];
const DISTANCE_LIST = [
  ["5", "5분 내"],
  ["10", "10분 내"],
  ["15", "15분 내"],
  ["20", "20분 내"],
  ["30", "30분 내"]
];
class AddRestaurantModal extends Modal {
  constructor() {
    super();
    __privateAdd(this, _modalForm);
    __privateAdd(this, _cancelButton);
    __privateAdd(this, _addButton);
    __privateAdd(this, _categoryDropDown);
    __privateAdd(this, _nameInput);
    __privateAdd(this, _distanceDropDown);
    __privateAdd(this, _descriptionInput);
    __privateAdd(this, _linkInput);
    __privateAdd(this, _init, () => {
      __privateSet(this, _cancelButton, new Button("button", "button--secondary", "취소하기", () => __privateGet(this, _handleCancelButton).call(this)));
      __privateSet(this, _addButton, new Button("submit", "button--primary", "추가하기", (event) => __privateGet(this, _handleAddButton).call(this, event)));
      __privateSet(this, _categoryDropDown, new InputDropDown("카테고리", CATEGORY_LIST));
      __privateSet(this, _nameInput, new InputText("이름"));
      __privateSet(this, _distanceDropDown, new InputDropDown("거리(도보 이동 시간)", DISTANCE_LIST));
      __privateSet(this, _descriptionInput, new InputText("설명"));
      __privateSet(this, _linkInput, new InputText("참조 링크"));
      __privateSet(this, _modalForm, document.createElement("form"));
    });
    __privateAdd(this, _createAddModal, () => {
      const modalTitle = document.createElement("h2");
      modalTitle.classList.add("modal-title", "text-title");
      modalTitle.innerText = "새로운 음식점";
      this.addElementToModalContainer(modalTitle);
      __privateSet(this, _modalForm, __privateGet(this, _createModalForm).call(this));
      this.addElementToModalContainer(__privateGet(this, _modalForm));
    });
    __privateAdd(this, _createModalForm, () => {
      const modalForm = document.createElement("form");
      modalForm.appendChild(__privateGet(this, _createModalFormScrollable).call(this));
      modalForm.appendChild(__privateGet(this, _createButtonContainer).call(this));
      return modalForm;
    });
    __privateAdd(this, _createModalFormScrollable, () => {
      const modalFormScrollable = document.createElement("div");
      modalFormScrollable.classList.add("modal-form-scrollable");
      modalFormScrollable.appendChild(__privateGet(this, _categoryDropDown));
      modalFormScrollable.appendChild(__privateGet(this, _nameInput));
      modalFormScrollable.appendChild(__privateGet(this, _distanceDropDown));
      modalFormScrollable.appendChild(__privateGet(this, _descriptionInput));
      modalFormScrollable.appendChild(__privateGet(this, _linkInput));
      return modalFormScrollable;
    });
    __privateAdd(this, _createButtonContainer, () => {
      const buttonContainer = document.createElement("div");
      buttonContainer.classList.add("button-container");
      buttonContainer.appendChild(__privateGet(this, _cancelButton));
      buttonContainer.appendChild(__privateGet(this, _addButton));
      return buttonContainer;
    });
    __privateAdd(this, _handleAddButton, (event) => {
      event.preventDefault();
      __privateGet(this, _handleAddRestaurant).call(this);
      this.handleToggleModal();
    });
    __privateAdd(this, _handleCancelButton, () => {
      this.handleToggleModal();
    });
    __privateAdd(this, _handleAddRestaurant, () => {
      const formData = Object.fromEntries(new FormData(__privateGet(this, _modalForm)));
      try {
        const newRestaurant = addRestaurant(formData);
        const newRestaurantItem = new RestaurantItem(newRestaurant);
        DOM.RESTAURANT_LIST.appendChild(newRestaurantItem);
      } catch (error) {
        alert(error.message);
      }
    });
    __publicField(this, "handleToggleModal", () => {
      this.toggleModal();
      __privateGet(this, _modalForm).reset();
    });
    __privateGet(this, _init).call(this);
    __privateGet(this, _createAddModal).call(this);
  }
}
_modalForm = new WeakMap();
_cancelButton = new WeakMap();
_addButton = new WeakMap();
_categoryDropDown = new WeakMap();
_nameInput = new WeakMap();
_distanceDropDown = new WeakMap();
_descriptionInput = new WeakMap();
_linkInput = new WeakMap();
_init = new WeakMap();
_createAddModal = new WeakMap();
_createModalForm = new WeakMap();
_createModalFormScrollable = new WeakMap();
_createButtonContainer = new WeakMap();
_handleAddButton = new WeakMap();
_handleCancelButton = new WeakMap();
_handleAddRestaurant = new WeakMap();
const addRestaurantModal = new AddRestaurantModal();
new Header(() => addRestaurantModal.handleToggleModal());
const createRestaurantList = (restaurantList) => {
  restaurantList.forEach((restaurant) => {
    const restaurantItem = new RestaurantItem(restaurant);
    DOM.RESTAURANT_LIST.appendChild(restaurantItem);
  });
};
createRestaurantList(RestaurantList);
