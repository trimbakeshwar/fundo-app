import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import  { shallow} from 'enzyme';
import Login from './components/login';
import Registration from './components/registration'
import './setupTests'
describe('Login Component', () => {
  //testing rendering of login component
    it('should render without throwing an error', () => {
        expect(shallow(< Login />).exists()).toBe(true)
    })
    //testing the email and password input existence
    it('renders a email input', () => {
        expect(shallow( < Login /> ).find('#outlined-email').length).toEqual(1)
      })
      it('renders a password input', () => {
        expect(shallow( < Login /> ).find('#outlined-password').length).toEqual(1)
      })
})
describe('Email input', () => {
  //testing email input for Fundoo notes
    it('should respond to change event and change the state of the Login Component', () => {
      const wrapper = shallow( < Login /> );
      wrapper.find('#outlined-email').simulate('change', {
        target: {
          name: 'email',
          value: 'hudge.trimbakeshwar@gmail.com'
        }
      });
      expect(wrapper.state('email')).toEqual('hudge.trimbakeshwar@gmail.com');
    })
  })
  describe('Password input', () => {
    //testing password input for Fundoo notes
    it('should respond to change event and change the state of the Login Component', () => {
      const wrapper = shallow( < Login /> );
      wrapper.find('#outlined-password')
        .simulate('change', {
          target: {
            name: 'password',
            value: 'Suraj@123'
          }
        });
      expect(wrapper.state('password')).toEqual('Suraj@123');
    })
  })
  describe('Registration Component', () => {
      it('should render without throwing an error', () => {
          expect(shallow(< Registration />).exists()).toBe(true)
      })
      it('renders a firstname input', () => {
          expect(shallow( < Registration /> ).find('#outlined-firstName').length).toEqual(1)
        })
        it('renders a lastName input', () => {
          expect(shallow( < Registration /> ).find('#outlined-lastName').length).toEqual(1)
        })
        it('renders a email input', () => {
          expect(shallow( < Registration /> ).find('#outlined-email').length).toEqual(1)
        })
        it('renders a confirmPassword input', () => {
          expect(shallow( < Registration /> ).find('#outlined-confirmPassword').length).toEqual(1)
        })
        it('renders a password input', () => {
          expect(shallow( < Registration /> ).find('#outlined-password').length).toEqual(1)
        })
  })
  describe('firstName input', () => {
      it('change event and change the firstName of the Registration Component', () => {
        const wrapper = shallow( < Registration /> );
        wrapper.find('#outlined-firstName').simulate('change', {
          target: {
            name: 'firstName',
            value: 'Suraj'
          }
        });
        expect(wrapper.state('firstName')).toEqual('Suraj');
      })
    })
    describe('lastName input', () => {
        it('change the lastName of the Registration Component', () => {
          const wrapper = shallow( < Registration /> );
          wrapper.find('#outlined-lastName').simulate('change', {
            target: {
              name: 'lastName',
              value: 'Hudge'
            }
          });
          expect(wrapper.state('lastName')).toEqual('Hudge');
        })
      })
      describe('Email input', () => {
          it('change event and change the email of the Registration Component', () => {
            const wrapper = shallow( < Registration /> );
            wrapper.find('#outlined-email').simulate('change', {
              target: {
                name: 'email',
                value: 'hudge.trimbakeshwar@gmail.com'
              }
            });
            expect(wrapper.state('email')).toEqual('hudge.trimbakeshwar@gmail.com');
          })
        })
        describe('confirmPassword input', () => {
            it('change event and change the confirmPassword of the registratrion Component', () => {
              const wrapper = shallow( < Registration /> );
              wrapper.find('#outlined-confirmPassword').simulate('change', {
                target: {
                  name: 'confirmPassword',
                  value: 'Suraj@123'
                }
              });
              expect(wrapper.state('confirmPassword')).toEqual('Suraj@123');
            })
          })
    describe('Password input', () => {
      it(' change event and change the Password of the registratrion Component', () => {
        const wrapper = shallow( < Registration /> );
        wrapper.find('#outlined-password')
          .simulate('change', {
            target: {
              name: 'password',
              value: 'Suraj@123'
            }
          });
        expect(wrapper.state('password')).toEqual('Suraj@123');
      })
    })
    describe('wrong Password input', () => {
      it(' change event and change the Password of the registratrion Component', () => {
        const wrapper = shallow( < Registration /> );
        wrapper.find('#outlined-password')
          .simulate('change', {
            target: {
              name: 'password',
              value: ''
            }
          });
        expect(wrapper.state('passwordError')).toEqual('invalid password');
      })
    })
  
   