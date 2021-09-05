import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [state, setState] = useState({
    apiResponse: "",
    body: "",
    subject: "",
    to: "",
  });

  const postBody = {
    to: state.to,
    subject: state.subject,
    body: state.body,
  };

  const requestMetadata = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postBody),
  };
  const requestMetadata1 = {
    method: "GET",
    headers: {
      "Content-Type": "application/pdf",
    },
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      fetch("http://localhost:9000/mail", requestMetadata)
        .then((res) => res.text())
        .then((res) => setState({ apiResponse: res }));

      setState({
        body: "",
        subject: "",
        to: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  // const showNotice = (e) => {
  //   e.preventDefault();
  //   fetch("http://localhost:9000/testAPI", requestMetadata1).then((res) =>
  //     console.log(res)
  //   );
  //   // .then((res) => res.blob())
  //   // .then((blob) => {
  //   //   const url = window.URL.createObjectURL(blob);
  //   //   window.open(url);
  //   // });

  //   // .then((res) => setState({ apiResponse: res }));
  // };

  const showNotice = () => {
    fetch(`http://localhost:9000/testAPI`, {
      method: "GET",
      headers: {
        "Content-Type": "application/pdf",
      },
    }).then(async (res) => {
      const blob = await res.blob();
      const file = new Blob([blob], { type: "application/pdf" });
      //Build a URL from the file
      const fileURL = URL.createObjectURL(file);
      //Open the URL on new Window
      window.open(fileURL);
    });
  };

  return (
    <div className="App">
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <input
          type="text"
          placeholder="to"
          name="to"
          onChange={handleChange}
          value={state.to}
        />
        <input
          type="text"
          placeholder="Subject"
          name="subject"
          onChange={handleChange}
          value={state.subject}
        />
        <input
          type="text"
          placeholder="Body of mail"
          name="body"
          onChange={handleChange}
          value={state.body}
        />
        <input type="submit" value="Submit" />
      </form>
      <p>{state.apiResponse}</p>
      <button onClick={showNotice}>click me to view notice</button>
    </div>
  );
};

export default App;
