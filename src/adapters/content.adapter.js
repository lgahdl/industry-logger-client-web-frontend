import LanguageAdapter from '@/adapters/language.adapter'
import _ from 'lodash'

export default class ContentAdapter {
  static convertToDisplayFormat = content => {
    const contentToBeConverted = _.cloneDeep(content)
    contentToBeConverted.languages = LanguageAdapter.toDisplay(contentToBeConverted.languages)
    return contentToBeConverted
  }
}