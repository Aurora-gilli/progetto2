<template>
  <div>
    <md-card>
      <router-link :to="'/details/' + id">
        <md-card-media-cover md-solid>
          <md-card-media md-ratio="1:1">
            <img :src="img" />
          </md-card-media>

          <md-card-area>
            <md-card-header>
              <span class="md-title">{{ title }}</span>
              <span class="md-subhead">{{ artist }}</span>
            </md-card-header>

            <md-card-actions>
              <md-button
                class="md-icon-button"
                @click.prevent
                @click="myFavorites(id)"
              >
                <md-icon v-if="myIcon">favorite</md-icon>
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
import ls from "local-storage";

export default {
  name: "MediaCover",
  props: ["artist", "title", "id", "img", "fav"],
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

          self.favs.forEach((element) => {
            console.log(element)

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
.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
</style>
