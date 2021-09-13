//route for all provider related endpoints/ activities
import express, { response } from 'express';
import providerModel from '../models/providers';
import providerList from '../utils/providers.json';
var allProviders = providerList.providers
var router = express.Router();


//Route to create demo providers
/**
 * @swagger
 * /v1/api/create-demo-providers:
 *  post:
 *    summary: Create demo providers
 *    description: Endpoint to create some demo providers
 *    tags:
 *      - Providers
 *    responses:
 *      '200':
 *        description: Providers submitted successfully
 *      '401': 
 *        description: Unable to submit providers
 */
router.post('/create-demo-providers', (req, res) => {
    class Providers {
        constructor(providers) {
            this.providers = providers
        }
        saveProviders() {
            this.providers.forEach(item => {
                var {id, name} = item
                var createProvider = new providerModel({
                    id: id,
                    name: name
                })
                createProvider.save()
                .then(() => {
                    res.status(200).json('Providers submitted successfully')
                })
                .catch((err) => {
                    res.status(401).json('Unable to submit providers' + err)
                })
            });
        }
    }

    var saveproviderToDatabase = function () {
        new Providers(allProviders).saveProviders()
    }
    saveproviderToDatabase();
})


//Route to create a new provider
/**
 * @swagger
 * /v1/api/create-provider:
 *  post:
 *    summary: Create a new provider
 *    description: Endpoint to create a new provider
 *    tags:
 *      - Providers
 *    responses:
 *      '200':
 *        description: Provider created successfully
 *      '401': 
 *        description: Unable to create provider
 */
router.post('/create-provider', (req, res) => {
    var {providerName} = req.body
    providerModel.findOne({}).sort({'_id':-1}).limit(1)
    .then((response) => {
        if (response == null) {
            var createProvider = new providerModel({
                id: 1,
                name: providerName
            })
            createProvider.save()
            .then(() => {
                res.status(200).json('Provider created successfully')
            })
            .catch((err) => {
                res.status(401).json('Unable to create provider' + err)
            }) 
        } else {
            var newId = response.id + 1
            var createProvider = new providerModel({
                id: newId,
                name: providerName
            })
            createProvider.save()
            .then(() => {
                res.status(200).json('Provider created successfully')
            })
            .catch((err) => {
                res.status(401).json('Unable to create provider' + err)
            })
        }
    })
    .catch((err) => {
        console.log(err)
    })
})


//Route to fetch all providers
/**
 * @swagger
 * /v1/api/get-providers:
 *  get:
 *    summary: Get List of Providers
 *    description: Endpoint to get list of providers
 *    tags:
 *      - Providers
 *    responses:
 *      '200':
 *        description: Providers details fetched
 *      '401': 
 *        description: Unable to fetch providers
 */
router.get('/get-providers', (req,res) => {
    try {
        providerModel.find({})
        .then((response) => {
            res.status(201).json({
                message: 'Providers details fetched',
                response
            })
        })
        .catch((err) => {
            res.status(401).json(err)
        })
    } catch (error) {
       res.status(401).json(error) 
    }
})



//Route to get a provider 
/**
 * @swagger
 * /v1/api/get-provider/{id}:
 *  get:
 *    summary: Get a Provider
 *    description: Endpoint to get a provider using the provider id
 *    tags:
 *      - Providers
 *    parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the provider to retrieve.
 *         schema:
 *           type: integer
 *    responses:
 *      '200':
 *        description: provider details fetched
 *      '401': 
 *        description: Unable to fetch provider
 */
router.get('/get-provider/:id', (req , res) => {
    var param = req.params.id
    providerModel.findOne({id: param})
    .then((response) => {
        res.status(201).json({
            message: 'provider details fetched',
            response
        })
    })
    .catch((err) => {
        res.status(401).json(err)
    })
})



//Route to delete a provider
/**
 * @swagger
 * /v1/api/delete-provider/{id}:
 *  delete:
 *    summary: Delete a Provider
 *    description: Endpoint to delete a provider using the provider id
 *    tags:
 *      - Providers
 *    parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the provider to delete
 *         schema:
 *           type: integer
 *    responses:
 *      '200':
 *        description: provider details deleted
 *      '401': 
 *        description: Unable to delete provider
 */
router.delete('/delete-provider/:id', (req, res) => {
    var param = req.params.id
    providerModel.findOneAndDelete({id: param})
    .then((response) => {
        res.status(201).json({
            message: 'provider details deleted',
            response
        })
    })
    .catch((err) => {
        res.status(401).json(err)
    })
})

//Route to update a provider
/**
 * @swagger
 * /v1/api/update-provider/{id}:
 *  patch:
 *    summary: Update a Provider
 *    description: Endpoint to update a provider details using the provider id
 *    tags:
 *      - Providers
 *    parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the provider to update.
 *         schema:
 *           type: integer
 *    requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Provider name.
 *                 example: Leanne Graham
 *    responses:
 *      '200':
 *        description: provider details fetched
 *      '401': 
 *        description: Unable to fetch provider
 */
router.patch('/update-provider/:id', (req,res) => {
    var param = req.params.id;
    var {providerName} = req.body;
    providerModel.findOneAndUpdate({id: param}, {$set: {name: providerName}})
    .then((response) => {
        res.status(201).json({
            message: 'provider details updated',
            response
        })
    })
    .catch((err) => {
        res.status(401).json(err)
    })
})

export default router;