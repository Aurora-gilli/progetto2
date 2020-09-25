//import axios from "axios";
import firebase from "@firebase/app";
import "@firebase/firestore";

firebase.initializeApp = {
    apiKey: "AIzaSyAwzS3vLAK7e32di78bHmVsDbduooXo7DE",
    authDomain: "progettoclassifiche.firebaseapp.com",
    databaseURL: "https://progettoclassifiche.firebaseio.com",
    projectId: "progettoclassifiche",
    storageBucket: "progettoclassifiche.appspot.com",
    messagingSenderId: "592011648722",
    appId: "1:592011648722:web:751df09f9026e40359d70b"
};
// Initialize Firebase


export default {
    getTracks(name) {
        let inputStr = "";
        if (name === '0')
            inputStr = "https://theaudiodb.p.rapidapi.com/mostloved.php?format=track";
        else
            inputStr = "https://theaudiodb.p.rapidapi.com/track-top10.php?s=" + name;
        return fetch(
            inputStr,
            {
                method: "GET",
                headers: {
                    "x-rapidapi-host": "theaudiodb.p.rapidapi.com",
                    "x-rapidapi-key": "2635c8007fmsh73392922060cd46p142163jsnac8c6899ba87"
                }
            }
        )
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
    modFavs(songId) {

        /* let db = firebase.firestore();
         //this.checkFavs(gameId, userId);
       //  let self = this;

         db.collection("favorites").doc(songId).delete().catch(function (error) {
             console.error("Errore nella rimozione del preferito: ", error);
         });*/
        console.log(songId)
    },
    isAuthenticated() {

        return !!localStorage.getItem("username");
        //"localStorage" permette di memorizzare i cache della pagina, cosÃ¬ da non perdere i dati alla ricarica della pagina. "!!" converte la stringa in un booleano
    },
    login(username) {
        firebase.auth();
        localStorage.setItem("username", username);
    },
    logout() {
        firebase.auth().signOut().then(() => {
            this.$router.replace({
                path: "/login"
            });
        });
        localStorage.removeItem("username");
    }
};
