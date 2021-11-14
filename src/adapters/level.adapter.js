import _ from 'lodash'

export default class LevelAdapter {
  static convertToDisplayFormat = level => {
    const levelToConvert = _.cloneDeep(level)
    // INPUT ADAPTATIONS HERE
    return levelToConvert
  }

  static convertToApiFormat = level => {
    const levelToConvert = _.cloneDeep(level)
    // OUTPUT ADAPTATIONS HERE
    return levelToConvert
  }
}