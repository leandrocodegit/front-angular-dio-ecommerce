 
var jsonPayload
 
function parseJwt (token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join('')); 
  return JSON.parse(jsonPayload);
};

function handleCredentialResponse(response) {
  console.log(parseJwt(response.credential))
}

function getPayLoad(){
  console.log(jsonPayload)
  if(typeof jsonPayload == undefined)
  return null
  return jsonPayload
}

function continueWithNextIdp(notification) {
  console.log('Notfication ' + notification)
  if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
      console.log('Notfication ' + notification)
  }
}

window.fbAsyncInit = function() {
  FB.init({
    appId      : '322371943411039',
    cookie     : true,
    xfbml      : true,
    version    : 'v14.0'
  });
    
  FB.AppEvents.logPageView();   
    
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "https://connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));

 FB.getLoginStatus(function(response) {
  statusChangeCallback(response);
});

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

 