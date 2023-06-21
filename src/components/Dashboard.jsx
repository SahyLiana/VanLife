import React from "react";
import { BsStarFill } from "react-icons/bs";
import "../styles/dashboard.css";
import { Link, defer, Await, useLoaderData } from "react-router-dom";
import { requireAuth } from "../utils";
import { getHostVans } from "../Api";

export async function loader({ request }) {
  await requireAuth(request);
  return defer({ vans: getHostVans() });
}

function vanElements(vans) {
  const myVans = vans.map((van) => {
    return (
      <div key={van.id} className="dashboard-card">
        <img src={van.imageUrl} />
        <div className="dash-card-content">
          <h3>{van.name}</h3>
          <p>${van.price}/day</p>
        </div>
        <Link style={{ color: "gray" }} to={`vans/${van.id}`}>
          View
        </Link>
      </div>
    );
  });

  return (
    <div className="dash-list-vans">
      <div className="list-header">
        <h2>Your listed vans</h2>
        <Link to="vans">View all</Link>
      </div>
      {myVans}
    </div>
  );
}

function Dashboard() {
  const vanPromise = useLoaderData();

  return (
    <div className="dashboard-container">
      <section className="section-income">
        <div className="income-left">
          <h1 style={{ fontSize: "35px" }}>Welcome</h1>
          <p style={{ fontSize: "20px" }}>
            Income last{" "}
            <span style={{ textDecoration: "underline", fontWeight: "bold" }}>
              30 days
            </span>
          </p>
          <h1 style={{ fontSize: "35px" }}>$2,260</h1>
        </div>
        <Link to="income" className="dashboard-details">
          Details
        </Link>
      </section>
      <section className="section-review">
        <h2>
          Review score{" "}
          <span style={{ color: "red" }}>
            <BsStarFill />
          </span>{" "}
          5.0 <span style={{ fontWeight: "lighter", color: "gray" }}>/5</span>
        </h2>
        <Link to="review" className="dashboard-details">
          Details
        </Link>
      </section>
      <React.Suspense fallback={<h1>Loading...</h1>}>
        <Await resolve={vanPromise.vans}>{vanElements}</Await>
      </React.Suspense>
    </div>
  );
}

export default Dashboard;
