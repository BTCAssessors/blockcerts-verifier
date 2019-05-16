import { html } from '@polymer/lit-element';
import { unsafeHTML } from 'lit-html/lib/unsafe-html.js';
import CSS from './_components.full-certificate-css';
import '../../atoms/CertificateDetails/index';
import '../../atoms/FullCertificateV1';
import '../../molecules/VerifyButton';

import '../../../../node_modules/@cowcerts/certificate-render/dist/cowcert-render.es';

function renderDisplayHTML (displayHTML) {
  return html`<section class='buv-c-full-certificate'>${unsafeHTML(displayHTML)}</section>`;
}

function renderCowcerts (certificate) {
  return html`
        <section class='buv-c-cowcerts-certificate'>
            <cow-cert certificate="${certificate}"></cow-cert>
        </section>`;
}

export default function FullCertificate ({
  hasCertificateDefinition,
  displayHTML,
  isCowcerts,
  fullCertificate
}) {

  if (!hasCertificateDefinition) {
    return null;
  }

  // TODO: What if not cowcerts
  let certificateHTML;
  if(isCowcerts) {
    certificateHTML = renderCowcerts(fullCertificate);
  } else if(displayHTML) {
    certificateHTML = renderDisplayHTML(displayHTML);
  } else {
    certificateHTML = html`<buv-full-certificate-v1></buv-full-certificate-v1>`
  }

  return html`
    ${CSS}
    ${certificateHTML}
    <div class='buv-c-full-certificate__details'>
      <buv-certificate-details class='buv-c-full-certificate__details-list'></buv-certificate-details>
      <buv-verify-button class='buv-c-full-certificate__button' isHollow></buv-verify-button>
    </div>
  `;
}
