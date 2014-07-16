$(document).ready(function(){

    var selectedOS = 'iPhone'

    if ($.cookie('ref') == undefined && getParameterByName('ref') != '')
      $.cookie('ref', getParameterByName('ref'));

    if($.cookie('id') != undefined){
      $('body').attr('data-step', '2');
      setTimeout(function(){
          $('#email-input').focus()
      }, 1000)
      showRefLinks($.cookie('id'));

    }

    // Move to Step 2
    $('#list-button').click(function(){
        $('body').attr('data-step', '2');

        if(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone|iPad|iPod/i)){
            $('.button-frame').remove();
            selectedOS = checkClient();
        }

        setTimeout(function(){
            $('#email-input').focus()
        }, 1000)
    })

    // Email Checker
    function validateEmail(emailAddress) {
        var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
        return pattern.test(emailAddress);
    };

    // Check Client
    function checkClient(){
        if(navigator.userAgent.match(/Android/i)) _client = 'Android';
        if(navigator.userAgent.match(/iPhone|iPad|iPod/i)) _client = 'iPhone';

        return _client
    }

    // Submit Form
  /*  function submitEmail(){
        var email = $('#email-input').val(),
            //os = checkClient()
            os = selectedOS

        if (email != "" && validateEmail(email)){
            console.log('Valid email!')
            // update user interface
            $('#submit-button').html('Adding...');
            $('.email-form').removeClass('invalid')
            $('.email-form').blur();

            // Prepare query string and send AJAX request
            $.ajax({
              url: 'https://api.acorns.com/v1/user/subscribe',
              type: 'POST',
              dataType: 'json',
              data: 'email=' + encodeURIComponent(email)+'&os='+os+($.cookie('ref') != undefined ? '&referrer=' + $.cookie('ref') : '')+(document.referrer != '' ? '&url=' + encodeURIComponent(document.referrer) : ''),
              success: function(msg) {
                // ensures the optimizely object is defined globally using
                window['optimizely'] = window['optimizely'] || [];

                // sends a tracking call to Optimizely for the given event name.
                window.optimizely.push(["trackEvent", "registered"]);

                console.log(msg);
                var _id;

                if(msg.id !== undefined) {
                  // Email already Exists
                  _id = msg.id
                } else {
                  // Created a new email
                  _id = msg.new_id
                }
                $.cookie('id', _id);
                showRefLinks(_id);
              }
            });

          } else {
            console.log('Error: Invalid')
            $('.email-form').addClass('invalid')
          };
    }
    $('#emailForm').submit(function(e){
        submitEmail();
        e.preventDefault();
    })


    // Submit
    $('#submit-button').click(function(){
        submitEmail();
    })
    $('.select').click(function(e){
        e.preventDefault();
        var device = $(this).attr('data-device')

        $('.select').removeClass('selected')
        $(this).addClass('selected')
        selectedOS = device
    })

*/
    $('.transaction').addClass('counting')
    var transaction = 0,
    currentValue = 0;

    function setTransaction(){
        transaction = Math.random();
        $('.transaction').html(transaction.toFixed(2));
    }
    setTransaction()

    setInterval(function(){
        currentValue = currentValue+transaction
        $('.currentValue').html(currentValue.toFixed(2))
        setTransaction()
    }, 2000)

    function showRefLinks(_id){
      $('#refcode').val('acorns.com/?ref='+_id);
      $('.facebook a').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Facorns.com%2F%3Fref%3D'+_id)
      $('.twitter a').attr('href', 'http://twitter.com/share?text=I%20just%20signed%20up%20with%20%40acorns%20to%20save%20and%20invest%20my%20loose%20change!%20Signup%20today%20and%20%23GetInvested%20at&url=http%3A%2F%2Facorns.com%2F%3Fref%3D'+_id)
      $('.tumblr a').attr('href', 'http://www.tumblr.com/share?s=&t=I just signed up for Acorns&u=&v=3&u=http%3A%2F%2Facorns.com%2F%3Fref%3D'+_id)
      $('.linkedin a').attr('href', 'http://www.linkedin.com/shareArticle?mini=true&url=http%3A%2F%2Facorns.com%2F%3Fref%3D'+_id)


      // Move to Step 3
      $('body').attr('data-step', '3');
    }

})

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}