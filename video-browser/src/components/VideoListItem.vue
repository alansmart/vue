<template>
    <li class="list-group-item media" @click="OnThumbnailClick">
        <img class="mr-3" :src="thumbnailURL"/>
        <div class="media-body">
            {{video.snippet.title}}
        </div>
    </li>
</template>
<script>
export default {
 name: 'VideoListItem',
 props: ['video'],
 computed: {
     thumbnailURL() {
         return this.video.snippet.thumbnails.default.url;
     }
 },
 methods: {
     OnThumbnailClick() {
         this.$emit('videoSelect', this.video);
     }
 }
}
</script>

<style scoped>
    li{
        display: flex;
        cursor: pointer;
    }

    li:hover {
        background-color: #eee;
    }

</style>