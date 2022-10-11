<template>
    <div v-if="valueToCopy && valueToCopy !== '0x'" :class="[
      isValid ? 'btn btn-sm btn-outline-success' : 'btn btn-sm btn-outline-danger',
    ]" @click="copy(valueToCopy)">
        <i v-if="inFormat" class="fas fa-check-circle text-success float-left"> </i>
        {{ valueToCopy }}
    </div>
    <br />
</template>

<script>
export default {
    name: 'CopyComponent',
    props: {
        valueToCopy: String,
        isValid: {
            type: Boolean,
            default: true
        },
        inFormat: {
            type: Boolean,
            default: true
        },
    },
    methods: {
        async copy(text) {
            await navigator.clipboard.writeText(text);
        },
    },
}
</script>

