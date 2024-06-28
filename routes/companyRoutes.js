const express = require('express');
const companyRouter = express.Router();
const companyController = require('../controllers/comapnyController');
const auth = require('../middleware/auth')

// define the route for adding a company
//protected routes
companyRouter.post('/users/:userId/companies', auth.verifyToken, companyController.addCompany);

// public routes
companyRouter.get('/companies', companyController.getAllCompanies);

module.exports = companyRouter;