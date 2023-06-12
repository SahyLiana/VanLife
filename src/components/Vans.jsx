import React from "react";
import "../styles/vans.css";
import {
  Link,
  NavLink,
  useSearchParams,
  useLoaderData,
} from "react-router-dom";
import { getVans } from "../Api.js";
import { requireAuth } from "../utils";

export async function loader() {
  await requireAuth();
  return getVans();
}

function Vans() {
  // const [vans, setVans] = React.useState([]);//NO NEED OF THIS TOO

  // const [loading, setLoading] = React.useState(false);//NO NEED OF LOADING STATE TOO IF WE USE LOADERS
  const [searchParams, setSearchParams] = useSearchParams();

  const vans = useLoaderData(); //BY USING LOADERS
  //console.log(data);
  const myType = searchParams.get("type");
  const [error, setError] = React.useState(null);

  //NO NEED OF USEEFFECT ANYMORE IF WE USE THE LOADERS, SINCE IT WILL FIRST FETCH THE DATA BEFORE IT RENDERS THE NEXT PAGE, THAT MEANS
  //IT WILL HAVE A LITTLE BIT OF DELAY FOR OPENING IT
  // React.useEffect(() => {
  //   // fetch("api/vans")
  //   //   .then((res) => res.json())
  //   //   .then((data) => setVans(data.vans));
  //   async function loadVans() {
  //     setLoading(true);
  //     try {
  //       console.log("fetching...");
  //       const data = await getVans();
  //       console.log(data);
  //       setVans(data);
  //     } catch (error) {
  //       //setError(err);
  //       console.log("There was an error");
  //       console.log(error);
  //       setError(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  //   loadVans();
  // }, []);

  //console.log(vans);

  //console.log(myType);

  //   function getNewSearchParams(key, value) {
  //     setSearchParams(prevParams => {
  //         if (value === null) {
  //             prevParams.delete(key)
  //         } else {
  //             prevParams.set(key, value)
  //         }
  //         return prevParams
  //     })
  // }

  const displayedVans = myType
    ? vans.filter((van) => van.type === myType)
    : vans;

  const vanElt = displayedVans
    ? displayedVans.map((van) => {
        //console.log(van.name);
        let myClassbg = "";
        if (van.type === "simple") {
          myClassbg = "orange";
        } else if (van.type === "rugged") {
          myClassbg = "green";
        } else {
          myClassbg = "black";
        }

        return (
          <div className="card-item" key={van.id}>
            <Link
              to={`/vans/${van.id}`}
              state={{ search: `?${searchParams.toString()}`, type: myType }}
            >
              <div className="card-image">
                <img src={van.imageUrl} />
              </div>
              <div className="card-body">
                <h2>{van.name}</h2>
                <p>${van.price}/day</p>
              </div>

              <button className={`btn ${myClassbg}`}>{van.type}</button>
            </Link>
          </div>
        );
      })
    : null;

  function getNewSearchParams(key, value) {
    const sp = new URLSearchParams(searchParams);
    if (value === null) {
      sp.delete(key);
    } else {
      sp.set(key, value);
    }
    // console.log(sp.toString());
    return `?${sp.toString()}`;
  }

  // if (loading) {
  //   console.log("loading");
  //   return <h1>Loading...</h1>;
  // }
  console.log(error);

  if (error) {
    console.log(error);
    return <h1>There was an error:{error.message}</h1>;
  }

  const test = error ? (
    <h1>This is an error</h1>
  ) : (
    <div className="vans-container">
      <h1 className="vans-header">Explore our van options</h1>

      {/* <form className="btn-group" method="GET">
  <button className="btn" name="type" value="simple" type="submit">
    Simple
  </button>
  <button className="btn" name="type" value="luxury" type="submit">
    Luxury
  </button>
  <button className="btn" name="type" value="rugged" type="submit">
    Rugged
  </button>
  <button className="btn" name="type" type="submit">
    All
  </button>
</form> */}

      <div className="btn-group">
        {/* <NavLink className="sim" to="?type=simple">
    Simple
  </NavLink> */}

        {/* <NavLink className="sim" to="?type=simple">
    Simple
  </NavLink> */}
        {/* <button
    className="sim"
    onClick={() => setSearchParams("simple")}
  >
    Simple
  </button> */}
        {/* <button
    className={`sim ${myType === "simple" ? "selected" : null}`}
    onClick={() => setSearchParams({ type: "simple" })}
  >
    Simple
  </button>
  <button
    className={`lux ${myType === "luxury" ? "selected" : null}`}
    onClick={() => setSearchParams({ type: "luxury" })}
  >
    Luxury
  </button>
  <button
    className={`rug ${myType === "rugged" ? "selected" : null}`}
    onClick={() => setSearchParams({ type: "rugged" })}
  >
    Rugged
  </button>
  {myType ? (
    <button onClick={() => setSearchParams({})}>Clear filter</button>
  ) : null}
</div> */}
        {/* <div className="btn-group"> */}

        <NavLink
          className={`sim ${myType === "simple" ? "selected" : null}`}
          to={getNewSearchParams("type", "simple")}
        >
          Simple
        </NavLink>
        <NavLink
          className={`lux ${myType === "luxury" ? "selected" : null}`}
          to={getNewSearchParams("type", "luxury")}
        >
          Luxury
        </NavLink>
        <NavLink
          className={`rug ${myType === "rugged" ? "selected" : null}`}
          to={getNewSearchParams("type", "rugged")}
        >
          Rugged
        </NavLink>
        {myType ? (
          <NavLink to={getNewSearchParams("type", null)}>Clear filters</NavLink>
        ) : null}
      </div>
      <div className="vans-items">{vanElt}</div>
    </div>
  );

  return test;
}

export default Vans;
