<template>

  <transition-group name="list" v-if="movies.length" tag="div" class="row movieContainer justify-content-center">
    <div class="col-sm-6 col-md-4 col-lg-3 my-5 mx-auto" v-for="movie in orderedMovies" :key="movie.imdbID">
      <section @click="saveFavourite(movie)">
        <img src="../assets/ade5.jpg" />
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

  import { computed, defineComponent, PropType, ref } from 'vue'
  import '@ocrv/vue-tailwind-pagination/dist/style.css'
  import VueTailwindPagination from '@ocrv/vue-tailwind-pagination'
  import Movie from '@/types/Movie'
  import OrderTerm from '@/types/OrderTerm'
  // import MovieService from '../services/MovieService'
  export default defineComponent({
    name: 'MovieList',
    components: {},
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
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
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

  @media (max-width: 1240px) {
    .topNav {
      display: flex;
    }
  }

</style>
