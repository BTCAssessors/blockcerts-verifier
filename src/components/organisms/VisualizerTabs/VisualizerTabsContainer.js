import connector from '../../../store/connector';
import VisualizerTabs from './VisualizerTabs';
import {
  getCertificateDefinition,
  getCertificateSED
} from '../../../selectors/certificate';

export const mapStateToProps = (state) => ({
  hasCertificateDefinition: !!getCertificateDefinition(state),
  sedEndorsement: getCertificateSED(state)
});

const VisualizerTabsContainer = connector(VisualizerTabs, { mapStateToProps });
export default VisualizerTabsContainer;
