<template>
    <section id="about">
        <div class="info__quote-up"></div>
        <div class="info__quote-down">“</div>
        <div class="info__wrapper">
            <p class="info__text">
                Профессиональный IQ-тест позволяет не только определить коэффициент вашего интеллекта,
                но и выработать список рекомендаций для повышения этого показателя.
            </p>
        </div>
    </section>
</template>

<script>

</script>

<style >
.info__wrapper {
    background: url(../assets/images/info.png) no-repeat center fixed;
    background-size: cover;
    height: 339px;
    width: 100%;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;

}

.info__quote-up {
    color: #ffff;
    width: 23px;
    height: 22.35px;
    position: absolute;
    left: 36px;
    top: 711px;
    background: url(../assets/images/up.png) no-repeat center;
    background-size: contain;
}

.info__quote-down {
    color: #ffff;
    width: 23px;
    height: 22.35px;
    position: absolute;
    left: 269px;
    top: 961px;
    background: url(../assets/images/down.png) no-repeat center;
    background-size: contain;
}

@media (min-width: 375px) {
    .info__quote-down {
        left: 274px;
    }

    .info__quote-up {
        left: 45px;
    }
}

@media (min-width: 412px) {
    .info__quote-down {
        left: 300px;
    }

    .info__quote-up {
        left: 55px;
    }
}

@media (min-width: 768px) {
    .info__quote-down {
        left: 515px;
    }

    .info__quote-up {
        left: 225px;
    }
}

@media (min-width:834px) {
    .info__quote-down {
        left: 535px;
    }

    .info__quote-up {
        left: 265px;
    }
}

/* sams */
@media (min-width:884px) {
    .info__quote-down {
        left: 545px;
    }

    .info__quote-up {
        left: 285px;
    }
}

@media (min-width: 1024px) {
    .info__quote-down {
        left: 615px;
    }

    .info__quote-up {
        left: 355px;
    }
}

@media (min-width: 1114px) {
    .info__quote-down {
        left: 665px;
    }

    .info__quote-up {
        left: 405px;
    }
}

@media (min-width: 1280px) {
    .info__quote-down {
        left: 745px;
    }

    .info__quote-up {
        left: 495px;
    }
}

@media (min-width: 1440px) {
    .info__quote-down {
        left: 825px;
    }

    .info__quote-up {
        left: 567px;
    }
}

@media (min-width: 1920px) {
    .info__quote-down {
        left: 1055px;
    }

    .info__quote-up {
        left: 817px;
    }
}

.info__text {
    margin: 83px 36px 28px 36px;
    width: 248px;
    height: 228px;
    font-family: 'Yeseva One';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    text-align: center;
    letter-spacing: 0.05em;
    color: #FFFFFF;
}
</style>

