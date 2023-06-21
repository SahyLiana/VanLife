import React from "react";
import "./Server";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Van, { loader as vanLoader } from "./components/Van";
import Layout from "./components/Layout";
import Vans, { loader as vansLoader } from "./components/Vans";
import Host from "./components/Host";
import Dashboard, { loader as dashboardLoader } from "./components/Dashboard";
import Review from "./components/Review";
import Income from "./components/Income";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HostVans, { loader as hostVansLoader } from "./components/HostVans";
import VanDetail, { loader as vanDetailLoader } from "./components/VanDetail";
import Details from "./components/Details";
import Pricing from "./components/Pricing";
import Photos from "./components/Photos";
import Error from "./components/Error";
import Login, {
  loader as loginLoader,
  action as loginAction,
} from "./components/Login";
import { requireAuth } from "./utils";
// localStorage.removeItem("loggedIn");

function App() {
  // const [van, setVan] = React.useState();

  // React.useEffect(() => {
  //   fetch("/api/vans")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // });

  const myRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
          path="login"
          loader={loginLoader}
          action={loginAction}
          element={<Login />}
        />
        <Route
          path="vans"
          element={<Vans />}
          loader={vansLoader}
          errorElement={<Error />}
        />
        <Route path="vans/:id" loader={vanLoader} element={<Van />} />
        <Route path="host" element={<Host />}>
          <Route
            index
            loader={dashboardLoader}
            errorElement={<Error />}
            element={<Dashboard />}
          />
          <Route
            path="income"
            loader={async ({ request }) => await requireAuth(request)}
            element={<Income />}
          />
          <Route
            path="review"
            loader={async ({ request }) => await requireAuth(request)}
            element={<Review />}
          />
          <Route
            path="vans"
            loader={hostVansLoader}
            element={<HostVans />}
            errorElement={<Error />}
          />
          <Route
            path="vans/:id"
            loader={vanDetailLoader}
            element={<VanDetail />}
            errorElement={<Error />}
          >
            <Route index element={<Details />} />
            <Route
              path="pricing"
              loader={async ({ request }) => await requireAuth(request)}
              element={<Pricing />}
            />
            <Route
              path="photos"
              loader={async ({ request }) => await requireAuth(request)}
              element={<Photos />}
            />
          </Route>
        </Route>
      </Route>
    )
  );

  return (
    <div className="body-bg">
      {/* <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<Van />} />
          <Route path="host" element={<Host />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="review" element={<Review />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<VanDetail />}>
              <Route index element={<Details />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="photos" element={<Photos />} />
            </Route>
          </Route>
        </Route> */}
      {/* <Route path="/van/:id" element={<Van />} /> */}
      {/* </Routes> */}
      {/* <Footer /> */}
      <RouterProvider router={myRouter} />
    </div>
  );
}

export default App;
