<template>
  <div class="container col-sm-5">
    <router-link to="/">Home</router-link>
    <button class="btn btn-danger float-right mb-3" @click="logout" title="Log Out">LogOut</button>
    <br>
    <input
      type="text"
      v-model="movie"
      @keyup.enter="addMovie"
      class="form-control"
      placeholder="Enter Movie Name..."
    >
    <div class="showall">
      <ul class="my-4 list-group-flush bg-dark">
        <li v-for="(movieName,key) in movies" :key="key" class="list-group-item bg-warning">
          <span>{{movieName.name}}</span>
          <button class="btn btn-primary float-right bt" v-on:click="showme=!showme" title="Edit">
            <i class="fa fa-pencil" aria-hidden="true"></i>
          </button>
          <button class="btn btn-danger float-left bt" @click="deleteMovie(key)" title="Delete">
            <i class="fa fa-trash-o" aria-hidden="true"></i>
          </button>
          <input
            type="text"
            v-model="editform[key]"
            @keyup.enter="editMovie(key)"
            v-show="showme"
            placeholder="Enter New Name..."
            class="form-control"
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      movie: null,
      movies: [],
      editform: [],
      showme: false
    };
  },
  methods: {
    // method to add movie name
    addMovie() {
      firebase
        .database()
        .ref("movies")
        .push({ name: this.movie })
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    // Editting movie name
    editMovie(key) {
      firebase
        .database()
        .ref("movies/" + key)
        .set({
          name: this.editform[key]
        });
    },
    deleteMovie(key) {
      firebase
        .database()
        .ref("movies/" + key)
        .remove();
    }
  },
  // logout method
  logout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.$router.replace("/login");
      })
      .catch(e => {
        alert(e.message);
      });
  },
  // getting values
  created() {
    firebase
      .database()
      .ref("movies")
      .on("value", snapshot => {
        this.movies = snapshot.val();
      });
  }
};
</script>



<style scoped>
ul {
  list-style-type: none;
  border-radius: 15px;
}
.showall {
  font-size: 30px;
}
.bt {
  border-radius: 50%;
}
</style>
