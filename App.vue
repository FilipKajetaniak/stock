<template>
<div>
  <kafelek v-bind:dbdeski="dbdeski" v-bind:szukanie="szukanie" v-on:udeski="wywalaniedeski($event)" ></kafelek>
  <narzedzia v-on:dodajdeske="dodajnowadeske($event)" v-on:wyszukaj="wyszukiwaniedeski($event)" v-on:szukajdeche="przesylanieszukania($event)"
    v-on:szukajdecheg="przesylanieszukaniag($event)"
  ></narzedzia>
</div>
</template>

<script>
import kafelek from './kafelek.vue';
import narzedzia from './narzedzia.vue';
import Firebase from 'firebase';

let config = {
  apiKey: "AIzaSyBNfXE2wuxFeWOq7DiQGX-Q4GjbqWMcmjg",
  authDomain: "deski-6d852.firebaseapp.com",
  databaseURL: "https://deski-6d852.firebaseio.com",
  projectId: "deski-6d852",
  storageBucket: "deski-6d852.appspot.com",
  messagingSenderId: "923308565803"
}

let app = Firebase.initializeApp(config);
let db = app.database();
let deskiRef = db.ref('deski');

export default {
  components: {
    'kafelek': kafelek,
    'narzedzia': narzedzia
  },
  name: 'app',
  firebase: {
    dbdeski: deskiRef
  },
  data () {
    return {
      search: '',
      szukanie: ''
    }
  },
  methods: {

    dodajnowadeske: function(decha){
      deskiRef.push(decha);
    },

    wywalaniedeski: function(obiekt){
      deskiRef.child(obiekt['.key']).remove()
    },

    przesylanieszukania: function(x){
      this.szukanie = x;
    },

    przesylanieszukaniag: function(y){
      this.szukanieg = y;
      console.log(y);
    }


  }
}
</script>

<style>
body{
  font-family: 'Roboto', sans-serif;
  margin: 0;
  background-color: #585764;
  transition: all 300ms cubic-bezier(0.155, 1.260, 0.815, 0.950);
}
</style>
