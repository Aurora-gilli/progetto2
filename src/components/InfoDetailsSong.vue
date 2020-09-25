<template>
  <div class="md-layout md-gutter">
    <div class="md-layout-item">
      <md-toolbar :md-elevation="1">
        <span class="md-title">Dettagli</span>
      </md-toolbar>
      <md-list class="md-double-line">
        <!--<div class="md-title">Dettagli</div><br/>-->
        <md-subheader>Titolo</md-subheader>

        <md-list-item>
          <div class="md-list-item-text">
            <span>{{ title }}</span>
          </div>
        </md-list-item>

        <md-divider></md-divider>
        <md-subheader>Artista</md-subheader>

        <md-list-item>
          <div class="md-list-item-text">
            <span>{{ artist }}</span>
          </div>
        </md-list-item>

        <md-divider></md-divider>
        <md-subheader>Album</md-subheader>

        <md-list-item>
          <div class="md-list-item-text">
            <span>{{ album }}</span>
          </div>
        </md-list-item>

        <md-divider></md-divider>
        <md-subheader>Genere</md-subheader>

        <md-list-item>
          <div class="md-list-item-text">
            <span>{{ genere }}</span>
          </div>
        </md-list-item>

        <md-divider></md-divider>

        <md-list-item>
          <div class="md-list-item-text">
            <span>Preferiti</span>
          </div>
          <md-button
            class="md-icon-button"
            @click.prevent
            @click="myFavorites(id)"
          >
            <md-icon v-if="myIcon">favorite</md-icon>
            <md-icon v-else>favorite_border</md-icon>
          </md-button></md-list-item
        >
        <md-divider></md-divider>

        <md-list-item>
          <img :src="img" />
        </md-list-item>
      </md-list>
    </div>
    <div class="md-layout-item">
      <md-toolbar :md-elevation="1">
        <span class="md-title">Descrizione</span>
      </md-toolbar>
      <md-list class="md-double-line">
        <span>{{ description }}</span>
      </md-list>
    </div>
  </div>
</template>

<script>
import firebase from "@firebase/app";
import "@firebase/firestore";
import ls from "local-storage";

export default {
  props: [
    "id",
    "artist",
    "title",
    "img",
    "genere",
    "description",
    "album",
    "fav",
  ],
  data: function () {
    return {
      myIcon: this.fav,
      favs: [],
    };
  },
  created() {
    let self = this;
    let db = firebase.firestore();
    let username = ls("username");

    db.collection(username)
      .get()
      .then(function (doc) {
        //console.log(doc);
        if (!doc.empty) {
          self.favs = doc.docs.map((doc) => {
            // console.log(doc)
            return doc.id;
          });

          // console.log(self.favs);
          // console.log(self.songList);

          self.favs.forEach((element, id) => {
            // console.log(self.songList[id])
            // eslint-disable-next-line no-prototype-builtins
            if (self.favs.indexOf(self.id) > -1) {
              // console.log("here")
              // console.log(self.songList[id])
              self.myIcon = true;
            } else {
              self.myIcon = false;
            }
          });
        } else {
          console.log("No songs");
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });

    this.$forceUpdate();
  },
  methods: {
    myFavorites(id) {
      this.myIcon = !this.myIcon;
      //this.myIcon = !this.myIcon;
      let db = firebase.firestore();
      if (this.myIcon) {
        db.collection(ls("username"))
          .doc(id)
          .set({})
          .then(function () {
            console.log("Document successfully added!");
          })
          .catch(function (error) {
            console.error("Error adding document: ", error);
          });
      } else {
        db.collection(ls("username"))
          .doc(id)
          .delete()
          .then(function () {
            console.log("Document successfully removed!");
          })
          .catch(function (error) {
            console.error("Error removing document: ", error);
          });
        // this.$forceUpdate()
      }
    },
  },
};
</script>

<style lang="scss" scoped>
//inserire scss
.md-layout-item {
  &:after {
    width: 100%;
    height: 100%;
    display: block;
    content: " ";
  }
}
</style>
