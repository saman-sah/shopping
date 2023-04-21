<template>
    <div id="page-content" class="login-page">
        <div class="modalOverly" @click.self="closeLoginModal"></div>
        <!--Body Container-->
        <div class="container login-modal-container">
            <div class="row">
                <!--Main Content-->
                <div class="col-12 col-sm-12 col-md-12 col-lg-12 box">
                <div class="page-title">
                    <h1>
                        {{ toggle_login_register== true ? 'Login' : 'Register' }}
                    </h1>
                </div>
                    <div class="mb-4">
                        <form v-if="toggle_login_register"
                        @submit.prevent="login(formData)"
                        method="post" id="CustomerLoginForm" 
                        accept-charset="UTF-8" class="contact-form" >
                            <div class="row">
                                <div class="col-12 col-sm-12 col-md-12 col-lg-12" >
                                    <div class="form-group">
                                        <label for="CustomerEmail" >Email
                                            <span class="required" >*</span >
                                            </label>
                                        <input
                                        v-model="formData.email"
                                        type="email"
                                        name="customer[email]"
                                        placeholder=""
                                        id="CustomerEmail"
                                        class=""
                                        autocorrect="off"
                                        autocapitalize="off"
                                        autofocus
                                        />
                                    </div>
                                </div>
                                <div class="col-12 col-sm-12 col-md-12 col-lg-12" >
                                    <div class="form-group">
                                        <label for="CustomerPassword">Password
                                            <span class="required">*</span>
                                        </label>
                                        <input
                                        v-model="formData.password"
                                        type="password"
                                        name="customer[password]"
                                        placeholder=""
                                        id="CustomerPassword"
                                        class=""
                                        />
                                    </div>
                                </div>
                                <div class="col-12 col-sm-12 col-md-12 col-lg-12" >
                                    <input type="submit" class="btn mb-3" value="Login" />
                                </div>
                            </div>
                        </form>
                        <form v-else
                        @submit.prevent="register(formData)"
                        method="post" action="" id="CustomerLoginForm" 
                        accept-charset="UTF-8" class="contact-form" >
                            <div class="row">
                                <div class="col-12 col-sm-12 col-md-12 col-lg-12" >
                                    <div class="form-group">
                                        <label for="CustomerFname" >First Name
                                            <span class="required" >*</span >
                                        </label>
                                        <input
                                        v-model="formData.fname"
                                        type="text"
                                        name="customer[fname]"
                                        placeholder=""
                                        id="CustomerFname"
                                        class=""
                                        autocorrect="off"
                                        autocapitalize="off"
                                        autofocus
                                        />
                                    </div>
                                </div>
                                <div class="col-12 col-sm-12 col-md-12 col-lg-12" >
                                    <div class="form-group">
                                        <label for="CustomerLname" >Last Name
                                            <span class="required" >*</span >
                                            </label>
                                        <input
                                        v-model="formData.lname"
                                        type="text"
                                        name="customer[lname]"
                                        placeholder=""
                                        id="CustomerLname"
                                        class=""
                                        autocorrect="off"
                                        autocapitalize="off"
                                        />
                                    </div>
                                </div>
                                <div class="col-12 col-sm-12 col-md-12 col-lg-12" >
                                    <div class="form-group">
                                        <label for="CustomerEmail" >Email
                                            <span class="required" >*</span >
                                            </label>
                                        <input
                                        v-model="formData.email"
                                        type="email"
                                        name="customer[email]"
                                        placeholder=""
                                        id="CustomerEmail"
                                        class=""
                                        autocorrect="off"
                                        autocapitalize="off"
                                        />
                                    </div>
                                </div>
                                <div class="col-12 col-sm-12 col-md-12 col-lg-12" >
                                    <div class="form-group">
                                        <label for="CustomerPassword">Password
                                            <span class="required">*</span>
                                        </label>
                                        <input
                                        v-model="formData.password"
                                        type="password"
                                        name="customer[password]"
                                        placeholder=""
                                        id="CustomerPassword"
                                        class=""
                                        />
                                    </div>
                                </div>
                                <div class="col-12 col-sm-12 col-md-12 col-lg-12" >
                                    <input type="submit" class="btn mb-3" value="Register" />
                                </div>
                            </div>                            
                        </form>
                    </div>
                    

                    <!-- Forget Link -->
                    <div class="row">
                        <div class="text-left col-12 col-sm-12 col-md-12 col-lg-12" >                                    
                            <p class="mb-4">
                                <span id="forget_password_link">
                                    Forgot your password?
                                </span>
                                &nbsp; | &nbsp;
                                <span @click="toggle_login_register= !toggle_login_register" 
                                id="login_register_link">
                                    {{ toggle_login_register== true ? 'Register' : 'Login'}}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <!--End Main Content-->
            </div>
        </div>
        <!--End Body Container-->
    </div>
    <!--End Page Wrapper-->
</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex";
export default {
    data() {
        return {
            toggle_login_register: true,
            formData:{},
        }
    },
    computed: {
        ...mapState([]),
    },
    methods: {
        ...mapMutations({
            closeLoginModal: "CLOSE_LOGIN_MODAL",
        }),
        ...mapActions({
            register: 'register',
            login: 'login'
        }),
    },
};
</script>

<style>

</style>
