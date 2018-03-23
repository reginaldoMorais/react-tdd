import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import nock from 'nock';

Enzyme.configure({ adapter: new Adapter() });

describe('React Test', () => {

  let title;

  beforeEach(() => {
    title = 'Hello World';

    nock('https://swapi.co/api/')
      .get('people/1')
      .reply(200, 'Luke Skywalker');
  });

  afterEach(() => {
    nock.cleanAll();
  });

  it('renders without crashing', () => {
    const rendered = renderer.create(<App title={title} />).toJSON();
    expect(rendered).toBeTruthy();
  });

  it('h1 rendered', () => {
    const component = shallow(<App title={title} />);
    expect(component.find('h1').text()).toEqual('Hello World');
  });

  it('Content rendered', () => {
    const component = shallow(<App title={title} />);
    expect(component.find('p').text()).toEqual('');
  });

});


/*
CONTAINER

import React from 'react';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';
import { mount } from 'enzyme';
import { rerequire, configureStore } from '../../../__tests__/helper';
import InstallmentsContainer from '../installments';
import Installments from '../../components/installments';
import configuration from '../../../../config/config.server';

describe('<Installments />', () => {
  let wrapper;
  let container;
  let component;

  const mountInstallments = component => {
    const store = configureStore({ configuration });
    return mount(<Provider store={store}>{component}</Provider>);
  };

  it('Renderiza o link para apresentação do modal', () => {
    const product = rerequire('./fixtures/motog.json');
    wrapper = mountInstallments(<InstallmentsContainer offer={fromJS(product.offers[0])} />);
    container = wrapper.find(InstallmentsContainer);
    component = container.find(Installments);

    expect(component.text()).toBe(' ver parcelas');
  });
});

REDUCER

import { fromJS } from 'immutable';
import reducer from '../selected-services';

describe('Reducers', () => {
  describe('Selected Services', () => {
    it('Deve atualizar o serviço existente com o que vem no payload', () => {
      const initialState = fromJS([
        {
          id: '1',
          skuProduct: 'servico modificado',
          skuService: '1',
        },
      ]);
      const action = {
        type: 'TOGGLE_SERVICE',
        service: {
          id: '1',
          skuProduct: 'servico modificado',
          skuService: '12345',
        },
      };
      const state = reducer(initialState, action);

      expect(state.getIn([0, 'skuService'])).toBe('12345');
    });
  });
});



*/