<template>
  <div class="content">
    <div class="left">
      <slot name="left">
        <main-left />
      </slot>
    </div>
    <div class="right">
      <slot name="right">
        <h2>hihi</h2>
      </slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import MainLeft from "components/common/MainLeft";
export default {
  name: "MainContent",
  data() {
    return {};
  },
  props: {},
  components: { MainLeft },
  methods: {}
};
</script>

<style  scoped>
.content {
  display: flex;
}
</style>
