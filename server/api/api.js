const api = express.Router();
const gitController = require('../controllers/git');
const userController=require('../controllers/users');
const weatherController=require('../controllers/weather')



api.use('/user',userController);
api.use('/git',gitController);
api.use('/weather',weatherController);
module.exports = api;
