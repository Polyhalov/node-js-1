const { on } = require("nodemon");
const contactService = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone })=>{
    switch (action) {
        case "list":
            const allContacts = await contactService.listContacts();
            return console.log(allContacts);
        case "get":
            const oneContact = await contactService.getContactById(id);
            return console.log(oneContact)
        case "remove":
            const deleteContact = await contactService.removeContact(id);
            return console.log(deleteContact);
        case "add":
            const newContact = await contactService.addContact({ name, email, phone });
            return console.log(newContact);
        default:
            console.log("Unknown action");
    }
}
// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "qdggE76Jtbfd9eWJHrssH" });
// invokeAction({ action: "remove", id: "qdggE76Jtbfd9eWJHrssH" });
invokeAction({ action: "add", name:"Pidar", email:"dads@dasd.com", phone:"+3898237987" });