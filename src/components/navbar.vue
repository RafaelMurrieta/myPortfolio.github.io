<template>
    <div class="navbar-container">
        <div class="hidden-navbar">
            <input type="checkbox" id="show-menu" style="display: none;" />
            <label for="show-menu" class="toggle" id="checkedMenu">
                <span id="span1" class="span1"></span>
                <span id="span2" class="span2"></span>
                <span id="span3" class="span3"></span>
            </label>
            <div class="container-nav">
                <div class="icon-navbar"><a href="">ICON</a></div>
                <div class="opcions">
                    <a href="">Inicio</a>
                    <a href="">Datos</a>
                    <a href="">Trabajos</a>
                </div>
            </div>
        </div>
        <div class="icon-navbar-hidden"><a href="">ICON</a></div>
    </div>
  

</template>


<script>

window.onload = function() {
    if (screen.width <= 768) {
        const iconf = document.querySelector('.icon-navbar')
        const iconHidden = document.querySelector('.icon-navbar-hidden');
        const hiddenNavbar = document.querySelector(".hidden-navbar");
        const containerNav = document.querySelector('.container-nav')
        const navContainer = document.querySelector('.navbar-container')
        const options = document.querySelector(".opcions");
            iconf.classList.add('active')
            hiddenNavbar.classList.add("Active");
            navbar.classList.add('hidden');
            containerNav.classList.add('res')
            options.classList.add('gridAdd')
            iconHidden.classList.add('active')
            navContainer.classList.add('active')
    }else{
            iconf.classList.remove('active')
            hiddenNavbar.classList.remove("Active");
            navbar.classList.remove('hidden');
            containerNav.classList.remove('res')
            options.classList.remove('gridAdd')
            iconHidden.classList.remove('active');
            navContainer.classList.remove('active')
    }
const checkboxMenu = document.getElementById("show-menu");
const span1 = document.getElementById("span1");
const span2 = document.getElementById("span2");
const span3 = document.getElementById("span3");
    if (checkboxMenu) {
        checkboxMenu.addEventListener('change', function(){
            const options = document.querySelector(".opcions");
            if (this.checked) {
                options.style.width = '30wv'
                options.style.display = 'grid'
                span1.classList.add('active');
                span2.classList.add('active');
                span3.classList.add('active');
            } else {
                options.style.width = '0wv'
                options.style.display = 'none'
                span1.classList.remove('active');
                span2.classList.remove('active');
                span3.classList.remove('active');
            }
        });
    }
};

window.addEventListener('resize', function(event) {
    location.reload()
});


</script>

