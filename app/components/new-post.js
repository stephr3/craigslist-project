import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },

    save() {
      var params = {
        date: this.get('date'),
        category: this.get('category'),
        title: this.get('title'),
        content: this.get('content'),
        img: this.get('img'),
        city: this.get('city'),
        phone: this.get('phone'),
        email: this.get('email')
      };
      this.set('addNewPost', false);
      this.sendAction('save', params);
    }
  }
});
