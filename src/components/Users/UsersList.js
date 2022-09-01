import Card from "../UI/Card";
import styles from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            <span>{user.name}</span>
            <span>{` ${user.age}`} years old</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
