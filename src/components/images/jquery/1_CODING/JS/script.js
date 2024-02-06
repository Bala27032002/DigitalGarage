/* SHOW SKILLS */
$(document).on('click', '.skill_set', function(event) {
	event.preventDefault();
	$('.skill_set').removeClass('show_skills');
	$(this).addClass('show_skills');
});
/* QUALIFICATION TABS */
$('.education_tab').click(function(event) {
	$(this).addClass('active');
	$('.work_tab').removeClass('active');
	$('.education').show();
	$('.work').hide();
});
$('.work_tab').click(function(event) {
	$(this).addClass('active');
	$('.education_tab').removeClass('active');
	$('.work').show();
	$('.education').hide();
});
// ISOTOPE PLUGIN
$('.work_items').isotope({
	itemSelector: '.item',
	layoutMode: 'fitRows'
})
$('.work_tabs li').click(function(event) {
	/* Act on the event */
	$('.work_tabs li').removeClass('active');
	$(this).addClass('active');

	var selector = $(this).attr('data-filter');

	$('.work_items').isotope({
		filter : selector
	});
	return false;
});
/* OWL CAROUSEL */
$('.owl-carousel').owlCarousel({
    stagePadding:5,
    loop:false,
    margin:30,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        468:{
            items:1
        },
        768:{
            items:2
        },
        992:{
        	items:3
        },
        1000:{
        	items:3
        }
    }
})
// STICKEY NAVBAR
$(document).scroll(function(event) {
	/* Act on the event */
	if ($(document).scrollTop() > 200) { // document scroll is > 200
		$('.Navbar_Portion').addClass('stickey_nav');
	}else if($(document).scrollTop() < 200){
		$('.Navbar_Portion').removeClass('stickey_nav');
	}
});
// SCROLL TO TOP
$(document).scroll(function(event) {
	/* Act on the event */
	if ($(document).scrollTop() > 500) {
		$('.scroll_to_top').fadeIn(400);
	}else if ($(document).scrollTop() < 500) {
		$('.scroll_to_top').fadeOut(400);
	}
});
$('.scroll_to_top').click(function(event) {
	/* Act on the event */
	$(document).scrollTop(0);
});
// THEME CHANGER
$('.theme_shades span').click(function(event) {
	/* Act on the event */
	var themeColor = $(this).attr('data-color-code');
	$('html').css('--theme_color', themeColor);
	$('.theme_shades span').css('border', 'none');
	$(this).css('border', '2px solid var(--black_color)');
});
//MODE CHANGER
$('.dark_mode').click(function(event) {
	/* Act on the event */
	$('body').addClass('Dark_Mode');
	$('.dark_mode img').css('border', '2px solid #FFF');
	$('.light_mode img').css('border', 'none');
});
$('.light_mode').click(function(event) {
	/* Act on the event */
	$('body').removeClass('Dark_Mode');
	$('.light_mode img').css('border', '2px solid #000');
	$('.dark_mode img').css('border', 'none');
});
if ($(window).width() <= 992) {
	$('div').removeAttr('data-aos');
}










// GOOGLE TRANSLATE
function googleTranslateElementInit() {
  new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
}
// google translate end


// widget
!function (d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (!d.getElementById(id)) { js = d.createElement(s); js.id = id; js.src = 'https://weatherwidget.io/js/widget.min.js'; fjs.parentNode.insertBefore(js, fjs); } }(document, 'script', 'weatherwidget-io-js');
// widget end




			



