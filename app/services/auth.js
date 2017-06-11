import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Service.extend({
  ajax: Ember.inject.service(),
  credentials: storageFor('auth'),
  isAuthenticated: Ember.computed.bool('credentials.token'),

  signUp (params) {
    return this.get('ajax').post('/sign-up', {
      data: {
        credentials: {
          email: params.email,
          password: params.password,
          password_confirmation: params.passwordConfirmation
        }
      }
    });
  },

  signIn (params) {
    return this.get('ajax').post('/sign-in', {
      data: {
        credentials: {
          email: params.email,
          password: params.password
        }
      }
    })
    .then((result) => {
      this.get('credentials').set('id', result.user.id);
      this.get('credentials').set('email', result.user.email);
      this.get('credentials').set('token', result.user.token);
    });
  },

  changePassword (params) {
    return this.get('ajax').patch(`/change-password/${this.get('credentials.id')}`, {
      data: {
        passwords: {
          old: params.previous,
          new: params.next
        }
      }
    });
  },

  signOut () {
    return this.get('ajax').del(`/sign-out/${this.get('credentials.id')}`)
      .finally(() => this.get('credentials').reset());
  }
});
