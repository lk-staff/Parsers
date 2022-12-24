import {createApp} from 'vue';

import router from '/@/router';
import App from '/@/App.vue';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {faUserSecret} from '@fortawesome/free-solid-svg-icons';

import '/@/assets/css/main.css';

library.add(faUserSecret);

const app = createApp(App);

app.component('VIcon', FontAwesomeIcon);
app.use(router);
app.mount('#app');
