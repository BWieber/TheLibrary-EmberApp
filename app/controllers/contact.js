import Ember from 'ember';

export default Ember.Controller.extend({

    emailAddress: '',

    message: '',

    emailValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),

    messageValid: Ember.computed.gte('message.length', 5),

    isValid: Ember.computed.and('emailValid', 'messageValid'),

    isDisabled: Ember.computed.not('isValid'),

    actions: {

      saveMessage() {
        alert(`Saving of the your email: (${this.get('emailAddress')})\nand message: (${this.get('message')}) is in progress.`);
        this.set('responseMessage', `Thank you! We've just saved your email address: (${this.get('emailAddress')}) and message: (${this.get('message')})`);
        this.set('emailAddress', '');
        this.set('message', '');
      }
    }
});
