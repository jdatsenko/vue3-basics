import { createApp } from 'vue'
import App from './App'
import components from '@/components/UI'
import router from '@/router/router'
import Vintersection from './directives/Vintersection.vue'
const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

app.use(router)
  .directive('intersection', Vintersection) 
  .mount('#app'); 
