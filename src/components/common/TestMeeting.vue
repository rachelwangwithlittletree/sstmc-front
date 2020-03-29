<template>
    <div class="">
        <h2>Iam meeting</h2>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    name: "TestMeeting",
    data() {
        return {
            title: ''
        }
    },
    mounted(){
        console.log("the title is " + this.title);
        this.title = this.$route.query.id
    },
    components: {},
    methods: {}
}
</script>

<style lang="scss" scoped>
</style>
