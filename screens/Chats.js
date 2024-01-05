import { FlatList, Text, View } from "react-native";
import { CONTACTS } from "../data/contactsData";
import Chat from "../components/Chat";

function Chats() {
  const contacts = CONTACTS;

  console.log(contacts);

  function renderList(itemData) {
    const data = itemData.item;

    return <Chat data={data} />;
  }

  return (
    <FlatList
      data={contacts}
      keyExtractor={(item) => item.id}
      renderItem={renderList}
    />
  );
}

export default Chats;
