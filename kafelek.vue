<template>
  <div>
  <div class="kafelek" v-for="dbdeska in filtereddeski" v-bind:class="{ pomaranczowy: dbdeska.pomaranczowy, zielony: dbdeska.zielony, czerwony: dbdeska.czerwony }">
        <div class="szerokosc">{{dbdeska.szerokosc}} cm</div>
        <div class="grubosc">{{dbdeska.grubosc}} mm</div>
        <div class="ilosc">{{dbdeska.ilosc}} m2</div>
        <div class="opis">{{dbdeska.opis}}</div>
        <div class="data">{{dbdeska.data}}</div>
        <div class="podpis">{{dbdeska.podpis}}</div>
        <div class="usun" v-on:click="usundeske(dbdeska)"><i class="fa fa-trash" aria-hidden="true"></i></div>
    </div>
  </div>
</template>

<script>
import {bus} from './main'
export default {
  props: ['dbdeski', 'szukanie', 'szukanieg'],
  name: 'app',
  data () {
    return {
    }
  },
  methods: {
    usundeske: function(obiekt){
      this.$emit('udeski', obiekt);
  }
},
  computed: {
    filtereddeski: function(){
      return this.dbdeski.filter((dbdeska) => {
        return dbdeska.szerokosc.match(this.szukanie);

      });
    }

}
}
</script>

<style>
  .kafelek{
    width: 700px;
    height: 180px;
    background-color: white;
    color: #c9c9c9;
    border-radius: 10px;
    -webkit-box-shadow: -4px 6px 20px -1px rgba(0,0,0,0.19);
  -moz-box-shadow: -4px 6px 20px -1px rgba(0,0,0,0.19);
  box-shadow: -4px 6px 20px -1px rgba(0,0,0,0.19);
  margin-left: auto;
  margin-right: auto;
  left: -40px;
  transition: all 300ms cubic-bezier(0.155, 1.260, 0.815, 0.950);
  margin-top: 15px;
  margin-bottom: 15px;
  }

  .kafelek:hover{
    -webkit-box-shadow: -4px 6px 65px -1px rgba(0,0,0,0.15);
    -moz-box-shadow: -4px 6px 65px -1px rgba(0,0,0,0.15);
    box-shadow: -4px 6px 65px -1px rgba(0,0,0,0.15);
  transform:scale(1.02,1.02);
  }

  .zielony{
    background-color: #a7daad;
    color: #648267;
  }

  .czerwony{
    background-color: #FF8585;
    color: #994f4f;
  }

  .pomaranczowy{
    background-color: #ffbe5a;
    color: #997236;
  }

  .szerokosc{
    height: 140px;
    width: 160px;
    line-height: 140px;
    font-size: 40px;
    text-align: center;
  }

  .grubosc{
    height: 40px;
    width: 80px;
    line-height: 40px;
    font-size: 18px;
    text-align: center;
  }

  .ilosc{
    height: 40px;
    width: 80px;
    margin-left: 80px;
    margin-top: -40px;
    line-height: 40px;
    font-size: 18px;
    text-align: left;
    padding-left: 10px;
    overflow: hidden;
  }

  .data{
    height: 40px;
    width: 160px;
    margin-right: 0px;
    margin-left: auto;
    margin-top: -140px;
    line-height: 40px;
    font-size: 18px;
    text-align: right;
    padding-right: 20px;
    font-weight: lighter;
  }

  .opis{
    height: 100px;
    width: 520px;
    margin-left: 160px;
    margin-top: -140px;
    overflow: hidden;
    word-wrap:break-word;
    max-width: 100%;
    padding-top: 5px;
    padding-left: 10px;
    padding-right: 20px;
    /*border-left: 2px solid black;*/
  }

  .podpis{
    height: 40px;
    width: 160px;
    margin-right: 0px;
    margin-left: auto;
    margin-top: 100px;
    line-height: 40px;
    padding-right: 20px;
    font-size: 18px;
    text-align: right;
    font-style: italic;
  }

  .usun{
    margin-left: 710px;
    margin-top: -180px;
    font-size: 30px;
    color: white;

  }

  .usun:hover{
    cursor: pointer;
    color: inherit;
  }

  /**************************MEDIA QUERIES****************************/

  @media screen and (max-width: 700px) {
    .kafelek{
      width: 100%;
    }
    .opis{
      width: 100%;
    }

  .data{
    display: none;
  }

  .podpis{
    display: none;
  }

  .usun{
    display: none;
  }
  }
</style>
