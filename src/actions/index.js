import axios from 'axios'

export const SHOW_MOVIES = 'SHOW_MOVIES'
export const SHOW_MODAL = 'SHOW_MODAL'
export const ADD_TO_MODAL = 'ADD_TO_MODAL'
export const HIDE_MODAL = 'HIDE_MODAL'

var allMovies = []

export function showMovies(action) {
  // console.log(action)
    return (dispatch, getState) => {
      if (action == '') { // empty search, should show all movies
        // console.log('show all')
        dispatch( { type: SHOW_MOVIES, payload: allMovies } )
      } else if (action.type == 'filter') { // something in search, should filter
        // console.log(filterItems(action))
        dispatch( { type: SHOW_MOVIES, payload: filterItems(action.value) } )
      } else {
        axios.get('https://mfwkweb-api.clarovideo.net//services/content/list?api_version=v5.8&authpn=webclient&authpt=tfg1h3j4k6fd7&format=json&region=mexico&device_id=web&device_category=web&device_model=web&device_type=web&device_manufacturer=generic&HKS=fv0nhac8sroar1e2h3jdblhjf6&quantity=40&order_way=DESC&order_id=200&level_id=GPS&from=0&node_id=9869')
            .then((response) => {
              // console.log(response.data.response.groups)
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

export function showModal(movieId) {
  return (dispatch, getState) => {
    if (movieId == 'empty') {
      dispatch( { type: HIDE_MODAL, payload: {} } )
    } else {
      // console.log(movieId)
      var movie = filterMovieById(movieId)
      dispatch( { type: SHOW_MODAL, payload: movie } )
      axios.get('https://mfwkweb-api.clarovideo.net/services/content/data?api_version=v5.8&authpn=webclient&authpt=tfg1h3j4k6fd7&format=json&region=mexico&device_id=web&device_category=web&device_model=web&device_type=web&device_manufacturer=generic&HKS=fv0nhac8sroar1e2h3jdblhjf6&group_id=' + movieId.toString())
          .then((response) => {
            // console.log(response.data.response.group.common)
            var extendedModal = {
              roles: response.data.response.group.common.extendedcommon.roles.role,
              genres: response.data.response.group.common.extendedcommon.genres.genre
            }
            // console.log(extendedModal)
            dispatch( { type: ADD_TO_MODAL, payload: extendedModal } )
          })
    }
  }
}

function filterMovieById(query) {
  return allMovies.filter(function(el) {
    return el.id.indexOf(query) > -1;
  })
}
