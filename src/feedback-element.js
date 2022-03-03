import { LitElement, html, css } from 'lit-element';

class FeedbackElement  extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  static get properties() {
    return {
        msg: { type: String}
    };
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div>
          ${this.msg}
      </div>
    `;
  }
}

customElements.define('feedback-element', FeedbackElement);