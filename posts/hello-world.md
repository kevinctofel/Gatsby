---
title: Hello World
date: 2020-05-25T18:34:46.000Z
published: true
image: /images/Google_NYC.webp
category:
  - thoughts
thumbnail: /images/Google_NYC.webp
tags: ["javascript"]
---
## It works ##

This post suggests that I correctly have my [Hugo-rendered](https://gohugo.io) site up and running. Check the link for more information on the Hugo open-source software, but essentially, it takes Markdown content and renders static site pages for much faster delivery than a traditional CMS with a database, such as Wordpress.

For now, I have the content being hosted for free on [Netlify](https://www.netlify.com) which does offer a reasonable amount of hosting features at no cost. My intent is to integrate the open-source Netlify CMS so I don't have to write Markdown files in a text editor. And then at some point, I'll likely move the entire site to GitHub Pages for free.

## Why [GitHub Pages](https://pages.github.com/) #####

Because all of the content on this site is actually stored on GitHub.

![GitHub repo of my blog](../src/images/GitHub-repo-for-my-blog.png)

That offers me a relatively permanent record of all the content. At the moment Netlify looks for changes to my blog repo and serves up the static pages.

## Things to do #####

* Remove/modify the default yellow SVG image for this theme
* Tweak the theme so it looks how I want (I want some blurbs under each post on the home page, for example.)
* ~~Update About page~~ *Completed, 8/10/2020*
* Create/add favicon
* Create templates for various types of content
* Find and implement an open source commenting system
* ~~Install/integrate the Netlify CMS~~ *Completed, 5/30/2020*
* ~~Move site to GitHub Pages~~ *Decided to use Netlify*
* ~~Point custom domain to site~~ *Completed, 6/5/2020*
* Programmatically archive and display my Twitter history
* See if I can hook the CMS into Google Photos via an API; every image I capture on my own is in Google Photos.
* Look at coding an image converter (or connecting to one using JS) so all images are .webp if supported and .jpeg/.gif/.png if not
* Code something up to save multiple image sizes for better responsive web experience

## Thanks #####

[Chris Stayte](https://blog.chrisstayte.com): Helpful videos on how to set up & use Hugo as well as Netlify

[Munif Tanjam](https://minimo.netlify.app/): I wanted a great looking, highly customizable minimalist theme and Munif's Minimo is what I chose.

[Dave Winer](http://scripting.com): For getting me to think about keeping my content out of silos.
