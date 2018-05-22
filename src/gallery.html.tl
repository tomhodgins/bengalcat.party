<!DOCTYPE html>
<html lang=en>
<meta charset=utf-8>
<meta name=viewport content="width=device-width, initial-scale=1">

<title>${gallery.title} | ${site.title}</title>
<meta name=description content="${gallery.description || site.description}">
<meta name=keywords content="${[...gallery.keywords.split(' '), ...site.keywords.split(' ')].join(', ')}">

<meta property="og:title" content="${site.title}">
<meta property="og:type" content=website>
<meta property="og:url" content=https://bengalcat.party>
<meta property="og:image" content="${gallery.images[Math.floor(Math.random() * gallery.images.length)]}">
<meta property="og:description" content="${site.description}">

<meta name="twitter:title" content="${site.title}">
<meta name="twitter:creator" content="@innovati">
<meta name="twitter:card" content=summary>
<meta name="twitter:image" content="${gallery.images[Math.floor(Math.random() * gallery.images.length)]}">
<meta name="twitter:description" content="${site.description}">

<link rel=apple-touch-icon href=src/favicon.png>
<link type=image/x-icon rel="shortcut icon" href=src/favicon.png>
<link href="https://fonts.googleapis.com/css?family=Bubblegum+Sans|Mystery+Quest|Bubblegum+Sans" rel=stylesheet>

<link rel=stylesheet href=style.css>

<h1 class=title><a href=index.html>${site.title}</a></h1>

<aside>

  <h2 class=title>${gallery.title}</h2>

  <small class=posted>Posted: ${month[gallery.date.month - 1]} ${gallery.date.day}, ${gallery.date.year}</small>

  <p>${gallery.description}</p>

  ${
    gallery.keywords
    ? `<small class=tags>Tags: ${gallery.keywords.split(' ').join(', ')}</small>`
    : ''
  }

</aside>

<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

<ul>
  ${
    shuffle(
      [...gallery.images.map(image => `
          <li>
            <a href=${image}>
              <img src=${image}>
            </a>
        `),
        `
          <li>
            <ins
              class="adsbygoogle"
              style="display:block"
              data-ad-client="ca-pub-3660238911851782"
              data-ad-slot="9786032551"
              data-ad-format="auto"></ins>
            <script>
              (adsbygoogle = window.adsbygoogle || []).push({})
            </script>
        `
      ]
    )
    .join('\n')

  }
</ul>

<a href=${gallery.url} class=link title="View Gallery on Imgur">View Gallery on Imgur</a>

<script async src="https://www.googletagmanager.com/gtag/js?id=UA-119667733-1"></script>
<script>
  window.dataLayer = window.dataLayer || []
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date())
  gtag('config', 'UA-119667733-1')
</script>