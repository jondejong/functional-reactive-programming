import { connect } from 'react-redux'
import { removeDog, loadDogs } from '../../actions/ActionTypes'
import DogList from './DogList'

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
    removeDog: (dog) => {
      dispatch(removeDog(dog.id))
      api.deleteDog(dog).then(() => {
        api.fetchDogs().then((dogs) => {
          dispatch(loadDogs(dogs))
        })
      })
    },
    loadDogs: () => {
      api.fetchDogs().then((dogs)=> {
        dispatch(loadDogs(dogs))
      })
    }
  }
}

const DogListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DogList)

export default DogListContainer
