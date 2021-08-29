
<template>
    <div>
        <h5>Basic {{val1}}</h5>
        <Rating v-model="val1" />

        <h5>Without Cancel</h5>
        <Rating v-model="val2" :cancel="false" />

        <h5>ReadOnly</h5>
        <Rating :modelValue="5" :readonly="true" :stars="10" :cancel="false" />

        <h5>Disabled</h5>
        <Rating :modelValue="8" :disabled="true" :stars="10" />
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const val1 = ref();
        const val2 = ref(3);

        return { val1, val2 }
    }
}
</script>
