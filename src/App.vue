<template>
    <header-component />
    <router-view />
    <footer-component />
    <mini-cart-modal />
    <quick-view-product v-if="toggle_quickview_modal" />
    <login-modal v-if="toggle_login_modal" />
</template>
<script>
import { mapActions } from 'vuex';
import myMixin from "./mixins";
export default {
    mixins: [myMixin],
    beforeMount() {
        this.fetchUser();
    },
    methods: {
        ...mapActions({
            fetchUser: 'handleAuthStateChange'
        })
    },
};
</script>
