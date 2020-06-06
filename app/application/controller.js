import classic from 'ember-classic-decorator';
import { action } from '@ember/object';
import Controller from '@ember/controller';

@classic
export default class ApplicationController extends Controller {

  greeting = 'hi';

  isHungry = true;

  @action
  onCloseModal() {
  }
}
