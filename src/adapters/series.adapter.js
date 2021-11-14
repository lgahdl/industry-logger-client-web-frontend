import AttitudeAdapter from '@/adapters/attitude.adapter'
import LanguageAdapter from '@/adapters/language.adapter'
import CategoryAdapter from '@/adapters/category.adapter'
import SdgIndicatorAdapter from '@/adapters/sdg-indicator.adapter'
import SkillAdapter from '@/adapters/skill.adapter'
import TechniqueAdapter from '@/adapters/technique.adapter'
import i18n from '@/libs/i18n'
import _ from 'lodash'

export default class SeriesAdapter {
  static convertToDisplayFormat = series => {
    const newSeries = _.cloneDeep(series)
    newSeries.languages = LanguageAdapter.toDisplay(newSeries.languages)
    newSeries.category = newSeries.category ? CategoryAdapter.toDisplay(newSeries.category) : {
      languages: { [i18n.locale]: { title: i18n.t('#Tag No Category') } },
      color: '#000000',
    }
    newSeries.skills = newSeries.skills.map(skill => SkillAdapter.toDisplay(skill))
    newSeries.attitudes = newSeries.attitudes.map(attitude => AttitudeAdapter.toDisplay(attitude))
    newSeries.sdgIndicators = newSeries.sdgIndicators.map(sdgIndicator => SdgIndicatorAdapter.toDisplay(sdgIndicator))
    newSeries.techniques = newSeries.techniques.map(technique => TechniqueAdapter.toDisplay(technique))
    return newSeries
  }

  static convertToApiFormat = series => {
    const converted = _.cloneDeep(series)
    converted.price = String(converted.price).replaceAll(',', '.')
    return converted
  }
}
