import {html, LitElement} from '@polymer/lit-element';
import CSS from './_components.visualizer-tabs-css';
import '../../atoms/EDSEndorsement';
import '../../organisms/CardCertificate';
import '../../organisms/FullCertificate';
import * as DISPLAY_MODE from "../../../constants/displayMode";

class VisualizerTabs extends LitElement {

    constructor() {
        super();
        this.showCertificate = true;
    }

    static get properties () {
        return {
            hasCertificateDefinition: Boolean,
            edsEndorsement: Object,
            showCertificate: Boolean
        };
    }

    _handleClick(event) {
        let id = '';
        if(event &&
            event.path instanceof Array &&
            event.path.length > 0 &&
            event.path[0] instanceof Object) {
            id = event.path[0].id;
        } else {
            console.error('Unable to find clicked target id');
            return;
        }

        if(id === 'tab-eds') {
            this.showCertificate = false;
            this.shadowRoot.getElementById('tab-eds').classList.add('active');
            this.shadowRoot.getElementById('tab-title').classList.remove('active');
        } else if (id === 'tab-title') {
            this.showCertificate = true;
            this.shadowRoot.getElementById('tab-eds').classList.remove('active');
            this.shadowRoot.getElementById('tab-title').classList.add('active');
        } else {
            console.log(`Unknown id (${id}) triggered tab change`);
        }
    }

    _render({hasCertificateDefinition, edsEndorsement}) {
        if (!hasCertificateDefinition) {
            return null;
        }

        // TODO: Pick display mode plz
        let displayMode = DISPLAY_MODE.FULL;

        let certificateComponent = html`${displayMode === DISPLAY_MODE.FULL ?
            html`<buv-full-certificate></buv-full-certificate>` :
            html`<buv-card-certificate></buv-card-certificate>`}`;

        let edsComponent = html`${edsEndorsement ? html`<buv-eds-endorsement></buv-eds-endorsement>` : ''}`;

        return html`
            ${CSS}
            ${edsEndorsement ? html`
            <div class='buv-c-tabs'>
                <div class='buv-c-tab active' id='tab-title' on-click='${(e) => this._handleClick(e)}'>Títol</div>
                <div class='buv-c-tab' id='tab-eds' on-click='${(e) => this._handleClick(e)}'>Suplement Europeu</div>
            </div>` : ''}
            ${this.showCertificate ? certificateComponent :edsComponent}
        `;

    }
}

window.customElements.define('buv-visualizer-tabs-raw', VisualizerTabs);

function VisualizerTabsWrapper ({ hasCertificateDefinition, edsEndorsement }) {
    if(!hasCertificateDefinition)
        return null;
    return html`<buv-visualizer-tabs-raw
    hasCertificateDefinition='${hasCertificateDefinition}'
    edsEndorsement='${edsEndorsement}'
    ></buv-visualizer-tabs-raw>`;
}

export default VisualizerTabsWrapper;

