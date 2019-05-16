import connector from '../../../store/connector';
import FullCertificate from './FullCertificate';
import {
  getCertificateDefinition,
  getCertificateFullDefinition,
  getDisplayHTML,
  isCowcertsCertificate
} from '../../../selectors/certificate';

export const mapStateToProps = (state) => ({
  hasCertificateDefinition: !!getCertificateDefinition(state),
  displayHTML: getDisplayHTML(state),
  isCowcerts: isCowcertsCertificate(state),
  fullCertificate: getCertificateFullDefinition(state)
});

const FullCertificateContainer = connector(FullCertificate, { mapStateToProps });
export { FullCertificateContainer };
