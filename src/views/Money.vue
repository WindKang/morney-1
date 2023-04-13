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
import model from '@/model';



const recordList = model.fetch();


@Component({
  components: {Tags, Notes, Types, NumberPad},
})
export default class Money extends Vue{
  tags = ['衣','食','住','行'] ;
  recordList : RecordItem[]= recordList ;
  record : RecordItem = {
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
    const deepClone:RecordItem = model.clone(this.record);
    deepClone.createdAt = new Date();
    this.recordList.push(deepClone);
  }
  @Watch('recordList')
  onRecordListChange(){
    model.save(this.recordList);

  }
};
</script>

<style lang="scss">
.layout-content{
  display: flex;
  flex-direction: column-reverse;
}
</style>

