<template>
    <li class="list-group-item">
        {{title}}
        <br />
        <CopyComponent :valueToCopy=dataBag.val :isValid=dataBag.valid :inFormat=dataBag.inFmt />
    </li>
</template>

<script>
import CopyComponent from "./CopyComponent";

export default {
    components: {
        CopyComponent,
    },
    name: 'SimpleCopyComponent',
    props: {
        dataBag: Object,
        title: String
    },
}
</script>

<style scoped>
.list-group-item {
    min-height: 85px;
}
</style>