'use strict';

new TypeIt('.home__title--strong', {
  loop: true,
  speed: 50,
})
  .move(-4)
  .type('사용자 중심 개발을 추구하는 개발자')
  .pause(1000)
  .move(null, { to: 'END' })
  .pause(1000)
  .go();
