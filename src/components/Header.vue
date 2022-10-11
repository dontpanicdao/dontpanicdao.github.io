<template>
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-lg-8 col-md-11 col-sm-12">
                <div class="topnav">
                    <router-link to="/"><img src="img/brand/jibeHex.png" alt="Logo">
                    </router-link>

                    <router-link to="/converter">Converter</router-link>
                    <router-link to="/l1l2">L1 &#8594; L2</router-link>
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
    color: hsl(0, 0%, 95%);
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    border-radius: 10px;
}

.topnav a:hover {
    background-color: hsl(14, 81%, 52%);
    color: hsl(240, 47%, 29%)
}

.topnav a.active {
    background-color: hsl(14, 81%, 52%);
    color: hsl(240, 47%, 29%);
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