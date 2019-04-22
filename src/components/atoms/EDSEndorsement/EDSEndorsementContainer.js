import connector from '../../../store/connector';
import EDSEndorsement from './EDSEndorsement';
import {
  getCertificateDefinition, getCertificateRecipient,
  getCertificateEDS
} from '../../../selectors/certificate';

export const mapStateToProps = (state) => ({
  certificateDefinition: getCertificateDefinition(state),
  edsEndorsement: getCertificateEDS(state),
  recipientEndorsement: getCertificateRecipient(state)
});

const EDSEndorsementContainer = connector(EDSEndorsement, { mapStateToProps });
export { EDSEndorsementContainer };
