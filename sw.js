self.addEventListener('push', function(event) {
  console.log('Received a push message', event);

  var title = 'ピンポーン！';
  var body = 'ねぇねぇ、ちょっと話しかけてもいいかな？';
  var icon = '/images/icon-192x192.png';
  var tag = 'simple-push-demo-notification-tag';

  event.waitUntil(
    self.registration.showNotification(title, {
      body: body,
      icon: icon,
      tag: tag
    })
  );
});
