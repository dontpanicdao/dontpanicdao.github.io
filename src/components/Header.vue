<template>
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-lg-8 col-md-11 col-sm-12">
                <div class="topnav">
                    <router-link class="ignoreHoverAndActive" to="/"><img src="img/brand/jibeHex.png" alt="Logo">
                    </router-link>

                    <router-link to="/converter">Converter</router-link>
                    <router-link to="/l1l2">L1->L2</router-link>
                    <router-link to="/signature">Signature</router-link>
                    <div class="topnav-right">
                        <a href="https://github.com/gaetbout/stark-utils" target="_blank">About</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header",
};
</script>

<style scoped>
.topnav {
    position: relative;
    overflow: hidden;
}

img {
    width: 32px;
    height: 32px;
}

.topnav a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    border-radius: 10px;
}

.topnav a:hover {
    background: linear-gradient(0deg, rgba(40, 40, 110, 1) 0%, rgba(105, 66, 93, 1) 44%, rgba(232, 81, 34, 1) 100%);
    color: #28286e
}

.topnav a.active {
    background-color: #e85122;
    color: #28286e;
    border-radius: 10px;
}

.topnav a.active:first-child {
    background-color: #e8502200;
}

.topnav-right {
    float: right;
}

@media screen and (max-width: 600px) {

    .topnav a,
    .topnav-right {
        float: none;
        display: block;
    }

    .topnav-centered a {
        position: relative;
        top: 0;
        left: 0;
        transform: none;
    }
}
</style>