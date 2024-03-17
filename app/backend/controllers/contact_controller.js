const mongoose = require('mongoose')
const Contact = require('../models/contact')
const { StatusCodes } = require('http-status-codes')



const { ObjectId } = require("mongodb");


const createContact = async(req, res) => {
    const { fullName: fullName, emailAddress: emailAddress } = req.body
    try {
        const newContact = new Contact({
            fullName: fullName,
            emailAddress: emailAddress
        })
        newContact.save()
            .then((result) => res.status(StatusCodes.CREATED).json(result))
            .catch((error) => console.error(error))
        console.log(fullName, emailAddress)
    } catch (error) { console.error(error) }


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
    res.json({ msg: 'getContact' })
}
const updateContact = async(req, res) => {
    const { fullName: fullName, emailAddress: emailAddress } = req.body
    const contactId = req.params.id
    const checkData = await Contact.findById({ _id: contactId })

    try {
        const newData = { $set: { fullName: fullName, emailAddress: emailAddress } }
        const update = await Contact.updateMany({ _id: contactId }, newData)
        if (update) {
            console.log('items has been updated')
            res.json({ msg: "contact has been updated" })
        }
    } catch (error) {
        console.error(error.message)
    }

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