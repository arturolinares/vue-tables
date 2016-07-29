var merge = require('merge');

module.exports = function() {
  var sorting = {};
  sorting[this.orderBy.column || this.orderBy] = this.orderBy.ascending > 0 ? 'asc' : 'desc';

  var data =  {
    query:this.query,
    limit:this.limit,
    sorting: sorting,
    page:this.page
  };

  data = merge(data, this.options.params, this.customQueries);

  this.$dispatch('vue-tables.loading', data);

  return this.$http.get(this.url, data);
}
