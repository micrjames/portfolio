import { projects, toggleBtn, btnStates } from "./incs.js";
import { removeChildren, setBtnState } from "./utils.js";

setBtnState(toggleBtn, btnStates[0]);
toggleBtn.addEventListener("click", () => { 
   for(const child of projects.children) {
	   if(child.classList.contains("hidden")) {
		   child.classList.remove("hidden"); 
		   removeChildren(toggleBtn);
		   setBtnState(toggleBtn, btnStates[1]);
	   } else {
		   if(child.classList.contains("marked")) {
			  child.classList.add("hidden");
			  removeChildren(toggleBtn);
			  setBtnState(toggleBtn, btnStates[0]);
		   }
	   }
   }
});

