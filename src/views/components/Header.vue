<template>
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-lg-7 col-md-8 col-sm-10">
                <!-- Top navigation -->
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
/* Add a black background color to the top navigation */
.topnav {
    position: relative;
    overflow: hidden;
}

/* Style the links inside the navigation bar */
.topnav a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
}

/* Change the color of links on hover */
.topnav a:hover {
    background-color: #e85122;
    color: #28286e
}

/* Add a color to the active/current link */
.topnav a.active {
    background-color: #e85122;
    color: #28286e
}

/* Centered section inside the top navigation */
.topnav-centered a {
    float: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

/* Right-aligned section inside the top navigation */
.topnav-right {
    float: right;
}

/* Responsive navigation menu - display links on top of each other instead of next to each other (for mobile devices) */
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