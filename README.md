# PEC-Webmail – Deutsch (inoffiziell)

Ein Userscript, das die Oberfläche der **Aruba PEC-Webmail** ([webmail.pec.it](https://webmail.pec.it)) ins **Deutsche** übersetzt.

---

## Funktionen

- Deutsche Oberfläche für Nachrichten, Kontakte, Kalender, Dateien, Einstellungen und die übrigen Bereiche der Webmail
- Menüpunkt **DE** oben rechts neben „Hilfe“ mit:
  - Informationen zum Skript und zur Version
  - Links zum Projekt und zum Bugtracker
  - Einstellungen, die nur lokal in Ihrem Browser gespeichert werden:
    - **Deutsche Übersetzung verwenden** (an/aus)
    - **Sprache für noch nicht übersetzte Texte** (Englisch oder Italienisch)
- Automatische Updates über Ihren Userscript-Manager

---

## Installation

Sie brauchen zuerst eine Browser-Erweiterung für Userscripts, einen sogenannten **Userscript-Manager**. Danach installieren Sie das Skript mit einem Klick.

**Installationslink für das Skript:**
👉 **https://raw.githubusercontent.com/mlgtcode/pec-webmail-de/main/pec-webmail-deutsch.user.js**

### Firefox

1. **Userscript-Manager installieren.** Empfohlen sind:
   - [Tampermonkey für Firefox](https://addons.mozilla.org/firefox/addon/tampermonkey/)
   - [Violentmonkey für Firefox](https://addons.mozilla.org/firefox/addon/violentmonkey/)

   Öffnen Sie den Link, klicken Sie auf **„Zu Firefox hinzufügen“** und bestätigen Sie die Abfrage mit **„Hinzufügen“**.
2. **Skript installieren.** Öffnen Sie den [Installationslink](https://raw.githubusercontent.com/mlgtcode/pec-webmail-de/main/pec-webmail-deutsch.user.js). Der Userscript-Manager öffnet automatisch eine Installationsseite. Klicken Sie dort auf **„Installieren“** (Tampermonkey) bzw. **„Bestätigen“** (Violentmonkey).
3. **Webmail öffnen.** Rufen Sie [webmail.pec.it](https://webmail.pec.it) auf oder laden Sie die bereits geöffnete Seite mit `F5` neu. Die Oberfläche ist jetzt deutsch, und oben rechts erscheint **DE**.

> **Hinweis zu Greasemonkey:** Das Skript ist auch für Greasemonkey 4 ausgelegt, wurde damit aber nicht getestet. Bei Problemen verwenden Sie bitte Tampermonkey oder Violentmonkey.

### Google Chrome (und andere Chromium-Browser wie Edge, Brave, Opera)

1. **Tampermonkey installieren.** Öffnen Sie [Tampermonkey im Chrome Web Store](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) und klicken Sie auf **„Zu Chrome hinzufügen“** → **„Erweiterung hinzufügen“**.
2. **Userscripts erlauben.** Das ist in aktuellen Chrome-Versionen **zwingend nötig**, sonst führt Tampermonkey keine Skripte aus.
   - Öffnen Sie `chrome://extensions` (in die Adresszeile eingeben).
   - **Ab Chrome 138:** Klicken Sie bei Tampermonkey auf **„Details“** und aktivieren Sie den Schalter **„Nutzerskripts zulassen“** („Allow User Scripts“).
   - **Ältere Chrome-Versionen:** Aktivieren Sie oben rechts den **„Entwicklermodus“**.
   - Starten Sie Chrome danach am besten einmal neu.
3. **Skript installieren.** Öffnen Sie den [Installationslink](https://raw.githubusercontent.com/mlgtcode/pec-webmail-de/main/pec-webmail-deutsch.user.js) und klicken Sie auf der Tampermonkey-Seite auf **„Installieren“**.
4. **Webmail öffnen.** Rufen Sie [webmail.pec.it](https://webmail.pec.it) auf oder laden Sie die Seite neu. Oben rechts erscheint **DE**.

> Für **Microsoft Edge** gibt es Tampermonkey auch im [Edge-Add-ons-Store](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd). Dort heißt die Einstellung in Schritt 2 unter `edge://extensions` ebenfalls „Nutzerskripts zulassen“ bzw. „Entwicklermodus“.

### Prüfen, ob alles funktioniert

- Die Menüs der Webmail sind deutsch, zum Beispiel „Posteingang“, „Gesendet“ und „Papierkorb“.
- Oben rechts neben „Hilfe“ steht **DE**.
- Das Symbol des Userscript-Managers in der Browser-Leiste zeigt auf webmail.pec.it eine **1** für ein aktives Skript.

---

## Bedienung und Einstellungen

Klicken Sie oben rechts auf **DE**. Es öffnet sich ein Fenster mit Informationen zum Skript, Links zu GitHub und zum Bugtracker sowie den Einstellungen.

| Einstellung | Bedeutung |
|---|---|
| **Deutsche Übersetzung verwenden** | Ausgeschaltet zeigt die Webmail wieder die bei Aruba eingestellte Sprache. **DE** erscheint dann durchgestrichen, damit Sie die Übersetzung wieder einschalten können. |
| **Sprache für noch nicht übersetzte Texte** | Bestimmt, ob fehlende Übersetzungen, etwa nach einem Update der Webmail, auf **Englisch** oder **Italienisch** angezeigt werden. |

Mit **„Speichern und neu laden“** werden die Einstellungen übernommen. Sie werden nur **lokal in Ihrem Browser** gespeichert (`localStorage` von webmail.pec.it) und nirgendwohin übertragen.

---

## Updates

Der Userscript-Manager prüft regelmäßig automatisch, ob es eine neue Version gibt. Sie können die Prüfung auch selbst anstoßen:

- **Tampermonkey:** Symbol anklicken → **Dashboard** → **Installierte Userscripts** → Häkchen beim Skript setzen → Aktion **„Aktualisieren“**, oder unter „Hilfsmittel“ auf **„Nach Userscript-Updates suchen“** klicken.
- **Violentmonkey:** Symbol anklicken → Zahnrad bzw. Dashboard → beim Skript auf **„Nach Updates suchen“** klicken.

Alternativ öffnen Sie einfach erneut den [Installationslink](https://raw.githubusercontent.com/mlgtcode/pec-webmail-de/main/pec-webmail-deutsch.user.js).

---

## Deinstallation

- **Vorübergehend abschalten:** Klicken Sie auf **DE** → Haken bei **„Deutsche Übersetzung verwenden“** entfernen → **„Speichern und neu laden“**. Alternativ deaktivieren Sie das Skript im Userscript-Manager.
- **Ganz entfernen:** Löschen Sie das Skript im Dashboard Ihres Userscript-Managers über das Papierkorb-Symbol. Danach ist die Webmail wieder im Originalzustand.

---

## So funktioniert es

Die Webmail lädt ihre Texte aus Sprachdateien wie `assets/i18n/en/default.json`. Das Skript:

1. erkennt im Browser, wenn die Webmail eine dieser Sprachdateien lädt,
2. lädt stattdessen die englische (oder italienische) Originaldatei,
3. überschreibt darin jeden Text mit der deutschen Fassung aus [`de.js`](de.js), die gleich aufgebaut ist wie die Originaldatei,
4. gibt das Ergebnis an die Webmail weiter.

Texte, die in `de.js` fehlen, bleiben in der Ausweichsprache stehen. Das Skript liest, speichert und versendet **keine** E-Mails, Kontakte, Zugangsdaten oder sonstigen Inhalte Ihres Postfachs. Außer den Sprachdateien der Webmail lädt es nur die `de.js` aus diesem Repository.

---

## Dateien im Repository

| Datei | Inhalt |
|---|---|
| `pec-webmail-deutsch.user.js` | Das Userscript (Installationsdatei) |
| `de.js` | Die deutschen Texte, gleich aufgebaut wie die Original-Sprachdateien der Webmail |
| `README.md` | Diese Anleitung |

---

## Fehler melden und mithelfen

- **Falsche oder fehlende Übersetzung, Darstellungsfehler, Skript funktioniert nicht?**
  → Bitte ein [Issue im Bugtracker](https://github.com/mlgtcode/pec-webmail-de/issues) anlegen. Hilfreich sind:
  - der betroffene Text (Original und Übersetzung) bzw. ein Screenshot,
  - Browser und Version,
  - Userscript-Manager und Version.
- **Übersetzung verbessern:** Korrekturen gerne direkt als Pull Request in [`de.js`](de.js). Bitte nur die Texte ändern und die **Schlüssel** (links vom Doppelpunkt) sowie Platzhalter wie `{{number}}`, `{{email}}` oder HTML-Tags wie `<b>` unverändert lassen.

---

## ⚠️ Disclaimer

- Dies ist eine **inoffizielle** Übersetzung und ein reines **Community-Projekt**.
- Das Projekt steht in **keiner Verbindung** zu Aruba S.p.A. oder Aruba PEC S.p.A. Es wurde von Aruba weder erstellt noch geprüft, unterstützt oder freigegeben.
- Die Übersetzung erfolgt **ohne Gewähr**. Sie kann Fehler, Ungenauigkeiten oder veraltete Texte enthalten.
- Bei der PEC (Posta Elettronica Certificata) können Formulierungen **rechtliche Bedeutung** haben, zum Beispiel bei Annahme- und Zustellbestätigungen oder bei Hinweisen zu Fristen und Signaturen. **Im Zweifel gilt immer der italienische bzw. englische Originaltext.** Über das Menü **DE** können Sie die Übersetzung jederzeit abschalten und den Originaltext ansehen.
- Aruba kann die Webmail jederzeit ändern. Dadurch kann das Skript ganz oder teilweise aufhören zu funktionieren. Neue Texte bleiben dann bis zu einem Update englisch.
- Die Nutzung erfolgt **auf eigenes Risiko**. Die Autoren haften nicht für Schäden, die aus der Nutzung entstehen.
- „Aruba“, „Aruba PEC“ und zugehörige Logos sind Marken ihrer jeweiligen Inhaber. Sie werden hier nur verwendet, um zu beschreiben, wofür das Skript gedacht ist.
