const nextRoutes = require('next-routes');
const routes = (module.exports = nextRoutes());

routes.add('index', '/');
routes.add('forgot-password', '/forgot');
routes.add('company');
routes.add('role');
routes.add('blacklist');
routes.add('company/[id]', '/company/:id');
routes.add('knowledge');
routes.add('ticket');
routes.add('posting');
routes.add('report');
routes.add('profile');
routes.add('smsblast');
