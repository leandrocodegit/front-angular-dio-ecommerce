
var jsonPayload = null
var facebook

// Login google

function parseJwt(token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
  return JSON.parse(jsonPayload);
};
 
function handleCredentialResponse(response) {
  console.log('Parse credential' + parseJwt(response.credential))
}

function getPayLoad() {
  console.log('Payload ' +  JSON.stringify(jsonPayload))
  if (jsonPayload == null) {
    initFacebook()
    FB.getLoginStatus(function (response) {
      console.log('Checando status facebook')
      if (response && response.status === 'connected') {
        FB.api('/me?fields=id,name,email,picture', function (response) {
          jsonPayload = JSON.stringify(response)
          console.log('Facebook: ' + JSON.stringify(jsonPayload));
        }); 
      }
    });
  }
  return jsonPayload
}

function continueWithNextIdp(notification) {
  console.log('Notfication ' + notification)
  if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
    console.log('Notfication ' + notification)
  }
}

// Login facebook


function logout() {

  console.log('Logout init')


  FB.getLoginStatus(function (response) {
    if (response && response.status === 'connected') {
      FB.logout(function (response) {
        console.log('Logout ' + response)
      });
    }
  });
  console.log('Logout finish')
}

function initFacebook() {
   
  //  $("#box").load();
 
  FB.init({
    appId: '322371943411039',
    version: 'v14.0'
  });
}

function checkLoginState() {
  FB.getLoginStatus(function (response) {
    statusChangeCallback(response);
  });
}

function login() {
  FB.login(function (response) {
    console.log('Log ' + JSON.stringify(response));
  }, {
    scope: 'public_profile',
    return_scopes: true
  });
}






