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
<!--<meta property="og:image" content=favicon.png>-->
<meta property="og:description" content="${site.description}">

<meta name="twitter:title" content="${site.title}">
<meta name="twitter:creator" content="@innovati">
<meta name="twitter:card" content=summary>
<!--<meta name="twitter:image" content=favicon.png>-->
<meta name="twitter:description" content="${site.description}">

<!-- <link rel=apple-touch-icon href=favicon.png> -->

<link href="https://fonts.googleapis.com/css?family=Bubblegum+Sans|Mystery+Quest|Bubblegum+Sans" rel=stylesheet>

<link rel=stylesheet href=style.css>

<h1 class=title><a href=index.html>${site.title}</a></h1>

<aside>

  <h2 class=title>${gallery.title}</h2>

  <small class=posted>Posted: ${month[gallery.date.month]} ${gallery.date.day}, ${gallery.date.year}</small>

  <p>${gallery.description}</p>

  ${
    gallery.keywords
    ? `<small class=tags>Tags: ${gallery.keywords.split(' ').join(', ')}</small>`
    : ''
  }

</aside>

<ul>
  ${

    gallery.images

      .map(image =>
        `<li>
          <a href=${image}>
            <img src=${image}>
          </a>`)

      .join('\n')

  }
</ul>

<a href=${gallery.url} class=link title="View Gallery on Imgur">View Gallery on Imgur</a>