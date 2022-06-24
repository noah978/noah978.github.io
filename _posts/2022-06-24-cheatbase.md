---
title: "CheatBase"
layout: post
date: 2022-06-24 17:03
tag:
- sql
- python
- cheatcodes
- retrogames
headerImage: false
description: "A relational SQL database for codifying and storing cheats codes for retro game systems"
category: project
author: noah
---

# A Retro Game Cheater’s Database

This Database has been designed with the purpose of being used primarily with emulators to automatically find cheat codes related to a game. It can also be theoretically used by anyone to find the cheat codes for any particular game if they have basic knowledge of SQL.

Using a series of Python database tools, I have an easy way to import and export .csv files containing correlated data into an SQL database. I also wrote the tools to be capable of re-organizing the entire database, while still maintaining the relational data. That is, it can alter the primary keys of each table and automatically update the foreign keys.

Currently my goal for this database is to be included in a future release of Riley Testut’s [Delta Emulator](https://deltaemulator.com) to allow users to simply search for cheats in app instead of needing to search for them online.

Here is a link to the [CheatBase GitHub organization](https://github.com/CheatBase) that I created for the new cheat code database.

By no means is this a complete database, if you are interested in contributing or reporting a code that doesn’t work, please open an issue / pull request on the GitHub repo or contact me directly. At the time of writing, there are roughly 10,000 Nintendo DS cheat codes included, with my current work to include roughly 400,000 more.

## The Relational Design

It uses the [OpenVGDB database](https://github.com/OpenVGDB/OpenVGDB/releases/) as its core for ROM hashes and game releases. This makes the database a must have for any emulator as it can get you cover art, various metadata, and now cheat codes for a plethora of games and consoles.

| Table Name       | Table Description                                                                           |
|------------------|---------------------------------------------------------------------------------------------|
| ROMS             | The (mostly) complete list of ROMs for every supported system and its technical details.    |
| RELEASES         | The release info related to a single ROM including cover image, region, and developer data. |
| REGIONS          | A list of every release region which can include a single or multiple countries.            |
| SYSTEMS          | A list of the supported consoles and handhelds and their technical details.                 |
| CHEATS           | The list of cheat codes, their related data, and their usage.                               |
| CHEAT_DEVICES    | The list of various devices that cheat codes were written for.                              |
| CHEAT_CATEGORIES | A working list of the types of functions that cheat codes implement.                        |
{: .bordered-table style="margin: 1.5rem;" :}

Using the ROMS table, the intended ROM cam be found either through the name of the game or using hashes of the file. Then with the correct romID acquired, it can be used to find the corresponding releases (which contain cover art and other useful metadata) as well as any cheat codes.

To learn more about the database, check out the [README](https://github.com/CheatBase/CheatBase/blob/master/README.md) and the [Contributors Guide.](https://github.com/CheatBase/CheatBase/blob/master/CONTRIBUTING.md)
