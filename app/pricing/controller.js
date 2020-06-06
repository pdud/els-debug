import Controller, { inject as controller } from '@ember/controller';
import classic from 'ember-classic-decorator';
import { action, computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { readOnly, equal, alias } from '@ember/object/computed';

@classic
export default class PricingController extends Controller {
  @controller('application')
  applicationController;

  @service('router')
  router;

  @alias('model.type')
  type;

  @equal('type', 'one')
  isTypeOne;

  @equal('type', 'two')
  isTypeTwo;

  @equal('type', 'three')
  isTypeThree;

  @readOnly('router.currentRouteName')
  currentRouteName;

  @readOnly('_isIndexRoute')
  showSearchButton;

  @readOnly('model.puppys.firstObject')
  firstPuppy;

  @computed('currentRouteName')
  get _isIndexRoute() {
    return this.currentRouteName.indexOf('pricing.index') !== -1;
  }

  @action
  addPuppy() {
  }

  @action
  reset() {
  }

  @action
  setDog() {
  }

  @action
  setPuppy() {
  }

  @action
  setType() {
  }

  @action
  showNewForm() {
  }

  @action
  setNew() {
  }

  @action
  search() {
  }

  @action
  saveLastSearch() {
  }

  _setDog() {
  }

  _setType() {
  }
}
