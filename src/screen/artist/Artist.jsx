import { useArtistMusics } from "../../api/ReactQueryHook";
import Musics from "../../content/musics/Musics";
import Loading from "../../component/loading/Loading";
import { useParams } from "react-router-dom";

const Artist = () => {
  const { id } = useParams();
  const { data: artistMusics, isLoading } = useArtistMusics(id);

  return (
    <>
      <Musics data={artistMusics?.data} />
      {isLoading && <Loading />}
    </>
  );
};

export default Artist;
