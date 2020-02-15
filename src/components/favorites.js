import React from "react"
import { Link } from "gatsby"
import Post from "./post"

const MainFeed = () => {
  return (
    <div className="mainfeed--wrapper">
  <div className="row">
    <div className="rightcolumn">
      <div className="card">
        <h3>Popular Post</h3>
        <div className="fakeimg">Image</div>
        <br />
        <div className="fakeimg">Image</div>
        <br />
        <div className="fakeimg">Image</div>
      </div>
    </div>
  </div>
</div>

  )
}

export default MainFeed
