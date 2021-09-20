import { html } from 'lit';
import { TileBase } from './tileBase';

class tableTile extends TileBase {
  render() {
    this.tableContent = this.appConf.content;
    this.htmlTableContent = this.arrangeFields();
    window.console.log(this.htmlTableContent);
    return [
      super.render(),
      html`
        <table class="table">
          ${this.htmlTableContent}
        </table>
      `,
    ];
  }

  arrangeFields() {
    return html`${Object.values(this.appConf.content).map(rowValues => {
      const htmlRow = html`
        <tr>
          ${rowValues.map(value => html`<td>${value}</td>`)}
        </tr>
      `;
      return htmlRow;
    })}`;
  }
}

customElements.define('table-tile', tableTile);
