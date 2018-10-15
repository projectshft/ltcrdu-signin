var isEmail = function (email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

// $('#learn-more').click(function () {
//   $('#learn-more').attr('checked', 'checked')
// });

$('.form').submit(function (e) {
  e.preventDefault();

  var email = $('#email').val();
  var name = $('#name').val();
  var company = $('#company').val();
  // var firstName = $('#first-name').val();
  // var lastName = $('#last-name').val();

  var fullFields = function () {
    return name + company;
  };

  var submitForm = function () {
    // process the form ONLY to trigger autopilotHQ
    $.ajax({
      type: 'POST',
      url: '',
      dataType: 'json',
    }).done(function(data) {
      $('.form').hide();
      $('.thanks').show();

      setTimeout(function () {
        $('.form').show();
        $('.thanks').hide();
      }, 2000);
    }).fail(function() {
      $('#email').val('');
      $('#name').val('');
      $('#company').val('');
      // $('#first-name').val('');
      // $('#last-name').val('');
      // $('#learn-more').prop('checked', false);

      $('.form').hide();
      $('.thanks').show();

      setTimeout(function () {
        $('.form').show();
        $('.thanks').hide();
      }, 2000);
    })
  }

  if (isEmail(email) && fullFields()) {
    $('#app-name-email-error').hide();
    $('#app-general-error').hide();
    // process the form ONLY to trigger autopilotHQ
    submitForm();
    $('#loading').show();
    $('#app-1').hide();
  } else if (isEmail(email) && !fullFields()) {
    $('#app-name-email-error').hide();
    $('#app-general-error').hide();
    $('#app-general-error').show();
  } else if (!isEmail(email) && fullFields()) {
    $('#app-name-email-error').hide();
    $('#app-general-error').hide();
    $('#app-name-email-error').show();
  } else {
    $('#app-name-email-error').show();
    $('#app-general-error').show();
  }
});
