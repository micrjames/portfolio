const body = document.body;                                                                 
const main = body.children.namedItem("main");
const contactContainer = main.children.namedItem("contact-container");
const modalEl = contactContainer.children.namedItem("modal"); 
const contactInfoItems = contactContainer.children.namedItem("contact-info-items");
const contactInfoEmail = contactInfoItems.children.namedItem("contact-info-email");
const contactInfoEmailMessage = contactInfoEmail.children[1];
