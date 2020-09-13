import axios from 'axios';

/*export default {
  getTracks() {
    return axios.get('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=dea9ca7a7dd574410ce2fdb8b680bd4b&format=json');
  },
} */

/*const axios = require("axios");*/
export default {
  getTracks() {
    return axios({
      "method":"POST",
      "url":"https://lastfmdimashirokovv1.p.rapidapi.com/getTopTracksChart",
      "headers":{
      "content-type":"application/x-www-form-urlencoded",
      "x-rapidapi-host":"LastFmdimashirokovV1.p.rapidapi.com",
      "x-rapidapi-key":"2635c8007fmsh73392922060cd46p142163jsnac8c6899ba87",
      "useQueryString":true
      },"data":{
      "apiKey":"dea9ca7a7dd574410ce2fdb8b680bd4b"
      }
      })
      .then(response => {
        if(response.ok){
          return response.json()
      } else {
        console.log(response)
      }
    })
      .then(response => {
        this.result = response.data;  /*loved?*/
      })
      .catch((error)=>{
        console.log(error)
      })
    }
};

/*const params = new URLSearchParams();
params.append('id', tuavariabileID); // passo le variabili da passare via POST
params.append('test', tuavariabileTEST); // passo le variabili da passare via POST
axios.post('/url-post',params).then(function (response) {
console.log("OK");
})
.catch(function (error) {
  console.log("ERRORE");
});*/



/* login da completare, video: vue-material-project.1
export default {
  isAuthenticated() {
    return !!localStorage.getItem('username')   //"localStorage" permette di memorizzare i cache della pagina, così da non perdere i dati alla ricarica della pagina. "!!" converte la stringa in un buleano
  },
  login(username) {
    localStorage.getItem('username', username)
  }
}*/

/*export default {
  getTop50Global () {
    return axios.get('https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF');
  }
}*/
