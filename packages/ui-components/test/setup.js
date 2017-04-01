import chai from 'chai';
import sinonChai from 'sinon-chai';
import chaiEnzyme from 'chai-enzyme';
import simpleJSDom from 'simple-jsdom';

simpleJSDom.install();

chai.use(chaiEnzyme());

chai.use(sinonChai);