import { html } from '@polymer/lit-element';
import CSS from './_components.sed-endorsement-css';

export default function SEDEndorsement ({
  hasCertificateDefinition,
}) {
  if (!hasCertificateDefinition) {
    return null;
  }

  return html`
    ${CSS}
    <section class='buv-c-sed-endorsement'>
        <h1>Hello World SED</h1> 
    </section>
  `;
}
