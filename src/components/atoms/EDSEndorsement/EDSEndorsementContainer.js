import connector from '../../../store/connector';
import EDSEndorsement from './EDSEndorsement';
import {
  getCertificateFullDefinition
} from '../../../selectors/certificate';

export const mapStateToProps = (state) => ({
  fullCertificate: getCertificateFullDefinition(state),
});

const EDSEndorsementContainer = connector(EDSEndorsement, { mapStateToProps });
export { EDSEndorsementContainer };
