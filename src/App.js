import React, { useState, useEffect } from "react";
import database from "./firebase";
import firebase from "firebase";

import "./App.css";

const App = () => {
  const [input, Setinput] = useState("");
  const [values, Setvalues] = useState([]);

  useEffect(() => {
    database
      .collection("todo")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        Setvalues(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);
  function deletedata (value){
    database.collection("todo").doc(value).delete()
  }

  function kaydetdatabase(value) {
    database.collection("todo").add({
      messages: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    Setinput("");
  }

  return (
    <div className="App">
      <header>
        <input
          type="text"
          placeholder="veri"
          value={input}
          onChange={(e) => Setinput(e.target.value)}
        />
        <button disabled={!input} onClick={() => kaydetdatabase(input)}>
          Veri Kaydet
        </button>
      </header>
      <div className="messages">
        {values.map((item) => (
          <ul>
            <li>
              {item.data.messages}{" "}
              <div>
                <button onClick={()=>deletedata(item.id)}>Delete</button>
                
              </div>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default App;
