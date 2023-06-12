import React from "react";
import "../styles/hostVans.css";
import { Link, useLoaderData } from "react-router-dom";
import { getHostVans } from "../Api";
import { requireAuth } from "../utils";

export async function loader() {
  await requireAuth();
  return getHostVans();
}

function HostVans() {
  //const [vans, setVans] = React.useState([]);

  // React.useEffect(() => {
  //   fetch("/api/host/vans")
  //     .then((res) => res.json())
  //     .then((data) => setVans(data.vans));
  // }, []);

  const vans = useLoaderData();

  const vansElts = vans.map((van) => {
    return (
      <Link to={`${van.id}`} key={van.id} className="van-container">
        <img src={van.imageUrl} />
        <div className="van-description">
          <h3>{van.name}</h3>
          <p>${van.price}/Day</p>
        </div>
      </Link>
    );
  });

  return (
    <div>
      <p>This is the Host Vans</p>
      <div style={{ padding: "10px" }}>
        {vans.length > 0 ? vansElts : <h2>Loading</h2>}
      </div>
    </div>
  );
}

export default HostVans;
