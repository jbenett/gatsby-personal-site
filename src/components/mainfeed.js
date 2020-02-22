import React from "react"

const MainFeed = () => {
  return (
    <div className="mainfeed--wrapper">
  <div className="row">
    <div className="column--left">
      <div className="card">
        <h2>TITLE HEADING</h2>
        <h5>Title description, Dec 7, 2017</h5>
        <div className="fakeimg" style={{ height: 200 }}>
          Image
        </div>
        <p>Some text..</p>
      </div>
      <div className="card">
        <h2>TITLE HEADING</h2>
        <h5>Title description, Sep 2, 2017</h5>
        <div className="fakeimg" style={{ height: 200 }}>
          Image
        </div>
        <p>Some text..</p>
      </div>
    </div>
    <div className="column--right">
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
