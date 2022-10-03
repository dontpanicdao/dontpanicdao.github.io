<template>
    <li class="list-group-item handleOverflow">
        {{title}}
        <br />
        <div v-if="inputFunction.val" :class="[
          inputFunction.valid
            ? 'btn btn-sm btn-outline-success'
            : 'btn btn-sm btn-outline-danger',
        ]" @click="copy(inputFunction.val)">
            <i v-if="inputFunction.inFmt" class="fas fa-check-circle text-success float-left"></i>
            {{ inputFunction.val }}
        </div>
    </li>
</template>

<script>
export default {
    name: 'SimpleCopySelector',
    props: {
        inputFunction: Function,
        title: String
    },
    methods: {
        async copy(text) {
            await navigator.clipboard.writeText(text);
        },
    },
}
</script>

<style scoped>
.list-group-item {
    min-height: 85px;
}
</style>