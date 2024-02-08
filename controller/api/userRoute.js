const userRoute = require('express').Router();
const { User } = require('../../models')

userRoute.post('/', (req, res) => {
    console.log({ req, res });
    User.create(req.body)
})