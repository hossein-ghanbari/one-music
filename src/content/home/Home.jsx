import { useState } from "react";
import { useAllMusics } from "../../api/ReactQueryHook";
import MusicItem from "../../component/musicItem/MusicItem";

const Home = () => {
  const [page, setPage] = useState(1);
  const { data: allMusics } = useAllMusics(page);
  return (
    <>
      <button onClick={() => setPage(page + 1)}>setPage</button>
      <div className="Home">home</div>
      {allMusics?.data?.map((item, index) => {
        return <MusicItem key={index} itemData={item} />;
      })}
    </>
  );
};

export default Home;
