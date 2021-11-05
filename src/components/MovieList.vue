<template>

  <transition-group name="list" v-if="movies.length" tag="div" class="container d-flex flex-wrap align-content-between movieContainer justify-content-evenly align-items-center">
    <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4 my-5" v-for="movie in orderedMovies" :key="movie.imdbID" data-bs-toggle="tooltip" data-bs-placement="top" title="Click to add/remove from favourite list">
      <section @click="saveFavourite(movie)">
        <img src="../assets/temp1.jpg" />
        <span>{{ movie.Year }}</span>
        <h3><b class="text-light">Title: </b>{{ (movie.Title).slice(0,25) }}</h3>
        <h3><b class="text-light">imdbID:</b> {{ movie.imdbID }}</h3>
      </section>
    </div>
  </transition-group>
  <transition-group name="list" v-else tag="div" class="row movieContainer justify-content-center">
    <p>Loading movies...</p>
  </transition-group>

</template>

<script lang="ts">

  import {  defineComponent, computed, PropType, ref } from 'vue'
  import '@ocrv/vue-tailwind-pagination/dist/style.css'
  import VueTailwindPagination from '@ocrv/vue-tailwind-pagination'
  import Movie from '@/types/Movie'
  import OrderTerm from '@/types/OrderTerm'

  export default defineComponent({
    name: 'MovieList',
    props: {
      movies: {
        required: true,
        type: Array as PropType<Movie[]>
      },
      order: {
        required: true,
        type: String as PropType<OrderTerm>
      },
      page: {
        required: true,
        type: Number
      },
      favourite: {
        required: true,
        type: Boolean
      }
    },
    setup(props) {
      const favouriteMovies = ref<Movie[]>([])

      //order movie list
      let orderedMovies = computed(() => {
        if (props.favourite == true) {
          const favMovie = [...favouriteMovies.value]
          return [...favMovie].sort((a: Movie, b: Movie) => {
            return a[props.order] > b[props.order] ? 1 : -1
          })
        } else {
          return [...props.movies].sort((a: Movie, b: Movie) => {
            return a[props.order] > b[props.order] ? 1 : -1
          })
        }
      })

      //save favourite in localstorage
      let saveFavourite = selectedMovie => {
        const exists = favouriteMovies.value.filter(selection => selection.imdbID == selectedMovie.imdbID)
        if (exists.length < 1) {
          favouriteMovies.value.push(selectedMovie)
        } else {
          //remove from favourite
          const newFav = favouriteMovies.value.filter(selection => selection.imdbID !== selectedMovie.imdbID)
          favouriteMovies.value = [...newFav]
        }
        //save favourite to localstorage
        localStorage.favourite = JSON.stringify(favouriteMovies.value)
      }

      return {
        orderedMovies,
        saveFavourite,
        favouriteMovies
      }
    },
    mounted() {
      if (localStorage.favourite) {
        //get favourite movies from localstorage
        this.favouriteMovies = JSON.parse(localStorage.favourite)
      }
    }
  })

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .movieContainer {
    display: flex;
    flex-direction: colum;
    min-width: 500px;
    margin-bottom: 120px;
  }

  section {
    width: 200px;
    height: 300px;
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: none;
  }

  section img {
    margin-bottom: 15px;
    background-color: none;
    max-width: 100%;
    max-height: 100%;
    display: block;

    box-shadow: 5px 3px 19px 3px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 5px 3px 19px 3px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 5px 3px 19px 3px rgba(0, 0, 0, 0.75);
  }

  section img:hover {
    transform: scale(1.1, 1.1);
    margin-bottom: 40px;
    /* background-color:none; */
    box-shadow: 0px 4px 19px 9px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 4px 19px 9px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 4px 19px 9px rgba(0, 0, 0, 0.75);
  }

  section span {
    background-color: rgb(233, 122, 18);
    width: 50px;
    padding: 5px;
    color: white;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    position: absolute;
    top: -15px;
    left: 70px;
  }

  h3 {
    font-size: 1em;
  }

  section h3,
  p,
  img {
    background-color: transparent;
  }

  .topNav {
    display: none;
  }

  .list-move {
    transition: all 1s;
  }

  .tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}

  @media (max-width: 1240px) {
    .topNav {
      display: flex;
    }
  }

  @media (max-width: 628px) {
  .movieContainer {
    display: flex;
    flex-direction: row;
    justify-content: content;
    overflow: horizontal;
    margin-bottom: 120px;
  }
  }

</style>
