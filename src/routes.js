import BindComponent from './directivas/bind.vue'
import TextComponent from './directivas/text.vue'
import HtmlComponent from './directivas/html.vue'
import IfelseComponent from './directivas/ifelse.vue'
import ForComponent from './directivas/for.vue'
import ShowComponent from './directivas/show.vue'
import OnComponent from './directivas/on.vue'

export const routes = [
  { path: '/bind', component: BindComponent },
  { path: '/text', component: TextComponent },
  { path: '/html', component: HtmlComponent },
  { path: '/ifelse', component: IfelseComponent },
  { path: '/for', component: ForComponent },
  { path: '/show', component: ShowComponent },
  { path: '/on', component: OnComponent }
]
