<template>
    <!-- Address -->
    <h1>Address</h1>
    <div id="address" class="address" v-if="tempUserAddresses">    
        <h4 class="billing-address">
            <span>State:</span> {{ tempUserAddresses.state }}
        </h4>
        <h4 class="billing-address">
            <span>City:</span> {{ tempUserAddresses.city }}
        </h4>
        <h4 class="xs-fon-13 margin-10px-bottom">
            <span>Address:</span> {{tempUserAddresses.address}}
        </h4>
        <h4>
            <span>PostalCode:</span> {{ tempUserAddresses.postalCode}}
        </h4>
    </div>
    <!-- End Address -->
</template>

<script>
    import { mapState } from "vuex";
    export default {
        data() {
            return {
                tempUserAddresses:{}
            }
        },
        computed: {
            ...mapState([
                'userInfo',
                'currentUser'
            ])
        },
        mounted() {
            if(this.userInfo) {
                this.tempUserAddresses= this.userInfo.address;
            }
        },
    }
</script>

<style>

</style>