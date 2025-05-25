# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website for Nagomi Labs - a "coming soon" landing page for an HR technology company. The site is hosted on GitHub Pages with custom domain `nagomilabs.ai`.

## Architecture

- **Single-page application**: Everything is contained in `index.html` with embedded CSS and JavaScript
- **Static hosting**: Deployed via GitHub Pages (indicated by `CNAME` file)
- **Countdown timer**: JavaScript countdown to launch date (October 19, 2025)
- **Modal interaction**: About modal with accessibility features
- **Assets**: Logo (`nagomi_labs.png`), robot icon (`robot-face.png`), and name graphic (`name.png`)

## Key Features

- Responsive design using CSS clamp() for fluid typography
- Countdown timer that updates every second
- Modal popup with proper ARIA attributes and keyboard navigation
- CSS custom properties for consistent theming (navy, blush, background colors)
- Email contact integration

## Development Notes

- No build process required - direct HTML/CSS/JS
- Changes to `index.html` are deployed automatically via GitHub Pages
- Countdown target date is hardcoded in JavaScript (line 85)
- Color scheme defined in CSS custom properties (lines 12-16)