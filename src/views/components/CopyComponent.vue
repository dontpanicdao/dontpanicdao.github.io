<template>
    <div v-if="showIf && valueToCopy" :class="[
      isValid ? 'btn btn-sm btn-outline-success' : 'btn btn-sm btn-outline-danger',
    ]" @click="copy(valueToCopy)">
        <i v-if="inFormat" class="fas fa-check-circle text-success float-left"> </i>
        {{ valueToCopy }}
    </div>
</template>

<script>
export default {
    name: 'CopyComponent',
    props: {
        valueToCopy: String,
        isValid: Boolean,
        inFormat: Boolean,
        showIf: Boolean,
    },
    methods: {
        async copy(text) {
            await navigator.clipboard.writeText(text);
        },
    },
}
</script>

