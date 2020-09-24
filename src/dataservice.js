//import axios from "axios";

export default {
  getTracks() {
    return fetch(
      "https://theaudiodb.p.rapidapi.com/mostloved.php?format=track",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "theaudiodb.p.rapidapi.com",
          "x-rapidapi-key": "2635c8007fmsh73392922060cd46p142163jsnac8c6899ba87"
        }
      }
    )
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
  getCurrentTrending() {
    return fetch(
      "https://theaudiodb.p.rapidapi.com/trending.php?country=us&type=itunes&format=singles",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "theaudiodb.p.rapidapi.com",
          "x-rapidapi-key": "2635c8007fmsh73392922060cd46p142163jsnac8c6899ba87"
        }
      }
    )
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
  getTopTaylor() {
    return fetch(
      "https://theaudiodb.p.rapidapi.com/track-top10.php?s=taylor%20swift",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "theaudiodb.p.rapidapi.com",
          "x-rapidapi-key": "2635c8007fmsh73392922060cd46p142163jsnac8c6899ba87"
        }
      }
    )
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
  getTopOneDirection() {
    return fetch(
      "https://theaudiodb.p.rapidapi.com/track-top10.php?s=one%20direction",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "theaudiodb.p.rapidapi.com",
          "x-rapidapi-key": "2635c8007fmsh73392922060cd46p142163jsnac8c6899ba87"
        }
      }
    )
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
  getTopKendrickLamar() {
    return fetch(
      "https://theaudiodb.p.rapidapi.com/track-top10.php?s=Kendrick%20Lamar",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "theaudiodb.p.rapidapi.com",
          "x-rapidapi-key": "2635c8007fmsh73392922060cd46p142163jsnac8c6899ba87"
        }
      }
    )
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
  getTopKatyPerry() {
    return fetch(
      "https://theaudiodb.p.rapidapi.com/track-top10.php?s=Katy%20Perry",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "theaudiodb.p.rapidapi.com",
          "x-rapidapi-key": "2635c8007fmsh73392922060cd46p142163jsnac8c6899ba87"
        }
      }
    )
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
  getTopLadyGaga() {
    return fetch(
      "https://theaudiodb.p.rapidapi.com/track-top10.php?s=Lady%20Gaga",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "theaudiodb.p.rapidapi.com",
          "x-rapidapi-key": "2635c8007fmsh73392922060cd46p142163jsnac8c6899ba87"
        }
      }
    )
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
  getTopNickiMinaj() {
    return fetch(
      "https://theaudiodb.p.rapidapi.com/track-top10.php?s=Nicki%20Minaj",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "theaudiodb.p.rapidapi.com",
          "x-rapidapi-key": "2635c8007fmsh73392922060cd46p142163jsnac8c6899ba87"
        }
      }
    )
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
  getTopAdele() {
    return fetch("https://theaudiodb.p.rapidapi.com/track-top10.php?s=Adele", {
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
  getTopColdplay() {
    return fetch(
      "https://theaudiodb.p.rapidapi.com/track-top10.php?s=coldplay",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "theaudiodb.p.rapidapi.com",
          "x-rapidapi-key": "2635c8007fmsh73392922060cd46p142163jsnac8c6899ba87"
        }
      }
    )
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
    return !!localStorage.getItem("username"); //"localStorage" permette di memorizzare i cache della pagina, cosÃ¬ da non perdere i dati alla ricarica della pagina. "!!" converte la stringa in un buleano
  },
  login(username) {
    localStorage.setItem("username", username);
  },
  logout() {
    localStorage.removeItem("username");
  }
};
