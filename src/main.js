import Vue from 'vue'
import App from './App.vue'
import router from './router'

/*
// Install Globally. Comment out to install in a specific component
// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
import "tinymce/tinymce"
import "tinymce/themes/silver" 
import "../public/skins/ui/oxide/skin.min.css"
import "../public/skins/ui/oxide/content.min.css"
import "../public/skins/content/default/content.min.css"
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
*/
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
