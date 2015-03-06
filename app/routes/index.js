import Ember from 'ember';
import classData from 'class-tracker/data/classes';

export default Ember.Route.extend({
  model: function () {
    return classData;
  }
});
