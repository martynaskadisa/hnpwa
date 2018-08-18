import { Middleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import deviceSaga from './modules/device/sagas';

const sagaMiddleware = createSagaMiddleware();

sagaMiddleware.run(deviceSaga);

const middleware: Middleware[] = [sagaMiddleware];

export default middleware;
