var request = require('request');
const snoowrap = require('snoowrap');


//Reddit
/*
const r = new snoowrap({
  userAgent: 'g3fz274MMg_VoQ',
  clientId: 'g3fz274MMg_VoQ',
  clientSecret: 'g61KMb6BEtfVt9lEN_mazuwLbh0',
  refreshToken:
});
*/
//Eventful
const oauth_info = {
  oauth_consumer_key:'71ccc7bf77f1c0dd5d4c',
  oauth_signature_method:'HMAC-SHA1',
  oauth_timestamp:1525623718,
  oauth_nonce:'nJVX3rjQ9mCshGH4',
  oauth_version:'1.0',
  oauth_signature:'1iG9OzW4G4igITZQqbHdlGnafsg=',
  oauth_callback:'oob'
}

request.post({
  url:"http://eventful.com/json/oauth/request_token",
  form: oauth_info
  },
  function(err,httpResponse, body){
    if(err){
      console.log(err);
    } else {
      var resolved_oauth_token = JSON.parse(body).oauth_token;
      var resolved_oauth_secret = JSON.parse(body).oauth_token_secret;
      console.log(resolved_oauth_token);
      console.log(resolved_oauth_secret);
      request.get({
        url:"http://eventful.com/oauth/authorize",
        form:{
          oauth_token:resolved_oauth_token,
          oauth_token_secret:resolved_oauth_secret
        }},
        function(err, response, body){
          if(err){
            console.log(err);
          } else {
            console.log('http://eventful.com/oauth/authorize?oauth_token='+resolved_oauth_token);
            /*request.post({
              url:"http://api.eventful.com/rest/events/new",
              form:{
                app_key:'nJVX3rjQ9mCshGH4',
                oauth_consumer_key:'71ccc7bf77f1c0dd5d4c',
                oauth_nonce:'nJVX3rjQ9mCshGH4',
                oauth_signature:'1iG9OzW4G4igITZQqbHdlGnafsg=',
                oauth_signature_method:'HMAC-SHA1',
                oauth_timestamp:1525623718,
                oauth_token:resolved_oauth_token,
                oauth_token_secret:resolved_oauth_secret,
                oauth_version:'1.0',
                title:"Concert+In+The+Park",
                start_time:'2018-07-04+17:00:00',
              }
            },
            function(err, response, body){
              if(err){
                console.log(err);
              } else {
                console.log(body);
              }
            }
          )*/
            //console.log(body);
          }
        });
      }

      });
