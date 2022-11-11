import { contactContainer } from "./incs.js";

const modal = contactContainer.children.namedItem("modal");
const modalHdr = modal.children.namedItem("modal-header");
const modalCloseBtn = modalHdr.children.namedItem("modal-header-close");

const closeModal = function() {                                                                         
    modal.classList.add("hidden");
};
const openModal = function() {
    modal.classList.remove("hidden");
};

export { modalCloseBtn, closeModal, openModal };  
