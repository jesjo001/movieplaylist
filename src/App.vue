<template>
  <div class="app">
    <header>
      <div class="userArea">
        <h2 class="text-light">Movie List</h2>
      </div>
      <div class="navContainer">
        <ul class="ulist">
          <li><a href="#" @click="getAll">All</a></li>
          <li><a href="#" @click="showFavourites">Favorite</a></li>
        </ul>
        <form class="d-flex flex-column px-4" @submit.prevent="searchApi">
          <input
            class="form-control me-2 mb-4"
            type="search"
            placeholder="Search"
            v-model="searchTerm"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>

      <div class="navContainer">
        <div class="sideTitle">Sort By</div>
        <ul class="ulist">
          <li><a href="#" @click="handleClick('Title')">Title</a></li>
          <li><a href="#" @click="handleClick('Year')">Year</a></li>
          <li><a href="#" @click="handleClick('imdbID')">imdbID</a></li>
          <li><a href="#">Favorite</a></li>
        </ul>
      </div>
    </header>
    <div class="main">
      <nav
        class="navbar navbar-expand-md navbar-dark bg-dark mb-4 topNav"
        id="topNav2"
      >
        <div class="container">
          <a class="navbar-brand" href="#">Movie List</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarScroll">
            <ul
              class="navbar-nav me-auto my-2 my-lg-0"
              style="--bs-scroll-height: 100px"
            >
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" @click="getAll">All</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" @click="showFavourites"
                  >Favourite</a
                >
              </li>
            </ul>
            <form class="d-flex" @submit.prevent="searchApi">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                v-model="searchTerm"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <MovieList
        :movies="movies"
        :order="order"
        :page="page"
        :favourite="favourite"
        :loading="loading"
      />

      <Error v-if="error" />
      <div
        class="
          pagination
          container
          d-flex
          flex-wrap
          align-content-between
          movieContainer
          justify-content-evenly
          align-items-center
        "
        id="sectionColor"
      >
        <VueTailwindPagination
          :current="page"
          :total="totalPages"
          :per-page="perPage"
          @page-changed="getpaginated($event)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import MovieList from "./components/MovieList.vue";
import Error from "./components/Error.vue";
import VueTailwindPagination from "@ocrv/vue-tailwind-pagination";
import Movie from "./types/Movie";
import OrderTerm from "./types/OrderTerm";
import MovieService from "./services/MovieService.js";

export default defineComponent({
  name: "App",
  components: {
    MovieList,
    VueTailwindPagination,
    Error,
  },
  props: {},
  setup() {
    const movies = ref<Movie[]>([]);
    const order = ref<OrderTerm>("Title");
    const searchTerm = ref<string>("");
    const favourite = ref<boolean>(false);
    const loading = ref<boolean>(true);
    const page = ref<number>(1);
    const error = ref<boolean>(false);
    const errorMsg = ref<string>("");
    const statusCode = ref<number>(0);
    const totalPages = ref<number>(10);
    const favouriteMovies = ref<Movie[]>([]);
    // const perPage = ref<number>(10)

    const handleClick = (term: OrderTerm) => {
      order.value = term;
    };

    const showFavourites = () => {
      favourite.value = !favourite.value;
    };

    const searchApi = (e) => {
      handleSearch(searchTerm.value, page.value);
    };

    const handleSearch = (name: string, page: number) => {
      loading.value = true;
      favourite.value = false;
      movies.value = [];
      MovieService.searchTitle(name, page)
        .then((res) => {
          statusCode.value = res.status;
          if (statusCode.value >= 200 && statusCode.value < 300) {
            movies.value = [...res.data.data];
            page = res.data.page;
            totalPages.value = res.data.total_pages;
            searchTerm.value = "";
          } else {
            movies.value = [];
          }
          // page = res.data.page;

          error.value = res.status >= 500;
        })
        .catch((error) => {
          console.log("There was an error", error.response);
        });
      loading.value = false;
    };

    const getAll = () => {
      //initialize the values
      loading.value = true;
      favourite.value = false;
      movies.value = [];

      MovieService.getPaginated(page)
        .then((res) => {
          statusCode.value = res.status;
          if (statusCode.value >= 200 && statusCode.value < 300) {
            movies.value = [...res.data.data];
            page.value = res.data.page;
          } else {
            movies.value = [];
          }
          searchTerm.value = "";
          error.value = res.status >= 500;
        })
        .catch((error) => {
          console.log("There was an error", error.response);
        });
      loading.value = false;
    };

    const getpaginated = (event) => {
      loading.value = true;
      movies.value = [];
      MovieService.getPaginated(event)
        .then((res) => {
          statusCode.value = res.status;
          if (statusCode.value >= 200 && statusCode.value < 300) {
            movies.value = [...res.data.data];
            page.value = res.data.page;
          } else {
            movies.value = [];
          }
          searchTerm.value = "";
          error.value = res.status >= 500;
        })
        .catch((error) => {
          console.log("There was an error", error.response);
        });
      loading.value = false;
    };

    return {
      movies,
      handleClick,
      favourite,
      searchApi,
      order,
      searchTerm,
      page,
      totalPages,
      getAll,
      getpaginated,
      showFavourites,
      statusCode,
      loading,
      error,
      favouriteMovies
    };
  },
  mounted() {
    this.loading = true;
    MovieService.getMovies()
      .then((res) => {
        console.log("resonse", res);
        console.log(res.data);
        this.statusCode = res.status;
        if (this.statusCode >= 200 && this.statusCode < 300) {
          this.movies = [...res.data.data];
        } else {
          this.movies = [];
        }

        this.error = res.status >= 500;
        this.page = res.data.page;
        this.totalPages = res.data.total_pages;
      })
      .catch((error) => {
        console.log("There was an error", error.response);
      });
    this.loading = false;

    if (localStorage.favourite) {
        //get favourite movies from localstorage
        this.favouriteMovies = JSON.parse(localStorage.favourite)
      }
  },
});
</script>

