<template>
  <div class="menu">

  <div class="dodaj" v-on:click="pokazform = true">
    Dodaj deskę
  </div>

  <div v-show="pokazform" class="formularzdodawania" v-on:submit.prevent="dodajdeske">
    <form action="" class="formularz">

        <span>Szerokość:</span><br>
        <div class="pokazinput">{{nowadeska.szerokosc}} cm</div>
        <input type="range" min="10" max="30" step="0.1" class="forminput suwaki" id="formszerokosc"  :value="nowadeska.szerokosc" v-model="nowadeska.szerokosc">

        <span>Grubość:</span><br>
        <div class="pokazinput">{{nowadeska.grubosc}} mm</div>
        <input type="range" min="10" max="30" step="1" class="forminput suwaki" id="formszerokosc"  :value="nowadeska.grubosc" v-model="nowadeska.grubosc">

        <span>Ilość:</span><br>
        <div class="pokazinput">{{nowadeska.ilosc}} m2</div>
        <input type="range" min="1" max="200" step="1" class="forminput suwaki" id="formszerokosc"  :value="nowadeska.ilosc" v-model="nowadeska.ilosc">


        <input type="text" class="forminput" id="formdodatkowe"  placeholder="Dodatkowe informacje:"  v-model="nowadeska.opis">
        <input type="text" class="forminput" id="formpodpis"  placeholder="Podpis:"v-model="nowadeska.podpis">
        <input type="submit" id="formsubmit" value="Dodaj">
    </form>
    <div class="zwin" v-on:click="pokazform = false"><i class="fa fa-sort-asc" aria-hidden="true"></i></div>
  </div>

  <div class="szukaj">
    <input type="text" placeholder="szukaj" class="szukajdeski" v-model="search" v-on:keyup="wyslijsearch(search)"><i class="fa fa-search" aria-hidden="true"></i>
  </div>
  <!-- <div class="szukaj">
    <input type="text" placeholder="szukaj grubości" class="szukajdeski" v-model="searchg" v-on:keyup="wyslijsearchg(searchg)"><i class="fa fa-search" aria-hidden="true"></i>
  </div> -->

  <div class="sortuj">
    Sortuj
  </div>

  <div class="filtry">
    Filtry
  </div>


</div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      pokazform: false ,

      search: '',

      searchg: '',

      nowadeska: {
        szerokosc: '',
        grubosc: '',
        ilosc: '',
        opis: '',
        data: '',
        podpis: '',
        pomaranczowy: false,
        zielony: false,
        czerwony: false
      }
    }
  },
  methods: {
    dodajdeske: function(){

      const toTwoDigits = num => num < 10 ? '0' + num : num;
      let today = new Date();
      let year = today.getFullYear();
      let month = toTwoDigits(today.getMonth() + 1);
      let day = toTwoDigits(today.getDate());
      this.nowadeska.data= `${year}-${month}-${day}`;

      if (this.nowadeska.ilosc <= 10 && this.nowadeska.ilosc > 0){
        this.nowadeska.czerwony = true;
        this.nowadeska.zielony = false;
        this.nowadeska.pomaranczowy = false;
      }
      else if (this.nowadeska.ilosc >= 40) {
        this.nowadeska.czerwony = false;
        this.nowadeska.zielony = true;
        this.nowadeska.pomaranczowy = false;
      }
      else if (this.nowadeska.ilosc > 10 && this.nowadeska.ilosc < 40) {
        this.nowadeska.czerwony = false;
        this.nowadeska.zielony = false;
        this.nowadeska.pomaranczowy = true;
      }
      else{
        this.nowadeska.pomaranczowy = false;
        this.nowadeska.zielony =false;
        this.nowadeska.czerwony = false;
      }
      this.$emit('dodajdeske', this.nowadeska);
        this.nowadeska.szerokosc = '';
        this.nowadeska.grubosc = '';
        this.nowadeska.ilosc = '';
        this.nowadeska.opis = '';
        this.nowadeska.data = '';
        this.nowadeska.podpis = '';
    },
    wyslijsearch: function(x){
      this.$emit('szukajdeche', x);
    },
    wyslijsearchg: function(y){
      this.$emit('szukajdecheg', y);
    }

    }

}

</script>

<style>
.menu{
  background-color: white;
  color: #c9c9c9;
  /*height: 100vh;*/
  height: 6000px;
  width: 350px;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  transition: all 300ms cubic-bezier(0.155, 1.260, 0.815, 0.950);
  transform:translate(-350px);
  padding-right: 50px;
  opacity: 1;
}

