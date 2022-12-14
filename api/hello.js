const fs = require('fs');
const path = require('path');

function sayHello(req, res) {
    const dir = path.resolve('./public', 'img');
    const filenames = fs.readdirSync(dir);
    const images = filenames.map(name => path.join('/', 'img', name));
    // res.json(images);

    res.status(200).json({
        message: Buffer.from(req.query.sampleText).toString('base64')
    })
}

module.exports = {
	default: (req, res) => sayHello(req, res),
    get: (req, res) => sayHello(req, res),
}
