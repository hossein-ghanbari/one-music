import { useAllArtists, useAllMusics } from "../../api/ReactQueryHook";
import Home from "../../content/home/Home";
import Loading from "../../component/loading/Loading";

const HomeScreen = () => {
  const { data: allArtists, isLoading: allArtistsLoading } = useAllArtists(1);
  const { data: allMusics, isLoading: allMusicsLoading } = useAllMusics(1);

  return (
    <>
      <Home allArtists={allArtists?.data} allMusics={allMusics?.data} />
      {(allArtistsLoading || allMusicsLoading) && <Loading />}
    </>
  );
};

export default HomeScreen;
