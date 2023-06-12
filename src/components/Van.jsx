import React from "react";
import "../styles/van.css";
import { useParams, Link, useLocation, useLoaderData } from "react-router-dom";
import { getVans } from "../Api";
import { requireAuth } from "../utils";

export async function loader({ params }) {
  await requireAuth();

  return getVans(params.id);
}

function Van() {
  const van = useLoaderData();
  // const { id } = useParams();

  // const [van, setVan] = React.useState(null);

  //console.log(id);

  // React.useEffect(() => {
  //   fetch(`/api/vans/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => setVan(data.vans));
  // }, [id]);

  const location = useLocation();
  console.log("Location is");
  //   {pathname: '/vans/1', search: '', hash: '', state: {…}, key: 'eom2zuwi'}
  // hash
  // :
  // ""
  // key
  // :
  // "eom2zuwi"
  // pathname
  // :
  // "/vans/1"
  // search
  // :
  // ""
  // state
  // :
  // search
  // :
  // "?type=simple"
  // type
  // :
  // "simple"
  console.log(location);

  //const search = (location.state && location.state.search) || ""; //if location.state AND location.state.search(IMPORTANT) exists then give search=location.state.search
  // const search = location.state?.search;
  const search = location.state?.search;
  //console.log(search);
  const type = location.state?.type || "all";

  // console.log(`Search is ${search}`);
  // console.log(`Type is ${type}`);
  //console.log(`Location.state is ${location.state == null}`);

  return van ? (
    <div className="myvan-container">
      <Link
        style={{
          marginBottom: "10px",
          color: "gray",
          display: "block",
          textDecoration: "underline",
        }}
        to={`..${search}`}
        //to="..?"
        relative="path"
      >
        &larr;Bact to {type} vans
      </Link>
      <img id="van-image" src={van.imageUrl} />
      <p className={`type ${van.type}`}>{van.type}</p>
      <h1>{van.name}</h1>
      <p>
        <span style={{ fontWeight: "bolder", fontSize: "30px" }}>
          ${van.price}
        </span>
        <span style={{ fontSize: "20px" }}>/day</span>
      </p>
      <p style={{ fontWeight: "bold" }}>{van.description}</p>
      <Link className="btn-rent">Rent this van</Link>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}

export default Van;
