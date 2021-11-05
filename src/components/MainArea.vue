<template>
  <div class="main">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4 topNav">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Movie List</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul class="navbar-nav me-auto my-2 my-lg-0 " style="--bs-scroll-height: 100px;">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Link
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Link</a>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>

    <MovieList :movies="movies" :order="order" />

  </div>
</template>

<script lang="ts">

import { defineComponent, ref } from 'vue';
import MovieList from './MovieList.vue'
import Movie from '../types/Movie'
import OrderTerm from '../types/OrderTerm'
import axios from 'axios'

export default defineComponent({
  name: 'MainArea',
  components: {
    MovieList
  },
  props: {
  },
  setup(){
    const movies = ref<Movie[]>([])

    const order = ref<OrderTerm>('Title')

    const handleClick = (term: OrderTerm) => {
      order.value = term
    }

    return { movies,  handleClick, order }
  },
  created(){
    axios.get('https://jsonmock.hackerrank.com/api/movies/search/')
    .then(res => {
      console.log(res.data);
      this.movies = [...res.data.data];
      console.log("movei ", this.movies)
    })
    .catch(error => {
      console.log("There was an error", error.response)
    })
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  flex:0.95;
  margin: 10px;
  padding: 40px;
  display: flex;
  flex-direction: column;
    border-left:2px solid #718496;
}


.movieContainer{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  /* margin-top: 50px; */
  margin-bottom: 120px;
}

section{
  width: 200px;
  height: 300px;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color:none;

}

section img {
  margin-bottom: 15px;
  background-color:none;
  max-width: 100%;
  max-height: 100%;
  display: block;

  box-shadow: 5px 3px 19px 3px rgba(0,0,0,0.75);
-webkit-box-shadow: 5px 3px 19px 3px rgba(0,0,0,0.75);
-moz-box-shadow: 5px 3px 19px 3px rgba(0,0,0,0.75);
}

section img:hover {
  transform: scale(1.1, 1.1);
  margin-bottom: 40px;
  /* background-color:none; */
  box-shadow: 0px 4px 19px 9px rgba(0,0,0,0.75);
-webkit-box-shadow: 0px 4px 19px 9px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 4px 19px 9px rgba(0,0,0,0.75);
}

section span {
  background-color: rgb(233, 122, 18);
  width: 50px;
  padding:5px;
  color:white;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  position: absolute;
  top: -15px;
  left: 70px;
}

section h3,p, img{
  background-color:transparent;
}

.topNav{
  display: none;
}

@media (max-width: 1240px){
  .topNav{
    display: flex;
  }
}

</style>
