import clone from '@/lib/clone';

const localStorageKeyName = 'recordList';

const recordStore = {
  recordList: [] as RecordItem[],
  fetchRecords() {
    this.recordList = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
    return this.recordList;
  },
  saveRecords() {
  window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.recordList));
},
  createRecord(record: RecordItem) {
    const deepClone: RecordItem = clone(record);
    deepClone.createdAt = new Date().toISOString();
    this.recordList?.push(deepClone);//可选链语法
    recordStore.saveRecords();
  }
};

recordStore.fetchRecords();

export default recordStore;