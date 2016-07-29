module.exports =  function(data) {
  this.data = data._embedded.items;
  this.count = data.total;

  this.addCustomColumns();

  setTimeout(function(){
    this.$dispatch('vue-tables.loaded',data._embedded.items);
  }.bind(this),0);

}
