import LanguagesAdapter from '@/adapters/language.adapter'
import _ from 'lodash'

export default class SdgIndicatorAdapter {
  static toDisplay = sdgIndicator => {
    const adapted = _.cloneDeep(sdgIndicator)
    adapted.languages = LanguagesAdapter.toDisplay(adapted.languages)
    return adapted
  }
}