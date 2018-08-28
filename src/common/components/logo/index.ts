import { routes } from 'common/routes';
import { connect } from 'react-redux';
import Logo from './component';

const TO = routes.top.generatePath(1);

export default connect(() => ({ to: TO }))(Logo);
