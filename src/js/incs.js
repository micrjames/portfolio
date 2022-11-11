import { createSpan } from "./utils.js";

const body = document.body;
const main = body.children.namedItem("main");
 
const projectsContainer = main.children.namedItem("projects-container");
const projects = projectsContainer.children.namedItem("projects");
const toggleBtn = projectsContainer.children.namedItem("btn");

const showSpan = createSpan("Show All");
const unshowSpan = createSpan("Show Fewer");
const btnStates = [                                                                                     
    { show: true, whichSpan: showSpan },                                       
    { show: false, whichSpan: unshowSpan }                                     
]; 

const contactContainer = main.children.namedItem("contact-container");

const contactInfoItems = contactContainer.children.namedItem("contact-info-items");
const contactEmail = contactInfoItems.children.namedItem("contact-info-email");

export { projects, toggleBtn, btnStates, contactContainer, contactEmail };
