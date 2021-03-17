import React from "react"
import { useEffect, useState } from "react"
import "./App.css"
// import banner from ""

function App() {
  const [date, setDate] = useState(null)
  useEffect(() => {
    async function getDate() {
      const res = await fetch("/api/date")
      const newDate = await res.text()
      setDate(newDate)
    }
    getDate()
  }, [])
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        // justifyContent: "center",
        // textAlign: "center",
        flexWrap: "wrap",
      }}
    >
      {/* <div style={{ display: "flex" }}> */}
      <div
        style={{
          width: "90%",
          height: "120px",
          backgroundColor: "darkorange",
          margin: "0 40px",
        }}
      ></div>
      <div
        style={{
          width: "90%",
          height: "40px",
          backgroundColor: "darkblue",
          margin: "0 40px",
          display: "flex",
          justifyContent: "space-between",
          padding: "0, 50px",
        }}
      >
        <div style={{ fontSize: "24px", color: "white", marginLeft: "100px" }}>
          Home
        </div>
        <div style={{ fontSize: "24px", color: "white" }}>About</div>
        <div style={{ fontSize: "24px", color: "white" }}>รายการสินค้า</div>
        <div style={{ fontSize: "24px", color: "white", marginRight: "100px" }}>
          Call 088-2923774
        </div>
      </div>
      <div
        style={{
          // margin: "0 5%",
          width: "90%",
          padding: "50px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          // backgroundColor: "green",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            width: "75%",
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            backgroundColor: "lightgreen",
          }}
        >
          {/* <div style={{ display: "flex", justifyContent: "center" }}> */}
          <ul>
            <li>รถเสียแต่ไม่รู้จะหาอะไหล่ที่ไหน</li>
            <li>ซ่อมศูนย์เสียแพงไปไหม</li>
            <li>ไม่ไว้ใจอะไหล่ที่อู่นำมาใช้</li>
          </ul>
          <img src="img/Slide1.JPG" alt="" />
          {/* </div> */}
        </div>
      </div>
      {/* </div> */}
    </div>

    // <main>
    //   <div> Add some text</div>
    //   <h1>Create React App + Go API</h1>
    //   <h2>
    //     Deployed with{" "}
    //     <a
    //       href="https://vercel.com/docs"
    //       target="_blank"
    //       rel="noreferrer noopener"
    //     >
    //       Vercel
    //     </a>
    //     !
    //   </h2>
    //   <p>
    //     <a
    //       href="https://github.com/vercel/vercel/tree/master/examples/create-react-app"
    //       target="_blank"
    //       rel="noreferrer noopener"
    //     >
    //       This project
    //     </a>{" "}
    //     was bootstrapped with{" "}
    //     <a href="https://facebook.github.io/create-react-app/">
    //       Create React App
    //     </a>{" "}
    //     and contains three directories, <code>/public</code> for static assets,{" "}
    //     <code>/src</code> for components and content, and <code>/api</code>{" "}
    //     which contains a serverless <a href="https://golang.org/">Go</a>{" "}
    //     function. See{" "}
    //     <a href="/api/date">
    //       <code>api/date</code> for the Date API with Go
    //     </a>
    //     .
    //   </p>
    //   <br />
    //   <h2>The date according to Go is:</h2>
    //   <p>{date ? date : "Loading date..."}</p>
    // </main>
  )
}

export default App
