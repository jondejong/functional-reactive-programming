import { connect } from 'react-redux'
import { addDog, loadDogs } from '../../actions/ActionTypes'
import NewDog from './NewDog'

import Api from '../../api/Api'
const api = new Api()

const mapStateToProps = (state) => {
  return {
    dogs: state.dogApp.dogs.dogs,
    loaded: state.dogApp.dogs.loaded
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addDog: (dog) => {
      dog.age = Number.parseInt(dog.age)
      dispatch(addDog(dog))
      api.saveDog(dog).then(()=> {
        api.fetchDogs().then((dogs)=> {
          dispatch(loadDogs(dogs))
        })
      })
    },
    loadDogs: (dogs) => {
      dispatch(loadDogs(dogs))
    }
  }
}

const NewDogContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewDog)

export default NewDogContainer