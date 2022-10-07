<template>
    <li class="list-group-item handleOverflow">
        {{title}}
        <Toggle v-if="hasHexSelector" v-model="selectorHex" onLabel="hex" offLabel="dec" class="float-right" />
        <br /><br />

        <CopyComponent :valueToCopy=dataBag.val.hexy :isValid=dataBag.valid :inFormat=dataBag.inFmt
            :showIf="dataBag.val.hexy && selectorHex" />
        <CopyComponent :valueToCopy=dataBag.val.inty :isValid=dataBag.valid :inFormat=dataBag.inFmt
            :showIf="dataBag.val.inty && !selectorHex" />
    </li>
</template>

<script>
import Toggle from "@vueform/toggle";
import CopyComponent from "./CopyComponent";

export default {
    components: {
        Toggle,
        CopyComponent,
    },
    name: 'ComplexCopyComponent',
    props: {
        dataBag: Function,
        title: String,
        hasHexSelector: Boolean
    },
    data() {
        return {
            selectorHex: false
        }
    },
}
</script>

<style scoped>
.list-group-item {
    min-height: 100px;
}
</style>