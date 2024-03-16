const express = require('express')

const { createContact, deleteContact, getAllContact, getContact, updateContact } = require('../controllers/contact_controller')
const ContactRouter = express.Router()


ContactRouter.route('/')
    .get(getAllContact)

ContactRouter.route('/addContact', )
    .post(createContact)

ContactRouter.route('/:id')
    .get(getContact)
    .patch(updateContact)
    .delete(deleteContact)

module.exports = { ContactRouter }