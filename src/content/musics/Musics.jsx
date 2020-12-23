import MusicItem from "../../component/musicItem/MusicItem";
import List from "../../component/list/List";

const Musics = ({ data }) => {
  return (
    <>
      <List>
        {data?.map((item, index) => {
          return <MusicItem key={index} itemData={item} />;
        })}
      </List>
    </>
  );
};

export default Musics;
