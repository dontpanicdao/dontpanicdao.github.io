<template>
    <li class="list-group-item handleOverflow">
        {{title}}
        <Toggle v-model="selectorHex" onLabel="hex" offLabel="dec" class="float-right" />
        <br /><br />
        <div v-if="selectorHex">
            <CopyComponent v-for="item in dataBag.hexValues" :key="item" :valueToCopy=item :isValid=dataBag.valid
                :inFormat=dataBag.inFmt />
        </div>
        <div v-else>
            <CopyComponent v-for="item in dataBag.intValues" :key="item" :valueToCopy=item :isValid=dataBag.valid
                :inFormat=dataBag.inFmt />
        </div>
    </li>
</template>

<script>
import CopyComponent from "./CopyComponent";
import Toggle from "@vueform/toggle";

export default {
    components: {
        CopyComponent,
        Toggle,
    },
    name: 'ToggleComponent',
    props: {
        dataBag: Object,
        title: String
    },
    data() {
        return {
            selectorHex: false,
        }
    }
}
</script>

