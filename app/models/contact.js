import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  email: DS.attr('string'),
  message: DS.attr('string'),
  isValidEmailAddress: Ember.computed.match('email', /^.+@.+\..+$/),
  isValidMessage: Ember.computed.gte('message.length', 5),
  isValid: Ember.computed.and('isValidEmailAddress', 'isValidMessage'),
  isDisabled: Ember.computed.not('isValid')
});
