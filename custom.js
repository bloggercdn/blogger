$(function() {
    $('#main-menu')['each'](function() {
        var _text1 = $(this)['find']('.LinkList ul > li')['children']('a'),
            _text2 = _text1['length'];
        for (var _text4 = 0; _text4 < _text2; _text4++) {
            var _text5 = _text1['eq'](_text4),
                _text6 = _text5['text']();
            if (_text6['charAt'](0) !== '_') {
                var _text7 = _text1['eq'](_text4 + 1),
                    _text8 = _text7['text']();
                if (_text8['charAt'](0) === '_') {
                    var _text9 = _text5['parent']();
                    _text9['append']('<ul class="sub-menu m-sub"/>')
                }
            };
            if (_text6['charAt'](0) === '_') {
                _text5['text'](_text6['replace']('_', ''));
                _text5['parent']()['appendTo'](_text9['children']('.sub-menu'))
            }
        };
        for (var _text4 = 0; _text4 < _text2; _text4++) {
            var _text10 = _text1['eq'](_text4),
                _text11 = _text10['text']();
            if (_text11['charAt'](0) !== '_') {
                var _text12 = _text1['eq'](_text4 + 1),
                    _text13 = _text12['text']();
                if (_text13['charAt'](0) === '_') {
                    var _text14 = _text10['parent']();
                    _text14['append']('<ul class="sub-menu2 m-sub"/>')
                }
            };
            if (_text11['charAt'](0) === '_') {
                _text10['text'](_text11['replace']('_', ''));
                _text10['parent']()['appendTo'](_text14['children']('.sub-menu2'))
            }
        };
        $('#main-menu ul li ul')['parent']('li')['addClass']('has-sub');
        $('#main-menu .widget')['addClass']('show-menu')
    });
    $('#main-menu-nav')['clone']()['appendTo']('.mobile-menu');
    $('.mobile-menu .has-sub')['append']('<div class="submenu-toggle"/>');
    $('.mobile-menu ul > li a')['each'](function() {
        var _text15 = $(this),
            _text16 = _text15['attr']('href')['trim'](),
            _text17 = _text16['toLowerCase'](),
            _text18 = _text16['split']('/'),
            _text19 = _text18[0];
        if (_text17['match']('mega-menu')) {
            _text15['attr']('href', '/search/label/' + _text19 + '?&max-results=' + postPerPage)
        }
    });
    $('.slide-menu-toggle')['on']('click', function() {
        $('body')['toggleClass']('nav-active')
    });
    $('.mobile-menu ul li .submenu-toggle')['on']('click', function(_text15) {
        if ($(this)['parent']()['hasClass']('has-sub')) {
            _text15['preventDefault']();
            if (!$(this)['parent']()['hasClass']('show')) {
                $(this)['parent']()['addClass']('show')['children']('.m-sub')['slideToggle'](170)
            } else {
                $(this)['parent']()['removeClass']('show')['find']('> .m-sub')['slideToggle'](170)
            }
        }
    });
    $('.Label a, a.b-label')['attr']('href', function(_text15, _text20) {
        return _text20['replace'](_text20, _text20 + '?&max-results=' + postPerPage)
    });
    $('.avatar-image-container img')['attr']('src', function(_text15, _text4) {
        _text4 = _text4['replace']('/s35-c/', '/s45-c/');
        _text4 = _text4['replace']('//img1.blogblog.com/img/blank.gif', '//4.bp.blogspot.com/-uCjYgVFIh70/VuOLn-mL7PI/AAAAAAAADUs/Kcu9wJbv790hIo83rI_s7lLW3zkLY01EA/s55-r/avatar.png');
        return _text4
    });
    $('.author-description a')['each'](function() {
        $(this)['attr']('target', '_blank')
    });
    $('.post-nav')['each'](function() {
        var _text21 = $('a.prev-post-link')['attr']('href'),
            _text22 = $('a.next-post-link')['attr']('href');
        $['ajax']({
            url: _text21,
            type: 'get',
            success: function(_text23) {
                var _text26 = $(_text23)['find']('.blog-post h1.post-title')['text']();
                $('.post-prev a .post-nav-inner p')['text'](_text26)
            }
        });
        $['ajax']({
            url: _text22,
            type: 'get',
            success: function(_0x9624x19) {
                var _text26 = $(_0x9624x19)['find']('.blog-post h1.post-title')['text']();
                $('.post-next a .post-nav-inner p')['text'](_text26)
            }
        })
    });
    $('.post-body strike')['each'](function() {
        var _text15 = $(this),
            _text17 = _text15['text']();
        if (_text17['match']('left-sidebar')) {
            _text15['replaceWith']('<style>.item #main-wrapper{float:right}.item #sidebar-wrapper{float:left}</style>')
        };
        if (_text17['match']('right-sidebar')) {
            _text15['replaceWith']('<style>.item #main-wrapper{float:left}.item #sidebar-wrapper{float:right}</style>')
        };
        if (_text17['match']('full-width')) {
            _text15['replaceWith']('<style>.item #main-wrapper{width:100%}.item #sidebar-wrapper{display:none}</style>')
        }
    });
    $('.post-body strike')['each'](function() {
        var _text15 = $(this),
            _text16 = _text15['text']()['trim'](),
            _text24 = _text16['split']('/'),
            _text25 = _text24[0]['replace']('[getcode]', ''),
            _text26 = _text24[1];
        if (_text16['match']('getcode')) {
            _text15['replaceWith']('<div class="get-code"><span class="code-show">' + _text26 + '</span><span class="code-code">##########</span></div>');
            $('.get-code')['each'](function() {
                var _text27 = $(this),
                    _text28 = _text27['find']('.code-show');
                _text28['on']('click', function() {
                    _text27['find']('.code-code')['text'](_text25)
                })
            })
        }
    });
    $('.post-body a')['each'](function() {
        var _text15 = $(this),
            _text17 = _text15['text'](),
            _text29 = _text17['split']('/'),
            _text16 = _text29[0];
        if (_text17['match']('download-btn')) {
            _text15['text'](_text16)['addClass']('post-btn')
        }
    });
    $('#main-wrapper, #sidebar-wrapper')['each'](function() {
        if (fixedSidebar == true) {
            $(this)['theiaStickySidebar']({
                additionalMarginTop: 30,
                additionalMarginBottom: 30
            })
        }
    });
    $('.back-top')['each'](function() {
        var _text15 = $(this);
        $(window)['on']('scroll', function() {
            $(this)['scrollTop']() >= 100 ? _text15['fadeIn'](250) : _text15['fadeOut'](250)
        }), _text15['click'](function() {
            $('html, body')['animate']({
                scrollTop: 0
            }, 500)
        })
    });
    $('#main-menu #main-menu-nav li')['each'](function() {
        var _text30 = $(this),
            _text16 = _text30['find']('a')['attr']('href')['trim'](),
            _text15 = _text30,
            _text17 = _text16['toLowerCase'](),
            _text18 = _text16['split']('/'),
            _text19 = _text18[0];
        _text24(_text15, _text17, 4, _text19)
    });
    $('#hot-section .widget-content')['each'](function() {
        var _text15 = $(this),
            _text16 = _text15['text']()['trim'](),
            _text17 = _text16['toLowerCase'](),
            _text18 = _text16['split']('/'),
            _text19 = _text18[0];
        _text24(_text15, _text17, 4, _text19)
    });
    $('.common-widget .widget-content')['each'](function() {
        var _text15 = $(this),
            _text16 = _text15['text']()['trim'](),
            _text17 = _text16['toLowerCase'](),
            _text18 = _text16['split']('/'),
            _text10 = _text18[0],
            _text19 = _text18[1];
        _text24(_text15, _text17, _text10, _text19)
    });
    $('.related-ready')['each'](function() {
        var _text15 = $(this),
            _text19 = _text15['find']('.related-tag')['data']('label');
        _text24(_text15, 'related', 3, _text19)
    });

    function _text11(_text12, _text4) {
        for (var _text13 = 0; _text13 < _text12[_text4]['link']['length']; _text13++) {
            if (_text12[_text4]['link'][_text13]['rel'] == 'alternate') {
                var _text14 = _text12[_text4]['link'][_text13]['href'];
                break
            }
        };
        return _text14
    }

    function _text15(_text12, _text4, _text14) {
        var _text16 = _text12[_text4]['title']['$t'],
            _text25 = '<a href="' + _text14 + '">' + _text16 + '</a>';
        return _text25
    }

    function _text17(_text12, _text4) {
        var _text18 = _text12[_text4]['published']['$t'],
            _text19 = _text18['substring'](0, 4),
            _text1a = _text18['substring'](5, 7),
            _text1b = _text18['substring'](8, 10),
            _text1c = monthFormat[parseInt(_text1a, 10) - 1] + ' ' + _text1b + ', ' + _text19,
            _text25 = '<span class="post-date">' + _text1c + '</span>';
        return _text25
    }

    function _text1d(_text12, _text4) {
        var _text16 = _text12[_text4]['title']['$t'],
            _text1e = _text12[_text4]['content']['$t'],
            _text1f = $('<div>')['html'](_text1e);
        if ('media$thumbnail' in _text12[_text4]) {
            var _text20 = _text12[_text4]['media$thumbnail']['url'],
                _text21 = _text20['replace']('/s72-c', '/w680');
            if (_text20['match']('img.youtube.com')) {
                _text21 = _text20['replace']('/default.', '/hqdefault.')
            }
        } else {
            if (_text1e['indexOf']('<img') > -1) {
                _text21 = _text1f['find']('img:first')['attr']('src')
            } else {
                _text21 = noThumbnail
            }
        };
        var _text25 = '<img class="post-thumb" alt="' + _text16 + '" src="' + _text21 + '"/>';
        return _text25
    }

    function _text22(_text12, _text4) {
        if (_text12[_text4]['category'] != undefined) {
            var _text23 = _text12[_text4]['category'][0]['term'],
                _text25 = '<span class="post-tag">' + _text23 + '</span>'
        } else {
            _text25 = ''
        };
        return _text25
    }

    function _text24(_text15, _text17, _text10, _text19) {
        if (_text17['match']('mega-menu') || _text17['match']('hot-posts') || _text17['match']('post-list') || _text17['match']('related')) {
            var _text25 = '';
            if (_text19 == 'recent') {
                _text25 = '/feeds/posts/default?alt=json-in-script&max-results=' + _text10
            } else {
                if (_text19 == 'random') {
                    var _text26 = Math['floor'](Math['random']() * _text10) + 1;
                    _text25 = '/feeds/posts/default?max-results=' + _text10 + '&start-index=' + _text26 + '&alt=json-in-script'
                } else {
                    _text25 = '/feeds/posts/default/-/' + _text19 + '?alt=json-in-script&max-results=' + _text10
                }
            };
            $['ajax']({
                url: _text25,
                type: 'get',
                dataType: 'jsonp',
                beforeSend: function() {
                    if (_text17['match']('hot-posts')) {
                        _text15['html']('<div class="hot-loader"/>')['parent']()['addClass']('show-hot')['parent']()['parent']()['addClass']('show-hot-wrap')
                    }
                },
                success: function(_text27) {
                    if (_text17['match']('mega-menu')) {
                        var _text28 = '<ul class="mega-menu-inner">'
                    } else {
                        if (_text17['match']('hot-posts')) {
                            var _text28 = '<ul class="hot-posts">'
                        } else {
                            if (_text17['match']('post-list')) {
                                var _text28 = '<ul class="custom-widget">'
                            } else {
                                if (_text17['match']('related')) {
                                    var _text28 = '<ul class="related-posts">'
                                }
                            }
                        }
                    };
                    var _text29 = _text27['feed']['entry'];
                    if (_text29 != undefined) {
                        for (var _text4 = 0, _text12 = _text29; _text4 < _text12['length']; _text4++) {
                            var _text14 = _text11(_text12, _text4),
                                _text26 = _text15(_text12, _text4, _text14),
                                _text2a = _text1d(_text12, _text4),
                                _text23 = _text22(_text12, _text4),
                                _text2b = _text17(_text12, _text4);
                            var _text2c = '';
                            if (_text17['match']('mega-menu')) {
                                _text2c += '<div class="mega-item item-' + _text4 + '"><div class="mega-content"><div class="post-image-wrap"><a class="post-image-link" href="' + _text14 + '">' + _text2a + '</a></div><h2 class="post-title">' + _text26 + '</h2><div class="post-meta">' + _text23 + '<i>-</i>' + _text2b + '</div></div></div>'
                            } else {
                                if (_text17['match']('hot-posts')) {
                                    _text2c += '<li class="hot-item item-' + _text4 + '"><div class="hot-item-inner"><a class="post-image-link" href="' + _text14 + '">' + _text2a + '</a><div class="post-info"><h2 class="post-title">' + _text26 + '</h2><div class="post-meta">' + _text23 + '<i>-</i>' + _text2b + '</div></div></div></li>'
                                } else {
                                    if (_text17['match']('post-list')) {
                                        _text2c += '<li class="item-' + _text4 + '"><a class="post-image-link" href="' + _text14 + '">' + _text2a + '</a><div class="post-info"><h2 class="post-title">' + _text26 + '</h2></div></div></li>'
                                    } else {
                                        if (_text17['match']('related')) {
                                            _text2c += '<li class="related-item item-' + _text4 + '"><div class="post-image-wrap"><a class="post-image-link" href="' + _text14 + '">' + _text2a + '</a></div><h2 class="post-title">' + _text26 + '</h2><div class="post-meta">' + _text23 + '<i>-</i>' + _text2b + '</div></li>'
                                        }
                                    }
                                }
                            };
                            _text28 += _text2c
                        };
                        _text28 += '</ul>'
                    } else {
                        _text28 = '<ul class="no-posts">Error: No Posts Found <i class="fa fa-frown"/></ul>'
                    };
                    if (_text17['match']('mega-menu')) {
                        _text15['addClass']('has-sub mega-menu')['append'](_text28);
                        _text15['find']('a:first')['attr']('href', function(_text15, _text20) {
                            if (_text19 == 'recent' || _text19 == 'random') {
                                _text20 = _text20['replace'](_text20, '/search/?&max-results=' + postPerPage)
                            } else {
                                _text20 = _text20['replace'](_text20, '/search/label/' + _text19 + '?&max-results=' + postPerPage)
                            };
                            return _text20
                        })
                    } else {
                        if (_text17['match']('hot-posts')) {
                            _text15['html'](_text28)['parent']()['addClass']('show-hot')
                        } else {
                            _text15['html'](_text28)
                        }
                    }
                }
            })
        }
    }
    $('.blog-post-comments')['each'](function() {
        var _text2d = commentsSystem,
            _text2e = disqus_blogger_current_url,
            _text2f = '<div id="disqus_thread"/>',
            _text40 = $(location)['attr']('href'),
            _text41 = '<div class="fb-comments" data-width="100%" data-href="' + _text40 + '" data-numposts="5"></div>',
            _text42 = 'comments-system-' + _text2d;
        if (_text2d == 'blogger') {
            $(this)['addClass'](_text42)['show']()
        } else {
            if (_text2d == 'disqus') {
                (function() {
                    var _text43 = document['createElement']('script');
                    _text43['type'] = 'text/javascript';
                    _text43['async'] = true;
                    _text43['src'] = '//' + disqusShortname + '.disqus.com/embed.js';
                    (document['getElementsByTagName']('head')[0] || document['getElementsByTagName']('body')[0])['appendChild'](_text43)
                })();
                $('#comments, #gpluscomments')['remove']();
                $(this)['append'](_text2f)['addClass'](_text42)['show']()
            } else {
                if (_text2d == 'facebook') {
                    $('#comments, #gpluscomments')['remove']();
                    $(this)['append'](_text41)['addClass'](_text42)['show']()
                } else {
                    if (_text2d == 'hide') {
                        $(this)['hide']()
                    } else {
                        $(this)['addClass']('comments-system-default')['show']()
                    }
                }
            }
        }
    })
});
