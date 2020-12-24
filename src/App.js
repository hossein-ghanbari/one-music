import { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "react-query";

import PlayerProvider from "./context/PlayerContext";
import ThemeProvider from "./context/ThemeContext";
import Template from "./component/template/Template";
import Loading from "./component/loading/Loading";
import routes from "./routes/routes";
import ScrollToTop from "./utility/ScrollToTop";

function App() {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider>
      <PlayerProvider>
        <BrowserRouter>
          <ScrollToTop />
          <QueryClientProvider client={queryClient}>
            <Template>
              <Suspense fallback={<Loading />}>
                <Switch>
                  {routes.map((route, i) => (
                    <Route key={i} {...route} />
                  ))}
                </Switch>
              </Suspense>
            </Template>
          </QueryClientProvider>
        </BrowserRouter>
      </PlayerProvider>
    </ThemeProvider>
  );
}

export default App;
