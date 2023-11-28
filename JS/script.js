class Sortear {
    botaoJedi = document.getElementById('jedi');
    botaoSith = document.getElementById('sith');
    imagensJedi = ['ahsoka.jpg', 'anakin.jpg', 'luke.jpg', 'obi-wan.jpg', 'qui-gon.jpg', 'rey.jpg', 'windu.jpg', 'yoda.jpg'];
    imagensSith = ['baylan.jpg', 'darth-maul.jpg', 'darth-vader.jpg', 'kylo-ren.jpg', 'palpatine.jpg', 'shin-hati.jpg', 'snoke.jpg', 'tyranus.jpg'];
    
    botaoMusica = document.getElementById('btn-music'); 
    musica = new Audio("../msc/Cantina-Band.mp3");
    musicaJedi = new Audio("../msc/Jedi-Theme.mp3");
    musicaSith = new Audio("../msc/Sith-Theme.mp3");
    musicaAtual = this.musica;

    constructor(){
        this.adicionarEventosClick();
        this.adicionarEventoDeGirarCarta();
    }

    adicionarEventoDeGirarCarta() {
        const carta = document.querySelector('.flip-card');
        carta.addEventListener('click', () => {
            this.botaoJedi.checked = false;
            this.botaoSith.checked = false;
        });
    }

    sortearImagem(arrayImgs, nome){
        const indiceAleatorio = Math.floor(Math.random() * arrayImgs.length);
        
        const elementoImagem = document.getElementById('imagem-sorteada');

        if(nome == 'jedi')            
            elementoImagem.src = "img/persons-jedi/" + arrayImgs[indiceAleatorio];  
        else 
            elementoImagem.src = `img/persons-sith/${arrayImgs[indiceAleatorio]}`;
    }
    
    adicionarEventosClick() {
        this.botaoJedi.addEventListener('click', () => {
            this.sortearImagem(this.imagensJedi, 'jedi');
            if (this.botaoMusica.value === this.musica.value) {
                this.trocarMusica(this.musicaJedi);
            }
        });

        this.botaoSith.addEventListener('click', () => {
            this.sortearImagem(this.imagensSith, 'sith');
            if (this.botaoMusica.value === this.musica.value) {
                this.trocarMusica(this.musicaSith);
            }
        });

        this.botaoMusica.addEventListener('click', () => {
            if (this.botaoJedi.checked) {
                this.trocarMusica(this.musicaJedi);
            } else if (this.botaoSith.checked) {
                this.trocarMusica(this.musicaSith);
            } else {
                this.trocarMusica(this.musica);
            }
        });
    }

    atualizarTextoBotaoMusica() {
        const botaoMusica = document.getElementById('btn-music');
        if (this.musica.paused) {
            botaoMusica.value = "►";
        } else {
            botaoMusica.value = "❚❚";
        }
    }

    trocarMusica(novaMusica) {
        if (this.musica === novaMusica) {
            this.tocarMusica();
        } else {
            this.musica.pause();
            this.musica.currentTime = 0;
            this.musica = novaMusica;
            this.tocarMusica();
        }
    }

    tocarMusica() {
        if (this.musica.paused) {
            this.musica.play();
        } else {
            this.musica.pause();
        }
        this.atualizarTextoBotaoMusica();
        this.musica.currentTime = 0;
    }
}

window.addEventListener('load', () => new Sortear());

