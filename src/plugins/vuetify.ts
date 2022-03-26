import '@fortawesome/fontawesome-free/css/all.css';
import "material-design-icons-iconfont/dist/material-design-icons.css"
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'md' || 'fas' || 'fa' || 'mdi'
    },
    colors: {
        background: '#FFFFFF',
        surface: '#FFFFFF',
        primary: '#1A237E',
        'primary-darken-1': '#3949AB',
        secondary: '#BF360C',
        'secondary-darken-1': '#F4511E',
        error: '#B00020',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
    },
    theme: {
        themes: {
            dark: {
                background: '#1A237E'
            }
        }
    },


});



