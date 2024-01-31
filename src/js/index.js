requirejs(['js/modal.min.js', 'js/incs.js'], function() {
   const modal = new Modal(modalEl);
   contactInfoEmailMessage.addEventListener("click", () => {
	  modal.open();
   });
});
