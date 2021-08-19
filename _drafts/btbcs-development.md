---
title: "BTBCS Development"
layout: post
date: 2021-08-19 08:08
tag:
- bootstrap
- web-development
- php
- docker
- btbcs
headerImage: false
description: "The website for Building the Bridges Community Services, built from the ground up."
category: project
author: noah
---

# A Busy Summer

Over the course of this past summer, I spent the majority of my time working at the founding CIO (Chief Information Officer) of a new Social Services organization called "Building the Bridges Community Services". Our website is located at [btbcs.org](https://btbcs.org) and is available worldwide using [Dreamhost](https://dreamhost.com) as the backend and [Cloudflare](https://cloudflare.com) as the CDN (Content Delivery Network).

Over the course of the summer, I built the entire website from the ground up using Bootstrap 4 CSS/JS framework, my own PHP shell to manage header and footer items, and a variety of PHP and JS functions to perform various aspects of the website like PHPMailer and form submissions via AJAX requests. More on all these later.

Of course, developing a massive website with so many intertwining web technologies, it became obvious that I had no way to easily test the site on my Windows OS. Which is why I also learned how to use Docker this summer. With Docker, I could create a test environment that is nearly identical to my actual production environment on a shared Dreamhost server. The process was quite complex at first, but has become incredibly essential to my development workflow.
