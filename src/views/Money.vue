<template>
  <Layout class-prefix="layout">
    <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"></NumberPad>
    <Types :value.sync= "record.type" ></Types>
    <Notes @update:value="onUpdateNotes"></Notes>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"></Tags>
  </Layout>
</template>

<script lang="ts">
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import Notes from '@/components/Money/Notes.vue';
import Tags from '@/components/Money/Tags.vue';
import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';


type Record = {
  tags: string[];
  notes: string;
  type: string;
  amount: number;
  createdAt?: Date  ;
}
@Component({
  components: {Tags, Notes, Types, NumberPad},
})
export default class Money extends Vue{
  tags = ['衣','食','住','行'] ;
  recordList : Record[]=JSON.parse(window.localStorage.getItem('recordList')||'[]') ;
  record : Record = {
    tags:[],notes:'',type:'-',amount:0
  };
  onUpdateTags(value:string[]){
    this.record.tags = value;
  }
  onUpdateNotes(value:string){
    this.record.notes = value;
  }
  onUpdateAmount(value:string){
    this.record.amount = parseFloat(value);
  }
  saveRecord(){
    const deepClone:Record = JSON.parse(JSON.stringify(this.record));
    deepClone.createdAt = new Date();
    this.recordList.push(deepClone);
  }
  @Watch('recordList')
  onRecordListChange(){
    window.localStorage.setItem('recordList',JSON.stringify(this.recordList));
  }
};
</script>

<style lang="scss">
.layout-content{
  display: flex;
  flex-direction: column-reverse;
}
</style>

