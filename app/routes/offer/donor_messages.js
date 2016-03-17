import ReadMessagesRoute from './../read_messages';

export default ReadMessagesRoute.extend({
  model() {
    var offerId = this.modelFor('offer').get('id');
    return this.store.filter('message', function(message) {
      return message.get('offer.id') === offerId && message.get('item') === null && message.get('isPrivate') === false;
    });
  }
});
