const router = require('express').Router()
const request = require('request')


const ZOOPLA_API_KEY = "eb2ynecgt2ty2eremkb5vsxq";



router.get('/zoopla', (req, res) => {
    // http://api.zoopla.co.uk/api/v1/property_listings.xml?area=Oxford&api_key=eb2ynecgt2ty2eremkb5vsxq

    var url = "http://api.zoopla.co.uk/api/v1/property_listings.xml?";

    url += "api_key=" + ZOOPLA_API_KEY;
    url += "area=Oxford";

    request.get(url, (error, response, body) => {
        if(error) {
            console.dir(error);
        }
        console.dir(body);
    });

    res.status(200);

});


router.get('/portfolio', (req, res) => {
    return res.status(200).send([
            {
                img: '/something/random/img.jpg',
                caption: 'Explore',
                title: 'Graphic Design'
            },
            {
                img: '/something/random/img.jpg',
                caption: 'Finish',
                title: 'Identify'
            },
            {
                img: '/something/random/img.jpg',
                caption: 'Lines',
                title: 'Branding'
            },
            {
                img: '/something/random/img.jpg',
                caption: 'Southwest',
                title: 'Website Design'
            },
            {
                img: '/something/random/img.jpg',
                caption: 'Window',
                title: 'Photography'
            },
            {
                img: '/something/random/img.jpg',
                caption: 'Coffee',
                title: 'Drink a Lot!' 
            },
            {
                img: '/something/random/img.jpg',
                caption: 'Pizza',
                title: 'I Ate some Pizza!'
            }
        ])
})

module.exports = router