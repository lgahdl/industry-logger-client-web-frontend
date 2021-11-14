import LanguagesAdapter from '@/adapters/language.adapter'
import _ from 'lodash'

export default class AttitudeAdapter {
  static toDisplay = attitude => {
    const adapted = _.cloneDeep(attitude)
    adapted.languages = LanguagesAdapter.toDisplay(adapted.languages)
    return adapted
  }
}