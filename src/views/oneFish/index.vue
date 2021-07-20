<template>
  <div id="components-layout-demo-basic">
   <div class="ser">
     <a-input-search placeholder="搜索" style="width: 200px" enter-button @search="onSearch" />
   </div>
    <div id="table" style="margin-top: 2px">
      <a-table :columns="columns" :data-source="data">
          <a slot="name" slot-scope="text">{{ text }}</a>
          <span slot="customTitle"><a-icon type="smile-o" /> Name</span>
          <span slot="tags" slot-scope="tags">
          <a-tag
            v-for="tag in tags"
            :key="tag"
            :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
          >
          {{ tag.toUpperCase() }}
          </a-tag>
          </span>
          <span slot="action" slot-scope="text, record">
             <a>Invite 一 {{ record.name }}</a>
             <a-divider type="vertical" />
             <a>Delete</a>
             <a-divider type="vertical" />
             <a class="ant-dropdown-link"> More actions <a-icon type="down" /> </a>
          </span>
      </a-table>
    </div>
  </div>
</template>
<script>
const columns = [
  {
    dataIndex: 'fileName',
    key: 'fileName',
    title: '应用名'
  },
  {
    dataIndex: 'fileType',
    key: 'fileType',
    title: '应用类型'
  },
  {
    title: '版本',
    dataIndex: 'version',
    key: 'version',
  },
  {
    title: '大小',
    dataIndex: 'size',
    key: 'size',
  },
  {
    title: '下载地址',
    key: 'fileDownloadUri',
    dataIndex: 'fileDownloadUri'
  }
];
export default {
  name: 'oneFish',
  data() {
    return {
      data:[],
      columns,
    };
  },
  methods: {
    onSearch: async function (val) {
      console.log(val);
      let res = await this.$axios.get("http://192.168.0.226:9080/checkFile");
      console.log(res.data.code);
      if (res.data.code == 200) {
        console.log(res.data.datas);
        this.data = res.data.datas;
      }
    }
  }
}
</script>
<style>
#components-layout-demo-basic {
  text-align: left;
  margin: 1px;
}

</style>