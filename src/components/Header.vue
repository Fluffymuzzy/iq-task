<template>
    <nav class="navbar">
        <div class="nav-burger" v-if="!showMenu" v-on:click="toggleMenu">
            <i class="material-icons menu">menu</i>
        </div>
    </nav>
    <div class="nav-list-wrapper" v-bind:class="{ 'nav-list-active': showMenu }">
        <div class="nav-close" v-on:click="toggleMenu">
            <i class="material-icons close">close</i>
        </div>
        <ul class="nav-list">
            <li><a href="/" @click="scrollToSection('main')">Главная</a></li>
            <li><a href="#about" @click="scrollToSection('about')">Информация о тесте</a></li>
            <li><a href="#test-info" @click="scrollToSection('test-info')">Пройти тест</a></li>
        </ul>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            showMenu: false,
        };
    },
    methods: {
        toggleMenu() {
            this.showMenu = !this.showMenu;
            const navBurger = document.querySelector('.nav-burger');
            if (navBurger) {
                navBurger.style.display = this.showMenu ? 'none' : 'block';
            }
        },
        scrollToSection(sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                window.scrollTo({
                    top: section.offsetTop,
                    behavior: 'smooth'
                })
                this.showMenu = false;
            }
        }
    },
};
</script>
  
<style>
.navbar {
    display: flex;
    justify-content: flex-start;
    padding: 1rem;
    height: 46px;
    background-color: #181818;
}

.nav-burger {
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #DADADA
}

.nav-burger:hover {
    color: #F4CE0C;
}

.menu {
    font-size: 1.5rem;
}

.nav-list-wrapper {
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #181818;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s, visibility 0.3s;

}

@media (max-width: 768px) {
    .nav-list-wrapper {
        justify-content: flex-start;
    }
}

.nav-list-wrapper.nav-list-active {
    opacity: 1;
    visibility: visible;
}

.nav-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    color: #DADADA;
}

.nav-close:hover {
    color: #F4CE0C;
}

.close {
    font-size: 2rem;
}

.nav-list {
    list-style: none;
    margin: 0;
    padding: 0;
}

@media (max-width: 768px) {}

.nav-list li {
    position: absolute;
    margin: 1rem 0;
    width: 197px;
    height: 19px;
    left: 23px;
}

.nav-list li:nth-child(1) {
    top: 110px;
}

.nav-list li:nth-child(2) {
    top: 156px;
}

.nav-list li:nth-child(3) {
    top: 202px;
}

.nav-list a {
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 22px;
    text-transform: uppercase;
    color: #fff;
    text-decoration: none;
    transition: color 0.3s;

}

.nav-list a:hover {
    color: #F4CE0C;
}
</style>
  