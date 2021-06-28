import api from '../../api/imgurapi';

const state ={
    images: []
};

const getters = {
    allImages: state  => state.images
};

const mutations = {
    setImages: (state, images) => {
        state.images = images;
    }
};

const actions = {
    async fetchImages( { rootState } ) {
        const {token} = rootState.auth;
        const response = await api.fetchImages(token);
        console.log(response);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}