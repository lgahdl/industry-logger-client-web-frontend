import _ from 'lodash'

export default class UserAdapter {
  static convertFromSignUpToApi = user => {
    const signedUser = _.cloneDeep(user)
    const adapted = {
      email: signedUser.email ? signedUser.email : '',
      status: 'active',
      firstName: signedUser.firstName ? signedUser.firstName : '',
      lastName: signedUser.lastName ? signedUser.lastName : '',
    }
    return adapted
  }
}