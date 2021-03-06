import { exec } from 'shelljs';
import { Log } from '../utils';

export function update() {
  Log.info('\nUpdating Meteor and Atmosphere packages...');
  exec('meteor update');

  Log.info('\nUpdating Node modules...');
  exec('meteor npm update');

  Log.success('Done!');
}
