<template>
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-lg-7 col-md-8 col-sm-10">
                <div class="topnav">
                    <!-- Centered link -->
                    <div class="topnav-centered">
                        <a href="#home" class="active">Home</a>
                    </div>
                    <!-- Left-aligned links (default) -->
                    <a href="#news">News</a>
                    <a href="#contact">Contact</a>

                    <!-- Right-aligned links -->
                    <div class="topnav-right">
                        <a href="#search">Search</a>
                        <a href="#about">About</a>
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
    color: #28286e
}

.topnav-centered a {
    float: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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