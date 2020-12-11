const { Router } = require('express');
const router = Router();

router.get('/users', (req, res) => res.json({message: 'hello dude, this is an get '}));

module.exports = router;