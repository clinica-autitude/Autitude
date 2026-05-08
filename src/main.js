import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

import { 
  Brain, Heart, Home, Sparkles, Stethoscope, 
  Baby, ClipboardCheck, Clock, MapPin, Phone, 
  Mail, MessageCircle, Calendar, ArrowRight,
  Star, Award, Users, GraduationCap, Activity,
  Target, Lightbulb, HandHeart, CheckCircle,
  Settings, X, Play, Square, Minus, Plus, Globe,
  Moon, Sun
} from 'lucide-vue-next'

const app = createApp(App)

app.component('IconBrain', Brain)
app.component('IconHeart', Heart)
app.component('IconHome', Home)
app.component('IconSparkles', Sparkles)
app.component('IconStethoscope', Stethoscope)
app.component('IconBaby', Baby)
app.component('IconClipboardCheck', ClipboardCheck)
app.component('IconClock', Clock)
app.component('IconMapPin', MapPin)
app.component('IconPhone', Phone)
app.component('IconMail', Mail)
app.component('IconMessageCircle', MessageCircle)
app.component('IconCalendar', Calendar)
app.component('IconArrowRight', ArrowRight)
app.component('IconStar', Star)
app.component('IconAward', Award)
app.component('IconUsers', Users)
app.component('IconGraduationCap', GraduationCap)
app.component('IconActivity', Activity)
app.component('IconTarget', Target)
app.component('IconLightbulb', Lightbulb)
app.component('IconHandHeart', HandHeart)
app.component('IconCheckCircle', CheckCircle)
app.component('IconSettings', Settings)
app.component('IconX', X)
app.component('IconPlay', Play)
app.component('IconSquare', Square)
app.component('IconMinus', Minus)
app.component('IconPlus', Plus)
app.component('IconGlobe', Globe)
app.component('IconMoon', Moon)
app.component('IconSun', Sun)

app.config.errorHandler = (err, vm, info) => {
  console.error('Vue Error:', err, info)
}

window.addEventListener('error', (e) => {
  console.error('Global Error:', e.error)
})

app.use(router)
app.mount('#app')