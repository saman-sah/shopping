<template>
    <div id="page-content" class="login-page">
        <div class="modalOverly" @click.self="closeLoginModal"></div>
        <!--Body Container-->
        <div class="container login-modal-container">
            <div class="row">
                <!--Main Content-->
                <div class="col-12 col-sm-12 col-md-12 col-lg-12 box">
                <div class="page-title"><h1>Login</h1></div>
                    <div class="mb-4">
                        <form
                            method="post"
                            action=""
                            id="CustomerLoginForm"
                            accept-charset="UTF-8"
                            class="contact-form"
                        >
                            <h3>Registered Customers</h3>
                            <p>
                                If you have an account with us, please log in.
                            </p>
                            <div class="row">
                                <div
                                    class="col-12 col-sm-12 col-md-12 col-lg-12"
                                >
                                    <div class="form-group">
                                        <label for="CustomerEmail"
                                            >Email
                                            <span class="required"
                                                >*</span
                                            ></label
                                        >
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
                                <div
                                    class="col-12 col-sm-12 col-md-12 col-lg-12"
                                >
                                    <div class="form-group">
                                        <label for="CustomerPassword"
                                            >Password
                                            <span class="required"
                                                >*</span
                                            ></label
                                        >
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
                            </div>
                            <div class="row">
                                <div
                                    class="text-left col-12 col-sm-12 col-md-12 col-lg-12"
                                >
                                    <input
                                        type="submit"
                                        class="btn mb-3"
                                        value="Sign In"
                                    />
                                    <p class="mb-4">
                                        <a href="forgot-your-password.html"
                                            >Forgot your password?</a
                                        >
                                        &nbsp; | &nbsp;
                                        <a
                                            href="register.html"
                                            id="customer_register_link"
                                            >Create account</a
                                        >
                                    </p>
                                </div>
                            </div>
                        </form>
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
    padding: 3em 0;
    margin-top: 5em;
}
</style>