<style >
.app {
  display: flex;
  flex-direction: row;
  min-width: 500px;
}

.topNav {
  display: none;
}

header {
  margin-top: 20px;
  flex: 0.13;
  /* border-right:2px solid #718496; */
  display: flex;
  flex-direction: column;
  font-family: "Dancing Script", cursive;
  font-size: 1.5em;
}

.userArea {
  display: flex;
  justify-content: center;
  margin: 20px;
}

.navContainer {
  display: flex;
  flex-direction: column;
  margin: 0px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 0px;
  width: 100%;
  justify-content: center;
}

.sideTitle {
  color: white;
  padding: 10px;
  padding-left: 50px;
  border-top: 1px solid #718496;
  /* border-bottom:1px solid #718496; */
  margin-bottom: 10px;
}

.ulist {
  list-style: none;
  text-decoration: none;
  margin-left: 20px;
  padding-left: 10px;
}

.ulist li {
  padding-bottom: 10px;
  padding-left: 0px;
  padding-right: 0px;
  width: 110%;
}

.ulist li a {
  list-style: none;
  padding: 10px;
  text-decoration: none;
  max-width: 400px;
  color: #718496;
}

.ulist li a:hover {
  /* background-color:#718496; */
  color: white;
  max-width: 400px;
}

.main {
  flex: 0.95;
  margin: 10px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  border-left: 2px solid #718496;
}

.movieContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  /* margin-top: 50px; */
  margin-bottom: 120px;
}

#sectionColor {
  background-color: white;
  width: 700px;
}

#sectionColor section ul {
  background-color: white;
  width: 700px;
}

#sectionColor section ul li,
section ul li a,
section ul li a div,
section ul li a div span,
svg {
  background-color: white;
}

.pagination div,
.pagination div span,
.pagination div input {
  background-color: white;
}

#topNav2 {
  display: none;
}
@media (max-width: 966px) {
  #sectionColor {
    min-width: 300px;
    padding: 0px;
    margin: 0px;
  }

  #sectionColor section ul {
    width: 300px;
  }
}

@media (max-width: 1240px) {
  .topNav {
    display: flex;
  }
}

@media (max-width: 1420px) {
  header {
    display: none;
    margin-top: 20px;
    margin-left: 0px;
    padding-left: 0px;
  }

  .navContainer {
    display: flex;
    justify-content: flex-start;
  }

  .ulist {
    margin: none;
    padding-left: none;
  }

  .ulist li {
    margin: 0px;
    padding: 0px;
    padding-left: 0px;
    width: 100%;
  }
  #topNav2 {
    display: flex;
  }
}
</style>
