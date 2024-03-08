<template>
    <div class="containerIntro">
        <div class="works">
            <div class="name">Rafael Cienfuegos Murrieta</div>
            <div class="worksColor" id="worksColor">
                <span>{{ textoAct }}</span>
            </div>
        </div>
        <div class="image">
            <img src="../assets/RafaelMurrieta.jpg" alt="">
        </div>
    </div>
</template>

<style>
.containerIntro {
    margin: 0 auto;
    display: flex;
    width: 90vw;
    height: 80vh;
}

.works {
    display: grid;
    align-content: center;
    color: var(--second-color);
    font-weight: 600;
    font-size: 4rem;
    width: 100%;
    height: 100%;
}

.worksColor {
    margin-top: 40px;
    color: var(--second-color);
    font-weight: 600;
    font-size: 1.5rem;
}

.image {
    display: grid;
    justify-content: right;
    align-content: center;
    width: 100%;
    height: 100%;
}

.image img {
    border-radius: 10px;
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
                'Full stack',
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
