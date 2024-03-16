const mongoose = require('mongoose')
const Contact = require('../models/contact')
const { StatusCodes } = require('http-status-codes')
const fs = require('fs')
const path = require('path')
const upload = require('../utility/helper')


const createContact = async(req, res) => {
    console.log(req.body)
    try {
        const newContact = new Contact({
            fullName: req.body.fullName,
            emailAddress: req.body.emailAddress
        })
        newContact.save()
            .then((result) => res.status(StatusCodes.CREATED).json(result))
            .catch((error) => console.error(error))
        console.log(fullName, phoneNumber, email)
    } catch (error) { console.error(error) } finally {
        await Contact.close()
    }


}
const getAllContact = async(req, res) => {
    try {
        const contacts = await Contact.find()
        if (contacts) {
            res.status(201).json(contacts)
        } else {
            res.json({ message: 'no contacts found' })
        }

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
    const { _id: idContact } = req.params
    console.log(idContact)
    try {
        const deleteData = await Contact.findOneAndDelete({ _id: req.params.id })
        if (deleteData.deletedCount === 1) {
            console.log('successfully deleted')
        } else {
            console.log('No documents match the query . Delete 0 documents')
        }

    } catch (error) {
        console.error(error.message)
    }


}
module.exports = {
    getContact,
    getAllContact,
    createContact,
    updateContact,
    deleteContact
}