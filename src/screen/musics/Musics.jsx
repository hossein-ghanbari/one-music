import { useState, useEffect } from "react";
import { useAllMusics } from "../../api/ReactQueryHook";
import Musics from "../../content/musics/Musics";
import Loading from "../../component/loading/Loading";
import Pagination from "../../component/pagination/Pagination";

const MusicsScreen = () => {
  const [page, setPage] = useState(1);
  const { data: allMusics, isLoading } = useAllMusics(page);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <>
      <Musics data={allMusics?.data} />
      <Pagination pageNumber={4} activePage={page} onClick={(pageNumber) => setPage(pageNumber)} />
      {isLoading && <Loading />}
    </>
  );
};

export default MusicsScreen;
