
import User from '.././User';
import {shallow} from 'enzyme';


it('it should have one dive in user',()=>{
    const wrapper=shallow(<User />);
     expect(wrapper.find('div').to.have.length(1));
})