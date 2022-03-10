
/*

Descrizione:

Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

Bonus:

Aggiungere alla pagina un’immagine, presa anch’essa da un data.

*/

const app = new Vue({
	el: '#app', //container dove Vue agisce
	data: {
		///dati visualizzati da Vue

        titleClass: 'title-class',
        btnClass: 'btn-class',
        color:'blue',

        titleMessage: 'ciao',
        buttonMessage1: 'cambia ciao in hello',
        buttonMessage2: 'show content up here',


        srcImage: 'https://picsum.photos/400/400',
		altImage: 'image from lorem picsum',
        imageClass: 'image-class',
        invertory: 100, 
        hidden: false
    },   
        
    methods: {
        changeMessage: function() {
            if(this.titleMessage == 'ciao') {
                this.titleMessage = 'hello';
                this.buttonMessage1 = 'change hello in ciao';

            } else {
                this.titleMessage = 'ciao';
                this.buttonMessage1 = 'cambia ciao in hello';

            }
            
        },

        changeDisplay: function() {
            if(this.hidden == true) {
                this.hidden = false;
                this.buttonMessage2 = 'show content up here';

            } else {
                this.hidden = true;
                this.buttonMessage2 = 'hide';

            }
        },

    }

});

