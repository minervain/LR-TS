import React, { useEffect, useState } from 'react'
import List from './List/index.js'
import Form from './Form/index.js'

function Contacts() {
const [contacts,setContacts]=useState([]);

useEffect(() => {

console.log(contacts)


})

  return (
    <div>
        <List/>
        <Form addContact={setContacts}  contacts={contacts}/>

    </div>
  )
} 

export default Contacts
