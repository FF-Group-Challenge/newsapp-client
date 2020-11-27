function landing () {
    //show login form
    $('#landing').show()
    $('#formlogin').show(0,_=> {
        $('#slog')
        .on('click', _=> {
            $('#formregister').show();
            $('#formlogin').hide()
      })
    })

//show register form
 $('#formregister').hide(0,_=> {
      $('#sreg')
      .on('click', _=> {
            $('#formregister').hide();
            $('#formlogin').show()
      })
  });

//register user
$('#formregister').on('submit', e => {
    $('#errorlog').empty()
    e.preventDefault()
    const data = {
                    name: $('#namereg').val(),
                    email: $('#emailreg').val(),
                    password: $('#passwordreg').val()
                }
    
    $.ajax({
        method: "POST",
        url: "http://localhost:3000/register",
        data: data
        })
        .done (msg => {
            localStorage.setItem('access_token', msg.access_token)
            homepage()
        })
        .fail((xhr, textStatus) => {
            console.log(xhr)
            $('#errorlog').append(`<small id="errmes" class="form-text text-danger mb-2 ml-1">${xhr.responseJSON.message}</small>`)
        })
        .always(_=> {
            $('#namereg').val('')
            $('#emailreg').val('')
            $('#passwordreg').val('')
        })
});

//login user
$('#formlogin').on('submit', e => {
    e.preventDefault()
    const data = {
                    email: $('#emaillog').val(),
                    password: $('#passwordlog').val()
                }

    $.ajax({
        method: "POST",
        url: "http://localhost:3000/login",
        data: data
        })
        .done (msg => {
            localStorage.setItem('access_token', msg.access_token)
            homepage()
        })
        .fail((xhr, textStatus) => {
            $('#error-log').append(`<small id="errmes" class="form-text text-danger mb-2 ml-1">${xhr.responseJSON.message}</small>`)
            console.log(xhr.responseJSON.message)
        })
        .always(_=> {
            $('#emaillog').val('')
            $('#passwordlog').val('')
        })
});

//hide another page
$('#homepage').hide()

}


function onSignIn(googleUser) {
    const googleToken = googleUser.getAuthResponse().id_token;

    $.ajax({
        method: "POST",
        url: "http://localhost:3000/google-login",
        data: {
            googleToken
        }
        })
        .done (msg => {
            console.log(msg)
            localStorage.setItem('access_token', msg.access_token)
            homepage()
        })
        .fail((xhr, textStatus) => {
            const errorLog = xhr
                                .responseJSON
                                .errors
                                .map(el => el.message)
                               
            errorLog.forEach( el => {
                $('#errorlog').append(
                    `<small id="errmes" class="form-text text-danger">${el}</small>`
                )                    
            })                   
            // alert(errorLog)
            console.log(xhr
                .responseJSON
                .errors[0]
                .message)
        })
        .always(_=> {
            $('#namereg').val('')
            $('#emailreg').val('')
            $('#passwordreg').val('')
        })
}


function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }