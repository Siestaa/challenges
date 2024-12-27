import styles from './styles.module.css';

interface IContact {
  ref: string;
  icon: string;
}

interface ListContactsProps {
  list: IContact[];
}

export const ListContacts = ({ list }: ListContactsProps) => {
  return (
    <ul className={styles.contactsList}>
      {list.map((contact) => (
        <li key={contact.ref}>
          <a href={contact.ref}>
            <img src={contact.icon} width="48" height="48" />
          </a>
        </li>
      ))}
    </ul>
  );
};