.menu:hover{
transform:translate(0px);
padding-right: 0px;
}



.dodaj{
  margin-top: 30px;
  height: 50px;
  width: 100%;
  line-height: 50px;
  font-size: 30px;
  text-align: center;
  margin-bottom: 20px;
}

.dodaj:hover{
  color: #cecece;
  cursor: pointer;
}

.formularzdodawania{
  background-color: #eeeeee;
  width: 100%;
  /*display: none;*/
  transition: all 300ms cubic-bezier(0.155, 1.260, 0.815, 0.950);
}

.forminput{
  width: 100%;
  background-color: #eeeeee;
  height: 60px;
  border: none;
  border-bottom: 2px solid #c9c9c9;
  font-size: 20px;
}

.suwaki{
  border: none;
}

.formularz{
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10px;
  padding-bottom: 10px;
}

#formsubmit{
  height: 50px;
  margin-top: 10px;
  background-color: #8f899;
  border: none;
  font-size: 20px;
  line-height: 50px;
  color: #8f8992;
  cursor: pointer;
}

.zwin{
  width: 100%;
  text-align: center;
  font-size: 40px;
}

.zwin:hover{
  cursor: pointer;
  color: #cecece;

}

.szukaj{
  text-align: center;
  font-size: 20px;
}

.szukajdeski{
  width: 50%;
  background-color: white;
  height: 60px;
  border: none;
  border-bottom: 2px solid #c9c9c9;
  font-size: 30px;
  color: #c9c9c9;
  margin-bottom: 10px;
}

::placeholder{
  color: #c9c9c9;
}

.sortuj{
  margin-top: 30px;
  height: 50px;
  width: 100%;
  line-height: 50px;
  font-size: 30px;
  text-align: center;
  margin-bottom: 20px;
}

.sortuj:hover{
  color: #cecece;
  cursor: pointer;
}

.filtry{
  margin-top: 30px;
  height: 50px;
  width: 100%;
  line-height: 50px;
  font-size: 30px;
  text-align: center;
  margin-bottom: 20px;
}

.filtry:hover{
  color: #cecece;
  cursor: pointer;
}

.pokazinput{
  width: 100%;
  margin-top: 5px;
  text-align: center;
}
/********************STYLE SUWAKA*******************/
input[type=range] {
  -webkit-appearance: none;
  margin-left: 10%;
  margin-top: 10px;
  width: 80%;
}
input[type=range]:focus {
  outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 10px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 0px 0px 0px #000000;
  background: #F5F5F5;
  border-radius: 50px;
  border: 0px solid #8A8A8A;
}
input[type=range]::-webkit-slider-thumb {
  box-shadow: 0px 0px 10px #828282;
  border: 0px solid #8A8A8A;
  height: 15px;
  width: 15px;
  border-radius: 50px;
  background: #F0F0F0;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -2.5px;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background: #F5F5F5;
}
input[type=range]::-moz-range-track {
  width: 100%;
  height: 10px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 0px 0px 0px #000000;
  background: #F5F5F5;
  border-radius: 50px;
  border: 0px solid #8A8A8A;
}
input[type=range]::-moz-range-thumb {
  box-shadow: 0px 0px 10px #828282;
  border: 0px solid #8A8A8A;
  height: 10px;
  width: 10px;
  border-radius: 50px;
  background: #F0F0F0;
  cursor: pointer;
}
input[type=range]::-ms-track {
  width: 100%;
  height: 10px;
  cursor: pointer;
  animate: 0.2s;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type=range]::-ms-fill-lower {
  background: #F5F5F5;
  border: 0px solid #8A8A8A;
  border-radius: 100px;
  box-shadow: 0px 0px 0px #000000;
}
input[type=range]::-ms-fill-upper {
  background: #F5F5F5;
  border: 0px solid #8A8A8A;
  border-radius: 100px;
  box-shadow: 0px 0px 0px #000000;
}
input[type=range]::-ms-thumb {
  box-shadow: 0px 0px 10px #828282;
  border: 0px solid #8A8A8A;
  height: 10px;
  width: 10px;
  border-radius: 50px;
  background: #F0F0F0;
  cursor: pointer;
}
input[type=range]:focus::-ms-fill-lower {
  background: #F5F5F5;
}
input[type=range]:focus::-ms-fill-upper {
  background: #F5F5F5;
}


@media screen and (max-width: 700px) {
.menu{
  display: none;
}
}

</style>
