requirejs(['js/modal.min.js', 'js/form.min.js', 'js/incs.js'], function() {
   const modal = new Modal(modalEl);
   contactInfoEmailMessage.addEventListener("click", () => {
	  modal.open();

	  const form = new Form(modal.body.children[0], data => {
		  console.log(data);
	  });
   });
});
