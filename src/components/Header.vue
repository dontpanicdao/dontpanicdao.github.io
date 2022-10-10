<template>
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-lg-7 col-md-8 col-sm-10">
                <div class="topnav">
                    <router-link to="/"><img src="img/brand/jibeHex.png" alt="Logo"></router-link>

                    <router-link to="/converter">Converter</router-link>
                    <router-link to="/l1l2Converter">L1->L2</router-link>
                    <router-link to="/signature">Signature</router-link>
                    <div class="topnav-right">
                        <router-link href="https://github.com/gaetbout/stark-utils" target="_blank">About</router-link>
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