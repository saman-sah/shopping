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
                        method="post" action="" id="CustomerLoginForm" 
                        accept-charset="UTF-8" class="contact-form" >
                            <div class="row">
                                <div class="col-12 col-sm-12 col-md-12 col-lg-12" >
                                    <div class="form-group">
                                        <label for="CustomerEmail" >Email
                                            <span class="required" >*</span >
                                            </label>
                                        <input
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
                                            type="password"
                                            value=""
                                            name="customer[password]"
                                            placeholder=""
                                            id="CustomerPassword"
                                            class=""
                                        />
                                    </div>
                                </div>
                                <div class="col-12 col-sm-12 col-md-12 col-lg-12" >
                                    <input type="submit" class="btn mb-3" 
                                    :value="toggle_login_register== true ? 'Login' : 'Register'" />
                                </div>
                            </div>
                        </form>
                        <form v-else
                        method="post" action="" id="CustomerLoginForm" 
                        accept-charset="UTF-8" class="contact-form" >
                            <div class="row">
                                <div class="col-12 col-sm-12 col-md-12 col-lg-12" >
                                    <div class="form-group">
                                        <label for="CustomerFname" >First Name
                                            <span class="required" >*</span >
                                            </label>
                                        <input
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
                                            type="text"
                                            name="customer[lname]"
                                            placeholder=""
                                            id="CustomerLname"
                                            class=""
                                            autocorrect="off"
                                            autocapitalize="off"
                                            autofocus
                                        />
                                    </div>
                                </div>
                                <div class="col-12 col-sm-12 col-md-12 col-lg-12" >
                                    <div class="form-group">
                                        <label for="CustomerEmail" >Email
                                            <span class="required" >*</span >
                                            </label>
                                        <input
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
                                            type="password"
                                            value=""
                                            name="customer[password]"
                                            placeholder=""
                                            id="CustomerPassword"
                                            class=""
                                        />
                                    </div>
                                </div>
                                <div class="col-12 col-sm-12 col-md-12 col-lg-12" >
                                    <input type="submit" class="btn mb-3" 
                                    :value="toggle_login_register== true ? 'Login' : 'Register'" />
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
import { mapMutations, mapState } from "vuex";
export default {
    data() {
        return {
            toggle_login_register: true
        }
    },
    computed: {
        ...mapState([]),
    },
    methods: {
        ...mapMutations({
            closeLoginModal: "CLOSE_LOGIN_MODAL",
        }),
    },
};
</script>

<style>
#login_register_link,
#forget_password_link {
    cursor: pointer;
}
.login-page {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.login-modal-container {
    z-index: 999;
    display: flex;
    position: relative;
    background: #fff;
    width: 40%;
    justify-content: center;
    margin: auto;
    padding: 3em;
    margin-top: 5em;
}
</style>
