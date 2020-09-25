<template>
  <div>
    <md-card>
      <router-link :to="'/details/' + id">
      <md-card-media-cover md-solid>
        <md-card-media md-ratio="1:1">
          <img :src="img">
        </md-card-media>

        <md-card-area>
          <md-card-header>
            <span class="md-title">{{title}}</span>
            <span class="md-subhead">{{artist}}</span>
          </md-card-header>

          <md-card-actions>
            <md-button class="md-icon-button" @click.prevent @click="myFavorites(id,fav)">
              <md-icon v-if="fav" >favorite</md-icon>
              <md-icon v-else>favorite_border</md-icon>
            </md-button>
          </md-card-actions>
        </md-card-area>
      </md-card-media-cover>
      </router-link>
    </md-card>
  </div>
</template>

<script>
import firebase from "@firebase/app";
import "@firebase/firestore";
export default {
   name: 'MediaCover',
  props: ["artist", "title", "id", "img","fav"],
  /*data: function() {
    return {
     myIcon:true
    };
  },*/
  methods:{
     myFavorites(id,fav) {

       //this.myIcon = !this.myIcon;
       let db = firebase.firestore();
       if(!fav){
        db.collection("favorites").doc(id).set({}).then(function () {
          console.log("Document successfully added!");
        }).catch(function (error) {
          console.error("Error adding document: ", error);
        });
      }
      else
      {
        db.collection("favorites").doc(id).delete().catch(function (error) {
          console.error("Error removing document: ", error);
        });
        // this.$forceUpdate()
      }

     }
  }
}
</script>

<style lang="scss" scoped>
  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>
