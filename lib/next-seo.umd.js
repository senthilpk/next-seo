(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? factory(exports, require('next/head'), require('react'))
    : typeof define === 'function' && define.amd
    ? define(['exports', 'next/head', 'react'], factory)
    : ((global = global || self),
      factory((global.nextSeo = {}), global.Head, global.react));
})(this, function (exports, Head, React) {
  function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : { default: e };
  }

  var Head__default = /*#__PURE__*/ _interopDefaultLegacy(Head);
  var React__default = /*#__PURE__*/ _interopDefaultLegacy(React);

  function _extends() {
    _extends =
      Object.assign ||
      function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

    return _extends.apply(this, arguments);
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  var defaults = {
    templateTitle: '',
    noindex: false,
    nofollow: false,
    defaultOpenGraphImageWidth: 0,
    defaultOpenGraphImageHeight: 0,
    defaultOpenGraphVideoWidth: 0,
    defaultOpenGraphVideoHeight: 0,
  };

  var buildTags = function buildTags(config) {
    var _config$additionalLin;

    var tagsToRender = [];

    if (config.titleTemplate) {
      defaults.templateTitle = config.titleTemplate;
    }

    var updatedTitle = '';

    if (config.title) {
      updatedTitle = config.title;

      if (defaults.templateTitle) {
        updatedTitle = defaults.templateTitle.replace(/%s/g, function () {
          return updatedTitle;
        });
      }
    } else if (config.defaultTitle) {
      updatedTitle = config.defaultTitle;
    }

    if (updatedTitle) {
      tagsToRender.push(
        React__default['default'].createElement(
          'title',
          {
            key: 'title',
          },
          updatedTitle,
        ),
      );
    }

    var noindex =
      config.noindex ||
      defaults.noindex ||
      config.dangerouslySetAllPagesToNoIndex;
    var nofollow =
      config.nofollow ||
      defaults.nofollow ||
      config.dangerouslySetAllPagesToNoFollow;
    var robotsParams = '';

    if (config.robotsProps) {
      var _config$robotsProps = config.robotsProps,
        nosnippet = _config$robotsProps.nosnippet,
        maxSnippet = _config$robotsProps.maxSnippet,
        maxImagePreview = _config$robotsProps.maxImagePreview,
        maxVideoPreview = _config$robotsProps.maxVideoPreview,
        noarchive = _config$robotsProps.noarchive,
        noimageindex = _config$robotsProps.noimageindex,
        notranslate = _config$robotsProps.notranslate,
        unavailableAfter = _config$robotsProps.unavailableAfter;
      robotsParams =
        '' +
        (nosnippet ? ',nosnippet' : '') +
        (maxSnippet ? ',max-snippet:' + maxSnippet : '') +
        (maxImagePreview ? ',max-image-preview:' + maxImagePreview : '') +
        (noarchive ? ',noarchive' : '') +
        (unavailableAfter ? ',unavailable_after:' + unavailableAfter : '') +
        (noimageindex ? ',noimageindex' : '') +
        (maxVideoPreview ? ',max-video-preview:' + maxVideoPreview : '') +
        (notranslate ? ',notranslate' : '');
    }

    if (noindex || nofollow) {
      if (config.dangerouslySetAllPagesToNoIndex) {
        defaults.noindex = true;
      }

      if (config.dangerouslySetAllPagesToNoFollow) {
        defaults.nofollow = true;
      }

      tagsToRender.push(
        React__default['default'].createElement('meta', {
          key: 'robots',
          name: 'robots',
          content:
            (noindex ? 'noindex' : 'index') +
            ',' +
            (nofollow ? 'nofollow' : 'follow') +
            robotsParams,
        }),
      );
      tagsToRender.push(
        React__default['default'].createElement('meta', {
          key: 'googlebot',
          name: 'googlebot',
          content:
            (noindex ? 'noindex' : 'index') +
            ',' +
            (nofollow ? 'nofollow' : 'follow') +
            robotsParams,
        }),
      );
    } else {
      tagsToRender.push(
        React__default['default'].createElement('meta', {
          key: 'robots',
          name: 'robots',
          content: 'index,follow' + robotsParams,
        }),
      );
      tagsToRender.push(
        React__default['default'].createElement('meta', {
          key: 'googlebot',
          name: 'googlebot',
          content: 'index,follow' + robotsParams,
        }),
      );
    }

    if (config.description) {
      tagsToRender.push(
        React__default['default'].createElement('meta', {
          key: 'description',
          name: 'description',
          content: config.description,
        }),
      );
    }

    if (config.mobileAlternate) {
      tagsToRender.push(
        React__default['default'].createElement('link', {
          rel: 'alternate',
          key: 'mobileAlternate',
          media: config.mobileAlternate.media,
          href: config.mobileAlternate.href,
        }),
      );
    }

    if (config.languageAlternates && config.languageAlternates.length > 0) {
      config.languageAlternates.forEach(function (languageAlternate) {
        tagsToRender.push(
          React__default['default'].createElement('link', {
            rel: 'alternate',
            key: 'languageAlternate-' + languageAlternate.hrefLang,
            hrefLang: languageAlternate.hrefLang,
            href: languageAlternate.href,
          }),
        );
      });
    }

    if (config.twitter) {
      if (config.twitter.cardType) {
        tagsToRender.push(
          React__default['default'].createElement('meta', {
            key: 'twitter:card',
            name: 'twitter:card',
            content: config.twitter.cardType,
          }),
        );
      }

      if (config.twitter.site) {
        tagsToRender.push(
          React__default['default'].createElement('meta', {
            key: 'twitter:site',
            name: 'twitter:site',
            content: config.twitter.site,
          }),
        );
      }

      if (config.twitter.handle) {
        tagsToRender.push(
          React__default['default'].createElement('meta', {
            key: 'twitter:creator',
            name: 'twitter:creator',
            content: config.twitter.handle,
          }),
        );
      }
    }

    if (config.facebook) {
      if (config.facebook.appId) {
        tagsToRender.push(
          React__default['default'].createElement('meta', {
            key: 'fb:app_id',
            property: 'fb:app_id',
            content: config.facebook.appId,
          }),
        );
      }
    }

    if (config.openGraph) {
      if (config.openGraph.url || config.canonical) {
        tagsToRender.push(
          React__default['default'].createElement('meta', {
            key: 'og:url',
            property: 'og:url',
            content: config.openGraph.url || config.canonical,
          }),
        );
      }

      if (config.openGraph.type) {
        var type = config.openGraph.type.toLowerCase();
        tagsToRender.push(
          React__default['default'].createElement('meta', {
            key: 'og:type',
            property: 'og:type',
            content: type,
          }),
        );

        if (type === 'profile' && config.openGraph.profile) {
          if (config.openGraph.profile.firstName) {
            tagsToRender.push(
              React__default['default'].createElement('meta', {
                key: 'profile:first_name',
                property: 'profile:first_name',
                content: config.openGraph.profile.firstName,
              }),
            );
          }

          if (config.openGraph.profile.lastName) {
            tagsToRender.push(
              React__default['default'].createElement('meta', {
                key: 'profile:last_name',
                property: 'profile:last_name',
                content: config.openGraph.profile.lastName,
              }),
            );
          }

          if (config.openGraph.profile.username) {
            tagsToRender.push(
              React__default['default'].createElement('meta', {
                key: 'profile:username',
                property: 'profile:username',
                content: config.openGraph.profile.username,
              }),
            );
          }

          if (config.openGraph.profile.gender) {
            tagsToRender.push(
              React__default['default'].createElement('meta', {
                key: 'profile:gender',
                property: 'profile:gender',
                content: config.openGraph.profile.gender,
              }),
            );
          }
        } else if (type === 'book' && config.openGraph.book) {
          if (
            config.openGraph.book.authors &&
            config.openGraph.book.authors.length
          ) {
            config.openGraph.book.authors.forEach(function (author, index) {
              tagsToRender.push(
                React__default['default'].createElement('meta', {
                  key: 'book:author:0' + index,
                  property: 'book:author',
                  content: author,
                }),
              );
            });
          }

          if (config.openGraph.book.isbn) {
            tagsToRender.push(
              React__default['default'].createElement('meta', {
                key: 'book:isbn',
                property: 'book:isbn',
                content: config.openGraph.book.isbn,
              }),
            );
          }

          if (config.openGraph.book.releaseDate) {
            tagsToRender.push(
              React__default['default'].createElement('meta', {
                key: 'book:release_date',
                property: 'book:release_date',
                content: config.openGraph.book.releaseDate,
              }),
            );
          }

          if (config.openGraph.book.tags && config.openGraph.book.tags.length) {
            config.openGraph.book.tags.forEach(function (tag, index) {
              tagsToRender.push(
                React__default['default'].createElement('meta', {
                  key: 'book:tag:0' + index,
                  property: 'book:tag',
                  content: tag,
                }),
              );
            });
          }
        } else if (type === 'article' && config.openGraph.article) {
          if (config.openGraph.article.publishedTime) {
            tagsToRender.push(
              React__default['default'].createElement('meta', {
                key: 'article:published_time',
                property: 'article:published_time',
                content: config.openGraph.article.publishedTime,
              }),
            );
          }

          if (config.openGraph.article.modifiedTime) {
            tagsToRender.push(
              React__default['default'].createElement('meta', {
                key: 'article:modified_time',
                property: 'article:modified_time',
                content: config.openGraph.article.modifiedTime,
              }),
            );
          }

          if (config.openGraph.article.expirationTime) {
            tagsToRender.push(
              React__default['default'].createElement('meta', {
                key: 'article:expiration_time',
                property: 'article:expiration_time',
                content: config.openGraph.article.expirationTime,
              }),
            );
          }

          if (
            config.openGraph.article.authors &&
            config.openGraph.article.authors.length
          ) {
            config.openGraph.article.authors.forEach(function (author, index) {
              tagsToRender.push(
                React__default['default'].createElement('meta', {
                  key: 'article:author:0' + index,
                  property: 'article:author',
                  content: author,
                }),
              );
            });
          }

          if (config.openGraph.article.section) {
            tagsToRender.push(
              React__default['default'].createElement('meta', {
                key: 'article:section',
                property: 'article:section',
                content: config.openGraph.article.section,
              }),
            );
          }

          if (
            config.openGraph.article.tags &&
            config.openGraph.article.tags.length
          ) {
            config.openGraph.article.tags.forEach(function (tag, index) {
              tagsToRender.push(
                React__default['default'].createElement('meta', {
                  key: 'article:tag:0' + index,
                  property: 'article:tag',
                  content: tag,
                }),
              );
            });
          }
        } else if (
          (type === 'video.movie' ||
            type === 'video.episode' ||
            type === 'video.tv_show' ||
            type === 'video.other') &&
          config.openGraph.video
        ) {
          if (
            config.openGraph.video.actors &&
            config.openGraph.video.actors.length
          ) {
            config.openGraph.video.actors.forEach(function (actor, index) {
              if (actor.profile) {
                tagsToRender.push(
                  React__default['default'].createElement('meta', {
                    key: 'video:actor:0' + index,
                    property: 'video:actor',
                    content: actor.profile,
                  }),
                );
              }

              if (actor.role) {
                tagsToRender.push(
                  React__default['default'].createElement('meta', {
                    key: 'video:actor:role:0' + index,
                    property: 'video:actor:role',
                    content: actor.role,
                  }),
                );
              }
            });
          }

          if (
            config.openGraph.video.directors &&
            config.openGraph.video.directors.length
          ) {
            config.openGraph.video.directors.forEach(function (
              director,
              index,
            ) {
              tagsToRender.push(
                React__default['default'].createElement('meta', {
                  key: 'video:director:0' + index,
                  property: 'video:director',
                  content: director,
                }),
              );
            });
          }

          if (
            config.openGraph.video.writers &&
            config.openGraph.video.writers.length
          ) {
            config.openGraph.video.writers.forEach(function (writer, index) {
              tagsToRender.push(
                React__default['default'].createElement('meta', {
                  key: 'video:writer:0' + index,
                  property: 'video:writer',
                  content: writer,
                }),
              );
            });
          }

          if (config.openGraph.video.duration) {
            tagsToRender.push(
              React__default['default'].createElement('meta', {
                key: 'video:duration',
                property: 'video:duration',
                content: config.openGraph.video.duration.toString(),
              }),
            );
          }

          if (config.openGraph.video.releaseDate) {
            tagsToRender.push(
              React__default['default'].createElement('meta', {
                key: 'video:release_date',
                property: 'video:release_date',
                content: config.openGraph.video.releaseDate,
              }),
            );
          }

          if (
            config.openGraph.video.tags &&
            config.openGraph.video.tags.length
          ) {
            config.openGraph.video.tags.forEach(function (tag, index) {
              tagsToRender.push(
                React__default['default'].createElement('meta', {
                  key: 'video:tag:0' + index,
                  property: 'video:tag',
                  content: tag,
                }),
              );
            });
          }

          if (config.openGraph.video.series) {
            tagsToRender.push(
              React__default['default'].createElement('meta', {
                key: 'video:series',
                property: 'video:series',
                content: config.openGraph.video.series,
              }),
            );
          }
        }
      }

      if (config.openGraph.title || config.title) {
        tagsToRender.push(
          React__default['default'].createElement('meta', {
            key: 'og:title',
            property: 'og:title',
            content: config.openGraph.title || updatedTitle,
          }),
        );
      }

      if (config.openGraph.description || config.description) {
        tagsToRender.push(
          React__default['default'].createElement('meta', {
            key: 'og:description',
            property: 'og:description',
            content: config.openGraph.description || config.description,
          }),
        );
      } // images

      if (config.defaultOpenGraphImageWidth) {
        defaults.defaultOpenGraphImageWidth = config.defaultOpenGraphImageWidth;
      }

      if (config.defaultOpenGraphImageHeight) {
        defaults.defaultOpenGraphImageHeight =
          config.defaultOpenGraphImageHeight;
      }

      if (config.openGraph.images && config.openGraph.images.length) {
        config.openGraph.images.forEach(function (image, index) {
          tagsToRender.push(
            React__default['default'].createElement('meta', {
              key: 'og:image:0' + index,
              property: 'og:image',
              content: image.url,
            }),
          );

          if (image.alt) {
            tagsToRender.push(
              React__default['default'].createElement('meta', {
                key: 'og:image:alt0' + index,
                property: 'og:image:alt',
                content: image.alt,
              }),
            );
          }

          if (image.width) {
            tagsToRender.push(
              React__default['default'].createElement('meta', {
                key: 'og:image:width0' + index,
                property: 'og:image:width',
                content: image.width.toString(),
              }),
            );
          } else if (defaults.defaultOpenGraphImageWidth) {
            tagsToRender.push(
              React__default['default'].createElement('meta', {
                key: 'og:image:width0' + index,
                property: 'og:image:width',
                content: defaults.defaultOpenGraphImageWidth.toString(),
              }),
            );
          }

          if (image.height) {
            tagsToRender.push(
              React__default['default'].createElement('meta', {
                key: 'og:image:height' + index,
                property: 'og:image:height',
                content: image.height.toString(),
              }),
            );
          } else if (defaults.defaultOpenGraphImageHeight) {
            tagsToRender.push(
              React__default['default'].createElement('meta', {
                key: 'og:image:height' + index,
                property: 'og:image:height',
                content: defaults.defaultOpenGraphImageHeight.toString(),
              }),
            );
          }
        });
      } // videos

      if (config.defaultOpenGraphVideoWidth) {
        defaults.defaultOpenGraphVideoWidth = config.defaultOpenGraphVideoWidth;
      }

      if (config.defaultOpenGraphVideoHeight) {
        defaults.defaultOpenGraphVideoHeight =
          config.defaultOpenGraphVideoHeight;
      }

      if (config.openGraph.videos && config.openGraph.videos.length) {
        config.openGraph.videos.forEach(function (video, index) {
          tagsToRender.push(
            React__default['default'].createElement('meta', {
              key: 'og:video:0' + index,
              property: 'og:video',
              content: video.url,
            }),
          );

          if (video.alt) {
            tagsToRender.push(
              React__default['default'].createElement('meta', {
                key: 'og:video:alt0' + index,
                property: 'og:video:alt',
                content: video.alt,
              }),
            );
          }

          if (video.width) {
            tagsToRender.push(
              React__default['default'].createElement('meta', {
                key: 'og:video:width0' + index,
                property: 'og:video:width',
                content: video.width.toString(),
              }),
            );
          } else if (defaults.defaultOpenGraphVideoWidth) {
            tagsToRender.push(
              React__default['default'].createElement('meta', {
                key: 'og:video:width0' + index,
                property: 'og:video:width',
                content: defaults.defaultOpenGraphVideoWidth.toString(),
              }),
            );
          }

          if (video.height) {
            tagsToRender.push(
              React__default['default'].createElement('meta', {
                key: 'og:video:height' + index,
                property: 'og:video:height',
                content: video.height.toString(),
              }),
            );
          } else if (defaults.defaultOpenGraphVideoHeight) {
            tagsToRender.push(
              React__default['default'].createElement('meta', {
                key: 'og:video:height' + index,
                property: 'og:video:height',
                content: defaults.defaultOpenGraphVideoHeight.toString(),
              }),
            );
          }

          if (video.secureUrl) {
            tagsToRender.push(
              React__default['default'].createElement('meta', {
                key: 'og:video:secure_url' + index,
                property: 'og:video:secure_url',
                content: video.secureUrl.toString(),
              }),
            );
          }

          if (video.type) {
            tagsToRender.push(
              React__default['default'].createElement('meta', {
                key: 'og:video:type' + index,
                property: 'og:video:type',
                content: video.type.toString(),
              }),
            );
          }
        });
      }

      if (config.openGraph.locale) {
        tagsToRender.push(
          React__default['default'].createElement('meta', {
            key: 'og:locale',
            property: 'og:locale',
            content: config.openGraph.locale,
          }),
        );
      }

      if (config.openGraph.site_name) {
        tagsToRender.push(
          React__default['default'].createElement('meta', {
            key: 'og:site_name',
            property: 'og:site_name',
            content: config.openGraph.site_name,
          }),
        );
      }
    }

    if (config.canonical) {
      tagsToRender.push(
        React__default['default'].createElement('link', {
          rel: 'canonical',
          href: config.canonical,
          key: 'canonical',
        }),
      );
    }

    if (config.additionalMetaTags && config.additionalMetaTags.length > 0) {
      config.additionalMetaTags.forEach(function (tag) {
        var _ref, _ref2, _tag$keyOverride;

        tagsToRender.push(
          React__default['default'].createElement(
            'meta',
            _extends(
              {
                key:
                  'meta:' +
                  ((_ref =
                    (_ref2 =
                      (_tag$keyOverride = tag.keyOverride) != null
                        ? _tag$keyOverride
                        : tag.name) != null
                      ? _ref2
                      : tag.property) != null
                    ? _ref
                    : tag.httpEquiv),
              },
              tag,
            ),
          ),
        );
      });
    }

    if (
      (_config$additionalLin = config.additionalLinkTags) != null &&
      _config$additionalLin.length
    ) {
      config.additionalLinkTags.forEach(function (tag) {
        var _tag$keyOverride2;

        tagsToRender.push(
          React__default['default'].createElement(
            'link',
            _extends(
              {
                key:
                  'link' +
                  ((_tag$keyOverride2 = tag.keyOverride) != null
                    ? _tag$keyOverride2
                    : tag.href) +
                  tag.rel,
              },
              tag,
            ),
          ),
        );
      });
    }

    return tagsToRender;
  };

  var DefaultSeo = /*#__PURE__*/ (function (_Component) {
    _inheritsLoose(DefaultSeo, _Component);

    function DefaultSeo() {
      return _Component.apply(this, arguments) || this;
    }

    var _proto = DefaultSeo.prototype;

    _proto.render = function render() {
      var _this$props = this.props,
        title = _this$props.title,
        titleTemplate = _this$props.titleTemplate,
        defaultTitle = _this$props.defaultTitle,
        _this$props$dangerous = _this$props.dangerouslySetAllPagesToNoIndex,
        dangerouslySetAllPagesToNoIndex =
          _this$props$dangerous === void 0 ? false : _this$props$dangerous,
        _this$props$dangerous2 = _this$props.dangerouslySetAllPagesToNoFollow,
        dangerouslySetAllPagesToNoFollow =
          _this$props$dangerous2 === void 0 ? false : _this$props$dangerous2,
        description = _this$props.description,
        canonical = _this$props.canonical,
        facebook = _this$props.facebook,
        openGraph = _this$props.openGraph,
        additionalMetaTags = _this$props.additionalMetaTags,
        twitter = _this$props.twitter,
        defaultOpenGraphImageWidth = _this$props.defaultOpenGraphImageWidth,
        defaultOpenGraphImageHeight = _this$props.defaultOpenGraphImageHeight,
        defaultOpenGraphVideoWidth = _this$props.defaultOpenGraphVideoWidth,
        defaultOpenGraphVideoHeight = _this$props.defaultOpenGraphVideoHeight,
        mobileAlternate = _this$props.mobileAlternate,
        languageAlternates = _this$props.languageAlternates,
        additionalLinkTags = _this$props.additionalLinkTags;
      return React__default['default'].createElement(
        Head__default['default'],
        null,
        buildTags({
          title: title,
          titleTemplate: titleTemplate,
          defaultTitle: defaultTitle,
          dangerouslySetAllPagesToNoIndex: dangerouslySetAllPagesToNoIndex,
          dangerouslySetAllPagesToNoFollow: dangerouslySetAllPagesToNoFollow,
          description: description,
          canonical: canonical,
          facebook: facebook,
          openGraph: openGraph,
          additionalMetaTags: additionalMetaTags,
          twitter: twitter,
          defaultOpenGraphImageWidth: defaultOpenGraphImageWidth,
          defaultOpenGraphImageHeight: defaultOpenGraphImageHeight,
          defaultOpenGraphVideoWidth: defaultOpenGraphVideoWidth,
          defaultOpenGraphVideoHeight: defaultOpenGraphVideoHeight,
          mobileAlternate: mobileAlternate,
          languageAlternates: languageAlternates,
          additionalLinkTags: additionalLinkTags,
        }),
      );
    };

    return DefaultSeo;
  })(React.Component);

  var NextSeo = /*#__PURE__*/ (function (_Component) {
    _inheritsLoose(NextSeo, _Component);

    function NextSeo() {
      return _Component.apply(this, arguments) || this;
    }

    var _proto = NextSeo.prototype;

    _proto.render = function render() {
      var _this$props = this.props,
        title = _this$props.title,
        _this$props$noindex = _this$props.noindex,
        noindex = _this$props$noindex === void 0 ? false : _this$props$noindex,
        nofollow = _this$props.nofollow,
        robotsProps = _this$props.robotsProps,
        description = _this$props.description,
        canonical = _this$props.canonical,
        openGraph = _this$props.openGraph,
        facebook = _this$props.facebook,
        twitter = _this$props.twitter,
        additionalMetaTags = _this$props.additionalMetaTags,
        titleTemplate = _this$props.titleTemplate,
        mobileAlternate = _this$props.mobileAlternate,
        languageAlternates = _this$props.languageAlternates,
        additionalLinkTags = _this$props.additionalLinkTags;
      return React__default['default'].createElement(
        Head__default['default'],
        null,
        buildTags({
          title: title,
          noindex: noindex,
          nofollow: nofollow,
          robotsProps: robotsProps,
          description: description,
          canonical: canonical,
          facebook: facebook,
          openGraph: openGraph,
          additionalMetaTags: additionalMetaTags,
          twitter: twitter,
          titleTemplate: titleTemplate,
          mobileAlternate: mobileAlternate,
          languageAlternates: languageAlternates,
          additionalLinkTags: additionalLinkTags,
        }),
      );
    };

    return NextSeo;
  })(React.Component);

  var markup = function markup(jsonld) {
    return {
      __html: jsonld,
    };
  };

  var formatAuthorName = function formatAuthorName(authorName) {
    return Array.isArray(authorName)
      ? '[' +
          authorName.map(function (name) {
            return '{"@type": "Person","name": "' + name + '"}';
          }) +
          ']'
      : '{"@type": "Person","name": "' + authorName + '"}';
  };

  var ArticleJsonLd = function ArticleJsonLd(_ref) {
    var keyOverride = _ref.keyOverride,
      url = _ref.url,
      title = _ref.title,
      _ref$images = _ref.images,
      images = _ref$images === void 0 ? [] : _ref$images,
      datePublished = _ref.datePublished,
      _ref$dateModified = _ref.dateModified,
      dateModified = _ref$dateModified === void 0 ? null : _ref$dateModified,
      authorName = _ref.authorName,
      description = _ref.description,
      publisherName = _ref.publisherName,
      publisherLogo = _ref.publisherLogo;
    var jslonld =
      '{\n    "@context": "https://schema.org",\n    "@type": "Article",\n    "mainEntityOfPage": {\n      "@type": "WebPage",\n      "@id": "' +
      url +
      '"\n    },\n    "headline": "' +
      title +
      '",\n    "image": [\n      ' +
      images.map(function (image) {
        return '"' + image + '"';
      }) +
      '\n     ],\n    "datePublished": "' +
      datePublished +
      '",\n    "dateModified": "' +
      (dateModified || datePublished) +
      '",\n    "author": ' +
      formatAuthorName(authorName) +
      ',\n    "publisher": {\n      "@type": "Organization",\n      "name": "' +
      publisherName +
      '",\n      "logo": {\n        "@type": "ImageObject",\n        "url": "' +
      publisherLogo +
      '"\n      }\n    },\n    "description": "' +
      description +
      '"\n  }';
    return React__default['default'].createElement(
      Head__default['default'],
      null,
      React__default['default'].createElement('script', {
        type: 'application/ld+json',
        dangerouslySetInnerHTML: markup(jslonld),
        key: 'jsonld-article' + (keyOverride ? '-' + keyOverride : ''),
      }),
    );
  };

  var BreadCrumbJsonLd = function BreadCrumbJsonLd(_ref) {
    var keyOverride = _ref.keyOverride,
      _ref$itemListElements = _ref.itemListElements,
      itemListElements =
        _ref$itemListElements === void 0 ? [] : _ref$itemListElements;
    var jslonld =
      '{\n    "@context": "https://schema.org",\n    "@type": "BreadcrumbList",\n    "itemListElement": [\n      ' +
      itemListElements.map(function (itemListElement) {
        return (
          '{\n        "@type": "ListItem",\n        "position": ' +
          itemListElement.position +
          ',\n        "item": {\n          "@id": "' +
          itemListElement.item +
          '",\n          "name": "' +
          itemListElement.name +
          '"\n        }\n      }'
        );
      }) +
      '\n     ]\n  }';
    return React__default['default'].createElement(
      Head__default['default'],
      null,
      React__default['default'].createElement('script', {
        type: 'application/ld+json',
        dangerouslySetInnerHTML: markup(jslonld),
        key: 'jsonld-breadcrumb' + (keyOverride ? '-' + keyOverride : ''),
      }),
    );
  };

  var buildQuestions = function buildQuestions(mainEntity) {
    return (
      '\n  ' +
      mainEntity.map(function (question) {
        return (
          '{\n      "@type": "Question",\n      "name": "' +
          question.questionName +
          '",\n      "acceptedAnswer": {\n        "@type": "Answer",\n        "text": "' +
          question.acceptedAnswerText +
          '"\n      }\n  }'
        );
      })
    );
  };

  var FAQPageJsonLd = function FAQPageJsonLd(_ref) {
    var _ref$mainEntity = _ref.mainEntity,
      mainEntity = _ref$mainEntity === void 0 ? [] : _ref$mainEntity;
    var jslonld =
      '{\n    "@context": "https://schema.org/",\n    "@type": "FAQPage",\n    "mainEntity": [' +
      buildQuestions(mainEntity) +
      ']\n  }';
    return React__default['default'].createElement(
      Head__default['default'],
      null,
      React__default['default'].createElement('script', {
        type: 'application/ld+json',
        dangerouslySetInnerHTML: markup(jslonld),
        key: 'jsonld-faq-page',
      }),
    );
  };

  var buildBaseSalary = function buildBaseSalary(baseSalary) {
    return (
      '\n  "baseSalary": {\n    "@type": "MonetaryAmount",\n    ' +
      (baseSalary.currency
        ? '"currency": "' + baseSalary.currency + '",'
        : '') +
      '\n    "value": {\n      ' +
      (baseSalary.value
        ? Array.isArray(baseSalary.value)
          ? '"minValue": "' +
            baseSalary.value[0] +
            '", "maxValue": "' +
            baseSalary.value[1] +
            '",'
          : '"value": "' + baseSalary.value + '",'
        : '') +
      '\n      ' +
      (baseSalary.unitText
        ? '"unitText": "' + baseSalary.unitText + '",'
        : '') +
      '\n      "@type": "QuantitativeValue"\n    }\n  },\n'
    );
  };

  var JobPostingJsonLd = function JobPostingJsonLd(_ref) {
    var keyOverride = _ref.keyOverride,
      baseSalary = _ref.baseSalary,
      datePosted = _ref.datePosted,
      description = _ref.description,
      employmentType = _ref.employmentType,
      hiringOrganization = _ref.hiringOrganization,
      jobLocation = _ref.jobLocation,
      applicantLocationRequirements = _ref.applicantLocationRequirements,
      jobLocationType = _ref.jobLocationType,
      title = _ref.title,
      validThrough = _ref.validThrough;
    var jslonld =
      '{\n    "@context": "https://schema.org",\n    "@type": "JobPosting",\n    ' +
      (baseSalary ? buildBaseSalary(baseSalary) : '') +
      '\n    "datePosted": "' +
      datePosted +
      '",\n    "description": "' +
      description +
      '",\n    ' +
      (employmentType ? '"employmentType": "' + employmentType + '",' : '') +
      '\n    "hiringOrganization" : {\n      "@type" : "Organization",\n      "name" : "' +
      hiringOrganization.name +
      '",\n      "sameAs" : "' +
      hiringOrganization.sameAs +
      '"\n      ' +
      (hiringOrganization.logo
        ? ',"logo": "' + hiringOrganization.logo + '"'
        : '') +
      '\n    },\n    ' +
      (jobLocation
        ? '"jobLocation": {\n      "@type": "Place",\n      "address": {\n        "@type": "PostalAddress",\n        "addressLocality": "' +
          jobLocation.addressLocality +
          '",\n        "addressRegion": "' +
          jobLocation.addressRegion +
          '",\n        "postalCode" : "' +
          jobLocation.postalCode +
          '",\n        "streetAddress" : "' +
          jobLocation.streetAddress +
          '",\n        "addressCountry" : "' +
          jobLocation.addressCountry +
          '"\n          }\n      },'
        : '') +
      '\n    ' +
      (applicantLocationRequirements
        ? ' "applicantLocationRequirements": {\n        "@type": "Country",\n        "name": "' +
          applicantLocationRequirements +
          '"\n    },'
        : '') +
      '\n    ' +
      (jobLocationType ? '"jobLocationType": "' + jobLocationType + '",' : '') +
      '\n    ' +
      (validThrough ? '"validThrough": "' + validThrough + '",' : '') +
      '\n    "title": "' +
      title +
      '"\n  }';
    return React__default['default'].createElement(
      Head__default['default'],
      null,
      React__default['default'].createElement('script', {
        type: 'application/ld+json',
        dangerouslySetInnerHTML: markup(jslonld),
        key: 'jsonld-jobposting' + (keyOverride ? '-' + keyOverride : ''),
      }),
    );
  };

  var BlogJsonLd = function BlogJsonLd(_ref) {
    var keyOverride = _ref.keyOverride,
      url = _ref.url,
      title = _ref.title,
      _ref$images = _ref.images,
      images = _ref$images === void 0 ? [] : _ref$images,
      datePublished = _ref.datePublished,
      _ref$dateModified = _ref.dateModified,
      dateModified = _ref$dateModified === void 0 ? null : _ref$dateModified,
      authorName = _ref.authorName,
      description = _ref.description;
    var jslonld =
      '{\n    "@context": "https://schema.org",\n    "@type": "Blog",\n    "mainEntityOfPage": {\n      "@type": "WebPage",\n      "@id": "' +
      url +
      '"\n    },\n    "headline": "' +
      title +
      '",\n    "image": [\n      ' +
      images.map(function (image) {
        return '"' + image + '"';
      }) +
      '\n     ],\n    "datePublished": "' +
      datePublished +
      '",\n    "dateModified": "' +
      (dateModified || datePublished) +
      '",\n    "author": ' +
      formatAuthorName(authorName) +
      ',\n    "description": "' +
      description +
      '"\n  }';
    return React__default['default'].createElement(
      Head__default['default'],
      null,
      React__default['default'].createElement('script', {
        type: 'application/ld+json',
        dangerouslySetInnerHTML: markup(jslonld),
        key: 'jsonld-blog' + (keyOverride ? '-' + keyOverride : ''),
      }),
    );
  };

  var CourseJsonLd = function CourseJsonLd(_ref) {
    var keyOverride = _ref.keyOverride,
      courseName = _ref.courseName,
      description = _ref.description,
      providerName = _ref.providerName,
      providerUrl = _ref.providerUrl;
    var jslonld =
      '{\n    "@context": "https://schema.org",\n    "@type": "Course",\n    "name": "' +
      courseName +
      '",\n    "description": "' +
      description +
      '",\n    "provider": {\n      "@type": "Organization",\n      "name": "' +
      providerName +
      '"' +
      (providerUrl ? ',\n      "sameAs": "' + providerUrl + '"' : '') +
      '\n    }\n  }';
    return React__default['default'].createElement(
      Head__default['default'],
      null,
      React__default['default'].createElement('script', {
        type: 'application/ld+json',
        dangerouslySetInnerHTML: markup(jslonld),
        key: 'jsonld-course' + (keyOverride ? '-' + keyOverride : ''),
      }),
    );
  };

  var DatasetJsonLd = function DatasetJsonLd(_ref) {
    var description = _ref.description,
      name = _ref.name,
      license = _ref.license;
    var jslonld =
      '{\n    "@context": "https://schema.org",\n    "@type": "Dataset",\n    "description": "' +
      description +
      '",\n    "name": "' +
      name +
      '"' +
      (license ? ',\n        "license": "' + license + '"' : '') +
      '\n  }';
    return React__default['default'].createElement(
      Head__default['default'],
      null,
      React__default['default'].createElement('script', {
        type: 'application/ld+json',
        dangerouslySetInnerHTML: markup(jslonld),
        key: 'jsonld-dataset',
      }),
    );
  };

  var formatIfArray = function formatIfArray(value) {
    return Array.isArray(value)
      ? '[' +
          value.map(function (val) {
            return '"' + val + '"';
          }) +
          ']'
      : '"' + value + '"';
  };

  var buildAddress = function (address) {
    return (
      '\n  "address": {\n    "@type": "PostalAddress",\n    "streetAddress": "' +
      address.streetAddress +
      '",\n    "addressLocality": "' +
      address.addressLocality +
      '",\n    ' +
      (address.addressRegion
        ? '"addressRegion": "' + address.addressRegion + '",'
        : '') +
      '\n    "postalCode": "' +
      address.postalCode +
      '",\n    "addressCountry": "' +
      address.addressCountry +
      '"\n  },\n'
    );
  };

  var buildAction = function buildAction(action) {
    return (
      '\n  "' +
      action.actionName +
      '": {\n    "@type": "' +
      action.actionType +
      '",\n    "target": "' +
      action.target +
      '"\n  }\n'
    );
  };

  var buildAreaServed = function buildAreaServed(areaServed) {
    return (
      '\n  "areaServed": [\n    ' +
      areaServed.map(function (area) {
        return buildGeoCircle(area);
      }) +
      '\n  ]\n'
    );
  };

  var buildAggregateRating = function buildAggregateRating(aggregateRating) {
    return (
      '\n  "aggregateRating": {\n    "@type": "AggregateRating",\n    "ratingValue": "' +
      aggregateRating.ratingValue +
      '",\n    "ratingCount": "' +
      aggregateRating.ratingCount +
      '"\n  },\n'
    );
  };

  var buildGeo = function buildGeo(geo) {
    return (
      '\n  "geo": {\n    "@type": "GeoCoordinates",\n    "latitude": "' +
      geo.latitude +
      '",\n    "longitude": "' +
      geo.longitude +
      '"\n  },\n'
    );
  };

  var buildGeoCircle = function buildGeoCircle(geoCircle) {
    return (
      '\n  {\n    "@type": "GeoCircle",\n    "geoMidpoint": {\n      "@type": "GeoCoordinates",\n      "latitude": "' +
      geoCircle.geoMidpoint.latitude +
      '",\n      "longitude": "' +
      geoCircle.geoMidpoint.longitude +
      '"\n    },\n    "geoRadius": "' +
      geoCircle.geoRadius +
      '"\n  }\n'
    );
  };

  var buildMakesOffer = function buildMakesOffer(makesOffer) {
    return (
      '\n  "makesOffer":[\n    ' +
      makesOffer.map(function (offer) {
        return buildOffer(offer);
      }) +
      '\n  ]\n'
    );
  };

  var buildOffer = function buildOffer(offer) {
    return (
      '\n  {\n    "@type": "Offer",\n    ' +
      buildPriceSpecification(offer.priceSpecification) +
      ',\n    ' +
      buildItemOffered(offer.itemOffered) +
      '\n  }\n'
    );
  };

  var buildOpeningHours = function buildOpeningHours(openingHours) {
    return (
      '\n  {\n    "@type": "OpeningHoursSpecification",\n    ' +
      (openingHours.dayOfWeek
        ? '"dayOfWeek": ' + formatIfArray(openingHours.dayOfWeek) + ','
        : '') +
      '\n    "opens": "' +
      openingHours.opens +
      '",\n    ' +
      (openingHours.validFrom
        ? '"validFrom": "' + openingHours.validFrom + '",'
        : '') +
      '\n    ' +
      (openingHours.validThrough
        ? '"validThrough": "' + openingHours.validThrough + '",'
        : '') +
      '\n    "closes": "' +
      openingHours.closes +
      '"\n  }\n'
    );
  };

  var buildPriceSpecification = function buildPriceSpecification(
    priceSpecification,
  ) {
    return (
      '\n  "priceSpecification": {\n    "@type": "' +
      priceSpecification.type +
      '",\n    "priceCurrency": "' +
      priceSpecification.priceCurrency +
      '",\n    "price": "' +
      priceSpecification.price +
      '"\n  }\n'
    );
  };

  var buildRating = function buildRating(rating) {
    return (
      '\n  {\n    "@type": "Rating",\n    ' +
      (rating.bestRating ? '"bestRating": "' + rating.bestRating + '",' : '') +
      '\n    ' +
      (rating.reviewAspect
        ? '"reviewAspect": "' + rating.reviewAspect + '",'
        : '') +
      '\n    ' +
      (rating.worstRating
        ? '"worstRating": "' + rating.worstRating + '",'
        : '') +
      '\n    "ratingValue": "' +
      rating.ratingValue +
      '"\n  }\n'
    );
  };

  var buildReview = function buildReview(reviews) {
    return (
      '\n  "review": [\n    ' +
      reviews.map(function (review) {
        return (
          '\n      {\n        "@type": "Review",\n        "author": "' +
          review.author +
          '",\n        "datePublished": "' +
          review.datePublished +
          '",\n        ' +
          (review.name ? '"name": "' + review.name + '",' : '') +
          '\n        "reviewBody": "' +
          review.reviewBody +
          '",\n        "reviewRating": ' +
          buildRating(review.reviewRating) +
          '\n      }\n    '
        );
      }) +
      '\n  ],\n'
    );
  };

  var buildItemOffered = function buildItemOffered(service) {
    return (
      '\n  "itemOffered": {\n    "@type": "Service",\n    "name": "' +
      service.name +
      '",\n    "description": "' +
      service.description +
      '"\n  }\n'
    );
  };

  var LocalBusinessJsonLd = function LocalBusinessJsonLd(_ref) {
    var keyOverride = _ref.keyOverride,
      type = _ref.type,
      id = _ref.id,
      name = _ref.name,
      description = _ref.description,
      url = _ref.url,
      telephone = _ref.telephone,
      address = _ref.address,
      geo = _ref.geo,
      images = _ref.images,
      rating = _ref.rating,
      review = _ref.review,
      priceRange = _ref.priceRange,
      servesCuisine = _ref.servesCuisine,
      sameAs = _ref.sameAs,
      openingHours = _ref.openingHours,
      action = _ref.action,
      areaServed = _ref.areaServed,
      makesOffer = _ref.makesOffer;
    var jslonld =
      '{\n    "@context": "https://schema.org",\n    "@type": "' +
      type +
      '",\n    ' +
      (id ? '"@id": "' + id + '",' : '') +
      '\n    ' +
      (description ? '"description": "' + description + '",' : '') +
      '\n    ' +
      (url ? '"url": "' + url + '",' : '') +
      '\n    ' +
      (telephone ? '"telephone": "' + telephone + '",' : '') +
      '\n    ' +
      buildAddress(address) +
      '\n    ' +
      (geo ? '' + buildGeo(geo) : '') +
      '\n    ' +
      (rating ? '' + buildAggregateRating(rating) : '') +
      '\n    ' +
      (review ? '' + buildReview(review) : '') +
      '\n    ' +
      (action ? buildAction(action) + ',' : '') +
      '\n    ' +
      (areaServed ? buildAreaServed(areaServed) + ',' : '') +
      '\n    ' +
      (makesOffer ? buildMakesOffer(makesOffer) + ',' : '') +
      '\n    ' +
      (priceRange ? '"priceRange": "' + priceRange + '",' : '') +
      '\n    ' +
      (servesCuisine
        ? '"servesCuisine":' + formatIfArray(servesCuisine) + ','
        : '') +
      '\n    ' +
      (images ? '"image":' + formatIfArray(images) + ',' : '') +
      '\n    ' +
      (sameAs
        ? '"sameAs": [' +
          sameAs.map(function (url) {
            return '"' + url + '"';
          }) +
          '],'
        : '') +
      '\n    ' +
      (openingHours
        ? '"openingHoursSpecification": ' +
          (Array.isArray(openingHours)
            ? '[' +
              openingHours.map(function (hours) {
                return '' + buildOpeningHours(hours);
              }) +
              ']'
            : buildOpeningHours(openingHours)) +
          ','
        : '') +
      '\n    "name": "' +
      name +
      '"\n  }';
    return React__default['default'].createElement(
      Head__default['default'],
      null,
      React__default['default'].createElement('script', {
        type: 'application/ld+json',
        dangerouslySetInnerHTML: markup(jslonld),
        key: 'jsonld-local-business' + (keyOverride ? '-' + keyOverride : ''),
      }),
    );
  };

  var LogoJsonLd = function LogoJsonLd(_ref) {
    var keyOverride = _ref.keyOverride,
      url = _ref.url,
      logo = _ref.logo;
    var jslonld =
      '{\n    "@context": "https://schema.org",\n    "@type": "Organization",\n    "url": "' +
      url +
      '",\n    "logo": "' +
      logo +
      '"\n  }';
    return React__default['default'].createElement(
      Head__default['default'],
      null,
      React__default['default'].createElement('script', {
        type: 'application/ld+json',
        dangerouslySetInnerHTML: markup(jslonld),
        key: 'jsonld-logo' + (keyOverride ? '-' + keyOverride : ''),
      }),
    );
  };

  // TODO: Docs for offers itemCondition & availability
  // TODO: Seller type, make dynamic
  var buildOffers = function buildOffers(offers) {
    return (
      '\n  {\n    "@type": "Offer",\n    "priceCurrency": "' +
      offers.priceCurrency +
      '",\n    ' +
      (offers.priceValidUntil
        ? '"priceValidUntil": "' + offers.priceValidUntil + '",'
        : '') +
      '\n    ' +
      (offers.itemCondition
        ? '"itemCondition": "' + offers.itemCondition + '",'
        : '') +
      '\n    ' +
      (offers.availability
        ? '"availability": "' + offers.availability + '",'
        : '') +
      '\n    ' +
      (offers.url ? '"url": "' + offers.url + '",' : '') +
      '\n    ' +
      (offers.seller
        ? '\n      "seller": {\n      "@type": "Organization",\n      "name": "' +
          offers.seller.name +
          '"\n    },\n    '
        : '') +
      '\n    "price": "' +
      offers.price +
      '"\n  }\n'
    );
  };

  var buildAggregateOffer = function buildAggregateOffer(offer) {
    return (
      '\n  {\n    "@type": "AggregateOffer",\n    "priceCurrency": "' +
      offer.priceCurrency +
      '",\n    ' +
      (offer.highPrice ? '"highPrice": "' + offer.highPrice + '",' : '') +
      '\n    ' +
      (offer.offerCount ? '"offerCount": "' + offer.offerCount + '",' : '') +
      '\n    ' +
      (offer.offers
        ? '"offers": ' +
          (Array.isArray(offer.offers)
            ? '[' +
              offer.offers.map(function (offer) {
                return '' + buildOffers(offer);
              }) +
              ']'
            : buildOffers(offer.offers)) +
          ','
        : '') +
      '\n    "lowPrice": "' +
      offer.lowPrice +
      '"\n  }\n'
    );
  };

  var buildAggregateRating$1 = function buildAggregateRating(aggregateRating) {
    return (
      '\n  "aggregateRating": {\n      "@type": "AggregateRating",\n      ' +
      (aggregateRating.ratingCount
        ? '"ratingCount": "' + aggregateRating.ratingCount + '",'
        : '') +
      '\n      ' +
      (aggregateRating.reviewCount
        ? '"reviewCount": "' + aggregateRating.reviewCount + '",'
        : '') +
      '\n      ' +
      (aggregateRating.bestRating
        ? '"bestRating": "' + aggregateRating.bestRating + '",'
        : '') +
      '\n      "ratingValue": "' +
      aggregateRating.ratingValue +
      '"\n    },\n'
    );
  };

  var buildReviewRating = function buildReviewRating(rating) {
    return rating
      ? '"reviewRating": {\n          "@type": "Rating",\n          ' +
          (rating.bestRating
            ? '"bestRating": "' + rating.bestRating + '",'
            : '') +
          '\n          ' +
          (rating.worstRating
            ? '"worstRating": "' + rating.worstRating + '",'
            : '') +
          '\n          "ratingValue": "' +
          rating.ratingValue +
          '"\n        }'
      : '';
  };
  var buildAuthor = function buildAuthor(author) {
    return (
      '\n  "author": {\n      "@type": "' +
      author.type +
      '",\n      "name": "' +
      author.name +
      '"\n  },\n'
    );
  };
  var buildPublisher = function buildPublisher(publisher) {
    return (
      '\n  "publisher": {\n      "@type": "' +
      publisher.type +
      '",\n      "name": "' +
      publisher.name +
      '"\n  },\n'
    );
  };
  var buildReviews = function buildReviews(reviews) {
    return (
      '\n  "review": [\n    ' +
      reviews.map(function (review) {
        return (
          '{\n        "@type": "Review",\n        ' +
          (review.author ? buildAuthor(review.author) : '') +
          '\n        ' +
          (review.publisher ? buildPublisher(review.publisher) : '') +
          '\n        ' +
          (review.datePublished
            ? '"datePublished": "' + review.datePublished + '",'
            : '') +
          '\n        ' +
          (review.reviewBody
            ? '"reviewBody": "' + review.reviewBody + '",'
            : '') +
          '\n        ' +
          (review.name ? '"name": "' + review.name + '",' : '') +
          '\n        ' +
          buildReviewRating(review.reviewRating) +
          '\n    }'
        );
      }) +
      '\n  ],\n'
    );
  };

  var buildBrand = function buildBrand(brand) {
    return (
      '\n  "brand": {\n      "@type": "Thing",\n      "name": "' +
      brand +
      '"\n    },\n'
    );
  };

  var ProductJsonLd = function ProductJsonLd(_ref) {
    var keyOverride = _ref.keyOverride,
      productName = _ref.productName,
      _ref$images = _ref.images,
      images = _ref$images === void 0 ? [] : _ref$images,
      description = _ref.description,
      sku = _ref.sku,
      gtin8 = _ref.gtin8,
      gtin13 = _ref.gtin13,
      gtin14 = _ref.gtin14,
      mpn = _ref.mpn,
      brand = _ref.brand,
      _ref$reviews = _ref.reviews,
      reviews = _ref$reviews === void 0 ? [] : _ref$reviews,
      aggregateRating = _ref.aggregateRating,
      offers = _ref.offers,
      aggregateOffer = _ref.aggregateOffer,
      color = _ref.color,
      manufacturerName = _ref.manufacturerName,
      manufacturerLogo = _ref.manufacturerLogo,
      material = _ref.material,
      slogan = _ref.slogan,
      disambiguatingDescription = _ref.disambiguatingDescription,
      productionDate = _ref.productionDate,
      releaseDate = _ref.releaseDate,
      purchaseDate = _ref.purchaseDate,
      award = _ref.award;
    var jslonld =
      '{\n    "@context": "https://schema.org/",\n    "@type": "Product",\n    ' +
      (images.length ? '"image":' + formatIfArray(images) + ',' : '') +
      '\n    ' +
      (description ? '"description": "' + description + '",' : '') +
      '\n    ' +
      (mpn ? '"mpn": "' + mpn + '",' : '') +
      '\n    ' +
      (sku ? '"sku": "' + sku + '",' : '') +
      '\n    ' +
      (gtin8 ? '"gtin8": "' + gtin8 + '",' : '') +
      '\n    ' +
      (gtin13 ? '"gtin13": "' + gtin13 + '",' : '') +
      '\n    ' +
      (gtin14 ? '"gtin14": "' + gtin14 + '",' : '') +
      '\n    ' +
      (brand ? buildBrand(brand) : '') +
      '\n    ' +
      (reviews.length ? buildReviews(reviews) : '') +
      '\n    ' +
      (aggregateRating ? buildAggregateRating$1(aggregateRating) : '') +
      '\n    ' +
      (color ? '"color": "' + color + '",' : '') +
      '\n    ' +
      (material ? '"material": "' + material + '",' : '') +
      '\n    ' +
      (slogan ? '"slogan": "' + slogan + '",' : '') +
      '\n    ' +
      (disambiguatingDescription
        ? '"disambiguatingDescription": "' + disambiguatingDescription + '",'
        : '') +
      '\n    ' +
      (productionDate ? '"productionDate": "' + productionDate + '",' : '') +
      '\n    ' +
      (releaseDate ? '"releaseDate": "' + releaseDate + '",' : '') +
      '\n    ' +
      (purchaseDate ? '"purchaseDate": "' + purchaseDate + '",' : '') +
      '\n    ' +
      (award ? '"award": "' + award + '",' : '') +
      '\n    ' +
      (manufacturerName
        ? '\n        "manufacturer": {\n          "@type": "Organization",\n          ' +
          (manufacturerLogo
            ? '\n              "logo": {\n                "@type": "ImageObject",\n                "url": "' +
              manufacturerLogo +
              '"\n              },\n              '
            : '') +
          '\n          "name": "' +
          manufacturerName +
          '"\n        },\n        '
        : '') +
      '\n    ' +
      (offers
        ? '"offers": ' +
          (Array.isArray(offers)
            ? '[' +
              offers.map(function (offer) {
                return '' + buildOffers(offer);
              }) +
              ']'
            : buildOffers(offers)) +
          ','
        : '') +
      '\n    ' +
      (aggregateOffer && !offers
        ? '"offers": ' + buildAggregateOffer(aggregateOffer) + ','
        : '') +
      '\n    "name": "' +
      productName +
      '"\n  }';
    return React__default['default'].createElement(
      Head__default['default'],
      null,
      React__default['default'].createElement('script', {
        type: 'application/ld+json',
        dangerouslySetInnerHTML: markup(jslonld),
        key: 'jsonld-product' + (keyOverride ? '-' + keyOverride : ''),
      }),
    );
  };

  var SocialProfileJsonLd = function SocialProfileJsonLd(_ref) {
    var keyOverride = _ref.keyOverride,
      type = _ref.type,
      name = _ref.name,
      url = _ref.url,
      _ref$sameAs = _ref.sameAs,
      sameAs = _ref$sameAs === void 0 ? [] : _ref$sameAs;
    var jslonld =
      '{\n    "@context": "https://schema.org",\n    "@type": "' +
      type +
      '",\n    "name": "' +
      name +
      '",\n    "url": "' +
      url +
      '",\n    "sameAs": [\n      ' +
      sameAs.map(function (socialUrl) {
        return '"' + socialUrl + '"';
      }) +
      '\n     ]\n  }';
    return React__default['default'].createElement(
      Head__default['default'],
      null,
      React__default['default'].createElement('script', {
        type: 'application/ld+json',
        dangerouslySetInnerHTML: markup(jslonld),
        key: 'jsonld-social' + (keyOverride ? '-' + keyOverride : ''),
      }),
    );
  };

  var formatIfArray$1 = function formatIfArray(value) {
    return Array.isArray(value)
      ? '[' +
          value.map(function (val) {
            return '"' + val + '"';
          }) +
          ']'
      : '"' + value + '"';
  };

  var buildContactPoint = function buildContactPoint(contactPoint) {
    return contactPoint.map(function (contact) {
      return (
        '{\n    "@type": "ContactPoint",\n    "telephone": "' +
        contact.telephone +
        '",\n    "contactType": "' +
        contact.contactType +
        '"' +
        (contact.areaServed
          ? ',\n    "areaServed": ' + formatIfArray$1(contact.areaServed)
          : '') +
        (contact.availableLanguage
          ? ',\n    "availableLanguage": ' +
            formatIfArray$1(contact.availableLanguage)
          : '') +
        (contact.contactOption
          ? ',\n    "contactOption": "' + contact.contactOption + '"'
          : '') +
        '\n    }'
      );
    });
  };

  var CorporateContactJsonLd = function CorporateContactJsonLd(_ref) {
    var keyOverride = _ref.keyOverride,
      url = _ref.url,
      logo = _ref.logo,
      contactPoint = _ref.contactPoint;
    var jslonld =
      '{\n    "@context": "https://schema.org",\n    "@type": "Organization",\n    "url": "' +
      url +
      '",\n    ' +
      (logo ? '"logo": "' + logo + '",' : '') +
      '\n    "contactPoint": [' +
      buildContactPoint(contactPoint) +
      ']\n  }';
    return React__default['default'].createElement(
      Head__default['default'],
      null,
      React__default['default'].createElement('script', {
        type: 'application/ld+json',
        dangerouslySetInnerHTML: markup(jslonld),
        key:
          'jsonld-corporate-contact' + (keyOverride ? '-' + keyOverride : ''),
      }),
    );
  };

  var NewsArticleJsonLd = function NewsArticleJsonLd(_ref) {
    var keyOverride = _ref.keyOverride,
      url = _ref.url,
      title = _ref.title,
      _ref$images = _ref.images,
      images = _ref$images === void 0 ? [] : _ref$images,
      section = _ref.section,
      keywords = _ref.keywords,
      datePublished = _ref.datePublished,
      _ref$dateCreated = _ref.dateCreated,
      dateCreated = _ref$dateCreated === void 0 ? null : _ref$dateCreated,
      _ref$dateModified = _ref.dateModified,
      dateModified = _ref$dateModified === void 0 ? null : _ref$dateModified,
      authorName = _ref.authorName,
      description = _ref.description,
      body = _ref.body,
      publisherName = _ref.publisherName,
      publisherLogo = _ref.publisherLogo;
    var jslonld =
      '{\n    "@context": "https://schema.org",\n    "@type": "NewsArticle",\n    "mainEntityOfPage": {\n      "@type": "WebPage",\n      "@id": "' +
      url +
      '"\n    },\n    "headline": "' +
      title +
      '",\n    "image": [\n      ' +
      images.map(function (image) {
        return '"' + image + '"';
      }) +
      '\n     ],\n    "articleSection":"' +
      section +
      '",\n    "keywords": "' +
      keywords +
      '",\n    "datePublished": "' +
      datePublished +
      '",\n    "dateCreated": "' +
      (dateCreated || datePublished) +
      '",\n    "dateModified": "' +
      (dateModified || datePublished) +
      '",\n    "author": ' +
      formatAuthorName(authorName) +
      ',\n    "publisher": {\n      "@type": "Organization",\n      "name": "' +
      publisherName +
      '",\n      "logo": {\n        "@type": "ImageObject",\n        "url": "' +
      publisherLogo +
      '"\n      }\n    },\n    "description": "' +
      description +
      '",\n    "articleBody": "' +
      body +
      '"\n  }';
    return React__default['default'].createElement(
      Head__default['default'],
      null,
      React__default['default'].createElement('script', {
        type: 'application/ld+json',
        dangerouslySetInnerHTML: markup(jslonld),
        key: 'jsonld-newsarticle' + (keyOverride ? '-' + keyOverride : ''),
      }),
    );
  };

  var buildLocation = function buildLocation(location) {
    return (
      '\n  "location": {\n    "@type": "Place",\n    ' +
      buildAddress(location.address) +
      '\n    ' +
      (location.sameAs ? '"sameAs": "' + location.sameAs + '",' : '') +
      '\n    "name": "' +
      location.name +
      '"\n  },\n'
    );
  };

  var buildPerformer = function buildPerformer(performer) {
    return (
      '\n  {\n    "@type": "PerformingGroup",\n    "name": "' +
      performer.name +
      '"\n  }\n'
    );
  };

  var EventJsonLd = function EventJsonLd(_ref) {
    var keyOverride = _ref.keyOverride,
      name = _ref.name,
      startDate = _ref.startDate,
      endDate = _ref.endDate,
      location = _ref.location,
      url = _ref.url,
      description = _ref.description,
      images = _ref.images,
      offers = _ref.offers,
      aggregateOffer = _ref.aggregateOffer,
      performers = _ref.performers;
    var jslonld =
      '{\n    "@context": "https://schema.org",\n    "@type": "Event",\n    "startDate": "' +
      startDate +
      '",\n    "endDate": "' +
      endDate +
      '",\n    ' +
      buildLocation(location) +
      '\n    ' +
      (images ? '"image":' + formatIfArray(images) + ',' : '') +
      '\n    ' +
      (url ? '"url": "' + url + '",' : '') +
      '\n    ' +
      (description ? '"description": "' + description + '",' : '') +
      '\n    ' +
      (offers
        ? '"offers": ' +
          (Array.isArray(offers)
            ? '[' +
              offers.map(function (offer) {
                return '' + buildOffers(offer);
              }) +
              ']'
            : buildOffers(offers)) +
          ','
        : '') +
      '\n    ' +
      (aggregateOffer && !offers
        ? '"offers": ' + buildAggregateOffer(aggregateOffer) + ','
        : '') +
      '\n    ' +
      (performers
        ? '"performer": ' +
          (Array.isArray(performers)
            ? '[' +
              performers.map(function (performer) {
                return '' + buildPerformer(performer);
              }) +
              ']'
            : buildPerformer(performers)) +
          ','
        : '') +
      '\n    "name": "' +
      name +
      '"\n  }';
    return React__default['default'].createElement(
      Head__default['default'],
      null,
      React__default['default'].createElement('script', {
        type: 'application/ld+json',
        dangerouslySetInnerHTML: markup(jslonld),
        key: 'jsonld-video' + (keyOverride ? '-' + keyOverride : ''),
      }),
    );
  };

  var buildVideo = function (video, context) {
    if (context === void 0) {
      context = false;
    }

    return (
      '{\n      ' +
      (context ? '"@context": "https://schema.org",' : '') +
      '\n      "@type": "VideoObject",\n      "name": "' +
      video.name +
      '",\n      "description": "' +
      video.description +
      '",\n      "thumbnailUrl": [\n          ' +
      video.thumbnailUrls
        .map(function (thumbnailUrl) {
          return '"' + thumbnailUrl + '"';
        })
        .join(',') +
      '\n        ],\n        ' +
      (video.contentUrl ? '"contentUrl": "' + video.contentUrl + '",' : '') +
      '\n        ' +
      (video.duration ? '"duration": "' + video.duration + '",' : '') +
      '\n        ' +
      (video.embedUrl ? '"embedUrl": "' + video.embedUrl + '",' : '') +
      '\n        ' +
      (video.expires ? '"expires": "' + video.expires + '",' : '') +
      '        \n        ' +
      (video.hasPart
        ? '"hasPart": ' +
          (Array.isArray(video.hasPart)
            ? '[' +
              video.hasPart
                .map(function (clip) {
                  return '' + buildClip(clip);
                })
                .join(',') +
              ']'
            : buildClip(video.hasPart)) +
          ','
        : '') +
      '\n        ' +
      (video.watchCount
        ? '' + buildInteractionStatistic(video.watchCount)
        : '') +
      '        \n        ' +
      (video.publication
        ? '"publication": ' +
          (Array.isArray(video.publication)
            ? '[' +
              video.publication
                .map(function (broadcastEvent) {
                  return '' + buildBroadcastEvent(broadcastEvent);
                })
                .join(',') +
              ']'
            : buildBroadcastEvent(video.publication)) +
          ','
        : '') +
      '\n        ' +
      (video.regionsAllowed
        ? '"regionsAllowed": ' + formatIfArray(video.regionsAllowed) + ','
        : '') +
      '\n        "uploadDate": "' +
      video.uploadDate +
      '"\n  }'
    );
  };

  var buildClip = function buildClip(clip) {
    return (
      '\n  "geo": {\n    "@type": "Clip",\n    "name": "' +
      clip.name +
      '",\n    "startOffset": ' +
      clip.startOffset +
      ',\n    "url": "' +
      clip.url +
      '"\n  }\n'
    );
  };

  var buildInteractionStatistic = function buildInteractionStatistic(
    watchCount,
  ) {
    return (
      '\n  "interactionStatistic": {\n    "@type": "InteractionCounter",\n    "interactionType": { "@type": "https://schema.org/WatchAction" },\n    "userInteractionCount": ' +
      watchCount +
      '\n  },\n'
    );
  };

  var buildBroadcastEvent = function buildBroadcastEvent(publication) {
    return (
      '\n  "publication": {\n    "@type": "BroadcastEvent",\n    "name": "' +
      publication.name +
      '",\n    "isLiveBroadcast": ' +
      publication.isLiveBroadcast +
      ',\n    "startDate": "' +
      publication.startDate +
      '",\n    "endDate": "' +
      publication.endDate +
      '"\n  }\n'
    );
  };

  var VideoJsonLd = function VideoJsonLd(_ref) {
    var keyOverride = _ref.keyOverride,
      name = _ref.name,
      description = _ref.description,
      thumbnailUrls = _ref.thumbnailUrls,
      uploadDate = _ref.uploadDate,
      contentUrl = _ref.contentUrl,
      duration = _ref.duration,
      embedUrl = _ref.embedUrl,
      expires = _ref.expires,
      hasPart = _ref.hasPart,
      watchCount = _ref.watchCount,
      publication = _ref.publication,
      regionsAllowed = _ref.regionsAllowed;
    var jslonld = buildVideo(
      {
        name: name,
        description: description,
        thumbnailUrls: thumbnailUrls,
        uploadDate: uploadDate,
        contentUrl: contentUrl,
        duration: duration,
        embedUrl: embedUrl,
        expires: expires,
        hasPart: hasPart,
        watchCount: watchCount,
        publication: publication,
        regionsAllowed: regionsAllowed,
      },
      true,
    );
    return React__default['default'].createElement(
      Head__default['default'],
      null,
      React__default['default'].createElement('script', {
        type: 'application/ld+json',
        dangerouslySetInnerHTML: markup(jslonld),
        key: 'jsonld-video' + (keyOverride ? '-' + keyOverride : ''),
      }),
    );
  };

  var buildQuestions$1 = function buildQuestions(mainEntity) {
    return (
      '{\n        "@type": "Question",\n        "name": "' +
      mainEntity.name +
      '",\n        ' +
      (mainEntity.text ? '"text": "' + mainEntity.text + '",' : '') +
      '\n        "answerCount": ' +
      mainEntity.answerCount +
      ',\n        ' +
      (mainEntity.upvotedCount
        ? '"upvoteCount": ' + mainEntity.upvotedCount + ','
        : '') +
      '\n        ' +
      (mainEntity.dateCreated
        ? '"dateCreated": "' + mainEntity.dateCreated + '",'
        : '') +
      '\n        ' +
      (mainEntity.author
        ? '"author": {\n          "@type": "Person",\n          "name": "' +
          mainEntity.author.name +
          '"\n        },'
        : '') +
      '\n        ' +
      (mainEntity.acceptedAnswer
        ? '"acceptedAnswer": {\n          "@type": "Answer",\n          "text": "' +
          mainEntity.acceptedAnswer.text +
          '",\n          ' +
          (mainEntity.acceptedAnswer.dateCreated
            ? '"dateCreated": "' + mainEntity.acceptedAnswer.dateCreated + '",'
            : '') +
          '\n          ' +
          (mainEntity.acceptedAnswer.upvotedCount
            ? '"upvoteCount": ' + mainEntity.acceptedAnswer.upvotedCount + ','
            : '') +
          '\n          ' +
          (mainEntity.acceptedAnswer.url
            ? '"url": "' + mainEntity.acceptedAnswer.url + '",'
            : '') +
          '\n          ' +
          (mainEntity.acceptedAnswer.author
            ? '"author": {\n            "@type": "Person",\n            "name": "' +
              mainEntity.acceptedAnswer.author.name +
              '"\n          }'
            : '') +
          '\n        },'
        : '') +
      '\n        ' +
      (mainEntity.suggestedAnswer
        ? '"suggestedAnswer": [' +
          mainEntity.suggestedAnswer.map(function (suggested) {
            return (
              '{\n            "@type": "Answer",\n            "text": "' +
              suggested.text +
              '",\n            ' +
              (suggested.dateCreated
                ? '"dateCreated": "' + suggested.dateCreated + '",'
                : '') +
              '\n            ' +
              (suggested.upvotedCount
                ? '"upvoteCount": ' + suggested.upvotedCount + ','
                : '"upvoteCount": ' + 0 + ',') +
              '\n            ' +
              (suggested.url ? '"url": "' + suggested.url + '",' : '') +
              '\n              ' +
              (suggested.author
                ? '"author": {\n                        "@type": "Person",\n                        "name": "' +
                  suggested.author.name +
                  '"\n                    }'
                : '') +
              '\n        }'
            );
          }) +
          '\n    ]'
        : '') +
      '\n}'
    );
  };

  var QAPageJsonLd = function QAPageJsonLd(_ref) {
    var mainEntity = _ref.mainEntity,
      keyOverride = _ref.keyOverride;
    var jslonld =
      '{\n    "@context": "https://schema.org",\n    "@type": "QAPage",\n    "mainEntity": ' +
      buildQuestions$1(mainEntity) +
      '\n    }';
    return React__default['default'].createElement(
      Head__default['default'],
      null,
      React__default['default'].createElement('script', {
        type: 'application/ld+json',
        dangerouslySetInnerHTML: markup(jslonld),
        key: 'jsonld-qa' + (keyOverride ? '-' + keyOverride : ''),
      }),
    );
  };

  var buildInstruction = function buildInstruction(instruction) {
    return (
      '{\n  "@type": "HowToStep",\n  ' +
      (instruction.name ? '"name": "' + instruction.name + '",' : '') +
      '\n  ' +
      (instruction.image ? '"image": "' + instruction.image + '",' : '') +
      '\n  ' +
      (instruction.url ? '"url": "' + instruction.url + '",' : '') +
      '\n  "text": "' +
      instruction.text +
      '"\n}'
    );
  };

  var RecipeJsonLd = function RecipeJsonLd(_ref) {
    var name = _ref.name,
      description = _ref.description,
      authorName = _ref.authorName,
      _ref$images = _ref.images,
      images = _ref$images === void 0 ? [] : _ref$images,
      datePublished = _ref.datePublished,
      prepTime = _ref.prepTime,
      cookTime = _ref.cookTime,
      totalTime = _ref.totalTime,
      keywords = _ref.keywords,
      yields = _ref.yields,
      category = _ref.category,
      cuisine = _ref.cuisine,
      calories = _ref.calories,
      ingredients = _ref.ingredients,
      instructions = _ref.instructions,
      aggregateRating = _ref.aggregateRating,
      video = _ref.video;
    var jslonld =
      '{\n    "@context": "https://schema.org/",\n    "@type": "Recipe",\n    "name": "' +
      name +
      '",\n    "description": "' +
      description +
      '",\n    "datePublished": "' +
      datePublished +
      '",\n    "author": ' +
      formatAuthorName(authorName) +
      ',\n    "image": [\n      ' +
      images
        .map(function (image) {
          return '"' + image + '"';
        })
        .join(',') +
      '\n    ],\n    ' +
      (prepTime ? '"prepTime": "' + prepTime + '",' : '') +
      '\n    ' +
      (cookTime ? '"cookTime": "' + cookTime + '",' : '') +
      '\n    ' +
      (totalTime ? '"totalTime": "' + totalTime + '",' : '') +
      '\n    ' +
      (keywords ? '"keywords": "' + keywords + '",' : '') +
      '\n    ' +
      (yields ? '"recipeYield": "' + yields + '",' : '') +
      '\n    ' +
      (category ? '"recipeCategory": "' + category + '",' : '') +
      '\n    ' +
      (cuisine ? '"recipeCuisine": "' + cuisine + '",' : '') +
      '\n    ' +
      (calories
        ? '"nutrition": { "@type": "NutritionInformation", "calories": "' +
          calories +
          ' calories" },'
        : '') +
      '\n    ' +
      (aggregateRating ? buildAggregateRating$1(aggregateRating) : '') +
      '\n    ' +
      (video ? '"video": ' + buildVideo(video) + ',' : '') +
      '\n    "recipeIngredient": [\n      ' +
      ingredients
        .map(function (ingredient) {
          return '"' + ingredient + '"';
        })
        .join(',') +
      '\n    ],\n    "recipeInstructions": [\n      ' +
      instructions.map(buildInstruction).join(',') +
      '\n    ]\n  }';
    return React__default['default'].createElement(
      Head__default['default'],
      null,
      React__default['default'].createElement('script', {
        type: 'application/ld+json',
        dangerouslySetInnerHTML: markup(jslonld),
        key: 'jsonld-recipe',
      }),
    );
  };

  var VideoGameJsonLd = function VideoGameJsonLd(_ref) {
    var keyOverride = _ref.keyOverride,
      name = _ref.name,
      url = _ref.url,
      image = _ref.image,
      description = _ref.description,
      languageName = _ref.languageName,
      translatorName = _ref.translatorName,
      authorName = _ref.authorName,
      aggregateRating = _ref.aggregateRating,
      applicationCategory = _ref.applicationCategory,
      platformName = _ref.platformName,
      operatingSystemName = _ref.operatingSystemName,
      datePublished = _ref.datePublished,
      keywords = _ref.keywords,
      producerName = _ref.producerName,
      producerUrl = _ref.producerUrl,
      providerName = _ref.providerName,
      providerUrl = _ref.providerUrl,
      publisherName = _ref.publisherName,
      offers = _ref.offers,
      genreName = _ref.genreName,
      playMode = _ref.playMode,
      processorRequirements = _ref.processorRequirements,
      memoryRequirements = _ref.memoryRequirements,
      storageRequirements = _ref.storageRequirements,
      trailer = _ref.trailer,
      _ref$reviews = _ref.reviews,
      reviews = _ref$reviews === void 0 ? [] : _ref$reviews;
    var jslonld =
      '{\n    "@context": "https://schema.org/",\n    "@type": "VideoGame",\n    "name": "' +
      name +
      '",\n    ' +
      (description ? '"description": "' + description + '",' : '') +
      '\n    ' +
      (aggregateRating ? buildAggregateRating$1(aggregateRating) : '') +
      '\n    ' +
      (datePublished ? '"datePublished": "' + datePublished + '",' : '') +
      '\n    ' +
      (url ? '"url": "' + url + '",' : '') +
      '\n    ' +
      (trailer ? '"trailer": ' + buildVideo(trailer) + ',' : '') +
      '\n    ' +
      (reviews.length ? buildReviews(reviews) : '') +
      '\n    ' +
      (keywords ? '"keywords": "' + keywords + '",' : '') +
      '\n    ' +
      (processorRequirements
        ? '"processorRequirements": "' + processorRequirements + '",'
        : '') +
      '\n    ' +
      (memoryRequirements
        ? '"memoryRequirements": "' + memoryRequirements + '",'
        : '') +
      '\n    ' +
      (storageRequirements
        ? '"storageRequirements": "' + storageRequirements + '",'
        : '') +
      '\n    ' +
      (playMode ? '"playMode": "' + playMode + '",' : '') +
      '\n    ' +
      (applicationCategory
        ? '"applicationCategory": "' + applicationCategory + '",'
        : '') +
      '\n    ' +
      (operatingSystemName
        ? '"operatingSystem": ' +
          (Array.isArray(operatingSystemName)
            ? formatIfArray(operatingSystemName)
            : '"' + operatingSystemName + '"') +
          ','
        : '') +
      '\n    ' +
      (platformName
        ? '"gamePlatform": ' +
          (Array.isArray(platformName)
            ? formatIfArray(platformName)
            : '"' + platformName + '"') +
          ','
        : '') +
      '\n    ' +
      (translatorName
        ? '"translator": ' +
          (Array.isArray(translatorName)
            ? formatIfArray(translatorName)
            : '"' + translatorName + '"') +
          ','
        : '') +
      '\n    ' +
      (languageName
        ? '"inLanguage": ' +
          (Array.isArray(languageName)
            ? formatIfArray(languageName)
            : '"' + languageName + '"') +
          ','
        : '') +
      '\n    ' +
      (genreName
        ? '"genre": ' +
          (Array.isArray(genreName)
            ? formatIfArray(genreName)
            : '"' + genreName + '"') +
          ','
        : '') +
      '\n    ' +
      (publisherName
        ? '"publisher": ' +
          (Array.isArray(publisherName)
            ? formatIfArray(publisherName)
            : '"' + publisherName + '"') +
          ','
        : '') +
      '\n    ' +
      (image
        ? '\n        "image": {\n          "@type": "ImageObject",\n          "url": "' +
          image +
          '"\n        },\n        '
        : '') +
      '\n    ' +
      (authorName
        ? '\n        "author": {\n          "@type": "Organization",\n          "name": "' +
          authorName +
          '"\n        },\n        '
        : '') +
      '\n    ' +
      (providerName
        ? '\n        "provider": {\n          "@type": "Organization",\n          ' +
          (providerUrl ? '"sameAs": "' + providerUrl + '",' : '') +
          '\n          "name": "' +
          providerName +
          '"\n        },\n        '
        : '') +
      '\n    ' +
      (producerName
        ? '\n        "producer": {\n          "@type": "Organization",\n          ' +
          (producerUrl ? '"sameAs": "' + producerUrl + '",' : '') +
          '\n          "name": "' +
          producerName +
          '"\n        },\n        '
        : '') +
      '\n    ' +
      (offers
        ? '"offers": ' +
          (Array.isArray(offers)
            ? '[' +
              offers.map(function (offer) {
                return '' + buildOffers(offer);
              }) +
              ']'
            : buildOffers(offers))
        : '') +
      '\n  }';
    return React__default['default'].createElement(
      Head__default['default'],
      null,
      React__default['default'].createElement('script', {
        type: 'application/ld+json',
        dangerouslySetInnerHTML: markup(jslonld),
        key: 'jsonld-video-game' + (keyOverride ? '-' + keyOverride : ''),
      }),
    );
  };

  var CarouselJsonLd = function CarouselJsonLd(_ref) {
    var type = _ref.type,
      data = _ref.data;
    var itemListElement = [];

    switch (type) {
      case 'default':
        itemListElement = data.map(function (item, index) {
          return (
            '{\n        "@type": "ListItem",\n        "position": "' +
            (index + 1) +
            '",\n        "url": "' +
            item.url +
            '"\n      }'
          );
        });
        break;

      case 'course':
        itemListElement = data.map(function (item, index) {
          return (
            '{\n        "@type": "ListItem",\n        "position": "' +
            (index + 1) +
            '",\n        "item": {\n          "@context": "https://schema.org",\n          "@type": "Course",\n          "url": "' +
            item.url +
            '",\n          "name": "' +
            item.courseName +
            '",\n          "description": "' +
            item.description +
            '",\n          "provider": {\n            "@type": "Organization",\n            "name": "' +
            item.providerName +
            '"' +
            (item.providerUrl
              ? ',\n                "sameAs": "' + item.providerUrl + '"'
              : '') +
            '\n          }\n      }\n    }'
          );
        });
        break;

      case 'movie':
        itemListElement = data.map(function (item, index) {
          return (
            '{\n        "@type": "ListItem",\n        "position": "' +
            (index + 1) +
            '",\n        "item": {\n          "@context": "https://schema.org",\n          "@type": "Movie",\n          "name": "' +
            item.name +
            '",\n          "url": "' +
            item.url +
            '",\n          "image": "' +
            item.image +
            '",\n          ' +
            (item.dateCreated
              ? '"dateCreated": "' + item.dateCreated + '",'
              : '') +
            '\n          ' +
            (item.director
              ? '"director": ' +
                (Array.isArray(item.director)
                  ? '[' +
                    item.director
                      .map(function (director) {
                        return (
                          '{\n                          "@type": "Person",\n                          "name": "' +
                          director.name +
                          '"\n                        }'
                        );
                      })
                      .join(',') +
                    ']'
                  : '{\n                      "@type": "Person",\n                      "name": "' +
                    item.director.name +
                    '"\n                    }')
              : '') +
            '\n          ' +
            (item.review
              ? ',\n              "review": {\n                "@type": "Review",\n                ' +
                (item.review.author ? buildAuthor(item.review.author) : '') +
                '\n                ' +
                (item.review.publisher
                  ? buildPublisher(item.review.publisher)
                  : '') +
                '\n                ' +
                (item.review.datePublished
                  ? '"datePublished": "' + item.review.datePublished + '",'
                  : '') +
                '\n                ' +
                (item.review.reviewBody
                  ? '"reviewBody": "' + item.review.reviewBody + '",'
                  : '') +
                '\n                ' +
                (item.review.name
                  ? '"name": "' + item.review.name + '",'
                  : '') +
                '\n                ' +
                buildReviewRating(item.review.reviewRating) +
                '\n            }'
              : '') +
            '\n        }\n      }'
          );
        });
        break;

      case 'recipe':
        itemListElement = data.map(function (item, index) {
          var _item$images;

          return (
            '{\n        "@type": "ListItem",\n        "position": "' +
            (index + 1) +
            '",\n        "item": {\n          "@context": "https://schema.org/",\n          "@type": "Recipe",\n          "name": "' +
            item.name +
            '",\n          "url" : "' +
            item.url +
            '",\n          "description": "' +
            item.description +
            '",\n          "datePublished": "' +
            item.datePublished +
            '",\n          "author": {\n            "@type": "Person",\n            "name": "' +
            item.authorName +
            '"\n          },\n          "image": [\n            ' +
            ((_item$images = item.images) == null
              ? void 0
              : _item$images
                  .map(function (image) {
                    return '"' + image + '"';
                  })
                  .join(',')) +
            '\n          ],\n          ' +
            (item.prepTime ? '"prepTime": "' + item.prepTime + '",' : '') +
            '\n          ' +
            (item.cookTime ? '"cookTime": "' + item.cookTime + '",' : '') +
            '\n          ' +
            (item.totalTime ? '"totalTime": "' + item.totalTime + '",' : '') +
            '\n          ' +
            (item.keywords ? '"keywords": "' + item.keywords + '",' : '') +
            '\n          ' +
            (item.yields ? '"recipeYield": "' + item.yields + '",' : '') +
            '\n          ' +
            (item.category
              ? '"recipeCategory": "' + item.category + '",'
              : '') +
            '\n          ' +
            (item.cuisine ? '"recipeCuisine": "' + item.cuisine + '",' : '') +
            '\n          ' +
            (item.calories
              ? '"nutrition": { "@type": "NutritionInformation", "calories": "' +
                item.calories +
                ' calories" },'
              : '') +
            '\n          ' +
            (item.aggregateRating
              ? buildAggregateRating$1(item.aggregateRating)
              : '') +
            '\n          ' +
            (item.video ? '"video": ' + buildVideo(item.video) + ',' : '') +
            '\n          "recipeIngredient": [\n            ' +
            item.ingredients
              .map(function (ingredient) {
                return '"' + ingredient + '"';
              })
              .join(',') +
            '\n          ],\n          "recipeInstructions": [\n            ' +
            item.instructions.map(buildInstruction).join(',') +
            '\n          ]\n      }\n      }'
          );
        });
        break;
    }

    var jsonld =
      '{\n    "@context": "https://schema.org",\n    "@type": "ItemList",\n    "itemListElement": [' +
      itemListElement.join(',') +
      ']\n  }';
    return React__default['default'].createElement(
      Head__default['default'],
      null,
      React__default['default'].createElement('script', {
        type: 'application/ld+json',
        dangerouslySetInnerHTML: markup(jsonld),
        key: 'jsonld-course',
      }),
    );
  };

  var SiteLinksSearchBoxJsonLd = function SiteLinksSearchBoxJsonLd(_ref) {
    var keyOverride = _ref.keyOverride,
      url = _ref.url,
      _ref$potentialActions = _ref.potentialActions,
      potentialActions =
        _ref$potentialActions === void 0 ? [] : _ref$potentialActions;
    var jslonld =
      '{\n    "@context": "https://schema.org",\n    "@type": "WebSite",\n    "url": "' +
      url +
      '",\n    "potentialAction": [\n      ' +
      potentialActions.map(function (_ref2) {
        var target = _ref2.target,
          queryInput = _ref2.queryInput;
        return (
          '{\n        "@type": "SearchAction",\n        "target": "' +
          target +
          '={' +
          queryInput +
          '}",\n        "query-input": "required name=' +
          queryInput +
          '"\n      }'
        );
      }) +
      '\n     ]\n  }';
    return React__default['default'].createElement(
      Head__default['default'],
      null,
      React__default['default'].createElement('script', {
        type: 'application/ld+json',
        dangerouslySetInnerHTML: markup(jslonld),
        key:
          'jsonld-siteLinksSearchBox' + (keyOverride ? '-' + keyOverride : ''),
      }),
    );
  };

  var buildReview$1 = function buildReview(review) {
    return (
      '\n    "review": {\n        "@type": "Review",\n        ' +
      (review.author ? buildAuthor(review.author) : '') +
      '\n        ' +
      (review.publisher ? buildPublisher(review.publisher) : '') +
      '\n        ' +
      (review.datePublished
        ? '"datePublished": "' + review.datePublished + '",'
        : '') +
      '\n        ' +
      (review.reviewBody ? '"reviewBody": "' + review.reviewBody + '",' : '') +
      '\n        ' +
      (review.name ? '"name": "' + review.name + '",' : '') +
      '\n        ' +
      buildReviewRating(review.reviewRating) +
      '\n      },\n  '
    );
  };

  var SoftwareAppJsonLd = function SoftwareAppJsonLd(_ref) {
    var keyOverride = _ref.keyOverride,
      name = _ref.name,
      applicationCategory = _ref.applicationCategory,
      operatingSystem = _ref.operatingSystem,
      priceCurrency = _ref.priceCurrency,
      price = _ref.price,
      aggregateRating = _ref.aggregateRating,
      review = _ref.review;
    var jslonld =
      '{\n    "@context": "https://schema.org",\n    "@type": "SoftwareApplication",\n    "offers": {\n      "@type": "Offer",\n      "priceCurrency": "' +
      priceCurrency +
      '",\n      "price": "' +
      price +
      '"\n    },\n    ' +
      (applicationCategory
        ? '"applicationCategory": "' + applicationCategory + '",'
        : '') +
      '\n    ' +
      (operatingSystem ? '"operatingSystem": "' + operatingSystem + '",' : '') +
      '\n    ' +
      (aggregateRating ? buildAggregateRating$1(aggregateRating) : '') +
      '\n    ' +
      (review ? buildReview$1(review) : '') +
      '\n    "name": "' +
      name +
      '"\n  }';
    return React__default['default'].createElement(
      Head__default['default'],
      null,
      React__default['default'].createElement('script', {
        type: 'application/ld+json',
        dangerouslySetInnerHTML: markup(jslonld),
        key: 'jsonld-softwareApp' + (keyOverride ? '-' + keyOverride : ''),
      }),
    );
  };

  var CollectionPageJsonLd = function CollectionPageJsonLd(_ref) {
    var keyOverride = _ref.keyOverride,
      name = _ref.name,
      _ref$hasPart = _ref.hasPart,
      hasPart = _ref$hasPart === void 0 ? [] : _ref$hasPart;
    var jslonld =
      '{\n    "@context": "https://schema.org",\n    "@type": "CollectionPage",\n    "name": "' +
      name +
      '",\n    "hasPart": [\n      ' +
      hasPart.map(function (creativeWork) {
        return (
          '{\n        "@type": "CreativeWork",\n        "author": "' +
          creativeWork.author +
          '",\n        "about": "' +
          creativeWork.about +
          '",\n        "name": "' +
          creativeWork.name +
          '",\n        ' +
          (creativeWork.audience
            ? '"audience": "' + creativeWork.audience + '",'
            : '') +
          '\n        ' +
          (creativeWork.keywords
            ? '"keywords": "' + creativeWork.keywords + '",'
            : '') +
          '\n        ' +
          (creativeWork.thumbnailUrl
            ? '"thumbnailUrl": "' + creativeWork.thumbnailUrl + '",'
            : '') +
          '\n        ' +
          (creativeWork.image ? '"image": "' + creativeWork.image + '",' : '') +
          '\n        "datePublished": "' +
          creativeWork.datePublished +
          '"\n      }'
        );
      }) +
      '\n     ]\n  }';
    return React__default['default'].createElement(
      Head__default['default'],
      null,
      React__default['default'].createElement('script', {
        type: 'application/ld+json',
        dangerouslySetInnerHTML: markup(jslonld),
        key: 'jsonld-collection-page' + (keyOverride ? '-' + keyOverride : ''),
      }),
    );
  };

  var buildBreadcrumb = function buildBreadcrumb(itemListElements) {
    return (
      '{\n  "@type": "BreadcrumbList",\n  "itemListElement": ' +
      buildBreadcrumbList(itemListElements) +
      '\n}'
    );
  };

  var buildBreadcrumbList = function buildBreadcrumbList(itemListElements) {
    return (
      '[\n  ' +
      itemListElements.map(function (itemListElement) {
        return (
          '{\n    "@type": "ListItem",\n    "position": ' +
          itemListElement.position +
          ',\n    "item": {\n      "@id": "' +
          itemListElement.item +
          '",\n      "name": "' +
          itemListElement.name +
          '"\n    }\n  }'
        );
      }) +
      '\n]'
    );
  };

  var ProfilePageJsonLd = function ProfilePageJsonLd(_ref) {
    var keyOverride = _ref.keyOverride,
      breadcrumb = _ref.breadcrumb,
      lastReviewed = _ref.lastReviewed;
    var jslonld =
      '{\n    "@context": "https://schema.org",\n    "@type": "ProfilePage",\n    ' +
      (lastReviewed ? '"lastReviewed": "' + lastReviewed + '",' : '') +
      '\n    "breadcrumb": ' +
      (typeof breadcrumb === 'string'
        ? '"' + breadcrumb + '"'
        : buildBreadcrumb(breadcrumb)) +
      '\n  }';
    return React__default['default'].createElement(
      Head__default['default'],
      null,
      React__default['default'].createElement('script', {
        type: 'application/ld+json',
        dangerouslySetInnerHTML: markup(jslonld),
        key: 'jsonld-profile-page' + (keyOverride ? '-' + keyOverride : ''),
      }),
    );
  };

  exports.ArticleJsonLd = ArticleJsonLd;
  exports.BlogJsonLd = BlogJsonLd;
  exports.BreadcrumbJsonLd = BreadCrumbJsonLd;
  exports.CarouselJsonLd = CarouselJsonLd;
  exports.CollectionPageJsonLd = CollectionPageJsonLd;
  exports.CorporateContactJsonLd = CorporateContactJsonLd;
  exports.CourseJsonLd = CourseJsonLd;
  exports.DatasetJsonLd = DatasetJsonLd;
  exports.DefaultSeo = DefaultSeo;
  exports.EventJsonLd = EventJsonLd;
  exports.FAQPageJsonLd = FAQPageJsonLd;
  exports.JobPostingJsonLd = JobPostingJsonLd;
  exports.LocalBusinessJsonLd = LocalBusinessJsonLd;
  exports.LogoJsonLd = LogoJsonLd;
  exports.NewsArticleJsonLd = NewsArticleJsonLd;
  exports.NextSeo = NextSeo;
  exports.ProductJsonLd = ProductJsonLd;
  exports.ProfilePageJsonLd = ProfilePageJsonLd;
  exports.QAPageJsonld = QAPageJsonLd;
  exports.RecipeJsonLd = RecipeJsonLd;
  exports.SiteLinksSearchBoxJsonLd = SiteLinksSearchBoxJsonLd;
  exports.SocialProfileJsonLd = SocialProfileJsonLd;
  exports.SoftwareAppJsonLd = SoftwareAppJsonLd;
  exports.VideoGameJsonLd = VideoGameJsonLd;
  exports.VideoJsonLd = VideoJsonLd;
});
