<template>
    <header-component />
    <router-view />
    <footer-component />
    <mini-cart-modal />
    <quick-view-product v-if="toggle_quickview_modal" />
    <login-modal v-if="toggle_login_modal" />
</template>
<script>
import { mapActions, mapState } from 'vuex';
import myMixin from "./mixins";
export default {
    mixins: [myMixin],
    beforeMount() {
        this.fetchUser();
    },
    computed: {
        ...mapState([
            'currentUser'
        ])
    },
    watch: {
        currentUser(user) {
            if(user && user.auth) {
                this.getWishlistIds();  
            }
        }
    },
    methods: {
        ...mapActions({
            fetchUser: 'handleAuthStateChange',
            getWishlistIds: 'getWishlistIds'
        })
    },
};
</script>
