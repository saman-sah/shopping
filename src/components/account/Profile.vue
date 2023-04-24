<template>
    <!-- Account Details -->
    <h1>Profile</h1>
    <div v-if="tempUserProfiel" id="account-details" class="account-details profile-account">
        <h3>Account details </h3>
        <div class="account-login-form bg-light-gray padding-20px-all">
            <form>
                <fieldset>
                    <div class="row">
                        <div class="form-group col-md-6 col-lg-6 col-xl-6 required">
                            <label for="input-firstname">First Name <span class="required-f">*</span></label>
                            <input v-model="tempUserProfiel.firstName"
                            name="firstname"  id="input-firstname" 
                            class="form-control" type="text">
                        </div>
                        <div class="form-group col-md-6 col-lg-6 col-xl-6 required">
                            <label for="input-lastname">Last Name <span class="required-f">*</span></label>
                            <input v-model="tempUserProfiel.lastName"
                            name="lastname" id="input-lastname" 
                            class="form-control" type="text">
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-6 col-lg-6 col-xl-6 required">
                            <label for="input-email">E-Mail <span class="required-f">*</span></label>
                            <input v-model="tempUserProfiel.email"
                            name="email" id="input-email" 
                            class="form-control" type="email">
                        </div>
                        <div class="form-group col-md-6 col-lg-6 col-xl-6 required">
                            <label for="input-password">Password <span class="required-f">*</span></label>
                            <input v-model="tempUserProfiel.password"
                            name="password" id="input-password" 
                            class="form-control" type="password">
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-6 col-lg-6 col-xl-6 required">
                            <label for="input-telephone">Telephone <span class="required-f">*</span></label>
                            <input v-model="tempUserProfiel.phone"
                            name="telephone" id="input-telephone" 
                            class="form-control" type="tel">
                        </div>
                        <div class="form-group col-md-6 col-lg-6 col-xl-6 required">
                            <label>Birthdate <span class="required-f">*</span></label>
                            <input name="birthdate" max="3000-12-31" min="1000-01-01" class="form-control" type="date">
                        </div>
                    </div>

                </fieldset>

                <button type="submit" class="btn margin-15px-top btn-primary">Save</button>
            </form>

        </div>

    </div>
    <!-- End Account Details -->
</template>

<script>
    import { mapState } from "vuex";
    export default {
        data() {
            return {
                tempUserProfiel:{}
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
                this.tempUserProfiel= this.userInfo.profile;
            }
        },
    }
</script>

<style>

</style>