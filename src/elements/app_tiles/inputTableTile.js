import { html } from 'lit';
import { TileBase } from './tileBase';

class inputTableTile extends TileBase {
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
    return html`${Object.values(this.tableContent).map(rowValues => {
      const htmlRow = html`
        <div class="input-group row">${this.makeRow(rowValues)}</div>
      `;
      return htmlRow;
    })}`;
  }

  /* eslint-disable class-methods-use-this */
  makeRow(rowValues) {
    let rowInner;
    if (typeof rowValues.header === 'undefined') {
      window.console.log('row:', rowValues);
      rowInner = html` <label class="input-group-text col-3"
          >${html([rowValues.label])}</label
        >
        ${rowValues.values.map(
          value => html`
            <input
              class="form-control bg-light col-2"
              disabled
              .value="${value[0]}"
            />
            <label class="input-group-text col-1">${html([value[1]])}</label>
          `
        )}`;
    } else {
      window.console.log('header:', rowValues);
      rowInner = html`${rowValues.header.map(
        value => html`<label class="input-group-text col-3">${value}</label>`
      )}`;
    }
    return rowInner;
  }
  /* eslint-enable class-methods-use-this */
}

customElements.define(`input-table`, inputTableTile);
