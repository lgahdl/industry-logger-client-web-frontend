import LanguagesAdapter from '@/adapters/language.adapter'
import _ from 'lodash'

export default class TechniqueAdapter {
  static toDisplay = technique => {
    const adapted = _.cloneDeep(technique)
    adapted.languages = LanguagesAdapter.toDisplay(adapted.languages)
    return adapted
  }
}