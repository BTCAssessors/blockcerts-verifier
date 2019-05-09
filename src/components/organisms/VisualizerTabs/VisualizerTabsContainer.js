import connector from '../../../store/connector';
import VisualizerTabs from './VisualizerTabs';
import {
  getCertificateDefinition,
  getCertificateEDS,
} from '../../../selectors/certificate';

export const mapStateToProps = (state) => ({
  hasCertificateDefinition: !!getCertificateDefinition(state),
  edsEndorsement: getCertificateEDS(state),
});

const VisualizerTabsContainer = connector(VisualizerTabs, { mapStateToProps });
export default VisualizerTabsContainer;
