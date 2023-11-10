<script setup>
    import GuestLayout from '@/Layouts/GuestLayout.vue';
    // import Label from '@/Components/Label.vue';
    // import Input from '@/Components/Input.vue';
    import Label from '@/Components/InputLabel.vue';
    import Input from '@/Components/TextInput.vue';

    const emitTest = e => console.log(e)

    // defineProps({
    //     : 
    // })
</script>

<template>
    <GuestLayout>
        <Label value="件名"></Label>
        <Input
            modelValue="初期値が入ります"
            @update:modelValue="emitTest"
            ></Input>
    </GuestLayout>
</template>