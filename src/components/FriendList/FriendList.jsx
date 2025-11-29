import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

function FrendList({ friends }) {
  return (
    <ul className={css.frendList}>
      {friends.map((friend) => {
        return (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        );
      })}
    </ul>
  );
}

export default FrendList;
