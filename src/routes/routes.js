import { lazy } from "react";

const Home = lazy(() => import("../screen/home/Home"));
const Musics = lazy(() => import("../screen/musics/Musics"));
const Artists = lazy(() => import("../screen/artists/Artists"));
const Artist = lazy(() => import("../screen/artist/Artist"));
const NotFound = lazy(() => import("../screen/notFound/NotFound"));

const routes = [
  {
    exact: true,
    path: "/",
    component: Home,
  },
  {
    path: "/musics",
    component: Musics,
  },
  {
    path: "/artists/:id",
    component: Artist,
  },
  {
    path: "/artists",
    component: Artists,
  },
  {
    component: NotFound,
  },
];

export default routes;
