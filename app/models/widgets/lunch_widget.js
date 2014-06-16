


Dashboard.LunchWidget = Dashboard.Widget.extend({
  sourceData: { carne: "", peixe: "", date: "" },

  meatDish: function() {
  	return this.get('content').carne;
  }.property('content'),

  fishDish: function() {
  	return this.get('content').peixe;
  }.property('content'),

  date: function() {
    return this.get('content').date;
  }.property('content'),

  title: "Today's Lunch",
  showLastUpdated: true,
  templateName: 'lunch_widget',
  classNames: ['widget', 'widget-lunch']
});
