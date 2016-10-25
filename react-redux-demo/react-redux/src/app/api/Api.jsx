import 'whatwg-fetch'

class Api {

  constructor() {
    this.urlRoot = 'http://localhost:4000/'
  }

  _checkForErrors = (response) => {
    if (response.status >= 200 && response.status < 300) {
      return response
    } else {
      var error = new Error(response.statusText)
      error.response = response
      throw error
    }
  }

  fetchDogs = () => {
    return fetch(`${this.urlRoot}dogs`).then((response) => response.json())
  }

  saveDog = (dog) => {
    return fetch(`${this.urlRoot}dogs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dog)
    }).then(this._checkForErrors)
      .then((response) => response.json())
      .catch((error) => {
        console.log('error', error)
      })
  }
  
  deleteDog = (dog) => {
    return fetch(`${this.urlRoot}dogs/${dog.id}`, {method: 'DELETE'}).then((response) => response.json())
  }
  
}

export default Api

