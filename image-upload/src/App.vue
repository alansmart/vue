<template>
    <div>
        <ImageHeader></ImageHeader>
        <router-view></router-view>
    </div>
</template>
<script>
import ImageHeader from './components/ImageHeader';
export default {
    name: 'App',
    components: {
        ImageHeader,

    }
}
</script>