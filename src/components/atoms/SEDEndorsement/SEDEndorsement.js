import { html } from '@polymer/lit-element';
import CSS from './_components.sed-endorsement-css';

export default function SEDEndorsement ({
  hasCertificateDefinition,
  sedEndorsement
}) {
  if (!hasCertificateDefinition) {
    return null;
  }

  let sedClaim = sedEndorsement.claim;

  return html`
    ${CSS}
    <section class='buv-c-sed-endorsement'>
      <table>
        <thead>
          <tr>
            <th></th>
            <th class='lang-ca'>Dades de la persona titulada</th>
          </tr>
          <tr>
            <th class='lang-ca'>1.</th>
            <th class='lang-en'>Information identifying the holder of the qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th class='lang-ca'>1.1</th>
            <th><span class='lang-ca'>Cognoms</span> / <span class='lang-en'>Family name(s)</span></th>
          </tr> 
          <tr>
            <td></td>
            <td>Plana Vinyes</td>
          </tr>
          <tr>
            <th class='lang-ca'>1.2</th>
            <th><span class='lang-ca'>Nom</span> / <span class='lang-en'>Given name(s)</span></th>
          </tr>
          <tr>
            <td></td>
            <td>Meritxell</td>
          </tr>
          <tr>
            <th class='lang-ca'>1.3</th>
            <th><span class='lang-ca'>Data de naixement (dd/mm/aaaa)</span> / <span class='lang-en'>Date of birth (dd/mm/yyyy)</span></th>
          </tr>
          <tr>
            <td></td>
            <td>04/01/1991</td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th class='lang-ca'>2.</th>
            <th class='lang-ca'><span class='lang-ca'>Informació sobre la titulació</span> / <span class='lang-en'>Information identifying the qualification</span></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th class='lang-ca'>2.1</th> 
            <th>
              <span class='lang-ca'>Denominació de la titulació i del diploma conferit</span><br>
              <span class='lang-en'>Name of qualification and title conferred (in original language)</span>
            </th>
          </tr>
          <tr>
            <td></td>
            <td style='font-weight: bold'>Bàtxelor en informàtica</td>
          </tr>
        </tbody>
      </table>
    </section>
  `;
}
