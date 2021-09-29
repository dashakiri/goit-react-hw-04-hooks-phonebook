import React from "react";
import shortid from 'shortid';
import {ListOfContacts, ListItem, Button} from './ContactList.styled';

export function ContactsList ({contacts, deleteContact}) {    
    return(
    <ListOfContacts>
    {contacts.map(({id, name, number}) => {
        return (<ListItem key={shortid.generate()}><span>{name}: {number}</span>
        <Button type="button" onClick={() => deleteContact(id)}
        >Delete</Button>
        </ListItem>)
        })}
    </ListOfContacts>        
    )
}
