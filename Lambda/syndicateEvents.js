const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});

function pushToEventful(eventData){
  /*
  Assuming an oauth authentication is already setup on the posting account


  */
}
function pushToReddit(eventData){

}
function pushToMeeteup(eventData){

}
function pushToEventbrite(eventData){

}
function pushToNY(eventData){

}

exports.handler = (event, context, callback) => {

  let scanningParameters = {
    TableName: 'syndicatedEvents',
    Limit: 100
  }

   docClient.scan(scanningParameters, function(err, data){
    if(err){
      callback(err, null);
    }
    else{
      callback(null, data);
      /*TODO: Add code to format json and post to websites
      pushToEventful(data);
      pushToReddit(data);
      pushToMeetup(data);
      pushtoEventbrite(data);
      pushToNY(data);
      */

    }
  })
}
