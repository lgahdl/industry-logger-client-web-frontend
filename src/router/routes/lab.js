import LabSeries from '@/views/lab/series'
import LabOpenSeries from '@/views/lab/series/open-series'
import LabOpenLevel from '@/views/lab/level-contents'

export default [{
  path: '/lab/series', component: LabSeries, name: 'lab-series',
}, {
  path: '/lab/series/:id', component: LabOpenSeries, name: 'lab-open-series', meta: { navActiveLink: 'lab-series' },
}, {
  path: '/lab/series/:seriesId/level/:id',
  component: LabOpenLevel,
  name: 'lab-open-level',
  meta: {
    navActiveLink: 'lab-series',
  },
}]
