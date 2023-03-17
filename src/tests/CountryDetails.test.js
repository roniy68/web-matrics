import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/store';
import CountryDetails from '../components/CountryDetails';

describe('CountryDetails', () => {
  it('should render the component', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <CountryDetails />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
