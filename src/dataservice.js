import axios from 'axios';

export default {
  getTracks() {
    return axios.get('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=dea9ca7a7dd574410ce2fdb8b680bd4b&format=json');
  },
}


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
