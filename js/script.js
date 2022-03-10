
/*

Descrizione:

Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

Bonus:

Aggiungere alla pagina un’immagine, presa anch’essa da un data.

*/

const settings = {
	el: '#app', //container dove Vue agisce
	data: {
		///dati visualizzati da Vue
        titleClass: 'title-class',
        btnClass: 'btn-class',
        titleMessage: 'ciao',
        buttonMessage: 'cambia ciao in hello',

        srcImage: 'https://picsum.photos/400/400',
		altImage: 'image from lorem picsum',
        imageClass: 'image-class'

	},
	methods: {
		changeMessage: function() {
            if(this.titleMessage == 'ciao') {
                this.titleMessage = 'hello';
                this.buttonMessage = 'change hello in ciao';
            } else {
                this.titleMessage = 'ciao';
                this.buttonMessage = 'cambia ciao in hello';
            }
            
		}

	}
}

const app = new Vue(settings);

