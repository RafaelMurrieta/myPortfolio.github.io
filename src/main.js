import './assets/main.css'

import { createApp } from 'vue'
import Navbar from '../src/components/navbar.vue'
import intro from '../src/components/introduction.vue'
import about from '../src/components/about.vue'

createApp(Navbar).mount('#navbar')
createApp(intro).mount('#introduction')
createApp(about).mount('#about')



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});