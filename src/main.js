import { createApp } from 'vue'
import App from './App.vue'
import "@/axios/axios"
import elementPlus from "element-plus";
import "element-plus/dist/index.css";
import router from "@/router/index"


createApp(App).use(elementPlus)
createApp(App).use(router).mount('#app')
