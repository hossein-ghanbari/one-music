import ArtistItem from "../../component/artistItem/ArtistItem";
import List from "../../component/list/List";

const Artists = ({ data }) => {
  return (
    <>
      <List>
        {data?.map((item, index) => {
          return <ArtistItem key={index} itemData={item} />;
        })}
      </List>
    </>
  );
};

export default Artists;
