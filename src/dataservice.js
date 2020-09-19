//import axios from "axios";

export default {
  getTracks() {
    return fetch("https://theaudiodb.p.rapidapi.com/mostloved.php?format=track", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "theaudiodb.p.rapidapi.com",
        "x-rapidapi-key": "2635c8007fmsh73392922060cd46p142163jsnac8c6899ba87"
      }
    })
    .then(response => {
      if(response.ok) {
        return response.json()
      } else {
        alert("Server returned " + response.status + " : " + response.statusText);
      }
    })
    .then(response => {
      return response;
    })
    .catch(err => {
      console.log(err);
    });
  },
  getCurrentTrending() {
    return fetch("https://theaudiodb.p.rapidapi.com/trending.php?country=us&type=itunes&format=singles", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "theaudiodb.p.rapidapi.com",
        "x-rapidapi-key": "2635c8007fmsh73392922060cd46p142163jsnac8c6899ba87"
      }
    })
    .then(response => {
      if(response.ok) {
        return response.json()
      } else {
        alert("Server returned " + response.status + " : " + response.statusText);
      }
    })
    .then(response => {
      return response;
    })
    .catch(err => {
      console.log(err);
    });
  },
  getAlbums() {
    return fetch("https://theaudiodb.p.rapidapi.com/mostloved.php?format=album", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "theaudiodb.p.rapidapi.com",
        "x-rapidapi-key": "2635c8007fmsh73392922060cd46p142163jsnac8c6899ba87"
      }
    })
    .then(response => {
      if(response.ok) {
        return response.json()
      } else {
        alert("Server returned " + response.status + " : " + response.statusText);
      }
    })
    .then(response => {
      return response;
    })
    .catch(err => {
      console.log(err);
    });
  },
  getDetailsSong(id){
    return fetch("https://theaudiodb.p.rapidapi.com/track.php?h=" + id, {
      "method": "GET",
      "headers": {
      "x-rapidapi-host": "theaudiodb.p.rapidapi.com",
      "x-rapidapi-key": "2635c8007fmsh73392922060cd46p142163jsnac8c6899ba87"
      }
    })
    .then(response => {
      if(response.ok) {
        return response.json()
      } else {
        alert("Server returned " + response.status + " : " + response.statusText);
    }
    })
      .then(response => {
        return response;
      })
      .catch(err => {
        console.log(err);
      });
  },
  getDetailsAlbum(id){
    return fetch("https://theaudiodb.p.rapidapi.com/album.php?m=" + id, {
        "method": "GET",
        "headers": {
        "x-rapidapi-host": "theaudiodb.p.rapidapi.com",
        "x-rapidapi-key": "2635c8007fmsh73392922060cd46p142163jsnac8c6899ba87"
        }
      })
      .then(response => {
        if(response.ok) {
          return response.json()
        } else {
          alert("Server returned " + response.status + " : " + response.statusText);
      }
      })
      .then(response => {
        return response;
      })
      .catch(err => {
        console.log(err);
      });
    },
  isAuthenticated() {
    return !!localStorage.getItem("username"); //"localStorage" permette di memorizzare i cache della pagina, così da non perdere i dati alla ricarica della pagina. "!!" converte la stringa in un buleano
  },
  login(username) {
    localStorage.setItem("username", username);
  },
  logout() {
    localStorage.removeItem("username");
  }
};
