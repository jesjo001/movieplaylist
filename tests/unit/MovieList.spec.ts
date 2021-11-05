import { shallowMount } from '@vue/test-utils'
import MovieList from '@/components/MovieList.vue'

describe('MovieList.vue', () => {
  it('renders', () => {
    //arrange
    const Title = "Deep Waterworld"
    const movies = [
        {
            Title,
            "Year": 1995,
            "imdbID": "tt0124365"
        },
        {
            "Title": "Aquaman: War of the Water Worlds",
            "Year": 1996,
            "imdbID": "tt1064720"
        },
    ]

    //act
    const wrapper = shallowMount(MovieList, {
      props: { movies }
    })

    //assert
    expect(wrapper.text()).toMatch(Title)
  })
})
