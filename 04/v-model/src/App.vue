<template>
  <div class="app">
    <button @click="add">退出按钮</button>
    <!--  :visible.sync=> ；visible+@update:visible -->
    <BaseDialog
      :visible.sync="isShow"
    ></BaseDialog>
  </div>
</template>

<script>
import BaseDialog from "./components/BaseDialog.vue"
export default {
  data() {
    return {
      isShow:true
    }
  },
  methods: {
    add(){
      this.isShow=true
    }
  },
  components: {
    BaseDialog,
  },
}
</script>

<style>
</style>