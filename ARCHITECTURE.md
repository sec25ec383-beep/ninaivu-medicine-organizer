# Technical Design Document

## Overview
Ninaivu prototype is a static, client-side web page. It has no server, database, network requests, account system, or personal-data storage.

## Architecture
User
  -> index.html (content and checkbox controls)
  -> style.css (responsive presentation and visible focus states)
  -> app.js (checkbox events, progress calculation, reset action)

## Main components
- Schedule cards: Morning, Afternoon, Night.
- Accessible labels: text labels accompany visual symbols.
- Progress area: reports the count of checked sections.
- Reset button: clears all checkboxes.
- Safety notice: clarifies that the prototype does not prescribe or verify medication.

## Data flow
When a checkbox changes, `app.js` counts checked boxes and updates the progress text and bar. Reset clears each checkbox and recalculates the progress. State remains in memory only and is not saved.

## Privacy and safety
No personal health data is requested or transmitted. The prototype must not be represented as a clinically validated product. Test with dummy packs and non-medical sample content only.
