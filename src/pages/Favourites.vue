<template>
  <div class="md-layout md-gutter">
    <div v-for="song in songList" :key="song.id">
      <card-song :artist="song.artist" :title="song.title" :id="song.id" :img="song.img" :fav="song.fav" class="md-layout-item"></card-song>
    </div>
  </div>
</template>

<script>

import "@firebase/app";
import firebase from "@firebase/app";
import "@firebase/firestore";



export default {
  data: function() {
    return {
      songList: [],


    }
  },
  created: function() {
    console.clear();

    this.myFavorites();


  },
  methods:{

    myFavorites() {
      let self = this;
      let db = firebase.firestore();
      const axios = require("axios");

      db.collection("favorites").get().then(function (doc) {
        //console.log(doc);
        if (!doc.empty) {
          let favs = doc.docs.map(doc => doc.data());
          favs.forEach((el,k)=>{
            axios({
              "method":"GET",
              "url":"https://theaudiodb.p.rapidapi.com/track.php",
              "headers":{
                "content-type":"application/octet-stream",
                "x-rapidapi-host":"theaudiodb.p.rapidapi.com",
                "x-rapidapi-key":"ff181d89camsh67956584e954cbfp1439ecjsndf04306f2cbe",
                "useQueryString":true
              },"params":{
                "h":k.toString()
              }
            })
                .then((response)=>{
                  self.songList.concat(response)
                })
                .catch((error)=>{
                  console.log(error)
                })
          })
        } else {
          console.log("No songs");
        }
      }).catch(function (error) {
        console.log("Error getting document:", error);
      });

      // this.$forceUpdate()
    }
  }
};


const axios = require("axios");

axios({
  "method":"GET",
  "url":"https://theaudiodb.p.rapidapi.com/track.php",
  "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"theaudiodb.p.rapidapi.com",
    "x-rapidapi-key":"ff181d89camsh67956584e954cbfp1439ecjsndf04306f2cbe",
    "useQueryString":true
  },"params":{
    "h":"32793500"
  }
})
    .then((response)=>{
      console.log(response)
    })
    .catch((error)=>{
      console.log(error)
    })
</script>

<style>
</style>
