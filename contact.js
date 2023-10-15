$(document).ready(function() {
  
	// validaing using jQuery validation
	$('#contact_form').validate({
	  rules: {

		fName: {
			required: true
		  },

		  lName: {
			required: true
		  },

		  DOB: {
			required: true,
			date: true
		  },

		phone: {
			required: true,
			phoneUS: true
		  },

		  email: {
		  required: true,
		  email: true
		}

	  },
	  messages: {
		DOB: {
		  required: 'Please enter date of birth .',
		  date: 'Please enter a valid date in the format YYYY-MM-DD.'
		},
	
		// name message
		fName: {
		  required: 'Please enter first name.'
		},

		lName: {
			required: 'Please enter last name.'
		  },
		// email message
		email: {
		  required: 'Please enter email',
		  email: 'Please enter valid email address.'
		},
		phone: {
		  required: 'Please enter phone number.',
		  phoneUS: 'Please enter a valid phone number '
		}
	  }
	});
  });