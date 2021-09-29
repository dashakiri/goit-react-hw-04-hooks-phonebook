import React, { Component } from "react";
import shortid from 'shortid';
import {ContactForm, Button, Label, Input} from './Form.styled.js'

export class Form extends Component {

    state = {
        name: '',
        number:''
    }  

    numberInputId = shortid.generate();
    nameInputId = shortid.generate();

    handleInputName = (e) => {
        const {name, value} = e.currentTarget;
        this.setState({[name]: value})
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const existingContact = this.props.contacts.find(contact => 
        contact.name.toLowerCase() === this.state.name.toLowerCase());
            
        if(existingContact) {
            alert(`${this.state.name} is already in the list.`);
            return;
        };

        this.props.onSubmit(this.state);
        this.reset();
    }

    reset = () => {
        this.setState({name: '', number: ''});
    }

    render () {
        return (
            <ContactForm onSubmit={this.handleSubmit}>
            <Label htmlFor={this.nameInputId}> 
                Name
            <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            value={this.state.name}
            onChange={this.handleInputName}
            required  
            id={this.nameInputId}
            />
            </Label>

            <Label htmlFor={this.numberInputId}>
                Number
            <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={this.state.number}
            onChange={this.handleInputName}
            id={this.numberInputId}
            />
            </Label>
        
            <Button type="submit">Add contact</Button>
            </ContactForm>
            
            ) 
    }
}