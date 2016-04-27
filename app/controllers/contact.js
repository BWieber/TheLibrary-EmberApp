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
        const email = this.get('emailAddress');

        const message = this.get('message');

        const contactMessage = this.store.createRecord('contact', {
          email: email,
          message: message
        });

        contactMessage.save().then((response) => {
          this.set('responseMessage', `Thank you! We have saved your message with the following id: ${response.get('id')}`);
          this.set('emailAddress', '');
          this.set('message', '');
        });
      }
    }
});
