import Ember from 'ember';

export default Ember.ArrayController.extend({
  completed: function () {
    var total = this.get('content').reduce(function ( val, subject ) {
      return val + subject.courses.length;
    }, 0);

    var completed = this.get('content').reduce(function ( val, subject ) {
      return val + subject.courses.filterBy('completed', true).length;
    }, 0);

    return (( completed / total ) * 100).toFixed(2);
  }.property('content')
});
