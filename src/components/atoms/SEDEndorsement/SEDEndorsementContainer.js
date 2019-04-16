import connector from '../../../store/connector';
import SEDEndorsement from './SEDEndorsement';
import {
  getCertificateDefinition,
  getCertificateSED
} from '../../../selectors/certificate';

export const mapStateToProps = (state) => ({
  hasCertificateDefinition: !!getCertificateDefinition(state),
  sedEndorsement: getCertificateSED(state)
});

const SEDEndorsementContainer = connector(SEDEndorsement, { mapStateToProps });
export { SEDEndorsementContainer };
