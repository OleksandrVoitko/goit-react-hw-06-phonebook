// import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import Form from '../Form';
import ContactList from '../ContactList';
import Filter from '../Filter';
import EditModal from '../EditModal/EditModal';

import { editing } from 'redux/editing/slice';
import { setEditingID } from 'redux/editingID/slice';
import { setEditingName } from 'redux/editingName/slice';
import { setEditingNumber } from 'redux/editingNumber/slice';

import { addContact, delContact } from 'redux/items/slice';
import { addFilter } from 'redux/filter/slice';
import { Wrapper } from './App.styled';

export default function App() {
  // const [contacts, setContacts] = useState([
  //   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  //   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  //   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  //   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  // ]);
  // const [filter, setFilter] = useState("");

  // useEffect(() => {
  //   const localContacts = localStorage.getItem("contacts");
  //   if (localContacts) {
  //     setContacts(JSON.parse(localContacts));
  //   }
  // }, []);
  const contacts = useSelector(state => state.items);
  const filter = useSelector(state => state.filter);

  const editingName = useSelector(state => state.editingName);
  const editingNumber = useSelector(state => state.editingNumber);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);
  // console.log('editingName ->', editingName);

  const formSubmitHandler = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      return alert(`${newContact.name} is already in contacts.`);
    }

    // setContacts([...contacts, newContact]);
    dispatch(addContact(newContact));
  };

  const filterHandler = e => {
    // setFilter(e.currentTarget.value);
    dispatch(addFilter(e.currentTarget.value));
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  };

  const deleteContact = id => {
    // setContacts(contacts.filter(contact => contact.id !== id));
    dispatch(delContact(id));
  };

  const editingContact = (id, name, number) => {
    dispatch(editing(true));
    dispatch(setEditingID(id));
    dispatch(setEditingName(name));

    dispatch(setEditingNumber(number));
  };

  return (
    <Wrapper>
      <h2>Phone book</h2>
      <EditModal>
        <Form
          onSubmit={formSubmitHandler}
          textButton="Save"
          editingName={editingName}
          editingNumber={editingNumber}
        />
      </EditModal>
      <Form onSubmit={formSubmitHandler} textButton="Add contact" />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={filterHandler} />
      <ContactList
        contacts={getFilteredContacts()}
        editingContact={editingContact}
        deleteContact={deleteContact}
      />
    </Wrapper>
  );
}
