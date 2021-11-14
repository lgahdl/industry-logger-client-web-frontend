import LanguageAdapter from '@/adapters/language.adapter'
import _ from 'lodash'

export default class CategoryAdapter {
  static toDisplay = category => {
    const categoryToBeConverted = _.cloneDeep(category)
    categoryToBeConverted.languages = LanguageAdapter.toDisplay(categoryToBeConverted.languages)
    return categoryToBeConverted
  }
}