// javascript validation contact form


  const form = document.getElementById('contactForm');

  form.addEventListener('submit', function (event) {
    // Prevent form submission
    event.preventDefault();

    // Clear previous errors
    clearErrors();

    // Validate inputs
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    let isValid = true;

    if (nameInput.value.trim() === '') {
      displayError('nameError', 'Name is required.');
      isValid = false;
    }
    else if (!isTextOnly(nameInput.value.trim())) {
      displayError('nameError', 'Please enter a valid name with alphabets only.');
      isValid = false;
    }

    if (!isValidEmail(emailInput.value)) {
      displayError('emailError', 'Please enter a valid email.');
      isValid = false;
    }

    if (messageInput.value.trim() === '') {
      displayError('messageError', 'Message is required.');
      isValid = false;
    }

    // Submit the form if valid
    if (isValid) {
      form.submit();
    }
  });
  function isTextOnly(input) {
    const textPattern = /^[A-Za-z\s]+$/;
    return textPattern.test(input);
  }

  function isValidEmail(email) {
    // A simple email validation pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  function displayError(id, errorMessage) {
    const errorElement = document.getElementById(id);
    errorElement.textContent = errorMessage;
  }

  function clearErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(function(errorElement) {
      errorElement.textContent = '';
    });
  }



  // function isValidEmail(email) {
  //   // A simple email validation pattern
  //   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return emailPattern.test(email);
  // }

  // function displayError(id, errorMessage) {
  //   const errorElement = document.getElementById(id);
  //   errorElement.textContent = errorMessage;
  // }

  // function clearErrors() {
  //   const errorElements = document.querySelectorAll('.error');
  //   errorElements.forEach(function (errorElement) {
  //     errorElement.textContent = '';
  //   });
  // }
// javascript validation contact form end




// JQUERY VALIDATION  
$(document).ready(function() {
  // Form submission event
  $('#feedbackForm').submit(function(e) {
      e.preventDefault();
      sendValidMessage();
  }); 

  // Reset form event
  $('#reset').click(function() {
      resetForm();
  });

  // Add your JavaScript code here
  function sendValidMessage() {
      // Validate form inputs
      if (isInputEmpty() || !validUserName() || !validUserEmail() || !validTextMessage()) {
          $('#alertSend').html('Please fill in all the required fields correctly.');
          $('#alertSend').css({ 'display': 'block', 'color': 'red' });
      } else {
          $('#alertSend').html('The message was sent successfully');
          $('#alertSend').css({ 'display': 'block', 'color': 'green' });
          resetForm();
          // Perform form submission here
          // Example: $('#feedbackForm').submit();
      }
  }

  function isInputEmpty() {
      return $('#name').val() === '' || $('#email').val() === '' || $('#message').val() === '';
  }

  function validUserName() {
      let regexName = /^[A-Z][a-z- ]{2,8}$/;
      if (regexName.test($('#name').val())) {
          $('#name').addClass('is-valid');
          $('#name').removeClass('is-invalid');
          $('#alertName').css('display', 'none');
          return true;
      } else {
          $('#name').addClass('is-invalid');
          $('#name').removeClass('is-valid');
          $('#alertName').css('display', 'block');
          return false;
      }
  }

  function validUserEmail() {
      let regexEmail = /^[A-Za-z \._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
      if (regexEmail.test($('#email').val())) {
          $('#email').addClass('is-valid');
          $('#email').removeClass('is-invalid');
          $('#alertEmail').css('display', 'none');
          return true;
      } else {
          $('#email').addClass('is-invalid');
          $('#email').removeClass('is-valid');
          $('#alertEmail').css('display', 'block');
          return false;
      }
  }

  function validTextMessage() {
      let regexMsg = /^[a-zA-Z0-9- ]{1,150}$/;
      if (regexMsg.test($('#message').val())) {
          $('#message').addClass('is-valid');
          $('#message').removeClass('is-invalid');
          $('#alertMessage').css('display', 'none');
          return true;
      } else {
          $('#message').addClass('is-invalid');
          $('#message').removeClass('is-va+lid');
          $('#alertMessage').css('display', 'block');
          return false;
      }
  }

  function resetForm() {
      $('#name').val('');
      $('#email').val('');
      $('#message').val('');
      $('.form-control').removeClass('is-valid is-invalid');
      $('#alertName').css('display', 'none');
      $('#alertEmail').css('display', 'none');
      $('#alertMessage').css('display', 'none');
      $('#counter').text('150');
  }

  $('#message').on('input', function() {
      var messageLength = $(this).val().length;
      var remainingCharacters = 150- messageLength;
      // $('#counter').text(remainingCharacters);
  });
});
