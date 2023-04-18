import recordStore from '@/store/recordStore';
import tagStore from '@/store/tagStore';

const store = {
  ...recordStore,
  ...tagStore, //浅拷贝，复制地址

};

console.log(store);
export  default store;