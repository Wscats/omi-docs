/* global hexo */

'use strict';

hexo.on('generateBefore', function () {
  if (hexo.locals.get) {
    const data = hexo.locals.get('data')
    data && data.book && (hexo.theme.config = data.book)
  }
})