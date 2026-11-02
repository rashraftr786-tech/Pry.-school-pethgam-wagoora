# GPS Pethgam Wagoora ERP — Duplicate & Functional-Overlap Cleanup

## Cleanup performed

1. Removed `modules/child-population.html`; retained `modules/VER.html` as the enhanced Village Education Register implementation. The two files share the same family/child survey model and controls; VER adds the 3D-tab interface. The Admin dashboard link now points to VER.
2. Removed `modules/new-logo.png`; retained the identical root `new-logo.png`, which is used by `results.html`.
3. Removed `assets/logo.png` and `admin/modules/logo.png`; both were byte-identical to `assets/images/logo.png`. Updated the manifest and affected admin-module references to the canonical asset.
4. Removed `assets/css/style`; it was byte-identical to `assets/css/style.css`.
5. Corrected local logo references throughout the HTML pages to the single canonical `assets/images/logo.png` (using appropriate relative paths), and corrected both logo references in `student/marks-sheet.html` to the retained root `new-logo.png`.
6. Corrected the dashboard result link from the non-existent `modules/results.html` to the retained root `results.html`.

## Similar-looking files deliberately retained

- `results.html`, `student/upload-results.html`, `student/marks-sheet.html`, and `student/dashboard.html`: result generation, result upload/entry, marksheet presentation, and student-facing access are distinct stages. `results.html` is preserved unchanged.
- `modules/admission.html`, `modules/adm-register.html`, and `admin/modules/admission-form.html`: admission form/edit workflow, register/master-record workflow, and pending-admission intake use different interfaces and/or Firestore collections (`admissions`, `students`, `pending_admissions`). They are not safe to delete as duplicates.
- `modules/mdm.html`, `admin/modules/mdm-entry.html`, `admin/modules/mdm-report.html`, and `modules/mdm-statement.html`: they use different storage paths and reporting formats; the MDM entry page also syncs to cloud collections consumed by reports. Not safely interchangeable.
- `modules/library.html` and `modules/textbook-issue.html`: separate collections (`library_issues` versus `textbook_issues`) and student sources (`admissions` versus `students`).
- `student/apaar-input.html` and `admin/modules/apaar-consent.html`: different consent-sheet layouts and field sets; retained.
- `modules/certificates/student-id.html` and `modules/certificates/teaching-id.html`: student and staff ID cards; retained.
- `admin/modules/staff-attendance.html` and `teacher/modules/staff-checkin.html`: admin attendance ledger and teacher check-in workflow; retained.
- `modules/roll-statement.html` and `modules/roll-analyzer.html`: full roll statement versus compact analyzer; retained pending verification of their intended distinct outputs.

## Canonical asset paths

- Standard school logo: `assets/images/logo.png`
- High-resolution result watermark/logo: `new-logo.png` (repository root)
- Shared stylesheet: `assets/css/style.css`
- Firebase initialization: `assets/js/init-firebase.js`
- Village Education Register: `modules/VER.html`
- Comprehensive result generator: `results.html`

## Safety notes

No Firestore collections, field names, result calculations, individual certificate generators, or standalone student/teacher pages were removed. This cleanup is limited to high-confidence exact duplicates and one high-confidence functional duplicate. The remaining overlapping groups need live workflow/data validation before any further deletion.

## Change log

- Updated admin/admin-dashboard.html: ../modules/child-population.html -> ../modules/VER.html
- Removed modules/child-population.html; retained enhanced modules/VER.html
- Removed modules/new-logo.png; retained root new-logo.png
- Removed exact duplicate assets/logo.png; retained assets/images/logo.png
- Removed exact duplicate admin/modules/logo.png; retained assets/images/logo.png
- Updated manifest.json: assets/logo.png -> assets/images/logo.png
- Updated admin/modules/mdm-report.html: ../../assets/logo.png -> ../../assets/images/logo.png
- Updated admin/modules/certificate-gen.html: ../../assets/logo.png -> ../../assets/images/logo.png
- Updated admin/modules/apaar-consent.html: ../../assets/logo.png -> ../../assets/images/logo.png
- Updated admin/modules/admission-form.html: ../../assets/logo.png -> ../../assets/images/logo.png
- Updated modules/attendance.html: src="logo.png" -> src="../assets/images/logo.png"
- Updated student/marks-sheet.html: url('new-logo.png') -> url('../new-logo.png')
- Updated student/marks-sheet.html: src="new-logo.png" -> src="../new-logo.png"
- Removed assets/css/style (exact duplicate of assets/css/style.css)
