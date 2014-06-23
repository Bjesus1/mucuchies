


Dashboard.LunchWidget = Dashboard.Widget.extend({
  sourceData: { meat: "", fish: "", tMeat: "", tFish: "" },
  title: "Today's Lunch",
  subTitle: "Tomorrow's Lunch",
  
  todaysMeatDish: function() {
  	return this.get('content').meat;
  }.property('content'),

  todaysFishDish: function() {
  	return this.get('content').fish;
  }.property('content'),

  tomorrowsMeatDish: function() {
    return this.get('content').tMeat;
  }.property('content'),

  tomorrowsFishDish: function() {
    return this.get('content').tFish;
  }.property('content'),

  showLastUpdated: true,
  templateName: 'lunch_widget',
  classNames: ['widget', 'widget-lunch']
});
