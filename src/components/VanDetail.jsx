import React from "react";
import {
  useParams,
  Link,
  Outlet,
  useLoaderData,
  defer,
  Await,
} from "react-router-dom";
import "../styles/vandetail.css";
import SubNav from "./SubNav";
// import { getHostVans } from "../Api"; //WE DON'T NEED THIS ANYMORE WHILE USING FIREBASE
import { getVan } from "../Api";
import { requireAuth } from "../utils";
//the loader has a params object which is used to collect the parameter
export async function loader({ params, request }) {
  // console.log(param.id);
  await requireAuth(request);
  // return getHostVans(params.id);
  // return defer({ van: getHostVans(params.id) });
  return defer({ van: getVan(params.id) });
}

function VanDetail() {
  //const { id } = useParams();

  //const [van, setVan] = React.useState({});

  // React.useEffect(() => {
  //   fetch(`/api/host/vans/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log(data.vans.name);
  //       setVan(data.vans);
  //     });
  // }, [id]);

  const vanPromise = useLoaderData();

  //   const [myTypeClass, setMyType] = React.useState();

  //   if (van.type === "luxury") {
  //     setMyType("luxury");
  //   } else if (van.type === "simple") {
  //     setMyType("simple");
  //   } else {
  //     setMyType("rugged");
  //   }

  //console.log(id);

  // let myBg = "";
  // if (van.type == "luxury") {
  //   myBg = "luxury";
  // } else if (van.type == "simple") {
  //   myBg = "simple";
  // } else {
  //   myBg = "rugged";
  // }

  function renderVanElement(van) {
    let myBg = "";
    if (van.type == "luxury") {
      myBg = "luxury";
    } else if (van.type == "simple") {
      myBg = "simple";
    } else {
      myBg = "rugged";
    }
    return (
      <div>
        <Link
          style={{
            marginBottom: "10px",
            color: "gray",
            display: "block",
            textDecoration: "underline",
          }}
          to=".."
          relative="path"
        >
          &larr;Bact to previous page
        </Link>
        <div className="shared-ui">
          <img src={van.imageUrl} />
          <div className="right-side-vandetail">
            <button className={`btn ${myBg}`}>{van.type}</button>
            <h2>{van.name}</h2>
            <p>
              <span style={{ fontWeight: "bold", fontSize: "20px" }}>
                ${van.price}
              </span>
              /day
            </p>
          </div>
        </div>
        {/* <Link to=".">Details</Link> */}
        <SubNav />

        <Outlet context={{ van }} />
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "white", padding: "40px", margin: "10px" }}>
      {/* {van ? (
        <div>
          <Link
            style={{
              marginBottom: "10px",
              color: "gray",
              display: "block",
              textDecoration: "underline",
            }}
            to=".."
            relative="path"
          >
            &larr;Bact to previous page
          </Link>
          <div className="shared-ui">
            <img src={van.imageUrl} />
            <div className="right-side">
              <button className={`btn ${myBg}`}>{van.type}</button>
              <h2>{van.name}</h2>
              <p>
                <span style={{ fontWeight: "bold", fontSize: "20px" }}>
                  ${van.price}
                </span>
                /day
              </p>
            </div>
          </div> */}
      {/* <Link to=".">Details</Link> */}
      {/* <SubNav />

          <Outlet context={{ van }} />
        </div> */}
      {/* ) : (
        <h2>Loading</h2>
      )} */}
      <React.Suspense fallback={<h2>Loading...</h2>}>
        <Await resolve={vanPromise.van}>
          {/* {(van) => {
            let myBg = "";
            if (van.type == "luxury") {
              myBg = "luxury";
            } else if (van.type == "simple") {
              myBg = "simple";
            } else {
              myBg = "rugged";
            }
            {
              return (
                <div>
                  <Link
                    style={{
                      marginBottom: "10px",
                      color: "gray",
                      display: "block",
                      textDecoration: "underline",
                    }}
                    to=".."
                    relative="path"
                  >
                    &larr;Bact to previous page
                  </Link>
                  <div className="shared-ui">
                    <img src={van.imageUrl} />
                    <div className="right-side">
                      <button className={`btn ${myBg}`}>{van.type}</button>
                      <h2>{van.name}</h2>
                      <p>
                        <span style={{ fontWeight: "bold", fontSize: "20px" }}>
                          ${van.price}
                        </span>
                        /day
                      </p>
                    </div>
                  </div>
                  {/* <Link to=".">Details</Link> */}
          {/* <SubNav />

                  <Outlet context={{ van }} />
                </div>
              ); */}
          {/* } 
          }} */}
          {renderVanElement}
        </Await>
      </React.Suspense>
    </div>
  );
}

export default VanDetail;
