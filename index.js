var app = require('./app');

function sampleNodeBackend(req,res) {
    if (!req.url) {
        req.url = '/';
        req.path = '/';

    }
    return app(req,res);
}

samplePubSub = (event, context) => {
  const pubsubMessage = event.data;

  const runMiddleware = require('run-middleware');
  runMiddleware(app);
  
  var givenMethod = pubsubMessage.method || 'get';
  var givenQuery = pubsubMessage.query || {token: 'sample'};
  var givenURL = pubsubMessage.url || '/api/portfolio';

  try {
    app.runMiddleware(givenURL, {
      method: givenMethod,
      //@todo query parser
      query: givenQuery,
      body: {
        "action": "list",
        "path": "/"
      }
    }, (code, data) => {
      if (code == 200)
      {
        console.log('Successfully processed request; ' + JSON.stringify(data));
      } else {
        new Error("Error processing request " + code);
      }
    });

  } catch(e) {
    new Error("Error whilst running middleware  " + e);
  }



  // console.log(Buffer.from(pubsubMessage, 'base64').toString());
  console.log(JSON.stringify(event));
  console.log(JSON.stringify(context));

};


module.exports = {
    sampleNodeBackend,
    samplePubSub
};