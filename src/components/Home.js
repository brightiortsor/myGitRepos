import React from "react";
import "../App.css";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <div className="home">
      <Helmet>
        <title>Home page</title>
        <meta
          name="description"
          content="This is the home page for my github repositories using the github api calls"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="home-cont home-cont-div">
        <h1 className="home--header home--title">
          WELCOME TO MY GitHub REPOS' LOG
        </h1>
        <hr />
        <div className="home-image-div">
          <img
            src="https://avatars.githubusercontent.com/u/99312664?v=4"
            alt=""
            className="home--image"
          />
        </div>
        <div className="home-details">
          <p>Name: Bright Iortsor</p>
          <p>Username: @brightiortsor</p>
          <p>Twitter: @TheFineUncle</p>
          <p>Title: Frontend Engineer</p>
          <p>Followers: 18</p>
          <p>Following: 19</p>
          <p>
            BIO: Jack of all trades, master of many & still better than most!
          </p>
        </div>
      </div>
    </div>
  );
}
