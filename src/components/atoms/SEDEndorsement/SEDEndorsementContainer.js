import connector from '../../../store/connector';
import SEDEndorsement from './SEDEndorsement';
import {
  getCertificateDefinition, getCertificateRecipient,
  getCertificateSED
} from '../../../selectors/certificate';

export const mapStateToProps = (state) => ({
  certificateDefinition: getCertificateDefinition(state),
  sedEndorsement: getCertificateSED(state),
  recipientEndorsement: getCertificateRecipient(state)
});

const SEDEndorsementContainer = connector(SEDEndorsement, { mapStateToProps });
export { SEDEndorsementContainer };
