import LanguageAdapter from '@/adapters/language.adapter'
import _ from 'lodash'

export default class SkillAdapter {
  static toDisplay = skill => {
    const newSkill = _.cloneDeep(skill)
    newSkill.languages = LanguageAdapter.toDisplay(newSkill.languages)
    return newSkill
  }
}