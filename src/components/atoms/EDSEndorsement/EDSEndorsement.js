import { html } from '@polymer/lit-element';
import CSS from './_components.eds-endorsement-css';

import '../../../../node_modules/@cowcerts/eds-render/dist/eds-render.es';

export default function EDSEndorsement ({
  fullCertificate,
}) {

  return html` ${CSS}<section class='buv-c-eds-endorsement'>
    <european-diploma-supplement certificate="${fullCertificate}"></european-diploma-supplement>
    </section>
    `;
}
