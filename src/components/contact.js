import React from "react"
import { Link } from "gatsby"
import Post from "./post"

const MainFeed = () => {
  return (
    <div className="mainfeed--wrapper">
  <div className="row">
    <div className="column--left">

    </div>
    <div className="column--right">
      <div className="card">
        <h2>About Me</h2>
        <div className="fakeimg" style={{ height: 100 }}>
          Image
        </div>
        <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
      </div>
      <div className="card">
        <h3>Popular Post</h3>
        <div className="fakeimg">Image</div>
        <br />
        <div className="fakeimg">Image</div>
        <br />
        <div className="fakeimg">Image</div>
      </div>
      <div className="card">
        <h3>Follow Me</h3>
        <p>Some text..</p>
      </div>
    </div>
  </div>
</div>

  )
}

export default MainFeed
