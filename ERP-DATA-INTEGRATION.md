# ERP Data Integration — GPS Pethgam Wagoora

## Shared Firebase project
All connected modules should use the Firebase project `pry-school-pethgam-wagoora` through `assets/js/init-firebase.js`. Legacy entry points `modules/init-firebase.js`, `assets/js/firebase.js`, and `admin/modules/firebase.js` are compatibility re-exports; do not put separate Firebase configurations in individual modules.

## Canonical collections and data flow

| Data area | Canonical collection(s) | Connected modules |
|---|---|---|
| Student master | `students` | Master Ledger, Student Attendance, Teacher Roll Call, MDM roll sync, certificates |
| Admissions | `admissions` (mirrored to `students`) | Admission, Admission Register, MDM roll sync |
| Examination | `results` | Results importer, Student Results uploader; Marksheet Generator now defaults to the same Firebase project and `results` collection |
| Attendance | `attendance` (class/day summaries), `attendance_records` (student/day rows) | Attendance, Teacher Roll Call, attendance Excel importer |
| Staff | `staffRecords` | Staff Entry, Staff master Excel importer |
| Staff attendance | `staffAttendance` | Staff attendance/check-in import |
| MDM | `mdmDailyLogs`, mirrored to `mdm_entries` | Daily MDM, MDM Entry, MDM Report |
| Other registers | `libraryIssues`, `textbookIssues`, `leaveApplications`, `timetable`, `children`, `pending_admissions`, `apaarConsents`, `diaryNotices` | Corresponding modules and Excel import panels |

## Excel import workflow
The shared importer is `assets/js/excel-importer.js`. It is attached to the data-entry modules listed in the project. Select `.xlsx`, `.xls`, or `.csv`, preview the first rows, then save. Column headings are normalized (for example Admission No → `admNo`, Student Name → `fullName`, Class → `studentClass`). Records are merged rather than replaced, and blank spreadsheet cells are ignored. Use Admission No / Staff ID as a stable key to update existing records instead of creating duplicates.

The importer uses SheetJS from its CDN, so an internet connection is required. Imports are processed in batches of up to 150 rows. If a batch fails, already committed batches remain saved; check the status message before retrying.

## Important operational notes
1. Admission saves now write both `admissions` and the `students` master record. Excel admission imports do the same.
2. Attendance saves preserve the class summary and additionally write student-wise rows in `attendance_records`.
3. MDM daily entry from `modules/mdm.html` writes `mdmDailyLogs`; the legacy admin MDM entry mirrors its local entry to `mdmDailyLogs` and `mdm_entries` so the monthly report can read it.
4. The Marksheet Generator no longer points to a dummy API key / separate demonstration project. Its default Firebase project is the school's shared project and its default collection is `results`.
5. A few legacy pages still retain their original local-only workflows (notably the child-population / VER family-survey forms and parts of the timetable/MDM statement utilities). Their new Excel import panel uploads to the mapped cloud collection, but their pre-existing on-screen localStorage data is not automatically migrated or live-subscribed. Export/backup that local data before replacing devices. A full conversion of those legacy workflows requires a schema decision for their family/survey records and should not be silently merged into student admissions.
6. Do not loosen Firestore rules to `allow read, write: if true`. Restrict writes to authenticated school administrators / authorized staff, and restrict student-facing reads to the authenticated student's own records. The Firebase web config is public by design; Firestore rules are the security boundary.
7. Before first live use, test with a small backup workbook and verify the target collections in Firebase Console. No data has been uploaded by preparing this source package.

## Deployment
Keep the folder structure intact when deploying to GitHub Pages. The project uses ES modules and CDN-loaded Firebase/SheetJS libraries, so serve it over HTTPS (GitHub Pages is suitable). Do not open the HTML files directly from local file storage.
