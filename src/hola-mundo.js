import {LitElement, html} from 'lit-element';

/**
 * `LowerCaseDashedName` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class HolaMundo extends LitElement {
    
    //se definen las propiedades de los componentes, que actualizarán el template
    static get properties() {
        return {
            quien: {type: String}
        };
    }

    /**
     * Instance of the element is created/upgraded. Use: initializing state,
     * set up event listeners, create shadow dom.
     * @constructor
     */
    constructor() {
        super();
    }

    /*static get styles() {
        return [
            super.styles,
            css``,
        ];
    }*/

    /**
     * Implement to describe the element's DOM using lit-html.
     * Use the element current props to return a lit-html template result
     * to render into the element.
     * define el template del elemento
     */
    render() {
        //con las comillas inversas generamos un template string para poder 
        
        return html`
        <p>Hola <strong>${this.quien}</strong></p>
        `;
    }

}
//nuevo componente que se llama 
customElements.define('hola-mundo', HolaMundo);