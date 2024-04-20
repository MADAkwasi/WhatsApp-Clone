import { FlatList } from "react-native";
import Community from "../components/Community";
import { COMMUNITIES } from "../data/Communities data";
import CommunityHeader from "../components/CommunityHeader";
// postgres://postgres.nlvmykxgfoyszbigqfui:[YOUR-PASSWORD]@aws-0-eu-west-2.pooler.supabase.com:6543/postgres

function Communities({ navigation }) {
  const communities = COMMUNITIES;

  function renderList(itemData) {
    const data = itemData.item;

    function handlePress() {
      navigation.navigate("CommunityChat", { data });
    }

    return <Community data={data} id={data.id} onPress={handlePress} />;
  }

  return (
    <FlatList
      style={{ gap: 10 }}
      data={communities}
      keyExtractor={(item) => item.id}
      renderItem={renderList}
      ListHeaderComponent={<CommunityHeader />}
    />
  );
}

export default Communities;
