import React from "react";
import {ListOfContacts, ListItem, Button} from './ContactList.styled';

export function ContactsList ({contacts, deleteContact}) {    
    return(
    <ListOfContacts>
    {contacts.map(({id, name, number}) => {
        return (<ListItem key={id}><span>{name}: {number}</span>
        <Button type="button" onClick={() => deleteContact(id)}
        >Delete</Button>
        </ListItem>)
        })}
    </ListOfContacts>        
    )
}
