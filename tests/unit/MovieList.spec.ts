import { shallowMount } from '@vue/test-utils'
import MovieList from '@/components/MovieList.vue'
import Movie from '../../src/types/Movie'

describe('MovieList.vue', () => {
  it('renders', () => {
    //arrange
    const Title1 = "Deep Waterworld"
    const Title2 = "Deep Waterworld"
    const movies: Movie[] = [
        {
            Title: Title1,
            "Year": 1995,
            "imdbID": "tt0124365"
        },
        {
            Title: Title2,
            "Year": 1996,
            "imdbID": "tt1064720"
        },
    ]

    //act
    const wrapper = shallowMount(MovieList, {
      props: { movies }
    })

    //assert
    const html = wrapper.text()
    expect(html).toMatch(Title1)
    expect(html).toMatch(Title2)
  })
})
