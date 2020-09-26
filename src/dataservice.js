import firebase from "@firebase/app";
import "@firebase/firestore";
import "@firebase/auth"


// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: "AIzaSyD3ivogMCcaxLQy4y2mmeaSO8Kt8k3Bg-w",
  authDomain: "info2020-d0124.firebaseapp.com",
  databaseURL: "https://info2020-d0124.firebaseio.com",
  projectId: "info2020-d0124",
  storageBucket: "info2020-d0124.appspot.com",
  messagingSenderId: "180218474931",
  appId: "1:180218474931:web:f171704b3c7c0a528edbc6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();

export default {
  getTracks(name) {
    let inputStr = "";
    if (name === "0")
      inputStr = "https://theaudiodb.p.rapidapi.com/mostloved.php?format=track";
    else
      inputStr = "https://theaudiodb.p.rapidapi.com/track-top10.php?s=" + name;
    return fetch(inputStr, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "theaudiodb.p.rapidapi.com",
        "x-rapidapi-key": "2635c8007fmsh73392922060cd46p142163jsnac8c6899ba87"
      }
    })
      .then((response) => {
        // console.log("input:"+inputStr)
        if (response.ok) {
          //console.log(response.json())
          return response.json();
        } else {
          alert(
            "Server returned " + response.status + " : " + response.statusText
          );
        }
      })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  getDetailsSong(id) {
    return fetch("https://theaudiodb.p.rapidapi.com/track.php?h=" + id, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "theaudiodb.p.rapidapi.com",
        "x-rapidapi-key": "2635c8007fmsh73392922060cd46p142163jsnac8c6899ba87"
      }
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          alert(
            "Server returned " + response.status + " : " + response.statusText
          );
        }
      })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  isAuthenticated() {
    return !!localStorage.getItem("username");
    //"localStorage" permette di memorizzare i cache della pagina, cosÃ¬ da non perdere i dati alla ricarica della pagina. "!!" converte la stringa in un booleano
  },
  login(username) {
    username = username.trim();
    require("firebase/auth")

    username += "@fakemail.com";

    firebase
      .auth()
      .signInWithEmailAndPassword(username, "dummypassword")
      .then(function () {
        console.log("Login successful");
      })
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(username, "dummypassword")
          .then((data) => {
            data.user
              .updateProfile({
                displayName: username.substr(0, -13),
                email: username
              })
              .then(function () {
                console.log("Utente aggiunto con successo");
                db.collection(username)
                  .add("dummy")
                  .then(() => {
                    console.log("raccolta creata con successo");
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              })
              .catch(function (error) {
                console.error("Error writing document: ", error);
              });
          });
      })
      .catch((err) => {
        console.log(err);
      });
    localStorage.setItem("username", username);
  },
  logout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        //quando avviene il logout dice che replace è undefine
        console.log("logout avvenuto con successo");
      });
    localStorage.removeItem("username");
  }
};
