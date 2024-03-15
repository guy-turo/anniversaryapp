const mongoose = require('mongoose')
const Contact = require('../models/contact')
const { StatusCodes } = require('http-status-codes')

const createContact = async(req, res) => {
    const { fullName, phoneNumber, email } = req.query

    const newContact = new Contact({
        fullName: fullName,
        phoneNumber: phoneNumber,
        emailAddress: email,
    })
    newContact.save()
        .then((result) => res.status(StatusCodes.CREATED).json(result))
        .catch((error) => console.error(error))
    console.log(fullName, phoneNumber, email)

}
const getAllContact = async(req, res) => {
    try {
        const contacts = await Contact.find()
        res.status(201).json(contacts)
        console.log('fetch all contacts')
    } catch (error) {
        console.error(error)
    }

}

const getContact = async(req, res) => {
    res.json({ msg: 'get Contact' })
}
const updateContact = async(req, res) => {
    res.json({ msg: "update contact" })
}
const deleteContact = async(req, res) => {
    res.json({ msg: "delete contact" })
}
module.exports = {
    getContact,
    getAllContact,
    createContact,
    updateContact,
    deleteContact
}