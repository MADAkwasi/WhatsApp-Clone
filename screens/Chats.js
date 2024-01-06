import { FlatList } from "react-native";
import { CONTACTS } from "../data/contactsData";
import Chat from "../components/Chat";

function Chats({ navigation }) {
  const contacts = CONTACTS;

  function renderList(itemData) {
    const data = itemData.item;
    function handlePress() {
      navigation.navigate("ChatWall", { message: data.message });
    }

    return <Chat data={data} onPress={handlePress} id={data.id} />;
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
