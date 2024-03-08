<template>
    <div class="navbar-container">
        <div class="hidden-navbar">
            <div class="container-nav">
                <div class="icon-navbar"><a href="">RM</a></div>
                <div class="options">
                    <a href="">Inicio</a>
                    <a href="">Datos</a>
                    <a href="">Trabajos</a>
                </div>
            </div>
        </div>
    </div>
</template>


<style>
.navbar{
    border-radius: 10px;
    width: 90vw;
    justify-content: center;
    margin: 0px 10px 10px 0px;
    margin: 0 auto;
    font-weight: 500;
  }
  
  .navbar-container{
    width:100%;
    align-items: center;
    justify-content: space-between;
  }
  
  .container-nav{
    color: var(--second-color);
    display: flex;
    padding: 15px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    transition: width 0.5s;
  }
  .container-nav .icon-navbar > a{
    color: var(--second-color);
    display: flex;
    justify-content: center;
    font-size: 2rem;
    text-decoration: none;
  }
  
  .container-nav .options > a{
    text-decoration: none;
    color: var(--second-color);
    font-size: 1.4;
    margin: 30px;
  }
</style>