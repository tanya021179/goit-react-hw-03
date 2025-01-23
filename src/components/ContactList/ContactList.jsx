import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";

const ContactList = ({ contacts, onDeleteContacts }) => {
  return (
    <div>
      {contacts.map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          <Contact
            name={name}
            number={number}
            nameIcon={<FaUser />}
            numberIcon={<FaPhoneAlt />}
          />
          <button onClick={() => onDeleteContacts(id)}>Delete</button>
        </li>
      ))}
    </div>
  );
};

export default ContactList;
