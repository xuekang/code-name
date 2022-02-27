<template>

<div>
  <h1 class="title">
    <span>C</span>
    <span>O</span>
    <span>D</span>
    <span>E</span>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <span>N</span>
    <span>A</span>
    <span>M</span>
    <span>E</span>
  </h1>
  <div class="main-search">
    <el-input placeholder="请输入内容" v-model="searchKey" class="input-with-select" autocomplete="on" :clearable="true">
      <el-select v-model="lan" slot="prepend" placeholder="请选择" multiple collapse-tags>
        <el-option
          v-for="item in lanOpts"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-button slot="append" icon="el-icon-search" type="primary" :loading="searchLoading" v-on:click="onSearch"></el-button>
    </el-input>
    <div class="tag-group">
      <span class="tag-group__title"></span>
      <el-tag
        v-for="item in result"
        :key="item.keyword"
        :type="item.color"
        effect="plain">
        {{ item.keyword }}
      </el-tag>
    </div>
  </div>
  <div class="footer"></div>
</div>

</template>

<script>
import './index.scss';

// http://githut.info/
const topProgramLan = [
  { id: '22,106', language: 'JavaScript, CoffeeScript' },
  { id: '133,135', language: 'CSS' },
  { id: '3,39', language: 'HTML' },
  { id: 137, language: 'Swift' },
  { id: 35, language: 'Objective-C' },
  { id: 23, language: 'Java' },
  { id: 19, language: 'Python' },
  { id: 24, language: 'PHP' },
  { id: 32, language: 'Ruby' },
  { id: 28, language: 'C' },
  { id: 16, language: 'C++' },
  { id: 6, language: 'C#' },
  { id: 55, language: 'Go' },
  { id: 51, language: 'Perl' },
  { id: '104,109', language: 'Clojure, ClojureScript' },
  { id: 40, language: 'Haskell' },
  { id: 54, language: 'Lua' },
  { id: 20, language: 'Matlab' },
  { id: 144, language: 'R' },
  { id: 47, language: 'Scala' },
  { id: '69,78,146', language: 'Shell' },
  { id: 29, language: 'Lisp' },
  { id: 42, language: 'ActionScript' }
];

export default {
  name: 'HomePage',
  data() {
    return {
      lan: [],
      searchKey: '',
      searchLoading: false,
      result:[],
    }
  },
  computed: {
    lanOpts(){
      let data = []
      topProgramLan.forEach(e => {
        data.push({label:e.language,value:String(e.id)})
      });
      return data
    }
  },
  created(){
    console.log(this.$route,this.$router)
    let query = this.$route.query
    if(query.searchKey){
      this.searchKey = query.searchKey
      this.search()
    }
  },
  methods:{
    onSearch(){
      let host = window.location.host
      if(host === 'xuekang.github.io'){
        let url = 'http://113.57.215.186:9000/code-name/#/'
        if(this.searchKey){
          url += '?searchKey=' + this.searchKey
        }
        window.location.href = url
      }else{
        this.search()
      }
    },
    search(){
      this.searchLoading = true
      this.request({
        url: 'codename/search',
        method: 'post',
        data:{
          query:this.searchKey,
          lan:this.lan
        }
      }).then((data)=>{
        this.searchLoading = false
        this.result = data
        console.log(111,data)
      }).catch(()=>{
        this.searchLoading = false
        this.result = []
        console.log(222)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.main-search{
  width: 45rem;
  padding: 2rem 0 4rem;
  margin: 0 auto;
  ::v-deep .el-select .el-select__tags{
    display:none;
  }
  .tag-group{
    padding: 2rem 0;
    ::v-deep .el-tag{
      margin: 0.4rem 0.4rem 0 0;
    }
  }
}

.footer{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding-bottom: 1rem;
  padding-top: 0.5rem;
  box-sizing: content-box;
  line-height:2rem;
  text-align: center;
  background-color: #fff;
  transition: background-color 150ms ease-in-out;
}
</style>
