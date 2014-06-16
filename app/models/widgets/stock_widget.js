/**
 * Shows information about the stock of publicly traded companies.
 */
Dashboard.StockWidget = Dashboard.Widget.extend({
  sourceData: [],

  title: 'Ad Tech Stocks',
  showLastUpdated: true,

  templateName: 'stock_widget',
  classNames: ['widget', 'widget-stock']
});
