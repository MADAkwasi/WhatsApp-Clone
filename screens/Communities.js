import { FlatList} from "react-native";
import Community from "../components/Community";
import { COMMUNITIES } from "../data/Communities data";
// postgres://postgres.nlvmykxgfoyszbigqfui:[YOUR-PASSWORD]@aws-0-eu-west-2.pooler.supabase.com:6543/postgres

function Communities() {
  const communities = COMMUNITIES;

  function renderList(itemData) {
    const data = itemData.item;
    console.log(itemData);
    return <Community data={data} index={itemData.index} />;
  }

  return (
    <FlatList
      data={communities}
      keyExtractor={(item) => item.id}
      renderItem={renderList}
    />
  );
}

export default Communities;
