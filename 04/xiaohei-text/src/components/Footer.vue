<template>
      <!-- 统计和清空 -->
      <footer class="footer">
      <!-- 统计 -->
      <span class="todo-count">合 计:<strong> {{ result.length }} </strong></span>
      <!-- 清空 -->
      <button @click="clearData" class="clear-completed" >
        清空任务
      </button>
    </footer>
</template>

<script>
export default {
    props:{
        result:Array
    },
    methods:{
        clearData(){
            this.$emit('clear')
        }
    }
}
</script>

<style>

</style>