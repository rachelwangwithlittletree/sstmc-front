<template>
    <div class="content">
      <div class="left">
          <main-left/>
      </div>
      <div class="right">
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
import MainLeft from "components/common/MainLeft"
export default {
    name: "",
    data() {
        return {}
    },
    components: {MainLeft},
    methods: {}
}
</script>

<style  scoped>
.content {
    display: flex;
}
</style>
