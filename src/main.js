import './assets/main.css'

import { createApp } from 'vue'
import Navbar from '../src/components/navbar.vue'
import intro from '../src/components/introduction.vue'

createApp(Navbar).mount('#navbar')
createApp(intro).mount('#introduction')

