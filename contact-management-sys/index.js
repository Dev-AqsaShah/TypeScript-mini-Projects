import inquirer from 'inquirer';
import chalk from 'chalk';
class ContactManager {
    contacts = [];
    nextId = 1;
    addContact(name, email, phone) {
        const newContact = {
            id: this.nextId++,
            name,
            email,
            phone
        };
        this.contacts.push(newContact);
        console.log(chalk.green(`Contact added: ${name}`));
    }
    removeContact(id) {
        const index = this.contacts.findIndex(contact => contact.id === id);
        if (index !== -1) {
            const removedContact = this.contacts.splice(index, 1)[0];
            console.log(chalk.red(`Contact removed: ${removedContact.name}`));
        }
        else {
            console.log(chalk.red(`Contact with ID ${id} not found.`));
        }
    }
    updateContact(id, name, email, phone) {
        const index = this.contacts.findIndex(contact => contact.id === id);
        if (index !== -1) {
            this.contacts[index] = { id, name, email, phone };
            console.log(chalk.blueBright(`Contact updated: ${name}`));
        }
        else {
            console.log(chalk.red(`Contact with ID ${id} not found.`));
        }
    }
    listContacts() {
        if (this.contacts.length === 0) {
            console.log(chalk.yellow('No contacts found.'));
        }
        else {
            console.log(chalk.yellow('Contacts:'));
            this.contacts.forEach((contact, index) => {
                const shade = index % 3 === 0 ? chalk.blueBright : index % 3 === 1 ? chalk.blue : chalk.cyan;
                console.log(shade(`ID: ${contact.id}, Name: ${contact.name}, Email: ${contact.email}, Phone: ${contact.phone}`));
            });
        }
    }
}
const manager = new ContactManager();
async function mainMenu() {
    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What do you want to do?',
            choices: ['Add Contact', 'Remove Contact', 'Update Contact', 'List Contacts', 'Exit']
        }
    ]);
    switch (answers.action) {
        case 'Add Contact':
            const addAnswers = await inquirer.prompt([
                { type: 'input', name: 'name', message: 'Name:' },
                { type: 'input', name: 'email', message: 'Email:' },
                { type: 'input', name: 'phone', message: 'Phone:' }
            ]);
            manager.addContact(addAnswers.name, addAnswers.email, addAnswers.phone);
            break;
        case 'Remove Contact':
            const removeAnswers = await inquirer.prompt([
                { type: 'input', name: 'id', message: 'Enter the ID of the contact to remove:' }
            ]);
            manager.removeContact(Number(removeAnswers.id));
            break;
        case 'Update Contact':
            const updateAnswers = await inquirer.prompt([
                { type: 'input', name: 'id', message: 'Enter the ID of the contact to update:' },
                { type: 'input', name: 'name', message: 'Name:' },
                { type: 'input', name: 'email', message: 'Email:' },
                { type: 'input', name: 'phone', message: 'Phone:' }
            ]);
            manager.updateContact(Number(updateAnswers.id), updateAnswers.name, updateAnswers.email, updateAnswers.phone);
            break;
        case 'List Contacts':
            manager.listContacts();
            break;
        case 'Exit':
            return;
    }
    mainMenu(); // Show the menu again
}
mainMenu();
