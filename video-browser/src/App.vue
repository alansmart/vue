<template>
    <div class="container">
        <SearchBar v-on:termChange="OnTermChange"></SearchBar>
        <div class="row">
            <VideoDetail :video="selectedVideo"></VideoDetail>
            <VideoList @videoSelect="onVideoSelect" :videos="videos"></VideoList>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
const API_KEY = 'AIzaSyCPan5FmbHGErrJP6Kr3qhLg0VaGkvux3w';
export default {
    name: 'App',
    components: {
        SearchBar,
        VideoList,
        VideoDetail
    },
    data() {
        return {videos: [], selectedVideo: null}
    },
    methods: {
        OnTermChange(searchTerm) {
            axios.get('https://www.googleapis.com/youtube/v3/search', {
                params: {
                  q: searchTerm,
                  key: API_KEY,
                  part: 'snippet'
                }
            }).then(response => {
                this.videos = response.data.items;
            })
        },

        onVideoSelect(video) {
            this.selectedVideo = video;
        }
    }
}
</script>