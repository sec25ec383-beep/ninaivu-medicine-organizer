# Ninaivu — Accessible Medicine Routine Organizer (Prototype)

## Purpose
Ninaivu is a small, accessible web demonstration supporting the concept of a low-cost medicine organizer for older adults. It demonstrates large labels, simple symbols, a three-part daily routine checklist, and a caregiver-support design direction.

## Important safety note
This is a concept prototype, not a medical device and not a medicine recommendation tool. It does not store medicine names, determine doses, send reminders, or validate prescriptions. Users must follow instructions from a qualified healthcare professional. The interface uses generic time-of-day sections and should be tested with dummy data only.

## Run locally
1. Download or clone this repository.
2. Open `index.html` in a modern web browser.
3. Tick the Morning, Afternoon, and Night checkboxes to test the progress indicator.
4. Select **Reset checklist** to clear all selections.

No build tools, packages, API keys, or environment variables are required.

## Files
- `index.html` — accessible prototype interface
- `style.css` — responsive styling and high-contrast layout
- `app.js` — checklist interactions and progress indicator
- `ARCHITECTURE.md` — design and component overview
- `TEST_CASES.md` — manual test cases
- `LICENSE` — MIT License

## Current limitations
- Browser-only demo; no backend or database.
- Checkbox state resets when the page is reloaded.
- No medicine schedule or dosage is entered or recommended.
- Physical organizer and blister-pack holder have not been validated.
- User research and usability results must be collected and reported honestly; none are claimed by this starter project.

## Suggested next steps
1. Interview older adults and caregivers with consent.
2. Sketch and build a physical mock-up using cardboard or safe reusable materials.
3. Test symbol comprehension with volunteers using dummy packaging.
4. Record real feedback and revise the design.
5. Add photographs and findings to the design documentation.
