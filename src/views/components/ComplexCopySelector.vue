<template>
    <li class="list-group-item handleOverflow">
        {{title}}
        <Toggle v-model="selectorHex" onLabel="hex" offLabel="dec" class="float-right" />
        <br /><br />
        <div v-if="inputFunction.val.hexy && selectorHex" :class="[
          inputFunction.valid
            ? 'btn btn-sm btn-outline-success'
            : 'btn btn-sm btn-outline-danger',
        ]" @click="copy(inputFunction.val.hexy)">
            <i v-if="inputFunction.inFmt && !inputFunction.inFmt"
                class="fas fa-check-circle text-success float-left"></i>
            {{ inputFunction.val.hexy }}
        </div>
        <div v-if="inputFunction.val.inty && !selectorHex" :class="[
          inputFunction.valid
            ? 'btn btn-sm btn-outline-success'
            : 'btn btn-sm btn-outline-danger',
        ]" @click="copy(inputFunction.val.inty)">
            <i v-if="inputFunction.inFmt && !inputFunction.inFmt"
                class="fas fa-check-circle text-success float-left"></i>
            {{ inputFunction.val.inty }}
        </div>
    </li>
</template>

<script>
import Toggle from "@vueform/toggle";
export default {
    components: {
        Toggle,
    },
    data() {
        return {
            selectorHex: false
        }
    },
    name: 'ComplexCopySelector',
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
    min-height: 100px;
}
</style>