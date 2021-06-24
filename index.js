var AWS = require('aws-sdk');
AWS.config.update({region: 'ap-northeast-1'});

var ses = new AWS.SES();

exports.handler = async function (event) {
    
  var params = {
    Destination: {
      ToAddresses: [ 'test@example.com' ]
    },
    Message: {
      Body: {
        Text: {
          Data: 'これはテストメールです。',
          Charset: 'utf-8'
        }
      },
      Subject: {
        Data: 'テストメール',
        Charset: 'utf-8'
      }
    },
    Source: 'no_reply@example.com' // From
  };

 
  return ses.sendEmail(params).promise()
};
