var app = require('./app');

function sampleNodeBackend(req,res) {
    if (!req.url) {
        req.url = '/';
        req.path = '/';
    }
    return app(req,res);
}

function samplePubSub(event, context) {
  const pubsubMessage = event.data;
  console.log(Buffer.from(pubsubMessage, 'base64').toString());
  console.log(event);
  console.log(context);

};


module.exports = {
    sampleNodeBackend,
    samplePubSub
};