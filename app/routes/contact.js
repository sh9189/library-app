import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('contact');
  },
  actions: {
    sendMessage(newContact) {
      alert('Sending your message in progress... ');
      newContact.save().then(() => this.transitionTo('admin/contacts'));
    }
  }
});
