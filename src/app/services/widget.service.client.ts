export class WidgetServiceClient {
  findWidgetsForTopic (topicId) {
    return fetch('http://zhemingg-assignment.herokuapp.com/api/topic/' + topicId + '/widget')
      .then(response => response.json());
  }
}
