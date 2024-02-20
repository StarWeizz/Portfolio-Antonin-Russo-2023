<template>
    <!-- <header>
        <div class="extraBox"></div>
        <div class="experience-show">
            <img src="../assets/img/background.jpg" class="banner">
            <a href="#" class="logo experience-middle">Anto.</a>
            <div class="toggle"></div>
        </div>
    </header> -->
    <div class='experience'>
        <div class="extraBox">
        </div>
        <div class='experience-show'>
            <!-- <h1 class='experience-top'>Let Me show you</h1> -->
            <div class='experience-middle-container'>
                <h1 class='experience-middle'>Antonin.</h1>
            </div>
            <!-- <h1 class='experience-bottom'>My Magic Trick</h1> -->
        </div>
    </div>
</template>


<style>
    /* header {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        padding: 0 100px;
        background: #000;
        transition: 1s;
        box-sizing: border-box;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        z-index: 10;
    }

    header.sticky {
        height: 80px;
    }

    header .logo {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 15vw;
        color: #fff;
        z-index: 100;
        transition: 1s;
        font-weight: 700;
        text-decoration: none;
    }

    header.sticky .logo {
        position: absolute;
        font-size: 2em;
        left: 100px;
        transform: translate(0, -50%);
        writing-mode: horizontal-tb;

    }

    header img.banner {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        object-fit: cover;
        transition: 1s;
    }

    nav {
        position: relative;
        display: flex;
    }

    nav ul {
        position: relative;
        margin: 0;
        display: flex;
        transition: 0.25s;
        opacity: 0;
        visibility: hidden;
        transform: translateX(100px);
    }

    header.sticky nav ul {
        opacity: 1;
        transition: 0.25s;
        transition-delay: 0.75s;
        visibility: visible;
        transform: translateX(0);
    }

    nav ul li {
        list-style: none;
    }

    @media (max-width: 991px) {

        header .logo {
            top: 0%;
            left: 0%;
            writing-mode: vertical-lr;
            font-size: 10em;
            transform: translate(-20%, 10%);
        }

    } */

    :root {
        --progress1: 0.012;
    }

    .experience {
        position: relative;
        background-image: url("../assets/img/background.jpg");
        width: 100%;
        height: 100vh;
        z-index: 10;
        overflow: hidden;
    }

    .extraBox {
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgb(0, 0, 0);
        opacity: 1;
        width: 100%;
        height: 100%;
        z-index: 10;
        pointer-events: none;
    }

    /* .experience .experience-top{
    position: absolute;
    top: 1%;
    left: 2%;
    font-size: 3rem;
    font-family: 'bold';
} */
    .experience .experience-middle-container {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .experience .experience-middle {
        transform: scale(calc(var(--progress1) * 30)) !important;
        transform-origin: 48.2%;
        font-size: 15vw;
        color: #fff;
        font-weight: 700;
        white-space: nowrap;
    }

    /* .experience .experience-bottom{
    position: absolute;
    bottom: 1%;
    right: 2%;
    font-size: 3rem;
    font-family: 'bold';
} */
</style>

<script>
    // window.addEventListener("scroll", function () {
    //     var header = document.querySelector("header");
    //     header.classList.toggle("sticky", window.scrollY > 0);
    // });

    //   const navigation = document.querySelector('nav');
    //   document.querySelector('.toggle').onclick = function()
    //   {
    //     this.classList.toggle('active');
    //     navigation.classList.toggle('active');
    //   }

    import {
        gsap
    } from 'gsap';
    import {
        ScrollTrigger
    } from 'gsap/all';

    export default {
        mounted() {
            gsap.registerPlugin(ScrollTrigger)

            const exp = gsap.timeline({
                scrollTrigger: {
                    trigger: ".experience",
                    start: "top top",
                    end: "+=1500",
                    scrub: true,
                    markers: true,
                    pin: ".experience"
                }
            });

            exp.to(".experience-middle", {
                "--progress1": 1,
                ease: "none",
                smoothOrigin: false
            });
            exp.from(
                ".extraBox", {
                    scaleX: 0,
                    ease: "none"
                },
                "-=0.4"
            );
        }
    }
</script>