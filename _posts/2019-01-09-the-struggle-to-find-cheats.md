---
title: "The Struggle to Find Cheats"
layout: post
date: 2019-01-09 11:27
tag:
- gba4ios
- delta
- cheat codes
headerImage: false
description: "An introduction to my new project to create a cheat database for a multitude of Nintendo systems."
category: blog
author: noah
---

## First, A Little Backstory

During High School, I have thoroughly enjoyed playing old Nintendo games. My very first gaming electronic was a GameBoy, closely followed by a LeapFrog, and I have always and probably always will love Pokemon Emerald. As I grew older, my family bought Nintendo’s DS and eventually a Wii. But out of every game, I chose Pokemon to spend my time playing. (Although Mario was a close second)

However, technology grows old and I really couldn’t carry my old GameBoy everywhere I went. That’s where GBA4iOS came in. I clearly remember the first time I discovered the application. I had a simple iPhone 4 back then. The feeling of joy that it brought to me is almost indescribable. No longer did I need to carry a GameBoy anywhere, the phone that have to carry anyways can fully entertain me too.

I never used any cheats up until the DS and Pokemon PLatinum but once GBA4iOS 2.0 was released, I really wanted to try some. I could finally get to Navel Rock to catch a Lugia or to the Faraway Island for a Mew using a simple cheat code. But I immediately hit a roadblock, it would seem that finding cheat codes are more difficult than I expected.

In the case Emerald, some cheat codes won’t work based on whether the ROM is of version 1.0 or 1.1. If a game had multiple different games for different localizations, that could prevent the code from working as well.

# A Cheater’s Database

For all of these reasons, I decided to create a sort of database for all of the cheat codes I could find. It contains GBA codes as of right now, but the goal is for it to contain GBA, GBC, GB, SNES, NES, and N64 as it progresses. Currently, the bulk of my efforts have produced an Excel sheet which contains all the data for the cheat codes I've rewritten. Using a series of Python database tools, I have an easy way to import and export .csv files containing correlated data into an SQL database. I also wrote the tools to be capable of re-organizing the entire database, while still maintaining the relational data.

It uses the [OpenVGDB database](https://github.com/OpenVGDB/OpenVGDB/releases/) as its core for ROM hashes and game releases. This makes the database a must have for any emulator as it can get you cover art, various metadata, and now cheat codes for a plethora of games and consoles.

It’s my goal for this database to be used in Riley Testut’s upcoming Delta Emulator to allow users to simply search for cheats in app instead of needing to search for them online.

Below is a link to the GitHub organization that I created for the new cheat code database.

[CheatBase](https://github.com/CheatBase)

By no means is this a complete database, if you are interested in contributing or reporting a code that doesn’t work, please contact me directly. If progress continues towards a successful database, I will update with another blog post.
