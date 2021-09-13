import express from 'express';
import clientsModel from '../models/clients';
var router = express.Router();

//route to submit a client
/**
 * @swagger
 * /v1/api/create-client:
 *  post:
 *    summary: Create a new Client
 *    description: Endpoint to register a new client
 *    tags:
 *      - Clients
 *    requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The client name.
 *                 example: John Doe
 *               email:
 *                  type: string
 *                  description: The user email
 *                  example: johndoe@gmail.com
 *               phone:
 *                  type: string
 *                  description: The user phone / contact number
 *                  example: 09098981219
 *               providers:
 *                  type: array
 *                  description: Selected providers (an array of objects having id and name as properties)
 *                  example: [{
 *                      id: 1,
 *                      name: provider 1
 *                  }]
 *    responses:
 *      '200':
 *        description: new client created
 *      '401': 
 *        description: Unable to add new client
 */
router.post('/create-client', (req, res) => {
    var {name, email,phone,providers} = req.body;
    var newClient = new clientsModel({
        name: name,
        email: email,
        phone: phone,
        providers: providers
    })
    newClient.save()
    .then((response) => {
        res.status(201).json({
            message: 'New client created',
            response
        })
    })
    .catch((err) => {
        res.status(401).json({
            message: 'Unable to add new client',
            err
        })
    })
})



//route to get all clients
/**
 * @swagger
 * /v1/api/clients:
 *  get:
 *    summary: Get all clients
 *    tags:
 *      - Clients
 *    responses:
 *      '200':
 *        description: All Clients fetched
 *      '401': 
 *        description: Unable to fetch all client
 */
router.get('/clients', (req, res) => {
    try {
        clientsModel.find({})
        .then((response) => {
            var arr = [];
            response.forEach(item => {
                var provider = item.providers
                var newArr = provider.map(item => item.name)
                var arrInString = newArr.toString()
                var arrVal = {
                    _id: item._id,
                    name: item.name,
                    email: item.email,
                    phone: item.phone,
                    providers: arrInString,
                }
                arr.push(arrVal)
            })
            // console.log(arr)
            res.status(201).json({
                message: 'All clients fetched',
                arr
            })
        })
        .catch((err) => {
            console.log(err)
            res.status(401).json({
                message: 'Unable to fetch all clients',
                err
            })
        })
    } catch (err) {
        res.status(401).json(err)
    }
})

//route to get a client
/**
 * @swagger
 * /v1/api/clients/{id}:
 *  get:
 *    summary: Get a client using the client id
 *    tags:
 *      - Clients
 *    parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the client to retrieve.
 *         schema:
 *           type: integer
 *    responses:
 *      '200':
 *        description: Client fetched
 *      '401': 
 *        description: Unable to fetch client
 */
router.get('/clients/:id', (req, res) => {
    var param = req.params.id
    clientsModel.findOne({_id: param})
    .then((response) => {
        var arr = [];
        var provider = response.providers
        var newArr = provider.map(item => item.name)
        var arrVal = {
            _id: response._id,
            name: response.name,
            email: response.email,
            phone: response.phone,
            providers: newArr,
        }
        arr.push(arrVal)
        res.status(201).json({
            message: 'Client fetched',
            arr
        })
    })
    .catch((err) => {
        res.status(401).json({
            message: 'Unable to fetch client',
            err
        })
    })
})

//route to delete a client
/**
 * @swagger
 * /v1/api/clients/{id}:
 *  delete:
 *    summary: Delete a client using the client id
 *    tags:
 *      - Clients
 *    parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the client to delete.
 *         schema:
 *           type: integer
 *    responses:
 *      '201':
 *        description: Client deleted
 *      '401': 
 *        description: Unable to delete client
 */
router.delete('/clients/:id', (req, res) => {
    var param = req.params.id
    clientsModel.findByIdAndDelete({_id: param})
    .then((response) => {
        res.status(201).json({
            message: 'Client deleted',
            response
        })
    })
    .catch((err) => {
        res.status(401).json({
            message: 'Unable to delete client',
            err
        })
    })
})

//route to modify client details
/**
 * @swagger
 * /v1/api/clients/{id}:
 *  patch:
 *    summary: Update a client using the client id
 *    tags:
 *      - Clients
 *    requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Client name.
 *                 example: Leanne Graham
 *               email:
 *                 type: string
 *                 description: Client email.
 *                 example: john@gmail.com
 *               phone:
 *                  type: string
 *                  description: The user phone / contact number
 *                  example: 09098981219
 *               providers:
 *                  type: array
 *                  description: Selected providers (an array of objects having id and name as properties)
 *                  example: [{
 *                      id: 1,
 *                      name: provider 1
 *                  }]
 *    parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the client to update.
 *         schema:
 *           type: integer
 *    responses:
 *      '201':
 *        description: Client details updated
 *      '401': 
 *        description: Unable to update client details
 */
router.patch('/clients/:id', (req, res) => {
    var {name, email,phone,providers} = req.body;
    var param = req.params.id;
    clientsModel.findByIdAndUpdate({_id: param}, 
        {$set: {name, name, email: email, phone: phone, providers: providers}})
    .then((response) => {
        res.status(201).json({
            message: 'Client details updated',
            response
        })
    })
    .catch((err) => {
        res.status(401).json({
            message: 'Unable to update client details',
            err
        })
    })
})

export default router;