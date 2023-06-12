import React from "react";
import { useParams, Link, Outlet, useLoaderData } from "react-router-dom";
import "../styles/vandetail.css";
import SubNav from "./SubNav";
import { getHostVans } from "../Api";
import { requireAuth } from "../utils";

export async function loader({ params }) {
  // console.log(param.id);
  await requireAuth();
  return getHostVans(params.id);
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

  const van = useLoaderData();

  //   const [myTypeClass, setMyType] = React.useState();

  //   if (van.type === "luxury") {
  //     setMyType("luxury");
  //   } else if (van.type === "simple") {
  //     setMyType("simple");
  //   } else {
  //     setMyType("rugged");
  //   }

  //console.log(id);

  let myBg = "";
  if (van.type == "luxury") {
    myBg = "luxury";
  } else if (van.type == "simple") {
    myBg = "simple";
  } else {
    myBg = "rugged";
  }

  return (
    <div style={{ backgroundColor: "white", padding: "40px", margin: "10px" }}>
      {van ? (
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
          <SubNav />

          <Outlet context={{ van }} />
        </div>
      ) : (
        <h2>Loading</h2>
      )}
    </div>
  );
}

export default VanDetail;
