---
title: "The Creation of AltStore Docs and Delta Docs"
layout: post
date: 2020-05-21 01:08
tag:
- ios
- altstore
- delta
- documentation
headerImage: false
description: "A series of documentation for various features within AltStore and Delta."
category: blog
author: noah
---

I love retro games and I have enjoyed Apple's iOS devices for a great many years. And at the collision of these two great passions: [Delta Emulator.](https://deltaemulator.com)

## But Alas, Apple Refuses

Unfortunately for me and the rest of the Retro gaming community, Apple refuses to allow any[^1] emulator on their official App Store. Their reasoning? Well it violates their guidelines of course! Apple says that emulators violate guideline 2.5.2, which prohibits apps from installing or running external code on iOS.

In reality, it comes down to two big reasons for them:

1. Execution of arbitrary code (i.e. ROMs), is a security risk since the App Store review team cannot check the imported code for malicious functionality.
2. The app could allow / enable the retrieval of copyrighted content, posing a lawsuit risk to Apple.

#### And so this is where AltStore comes in.

AltStore allows non-developers to "trick" Apple into thinking that they built their own application and are installing it to their device for testing purposes. It essentially copies the build process from XCode and makes any IPA a seamless installation.

I've been heavily involved with both the development and testing of AltStore and Delta with Riley Testut as the lead developer. The entire project is open-sourced so anyone can contribute!

* [AltStore GitHub](https://github.com/rileytestut/altstore)
* [Delta GitHub](https://github.com/rileytestut/delta)

The markdown documentation that I've written exists so that developers of AltStore Sources or Delta Custom Skins have an in-depth document that explains what values are expected for their json config files.

# The Docs

You can find the two different sites that document Riley Testut's AltStore and Delta below:
* [AltStore Docs](https://noah978.gitbook.io/altstore-docs)
* [Delta Docs](https://noah978.gitbook.io/delta-docs)

Both of these wiki-style documents are open-source and hosted on GitHub. They can be viewed using GitBook or GitHub pages, but personally I much prefer the GitBook view.

---

[^1]: Except sometimes they get to exist for years, but are [then randomly removed.](https://9to5mac.com/2021/07/22/idos-2-emulator-for-ios-to-be-removed-from-the-app-store/) Sorry bout that one, iDOS.
