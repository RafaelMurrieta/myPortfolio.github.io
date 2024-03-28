<template>
<div class="aboutMe">
    <div class="info-me">
        <div class="worksColor" id="worksColorS" style="">
            <span>Sobre mi</span>
        </div>
        <div class="textAbout">
    
            <h1>
                Soy un apasionado del desarrollo web y mi sed de conocimiento me
                motiva a explorar este apasionante mundo día a día. Desde mis
                primeros pasos en la programación, me he embarcado en un emocionante
                viaje de aprendizaje, expandiendo mis habilidades en HTML, CSS, PHP, JAVA y
                JavaScript, así como explorando bibliotecas y frameworks modernos
                como Laravel y Vue. Además, cuento con una formación en ingeniería en
                sistemas computacionales, lo que me ha proporcionado una base sólida
                en conceptos de programación, arquitectura de sistemas y gestión de
                proyectos tecnológicos. Actualmente, estoy enfocado en fortalecer
                mis habilidades en el desarrollo backend, lo que me permitirá crear
                soluciones web integrales y versátiles.
            </h1> 
        </div>  
    </div>

    <div class="certificades">
        <div class="container-card">
            <div class="card"><object data="../assets/pdf/Rafael Cienfuegos Murrieta - Curso Git y GitHub_ controle y comparta su código - Alura.pdf" type="pdf"></object></div>
            <div class="card"><object data="../assets/pdf/Rafael Cienfuegos Murrieta - Curso Java OO_ Entendiendo la Orientación a Objetos - Alura.pdf" type="pdf"></object></div>
            <div class="card"><object data="../assets/pdf/Rafael Cienfuegos Murrieta - Formación Integre aplicaciones Java con Base de datos - Alura.pdf" type="pdf"></object></div>
            <div class="card"><object data="../assets/pdf/Rafael Cienfuegos Murrieta - Programa -.pdf" type="pdf"></object></div>
        </div>
    </div>
</div>
</template>


<style>

#worksColorS{
    margin: 20% 0 0 15%;
    justify-content: start;
    height: auto;
}
#about{
    width: 90vw;
    height: 100vh;
    display: flex;
    justify-content: center;
}

.About{
    width: 90%;
    height: 100%;
    display: grid;
    justify-content: center;
    align-content: center;
}
.info-me{
    width: 50%;
    margin :0 0 0 10%;
}
.aboutMe{
    display: flex;
    justify-content: center;
    align-content: center;
}

.aboutMe .textAbout {
    width: 80%;
    font-size: .8rem;
    text-align: center;
    padding: 10px;
}

.certificades{
    display: grid;
    gap: 30px;
    width: 50%;
}
.container-card{
    display: grid;
    margin-top: 20%;
    width: 100%;
    justify-content: center;
}
.container-card .card{
    background-color: antiquewhite;
}



</style>

<script>

</script>