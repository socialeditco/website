const SHEET_NAME = 'Inquiries';

function doPost(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Submitted At', 'Source', 'Name', 'Business', 'Email', 'Package', 'Message', 'User Agent']);
  }
  const p = e && e.parameter ? e.parameter : {};
  sheet.appendRow([new Date(), p.source || '', p.name || '', p.business || '', p.email || '', p.package || '', p.message || '', p.userAgent || '']);
  return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
}
