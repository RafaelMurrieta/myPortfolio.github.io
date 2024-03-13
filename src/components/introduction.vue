<template>
    <div class="worksColor" id="worksColor">
        <span>{{ textoAct }}</span>
    </div>
    <div class="containerIntro">
        
        <div class="works">
            
            <div class="name">Rafael Cienfuegos Murrieta</div>

        </div>
        <div class="image">
            <img src="../assets/RafaelMurrieta.jpg" alt="">
        </div>
    </div>
</template>

<style>
.conainterIntrod{
    margin-top: 2%;
    display: grid;
    align-items: center;
    justify-content: center;
}
.containerIntro {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90vw;
    height: 80vh;
}

.works {
    display: grid;
    align-content: center;
    color: var(---black-font);
    font-weight: 600;
    font-size: 4rem;
    width: 100%;
    margin: 0 0 0 20%;
    height: 100%;
}

.worksColor {
    display: grid;
    align-content: center;
    justify-content: center;
    font-weight: 600;
    font-size: 4rem;
    width: 100%;
    height: 100%;
    text-transform: uppercase;
    text-align: center;
    background-color: #cccccc;
    color: transparent;
    text-shadow: 4px 10px 9px rgba(255,255,255,0.9);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    z-index: -100;
}

.image {
    width: 100%;
}

.image img {
    border-radius: 50%;
    margin-top: 40px;
    max-width: 50%;
}
</style>

<script>
export default {
    data() {
        return {
            items: [
                'Ingeniero en sistemas computacionales',
                'Desarrollador web',
                'Amante de la tecnologia',
                'Constante aprendizaje',
                'Mejorar cada dia',
                'Gamer',
                'Front end',
                'Back end',
                ''
            ],
            index: 0,
            interval: 1000,
            temp: null,
            wordC: null,
            tam: null
        };
    },
    computed: {
        textoAct() {
            this.wordC = this.items[this.index];
            return this.wordC;
        }
    },
    created() {
        setInterval(() => {
            this.index = (this.index + 1) % this.items.length;
        }, this.interval);

        setInterval(() => {
            if (this.index >= this.items.length - 1) {
                this.index = 0;
            }
        }, 1000);
    },
    methods: {
    }
}
</script>
