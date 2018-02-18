import axios from 'axios'

export const SHOW_MOVIES = 'SHOW_MOVIES'

export function showMovies() {

    return (dispatch, getState) => {
        axios.get('https://mfwkweb-api.clarovideo.net//services/content/list?api_version=v5.8&authpn=webclient&authpt=tfg1h3j4k6fd7&format=json&region=mexico&device_id=web&device_category=web&device_model=web&device_type=web&device_manufacturer=generic&HKS=fv0nhac8sroar1e2h3jdblhjf6&quantity=40&order_way=DESC&order_id=200&level_id=GPS&from=0&node_id=9869')
            .then((response) => {
              console.log(response.data.response.groups)
              dispatch( { type: SHOW_MOVIES, payload: response.data.response.groups } )
            })
    }

}
