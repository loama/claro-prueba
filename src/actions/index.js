import axios from 'axios'

export const SHOW_MOVIES = 'SHOW_MOVIES'

var allMovies = []

export function showMovies(action) {
  // console.log(action)
    return (dispatch, getState) => {
      if (action == '') { // empty search, should show all movies
        // console.log('show all')
        dispatch( { type: SHOW_MOVIES, payload: allMovies } )
      } else if (action !== 'firstload') { // something in search, should filter
        // console.log(filterItems(action))
        dispatch( { type: SHOW_MOVIES, payload: filterItems(action) } )
      } else {
        axios.get('https://mfwkweb-api.clarovideo.net//services/content/list?api_version=v5.8&authpn=webclient&authpt=tfg1h3j4k6fd7&format=json&region=mexico&device_id=web&device_category=web&device_model=web&device_type=web&device_manufacturer=generic&HKS=fv0nhac8sroar1e2h3jdblhjf6&quantity=40&order_way=DESC&order_id=200&level_id=GPS&from=0&node_id=9869')
            .then((response) => {
              console.log(response.data.response.groups)
              dispatch( { type: SHOW_MOVIES, payload: response.data.response.groups } )
              // preloader
              var loaderOverlay = document.getElementById('loader-overlay')
              loaderOverlay.style.opacity = 0
              setTimeout(function () {
                loaderOverlay.style.display = 'none'
              }, 1000)
              allMovies = response.data.response.groups
            })
      }
    }
}

function filterItems(query) {
  // console.log('filter');
  // console.log(query)
  return allMovies.filter(function(el) {
    return el.title.toLowerCase().indexOf(query.toLowerCase()) > -1;
  })
}
