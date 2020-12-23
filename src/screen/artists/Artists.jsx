import { useState, useEffect } from "react";
import { useAllArtists } from "../../api/ReactQueryHook";
import Artists from "../../content/artists/Artists";
import Loading from "../../component/loading/Loading";
import Pagination from "../../component/pagination/Pagination";

const ArtistsScreen = () => {
  const [page, setPage] = useState(1);
  const { data: allArtists, isLoading } = useAllArtists(page);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <>
      <Artists data={allArtists?.data} />
      <Pagination pageNumber={4} activePage={page} onClick={(pageNumber) => setPage(pageNumber)} />
      {isLoading && <Loading />}
    </>
  );
};

export default ArtistsScreen;
