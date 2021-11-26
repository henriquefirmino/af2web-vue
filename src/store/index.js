import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        album: [
            {
                nome: 'Dirt',
                artista: 'Alice in Chains',
                img: 'https://upload.wikimedia.org/wikipedia/pt/b/ba/Dirt.jpg',
            },
            {
                nome: 'Happier Than Ever',
                artista: 'Billie Eilish',
                img: 'https://upload.wikimedia.org/wikipedia/pt/e/e8/Happier_Than_Ever_%28álbum%29_-_Billie_Eilish.png',
            },
            {
              nome: 'Cry',
              artista: 'Cigarettes After Sex',
              img: 'https://upload.wikimedia.org/wikipedia/en/4/4c/Cigarettes_After_Sex_-_Cry.png',
          },
          {
            nome: 'Ten',
            artista: 'Pearl Jam',
            img: 'https://upload.wikimedia.org/wikipedia/pt/d/da/Pearl_Jam_-_Ten.jpg',
        }
        ]
    }
})