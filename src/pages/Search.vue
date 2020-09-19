<template>
  <div>
    <form class="md-layout">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Pagina di ricerca</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="first-name">Titolo</label>
                <md-input name="first-name" id="first-name" autocomplete="given-name" /> <!-- v-model="form.firstName" -->
                <!--<span class="md-error" v-if="!$v.form.firstName.required">Campo obligatorio</span>-->
                <!--<span class="md-error" v-else-if="!$v.form.firstName.minlength">Nome non trovato</span>-->
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="last-name">Autore</label>
                <md-input name="last-name" id="last-name" autocomplete="family-name" /><!--v-model="form.lastName"-->
                <!--<span class="md-error" v-if="!$v.form.lastName.required">Campo obligatorio</span>-->
                <!--<span class="md-error" v-else-if="!$v.form.lastName.minlength">Nome non trovato</span>-->
              </md-field>
            </div>
          </div>
        </md-card-content>

        <!--<md-progress-bar md-mode="indeterminate" v-if="sending"/> -->

        <md-card-actions>
          <md-button type="submit" class="md-primary">Cerca</md-button>
        </md-card-actions>
      </md-card>
    </form>
  </div>
</template>

<script>
  export default {
    /*data: () => ({
      form: {
        firstName: null,
        lastName: null,
      }
    }),
    methods: {
      clearForm () {
        this.$v.$reset()
        this.form.firstName = null
        this.form.lastName = null
        this.form.age = null
        this.form.gender = null
        this.form.email = null
      }
    }*/
  }
</script>

<!--
<style lang="scss" scoped>
  .md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }
</style>-->
