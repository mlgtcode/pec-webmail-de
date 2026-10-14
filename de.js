/*
 * PEC-Webmail – deutsche Übersetzung (de)
 *
 * INOFFIZIELLE ÜBERSETZUNG – nicht von Aruba S.p.A. bzw. Aruba PEC S.p.A. erstellt,
 * geprüft oder unterstützt. Alle Angaben ohne Gewähr; im Zweifel gilt der Originaltext.
 *
 * Aufbau wie die Original-Sprachdateien der Webmail:
 *   "default"  -> https://webmail.pec.it/new/assets/i18n/en/default.json
 *   "override" -> https://webmail.pec.it/new/assets/i18n/override/pec/en/default.json
 * Fehlende Schlüssel werden vom Userscript automatisch mit dem englischen Text ergänzt.
 *
 * Projekt: https://github.com/mlgtcode/pec-webmail-de
 */
var PEC_WEBMAIL_DE = {
  "default": {
    "application": {
      "title": "Aruba Webmail",
      "title-pec": "PEC-Webmail"
    },
    "login": {
      "simple-title": "Bei Webmail anmelden",
      "fields": {
        "email": {
          "header": "E-Mail-Adresse",
          "header-pec": "PEC-E-Mail-Adresse",
          "placeholder": "Z. B. name@domain.it",
          "error-label": "E-Mail eingeben",
          "errors": {
            "required": "E-Mail eingeben",
            "not-valid": "Ungültige E-Mail"
          }
        },
        "password": {
          "header": "Passwort",
          "forgotten": "Passwort vergessen?",
          "placeholder": "",
          "errors": {
            "required": "Passwort eingeben"
          }
        },
        "submit": "Anmelden",
        "continue": "Weiter",
        "remember-me": "Angemeldet bleiben",
        "cancel": "Abbrechen",
        "copyright": {
          "static": "Copyright © 2026 Aruba S.p.A. - USt-IdNr. 01573850516 - Alle Rechte vorbehalten -",
          "privacy": "Datenschutz",
          "cookie-policy": "Cookie-Richtlinie",
          "edit-cookie": "Cookie-Einstellungen"
        },
        "error": "<strong>Falsche Angaben.<br>Bitte prüfen und erneut versuchen</strong>",
        "error-pec": "Um Ihr zertifiziertes E-Mail-Postfach zu verwalten, öffnen Sie es über die <a href=\"https://webmail.pec.it\">PEC-Webmail</a>.",
        "language": {
          "it": "Italiano",
          "en": "English",
          "es": "Español",
          "fr": "Français",
          "cs": "Česky",
          "hu": "Magyar",
          "pl": "Polski"
        }
      },
      "pec-banner": {
        "message": "Noch kein <b>zertifiziertes E-Mail-Postfach</b>?",
        "action": "Eigene PEC holen"
      }
    },
    "volture": {
      "supervisor": {
        "title": "Supervisore360-Berechtigungen",
        "subtitle": "Als neuer Inhaber des PEC-Postfachs müssen Sie entscheiden, wie mit den vom vorherigen Inhaber an Supervisoren erteilten Berechtigungen verfahren werden soll.",
        "help": "Wie funktioniert Supervisore360?",
        "confirm": "<b>Wenn Sie bestätigen</b>, kann der Supervisor weiterhin in Ihrem Namen auf das PEC-Postfach zugreifen und damit arbeiten. Sie können Freigaberechte jederzeit in den Einstellungen verwalten und die Berechtigung widerrufen.",
        "revoke": "<b>Wenn Sie widerrufen</b>, kann der Supervisor nicht mehr auf Ihr PEC-Postfach zugreifen und damit arbeiten.",
        "number-waiting": "{{number}} Supervisoren ausstehend",
        "confirm-label": "Bestätigt",
        "revoke-label": "Widerrufen",
        "undo": "Abbrechen",
        "button-confirm": "Speichern",
        "later": "Später erledigen",
        "select": {
          "confirm": "Alle bestätigen",
          "revoke": "Alle widerrufen",
          "undo": "Alle abbrechen",
          "placeholder": "Aktion für alle auswählen"
        },
        "banner-error": {
          "title": "Ein Fehler ist aufgetreten",
          "message": "Bitte wiederholen Sie die Aktion."
        },
        "dialog": {
          "title": "Supervisore360",
          "subtitle": "<b style='font-size: 18px'>Mit Supervisore360 können Sie anderen Personen Zugriff auf Ihr PEC-Postfach gewähren.</b>",
          "description": "<b>Übertragen Sie die Verwaltung Ihrer PEC an externe Fachleute </b>(z. B. Anwälte, Steuerberater) und erteilen Sie ihnen die gewünschten Berechtigungen.",
          "button": "Schließen"
        }
      },
      "multiuser": {
        "title": "PEC-Multiuser-Konto",
        "subtitle": "Als neuer Inhaber des PEC-Postfachs müssen Sie entscheiden, wie mit den vom vorherigen Inhaber aktivierten PEC-Multiuser-Konten verfahren werden soll, die auf Ihr PEC-Postfach zugreifen dürfen.",
        "help": "Wie funktioniert PEC Multiuser?",
        "confirm": "<b>Wenn Sie bestätigen</b>, kann das PEC-Multiuser-Konto weiterhin auf Ihr PEC-Postfach zugreifen und damit arbeiten. Sie können Freigaberechte jederzeit in den Einstellungen verwalten und deaktivieren.",
        "revoke": "<b>Wenn Sie es deaktivieren</b>, kann das PEC-Multiuser-Konto nicht mehr auf Ihr PEC-Postfach zugreifen und damit arbeiten.",
        "number-waiting": "{{number}} Konten ausstehend",
        "confirm-label": "Bestätigt",
        "revoke-label": "Deaktiviert",
        "undo": "Abbrechen",
        "button-confirm": "Speichern",
        "later": "Später erledigen",
        "select": {
          "confirm": "Alle bestätigen",
          "revoke": "Alle deaktivieren",
          "undo": "Alle abbrechen",
          "placeholder": "Aktion für alle auswählen"
        },
        "banner-error": {
          "title": "Ein Fehler ist aufgetreten",
          "message": "Bitte wiederholen Sie die Aktion."
        },
        "dialog": {
          "title": "PEC Multiuser",
          "subtitle": "<b style='font-size: 18px'>Mit PEC Multiuser können Sie anderen Personen Zugriff auf Ihr PEC-Postfach gewähren.</b>",
          "description": "<b>Richten Sie Konten ein, die mit Ihnen in Ihrem PEC-Postfach arbeiten</b>, und erteilen Sie ihnen die gewünschten Berechtigungen.",
          "button": "Schließen"
        }
      },
      "standby": {
        "banner": {
          "title": "Zugriff vorübergehend nicht möglich",
          "subtitle": "Der Inhaber des PEC-Postfachs wird gerade aktualisiert"
        },
        "title": "Was ist los?",
        "subtitle": "Das PEC-Postfach wird auf einen neuen Inhaber übertragen.",
        "message-user": "Der neue Inhaber muss entscheiden, ob er das Konto bestätigt oder deaktiviert",
        "message-mail": "Sie werden per E-Mail über die Entscheidung informiert",
        "button": "Zurück"
      },
      "simple-title": "Bei Webmail anmelden",
      "pec-title": "Bei PEC-Webmail anmelden",
      "fields": {
        "email": {
          "header": "E-Mail-Adresse",
          "header-pec": "PEC-E-Mail-Adresse",
          "placeholder": "Z. B. name@domain.it",
          "error-label": "E-Mail-Adresse eingeben",
          "errors": {
            "required": "E-Mail-Adresse eingeben",
            "not-valid": "Ungültige E-Mail"
          }
        },
        "password": {
          "header": "Passwort",
          "forgotten": "Passwort vergessen?",
          "placeholder": "",
          "errors": {
            "required": "Passwort eingeben"
          }
        },
        "submit": "Anmelden",
        "remember-me": "Angemeldet bleiben",
        "copyright": {
          "static": "Copyright © 2026 Aruba S.p.A. - USt-IdNr. 01573850516 - Alle Rechte vorbehalten -",
          "privacy": "Datenschutz",
          "cookie-policy": "Cookie-Richtlinie",
          "edit-cookie": "Cookie-Einstellungen"
        },
        "error": "<strong>Falsche Angaben.<br>Bitte prüfen und erneut versuchen</strong>",
        "language": {
          "it": "Italiano",
          "en": "English",
          "esp": "Español"
        }
      },
      "pec-banner": {
        "message": "Noch kein <b>zertifiziertes E-Mail-Postfach</b>?",
        "action": "Eigene PEC holen"
      }
    },
    "reset-password": {
      "title": "Passwort zurücksetzen",
      "email": {
        "header": "E-Mail-Adresse",
        "placeholder": "Geben Sie Ihre E-Mail ein",
        "errors": {
          "required": "E-Mail-Adresse eingeben",
          "not-valid": "E-Mail ungültig"
        }
      },
      "submit": "Weiter",
      "success": {
        "title": "Passwort zurücksetzen",
        "message": "Wir haben eine E-Mail an {{email}} gesendet, mit einem Link, um ein neues Passwort für Ihr Postfach festzulegen. Der Link ist 3 Stunden gültig und kann nur einmal verwendet werden.",
        "go-to-login": "Zurück zur Webmail"
      },
      "error": {
        "title": "Passwort kann nicht zurückgesetzt werden",
        "go-to-login": "Zurück zur Webmail",
        "links": {
          "contact-admin": "Wenden Sie sich an den Domain-Administrator oder",
          "read-the-guide": "lesen Sie die Anleitung",
          "guide-link": "https://guide.hosting.aruba.it/email/email-modifica-ripristino-password/errore-reset-password.aspx",
          "admin": "Sind Sie der Domain-Administrator?",
          "dedicated-guide-link": "https://guide.hosting.aruba.it/email/email-modifica-ripristino-password/ripristino-password-amministratore-del-dominio.aspx",
          "dedicated-guide-text": "Zur Anleitung",
          "aruba-technet": "Haben Sie ein Postfach @aruba.it oder @technet.it?",
          "aruba-technet-link": "https://guide.hosting.aruba.it/email/email-modifica-ripristino-password/recupero-password-caselle-@aruba-it-o-@technet-it.aspx",
          "aruba-technet-text": "Zur Anleitung",
          "pec-account": "Versuchen Sie, sich mit einem PEC-Postfach anzumelden?",
          "pec-account-link": "https://webmail.pec.it/",
          "pec-account-text": "Zur entsprechenden Seite"
        }
      }
    },
    "change-password": {
      "title": "Passwort zurücksetzen",
      "subtitle-1": "Die Sicherheit Ihrer Daten ist wichtig.",
      "subtitle-2": "Achten Sie darauf, ein Passwort einzugeben, das die vorgeschlagenen Kriterien erfüllt.",
      "placeholder": "Neues Passwort eingeben",
      "confirm-password": "Passwort wiederholen",
      "rules": {
        "subtitle": "Ein sicheres und starkes Passwort",
        "length-rule": "muss zwischen 8 und {{max}} Zeichen enthalten",
        "case-rule": "muss mindestens einen Groß- und einen Kleinbuchstaben enthalten",
        "number-rule": "muss mindestens eine Ziffer enthalten",
        "one-symbol-rule": "muss mindestens eines dieser Sonderzeichen enthalten: {{characters}}",
        "no-account-name-rule": "darf nicht den vollständigen Kontonamen enthalten",
        "no-sequential-char": "Darf nicht mehr als zwei gleiche Zeichen hintereinander enthalten",
        "no-special-char-rule": "Darf folgende Zeichen nicht enthalten: Akzente, nicht-lateinische Zeichen, andere als die erlaubten Sonderzeichen",
        "info": "Muss sich vom zuletzt verwendeten Passwort unterscheiden"
      },
      "save": "Passwort speichern",
      "cancel": "Abbrechen",
      "success": {
        "title": "Passwort gespeichert",
        "access-the-box": "Beim Postfach anmelden"
      },
      "error": {
        "title": "Ungültiges Passwort",
        "message": "Falsche URL. Bitte erneut versuchen",
        "access-the-box": "Zurück"
      },
      "otp-modal": {
        "header": "Neues Passwort bestätigen",
        "hint": "Um das neue Passwort zu speichern, holen Sie sich den Code aus der App <b>Aruba OTP</b> (er wird alle 30 Sekunden aktualisiert).",
        "proceed": "Weiter",
        "cancel": "Abbrechen"
      }
    },
    "otp": {
      "title": "Anmeldung autorisieren",
      "sms-subtitle": "Wir haben eine SMS mit dem Bestätigungscode an {{number}} gesendet",
      "push-subtitle": {
        "follow-instructions": "Folgen Sie den Anweisungen:",
        "login-to-app": "Bei der App anmelden",
        "open-menu": "Menü öffnen",
        "go-to-settings": "Gehen Sie zu <strong>Einstellungen</strong>",
        "go-to-generate": "Gehen Sie zu <strong>Bestätigungscode generieren</strong>"
      },
      "sms": {
        "not-received": "Keine SMS erhalten?",
        "send-again": "Erneut senden",
        "error": "Warten Sie 30 Sekunden, bevor Sie einen neuen Code anfordern"
      },
      "otp-field": {
        "header": "Bestätigungscode",
        "errors": {
          "required": "Bestätigungscode eingeben",
          "wrong": "Bestätigungscode prüfen"
        }
      },
      "submit": "Bestätigen",
      "cancel": "Abbrechen"
    },
    "otp-input": {
      "app": {
        "title": "Um das neue Passwort zu speichern, holen Sie sich den Code aus der App <b>Aruba OTP</b> (er wird alle 30 Sekunden aktualisiert).",
        "cta": {
          "hint": "Sie können die Aruba-PEC-App nicht verwenden?",
          "button": "Ohne App fortfahren"
        }
      },
      "sms": {
        "title": "Wir haben einen Bestätigungscode per SMS an die Nummer <b>{{number}}</b> gesendet. Sie haben diese Nummer nicht mehr? Bitten Sie den Domain-Administrator, die Bestätigung für Ihr Konto zu deaktivieren.",
        "title-support": "Wir haben einen Bestätigungscode per SMS an die Nummer <b>{{number}}</b> gesendet. Sie haben diese Nummer nicht mehr? <a tabindex=\"-1\" href=\"https://assistenza.aruba.it/home.aspx\" target=\"_blank\">Support kontaktieren</a>",
        "cta": {
          "hint": "Keinen Code erhalten?",
          "button": "Erneut senden"
        }
      },
      "input": {
        "header": "Bestätigungscode",
        "errors": {
          "required": "Bestätigungscode eingeben",
          "wrong": "Bestätigungscode prüfen"
        }
      },
      "expired": {
        "title": "Zeitüberschreitung",
        "message": "Für den Abschluss des Vorgangs ist zu viel Zeit vergangen.<br>Sie können ihn jederzeit neu starten."
      }
    },
    "multiuser-activation": {
      "title": "Erstellen Sie Ihr Passwort",
      "subtitle": "Der Administrator des Postfachs <strong>{{email}}</strong> möchte den Zugriff mit Ihnen teilen.",
      "sign-info": "E-Mail-Adresse für die Anmeldung: <strong>{{email}}</strong><br>Benutzername: <strong>{{username}}</strong>",
      "rules": {
        "subtitle": "Ihr Passwort muss folgende Anforderungen erfüllen:",
        "length-rule": "Zwischen 8 und {{max}} Zeichen lang",
        "case-rule": "Mindestens ein Groß- und ein Kleinbuchstabe",
        "number-rule": "Mindestens eine Ziffer",
        "one-symbol-rule": "Mindestens eines dieser Sonderzeichen: {{characters}}",
        "no-account-name-rule": "Darf nicht den vollständigen Kontonamen enthalten",
        "no-sequential-char": "Darf nicht mehr als zwei gleiche Zeichen hintereinander enthalten",
        "no-special-char-rule": "Darf folgende Zeichen nicht enthalten: Akzente, nicht-lateinische Zeichen, andere als die erlaubten Sonderzeichen",
        "info": "Muss sich vom zuletzt verwendeten Passwort unterscheiden",
        "info-additional": "Ein starkes Passwort enthält keine Wörter aus dem Wörterbuch."
      },
      "success": {
        "title": "Das Konto wurde aktiviert",
        "subtitle": "Sie haben Ihr Passwort aktualisiert.",
        "access-the-box": "Beim Postfach anmelden"
      },
      "error": {
        "title": "Passwort speichern",
        "subtitle": "Etwas ist schiefgelaufen. Bitte später erneut versuchen"
      }
    },
    "user-menu": {
      "logout": "Abmelden",
      "settings": "Einstellungen",
      "manage-account": "Konto verwalten",
      "module": {
        "messages": "Postfachspeicher",
        "files": "Dateispeicher",
        "archive": "Archivspeicher",
        "preservation": "Speicher für digitale Langzeitarchivierung"
      },
      "tag": {
        "warning": "Fast voll",
        "alert": "Fast voll",
        "full": "Voll",
        "not-active": "Deaktiviert"
      },
      "space-usage": "<b>{{size}} {{unit}} belegt</b> von {{maxSize}} MB",
      "space-usage-unlimited": "<b>{{size}} {{unit}} belegt</b>",
      "unlimited": "Unbegrenzter E-Mail-Speicher",
      "actions": {
        "upgrade": "Speicher erweitern",
        "changePecTypeToProPremium": "Upgrade auf PEC Pro oder Premium",
        "changePecTypeToPremium": "Upgrade auf PEC Premium",
        "buy-business-mail": "Business Mail holen",
        "client-area": "Beim Kundenbereich anmelden"
      },
      "archive-banner": "Führen Sie ein Upgrade auf Business Mail durch, um den Dienst zu nutzen.",
      "archive-banner-postmaster": "Wenden Sie sich an Ihren Domain-Administrator (Postmaster), um den Dienst zu erhalten",
      "account_status": {
        "header": "Postfachstatus",
        "automatic_renew": "Automatische Verlängerung",
        "expiration": "Ablaufdatum",
        "cancellation": "Ihre PEC wird am {{cancellationDate}} gelöscht",
        "suspended_for_spam": "Wegen Spam gesperrt",
        "suspended_for_spam_message": "Kontaktieren Sie uns jetzt, um das Problem zu lösen.",
        "suspended_for_spam_message_mail": "Kontaktieren Sie uns jetzt, um das Problem zu lösen.<br/><a class=\"support\" href=\"mailto:info@arubapec.it\">info@arubapec.it</a>",
        "support": "Support kontaktieren",
        "show_expiration": "Anzeigen",
        "renew": "Verlängern",
        "status": {
          "active": "Aktiviert",
          "not_active": "Deaktiviert"
        },
        "reseller_dialog": {
          "header": "Ablaufdatum des Postfachs",
          "message": "PEC-Postfach gültig bis <b>{{expiration}}</b>",
          "empty_message": "Keine Informationen gefunden",
          "close": "Schließen"
        },
        "partner-upgrade-message": "Um den Speicher zu erweitern, wenden Sie sich an Ihren Dienstanbieter oder"
      }
    },
    "pec_plus": {
      "enabled": "PEC-Postfach konform mit europäischen Standards",
      "to_enable": "Bringen Sie Ihre PEC auf europäischen Standard",
      "message_enabled": "Sie haben die erforderlichen Schritte abgeschlossen.<b>Bald können Sie rechtsgültige PEC-E-Mails an europäische Empfänger senden.</b>",
      "message_to_enable": "Bringen Sie Ihre PEC mit zwei einfachen Schritten kostenlos auf den europäischen Standard für zertifizierte E-Mails",
      "action_enabled": "Was bedeutet das?",
      "action_to_enable": "Warum ist das notwendig?",
      "identity": {
        "label": "Identität",
        "status": {
          "OK": "Abgeschlossen",
          "NotIdentified": "Zu bestätigen",
          "IdentificationPending": "Zu bestätigen",
          "TerritorioPending": "Zu bestätigen",
          "IdentificationInProgress": "Überprüfung läuft",
          "LegalValidationFailed": "Dokumente fehlen",
          "DocumentsRequired": "Dokumente fehlen"
        },
        "action": {
          "confirm": "Identität bestätigen",
          "send": "Dokumente senden"
        },
        "message": {
          "IdentificationPending": "Fast geschafft. Abschließen bis {{dvoExpireDate}}",
          "TerritorioPending": "Fast geschafft. Gehen Sie bis {{territoryExpireDate}} zu einer autorisierten Stelle"
        },
        "generic-error": "Ein Fehler ist aufgetreten. Bitte später erneut versuchen."
      },
      "2fa": {
        "label": "Bestätigung in zwei Schritten",
        "status": {
          "enabled": "Aktiviert",
          "not_enabled": "Nicht aktiviert"
        },
        "action": "Bestätigung in zwei Schritten aktivieren"
      }
    },
    "windows": {
      "stack": {
        "mail": "Entwurf",
        "mails": "Entwürfe",
        "note": "Notiz",
        "notes": "Notizen",
        "calendar-event": "Termin",
        "calendar-events": "Termine"
      }
    },
    "notification": {
      "messages": {
        "title": "Sie haben neue Nachrichten",
        "body": "Sie haben {{number}} neue Nachrichten"
      }
    },
    "messages": {
      "main-account": "Hauptkonto",
      "important": "Wichtig",
      "drag-drop": {
        "move-messages": "{{number}} Nachrichten verschieben",
        "move-recipients": "Empfänger verschieben"
      },
      "search": {
        "placeholder": "Nachricht suchen...",
        "placeholder-preserved-messages": "Archivierte Nachricht suchen...",
        "search-icon": "Suchen",
        "placeholders": {
          "all-the-folders": "Alle Ordner",
          "all-the-tags": "Alle Labels"
        },
        "less-filters": "Weniger Filter",
        "no-result-text": "Keine letzten Suchen",
        "header": "LETZTE SUCHEN",
        "filters-button": "Alle Suchfilter",
        "button-text": "Suchen",
        "filters": {
          "all": "Alle",
          "sender": "Absender",
          "recipient": "Empfänger",
          "subject": "Betreff",
          "content": "Inhalt",
          "pec-sheet-modal-title": "Wählen Sie, welche Nachrichten angezeigt werden:"
        },
        "save-search": "Suche speichern",
        "save-search-header": "Suche speichern",
        "save-search-label": "Name der Suche",
        "rename-search-header": "Gespeicherte Suche umbenennen",
        "rename-search-label": "Name der Suche",
        "delete-search-header": "Gespeicherte Suche löschen",
        "delete-search-message": "Möchten Sie die gespeicherte Suche <strong>{{name}}</strong> wirklich löschen?<br><br>Beim Löschen der Suche werden alle eingestellten Parameter zurückgesetzt.",
        "overwrite-search-header": "Suche speichern",
        "overwrite-search-message": "Möchten Sie die Parameter der aktuellen Suche überschreiben oder eine neue Suche speichern?",
        "overwrite-search-confirm": "Änderungen speichern",
        "overwrite-search-cancel": "Als neu speichern",
        "modified-search-header": "Suche starten",
        "modified-search-message": "Sie haben die Parameter einer gespeicherten Suche geändert.<br>Möchten Sie die gespeicherte Suche aktualisieren oder eine neue Suche ohne Speichern starten?",
        "modified-search-confirm": "Änderungen speichern und starten",
        "modified-search-cancel": "Starten",
        "delete-search-confirm": "Löschen",
        "delete-search-cancel": "Abbrechen",
        "duplicate-name-header": "Name bereits vorhanden",
        "duplicate-name-message": "Eine Suche mit diesem Namen wurde bereits gespeichert.",
        "toast": {
          "saved": "Die Suche wurde gespeichert",
          "renamed": "Die Suche wurde umbenannt",
          "deleted": "Die Suche wurde gelöscht"
        },
        "form-list": {
          "all-the-folders": "Alle Ordner",
          "all-the-tags": "Alle Labels",
          "labels": {
            "options": "Optionen",
            "search-in": "Suchen in",
            "search-in-preserved-messages": "In archivierten Nachrichten suchen",
            "tags": "Labels",
            "sender": "Absender",
            "recipe": "Empfänger / Cc / Bcc",
            "subject": "Betreff",
            "contains": "Enthält die Wörter",
            "date": "Datum",
            "contains-attachments": "Enthält Anhang",
            "every-date": "Beliebig",
            "custom-date": "Benutzerdefinierter Zeitraum",
            "day": "Tag",
            "last-30-days": "Letzte 30 Tage",
            "choose-period": "Zeitraum wählen",
            "choose-day": "Tag wählen",
            "attachment-name": "Name des Anhangs",
            "saved-searches": "Gespeicherte Suchen"
          },
          "placeholders": {
            "saved-searches": "Suche auswählen"
          },
          "form-keys": {
            "folder": "Ordner",
            "tags": "Labels",
            "sender": "Von",
            "recipe": "An",
            "subject": "Betreff",
            "text": "",
            "range": "Von–Bis",
            "day": "Am",
            "attachment": "Mit Anhängen"
          }
        }
      },
      "label": "Nachrichten",
      "sidebar": {
        "new": "Neue Nachricht",
        "main": {
          "section": "Hauptordner",
          "inbox": "Posteingang",
          "outbox": "Gesendet",
          "draft": "Entwürfe",
          "trash": "Papierkorb",
          "spam": "Spam",
          "template": "Vorlagen",
          "preservation": "Zur digitalen Archivierung"
        },
        "myFolders": {
          "section": "Meine Ordner",
          "new-folder": "Neuen Ordner erstellen",
          "no-results": "Keine Ergebnisse",
          "actions": {
            "modify": "Ordner bearbeiten",
            "create-subfolder": "Unterordner erstellen",
            "delete": "Ordner löschen",
            "delete-multiple": "Ordner löschen",
            "move": "Verschieben",
            "export-folder": "Ordner exportieren",
            "move-to-trash": "Ordner leeren",
            "empty-folder": "Ordner leeren",
            "mark-all-as-read": "Alle als gelesen markieren",
            "add-to-main": "Zu Hauptordnern hinzufügen",
            "remove-from-main": "Aus Hauptordnern entfernen"
          },
          "toast": {
            "messages-mark-all-as-read": "Alle Nachrichten als gelesen markiert.",
            "messages-set-important": "Ordner zu Hauptordnern hinzugefügt",
            "messages-remove-from-important": "Ordner aus Hauptordnern entfernt"
          }
        },
        "management": {
          "section": "Nachrichten verwalten",
          "import": "Importieren"
        },
        "others": {
          "section": "Sonstiges",
          "delayed": "Später lesen",
          "advanced-search": "Suchergebnisse",
          "favorites": "Favoriten",
          "recipes": "Erhaltene Rechnungen",
          "preservation": "Zur digitalen Archivierung"
        },
        "tags": {
          "section": "Labels",
          "new": "Neues Label",
          "actions": {
            "delete": "Label löschen",
            "edit": "Label bearbeiten"
          }
        },
        "collapse-menu": "Minimieren",
        "expand-menu": "Erweitern"
      },
      "list": {
        "header": {
          "folder-name": {
            "inbox": "Posteingang",
            "outbox": "Gesendet",
            "draft": "Entwürfe",
            "trash": "Papierkorb",
            "spam": "Spam",
            "template": "Vorlagen",
            "Fatturazione Elettronica": "Erhaltene Rechnungen",
            "preservation": "Zur digitalen Archivierung"
          },
          "actions": {
            "mark-all-as-read": "Alle als gelesen markieren",
            "mark-all-as-unread": "Alle als ungelesen markieren",
            "add-to-favorites": "Zu Favoriten hinzufügen",
            "remove-from-favorites": "Aus Favoriten entfernen",
            "highlight": "Anheften",
            "remove-from-highlight": "Lösen",
            "mail-sent": "Gesendet",
            "add-to-tasks": "Zu Aufgaben hinzufügen",
            "add-to-notes": "Zu Notizen hinzufügen",
            "create-event": "Neuer Termin",
            "create-model": "Neue Vorlage",
            "block-sender": "Absender blockieren",
            "add-to-safe-senders": "Zu sicheren Absendern hinzufügen",
            "download-mail": "Nachricht herunterladen",
            "print": "Drucken",
            "reply": "Antworten",
            "reply-all": "Allen antworten",
            "edit-model": "Vorlage bearbeiten",
            "forward": "Weiterleiten",
            "delete": "Löschen",
            "delete-pec-archive": "In den Papierkorb",
            "definitive-delete": "Endgültig löschen",
            "mark-as-read": "Als gelesen markieren",
            "mark-as-read-pec-archive": "Als gelesen markieren",
            "mark-as-unread": "Als ungelesen markieren",
            "mail-spam": "In Spam verschieben",
            "mail-not-spam": "Aus Spam entfernen",
            "mail-move": "Verschieben",
            "mail-copy": "Kopieren",
            "tag": "Label",
            "mail-posticipate": "Erinnern in...",
            "mail-posticipate-date": "Verschoben auf {{date}}",
            "mail-posticipate-date-today": "Verschoben auf heute um {{date}}",
            "mail-postponed-restore": "In Posteingang wiederherstellen",
            "dots-separator": "Sonstiges",
            "transport-envelop": "Umschlag öffnen",
            "postpone": {
              "title": "Erinnern in...",
              "fifteen-minutes": "15 Min.",
              "one-hour": "1 Std.",
              "four-hours": "4 Std.",
              "tomorrow": "Morgen",
              "one-week": "1 Woche",
              "selection": "Datum und Uhrzeit wählen"
            },
            "refresh": "Aktualisieren",
            "show-header": "Nachrichtendetails anzeigen",
            "exhibit": "Herausgeben",
            "exhibitAll": "Alle herausgeben",
            "tooltip-exhibit-all": "Es wird eine zertifizierte .zip-Datei mit einer Kopie aller zur digitalen Archivierung gesendeten Nachrichten erstellt.",
            "download": "Herunterladen",
            "create-rule": "Neue Regel"
          },
          "tooltip": {
            "message-select-dropdown": "Auswählen",
            "high-priority": "Nachricht mit hoher Priorität"
          },
          "selections": {
            "message": "Nachrichten auswählen",
            "all": "Alle",
            "select-all": "Alle auswählen",
            "select-only-read": "Nur gelesene",
            "select-only-unread": "Nur ungelesene",
            "cancel-selection": "Auswahl aufheben"
          }
        },
        "pagination": {
          "pages": "Seite {{currentPage}} von {{totalPages}}"
        },
        "items-selector": "Elemente pro Seite:",
        "toast": {
          "messages-added-to-favorites": "Nachrichten zu Favoriten hinzugefügt.",
          "message-added-to-favorites": "Nachricht zu Favoriten hinzugefügt.",
          "message-removed-from-favorites": "Nachricht aus Favoriten entfernt.",
          "postponed": "Die Nachricht wurde vorübergehend in „Verschobene Nachrichten“ verschoben und erscheint zum angegebenen Datum und zur angegebenen Uhrzeit wieder in Ihrem Posteingang.",
          "restored-postponed": "Die Nachricht wurde im Posteingang wiederhergestellt."
        },
        "empty": {
          "inbox": {
            "title": "Keine Nachrichten gefunden.",
            "text": "Beginnen Sie mit Ihrer Webmail."
          },
          "outbox": {
            "title": "Keine gesendeten Nachrichten gefunden.",
            "text": "Beginnen Sie jetzt mit Ihrer E-Mail."
          },
          "draft": {
            "title": "Keine Entwürfe gefunden.",
            "text": "Dieser Ordner enthält alle unvollständigen Nachrichten. Hier können Sie eine Nachricht vorübergehend speichern und später fertigstellen."
          },
          "trash": {
            "title": "Keine Nachrichten gefunden.",
            "text": "Dieser Ordner enthält alle gelöschten Nachrichten."
          },
          "spam": {
            "title": "Keine Nachrichten gefunden.",
            "text": "Dieser Ordner enthält alle als Spam markierten Nachrichten."
          },
          "template": {
            "title": "Keine Vorlagen gefunden.",
            "text": "Erstellen Sie in wenigen Schritten eine E-Mail-Vorlage. Sie können sie bei jedem Versand anpassen."
          },
          "delayed": {
            "title": "Keine Nachrichten gefunden.",
            "text": "Dieser Ordner enthält alle Nachrichten, die Sie später lesen möchten. So verpassen Sie nichts."
          },
          "advanced-search": {
            "title": "Keine Nachrichten gefunden.",
            "text": "Dieser Ordner enthält alle Nachrichten Ihrer Suche."
          },
          "favorites": {
            "title": "Keine Favoriten gefunden.",
            "text": "Dieser Ordner enthält alle markierten Nachrichten, damit Sie sie schnell an einem Ort finden. Markieren Sie jetzt Ihre Nachrichten."
          },
          "Fatturazione Elettronica": {
            "title": "Keine Rechnungen gefunden.",
            "text": "Dieser Ordner enthält alle Ihre Rechnungen."
          },
          "archive": {
            "title": "Keine Nachrichten gefunden.",
            "text": "Dieser Ordner enthält alle archivierten Nachrichten."
          },
          "preservation": {
            "title": "Derzeit sind keine Nachrichten zur digitalen Archivierung bereit.",
            "text": "In diesem Ordner finden Sie alle Nachrichten, die Sie aufbewahren möchten und die darauf warten, endgültig zur digitalen Archivierung gesendet zu werden",
            "settings-link": "Einstellungen."
          },
          "labels": {
            "title": "Keine Nachrichten gefunden.",
            "text": "Dieser Ordner enthält alle Nachrichten einer nach Label gefilterten Suche."
          },
          "title": "Keine Nachrichten zum Anzeigen."
        },
        "record": {
          "headers": {
            "highlighted": "Angeheftete Nachrichten",
            "today": "Heute",
            "yesterday": "Gestern",
            "week": "Diese Woche",
            "previous-week": "Vorherige Woche",
            "future": "Weiter"
          },
          "actions": {
            "add-to-favorites": "Zu Favoriten hinzufügen",
            "remove-from-favorites": "Aus Favoriten entfernen",
            "reply": "Antworten",
            "reply-all": "Allen antworten",
            "forward": "Weiterleiten"
          },
          "spam-tag": "Spam",
          "draft": "Entwürfe",
          "symbols": {
            "pec": {
              "tooltip": "PEC-Nachricht"
            },
            "non-pec": {
              "tooltip": "Nicht-PEC-Nachricht"
            },
            "accepted": {
              "tooltip": "Annahmebestätigung"
            },
            "delivery": {
              "tooltip": "Zustellbestätigung"
            },
            "delivery-failure": {
              "tooltip": "Nicht zugestellt"
            },
            "electronic-invoice": {
              "tooltip": "E-Rechnung"
            },
            "pec-plus": {
              "tooltip": "Nachricht entspricht den europäischen Vorschriften"
            },
            "smime": {
              "tooltip": "S/MIME-Signatur"
            },
            "smime-default": {
              "tooltip": "S/MIME-Signatur ist gültig"
            },
            "smime-warning": {
              "tooltip": "Fehler bei der Prüfung der S/MIME-Signatur"
            },
            "smime-danger": {
              "tooltip": "S/MIME-Signatur ist ungültig"
            },
            "smime-encryption": {
              "tooltip": "Verschlüsselte Nachricht"
            },
            "encryption-default": {
              "tooltip": "Verschlüsselte Nachricht"
            },
            "encryption-danger": {
              "tooltip": "Nachricht kann nicht entschlüsselt werden"
            },
            "preservation-message": {
              "tooltip-preservation-message": "Nachricht zur digitalen Archivierung gesendet",
              "tooltip-suitable-for-preservation": "Nachricht für die digitale Archivierung geeignet. Prüfen Sie, ob Sie sie im Bereich „Digitale Archivierung“ finden.",
              "tooltip-suitable-for-preservation-mobile": "Nachricht für die digitale Archivierung geeignet"
            }
          }
        }
      },
      "dialog": {
        "attachment-selector": {
          "my-files": "Meine Dateien",
          "shared-with-me": "Mit mir geteilt",
          "upload": "Hochladen",
          "pre-modal": {
            "title": "Webmail-Datei",
            "aruba-drive-title": "Aruba-Drive-Datei"
          },
          "sort": {
            "name-descending": "Name (Z–A)",
            "name-ascending": "Name (A–Z)",
            "modified-descending": "Zuletzt bearbeitet (neueste)",
            "modified-ascending": "Zuletzt bearbeitet (älteste)",
            "dimension-descending": "Größe (größte)",
            "dimension-ascending": "Größe (kleinste)"
          },
          "header": {
            "title": "Aus Webmail-Dateien anhängen",
            "columns": {
              "name": "Name",
              "last-edit": "Zuletzt bearbeitet",
              "dimension": "Größe"
            }
          },
          "tab": {
            "titles": {
              "my-files": "Meine Dateien"
            }
          },
          "actions": {
            "insert-link": "Link einfügen",
            "attach-file": "Datei anhängen",
            "insert-n-link": "{{number}} Links einfügen",
            "attach-n-file": "{{number}} Dateien anhängen"
          }
        },
        "new-message": {
          "title": "Neue Nachricht",
          "labels": {
            "from": "Von:",
            "to": "An:",
            "cc": "Cc:",
            "bcc": "Bcc:",
            "subject": "Betreff:",
            "cc-ccn": "Cc/Bcc",
            "cc-simple": "Cc",
            "sender": "Absender",
            "recipients": "Empfänger",
            "read-confirmation": "Lesebestätigung"
          },
          "models": {
            "title": "Neue Vorlage",
            "action": {
              "save": "Speichern"
            }
          },
          "choose-from-address-book": "Aus Adressbuch wählen",
          "saved-now": "Gerade gespeichert",
          "saved-on-minute": "Vor 1 Minute gespeichert",
          "saved-on-minutes": "Vor {{minutes}} Minuten gespeichert",
          "search-input": {
            "suggested-contacts": "VORGESCHLAGENE KONTAKTE",
            "address-book-contacts": "KONTAKTE IM ADRESSBUCH"
          },
          "sheet-modal-priority": {
            "title": "Hohe Priorität",
            "option": {
              "title": "Als hohe Priorität markieren",
              "sub-title": "Zeigen Sie dem Empfänger, dass Ihre Nachricht dringend ist."
            },
            "toast": {
              "priority-set": "Hohe Priorität ein.",
              "priority-unset": "Hohe Priorität aus.",
              "need-recipients": "Empfänger eingeben"
            }
          },
          "placeholders": {
            "ai-generate-prefix": "Sagen Sie mir, wie ich helfen kann, z. B.",
            "ai-generate-1": "Schreibe eine E-Mail, um das Team an die Frist für die Abgabe der Unterlagen zu erinnern.",
            "ai-generate-2": "Schreibe eine E-Mail mit meiner Bewerbung als Projektmanager.",
            "ai-generate-3": "Schreibe eine E-Mail, um meine Freunde am Samstag zum Geburtstagsessen einzuladen.",
            "ai-generate-4": "Schreibe eine E-Mail, um den Erhalt des Angebots zu bestätigen.",
            "ai-generate-5": "Schreibe eine E-Mail, um eine Fristverlängerung für die Projektabgabe zu erbitten.",
            "ai-generate-6": "Schreibe eine E-Mail, um einem Freund für die Hilfe beim Umzug zu danken.",
            "ai-generate-7": "Schreibe eine E-Mail, um ein wöchentliches Abstimmungsgespräch mit dem Kunden anzufragen.",
            "ai-generate-8": "Schreibe eine E-Mail, um Urlaub über Weihnachten zu beantragen.",
            "ai-generate-9": "Schreibe eine E-Mail, um einem Kollegen für die Hilfe bei einem komplexen Projekt zu danken.",
            "ai-generate-10": "Schreibe eine E-Mail, um die Kollegen über meine Abwesenheit nächste Woche zu informieren.",
            "ai-reply-1": "Sagen Sie mir, welche Informationen die Antwort enthalten soll und in welchem Ton",
            "ai-refine-1": "Sagen Sie mir, was Sie an der Nachricht verbessern möchten (z. B. Zeichensetzung korrigieren oder Text übersetzen)"
          },
          "actions": {
            "ai-insert-proposal": "Eingeben",
            "ai-update-proposal": "Ersetzen",
            "ai-revert-text": "Zurück zur alten Version",
            "ai-cancel": "Abbrechen",
            "ai-copy-text": "Text kopieren",
            "ai-work-in-progress": "Wird generiert...",
            "ai-disclaimer": "KI kann Fehler machen. Ihre Daten sind geschützt und werden nicht zum Training von Modellen verwendet.",
            "ai-prompt-ok": "Generieren",
            "ai-prompt-placeholder": "Prompt...",
            "ai-generate": "Hilf mir beim Schreiben",
            "ai-reply": "Hilf mir beim Antworten",
            "ai-refine": "Hilf mir beim Korrigieren",
            "ai-compact": "Zusammenfassen",
            "ai-expand": "Länger machen",
            "ai-formalize": "Förmlicher",
            "ai-friendlify": "Freundlicher",
            "ai-toggle": "KI-Werkzeugleiste aktivieren",
            "editor-style-toggle": "Werkzeugleiste aktivieren",
            "tag-beta": "Beta",
            "tag-promo": "NEU",
            "send": "Senden",
            "save-draft": "In Entwürfen speichern",
            "attachments": {
              "label": "Anhängen",
              "from-pc": "Vom Gerät hochladen",
              "from-file": "Aus Webmail-Dateien anhängen",
              "from-aruba": "Von Aruba Drive hochladen",
              "from-dropbox": "Von Dropbox hochladen"
            },
            "digital-signature": "Anhänge digital signieren",
            "more": "Mehr",
            "priority": "Priorität",
            "signatures": "Signatur einfügen",
            "no-signatures": "Keine Signatur",
            "create-new-signature": "Neu erstellen",
            "show-reply": "Originalnachricht anzeigen",
            "settings": {
              "actives": "Angewendete Einstellungen:",
              "read-confirmation": "Lesebestätigung",
              "high-priority": "Hohe Priorität",
              "smime": "S/MIME-Zertifikat",
              "smime-expired": "Ungültiges Zertifikat"
            },
            "more-actions": {
              "high-priority": "Als hohe Priorität markieren",
              "delete-high-priority": "Hohe Priorität entfernen",
              "ask-read-confirm": "Lesebestätigung anfordern",
              "no-read-confirmation": "Lesebestätigung deaktivieren",
              "active-limitations": "Vertraulichkeitsbeschränkungen aktivieren",
              "cancel-limitations": "Vertraulichkeitsbeschränkungen entfernen",
              "models": "Vorlagen",
              "receipt-to-obtain": "Wählen Sie die gewünschte Bestätigung",
              "set-confidential": "Vertraulichen Modus aktivieren/deaktivieren",
              "cancel-confidential": "Vertraulichen Modus deaktivieren",
              "save-as-new-model": "Als Vorlage speichern",
              "smime": "<span style='margin-left:6px;'>Mit S/MIME zertifizieren</span>",
              "cancel-smime": "S/MIME deaktivieren",
              "smime-news": "<div style='display:flex;align-items:center;justify-content:space-between;margin-left:6px;'><p style='margin: 0;'>S/MIME-Zertifikat</p><div style='background: linear-gradient(132deg, #018223 0%, #558201 100%); color: #FFFFFF;font-family: Lato, sans-serif; font-size: smaller; font-weight: 700; line-height: 12px; padding: 2px 8px; border-radius: 100px; margin-left: 10px;'>NEU</div></div>"
            }
          },
          "sheet-modal-limitation": {
            "title": "Vertraulichkeitsbeschränkungen aktivieren",
            "option": {
              "nothing": "Keine"
            }
          },
          "allegato-trigger": "angehängt",
          "attachment-dialog": {
            "title": "Anhang fehlt",
            "body": "Sie haben „{{word}}“ geschrieben, aber Ihrer Nachricht ist keine Datei angehängt. Trotzdem senden?"
          },
          "attachment-size-dialog": {
            "title-max-number": "",
            "title-max-file-size": "",
            "title-max-total-size": "",
            "title-space-full": "",
            "manage-settings": "",
            "cancel": "",
            "message": ""
          },
          "message-quota-exceeded-dialog": {
            "title": "Postfachspeicher voll",
            "body": "Ihr Postfachspeicher ist voll.<br/>Ihre Nachricht kann gesendet, aber nicht gespeichert werden.",
            "send": "Senden",
            "back-to-editor": "Zurück zum Editor"
          },
          "subject-dialog": {
            "title": "Betreff fehlt",
            "body": "Möchten Sie die Nachricht ohne Betreff senden?"
          },
          "aruba-drive-not-connected": {
            "title": "Aruba Drive",
            "p1": "Archivieren, bearbeiten und teilen Sie alle Ihre Dateien mit Aruba Drive, dem Cloud-Speicher mit unbegrenztem Speicherplatz und zahlreichen integrierten Funktionen für mehr Produktivität. {{linkText}}",
            "p2": " Um Dateien aus Ihrem Drive an Nachrichten anzuhängen, <strong>müssen Sie den Dienst mit Webmail verbinden</strong>. Gehen Sie dazu in den Bereich Aruba Drive in den Einstellungen.",
            "link-text": "Mehr erfahren",
            "cancel": "Abbrechen",
            "go-to-settings": "Zu den Einstellungen"
          },
          "aruba-drive-connected": {
            "title": "Aus Aruba Drive anhängen",
            "input-search": "Suchen...",
            "tabs": {
              "my-files": "Meine Dateien",
              "upload": "Hochladen"
            },
            "select": {
              "main": "Hauptordner"
            },
            "actions": {
              "insert-link": "Link einfügen",
              "attach-file": "Datei anhängen",
              "insert-n-link": "{{number}} Links einfügen",
              "attach-n-file": "{{number}} Dateien anhängen"
            },
            "table": {
              "file-name": "Datei",
              "items-selector": "Elemente pro Seite:",
              "header": {
                "columns": {
                  "name": "Name",
                  "last-edit": "Zuletzt bearbeitet",
                  "dimension": "Größe",
                  "saved-in": "Gespeichert in"
                }
              },
              "empty": {
                "title": "Bilder hierher ziehen oder",
                "select-file": "Datei auswählen",
                "max-size": "Maximal zulässige Größe: 42 MB",
                "drag-drop-file": "Dateien hierher ziehen"
              },
              "sort": {
                "name-descending": "Name (Z–A)",
                "name-ascending": "Name (A–Z)",
                "modified-descending": "Zuletzt bearbeitet (neueste)",
                "modified-ascending": "Zuletzt bearbeitet (älteste)",
                "dimension-descending": "Größe (größte)",
                "dimension-ascending": "Größe (kleinste)"
              }
            },
            "p1": "Archivieren, bearbeiten und teilen Sie alle Ihre Dateien mit Aruba Drive, dem Cloud-Speicher mit unbegrenztem Speicherplatz und zahlreichen integrierten Funktionen für mehr Produktivität. Mehr erfahren",
            "p2": " Um Dateien aus Ihrem Drive an Nachrichten anzuhängen, <strong>müssen Sie den Dienst mit Webmail verbinden</strong>. Gehen Sie dazu in den Bereich Aruba Drive in den Einstellungen.",
            "add-link": "Link einfügen",
            "attach-file": "Datei anhängen"
          },
          "toast": {
            "saved-template": "Vorlage gespeichert.",
            "saved-draft": "Nachricht in Entwürfen gespeichert."
          }
        },
        "save-draft": {
          "title": "In Entwürfen speichern",
          "body": "Möchten Sie die Nachricht in den Entwürfen speichern?"
        },
        "tag": {
          "label": "Label",
          "new": "Neues Label erstellen",
          "new-header": "Label erstellen",
          "edit-header": "Label bearbeiten",
          "save": "Speichern",
          "cancel": "Abbrechen",
          "name": "Labelname",
          "color": "Farbe",
          "placeholder": "z. B. Arbeit",
          "placeholder_preview": "Arbeit",
          "apply": "Anwenden",
          "message": {
            "name-not-valid": "Name eingeben"
          }
        },
        "delete_tag": {
          "header": "Label löschen",
          "question": "Möchten Sie das Label {{ tagName }} wirklich löschen?",
          "actions": {
            "yes": "Ja",
            "no": "Nein"
          }
        },
        "import": {
          "header": "Nachrichten importieren",
          "label": "Wählen Sie Nachrichten zum Importieren in Ihre Webmail",
          "label_select": "*Wählen Sie eine oder mehrere .eml-, .mbox- oder .pst-Dateien",
          "upload": "Vom Gerät hochladen",
          "import": "Importieren",
          "max_size_message": "Maximale Dateigröße",
          "max_number_files_message": "Maximale Anzahl Dateien",
          "allowed_types_message": "Zulässige Formate",
          "size_error_label": "Datei zu groß.",
          "type_error_label": "Falsches Format.",
          "number_files_error_label": "Zu viele Dateien.",
          "generic_error_label": "Fehler beim Laden.",
          "upload-button": "Vom Gerät auswählen",
          "folder": {
            "label": "Ordner",
            "placeholder": "Ordner auswählen"
          },
          "toast": {
            "select-file-eml": "Wählen Sie eine .eml-Datei"
          }
        },
        "folder": {
          "allowed-chars": "Zulässige Zeichen: ! # $ * , - 0-9 : ; = @ A-Z [ ] ^ _ a-z | ~",
          "title": {
            "new": "Neuer Ordner",
            "new-subfolder": "Neuer Ordner",
            "edit": "Ordner bearbeiten",
            "move": "Ordner verschieben",
            "export-folder": "Ordner exportieren"
          },
          "labels": {
            "name": "Ordnername",
            "below": "Speicherort",
            "export-folder": "Ordner exportieren",
            "export-folder-message": "Dieser Vorgang kann etwas dauern. Die Exportdauer hängt von der Internetverbindung und der Anzahl der zu exportierenden Nachrichten ab."
          },
          "placeholders": {
            "name": "Ordnername",
            "below": "Meine Ordner",
            "export-folder": "Ordner exportieren"
          },
          "actions": {
            "save": "Speichern",
            "cancel": "Abbrechen",
            "close": "Schließen",
            "export-folder": "Ordner exportieren"
          },
          "format-type": {
            "mbox": "mbox-Format",
            "apple-mbox": "Apple-Mail-mbox-Format"
          },
          "message": {
            "name-not-valid": "Name eingeben",
            "trailing-space-not-allowed": "Leerzeichen am Ende nicht erlaubt",
            "parent-name-not-valid": "Der Ordner existiert bereits am gewählten Speicherort"
          }
        },
        "delete-message": {
          "header": "Nachrichten löschen",
          "text": {
            "trash": "Möchten Sie die im <b>{} Papierkorb</b> ausgewählten Nachrichten wirklich endgültig löschen?",
            "trash-external": "Möchten Sie die ausgewählten Nachrichten wirklich endgültig löschen?",
            "spam": "Möchten Sie die im <b>Spam-Ordner</b> ausgewählten Nachrichten wirklich endgültig löschen?",
            "archive": "Möchten Sie die ausgewählten Nachrichten wirklich endgültig löschen?"
          },
          "confirm": "Endgültig löschen",
          "cancel": "Abbrechen"
        },
        "delete-folder": {
          "header": "Ordner löschen",
          "text": "Möchten Sie den Ordner <b>{{ folder }}</b> samt Inhalt wirklich in den Papierkorb verschieben?",
          "text-danger": "Möchten Sie den Ordner <b>{{ folder }}</b> samt Inhalt wirklich <b>endgültig</b> löschen?",
          "confirm": "Löschen",
          "cancel": "Abbrechen"
        },
        "delete-multiple-folders": {
          "header": "Ordner löschen",
          "text": "Möchten Sie die {{foldersLength}} Ordner samt Inhalt wirklich in den Papierkorb verschieben?",
          "text-danger": "Möchten Sie die {{foldersLength}} ausgewählten Ordner samt Inhalt wirklich <b>endgültig</b> löschen?",
          "text-mixed": "Möchten Sie die Ordner im Papierkorb samt Inhalt wirklich <b>endgültig</b> leeren?<br/><br/>Die anderen ausgewählten Ordner außerhalb des Papierkorbs werden <b>in den Papierkorb verschoben</b>.",
          "confirm": "Löschen",
          "confirm-mixed": "Löschen und verschieben",
          "cancel": "Abbrechen"
        },
        "attachment": {
          "title": "Anhänge",
          "tooltip": "Anhang/Anhänge",
          "preview-not-available": "Vorschau nicht verfügbar",
          "p7m-disclaimer": ".p7m-Dateien sind digital signiert. <strong>Diese Vorschau zeigt das Originaldokument ohne Signaturen</strong>. Um die vollständige signierte Datei zu sehen, laden Sie sie herunter und öffnen Sie sie mit einer Signatursoftware wie Aruba Sign.",
          "pdf-viewer": {
            "page-of": "von"
          }
        },
        "sign-attachment": {
          "title": "Digital signieren und anhängen",
          "label": "Ziehen Sie die zu signierenden Dokumente hierher oder",
          "button-label": "Zu signierende Dokumente auswählen",
          "error-number-files": "Die maximale Anzahl an Dateien beträgt {{maxNumberFiles}}",
          "error-size-files": "Dateigröße nicht unterstützt",
          "not-have": "<b>Keine digitale Signatur?</b>",
          "not-have-partners": "<b>Keine digitale Signatur?</b> Wenden Sie sich an Ihren Dienstanbieter <b>{{reseller}}</b>.",
          "info-text": "Die beste digitale Signatur, um <b>elektronische Dokumente aus der Ferne</b> sicher zu signieren – per Smartphone, Tablet, PC oder Mac",
          "info-button": "Mehr erfahren",
          "remove": "Löschen",
          "next-sign": "Weiter und signieren",
          "cancel-sign": "Signatur abbrechen",
          "next-step": "Weiter",
          "selected-elements": "Elemente ausgewählt",
          "select-all": "Alle auswählen",
          "step1": {
            "label": "Digitale Signatur wählen",
            "format": "Format",
            "box1_title": "Fernsignatur",
            "box1_text": "Geben Sie zum Signieren Ihre Anmeldedaten für die Aruba-Fernsignatur ein.",
            "box2_title": "Digitale Signatur mit Gerät",
            "box2_title-pec": "Digitale Signatur eines beliebigen Anbieters",
            "box2_text": "Verbinden Sie zum Signieren das Signaturgerät mit Ihrem PC und geben Sie die PIN ein",
            "infobox": {
              "title": "Keine digitale Signatur?",
              "description": "Elektronische Dokumente aus der Ferne sicher signieren – per Smartphone, Tablet, PC oder Mac",
              "description-partners": "Wenden Sie sich an Ihren Dienstanbieter <b>{{reseller}}</b>.",
              "button": "Kaufen"
            }
          },
          "step2": {
            "remote": {
              "label": "Anmeldedaten eingeben",
              "title": "Geben Sie Ihre Anmeldedaten für die Fernsignatur ein",
              "username": "Benutzername Fernsignatur",
              "username_button": "Benutzername vergessen?",
              "username_placeholder": "benutzername@domain",
              "username_error": "Ungültiger Benutzername",
              "username_save": "Benutzername speichern",
              "password": "Passwort",
              "password_button": "Passwort vergessen?",
              "password_placeholder": "Passwort eingeben",
              "password_error": "Falsches Passwort",
              "domain": "Wenn Sie eine eigene Signatur-Domain haben, geben Sie den Benutzernamen im Format benutzername@domain ein."
            },
            "device": {
              "label": "Voraussetzungen",
              "title": "Digitale Signatur mit Gerät",
              "title-pec": "Digitale Signatur eines beliebigen Anbieters",
              "description": "Prüfen Sie, ob Sie alles zum Signieren des Dokuments haben, und folgen Sie den Anweisungen",
              "whatneed": "Was Sie benötigen",
              "need1": "<b>Signaturgerät</b>, mit dem PC verbunden",
              "need2": "<b>PIN</b> des Geräts",
              "buybox_title": "Keine digitale Signatur?",
              "buybox_description": "Aruba Digitale Signatur erwerben",
              "buybox_description-partners": "Wenden Sie sich an Ihren Dienstanbieter <b>{{reseller}}</b>.",
              "buybox_button": "Kaufen"
            }
          },
          "step3": {
            "remote": {
              "label": "OTP-Code eingeben",
              "title": "Geben Sie den OTP-Bestätigungscode ein",
              "description": "Holen Sie sich einen OTP-Code über die App <b>Aruba OTP</b> oder einen der verfügbaren Dienste und geben Sie ihn ein, um sich zu authentifizieren und Ihre Dokumente zu signieren. Alternativ können Sie, falls aktiviert, einen Code über <b>Aruba SMS</b> oder <b>Aruba Call</b> erhalten.",
              "arubacall": {
                "button": "Aruba Call",
                "title": "Aruba Call",
                "description": "Gleich erhalten Sie einen Anruf auf Ihrem Mobiltelefon. Die letzten 4 Ziffern der anrufenden Nummer sind der einzugebende OTP-Code."
              },
              "arubasms": {
                "button": "Aruba SMS",
                "title": "Aruba SMS",
                "description": "Gleich erhalten Sie eine SMS mit dem einzugebenden OTP-Code auf Ihr Mobiltelefon."
              },
              "otp": "OTP",
              "error-otp": "Ungültiges OTP"
            },
            "device": {
              "label": "Zertifikat auswählen",
              "title": "Zertifikat auswählen",
              "signature": {
                "loading-title": "Verbinden Sie Ihr Gerät mit dem Computer",
                "description": "Warte auf Gerät...",
                "cancel": "Signatur abbrechen"
              },
              "no-certificate": {
                "title": "Kein Zertifikat gefunden",
                "text": "Um Ihre Zertifikate zu sehen, verbinden Sie Ihr Gerät mit dem PC und laden Sie die Seite neu",
                "reload": "Seite neu laden"
              },
              "pin-error": {
                "title": "Digitale Signatur",
                "text": "PIN falsch oder fehlt"
              },
              "error-connection": {
                "title": "Bei der Verbindung mit dem Gerät ist ein Fehler aufgetreten",
                "text": "bitte erneut versuchen"
              },
              "certificate": "Zertifikat"
            },
            "signature": {
              "loading-title": "Lade Dokument {{index}} von {{total}}",
              "description": "Dies kann einige Minuten dauern.<br/>Warten Sie, bis der Upload abgeschlossen ist, oder brechen Sie die Signatur ab",
              "cancel": "Signatur abbrechen"
            },
            "sdk": {
              "title": "Aruba Web SDK installieren",
              "s1_title": "Erweiterung Aruba Web SDK installieren oder aktualisieren",
              "s1_text": "Um Ihr Zertifikat für die digitale Signatur zu verwenden, müssen Sie die neueste Version der Erweiterung für Ihren Browser installieren oder aktualisieren.",
              "s1_text-pec": "Um das Signaturzertifikat eines beliebigen Anbieters zu verwenden, müssen Sie die neueste Version der Erweiterung für Ihren Browser installieren oder aktualisieren.",
              "s1_button_windows": "Für Windows herunterladen",
              "s1_button_mac": "Für Mac herunterladen",
              "s2_title": "Erweiterung öffnen",
              "s2_text": "Öffnen Sie nach der Installation der Erweiterung die Datei „filename.exe“ und wählen Sie „Dateien dieses Typs immer mit der zugehörigen Anwendung öffnen“.",
              "s3_title": "Seite neu laden",
              "s3_text": "Laden Sie am Ende des Installationsassistenten die Seite neu und fahren Sie fort",
              "reload": "Seite neu laden"
            }
          },
          "step4": {
            "label": "Zusammenfassung",
            "report": "Bericht der hochgeladenen Dokumente",
            "esito": "Ergebnis",
            "save-documents": "Dokumente speichern",
            "all-signed": {
              "title": "Die ausgewählten Dokumente wurden signiert"
            },
            "some-signed": {
              "title": "Einige Dokumente wurden nicht signiert",
              "error-title": "Nicht alle ausgewählten Dokumente können angehängt werden",
              "error-description": "Einige ausgewählte Dokumente enthalten Fehler. Details finden Sie im Ergebnis."
            },
            "all-error": {
              "title": "Die ausgewählten Dokumente wurden nicht signiert",
              "error-title": "Die Dokumente konnten nicht angehängt werden",
              "error-description": "Die ausgewählten Dokumente enthalten Fehler. Details finden Sie im Ergebnis.",
              "error-description-certificate": "Sie haben ein abgelaufenes Zertifikat ausgewählt.<a href=''></a><br/> Wählen Sie ein anderes Zertifikat oder stecken Sie ein neues Gerät ein und laden Sie die Seite neu."
            }
          }
        },
        "block-sender": {
          "header": "Absender blockieren",
          "text": "Möchten Sie <b>{{ senderMail }}</b> wirklich blockieren?<br><br>Alle Nachrichten dieses Absenders werden automatisch abgelehnt und nicht zugestellt.<br><br>Blockierte Absender können Sie jederzeit unter <b>Einstellungen</b> > <b>Konto und Sicherheit</b> > <b>Junk-Mail</b> verwalten.",
          "yes": "Blockieren",
          "no": "Abbrechen"
        },
        "show-header": {
          "title": "Nachrichtendetails anzeigen",
          "close": "Schließen"
        },
        "restrictions": {
          "header": "Wählen Sie die anzuwendenden Einschränkungen",
          "title": "Vertraulichkeitsstufe wählen",
          "sub-title": "Einheitliche Funktion ist nur in der Webmail garantiert",
          "options": {
            "none": "Keine",
            "private": "Privat",
            "private-subtitle": "Empfänger können diese Nachricht nicht weiterleiten oder allen antworten",
            "confidential": "Vertraulich",
            "company-confidential": "Vertraulich",
            "company-confidential-subtitle": "Diese Nachricht als vertraulich markieren",
            "confidential-subtitle": "Empfänger können diese Nachricht nicht weiterleiten, allen antworten, kopieren oder drucken",
            "reserved": "Streng vertraulich",
            "riservate-subtitle": "Empfänger können diese Nachricht nicht weiterleiten, allen antworten, kopieren, drucken oder exportieren"
          }
        },
        "confidential": {
          "header": "Wählen Sie die gewünschte Bestätigung",
          "title": "Wählen Sie die Art der Bestätigung, die Sie bei Zustellung der Nachricht erhalten möchten",
          "options": {
            "complete": "Voll",
            "complete-subtitle": "Bestätigung mit Zertifizierungsdaten und Originalnachricht",
            "short": "Kurz",
            "short-subtitle": "Zertifizierungsdaten und ein Auszug der Originalnachricht sind angehängt",
            "synthetic": "Zusammenfassung",
            "synthetic-subtitle": "Nur Zertifizierungsdaten angehängt",
            "receipt-complete": "Vollständige Bestätigung",
            "receipt-short": "Kurze Bestätigung",
            "receipt-synthetic": "Zusammenfassende Bestätigung"
          }
        },
        "smime": {
          "header": "Mit S/MIME zertifizieren",
          "title": "Schützen Sie Ihre Nachrichten mit dem S/MIME-Zertifikat, dem Protokoll zum digitalen Signieren Ihrer E-Mails, das Zuverlässigkeit, Authentizität und Integrität Ihrer Kommunikation sicherstellt.",
          "subtitle": "Wählen Sie die gewünschte Option für mehr Sicherheit.",
          "checkbox-title": "S/MIME-Signatur",
          "checkbox-subtitle": "Prüft die Identität des Absenders und garantiert, dass der Inhalt dem Original entspricht.",
          "title-empty": "Machen Sie Ihre Korrespondenz zuverlässiger und sicherer mit dem S/MIME-Zertifikat, mit dem Empfänger die Integrität des Inhalts und die Vertrauenswürdigkeit des Absenders prüfen können.",
          "subheader-empty": "Haben Sie ein S/MIME-Zertifikat?",
          "subtitle-empty": "Um Ihre E-Mails zu zertifizieren, importieren Sie das von der zuständigen Stelle ausgestellte Zertifikat in den Einstellungen unter „Konto und Sicherheit“.",
          "settings": "Zu den Einstellungen",
          "confirm": "Bestätigen",
          "cancel": "Abbrechen",
          "warnings": {
            "message-expiring": "Das Standardzertifikat läuft bald ab. Prüfen Sie den Status in den Einstellungen.",
            "title-expiring": "Zertifikat läuft bald ab.",
            "message-expired": "Dieses Zertifikat kann nicht als Standardzertifikat verwendet werden, da es ungültig ist. Prüfen Sie den Status in den Einstellungen.",
            "title-expired": "Zertifikat für die Signatur ungültig."
          }
        },
        "smime-expired": {
          "header": "Zertifikat ungültig",
          "title": "Die Nachricht konnte nicht authentifiziert werden, da das Standardzertifikat nicht mehr gültig ist. Laden Sie in den Einstellungen ein anderes hoch oder wählen Sie ein anderes aus.",
          "subtitle": "Um die Nachricht ohne Zertifikat zu senden, können Sie die gewählte Einstellung entfernen."
        },
        "confidential-mode-pec": {
          "header": "Vertraulichen Modus aktivieren oder deaktivieren",
          "title": "Wählen Sie die Art der Bestätigung, die Sie bei Zustellung der Nachricht erhalten möchten",
          "options": {
            "confidential": "Vertraulich",
            "confidential-subtitle": "Empfänger sehen ein Symbol, das Ihre Nachricht als vertraulich kennzeichnet."
          }
        },
        "bottom-sheet": {
          "attachment": {
            "title": "Anhang einfügen"
          },
          "more": {
            "title": "Weitere Aktionen"
          },
          "actions": {
            "folder-actions": "Aktionen"
          }
        },
        "detail": {
          "confirm-read-paragraph": "Für diese Nachricht wurde eine Lesebestätigung angefordert. Möchten Sie eine senden?"
        },
        "postpone": {
          "title": "Datum und Uhrzeit wählen",
          "text": "Wählen Sie Datum und Uhrzeit, zu der die Nachricht wieder in Ihrem „Posteingang“ erscheinen soll.",
          "fields": {
            "date": "Datum wählen",
            "hour": "Uhrzeit wählen"
          },
          "actions": {
            "confirm": "Speichern",
            "cancel": "Abbrechen"
          }
        },
        "import-image": {
          "title": "Bild einfügen",
          "label": "Bilder hierher ziehen oder",
          "allowed-extension": "Zulässige Erweiterungen",
          "tabs": {
            "titles": {
              "upload-file": "Datei hochladen",
              "copy-url": "Webadresse (URL) kopieren"
            },
            "max-size-message": {
              "info": "Maximale Dateigröße",
              "error": "Datei zu groß."
            },
            "type-error": "Falsches Format",
            "max-number-of-file": {
              "info": "Maximale Anzahl Dateien",
              "error": "Zu viele Dateien."
            },
            "generic": {
              "error": "Beim Laden ist ein Fehler aufgetreten."
            },
            "input-labels": {
              "insert-url": "Bild-URL eingeben",
              "text-to-visualize": "Anzuzeigenden Text eingeben",
              "placeholders": {
                "link": "Link",
                "text": "Text"
              }
            },
            "general-info": {
              "message": "Ist die URL korrekt, wird eine Vorschau des Bildes angezeigt",
              "error": "Bildvorschau kann nicht angezeigt werden."
            },
            "actions": {
              "insert": "Einfügen"
            }
          },
          "format-error": "Fügen Sie ein Foto im JPEG- oder PNG-Format ein."
        },
        "space-usage": {
          "title": "Belegter Speicher",
          "folder-name": "Ordnername",
          "message-number": "Anzahl der Nachrichten",
          "space-usage": "Belegter Speicher"
        },
        "event": {
          "header": {
            "decline": "Möchten Sie den Termin ablehnen?"
          },
          "placeholder": {
            "message": "Nachricht eingeben"
          },
          "send_delete": {
            "message": "Wenn Sie den Termin ablehnen, wird der Organisator per E-Mail benachrichtigt.",
            "label": "Nachricht an den Organisator hinzufügen"
          }
        },
        "actions": {
          "cancel": "Abbrechen",
          "decline": "Ablehnen"
        },
        "save-message": {
          "title": "Kopie speichern",
          "fields": {
            "folder": {
              "label": "Kopie der Nachricht im Ordner speichern"
            }
          },
          "actions": {
            "confirm": "Kopie speichern",
            "cancel": "Nicht speichern"
          }
        },
        "insert-link": {
          "title": "Link einfügen",
          "fields": {
            "url": {
              "label": "Webadresse (URL)",
              "placeholder": "Link hier einfügen"
            },
            "text": {
              "label": "Anzuzeigender Text",
              "placeholder": "Text"
            }
          },
          "actions": {
            "confirm": "Einfügen",
            "update": "Aktualisieren",
            "unlink": "Link entfernen",
            "cancel": "Abbrechen"
          }
        },
        "move-message": {
          "header": "Verschieben",
          "header-preservation": "Möchten Sie diese Nachrichten verschieben?",
          "header-spam-single": "Nachricht in Spam verschieben",
          "header-spam-plural": "Nachrichten in Spam verschieben",
          "confirm-question": "Möchten Sie die ausgewählten Nachrichten wirklich nach <b>{{ folder }}</b> verschieben?",
          "confirm-question-preservation": "Wenn Sie fortfahren, werden die ausgewählten Nachrichten in den Ordner „Zur digitalen Archivierung“ verschoben und sind in ihrem ursprünglichen Ordner nicht mehr sichtbar.",
          "confirm-question-spam-single": "Wenn Sie fortfahren, wird die Nachricht <b>in den Spam-Ordner verschoben</b> und an Aruba gemeldet, das ihre Sicherheitsstufe prüft. <br><br>Möchten Sie wirklich fortfahren?",
          "confirm-question-spam-plural": "Wenn Sie fortfahren, werden die Nachrichten <b>in den Spam-Ordner verschoben</b> und an Aruba gemeldet, das ihre Sicherheitsstufe prüft. <br><br>Möchten Sie wirklich fortfahren?",
          "actions": {
            "move": "Verschieben",
            "move-preservation": "Nachrichten verschieben",
            "cancel": "Abbrechen"
          }
        },
        "new-folders": {
          "title": "Neue Ordnerverwaltung",
          "message": "In den Einstellungen finden Sie u. a. Informationen zum Speicherverbrauch der Ordner und die neue Ordnerverwaltung.",
          "buttons": {
            "confirm": "Einstellungen",
            "cancel": "Abbrechen"
          }
        },
        "save-contacts": {
          "title": "Neue Empfänger hinzufügen",
          "description": "Diese Empfänger sind nicht in Ihren Kontakten. Wählen Sie, welche im persönlichen Adressbuch gespeichert werden sollen.",
          "add": "Hinzufügen",
          "email-type": "E-Mail-Typ",
          "personal": "Persönlich",
          "business": "Arbeit",
          "first-name": "Name",
          "last-name": "Nachname",
          "address-book": "Adressbuch",
          "group": "Gruppe",
          "group-placeholder": "Gruppe auswählen",
          "toast-message": {
            "success": "Kontakte gespeichert",
            "error": "Kontakte konnten nicht gespeichert werden"
          }
        },
        "incorrect-pin": {
          "header": "Falsche PIN",
          "message": "Diese Aktion kann nicht abgeschlossen werden, da die eingegebene PIN falsch ist.",
          "again": "Erneut versuchen"
        },
        "navigate-out": {
          "header": "Sie verlassen gleich Ihr externes Postfach",
          "message": "Sie schließen den Bereich Nachrichten Ihres externen Postfachs.<br><br>Alle<strong> anderen Bereiche</strong> der Webmail, die angezeigt werden, <strong>gehören zu Ihrem Hauptpostfach {{account}}</strong>",
          "not-show-again": "Nicht mehr anzeigen",
          "close": "Schließen"
        },
        "exhibit-message-dialog": {
          "title": "Archivierte Dokumente herausgeben",
          "description": "Geben Sie einen Namen an, um die Herausgabe in Ihrem Anfrageverlauf zu erkennen.",
          "name-exhibit": "Name der Herausgabe",
          "placeholder": "Z. B. E-Mail Gemeinderat",
          "exhibit": "Herausgeben",
          "cancel": "Abbrechen"
        },
        "exhibit-all-messages-dialog": {
          "title": "Alle archivierten Dokumente herausgeben",
          "title-description": "Dieser Vorgang kann etwas dauern.",
          "description": "Wir senden Ihnen eine E-Mail, sobald die Herausgabe aller Dokumente zum Download bereitsteht.",
          "button-close": "Schließen"
        }
      },
      "filter": {
        "sort": {
          "header": "Sortieren nach...",
          "newer": "Neueste",
          "older": "Älteste",
          "bigger": "Größte",
          "smaller": "Kleinste",
          "sender-a-z": "Absender (A–Z)",
          "sender-z-a": "Absender (Z–A)",
          "subject-a-z": "Betreff (A–Z)",
          "subject-z-a": "Betreff (Z–A)",
          "with-attachment": "Mit Anhängen",
          "no-attachment": "Keine Anhänge",
          "with-priority": "Priorität",
          "no-priority": "Keine Priorität"
        },
        "all": "Alle",
        "read": "Gelesen",
        "unread": "Ungelesen",
        "hide-receipt": "Bestätigungen ausblenden",
        "show-receipt": "Bestätigungen anzeigen",
        "hide-receipt-message-close": "Schließen",
        "hide-receipt-message": "Bestätigungen wurden ausgeblendet, <b>Fehlermeldungen werden aber weiterhin angezeigt</b>. Ungelesene Nachrichten umfassen auch ungelesene ausgeblendete Bestätigungen.",
        "PEC-only": "Nur PEC",
        "noPEC-only": "Nur Nicht-PEC",
        "receipt-only": "Nur Bestätigungen",
        "errors-only": "Nur Fehlermeldungen",
        "invoices-only": "Nur Rechnungen"
      },
      "toast": {
        "move-to": {
          "success": "Nachricht nach {{ folderName }} verschoben",
          "success-preservation": "Nachricht in den Ordner „{{folderName}}“ verschoben. Sie wird innerhalb von 72 Stunden zur digitalen Archivierung gesendet.",
          "error": "Beim Verschieben der Nachricht nach {{ folderName }} ist ein Fehler aufgetreten",
          "success-multi": "Nachrichten nach {{ folderName }} verschoben",
          "success-multi-preservation": "Nachrichten in den Ordner „{{folderName}}“ verschoben. Sie werden innerhalb von 72 Stunden zur digitalen Archivierung gesendet.",
          "error-multi": "Beim Verschieben der Nachrichten nach {{ folderName }} ist ein Fehler aufgetreten"
        },
        "move-to-spam": {
          "success": "Die ausgewählte Nachricht wurde als Spam markiert und in den Ordner {{ folderName }} verschoben",
          "error": "Beim Verschieben der Nachricht nach {{ folderName }} ist ein Fehler aufgetreten",
          "success-multi": "Die ausgewählten Nachrichten wurden als Spam markiert und in den Ordner {{ folderName }} verschoben",
          "error-multi": "Beim Verschieben der Nachrichten nach {{ folderName }} ist ein Fehler aufgetreten"
        },
        "copy-to": {
          "success": "Nachricht nach {{ folderName }} kopiert",
          "success-preservation": "Nachricht in den Ordner „{{folderName}}“ kopiert. Sie wird innerhalb von 72 Stunden zur digitalen Archivierung gesendet.",
          "error": "Beim Kopieren der Nachricht nach {{ folderName }} ist ein Fehler aufgetreten",
          "success-multi": "Ausgewählte Nachrichten nach {{ folderName }} kopiert",
          "success-multi-preservation": "Ausgewählte Nachrichten in den Ordner „{{folderName}}“ kopiert. Sie werden innerhalb von 72 Stunden zur digitalen Archivierung gesendet.",
          "error-multi": "Beim Kopieren der Nachrichten nach {{ folderName }} ist ein Fehler aufgetreten"
        },
        "upload-attachment": {
          "error-size": "Die Gesamtgröße der Anhänge darf das Limit nicht überschreiten.",
          "error-number-files": "Die Gesamtzahl der Anhänge darf das Limit nicht überschreiten.",
          "error-not-allowed-chars": "Aktion konnte nicht abgeschlossen werden. Der Dateiname enthält ungültige Zeichen",
          "error-size-singlefile": "Die Größe der angehängten Datei darf das Limit ({{size}} MB) nicht überschreiten."
        },
        "send-message": {
          "success": "Nachricht gesendet"
        },
        "saved-message": {
          "success": "Nachricht gespeichert"
        },
        "send-message-pending": {
          "pending": "Wird zugestellt.",
          "cancel": "Abbrechen"
        },
        "send-message-and-saved": {
          "success": "Ihre Nachricht wurde gesendet und in „Gesendet“ gespeichert"
        },
        "send-message-not-saved": {
          "not-saved-in-draft": "Ihre Nachricht wurde gesendet, aber nicht in „Gesendet“ gespeichert."
        },
        "retrieve-last-mail": {
          "error": "Beim Abrufen der letzten Nachrichten ist ein Fehler aufgetreten"
        },
        "delete": {
          "success": "Nachricht in den Papierkorb verschoben.",
          "success-multi": "Nachrichten in den Papierkorb verschoben.",
          "def-success": "Nachricht endgültig gelöscht.",
          "def-success-multi": "Nachrichten gelöscht.",
          "error": "Beim Löschen der Nachricht ist ein Fehler aufgetreten."
        },
        "block-sender": {
          "success": "Absender blockiert. Sie erhalten keine E-Mails mehr von dieser Adresse."
        },
        "add-to-safe-users": {
          "success": "Absender zur Liste sicherer Absender hinzugefügt."
        },
        "highlight": {
          "success": "Nachricht wurde angeheftet.",
          "success-multi": "Nachrichten wurden angeheftet.",
          "error": "Beim Anheften der Nachricht ist ein Fehler aufgetreten",
          "error_multi": "Beim Anheften der Nachrichten ist ein Fehler aufgetreten"
        },
        "remove-from-highlight": {
          "success": "Nachricht gelöst.",
          "success-multi": "Nachrichten wurden gelöst.",
          "error": "Beim Lösen der Nachricht ist ein Fehler aufgetreten",
          "error_multi": "Beim Lösen der Nachrichten ist ein Fehler aufgetreten"
        },
        "read-check": {
          "success": "Lesebestätigung gesendet.",
          "error": "Fehler beim Senden der Lesebestätigung."
        },
        "export": {
          "message": {
            "error": "Fehler beim Exportieren der Nachricht"
          },
          "messages": {
            "error": "Fehler beim Exportieren der Nachrichten"
          }
        },
        "tag": {
          "create-success": "Label erstellt.",
          "create-error": "Fehler beim Erstellen des Labels",
          "edit-success": "Label bearbeitet.",
          "edit-error": "Fehler beim Bearbeiten des Labels",
          "delete-success": "Label gelöscht.",
          "delete-error": "Beim Löschen des Labels ist ein Fehler aufgetreten",
          "singular": {
            "add-success": "Nachricht zu „{{tag}}“ hinzugefügt",
            "del-success": "Nachricht aus „{{tag}}“ entfernt"
          },
          "plural": {
            "add-success": "Nachrichten zu „{{tag}}“ hinzugefügt",
            "del-success": "Nachrichten aus „{{tag}}“ entfernt"
          },
          "add-del-success-and": "und",
          "error": "Fehler beim Hinzufügen des Labels"
        },
        "import": {
          "success": {
            "single": "{{messages}} neue ungelesene Nachricht",
            "multiple": "{{messages}} neue ungelesene Nachrichten"
          },
          "error": "Beim Importieren der Nachrichten ist ein Fehler aufgetreten"
        },
        "folder": {
          "new": {
            "success": "Ordner erstellt.",
            "error": "Ordner konnte nicht erstellt werden"
          },
          "edit": {
            "success": "Ordner aktualisiert.",
            "error": "Ordner konnte nicht aktualisiert werden"
          },
          "export-folder": {
            "success": "Ordner exportiert."
          },
          "move": {
            "success": "Ordner verschoben."
          },
          "delete": {
            "success": "Ordner gelöscht.",
            "success-multiple": "Die ausgewählten Ordner wurden gelöscht.",
            "error": "Ordner konnte nicht gelöscht werden",
            "error-multiple": "Ausgewählte Ordner konnten nicht gelöscht werden"
          },
          "move-to-trash": {
            "success": "Ausgewählte Nachrichten wurden in den Papierkorb verschoben"
          }
        },
        "invitation_confirm": {
          "success_1": "Sie haben geantwortet, dass Sie an der Besprechung teilnehmen.",
          "success_4": "Sie haben geantwortet, dass Sie vielleicht an der Besprechung teilnehmen.",
          "success_6": "Sie haben geantwortet, dass Sie nicht an der Besprechung teilnehmen."
        },
        "invitation_counter": {
          "original_event_not_present": "Dieser Termin wurde abgesagt.",
          "original_event_already_updated": "Der Termin wurde bereits auf die gewählte Zeit verschoben."
        },
        "exhibit-selected-messages": {
          "info": "Wir bearbeiten Ihre Anfrage. Prüfen Sie den Status im Herausgabeverlauf.",
          "warning": "Sie können die Herausgabe von bis zu 10 Nachrichten gleichzeitig anfordern",
          "danger": "Sie können heute keine weiteren Herausgaben anfordern, morgen aber fortfahren."
        },
        "exhibit-all-messages": {
          "info": "Wir bearbeiten Ihre Anfrage. Prüfen Sie den Status im Herausgabeverlauf."
        },
        "waiting-for-attachment-loaded": {
          "info": ""
        }
      },
      "detail": {
        "to": "An",
        "cc": "Cc",
        "bcc": "Bcc",
        "me": "mich",
        "others": "andere",
        "show-all-attachments": "Alle Anhänge anzeigen",
        "show-less-attachments": "Weniger Anhänge anzeigen",
        "reply-signature": "Anhänge signieren und antworten",
        "real-sender": "Nachricht gesendet von <b>{{sender}}</b>",
        "download-all": "Alle herunterladen",
        "reply": "Antworten",
        "reply-all": "Allen antworten",
        "forward": "Weiterleiten",
        "actions": {
          "mail-posticipate": "Später erinnern"
        },
        "header": {
          "actions": {
            "expand": "Erweitern/Minimieren",
            "new-window": "In neuem Fenster öffnen",
            "close": "Schließen"
          }
        },
        "open-message": "Nachricht öffnen",
        "ai": {
          "actions": {
            "tag-beta": "Beta",
            "ai-work-in-progress": "Wird generiert...",
            "ai-disclaimer": "KI kann Fehler machen. Ihre Daten sind geschützt und werden nicht zum Training von Modellen verwendet.",
            "ai-detect-language-in-progress": "Sprache wird erkannt...",
            "ai-translate-in-progress": "Wird übersetzt...",
            "ai-summarize": "Alles zusammenfassen",
            "ai-detect-language": "Sprache erkennen und übersetzen",
            "ai-detected-language": "Diese Nachricht ist auf {{language}}",
            "ai-detected-default-language": "Diese Nachricht ist bereits in der in den Einstellungen gewählten Sprache",
            "ai-translate": "Übersetzung anzeigen",
            "ai-translated-language": "Nachricht übersetzt aus dem {{language}}",
            "ai-restore-original": "Original anzeigen"
          },
          "header": {
            "ai-summary": "Zusammenfassung:"
          }
        },
        "attachment": {
          "actions": {
            "download": "Herunterladen",
            "preview": "Vorschau anzeigen",
            "digital-signature": "Signatur",
            "save-file": "In Dateien speichern",
            "save-dropbox": "In Dropbox speichern",
            "save-aruba-drive": "In Aruba Drive speichern",
            "delete": "Anhang löschen",
            "open": "Öffnen",
            "add-to-contacts": "Zu Kontakten hinzufügen"
          },
          "vcard": {
            "added-to-contacts": "Kontakt zum Adressbuch hinzugefügt"
          },
          "dangerous-attachment": {
            "actions": {
              "close": "Schließen",
              "open": "Anhang öffnen",
              "download": "Anhang herunterladen",
              "download-postcert": "postacert.eml herunterladen"
            },
            "header": "Verdächtiger Anhang",
            "learn-more": "Mehr erfahren",
            "confirm": {
              "open": "Möchten Sie ihn trotzdem öffnen?",
              "download": "Möchten Sie ihn trotzdem herunterladen?",
              "postacert": "Möchten Sie postacert.eml trotzdem herunterladen?"
            },
            "message": {
              "macro": {
                "potential": "Der Anhang ist möglicherweise unsicher (kann Makros enthalten).",
                "dangerous": "Der Anhang ist möglicherweise unsicher (enthält Makros)."
              },
              "failed": {
                "potential": "Der Anhang ist möglicherweise unsicher (kann verschlüsselt oder passwortgeschützt komprimiert sein).",
                "dangerous": "Der Anhang ist möglicherweise unsicher (ist verschlüsselt oder passwortgeschützt komprimiert)."
              },
              "both": {
                "potential": "Der Anhang ist möglicherweise unsicher (kann Makros enthalten, verschlüsselt oder passwortgeschützt komprimiert sein).",
                "dangerous": "Der Anhang ist möglicherweise unsicher (enthält Makros, ist verschlüsselt oder passwortgeschützt komprimiert)."
              }
            },
            "postacert": {
              "single": {
                "macro": "Postacert.eml enthält einen möglicherweise unsicheren Anhang (enthält Makros).",
                "failed": "Postacert.eml enthält einen möglicherweise unsicheren Anhang (ist verschlüsselt oder passwortgeschützt komprimiert).",
                "both": "Postacert.eml enthält einen möglicherweise unsicheren Anhang (enthält Makros, ist verschlüsselt oder passwortgeschützt komprimiert)."
              },
              "multi": {
                "macro": "Postacert.eml enthält möglicherweise unsichere Anhänge (enthalten Makros).",
                "failed": "Postacert.eml enthält möglicherweise unsichere Anhänge (sind verschlüsselt oder passwortgeschützt komprimiert).",
                "both": "Postacert.eml enthält möglicherweise unsichere Anhänge (enthalten Makros, sind verschlüsselt oder passwortgeschützt komprimiert)."
              },
              "list": {
                "message": "Postacert.eml enthält möglicherweise unsichere Anhänge.",
                "macro": "Mit Makros:",
                "failed": "Verschlüsselt oder passwortgeschützt komprimiert:"
              }
            }
          },
          "actions-menu": {
            "save-to-file": {
              "toast": {
                "success": "Anhang in Dateien gespeichert"
              }
            },
            "save-to-aruba-drive": {
              "toast": {
                "success": "Datei in Aruba Drive gespeichert"
              }
            }
          }
        },
        "event-invitation": {
          "link-to-event-detail": "Details im Kalender anzeigen",
          "tooltip": "Einladung",
          "others": "andere",
          "all-day": "Ganztägig",
          "conflict": "Konflikt",
          "no-conflict": "Kein Konflikt",
          "counter_declined": "{{sender}} hat abgelehnt und eine neue Zeit vorgeschlagen: {{counterNewDate}} um {{counterNewStartTime}}",
          "counter_allday_declined": "{{sender}} hat abgelehnt und eine neue Zeit vorgeschlagen: {{counterNewDate}}",
          "counter_tentative": "{{sender}} hat vorläufig zugesagt und eine neue Zeit vorgeschlagen: {{counterNewDate}} um {{counterNewStartTime}}",
          "counter_allday_tentative": "{{sender}} hat vorläufig zugesagt und eine neue Zeit vorgeschlagen: {{counterNewDate}}",
          "counter_verify": "Bestätigen",
          "reduce": "minimieren",
          "other_attendees": "{{attendees}} weitere",
          "repetition_options": {
            "no_repetition": "Nicht wiederholen",
            "every_days": "Täglich",
            "every_weeks": "Wöchentlich",
            "every_2_weeks": "Alle zwei Wochen",
            "every_months": "Monatlich",
            "every_years": "Jährlich"
          },
          "userAvailable": "Sie sind verfügbar",
          "userNotAvailable": "Sie sind beschäftigt",
          "question": "Nehmen Sie teil?",
          "expired": "Diese Einladung ist nicht mehr gültig, der Termin wurde aktualisiert.",
          "actions": {
            "yes": "Ja",
            "no": "Nein",
            "maybe": "Vielleicht"
          },
          "responses": {
            "confirm": "{{attendeeName}} nimmt am Termin teil",
            "declined": "{{attendeeName}} hat den Termin abgelehnt",
            "maybe": "{{attendeeName}} hat mit Vielleicht geantwortet"
          },
          "attachments-label": "Anhänge"
        },
        "contact-dialog": {
          "actions": {
            "show-detail": "Kontaktdetails anzeigen",
            "add-contact": "Zum Adressbuch hinzufügen"
          }
        },
        "pec-receipts": {
          "title": "Bestätigungen",
          "table": {
            "fields": {
              "type": "Typ",
              "date": "Datum"
            },
            "empty": "Keine Bestätigung"
          },
          "types": {
            "acceptance-receipt": "Annahmebestätigung",
            "delivery-anomaly": "Fehler",
            "delivery-failure": "Nicht zugestellt",
            "delivery-receipt": "Zustellbestätigung"
          }
        },
        "guide-links": {
          "pecDangerousAttachmentsGuide": "https://guide.pec.it/gestione-account-pec/sicurezza/allegati-dannosi.aspx",
          "pelDangerousAttachmentsGuide": "https://guide.hosting.aruba.it/email/webmail/allegati-potenzialmente-pericolosi.aspx"
        }
      },
      "alert": {
        "upload-size": {
          "title": "Das Gesamtvolumen der ausgewählten Dateien überschreitet die maximale Größe von 100 MB.",
          "message": "Sie können Dateien als Links senden.",
          "button": {
            "more-info": "Mehr Infos"
          }
        },
        "dangerous-file": {
          "title-extension": "Gefährliche Erweiterungen",
          "title-files": "Einige Anhänge sind möglicherweise unsicher.",
          "title-file": "Der Anhang ist möglicherweise unsicher.",
          "message": "Einige angehängte Dateien haben möglicherweise gefährliche Erweiterungen.",
          "button": {
            "go-to-guide": "Anleitung ansehen",
            "learn-more": "Mehr erfahren"
          }
        },
        "signature-verification": {
          "header-invalid-sign": "Ungültige Signatur",
          "header-valid-sign": "Gültige Signatur",
          "paragraph": "PEC möglicherweise ungültig.",
          "transport-envelop": "Umschlag",
          "open-transport-envelop": "Umschlag öffnen",
          "forward-transport-envelop": "Umschlag weiterleiten",
          "close-transport-envelop": "Schließen",
          "details": "Details",
          "released-to": "Ausgestellt für:",
          "email": "E-Mail:",
          "released-from": "Ausgestellt von:",
          "certificate-hierarchy": "Zertifikatshierarchie",
          "sign-detail": "Signaturdetails",
          "delivered-by": "Zugestellt von:",
          "valid-from": "Gültig ab:",
          "valid-until": "Gültig bis:",
          "serial-number": "Seriennr.:",
          "invalid-signature-certification": "Zertifikat nicht überprüft",
          "valid-certificate": "Zertifikat überprüft",
          "message-unedited": "Nachricht nicht verändert",
          "message-edited": "Nachricht verändert",
          "certified-message": "Zertifizierte Nachricht",
          "fault-message": "Nachrichtenfehler",
          "sender-mail-match-certificate": "Die E-Mail-Adresse des Anbieters stimmt mit der Adresse im Zertifikat der E-Mail überein",
          "sender-mail-not-match-certificate": "Absender-E-Mail stimmt nicht mit dem E-Mail-Zertifikat überein",
          "the-day": "Am",
          "at-hours": "um",
          "the-message": "Nachricht",
          "has-been-sent-by": "",
          "addressed to": "",
          "the-original-message-is-attached": "Die Originalnachricht ist angehängt",
          "message-id": "Nachrichten-ID:"
        },
        "spam": {
          "title": "Nachricht als Spam markiert.",
          "message": "Klicken Sie aus Sicherheitsgründen nicht auf Links, laden Sie keine Anhänge herunter und geben Sie keine persönlichen Daten preis. Wenn Sie den Absender als vertrauenswürdig kennen, fügen Sie ihn Ihrer Liste sicherer Absender hinzu."
        },
        "smime": {
          "header": "S/MIME-Details",
          "status-success": "S/MIME-Signatur ist gültig",
          "status-error-signature": "S/MIME-Signatur ist ungültig",
          "status-error-certificate": "S/MIME-Zertifikat ungültig",
          "status-error-email": "S/MIME-Zertifikat ungültig",
          "status-warning-certificate": "S/MIME-Zertifikat nicht vertrauenswürdig",
          "status-success-encryption": "Verschlüsselte Nachricht",
          "status-error-encryption": "Ein Verschlüsselungsfehler ist aufgetreten",
          "status-unencrypted": "Nachricht nicht verschlüsselt",
          "status-unsigned": "Nachricht nicht signiert",
          "message-success": "Diese Nachricht enthält eine Signatur, die die Echtheit des Absenders und die Integrität des Inhalts sicherstellt.",
          "message-error-signature": "<p>Bei der S/MIME-Signatur wurden Probleme festgestellt. Der Inhalt der Nachricht scheint kompromittiert zu sein, daher kann seine Integrität nicht überprüft werden. Wir empfehlen, den Inhalt mit dem Absender abzuklären</p> <p><b>Was soll ich tun?</b></p> <p> <ul> <li>Betrachten Sie den Inhalt nicht als vertrauenswürdig und sicher</li> <li>Kontaktieren Sie den Absender und bitten Sie um Bestätigung</li> </ul> </p>",
          "message-error-certificate": "<p>Beim für die Signatur verwendeten S/MIME-Zertifikat wurden Probleme festgestellt, daher können die Echtheit des Absenders und die Integrität des Inhalts nicht überprüft werden. Wir empfehlen, die Nachricht als nicht authentisch zu betrachten oder den Inhalt mit dem Absender abzuklären.</p><p><b>Was soll ich tun?</b></p><p><ul><li>Betrachten Sie den Inhalt nicht als vertrauenswürdig oder sicher</li><li>Kontaktieren Sie den Absender und bitten Sie um Bestätigung</li><li>Wenn Sie diesen Fehler häufig erhalten, bitten Sie den Absender, sein Zertifikat zu aktualisieren oder dessen Gültigkeit zu prüfen.</li></ul></p>",
          "message-error-email": "<p>Beim verwendeten S/MIME-Zertifikat wurden Probleme festgestellt, da es offenbar einem anderen Postfach zugeordnet ist. Daher kann die Echtheit des Absenders nicht überprüft werden.</p> <p><b>Was soll ich tun?</b></p> <p> <ul> <li>Betrachten Sie den Inhalt nicht als vertrauenswürdig oder sicher</li> <li>Kontaktieren Sie den Absender und bitten Sie um Bestätigung</li> <li>Wenn Sie diesen Fehler häufig erhalten, bitten Sie den Absender, sein Zertifikat zu aktualisieren.</li> </ul> </p>",
          "message-warning-certificate": "<p>Das Zertifikat wurde möglicherweise widerrufen oder ist abgelaufen, daher können wir seine Gültigkeit nicht garantieren.</p> <p><b>Was soll ich tun?</b></p> <p> <ul> <li>Kontaktieren Sie den Absender und bitten Sie um Bestätigung.</li> <li>Wenn Sie diesen Fehler häufig erhalten, bitten Sie den Absender, sein Zertifikat zu aktualisieren oder dessen Gültigkeit zu prüfen.</li> </ul> </p>",
          "message-success-encryption": "Diese Nachricht ist mit S/MIME-Verschlüsselung geschützt. Die Verschlüsselung stellt sicher, dass nur der vorgesehene Empfänger den Inhalt lesen kann, und schützt die Daten vor unbefugtem Zugriff.",
          "message-error-encryption": "Die Nachricht konnte wegen eines Fehlers nicht entschlüsselt werden. Wir empfehlen, den Absender um Prüfung zu bitten.",
          "message-unencrypted": "Diese Nachricht ist nicht mit S/MIME-Verschlüsselung geschützt.",
          "message-unsigned": "Diese Nachricht wurde nicht mit einem S/MIME-Zertifikat digital signiert.",
          "subject": "Signiert von:",
          "issuer": "Zertifikat ausgestellt von:",
          "details": "Zertifikatsdetails",
          "encryption-lookup-title": "Nachricht durch S/MIME-Zertifikat geschützt",
          "encryption-lookup-message": "Um den Inhalt dieser Nachricht zu lesen, benötigen Sie das zugehörige S/MIME-Zertifikat, das in den Einstellungen hochgeladen sein muss.",
          "certificate-error-title": "Zertifikatsfehler",
          "certificate-error-message": "Das Zertifikat kann nicht geöffnet werden, da es beschädigt zu sein scheint.<br>Wir empfehlen, den Absender um Prüfung zu bitten."
        }
      },
      "space-usage": {
        "text": "{{accountSize}} MB von {{accountMaxSize}} MB belegt",
        "unlimited-text": "{{accountSize}} MB belegt",
        "unlimited": "Unbegrenzter E-Mail-Speicher"
      },
      "models": {
        "new-model": "Neue Vorlage erstellen"
      },
      "banner": {
        "dialog-header": "Nachrichten löschen",
        "confirm-question": "Möchten Sie alle Nachrichten im <b>Ordner {{folderName}}</b> wirklich <strong>endgültig</strong> löschen?",
        "spam": {
          "delete-policy": "Alle Nachrichten im Spam-Ordner werden nach 30 Tagen automatisch entfernt.",
          "button": "Alle Spam-Nachrichten löschen"
        },
        "trash": {
          "delete-policy": "Alle Nachrichten im Papierkorb werden 90 Tage nach dem Löschen automatisch entfernt.",
          "button": "Leeren"
        },
        "actions": {
          "delete": "Löschen",
          "cancel": "Abbrechen"
        },
        "archive-message-read-only": {
          "message": "<strong>Das Archiv ist nicht im Schreibmodus aktiviert.</strong> Sie können keine Nachrichten verschieben oder löschen.",
          "button-close": "Schließen"
        },
        "preservation-folder-message": {
          "message": "<strong>Diese Nachrichten werden innerhalb von 72 Stunden endgültig zur digitalen Archivierung gesendet.</strong> Danach sind sie im Bereich „Digitale Archivierung“ der PEC-Webmail einsehbar."
        },
        "preservation-result-limited": {
          "message": "In dieser Liste werden die letzten <strong>10.000 archivierten Nachrichten</strong> angezeigt. Wenn Sie andere Nachrichten suchen,<strong> verwenden Sie bitte die Suchfunktion.</strong>"
        },
        "search-in-trash-and-spam": {
          "message": "Weitere Nachrichten in Spam und Papierkorb suchen.",
          "search": "Suchen"
        },
        "toast": {
          "single": {
            "error": "Beim Löschen der Nachricht ist ein Fehler aufgetreten",
            "success": "Nachricht gelöscht."
          },
          "multi": {
            "error": "Beim Löschen der Nachrichten ist ein Fehler aufgetreten",
            "success": "Ausgewählte Nachrichten gelöscht"
          }
        },
        "recovery-email": {
          "title": "Wiederherstellungs-E-Mail-Adresse eingeben.",
          "message": "Wir empfehlen, Ihre Sicherheitsangaben zu aktualisieren, um Ihr Konto zu schützen.",
          "button": "Zu den Einstellungen"
        },
        "pec-mailbox": {
          "message": ""
        }
      },
      "invoice": {
        "show-invoice": "Rechnung anzeigen",
        "aruba-view-mode": "Aruba-Ansicht",
        "sdi-view-mode": "SDI-Ansicht"
      },
      "copy-dropdown": {
        "archive": "Archiv"
      }
    },
    "contacts": {
      "drag-drop": {
        "move-contacts": "{{number}} Kontakte verschieben"
      },
      "label": "Kontakte",
      "search": {
        "search-icon": "Suchen",
        "placeholder": "Kontakte suchen..."
      },
      "sidebar": {
        "all-contacts": "Alle Kontakte",
        "favorites-contacts": "Favorisierte Kontakte",
        "new": "Neu",
        "collapse-menu": "Minimieren",
        "expand-menu": "Erweitern",
        "contact-list-header": {
          "name": "Name",
          "lastname": "Nachname",
          "email": "E-Mail",
          "phone-number": "Telefonnummer",
          "group": "Gruppe",
          "filters": "Filter"
        },
        "actions": {
          "rename": "Umbenennen",
          "add-contact": "Kontakt hinzufügen",
          "write-email-to-everyone": "E-Mail an alle",
          "send-an-invitation-to-everyone": "Alle einladen",
          "delete": "Löschen",
          "remove": "Entfernen",
          "share": "Teilen",
          "rename-address-book": "Adressbuch umbenennen",
          "rename-group": "Gruppe umbenennen",
          "share-address-book": "Adressbuch teilen",
          "delete-address-book": "Adressbuch löschen",
          "delete-group": "Gruppe löschen",
          "remove-sharing": "Freigabe aufheben",
          "create-event-for-all": "Termin für alle erstellen",
          "email-all": "E-Mail an alle"
        }
      },
      "list": {
        "empty": {
          "text": "Ihre Kontaktsuche ergab keine Ergebnisse."
        },
        "header": {
          "actions": {
            "send-mail-to-contact": "E-Mail verfassen",
            "send-invitation": "Einladung senden",
            "forward": "Kontakt weiterleiten",
            "assign-to-group": "Gruppe zuweisen",
            "edit-event": "Termin bearbeiten",
            "edit-contact": "Bearbeiten",
            "move": {
              "label": "Verschieben",
              "create-address-book": "Neues Adressbuch erstellen",
              "plural": {
                "success": "Die ausgewählten Kontakte wurden verschoben.",
                "error": "Beim Verschieben der Kontakte ist ein Fehler aufgetreten."
              },
              "singular": {
                "success": "Kontakt verschoben.",
                "error": "Beim Verschieben des Kontakts ist ein Fehler aufgetreten."
              }
            },
            "download": "Herunterladen",
            "more-options": "Weitere Optionen",
            "delete": "Löschen",
            "add-to-favorites": "Zu Favoriten hinzufügen",
            "remove-from-favorites": "Aus Favoriten entfernen",
            "create-new-group": "Neue Gruppe",
            "add-to-group": "Zur Gruppe hinzufügen:"
          },
          "pagination": {
            "items-selector": "Elemente pro Seite:"
          },
          "sort": {
            "name-asc": "",
            "name-desc": "",
            "surname-asc": "",
            "surname-desc": ""
          }
        },
        "sidebar": {
          "manage-contacts": "Kontakte verwalten",
          "sync-contacts": "Synchronisierungsassistent",
          "import": "Importieren",
          "export": "Exportieren"
        },
        "toast": {
          "favorites": {
            "added": "Kontakt zu Favoriten hinzugefügt.",
            "removed": "Kontakt aus Favoriten entfernt."
          },
          "deleted": "Kontakt gelöscht.",
          "multiple-deleted": "Kontakte gelöscht.",
          "delete-error": "Beim Löschen des Kontakts ist ein Fehler aufgetreten",
          "multiple-delete-error": "Beim Löschen der Kontakte ist ein Fehler aufgetreten",
          "group-update-error": "Beim Aktualisieren der Gruppe ist ein Fehler aufgetreten",
          "contacts-added-to-group": "Kontakt zur Gruppe {{group}} hinzugefügt",
          "contacts-removed-from-group": "Kontakt aus der Gruppe {{group}} entfernt",
          "address-book-renamed-success": "Adressbuch umbenannt",
          "address-book-renamed-error": "Beim Ändern des Adressbuchnamens ist ein Fehler aufgetreten",
          "address-book-added-success": "Adressbuch erstellt.",
          "address-book-added-error": "Beim Erstellen des Adressbuchs ist ein Fehler aufgetreten"
        }
      },
      "dialog": {
        "difference-link-file": {
          "title": "Unterschied zwischen Datei und Link",
          "file-description": "Verwenden Sie <strong>Datei anhängen</strong>, um Dateien in Originalgröße in die Nachricht einzufügen. Die Gesamtgröße der Anhänge darf 100 MB nicht überschreiten.",
          "link-description": "Verwenden Sie <strong>Link anhängen</strong>, um einen Link zu Dateien in Ihrem Webspace in die Nachricht einzufügen. So wird die Gesamtgröße der Nachricht reduziert. Wenn Sie eine Datei aus Ihrem Speicher löschen, kann der Empfänger sie nicht mehr herunterladen."
        },
        "select-contacts": {
          "no-results": "Keine Ergebnisse",
          "title": "Kontakte aus dem Adressbuch auswählen",
          "input-search": "Suchen...",
          "footer-elements-recap": "{{firstElement}} - {{itemPerPage}} von {{totalElements}} Elementen",
          "header": {
            "contacts": "Kontakte",
            "email": "E-Mail",
            "mobile-header": "Kontaktliste"
          },
          "sort": {
            "name": "Name",
            "surname": "Nachname"
          },
          "filters": {
            "results": "Suchergebnisse",
            "all-contacts": "",
            "favorites": ""
          },
          "actions": {
            "insert": "Einfügen",
            "insert-n-contacts": {
              "singular": "{{number}} Kontakt einfügen",
              "plural": "{{number}} Kontakte einfügen"
            },
            "cancel": "Abbrechen",
            "add-email": "E-Mail hinzufügen",
            "add-number": "Telefonnummer hinzufügen"
          },
          "errors": {
            "missing-mail": "E-Mail-Adresse fehlt für {{name}}"
          }
        },
        "add-to-gruoup": {
          "title": "Gruppe zuweisen ({{selectdItemsCount}})",
          "actions": {
            "apply": "Anwenden",
            "new-group": "Neue Gruppe erstellen"
          }
        },
        "delete-contacts-modal": {
          "header-dialog": "Kontakte löschen",
          "question-dialog": "Möchten Sie die ausgewählten Kontakte wirklich endgültig löschen?",
          "actions": {
            "delete": "Löschen",
            "cancel": "Nicht löschen"
          }
        },
        "delete-abook-modal": {
          "header-dialog": "Adressbuch löschen",
          "question-dialog": "Möchten Sie das Adressbuch {{name}} wirklich löschen?"
        },
        "remove-shared-abook-modal": {
          "question-dialog": "Sie haben dann keinen Zugriff mehr auf diese geteilten Inhalte. Möchten Sie wirklich fortfahren?"
        },
        "delete-group-modal": {
          "header-dialog": "Gruppe löschen",
          "question-dialog": "Möchten Sie die Gruppe {{name}} wirklich löschen?"
        },
        "footer-actions": {
          "back": "Zurück",
          "cancel": "Abbrechen",
          "next": "Weiter",
          "save": "Speichern",
          "yes": "Ja",
          "no": "Nein"
        },
        "header": {
          "title": "Kontakt, Gruppe, Adressbuch erstellen",
          "disabled-ab-title": "Kontakt, Gruppe, Adressbuch erstellen",
          "title-message": "Zum Adressbuch hinzufügen"
        },
        "creation-steps": {
          "choose-creation-type": "Wählen Sie, was erstellt werden soll",
          "insert-info": "Details eingeben",
          "insert-details": "Details eingeben",
          "add-contacts": "Kontakte hinzufügen",
          "contact": "Kontakt",
          "contact-description": "Neuen Kontakt hinzufügen",
          "contacts-group": "Gruppe",
          "contacts-group-description": "Erstellen Sie eine Kontaktgruppe aus einem Adressbuch, um E-Mails, Einladungen und Dateien mit einem Klick zu senden",
          "address-book-and-contacts": "Adressbuch",
          "address-book-and-contacts-description": "Erstellen Sie ein Adressbuch mit den gewünschten Kontakten und ordnen Sie sie in Gruppen",
          "rename-abook": "Adressbuch umbenennen"
        },
        "import-vcf": {
          "header": "Kontakte per .vcf-Datei importieren",
          "type-error": "Nur .vcf-Dateien werden unterstützt",
          "upload-button": "Datei importieren"
        },
        "show-qr-code": {
          "header": "QR-Code",
          "message": "Scannen Sie den Code unten und fügen Sie den Kontakt Ihrem Adressbuch hinzu."
        },
        "address-book": {
          "new": {
            "title": "Adressbuch erstellen",
            "name": {
              "label": "Name des Adressbuchs",
              "placeholder": "z. B. Persönlich"
            }
          }
        },
        "export-address-book": {
          "export-folder-title": "Adressbuch exportieren",
          "export-folder-message": "Dieser Vorgang kann etwas dauern. Die Exportdauer hängt von der Internetverbindung und der Anzahl der zu exportierenden Kontakte ab.",
          "select-address-book": "Zu exportierendes Adressbuch auswählen",
          "select-format": "Format auswählen",
          "placeholders": {
            "name": "Name des Adressbuchs"
          },
          "formats": {
            "v-card": "Adressbuch als vCard exportieren",
            "csv": "Adressbuch als CSV exportieren",
            "ldif": "Adressbuch als LDIF exportieren"
          },
          "actions": {
            "export": "Adressbuch exportieren",
            "cancel": "Abbrechen"
          },
          "toast": {
            "error": "Beim Erstellen der Datei ist ein Fehler aufgetreten",
            "confirm": "Adressbuch erstellt."
          }
        },
        "import": {
          "header": "Kontakte importieren",
          "label": "Zu importierende Dateien auswählen",
          "label_select": "*unterstützte Dateien: vcf, csv und ldif",
          "max_size_message": "Maximale Dateigröße",
          "max_number_files_message": "Maximale Anzahl Dateien",
          "allowed_types_message": "Zulässige Formate",
          "size_error_label": "Datei zu groß.",
          "type_error_label": "Falsches Format.",
          "number_files_error_label": "Zu viele Dateien.",
          "generic_error_label": "Beim Laden ist ein Fehler aufgetreten.",
          "upload-button": "Datei importieren",
          "address-book": {
            "label": "Adressbuch auswählen, in das die Kontakte importiert werden",
            "placeholder": "Adressbuch auswählen"
          },
          "message": {
            "import-file": "Datei importieren"
          },
          "actions": {
            "confirm": "Importieren",
            "cancel": "Abbrechen"
          }
        },
        "share": {
          "title": "Freigabe und Berechtigungen für Adressbuch {{name}}",
          "message": "Teilen Sie das Adressbuch per E-Mail-Einladung. Sie können festlegen, wer Zugriff hat, und die Einstellungen jederzeit ändern.",
          "domain_message": "Sie können das Adressbuch nur mit Mitgliedern Ihrer Domain {{domain}} teilen",
          "email": "Teilen mit",
          "edit_shared": {
            "message": "Möchten Sie {{email}} wirklich Vollzugriff auf das Adressbuch {{name}} geben?"
          },
          "delete_shared": {
            "message": "Möchten Sie die Freigabe von {{name}} für {{email}} wirklich beenden?"
          }
        },
        "add-first-contact": "Fügen Sie Ihren ersten Kontakt hinzu",
        "success": "Kontakt zum Adressbuch hinzugefügt.",
        "error": "Beim Erstellen des Kontakts ist ein Fehler aufgetreten",
        "error-del-contact": "Beim Löschen des Adressbuchs ist ein Fehler aufgetreten",
        "success-del-contact": "Adressbuch gelöscht",
        "error-del-group": "Beim Löschen der Gruppe ist ein Fehler aufgetreten",
        "success-del-group": "Die Gruppe {{name}} wurde gelöscht.",
        "actions": {
          "close": "Schließen"
        }
      },
      "form": {
        "more-details": "Mehr Details",
        "less-details": "Weniger Details",
        "insert-image": "Foto einfügen",
        "remove-image": "Foto entfernen",
        "name-address-book": "Name des Adressbuchs",
        "optional": "(optional)",
        "labels": {
          "firstname": "Name",
          "lastname": "Nachname",
          "company": "Firma",
          "mail": "E-Mail",
          "group": "Gruppe",
          "phone-number": "Telefon",
          "type": "Typ",
          "address-book": "Adressbuch",
          "address": "Straße",
          "cap": "Postleitzahl",
          "city": "Ort",
          "nation": "Land",
          "qualification": "Berufsbezeichnung",
          "birthdate": "Geburtstag",
          "website": "Website",
          "social-network": "Social-Media-Konto",
          "building": "Gebäude (Treppenhaus, Etage, Hausnummer)",
          "chatId": "Chat (Konto-ID)",
          "notes": "Notizen",
          "addressbook-name": "Geben Sie dem Adressbuch einen Namen"
        },
        "insert-firstname": "Name eingeben",
        "insert-lastname": "Nachname eingeben",
        "insert-company": "Firma eingeben",
        "insert-mail": "E-Mail eingeben",
        "insert-address": "Straße eingeben",
        "insert-cap": "Postleitzahl eingeben",
        "insert-city": "Ort eingeben",
        "insert-nation": "Land eingeben",
        "insert-qualification": "Berufsbezeichnung eingeben",
        "insert-birthday": "Geburtstag eingeben",
        "insert-website": "Website eingeben",
        "insert-social-network": "Social-Media-Konto eingeben",
        "insert-chat-id": "Chat-ID eingeben",
        "insert-notes": "Notizen eingeben",
        "insert-addressbook-name": "z. B. Persönlich",
        "birthdate-format": "TT/MM/JJJJ",
        "select-one-or-more-groups": "Eine oder mehrere Gruppen auswählen",
        "no-groups-found": "Keine Gruppen gefunden",
        "remaining-char": "Zeichen übrig",
        "type-phone-number-options": {
          "mobile": "Mobil",
          "home": "Privat",
          "fax": "Fax",
          "work": "Arbeit",
          "pager": "Pager",
          "other": "Sonstiges"
        },
        "type-mail-options": {
          "personal": "Persönlich",
          "business": "Arbeit"
        },
        "type-website-options": {
          "profile": "Profil",
          "blog": "Blog",
          "homepage": "Homepage",
          "other": "Sonstiges",
          "business": "Arbeit"
        },
        "social-media-options": {
          "facebook": "Facebook",
          "instagram": "Instagram",
          "twitter": "Twitter",
          "linkedin": "LinkedIn",
          "other": "Sonstiges"
        },
        "date-options": {
          "birthday": "Geburtstag",
          "wedding": "Hochzeitstag",
          "other": "Sonstiges"
        },
        "chatId-options": {
          "hangouts": "Hangouts",
          "skype": "Skype",
          "facebook-messenger": "Facebook Messenger",
          "aim": "AIM",
          "jabber": "Jabber",
          "gadu-gadu": "Gadu Gadu",
          "other": "Sonstiges"
        },
        "group": {
          "group-name": "Gruppenname",
          "group-rename": "Gruppe umbenennen",
          "group-name-placeholder": "z. B. Persönlich",
          "abook-parent": "Übergeordnetes Adressbuch",
          "contacts-to-add": "Zur Gruppe hinzuzufügende Kontakte",
          "contacts-to-add-placeholder": "Kontakte hinzufügen...",
          "contact": "{{number}} Kontakt",
          "contacts": "{{number}} Kontakte",
          "no-result": "Keine Ergebnisse gefunden",
          "suggested-contacts": "Vorgeschlagene Kontakte",
          "add-contacts": "Kontakte hinzufügen",
          "del-contact": "Kontakt löschen",
          "all-contacts": "Alle Kontakte"
        },
        "message": {
          "firstname-not-valid": "Name eingeben"
        }
      },
      "toast": {
        "contact": {
          "success-deleted": "Kontakt gelöscht.",
          "success-deleted-multiple": "Die ausgewählten Kontakte wurden gelöscht.",
          "error-deleted": "Beim Löschen des Kontakts ist ein Fehler aufgetreten",
          "error-deleted-multiple": "Beim Löschen der Kontakte ist ein Fehler aufgetreten",
          "success-favorite-added": "Kontakt zu Favoriten hinzugefügt.",
          "success-favorite-removed": "Kontakt aus Favoriten entfernt.",
          "success-create": "Kontakt zum Adressbuch hinzugefügt.",
          "error-forward": "Beim Weiterleiten des Kontakts ist ein Fehler aufgetreten",
          "error-create": "Beim Erstellen des Kontakts ist ein Fehler aufgetreten",
          "warning-update": "Sie versuchen, einen Kontakt aus einem schreibgeschützten Adressbuch zu bearbeiten. Eine Kopie dieses Kontakts wird in Ihrem persönlichen Adressbuch gespeichert.",
          "success-update": "Kontakt gespeichert",
          "error-update": "Beim Bearbeiten des Kontakts ist ein Fehler aufgetreten",
          "warning-contact-send-message": "Adresse fehlt für „{{composeName}}“"
        },
        "group-contact": {
          "success": "Gruppe erstellt",
          "error": "Beim Erstellen der Gruppe ist ein Fehler aufgetreten",
          "error-del-group": "Beim Löschen der Gruppe ist ein Fehler aufgetreten",
          "success-del-group": "Die Gruppe {{name}} wurde gelöscht.",
          "error-edit-group": "Beim Bearbeiten der Gruppe ist ein Fehler aufgetreten",
          "success-edit-group": "Die Gruppe {{name}} wurde bearbeitet.",
          "singular-contact": {
            "success-added-to-group": "Kontakt zur Gruppe {{group}} hinzugefügt.",
            "success-added-to-group-plural": "Kontakt zu den Gruppen {{group}} hinzugefügt.",
            "success-removed-from-group": "Kontakt aus der Gruppe {{group}} entfernt.",
            "success-removed-from-group-plural": "Kontakt aus den Gruppen {{group}} entfernt."
          },
          "plural-contacts": {
            "success-added-to-group": "Kontakte zur Gruppe {{group}} hinzugefügt.",
            "success-added-to-group-plural": "Kontakte zu den Gruppen {{group}} hinzugefügt.",
            "success-removed-from-group": "Kontakte aus der Gruppe {{group}} entfernt.",
            "success-removed-from-group-plural": "Kontakte aus den Gruppen {{group}} entfernt."
          },
          "error-update-group": "Beim Aktualisieren der Gruppe ist ein Fehler aufgetreten"
        },
        "address-book": {
          "error-rename-address-book": "Beim Bearbeiten des Adressbuchs ist ein Fehler aufgetreten.",
          "success-rename-address-book": "Adressbuch aktualisiert.",
          "success-create-address-book": "Adressbuch erstellt.",
          "error-del-contact": "Beim Löschen des Adressbuchs ist ein Fehler aufgetreten",
          "success-del-contact": "Adressbuch gelöscht.",
          "success-remove-shar-contact": "Freigabe entfernt."
        },
        "export": {
          "error": "Beim Exportieren des Kontakts ist ein Fehler aufgetreten"
        },
        "share_calendar": {
          "wrong_domain": "Postfach in Ihrer Domain nicht gefunden.",
          "success": "Änderungen gespeichert."
        },
        "share-address-book": {
          "success": "Änderungen gespeichert."
        }
      },
      "detail": {
        "default-addressbook": "Persönlich",
        "contact-details": "Kontaktdetails",
        "your-messages": "Ihre Nachrichten",
        "received": "EMPFANGEN",
        "sent": "GESENDET",
        "show-all": "Alle anzeigen",
        "show-qr-code": "QR-Code anzeigen",
        "copy-email": "E-Mail {{email}} kopieren",
        "tooltip": {
          "actions-send": "Gesendet"
        }
      }
    },
    "calendar": {
      "label": "Kalender",
      "sidebar": {
        "new-event": "Neuer Termin",
        "collapse-menu": "Minimieren",
        "expand-menu": "Erweitern",
        "mycalendar": {
          "section": "Meine Kalender",
          "new_calendar": "Neuer Kalender",
          "actions": {
            "edit": "Bearbeiten",
            "share": "Teilen",
            "delete": "Löschen",
            "remove": "Entfernen",
            "settings-aruba-drive": "Einstellungen"
          }
        },
        "external_calendar": {
          "section": "Weitere Kalender"
        },
        "management": {
          "section": "Kalender verwalten",
          "import": "Importieren",
          "export": "Exportieren",
          "sync": "Synchronisierungsassistent"
        }
      },
      "header": {
        "today": "Heute",
        "day": "Tag",
        "week": "Woche",
        "month": "Monat",
        "events": "Termine",
        "prev": "Zurück",
        "next": "Weiter",
        "more": "Mehr",
        "show_days": {
          "all": "Ganze Woche anzeigen",
          "work": "Arbeitstage anzeigen"
        }
      },
      "view-sheet-modal": {
        "title": "Kalenderansicht"
      },
      "dialog": {
        "event": {
          "today": "Heute",
          "attendees": "Teilnehmer",
          "no_attendees": "Keine Teilnehmer",
          "details": "Details",
          "optional": "optional",
          "remaining_chars": "Zeichen übrig",
          "guest_message": "Änderungen werden nur an diesem Kalender vorgenommen.",
          "shared_message": "Sie versuchen, einen Termin in einem schreibgeschützten Kalender zu bearbeiten. Die Änderungen erscheinen in einer Kopie des Termins in Ihrem persönlichen Kalender.",
          "send_invitations": "Senden Sie eine E-Mail, um die Eingeladenen über die Aktualisierung des Termins zu informieren.",
          "no-title": "Sie senden einen Termin ohne Titel. Möchten Sie wirklich fortfahren?",
          "send_update": "Senden Sie eine E-Mail, um die Eingeladenen über die Aktualisierung des Termins zu informieren.",
          "visibility": {
            "label": "Als beschäftigt anzeigen",
            "subtitle": "Die Verfügbarkeit ist nur für Postfächer Ihrer Domain {{emailDomain}} sichtbar"
          },
          "header": {
            "new": "Neuer Termin",
            "edit": "Termin bearbeiten",
            "forward": "Termin weiterleiten",
            "repetition_custom": "Anpassen",
            "reminder": "Erinnerung",
            "send_update": "Möchten Sie eine Aktualisierung senden?",
            "remove": "Änderungen verwerfen",
            "save": "Änderungen speichern",
            "delete": "Termin löschen",
            "delete_share": "Möchten Sie den ausgewählten Termin löschen?",
            "delete_repeating_event": "Serientermin löschen",
            "edit_repeating_event": "Serientermin bearbeiten",
            "confirm_repeating_event": "Auf welchen Termin möchten Sie antworten?",
            "forward_repeating_event": "Serientermin weiterleiten",
            "send_invitations": "Möchten Sie die Eingeladenen informieren?",
            "no-title": "Möchten Sie den Termin ohne Titel senden?"
          },
          "attendees_status": {
            "tentative": "vielleicht",
            "accepted": "ja",
            "declined": "nein",
            "pending": "ausstehend"
          },
          "organizer": "Organisator",
          "actions": {
            "send_messagge": "Nachricht an Teilnehmer senden",
            "forward": "Einladung weiterleiten",
            "forward_compact": "Weiterleiten",
            "delete_guest": "Aus Ihrem Kalender löschen",
            "delete_owner": "Termin absagen",
            "edit": "Bearbeiten",
            "yes": "Ja",
            "no": "Nein",
            "ok": "OK",
            "maybe": "Vielleicht",
            "edit_guest": "In Ihrem Kalender bearbeiten",
            "print": "Drucken",
            "join": "Teilnehmen",
            "add_meeting_room": "Besprechungsraum hinzufügen",
            "show_attendees_aviability": "Planen und Verfügbarkeit der Eingeladenen anzeigen",
            "save": "Speichern",
            "send": "Senden",
            "do_not_send": "Nicht senden",
            "cancel": "Abbrechen",
            "remove": "Entfernen",
            "no-title": "Ohne Titel senden"
          },
          "will_partecipate": "Nehmen Sie teil?",
          "url": "URL",
          "all_day": "Ganztägig",
          "placeholder": {
            "title": "Titel eingeben",
            "location": "Ort des Termins eingeben",
            "add_attendee": "Eingeladene hinzufügen",
            "description": "Terminbeschreibung hinzufügen",
            "meeting_room": "Besprechungsraum auswählen",
            "mail_address": "E-Mail-Adresse",
            "message": "Nachricht eingeben",
            "errorMessage": "Gültige Adresse eingeben"
          },
          "meeting_room": {
            "no_meeting_room": "Keine",
            "available": "Verfügbar",
            "not_available": "Nicht verfügbar",
            "capacity": "{{capacity}} Personen"
          },
          "description_remaining_chars": "Noch {{char}} Zeichen",
          "repetition_options": {
            "no_repetition": "Nicht wiederholen",
            "every_days": "Täglich",
            "every_weeks": "Wöchentlich",
            "every_2_weeks": "Alle zwei Wochen",
            "every_months": "Monatlich",
            "custom": "Anpassen..."
          },
          "repetition_type_options": {
            "1": "Nie",
            "2": "Datum",
            "3": "Nach"
          },
          "repetition_period_options": {
            "day": "Tag",
            "week": "Woche",
            "month": "Monat",
            "year": "Jahr"
          },
          "repeting_mode_options": {
            "0": "Alle Termine",
            "1": "Dieser Termin",
            "2": "Dieser und folgende Termine"
          },
          "confirm_repeating_mode_options": {
            "0": "Alle Serientermine",
            "1": "Nur dieser Termin"
          },
          "repetition": {
            "repeat_frequency": "Wiederholen alle",
            "repetition_type": "Ende",
            "occurrences": "Wiederholungen",
            "date-placeholder": "TT/MM/JJJJ"
          },
          "reminder": {
            "add": "Erinnerung hinzufügen",
            "edit": "Erinnerung bearbeiten",
            "send_to_minutes": "E-Mail an {{email}} {{remindertime}} {{reminderType}} vorher senden",
            "0p": "Minuten",
            "60p": "Stunden",
            "1440p": "Tage",
            "10080p": "Wochen",
            "0s": "Minute",
            "60s": "Stunde",
            "1440s": "Tag",
            "10080s": "Woche",
            "send_to": "E-Mail senden an",
            "when": "Wann",
            "send_to_required": "E-Mail-Adresse eingeben"
          },
          "attachments": {
            "add": "Anhang hinzufügen",
            "source_dialog": {
              "title": "Anhang hinzufügen",
              "from_computer": "Vom Gerät hochladen",
              "from_file": "Aus Webmail-Dateien anhängen",
              "from_aruba_drive": "Aus Aruba Drive anhängen"
            },
            "info_dialog": {
              "title": "Anhang in „Terminanhänge“ speichern",
              "message": "Ihre Datei wird hochgeladen und im Bereich Dateien im Ordner <b>„Terminanhänge“</b> gespeichert.<p>Dort können Sie jederzeit darauf zugreifen und sie verwalten.</p>",
              "never_show_again": "Diese Meldung nicht mehr anzeigen"
            },
            "aruba_drive_not_configured": {
              "title": "Aus Aruba Drive anhängen",
              "message": "Um Dateien aus Ihrem Aruba Drive an Termine anzuhängen oder Anhänge aus Einladungen zu speichern, müssen Sie den Dienst mit Webmail verbinden. Öffnen Sie dazu in den Einstellungen den Bereich Aruba Drive.",
              "go_to_settings": "Zu den Einstellungen"
            },
            "context_menu": {
              "download": "Herunterladen",
              "delete": "Anhang löschen"
            }
          },
          "location_options": {
            "address_link": "Adresse oder Link",
            "meetingroom": "Besprechungsraum"
          },
          "attendees_add": {
            "no_results": "Keine Ergebnisse gefunden",
            "title_list": "Vorgeschlagene Kontakte",
            "attendee": "{{number}} eingeladen",
            "attendees": "{{number}} eingeladen",
            "del_attendee": "Eingeladenen entfernen",
            "del_room": "Raum entfernen"
          },
          "send_invitations_options": {
            "added": "Einladung senden an: {{addresses}}",
            "deleted": "Absage senden an: {{addresses}}",
            "updated": "Aktualisierung senden an: {{addresses}}"
          },
          "confirm_remove_edit": "Möchten Sie die Änderungen an diesem Termin wirklich verwerfen?",
          "confirm_remove_new": "Möchten Sie die Änderungen an diesem Termin speichern?",
          "confirm_delete": "Möchten Sie den ausgewählten Termin wirklich löschen?",
          "confirm_delete_guest": "Möchten Sie den ausgewählten Termin wirklich endgültig löschen?",
          "send_delete": {
            "message": "Wenn Sie den Termin löschen, werden die Eingeladenen per E-Mail benachrichtigt.",
            "label": "Nachricht an die Eingeladenen hinzufügen"
          }
        },
        "planning": {
          "header": {
            "title": "Verfügbarkeit der Eingeladenen"
          },
          "all_day": "Ganztägig",
          "start": "Starten",
          "end": "Ende",
          "you": "Sie",
          "multiple_rooms": "Wählen Sie nur einen Besprechungsraum",
          "unavailable_room": "Besprechungsraum wählen",
          "copy-email": "E-Mail-Adresse kopieren",
          "copy-success": "E-Mail-Adresse kopiert",
          "occupied-by": "Belegt von",
          "people": "Personen",
          "legend": {
            "out_work_hour": "Außerhalb der Arbeitszeit",
            "no_info": "Keine Informationen gefunden"
          },
          "banner": {
            "buy-business-mail": {
              "message": "Diese Funktion ist in Ihrem Tarif nicht enthalten. Um die Verfügbarkeit der Eingeladenen in Ihrer Domain zu prüfen, erwerben Sie Business Mail.",
              "button": "Business Mail holen"
            }
          },
          "messages": {
            "counter_current_message": "<b>Aktuelle Zeit:</b> {{counterCurrentDate}} von {{counterCurrentStartTime}} bis {{counterCurrentEndTime}}<br>",
            "counter_current_message_allday": "<b>Aktuelle Zeit:</b> {{counterCurrentDate}}<br>",
            "counter_new_message": "<b>Von {{counterSender}} vorgeschlagene Zeit:</b> {{counterNewDate}} von {{counterNewStartTime}} bis {{counterNewEndTime}}",
            "counter_new_message_allday": "<b>Von {{counterSender}} vorgeschlagene Zeit:</b> {{counterNewDate}}",
            "counter_repeating_event": "<b>Sie bearbeiten einen Serientermin.</b> Die vorgeschlagene neue Zeit gilt nur für den aktuellen Termin, nicht für die Serie."
          },
          "actions": {
            "save": "Speichern",
            "propose": "Neuen Zeitvorschlag senden",
            "accept": "Termin aktualisieren"
          }
        },
        "calendar": {
          "1": "Nur Lesen",
          "15": "Vollzugriff",
          "header": {
            "new": "Kalender hinzufügen",
            "edit": "Bearbeiten",
            "error": "Fehler"
          },
          "name": "Kalendername",
          "color": "Farbe",
          "name_placeholder": "z. B. Arbeit",
          "add_url": "Externen Kalender hinzufügen",
          "url": "Kalender-URL",
          "url_placeholder": "https://...",
          "url_message": "Ein externer Kalender ist im iCal-Format online verfügbar. Geben Sie die Kalender-URL ein, um ihn Ihrer Liste hinzuzufügen.",
          "error_34001": "34001: Die URL des externen Kalenders ist falsch oder der Server antwortet nicht. Bitte prüfen.",
          "owner_calendar": "Eigentümer:",
          "access_permissions": "Zugriffsrechte:",
          "message": {
            "name-not-valid": "Name eingeben"
          }
        },
        "share": {
          "title": "Freigabe und Berechtigungen für Kalender {{name}}",
          "message": "Teilen Sie den Kalender per E-Mail-Einladung. Sie können festlegen, wer Zugriff hat, und die Einstellungen jederzeit ändern.",
          "domain_message": "Sie können Ihren Kalender nur mit Mitgliedern Ihrer Domain {{domain}} teilen",
          "email": "Wählen Sie, mit wem Sie Ihren Kalender teilen",
          "edit_shared": {
            "message": "Möchten Sie <strong>{{email}}</strong> wirklich Zugriff <strong>{{rights}}</strong> auf den Kalender <strong>{{name}}</strong> gewähren?"
          },
          "delete_shared": {
            "message": "Möchten Sie die Freigabe von {{name}} für {{email}} wirklich beenden?"
          }
        },
        "delete_calendar": {
          "personal": {
            "header": "Kalender löschen",
            "question": "Möchten Sie den Kalender {{calendarName}} wirklich löschen?"
          },
          "external": {
            "question": "Sie haben dann keinen Zugriff mehr auf diese geteilten Inhalte. Möchten Sie wirklich fortfahren?"
          },
          "actions": {
            "yes": "Ja",
            "no": "Nein"
          }
        },
        "reply_with_message": {
          "header": "Mit Nachricht antworten",
          "message": "Nachricht an den Organisator hinzufügen",
          "sectionsMessage": "Nehmen Sie teil?",
          "sectionPlaceholder": "Auswählen"
        },
        "actions": {
          "send_messagge": "Nachricht an Teilnehmer senden",
          "forward": "Einladung weiterleiten",
          "delete_guest": "Aus Ihrem Kalender löschen",
          "delete_owner": "Termin absagen",
          "edit": "Bearbeiten",
          "copy": "Termin duplizieren",
          "yes": "Ja",
          "no": "Nein",
          "ok": "OK",
          "reply": "Antworten",
          "maybe": "Vielleicht",
          "other_actions": "Weitere Optionen",
          "reply_with_message": "Mit Nachricht antworten",
          "counter": "Neue Zeit vorschlagen",
          "counter_maybe": "Vorläufig zusagen und neu planen",
          "counter_decline": "Ablehnen und neu planen",
          "edit_guest": "In Ihrem Kalender bearbeiten",
          "print": "Drucken",
          "join": "Teilnehmen",
          "add_meeting_room": "Besprechungsraum hinzufügen",
          "show_attendees_aviability": "Planen und Verfügbarkeit der Eingeladenen anzeigen",
          "save": "Speichern",
          "send": "Senden",
          "do_not_send": "Nicht senden",
          "cancel": "Abbrechen",
          "remove": "Entfernen",
          "allow_full_access": "Vollzugriff gewähren",
          "allow_readonly": "Nur Lesen erlauben",
          "delete": "Löschen",
          "add_attendee": "Teilnehmer hinzufügen",
          "add_meeting_room_short": "Raum hinzufügen",
          "close": "Schließen"
        },
        "import": {
          "header": "Kalender importieren",
          "message": {
            "file-not-valid": "Datei auswählen"
          },
          "label": "Zu importierende .ics-Datei auswählen",
          "max_size": "Maximale Dateigröße",
          "max_number_files": "Maximale Anzahl Dateien",
          "allowed_types": "Zulässige Formate",
          "size_error_label": "Datei zu groß.",
          "type_error_label": "Falsches Format.",
          "number_files_error_label": "Zu viele Dateien.",
          "generic_error_label": "Beim Laden ist ein Fehler aufgetreten.",
          "upload-button": "Datei importieren",
          "calendar": {
            "label": "Zum Kalender hinzufügen",
            "placeholder": "Zum Kalender hinzufügen"
          },
          "actions": {
            "import": "Importieren",
            "cancel": "Abbrechen"
          }
        },
        "export": {
          "header": "Kalender exportieren",
          "calendar": {
            "label": "Kalender auswählen",
            "placeholder": "Kalender auswählen"
          },
          "from-to": {
            "label": "Zu exportierenden Zeitraum auswählen",
            "placeholder": "Zu exportierenden Zeitraum auswählen"
          },
          "actions": {
            "export": "Exportieren",
            "cancel": "Abbrechen"
          }
        },
        "external-attachment": {
          "title": "Sie verlassen gleich diese Seite",
          "text": "Der gewählte Link öffnet eine externe Website.",
          "text-hint": "Prüfen Sie die Adresse und fahren Sie nur fort, wenn Sie sie kennen.",
          "confirm": "Externe Website öffnen",
          "cancel": "Schließen"
        }
      },
      "print": {
        "location": "Speicherort",
        "repeat": "Wiederholen",
        "calendar": "Kalender",
        "reminde": "Erinnerung",
        "attendees": "Eingeladene",
        "organizer": "Organisator",
        "to": "bis",
        "status": {
          "1": "Angenommen",
          "2": "Keine Antwort",
          "4": "Vielleicht"
        }
      },
      "search": {
        "search-icon": "Suchen",
        "placeholder": "Kalender durchsuchen...",
        "number_of_results": "{{count}} Ergebnisse gefunden",
        "no-results": "Keine Termine entsprechen Ihrer Suche."
      },
      "messages": {
        "all_day": "Ganztägig",
        "no_events_title": "Keine Termine geplant.",
        "no_events": "Beginnen Sie mit Ihrem Kalender und erstellen Sie einen neuen Termin."
      },
      "toast": {
        "add_event": {
          "success_sent": "Termin gesendet.",
          "success": "Termin gespeichert.",
          "error": "Beim Speichern des Termins ist ein Fehler aufgetreten."
        },
        "edit_event": {
          "success": "Termin aktualisiert.",
          "success_guest": "Die Änderungen wurden nur in Ihrem Kalender gespeichert und sind für die anderen Teilnehmer nicht sichtbar.",
          "error": "Beim Speichern des Termins ist ein Fehler aufgetreten.",
          "send_invitations": "Die Aktualisierung wurde an die Eingeladenen gesendet.",
          "send_invitations_forwarded": "Einladung weitergeleitet."
        },
        "delete_event": {
          "success": "Termin gelöscht.",
          "error": "Beim Löschen des Termins ist ein Fehler aufgetreten."
        },
        "delete_calendar": {
          "personal": {
            "success": "Kalender gelöscht.",
            "error": "Beim Löschen des Kalenders ist ein Fehler aufgetreten."
          },
          "external": {
            "success": "Kalender entfernt.",
            "error": "Beim Löschen des Kalenders ist ein Fehler aufgetreten."
          }
        },
        "invitation_confirm": {
          "success_1": "Sie haben geantwortet, dass Sie am Termin teilnehmen.",
          "success_4": "Sie haben geantwortet, dass Sie vielleicht am Termin teilnehmen.",
          "success_6": "Sie haben geantwortet, dass Sie nicht am Termin teilnehmen."
        },
        "invitation_counter": {
          "success": "Der Vorschlag für eine neue Zeit wurde an den Organisator gesendet.",
          "error_identical_event": "Sie haben dieselbe Zeit wie beim ursprünglichen Termin gewählt.",
          "error_identical_proposition": "Sie haben dieselbe Zeit gewählt wie der Organisator"
        },
        "share_calendar": {
          "success": "Änderungen gespeichert."
        },
        "import_calendar": {
          "success": "Kalender importiert."
        },
        "export_calendar": {
          "success": "Kalender exportiert."
        },
        "calendar": {
          "success_add": "Kalender erstellt.",
          "success_edit": "Kalender bearbeitet."
        },
        "add_attendee": {
          "already_added": "Diese E-Mail-Adresse ist bereits in der Liste"
        },
        "attachments": {
          "upload-in-progress": "Warten Sie, bis die Anhänge vollständig hochgeladen sind"
        }
      },
      "repetition": {
        "every": "Wiederholt sich alle",
        "day": "Tag",
        "days": "Tage",
        "week": "Woche",
        "weeks": "Wochen",
        "month": "Monat",
        "months": "Monate",
        "year": "Jahr",
        "years": "Jahre",
        "until": "bis {{until}}",
        "count": "{{count}}-mal",
        "month_day": "am {{day}}",
        "year_day": "am {{day}}",
        "of": "von",
        "and": "und",
        "every-day": "jeden Tag",
        "weeks_position": {
          "1": "am ersten",
          "2": "am zweiten",
          "3": "am dritten",
          "4": "am vierten",
          "5": "am letzten",
          "6": "am letzten"
        }
      },
      "remind": {
        "label": "Erinnern",
        "minutes": "Minuten vorher",
        "hours": "Stunden vorher",
        "days": "Tage vorher",
        "weeks": "Wochen vorher"
      },
      "visibility": {
        "1": "Als beschäftigt anzeigen",
        "3": "Als verfügbar anzeigen",
        "6": "Als verfügbar anzeigen"
      },
      "days": {
        "1": "Montag",
        "2": "Dienstag",
        "3": "Mittwoch",
        "4": "Donnerstag",
        "5": "Freitag",
        "6": "Samstag",
        "7": "Sonntag"
      },
      "days_short": {
        "1": "Mo",
        "2": "Di",
        "3": "Mi",
        "4": "Do",
        "5": "Fr",
        "6": "Sa",
        "7": "So"
      },
      "days_two_char": {
        "1": "Mo",
        "2": "Di",
        "3": "Mi",
        "4": "Do",
        "5": "Fr",
        "6": "Sa",
        "7": "So"
      },
      "months": {
        "1": "Januar",
        "2": "Februar",
        "3": "März",
        "4": "April",
        "5": "Mai",
        "6": "Juni",
        "7": "Juli",
        "8": "August",
        "9": "September",
        "10": "Oktober",
        "11": "November",
        "12": "Dezember"
      },
      "months_short": {
        "1": "Jan",
        "2": "Feb",
        "3": "Mär",
        "4": "Apr",
        "5": "Mai",
        "6": "Jun",
        "7": "Jul",
        "8": "Aug",
        "9": "Sep",
        "10": "Okt",
        "11": "Nov",
        "12": "Dez"
      }
    },
    "archive": {
      "label": "Archiv",
      "sidebar": {
        "collapse-menu": "Minimieren",
        "expand-menu": "Erweitern",
        "principal": "Hauptordner"
      },
      "permissions": {
        "write-disabled-message": "Um den Vorgang auszuführen, aktivieren Sie unter Einstellungen > Archiv die Option „Manuelles Kopieren, Verschieben und Löschen von Nachrichten aktivieren“.",
        "write-disabled-title": "Aktionen nicht aktiviert",
        "go-to-settings": "Zu den Einstellungen"
      }
    },
    "preservation": {
      "label": "Digitale Archivierung",
      "sidebar": {
        "main": {
          "preservation-message": "Archivierte Nachrichten",
          "exhibit-history": "Herausgabeverlauf",
          "folders": {
            "inbox": "Posteingang",
            "outbox": "Gesendet"
          },
          "all-exhibit": "Alle Herausgaben"
        },
        "collapse-menu": "Minimieren",
        "expand-menu": "Erweitern"
      },
      "historical-exhibits": {
        "title": "Verlauf der Herausgaben archivierter PEC-Nachrichten",
        "sub-title": "Hier finden Sie die Liste der Herausgaben archivierter PEC-Nachrichten.<br>Herausgaben können in mehrere Pakete aufgeteilt sein: Jedes Paket wird als eigene Zeile mit zugehörigem Download-Link angezeigt. Um die vollständige Herausgabe zu erhalten, müssen Sie alle zugehörigen Pakete herunterladen.<br><br>Sie können alle noch nicht abgelaufenen Herausgaben herunterladen.",
        "status": {
          "completed": "Abgeschlossen",
          "expired": "Abgelaufen",
          "processing": "In Bearbeitung"
        },
        "table": {
          "exhibit-name": "Name der Herausgabe",
          "elaboration-state": "Bearbeitungsstatus",
          "request-date": "Anfragedatum",
          "expiring-date": "Ablaufdatum",
          "download": "Herunterladen",
          "download-link": "Download-Link {{linkIndex}}"
        }
      },
      "actions": {
        "export": {
          "messagelimitexceed": "Dieser Vorgang ist für höchstens {{limit}} Nachrichten möglich"
        }
      }
    },
    "file": {
      "label": "Datei",
      "search": {
        "search-icon": "Suchen",
        "placeholder": "In Dateien suchen...",
        "back": "Zurück"
      },
      "sidebar": {
        "collapse-menu": "Minimieren",
        "expand-menu": "Erweitern",
        "no-share-file": "Keine Datei geteilt",
        "upload": "Hochladen",
        "webmail-files": "Hauptordner",
        "my-files": "Persönlich",
        "personal-folders": "Meine Ordner",
        "shared-files": "Weitere Ordner",
        "dropbox-files": "Dropbox-Dateien",
        "create-folder": "Ordner erstellen",
        "create-new-folder": "Neuen Ordner erstellen",
        "edit-folder": "Ordner umbenennen",
        "add-file": "Hochladen",
        "login-dropbox": "Bei Dropbox anmelden",
        "filter-header": {
          "visualization": {
            "list": "Listenansicht",
            "grid": "Rasteransicht",
            "mobile-title": "Ansicht"
          },
          "sorting": {
            "modified-date-asc": "Bearbeitungsdatum (neueste)",
            "modified-date-desc": "Bearbeitungsdatum (älteste)",
            "creation-date-asc": "Erstellungsdatum (neueste)",
            "creation-date-desc": "Erstellungsdatum (älteste)",
            "name-asc": "Name (Z–A)",
            "name-desc": "Name (A–Z)",
            "size-asc": "Größe (größte)",
            "size-desc": "Größe (kleinste)",
            "mobile-title": "Sortieren nach"
          },
          "actions": {
            "folder": {
              "create": "Unterordner erstellen",
              "edit": "Ordner bearbeiten",
              "move": "Ordner verschieben",
              "copy": "Ordner kopieren",
              "share": "Ordner teilen",
              "empty": "Ordner leeren",
              "delete": "Ordner löschen",
              "delete-shared": "Freigabe aufheben",
              "add-to-favorites": "Zu Hauptordnern hinzufügen",
              "remove-from-favorites": "Aus Hauptordnern entfernen"
            }
          }
        },
        "list-actions": {
          "download": "Herunterladen",
          "download-items": "Herunterladen",
          "send": "Senden",
          "as-attach": "Als Anhang",
          "as-link": "Als Link",
          "show-preview": "Vorschau anzeigen",
          "share": "Teilen",
          "edit": "Umbenennen",
          "move": "Verschieben",
          "move-items": "Verschieben",
          "copy": "Kopieren",
          "copy-items": "Kopieren",
          "delete": "Löschen",
          "delete-items": "Löschen"
        }
      },
      "list": {
        "name": "Name",
        "size": "Größe",
        "folder": "Ordner",
        "last-edit": "Zuletzt bearbeitet",
        "drag-drop-file": "Dateien hierher ziehen",
        "move-files": "{{number}} Dateien verschieben",
        "empty-file-list": "Keine Dateien gefunden",
        "select-file": "Datei auswählen",
        "select-all": "Alle auswählen",
        "add-folder": "Ordner erstellen",
        "drag-or-select-file": "Datei hierher ziehen oder auf Ihrem Computer auswählen",
        "available-space": "Verfügbarer Speicher {{availableSpace}}",
        "delete-file": {
          "delete-confirm-header": "Datei löschen",
          "delete-confirm-question": "Möchten Sie die Datei <b>{{filename}}</b> wirklich löschen?",
          "delete-confirm-question-multiple": "Möchten Sie die ausgewählten Dateien wirklich löschen?",
          "confirm": "Löschen",
          "cancel": "Abbrechen",
          "success-toast": "Datei gelöscht",
          "success-toast-multiple": "Dateien gelöscht",
          "error-toast": "Ausgewählte Datei konnte nicht gelöscht werden",
          "error-toast-multiple": "Ausgewählte Dateien konnten nicht gelöscht werden"
        },
        "copy-file": {
          "success-toast": "Datei kopiert",
          "success-toast-multiple": "Dateien kopiert",
          "error-toast": "Ausgewählte Datei konnte nicht kopiert werden",
          "error-toast-multiple": "Ausgewählte Dateien konnten nicht kopiert werden"
        }
      },
      "detail": {
        "header": {
          "actions": {
            "expand": "Erweitern/Minimieren",
            "new-window": "In neuem Fenster öffnen",
            "close": "Schließen"
          },
          "search": "Suchen"
        },
        "information-card": {
          "created": "Erstellt am",
          "modified": "Zuletzt bearbeitet",
          "size": "Größe",
          "owner": "Eigentümer",
          "description": "Beschreibung",
          "rights": "Zugriffsrechte",
          "readonly": "Nur Lesen",
          "write-delete": "Lesen und Schreiben",
          "public-link": "Öffentlicher Link",
          "copy-link": "Link kopieren"
        }
      },
      "modal-sheet": {
        "action": {
          "title": "Weitere Optionen"
        }
      },
      "create-dialog": {
        "folder-name": "Ordnername",
        "message": {
          "folder-name-not-valid": "Name eingeben"
        },
        "type": {
          "label": "Typ",
          "basic-folder": "Standardordner",
          "documents": "Dokumente",
          "images": "Bilder",
          "audio": "Audio",
          "video": "Video"
        },
        "success-toast-create": "Ordner erstellt",
        "success-toast-edit": "Ordner umbenannt",
        "error-toast-edit": "Ordner konnte nicht umbenannt werden",
        "error-toast-create": "Ordner konnte nicht erstellt werden"
      },
      "delete-dialog": {
        "header": "Ordner löschen",
        "header-shared": "Möchten Sie den geteilten Ordner löschen?",
        "header-shared-by-me": "Möchten Sie den Ordner löschen?",
        "header-multiple": "Auswahl löschen",
        "message": "Möchten Sie den Ordner <b>{{folderName}}</b> wirklich löschen?",
        "message-shared": "Wenn Sie den geteilten Ordner {{folderName}} löschen, haben Sie keinen Zugriff mehr auf die enthaltenen Elemente.",
        "message-shared-by-me": "Wenn Sie den Ordner <b>{{folderName}}</b> löschen, können Benutzer mit Freigabe nicht mehr darauf zugreifen oder den Inhalt sehen. Möchten Sie ihn wirklich löschen?",
        "message-multiple": "Möchten Sie die ausgewählten Elemente wirklich löschen?",
        "buttons": {
          "delete": "Löschen",
          "cancel": "Abbrechen"
        },
        "toast": {
          "success": "Ordner gelöscht",
          "success-shared": "Geteilter Ordner gelöscht",
          "error": "Ordner konnte nicht gelöscht werden",
          "error-shared": "Geteilter Ordner konnte nicht gelöscht werden"
        }
      },
      "dialog": {
        "preview": {
          "title": "Vorschau",
          "preview-not-available": "Vorschau nicht verfügbar",
          "label-of-slide-count-carousel": "Datei",
          "separator-slide-count-carousel": "von",
          "p7m-disclaimer": ".p7m-Dateien sind digital signiert. Diese Vorschau zeigt das Originaldokument ohne Signaturen. Um die vollständige signierte Datei zu sehen, laden Sie sie herunter und öffnen Sie sie mit einer Signatursoftware wie Aruba Sign.",
          "pdf-viewer": {
            "page-of": "von"
          },
          "tooltip": {
            "dialog-print": "Drucken",
            "dialog-download": "Herunterladen"
          }
        },
        "empty-folder": {
          "header": "Ordner leeren",
          "question": "Möchten Sie den Ordner <b>{{folderName}}</b> wirklich leeren?",
          "actions": {
            "confirm": "Leeren",
            "cancel": "Abbrechen"
          },
          "toast": {
            "success": "Ordner geleert"
          }
        },
        "share": {
          "title": "Ordner teilen",
          "message": "Senden Sie eine Freigabeeinladung per E-Mail und legen Sie die Zugriffsrechte über Berechtigungen fest. Sie können die Einstellungen jederzeit ändern.",
          "domain_message": "Sie können Ihren Ordner nur mit Mitgliedern Ihrer Domain {{domain}} teilen.",
          "email": "Teilen mit",
          "edit_shared": {
            "message": "Möchten Sie <strong>{{email}}</strong> wirklich Zugriff {{rights}} auf den Ordner <strong>{{name}}</strong> gewähren?"
          },
          "delete_shared": {
            "message": "Möchten Sie die Freigabe von <strong>{{name}}</strong> für <strong>{{email}}</strong> wirklich beenden?"
          }
        }
      },
      "toast": {
        "folder": {
          "share": {
            "success": "Ordner geteilt"
          }
        }
      },
      "move-file": {
        "success-toast-move": "Datei nach {{folder}} verschoben",
        "success-toast-move-multiple": "Dateien nach {{folder}} verschoben",
        "error-toast-move": "Datei konnte nicht nach {{folder}} verschoben werden",
        "error-toast-move-multiple": "Dateien konnten nicht nach {{folder}} verschoben werden"
      },
      "share-file": {
        "get-share-link": "Freigabelink abrufen",
        "public-link": "Öffentlicher Link",
        "share-dialog-paragraph": "Jeder mit dem Freigabelink kann auf die Datei zugreifen.",
        "copy-link": "Link kopieren",
        "active": "Aktiviert",
        "not-active": "Deaktiviert",
        "link-published": "Sie haben den Freigabelink aktiviert",
        "link-unpublished": "Sie haben den Freigabelink deaktiviert",
        "link-published-error": "Freigabelink konnte nicht aktiviert werden",
        "link-unpublished-error": "Freigabelink konnte nicht deaktiviert werden",
        "link-copied-clipboard": "Link in die Zwischenablage kopiert"
      },
      "rename-file": {
        "title": "Umbenennen",
        "filename": "Dateiname",
        "description": "Beschreibung",
        "remaining-char": "Zeichen übrig",
        "actions": {
          "confirm": "Speichern",
          "cancel": "Abbrechen"
        },
        "toast": {
          "success": "Datei umbenannt"
        },
        "message": {
          "filename-not-valid": "Name eingeben"
        },
        "confirm-ext-rename": {
          "header": "Umbenennen",
          "question": "Der eingegebene Dateiname <b>{{fileName}}</b> hat eine andere Erweiterung als das Original <b>({{originalFileExtension}})</b>. Eine Änderung der Erweiterung kann die Datei unbrauchbar machen. Möchten Sie die Datei wirklich umbenennen?",
          "actions": {
            "confirm": "Umbenennen",
            "cancel": "Abbrechen"
          }
        }
      },
      "move-folder": {
        "success-toast": "Ordner verschoben",
        "error-toast": "Ordner konnte nicht nach {{folder}} verschoben werden"
      },
      "copy-folder": {
        "success-toast": "Der Ordner wurde kopiert",
        "error-toast": "Ordner konnte nicht nach {{folder}} kopiert werden"
      }
    },
    "menu-more-action": {
      "label": "Mehr",
      "sub-menu": {
        "file": "Datei",
        "activity": "Aufgabe",
        "notes": "Notizen",
        "security-archive": "Archiv",
        "aruba-drive": "Aruba Drive",
        "digital-signature": "Digitale Signatur",
        "sharing": "Freigabe",
        "management": "Postfächer und Domain verwalten",
        "settings": "Einstellungen",
        "preservation": "Digitale Archivierung"
      }
    },
    "news": {
      "label": "Neu"
    },
    "generic": {
      "select-action": "Aktion auswählen...",
      "support-link": "https://assistenza.aruba.it/en/home.aspx",
      "element-selected": "Element ausgewählt",
      "element-copied-clipboard": "In die Zwischenablage kopiert",
      "elements-selected": "Elemente ausgewählt",
      "loading": "Wird geladen",
      "offline": "Sie sind offline. Verbindung wird wiederhergestellt...",
      "select-all": "Alle auswählen",
      "cancel-selection": "Auswahl aufheben",
      "cancel": "Abbrechen",
      "go-back": "Zurück",
      "close": "Schließen",
      "confirm": "Bestätigen",
      "prev": "Zurück",
      "next": "Weiter",
      "back": "Zurück",
      "end": "Ende",
      "more": "Andere",
      "edit": "Bearbeiten",
      "delete": "Löschen",
      "no-recipient": "Kein Empfänger",
      "no-subject": "Kein Betreff",
      "yes": "Ja",
      "no": "Nein",
      "of": "von",
      "news": "NEU",
      "error": "Ein Fehler ist aufgetreten. Bitte erneut versuchen.",
      "optional": "(optional)",
      "burger-menu": "Seitenleiste",
      "save": "Speichern",
      "badge-app-store": "App-Store-Badge",
      "badge-google-play": "Google-Play-Badge",
      "badge-app-gallery": "App-Gallery-Badge",
      "news-button-label": "NEU",
      "beta-button-label": "BETA",
      "language-menu": {
        "button-title": "Sprache"
      },
      "help-menu": {
        "button-title": "Hilfe",
        "title": "Wie können wir helfen?",
        "help-section": {
          "title": "Praktische Anleitungen und Support",
          "guide": "Unsere Anleitungen ansehen",
          "assistance": "Aruba-Support kontaktieren"
        },
        "feedback-section": {
          "title": "Helfen Sie uns, die Webmail zu verbessern",
          "feedback": "Feedback senden"
        },
        "chatbot-section": {
          "title": "Virtuellen Assistenten fragen",
          "message": "Erhalten Sie mit unserem KI-Assistenten sofort Antworten und Lösungen auf Ihre Fragen.",
          "button": "Chat starten",
          "close": "Zurück"
        }
      },
      "chat": {
        "button-title": "Chat",
        "header": {
          "title": "Chat"
        },
        "status": {
          "available": "Verfügbar",
          "away": "Abwesend",
          "dnd": "Nicht stören",
          "offline": "Nicht verbunden"
        },
        "back": "CHAT ({{count}})",
        "search": "Suchen...",
        "input": {
          "placeholder": "Nachricht eingeben...",
          "info": "Umschalt+Eingabe für Zeilenumbruch"
        },
        "connecting": "Verbindung zum Server wird hergestellt...",
        "disconnected": "Ein Fehler ist aufgetreten. Die Verbindung zum Chat-Dienst wurde getrennt."
      },
      "toast": {
        "success": "Änderungen gespeichert",
        "share": {
          "fail": "Beim Teilen ist ein Fehler aufgetreten"
        }
      },
      "dialog": {
        "avatar-preview": {
          "header": "Profilbild",
          "message": "Mit einem Profilbild erkennen Sie sich selbst und werden, wenn Sie mehrere Postfächer haben, von anderen erkannt.",
          "visibility-options": {
            "0": "Nur Ihnen anzeigen",
            "1": "Postfächern von {{domain}} anzeigen"
          },
          "actions": {
            "save": "Speichern",
            "add": "Hochladen",
            "edit": "Neues hochladen",
            "remove": "Entfernen",
            "cancel": "Abbrechen"
          },
          "toast": {
            "success": "Änderungen gespeichert",
            "oversize-image-error": "Das Bild darf nicht größer als {{avatarMaxFileSize}} KB sein"
          }
        },
        "software-update": {
          "header": "Neues Update verfügbar",
          "message": "Um die aktualisierten Funktionen und Neuerungen der Webmail zu nutzen, laden Sie die Seite neu.",
          "update": "Jetzt aktualisieren",
          "cancel": "Nicht jetzt"
        },
        "navigation-error": {
          "header": "Ein Fehler ist aufgetreten",
          "message": "Beim Navigieren ist ein Fehler aufgetreten. Bitte laden Sie die Seite neu.",
          "update": "Seite neu laden"
        },
        "upload-file": {
          "title": {
            "single": "{{countFiles}} UPLOAD",
            "multi": "{{countFiles}} UPLOADS"
          },
          "reduce": "Minimieren",
          "close": "Schließen",
          "file": {
            "message": "Upload von {{ fileName }}",
            "status": {
              "canceled": "Abgebrochen",
              "completed": "Abgeschlossen"
            },
            "actions": {
              "abort": "Upload abbrechen",
              "restart": "Upload neu starten"
            }
          },
          "success": {
            "contacts": "Kontakte importiert."
          }
        },
        "upload-file-cancel": {
          "title": "Uploads abbrechen",
          "text": "Einige Dateien werden noch hochgeladen. Möchten Sie wirklich alle laufenden Uploads abbrechen?",
          "actions": {
            "confirm": "Ja",
            "close": "Nein"
          }
        },
        "overquota": {
          "space_usage": "<b>Belegter Speicher: {{progress}} %</b> ({{accountSize}} MB von {{accountMaxSize}} MB).",
          "not_show_anymore": "Nicht mehr anzeigen",
          "button": {
            "close": "Schließen",
            "upgrade": "Speicher erweitern",
            "changePecTypeToProPremium": "Upgrade auf PEC Pro oder Premium",
            "changePecTypeToPremium": "Upgrade auf PEC Premium"
          },
          "messages": {
            "pel": {
              "warning": {
                "header": "Nachrichtenspeicher fast voll",
                "space_message": "Der Nachrichtenspeicher Ihres Postfachs ist fast voll.",
                "info": "Wenn der Speicher voll ist, können Sie keine Nachrichten mehr empfangen und keine Kopie Ihrer gesendeten Nachrichten speichern. Informieren Sie sich über GigaMail oder Unbegrenzten E-Mail-Speicher, die zusätzlichen Speicherdienste."
              },
              "alert": {
                "header": "Nachrichtenspeicher fast voll",
                "space_message": "Der Nachrichtenspeicher Ihres Postfachs ist fast voll.",
                "info": "Wenn der Speicher voll ist, können Sie keine Nachrichten mehr empfangen und keine Kopie Ihrer gesendeten Nachrichten speichern. Informieren Sie sich über GigaMail oder Unbegrenzten E-Mail-Speicher, die zusätzlichen Speicherdienste."
              },
              "full": {
                "header": "Nachrichtenspeicher voll",
                "space_message": "Der Nachrichtenspeicher Ihres Postfachs ist voll.",
                "info": "Um wieder Nachrichten zu empfangen und Kopien gesendeter Nachrichten zu speichern, ohne E-Mails im Nachrichtenspeicher löschen zu müssen, holen Sie sich GigaMail oder Unbegrenzten E-Mail-Speicher, die zusätzlichen Speicherdienste."
              }
            },
            "pelfree": {
              "warning": {
                "header": "Nachrichtenspeicher fast voll",
                "space_message": "Der Nachrichtenspeicher Ihres Postfachs ist fast voll.",
                "info": "Wenn der Speicher aufgebraucht ist, können Sie keine Nachrichten mehr empfangen und keine Kopie gesendeter Elemente speichern."
              },
              "alert": {
                "header": "Nachrichtenspeicher fast voll",
                "space_message": "Der Nachrichtenspeicher Ihres Postfachs ist fast voll.",
                "info": "Wenn der Speicher aufgebraucht ist, können Sie keine Nachrichten mehr empfangen und keine Kopie gesendeter Elemente speichern."
              },
              "full": {
                "header": "Nachrichtenspeicher voll",
                "space_message": "Der Nachrichtenspeicher Ihres Postfachs ist voll.",
                "info": "Um wieder Nachrichten zu empfangen und Kopien gesendeter Elemente zu speichern, löschen Sie alte E-Mails aus Ihrem Nachrichtenspeicher."
              }
            },
            "pec": {
              "warning": {
                "header": "Postfachspeicher fast voll",
                "space_message": "Ihr Postfachspeicher ist fast voll.",
                "info": {
                  "aruba": "<b>Erweitern Sie Ihren Speicher</b> durch zusätzliche GB oder ein Upgrade auf ein höheres Postfach, damit Sie <b>keine wichtigen Funktionen verlieren</b>, wie das Senden von PEC-Nachrichten.",
                  "partner": "<b>Beantragen Sie eine Speichererweiterung</b> oder ein Upgrade auf ein höheres Postfach, um <b>keine wichtigen Funktionen zu verlieren</b>, wie das Senden von PEC-Nachrichten.<br> Wenden Sie sich an Ihren Dienstanbieter oder melden Sie sich, falls berechtigt, bei <a tabindex=\"-1\" href=\"https://areaclienti.arubapec.it\" target=\"_blank\">customerarea.arubapec.it</a> an und führen Sie das Upgrade online durch.",
                  "simple": "<b>Geben Sie Postfachspeicher frei</b>, damit Sie <b>keine wichtigen Funktionen verlieren</b>, wie das Senden von PEC-Nachrichten."
                }
              },
              "alert": {
                "header": "Postfachspeicher fast voll",
                "space_message": "Ihr Postfachspeicher ist fast voll.",
                "info": {
                  "aruba": "<b>Erweitern Sie Ihren Speicher</b> durch zusätzliche GB oder ein Upgrade auf ein höheres Postfach, damit Sie <b>keine wichtigen Funktionen verlieren</b>, wie das Senden von PEC-Nachrichten.",
                  "partner": "<b>Beantragen Sie eine Speichererweiterung</b> oder ein Upgrade auf ein höheres Postfach, um <b>keine wichtigen Funktionen zu verlieren</b>, wie das Senden von PEC-Nachrichten.<br> Wenden Sie sich an Ihren Dienstanbieter oder melden Sie sich, falls berechtigt, bei <a tabindex=\"-1\" href=\"https://areaclienti.arubapec.it\" target=\"_blank\">customerarea.arubapec.it</a> an und führen Sie das Upgrade online durch.",
                  "simple": "<b>Geben Sie Postfachspeicher frei</b>, damit Sie <b>keine wichtigen Funktionen verlieren</b>, wie das Senden von PEC-Nachrichten."
                }
              },
              "full": {
                "header": "Postfachspeicher voll",
                "space_message": "Der Speicher Ihres PEC-Postfachs ist aufgebraucht:<b> Sie empfangen weiterhin Nachrichten, können aber keine senden.</b>",
                "info": {
                  "aruba": "<b>Erweitern Sie Ihren Speicher</b> durch zusätzliche GB oder ein Upgrade auf ein höheres Postfach, um alle Funktionen Ihres PEC-Postfachs wiederherzustellen.",
                  "partner": "<b>Beantragen Sie eine Speichererweiterung</b> oder ein Upgrade auf ein höheres Postfach, um alle Funktionen Ihres PEC-Postfachs wiederherzustellen.<br> Wenden Sie sich an Ihren Dienstanbieter oder melden Sie sich, falls berechtigt, bei <a tabindex=\"-1\" href=\"https://areaclienti.arubapec.it\" target=\"_blank\">customerarea.arubapec.it</a> an und führen Sie das Upgrade online durch.",
                  "simple": "Geben Sie Postfachspeicher frei."
                }
              }
            }
          },
          "archive": {
            "pel": {
              "warning": {
                "header": "Archivspeicher fast voll",
                "space_message": "Der Archivspeicher Ihres Postfachs ist fast voll.",
                "info": "Wenn der Speicher voll ist, können Sie keine Kopie Ihrer Nachrichten mehr speichern. Informieren Sie sich über GigaMail oder Unbegrenzten E-Mail-Speicher, die zusätzlichen Speicherdienste."
              },
              "alert": {
                "header": "Archivspeicher fast voll",
                "space_message": "Der Archivspeicher Ihres Postfachs ist fast voll.",
                "info": "Wenn der Speicher voll ist, können Sie keine Kopie Ihrer Nachrichten mehr speichern. Informieren Sie sich über GigaMail oder Unbegrenzten E-Mail-Speicher, die zusätzlichen Speicherdienste."
              },
              "full": {
                "header": "Archivspeicher voll",
                "space_message": "Der Archivspeicher Ihres Postfachs ist voll.",
                "info": "Um weiterhin automatisch Kopien Ihrer Nachrichten im Archivspeicher zu sichern, holen Sie sich GigaMail oder Unbegrenzten E-Mail-Speicher, die zusätzlichen Speicherdienste."
              }
            },
            "pec": {
              "warning": {
                "header": "Archivspeicher fast voll",
                "space_message": "Der Archivspeicher Ihres Postfachs ist fast voll.",
                "info": {
                  "aruba": "<b>Erweitern Sie Ihren Speicher</b> durch zusätzliche GB für Ihr Archiv oder führen Sie, wenn Sie ein PEC-Pro-Postfach haben, ein <b>Upgrade auf Premium</b> durch, damit die Archivierung Ihrer wichtigen Nachrichten nicht stoppt.",
                  "partner": "<b>Beantragen Sie eine Erweiterung Ihres Archivspeichers</b> oder führen Sie, wenn Sie ein PEC-Pro-Postfach haben,<b> ein Upgrade auf Premium</b> durch, damit die Archivierung Ihrer wichtigen Nachrichten nicht stoppt.<br>Wenden Sie sich an Ihren Dienstanbieter oder melden Sie sich, falls berechtigt, bei <a tabindex=\"-1\" href=\"https://areaclienti.arubapec.it\" target=\"_blank\">customerarea.arubapec.it</a> an und führen Sie das Upgrade online durch.",
                  "simple": "<b>Erweitern Sie Ihren Speicher</b> durch zusätzliche GB für Ihr Archiv oder führen Sie, wenn Sie ein PEC-Pro-Postfach haben, ein <b>Upgrade auf Premium</b> durch, damit die Archivierung Ihrer wichtigen Nachrichten nicht stoppt."
                }
              },
              "alert": {
                "header": "Archivspeicher fast voll",
                "space_message": "Der Archivspeicher Ihres Postfachs ist fast voll.",
                "info": {
                  "aruba": "<b>Erweitern Sie Ihren Speicher</b> durch zusätzliche GB für Ihr Archiv oder führen Sie, wenn Sie ein PEC-Pro-Postfach haben, ein <b>Upgrade auf Premium</b> durch, damit die Archivierung Ihrer wichtigen Nachrichten nicht stoppt.",
                  "partner": "<b>Beantragen Sie eine Erweiterung Ihres Archivspeichers</b> oder führen Sie, wenn Sie ein PEC-Pro-Postfach haben,<b> ein Upgrade auf Premium</b> durch, damit die Archivierung Ihrer wichtigen Nachrichten nicht stoppt.<br>Wenden Sie sich an Ihren Dienstanbieter oder melden Sie sich, falls berechtigt, bei <a tabindex=\"-1\" href=\"https://areaclienti.arubapec.it\" target=\"_blank\">customerarea.arubapec.it</a> an und führen Sie das Upgrade online durch.",
                  "simple": "<b>Erweitern Sie Ihren Speicher</b> durch zusätzliche GB für Ihr Archiv oder führen Sie, wenn Sie ein PEC-Pro-Postfach haben, ein <b>Upgrade auf Premium</b> durch, damit die Archivierung Ihrer wichtigen Nachrichten nicht stoppt."
                }
              },
              "full": {
                "header": "Archivspeicher voll",
                "space_message": "Der Archivspeicher Ihres Postfachs ist voll.",
                "info": {
                  "aruba": "<b>Erweitern Sie Ihren Speicher</b> durch zusätzliche GB für Ihr Archiv oder führen Sie, wenn Sie ein PEC-Pro-Postfach haben, ein <b>Upgrade auf Premium</b> durch, damit die Archivierung Ihrer wichtigen Nachrichten nicht stoppt.",
                  "partner": "<b>Beantragen Sie eine Erweiterung Ihres Archivspeichers</b> oder führen Sie, wenn Sie ein PEC-Pro-Postfach haben,<b> ein Upgrade auf Premium</b> durch, damit die Archivierung Ihrer wichtigen Nachrichten nicht stoppt.<br>Wenden Sie sich an Ihren Dienstanbieter oder melden Sie sich, falls berechtigt, bei <a tabindex=\"-1\" href=\"https://areaclienti.arubapec.it\" target=\"_blank\">customerarea.arubapec.it</a> an und führen Sie das Upgrade online durch.",
                  "simple": "<b>Erweitern Sie Ihren Speicher</b> durch zusätzliche GB für Ihr Archiv oder führen Sie, wenn Sie ein PEC-Pro-Postfach haben, ein <b>Upgrade auf Premium</b> durch, damit die Archivierung Ihrer wichtigen Nachrichten nicht stoppt."
                }
              }
            }
          }
        },
        "pecplus-what-mean": {
          "header": "Auf dem Weg zu einer europaweiten PEC",
          "close": "Schließen",
          "title": "Ihr PEC-Postfach entspricht bereits den europäischen Standards.",
          "sub_title": "Bald können Sie PEC-Nachrichten europaweit senden.",
          "what_you_can_do": {
            "title": "Was können Sie jetzt tun?",
            "message_1": "Nutzen Sie PEC in Italien weiterhin wie gewohnt.",
            "message_2": "Außerdem <b>haben Sie das blaue Häkchen<img src=\"assets/images/verified_16.png\" alt=\"verifica\" /> als Konformitätssymbol</b> und Ihr Postfach ist:",
            "message_3": "<b>Sicherer:</b> Sie autorisieren den Postfachzugriff selbst.",
            "message_4": "<b>Zuverlässiger:</b> Sie sind der anerkannte Postfachinhaber.",
            "more_security": "Sicherer",
            "more_reliable": "Zuverlässiger"
          },
          "what_you_can_do_from": {
            "title": "Was werde ich in Zukunft tun können?",
            "message_1": "<b>PEC wird in ganz Europa rechtsgültig sein: Sie können PEC-E-Mails an europäische Empfänger senden,</b> ohne weitere Schritte.",
            "message_2": "Obwohl Ihre PEC bereits den europäischen Standards entspricht, müssen Sie warten, bis andere Länder nachgezogen haben."
          }
        },
        "2fa": {
          "header": "Bestätigung in zwei Schritten aktivieren",
          "close": "Schließen",
          "step_1": "Laden Sie die App <img src=\"assets/images/aruba_logo.png\" alt=\"Logo App Aruba\" /><b>Aruba PEC</b> auf das Smartphone oder Tablet herunter (bzw. aktualisieren Sie sie), auf dem Sie <b>Nachrichten empfangen</b> möchten.",
          "step_2": "Öffnen Sie die App und <b>melden Sie sich</b> mit Ihrem PEC-Postfach an.",
          "step_3": "Öffnen Sie das <b>Menü</b><img src=\"assets/images/menu.png\" alt=\"Menu\" /> und dann die Einstellungen<img src=\"assets/images/settings.png\" alt=\"Impostazioni\" />.",
          "step_4": "Wählen Sie das Postfach und tippen Sie auf <b>Bestätigung in zwei Schritten</b>.",
          "step_5": "Tippen Sie auf <b>Aktivieren und dieses Gerät koppeln</b>."
        },
        "identity-error": {
          "close": "Schließen",
          "go_to_client_area": "Beim Kundenbereich anmelden",
          "support": "Beim Kundenbereich anmelden",
          "DOSSIER_OWNER_NOTVALID_TAXCODE": {
            "header": "Fehler bei der Steuernummer",
            "message": {
              "aruba": "Inhaberdaten und Steuernummer stimmen nicht überein. <br/>Um die Inhaberdaten zu korrigieren, melden Sie sich mit Ihrem Aruba-Benutzernamen (z. B. 12345@aruba.it) und Passwort im Kundenbereich an.",
              "aruba_s": "Inhaberdaten und Steuernummer stimmen nicht überein. <br/>Um die Inhaberdaten zu korrigieren, melden Sie sich mit Ihrem PEC-Konto im Kundenbereich an und wiederholen Sie die Identitätsbestätigung.",
              "partner": "Inhaberdaten und Steuernummer stimmen nicht überein. <br/>Wenden Sie sich zur Korrektur an Ihren Dienstanbieter."
            }
          },
          "DOSSIER_OWNER_WITHOUT_TAXCODE": {
            "header": "Steuernummer fehlt",
            "message": {
              "aruba": "Um die Steuernummer zu den Inhaberdaten hinzuzufügen, melden Sie sich mit Ihrem Aruba-Benutzernamen (z. B. 12345@aruba.it) und Passwort im Kundenbereich an und wiederholen Sie die Identitätsbestätigung.",
              "aruba_s": "Um die Steuernummer zu den Inhaberdaten hinzuzufügen, melden Sie sich mit Ihrem PEC-Konto im Kundenbereich an und wiederholen Sie die Identitätsbestätigung.",
              "partner": "Um die Steuernummer zu den Inhaberdaten hinzuzufügen, wenden Sie sich an Ihren Dienstanbieter."
            }
          },
          "DOSSIER_OWNER_NOTVALID_COMPANYTYPE": {
            "header": "Rechtsform fehlt",
            "message": {
              "aruba": "Wenden Sie sich an den Support, um die Rechtsform zu den Inhaberdaten hinzuzufügen, und wiederholen Sie die Identitätsbestätigung.",
              "aruba_s": "Wenden Sie sich an den Support, um die Rechtsform zu den Inhaberdaten hinzuzufügen, und wiederholen Sie die Identitätsbestätigung.",
              "partner": "Um die Rechtsform zu den Inhaberdaten hinzuzufügen, wenden Sie sich an Ihren Dienstanbieter."
            }
          }
        },
        "mailbox-status": {
          "expiring": {
            "header": "Postfach läuft bald ab",
            "message": {
              "partner": "Ihr Postfach läuft am <b>{{expireDate}}</b> ab.<br>Verlängern Sie es jetzt, um keine wichtigen Funktionen wie das Senden von PEC-Nachrichten zu verlieren.<br> Wenden Sie sich an Ihren Dienstanbieter oder melden Sie sich, falls berechtigt, bei <a tabindex=\"-1\" href=\"https://areaclienti.arubapec.it\" target=\"_blank\">customerarea.arubapec.it</a> an und verlängern Sie online.",
              "default": "Ihr Postfach läuft am <b>{{expireDate}}</b> ab.<br>Verlängern Sie es jetzt, um keine wichtigen Funktionen wie das Senden von PEC-Nachrichten zu verlieren."
            },
            "confirm-button": "Verlängern"
          },
          "expired": {
            "header": "Postfach abgelaufen",
            "message": {
              "partner": "Ihr PEC-Postfach ist <b>abgelaufen</b>.<br><b>Sie empfangen weiterhin Nachrichten, können aber keine neuen senden. Prüfen Sie Ihr Postfach regelmäßig.</b><br>Sie können nach Ablauf noch 90 Tage lang lesend darauf zugreifen.<br>Danach werden Ihr Postfach und alle Inhalte endgültig gelöscht.<br>Wenden Sie sich an Ihren Dienstanbieter, um Ihr Postfach nicht zu verlieren.",
              "default": "Ihr Postfach ist am <b>{{expireDate}}</b> abgelaufen.<br>Bis <b>{{cancellationDate}}</b> können Sie weiterhin lesend auf Ihr Postfach zugreifen. <b>Sie empfangen weiterhin Nachrichten, können aber keine neuen senden. </b><br><b>Prüfen Sie Ihr Postfach regelmäßig.</b><br>Danach werden Ihr Postfach und alle Inhalte endgültig gelöscht."
            },
            "close": "Schließen"
          },
          "suspended-spam": {
            "header": "Postfach wegen Spam gesperrt",
            "message": {
              "partner": "Einige wichtige Funktionen Ihres Postfachs wurden wegen Spamverdacht deaktiviert. <br/>Um das Problem zu beheben, kontaktieren Sie den Support per E-Mail: <a href=\"mailto:info@arubapec.it\">info@arubapec.it</a>.",
              "default": "Einige wichtige Funktionen Ihres Postfachs wurden wegen Spamverdacht deaktiviert. <br>Um das Problem zu beheben, kontaktieren Sie den Support."
            },
            "support": "Support kontaktieren",
            "close": "Schließen"
          },
          "status": {
            "1": "Abgelaufen",
            "3": "Wegen Spam gesperrt"
          }
        },
        "sync-modules": {
          "title": "Synchronisierungsassistent",
          "toast": {
            "link-success": "Link kopiert"
          },
          "question": "Was möchten Sie synchronisieren?",
          "qr-code": "<strong>Öffnen Sie die Kamera und scannen Sie den QR-Code</strong> <br>Erkennt die Kamera-App ihn nicht, verwenden Sie vermutlich eine Version älter als iOS 11.<br>Aktualisieren Sie Ihr Betriebssystem oder laden Sie eine QR-Code-Scanner-App herunter.",
          "modules": {
            "messages": "Mail",
            "calendar": "Kalender",
            "contacts": "Kontakte"
          },
          "actions": {
            "return": "Zurück",
            "cancel": "Abbrechen",
            "next": "Weiter",
            "close": "Schließen",
            "copy": "Kopieren"
          },
          "application-password": {
            "generate": {
              "link": "Passwort generieren",
              "suffix": " für E-Mail-Programme"
            },
            "insert": {
              "prefix": "Geben Sie das",
              "credentials-prefix": "Geben Sie den <strong>Benutzernamen</strong> ({{mailAddress}}) und",
              "continue-prefix": "Klicken Sie auf Weiter und geben Sie das",
              "password": " Passwort ein"
            },
            "use": {
              "prefix": "Verwenden Sie das",
              "credentials-prefix": "Geben Sie den <strong>Benutzernamen</strong> ({{mailAddress}}) und das",
              "continue-prefix": "Klicken Sie auf Weiter und verwenden Sie das",
              "link": "Passwort für E-Mail-Programme",
              "suffix": ", das Sie generiert haben, ein"
            }
          },
          "steps": {
            "calendars": {
              "copy-url": "iCal-URL kopieren",
              "enable": "Aktivieren",
              "1-step": "Verwalten",
              "2-step": "Kalender",
              "3-step": "Plattform",
              "4-step": "Einrichtung",
              "platform-options": {
                "ios": "iOS-Kalender",
                "android": "Android-Kalender",
                "outlook": "Outlook-Kalender",
                "thunderbird": "Thunderbird-Kalender",
                "mac": "Mac-Kalender",
                "other": "Weitere Kalender"
              },
              "inner-steps": {
                "ios": {
                  "1-step": "<strong>Scannen Sie den QR-Code</strong> mit Ihrer Handykamera und laden Sie das Konfigurationsprofil herunter.",
                  "2-step": "Gehen Sie zu den <strong>Einstellungen Ihres Smartphones</strong> und tippen Sie auf das heruntergeladene und installierte Profil.",
                  "3-step": "<strong>Passwort eingeben</strong>",
                  "4-step": "Gehen Sie zu <strong>Einstellungen > Apps > Kalender > Standardkalender</strong> und wählen Sie Ihren Kalender aus"
                },
                "android": {
                  "1-step": "<strong>Laden Sie</strong> <a class='text-decoration-none' href='https://play.google.com/store/apps/details?id=it.aruba.arubasyncdav' target='_blank'>Aruba Sync DAV</a> <strong>herunter und öffnen Sie es</strong>.",
                  "1-step-shared": "<strong>Laden Sie</strong> <a class='text-decoration-none' href='https://play.google.com/store/apps/details?id=at.bitfire.davdroid' target='_blank'>DAVx⁵</a> <strong>herunter und öffnen Sie es</strong>.",
                  "2-step": "Geben Sie die <strong>Serveradresse</strong> {{syncUrl}}/{{mailAddress}}/ ein",
                  "3-step": "Geben Sie <strong>Benutzername</strong> ({{mailAddress}}) und <strong>Passwort</strong> ein."
                },
                "outlook": {
                  "1-step": "<strong>Laden Sie</strong> <a class='text-decoration-none' href='https://caldavsynchronizer.org/' target='_blank'>Outlook CalDav Synchronizer</a> <strong>herunter</strong>.",
                  "2-step": "Geben Sie die <strong>Serveradresse</strong> {{syncUrl}}/{{mailAddress}}/ ein",
                  "3-step": "Geben Sie <strong>Benutzername</strong> ({{mailAddress}}) und <strong>Passwort</strong> ein."
                },
                "thunderbird": {
                  "1-step": "<strong>Erstellen</strong> Sie in Thunderbird einen neuen <strong>Kalender</strong> <strong>im Netzwerk</strong>",
                  "2-step": "Geben Sie den <strong>Benutzernamen</strong> ({{mailAddress}}) und die <strong>Serveradresse</strong> {{syncUrl}}/{{mailAddress}}/ ein",
                  "3-step": "Geben Sie das <strong>Passwort</strong> des Postfachs ein."
                },
                "mac": {
                  "1-step": "<strong>Öffnen Sie den Mac-Kalender</strong> und <strong>wählen Sie Account hinzufügen</strong>",
                  "2-step": "<strong>Wählen Sie „CalDAV-Account“ und dann </strong> unter „Accounttyp“ die Option <strong>Manuell</strong>",
                  "3-step": "Geben Sie die <strong>Serveradresse</strong> {{syncUrl}}/{{mailAddress}}/ ein",
                  "4-step": "Geben Sie <strong>Benutzername</strong> ({{mailAddress}}) und <strong>Passwort</strong> ein."
                },
                "other": {
                  "1-step": "Geben Sie die <strong>Serveradresse</strong> {{syncUrl}}/{{mailAddress}}/ ein",
                  "2-step": "Geben Sie <strong>Benutzername</strong> ({{mailAddress}}) und <strong>Passwort</strong> ein.",
                  "3-step": "Geben Sie bei Bedarf <strong>Port 443</strong> ein und <strong>aktivieren Sie SSL</strong>"
                },
                "need-info": "Benötigen Sie weitere Informationen? <a class='text-decoration-none' href='{{url}}' target='_blank'>Zur Anleitung</a>",
                "update": "Möchten Sie die Synchronisierung aktualisieren? <a class='text-decoration-none' href='{{url}}' target='_blank'>Zur Anleitung</a>"
              },
              "radio": {
                "caldav": {
                  "title": "Lesen und bearbeiten",
                  "description": "Mit der CalDAV-Synchronisierung können Sie Termine lesen und bearbeiten."
                },
                "ical": {
                  "title": "Nur Lesen",
                  "description": "Mit der iCal-Synchronisierung haben Sie nur Lesezugriff auf Termine."
                },
                "subtitles": {
                  "first-step": "Wie möchten Sie Ihre Kalender verwalten?",
                  "second-step": "Welche Kalender möchten Sie synchronisieren?",
                  "third-step": "Wo möchten Sie die Kalender synchronisieren?",
                  "ical": "Was müssen Sie als Nächstes tun?"
                },
                "ical-info": "<strong>Fügen Sie die URLs</strong> in die Plattform ein, mit der Sie Ihre Kalender verwalten.<br>Die Kalender sind dann schreibgeschützt verfügbar."
              }
            },
            "messages": {
              "1-step": "Verwalten",
              "2-step": "Plattform",
              "3-step": "Einrichtung",
              "subtitles": {
                "first-step": "Wie möchten Sie Ihre E-Mails verwalten?",
                "second-step": "Wo möchten Sie Ihre E-Mails synchronisieren?"
              },
              "platform-options": {
                "ios": "iOS-Gerät",
                "android": "Android-Gerät",
                "computer": "Computer"
              },
              "radio": {
                "online": {
                  "title": "Nachrichten online speichern (empfohlen)",
                  "description": "Sie können sie in verschiedenen Apps und E-Mail-Programmen lesen und verwalten."
                },
                "offline": {
                  "title": "Nachrichten auf den Computer herunterladen",
                  "description": "Sie können sie nicht auf anderen Geräten lesen und verwalten."
                }
              }
            },
            "contacts": {
              "1-step": "Plattform",
              "2-step": "Einrichtung",
              "subtitles": {
                "first-step": "Wo möchten Sie die Kontakte synchronisieren?"
              },
              "inner-steps": {
                "ios": {
                  "1-step": "<strong>Scannen Sie den QR-Code</strong> mit Ihrer Handykamera und laden Sie das Konfigurationsprofil herunter.",
                  "2-step": "Gehen Sie zu den <strong>Einstellungen Ihres Smartphones</strong> und tippen Sie auf das heruntergeladene und installierte Profil.",
                  "3-step": "<strong>Passwort eingeben</strong>"
                },
                "android": {
                  "1-step": "<strong>Laden Sie</strong> <a class='text-decoration-none' href='https://play.google.com/store/apps/details?id=it.aruba.arubasyncdav' target='_blank'>Aruba Sync DAV</a> <strong>herunter und öffnen Sie es</strong>.",
                  "1-step-shared": "<strong>Laden Sie</strong> <a class='text-decoration-none' href='https://play.google.com/store/apps/details?id=at.bitfire.davdroid' target='_blank'>DAVx⁵</a> <strong>herunter und öffnen Sie es</strong>.",
                  "2-step": "Geben Sie die <strong>Serveradresse</strong> {{syncUrl}} ein",
                  "3-step": "Geben Sie <strong>Benutzername</strong> ({{mailAddress}}) und <strong>Passwort</strong> ein."
                },
                "outlook": {
                  "1-step": "<strong>Laden Sie</strong> <a class='text-decoration-none' href='https://caldavsynchronizer.org/' target='_blank'>Outlook CalDav Synchronizer</a> <strong>herunter</strong>.",
                  "2-step": "Geben Sie die <strong>Serveradresse</strong> {{syncUrl}} ein",
                  "3-step": "Geben Sie <strong>Benutzername</strong> ({{mailAddress}}) und <strong>Passwort</strong> ein."
                },
                "thunderbird": {
                  "1-step": "Klicken Sie auf <strong>Adressbuch</strong>, öffnen Sie das Menü Ihres <strong>neuen Adressbuchs</strong> und wählen Sie <strong>CardDAV-Adressbuch hinzufügen</strong>.",
                  "2-step": "Geben Sie den Benutzernamen und die <strong>Serveradresse</strong> {{syncUrl}} ein",
                  "3-step": "Klicken Sie auf Weiter und geben Sie das <strong>Passwort</strong> des Postfachs ein."
                },
                "mac": {
                  "1-step": "<strong>Öffnen Sie die Mac-Kontakte</strong> und <strong>wählen Sie Account hinzufügen</strong>",
                  "2-step": "<strong>Wählen Sie „CardDAV-Account“ und dann </strong> unter „Accounttyp“ die Option <strong>Manuell</strong>",
                  "3-step": "Geben Sie die <strong>Serveradresse</strong> {{syncUrl}} ein",
                  "4-step": "Geben Sie <strong>Benutzername</strong> ({{mailAddress}}) und <strong>Passwort</strong> ein."
                },
                "other": {
                  "1-step": "Geben Sie die <strong>Serveradresse</strong> {{syncUrl}} ein",
                  "2-step": "Geben Sie <strong>Benutzername</strong> ({{mailAddress}}) und <strong>Passwort</strong> ein.",
                  "3-step": "Geben Sie bei Bedarf <strong>Port 443</strong> ein und <strong>aktivieren Sie SSL</strong>"
                },
                "need-info": "Benötigen Sie weitere Informationen? <a class='text-decoration-none' href='{{url}}' target='_blank'>Zur Anleitung</a>",
                "update": "Möchten Sie die Synchronisierung aktualisieren? <a class='text-decoration-none' href='{{url}}' target='_blank'>Zur Anleitung</a>"
              },
              "platform-options": {
                "ios": "iOS-Kontakte",
                "android": "Android-Kontakte",
                "outlook": "Outlook-Kontakte",
                "thunderbird": "Thunderbird-Kontakte",
                "mac": "Mac-Kontakte",
                "other": "Andere Kontakte"
              }
            }
          }
        },
        "account-permissions-limited": {
          "title": "Eingeschränkte Berechtigungen",
          "info": {
            "line1": "Sie haben keine Berechtigung für diese Funktion.",
            "line2": {
              "supervisor": "Wenn Sie sie benötigen, kehren Sie zum Supervisore360-Bereich zurück und beantragen Sie eine Änderung der Berechtigungen.",
              "collaborator": "Wenn Sie sie benötigen, wenden Sie sich an den Postfach-Administrator."
            }
          },
          "action": {
            "supervisor": "Zurück zu Supervisore360",
            "collaborator": "Kontoberechtigungen"
          }
        },
        "account-permissions-delete": {
          "pel": {
            "header": "Möchten Sie das Konto löschen?",
            "question": "Wenn das Konto <b>{{login}}</b> endgültig gelöscht wird, kann es nicht mehr auf <b>{{mailAddress}}</b> zugreifen",
            "actions": {
              "yes": "Endgültig löschen",
              "no": "Abbrechen"
            }
          },
          "pec": {
            "header": "Möchten Sie das Konto deaktivieren?",
            "question": "Durch das Deaktivieren wird Ihr Konto <b>{{login}}</b> <b>endgültig</b> gelöscht und Sie können nicht mehr auf <b>{{mailAddress}}</b> zugreifen.<br><br> Um die Freigabe mit <b>{{mailAddress}}</b> fortzusetzen, müssen Sie den Inhaber bitten, ein neues Konto für Sie zu erstellen.",
            "actions": {
              "yes": "Endgültig deaktivieren",
              "no": "Abbrechen"
            }
          }
        },
        "supernews-dialog": {
          "next": "Weiter",
          "close": "Schließen",
          "back": "Zurück"
        },
        "welcome-wizard": {
          "pel": {
            "welcome": {
              "title": "Willkommen in Ihrem Postfach",
              "text": "<p>Beginnen Sie mit Ihrer Webmail.</p><p>Ab sofort können Sie Nachrichten senden und empfangen.</p>"
            },
            "recovery-email": {
              "title": "Wiederherstellungs-E-Mail",
              "text": "<p>Bevor Sie Ihre neue Webmail nutzen, empfehlen wir, eine E-Mail-Adresse anzugeben, um Ihr Passwort wiederherzustellen oder zurückzusetzen und Sicherheitswarnungen zu erhalten.</p>",
              "link": "Zu den Einstellungen",
              "subtext": "<p>Sie können später in den Einstellungen eine Wiederherstellungs-E-Mail-Adresse einrichten.</p>"
            },
            "reading-pane": {
              "title": "Lesebereich anpassen",
              "inbox-layout": {
                "vertical": "Rechts",
                "horizontal": "Unten",
                "full": "Immer erweitern"
              }
            }
          },
          "pec": {
            "welcome": {
              "title": "Willkommen in Ihrem PEC-Postfach",
              "text": "<p>Beginnen Sie mit Ihrer Webmail.</p><p>Ab sofort können Sie Nachrichten senden und empfangen.</p>"
            },
            "non-pec-messages": {
              "title": "Nicht-PEC-Nachrichten",
              "text": "<p>Ermöglicht den Empfang von Nicht-PEC-Nachrichten in Ihrem Postfach.</p><p> So werden keine Nachrichten blockiert und Sie können auch E-Mails von gewöhnlichen Postfächern empfangen.</p>",
              "field": {
                "label": "Empfang von Nicht-PEC-Nachrichten aktivieren"
              }
            },
            "receipt": {
              "title": "Annahme- und Zustellbestätigungen",
              "text": "<p>Erhalten Sie für jede gesendete PEC-Nachricht Annahme- und Zustellbestätigungen, die die korrekte Zustellung an den Empfänger bescheinigen.</p>",
              "field": {
                "label": "Sie können wählen, ob Bestätigungen ein- oder ausgeblendet werden",
                "options": {
                  "hide": {
                    "label": "Bestätigungen ausblenden (empfohlen)",
                    "text": "Der Posteingang enthält nur Nachrichten von Verbänden, Unternehmen oder Privatpersonen. Sie können die Bestätigungen jederzeit wieder einblenden."
                  },
                  "show": {
                    "label": "Bestätigungen anzeigen",
                    "text": "Der Posteingang enthält Nachrichten von Verbänden, Unternehmen oder Privatpersonen sowie Annahme- und Zustellbestätigungen."
                  }
                }
              }
            },
            "reading-pane": {
              "title": "Lesebereich anpassen",
              "inbox-layout": {
                "vertical": "Rechts",
                "horizontal": "Unten",
                "full": "Immer erweitern"
              }
            },
            "preservation": {
              "title": "Digitale Archivierung verwalten",
              "text": "Wählen Sie PEC-Nachrichten und Anhänge für die normgerechte digitale Archivierung, legen Sie Regeln für die automatische Archivierung fest und greifen Sie direkt im entsprechenden Bereich Ihrer PEC-Webmail auf gespeicherte Elemente zu. Die Optionen verwalten Sie in den Einstellungen."
            }
          },
          "actions": {
            "next": "Weiter",
            "return": "Zurück",
            "finish": "Jetzt starten"
          }
        },
        "ai-intro": {
          "title": "Mit Aruba AI effektiver schreiben und antworten",
          "text": "<p>Entdecken Sie Aruba AI, entwickelt, um die <strong>E-Mail-Verwaltung zu vereinfachen</strong>: Es hilft Ihnen, klarere Nachrichten zu schreiben, indem es Ton und Länge Ihrer Texte mit wenigen Klicks anpasst, und fasst selbst lange Verläufe zusammen – <strong>so sparen Sie Zeit</strong>.</p><p>Ihre Daten bleiben geschützt: <strong>Die KI wird von Aruba entwickelt</strong> und verwendet keine Inhalte zum Training von KI-Modellen.</p>",
          "close": "Schließen"
        },
        "digital-preservation": {
          "title": "Digitale Archivierung direkt in der PEC-Webmail verwalten",
          "text": "Wählen Sie PEC-Nachrichten für die normgerechte digitale Archivierung, legen Sie Regeln für die automatische Archivierung fest und greifen Sie direkt in Ihrer PEC-Webmail auf gespeicherte Elemente zu.",
          "text-link": "Zu den Einstellungen",
          "text-afterlink": "um die Optionen der digitalen Archivierung zu verwalten."
        },
        "external-link": {
          "title": "Daten senden",
          "text": "Sie senden Daten an eine externe Webseite. Möchten Sie wirklich fortfahren?",
          "confirm": "Bestätigen",
          "cancel": "Abbrechen"
        },
        "smime-promo": {
          "title": "S/MIME-Zertifikat",
          "text": "Mit S/MIME-Zertifikaten (Secure/Multipurpose Internet Mail Extensions) profitieren Sie von zahlreichen Vorteilen bei <b>Sicherheit</b> und <b>Wiedererkennbarkeit</b> und erhöhen die Vertraulichkeit Ihrer E-Mails. E-Mails werden digital signiert, sodass Empfänger die Integrität des Inhalts und die Echtheit des Absenders prüfen können, und Sie können verschlüsselte Nachrichten lesen."
        },
        "share": {
          "header": {
            "edit_rights": "Berechtigungen bearbeiten",
            "delete_share": "Freigabe aufheben"
          },
          "email": "Teilen mit",
          "rights": "Berechtigungen wählen",
          "rights_options": {
            "1": "Nur Lesen",
            "15": "Lesen und Schreiben"
          },
          "actions": {
            "revocation": "Widerrufen",
            "confirm": "Bestätigen",
            "cancel": "Abbrechen",
            "close": "Schließen",
            "add": "Adresse hinzufügen"
          },
          "errors": {
            "empty-email": "E-Mail-Adresse nicht eingegeben",
            "not-exists-email": "E-Mail-Adresse in der Domain nicht gefunden",
            "owner-email": "Sie können nicht Ihre eigene Adresse eingeben",
            "alreadyinsert-email": "Adresse bereits in der Liste"
          },
          "shares": "Freigabe",
          "no_shares": "Keine Freigaben vorhanden"
        }
      },
      "tooltip": {
        "dialog-close": "Schließen",
        "dialog-delete": "Löschen",
        "dialog-cancel": "Abbrechen",
        "dialog-minimize": "Minimieren",
        "dialog-expand": "Auf Vollbild erweitern",
        "dialog-reduce": "Auf Fenster verkleinern",
        "dialog-back": "Zurück",
        "dialog-download-file": "Herunterladen",
        "dialog-download-cloud": "In Datei speichern",
        "dialog-show-list-preview": "Liste anzeigen",
        "dialog-hide-list-preview": "Liste ausblenden",
        "tours": {
          "new-saved-search": {
            "title": "Gespeicherte Suchen",
            "message": "Speichern Sie Ihre Suchen und nutzen Sie erweiterte Filter, um die gewünschten Nachrichten leicht zu finden",
            "close": "Schließen"
          },
          "folders-important": {
            "title": "Prüfen Sie jetzt Ihre Ordner",
            "message": "Verschieben Sie Ihre persönlichen Ordner, indem Sie mit der rechten Maustaste auf den gewünschten Ordner klicken und „Zu Hauptordnern hinzufügen“ wählen.",
            "close": "Schließen"
          },
          "new-folders": {
            "title": "Neue Ordnerverwaltung",
            "message": "In den Einstellungen finden Sie u. a. Informationen zur neuen Ordnerverwaltung.",
            "settings": "Einstellungen",
            "close": "Schließen"
          },
          "new-message": {
            "title": "Nachrichteneditor",
            "message": "Dieser Bereich bietet schnelle und einfache Möglichkeiten, Ihre Nachrichten zu erstellen und zu gestalten.<br>Fügen Sie Bilder, Links und vieles mehr hinzu, um Ihre Nachrichten einzigartig zu machen.<br>Entdecken Sie alle Funktionen und erstellen Sie schnell und einfach ansprechendere Nachrichten!",
            "close": "Schließen"
          },
          "new-message-aruba-ai": {
            "title": "Verbessern Sie Ihre Inhalte mit Aruba AI",
            "message": "Korrigieren, kürzen, erweitern und passen Sie den Ton Ihrer Nachrichten mithilfe unserer KI an.",
            "close": "Schließen"
          },
          "new-contact": {
            "title": "Kontakte erstellen",
            "message": "Füllen Sie die erforderlichen Felder aus, um neue Kontakte hinzuzufügen, wichtige Details einzutragen und Ihr Adressbuch effizient zu verwalten.<br>Erstellen Sie Ihre Kontakte sofort in wenigen einfachen Schritten!",
            "close": "Schließen"
          },
          "new-event": {
            "title": "Termin erstellen",
            "message": "Planen und verwalten Sie Ihre Termine schnell und einfach. <br>Geben Sie die Details ein, wählen Sie Zeit und Ort und fügen Sie die gewünschten Eingeladenen hinzu.",
            "close": "Schließen"
          },
          "group-multiple-contact-address": {
            "title": "",
            "message": "",
            "addressBook": ""
          },
          "rapid-actions": {
            "title": "Sparen Sie Zeit mit Schnellaktionen",
            "message": "Möchten Sie eine E-Mail beantworten, weiterleiten oder archivieren? Nutzen Sie Schnellaktionen und entdecken Sie alle Nachrichtenoptionen der Webmail.",
            "close": "Schließen"
          }
        },
        "two-factor": {
          "title": "Zwei-Faktor-Authentifizierung aktivieren",
          "message": "Machen Sie Ihr Postfach mit der Bestätigung in zwei Schritten <b>noch sicherer</b>. Sie <b>autorisieren jeden Zugriff</b> über die App Aruba OTP.",
          "action": "Ausprobieren",
          "cancel": "Nicht jetzt"
        }
      },
      "paginator": {
        "page_next": "Weiter",
        "page_prev": "Zurück",
        "items_per_page": "Elemente pro Seite:",
        "page_range_singular": "{{offsetStart}} - {{offsetEnd}} von {{totalItems}} Element",
        "page_range_plural": "{{offsetStart}} - {{offsetEnd}} von {{totalItems}} Elementen",
        "page": "Seite {{page}} von {{totalPage}}"
      },
      "webmail-table": {
        "search": "Suchen...",
        "filter": "Filter",
        "all": "Alle",
        "move-up": "Nach oben",
        "move-down": "Nach unten"
      },
      "accordion": {
        "contact-reseller": "Wenden Sie sich an Ihren Dienstanbieter",
        "service_not_available": "Einige Funktionen sind derzeit nicht verfügbar. Bitte später erneut versuchen"
      },
      "banner": {
        "buy-business-mail": {
          "message": "Der Dienst Business Mail bietet neue Funktionen für eine professionelle, hochwertige E-Mail-Verwaltung.",
          "button": "Business Mail holen"
        },
        "changePecTypeToProPremium": {
          "message": "Vergrößern Sie Nachrichten- und Archivspeicher <b>durch ein Upgrade auf PEC Pro oder Premium</b>.",
          "button": "Upgrade auf PEC Pro oder Premium"
        },
        "changePecTypeToPremium": {
          "message": "Vergrößern Sie Nachrichten- und Archivspeicher <b>durch ein Upgrade auf PEC Premium</b>.",
          "button": "Upgrade auf PEC Premium"
        },
        "multi-user": {
          "message": {
            "pel": "Sie verwalten das Postfach <b>{{mailAddress}}</b>",
            "pec": "Sie verwalten das PEC-Postfach <b>{{mailAddress}}</b>"
          },
          "action": "Einstellungen und Berechtigungen",
          "manage-account": "Konto verwalten",
          "return-supervisor": "Zurück zu Supervisore360",
          "settings": "Einstellungen",
          "exit": "Abmelden"
        }
      },
      "exit-without-save": {
        "title": "Möchten Sie ohne Speichern fortfahren?",
        "message": "Vorgenommene Änderungen gehen verloren.",
        "confirm": "Ohne Speichern fortfahren",
        "cancel": "Abbrechen"
      },
      "months": {
        "10": "Oktober",
        "11": "November",
        "12": "Dezember",
        "01": "Januar",
        "02": "Februar",
        "03": "März",
        "04": "April",
        "05": "Mai",
        "06": "Juni",
        "07": "Juli",
        "08": "August",
        "09": "September"
      },
      "dates-placeholder": "TT/MM/JJJJ",
      "mobileApp": {
        "iosLink": "https://apps.apple.com/it/app/webmail-aruba-it/id965750348",
        "androidLink": "https://play.google.com/store/apps/details?id=com.aruba.aruba.it&hl=it&gl=US",
        "huaweiLink": "https://appgallery.huawei.com/app/C102354293",
        "androidLinkPec": "https://play.google.com/store/apps/details?id=it.aruba.pec.mobile",
        "iosLinkPec": "https://apps.apple.com/it/app/aruba-pec/id973510245"
      },
      "validation": {
        "email-local-part": "Sie können die Zeichen a-z, A-Z, 0-9, &, +, =, _, -, . verwenden"
      },
      "chatbot": {
        "firstMessage-pel": "Hallo! 👋 Ich bin Ihr KI-Assistent und helfe Ihnen bei Fragen zur Webmail. Was benötigen Sie?\n\nBitte geben Sie keine personenbezogenen Daten oder vertraulichen Informationen ein: Die Daten werden gemäß DSGVO verarbeitet ([Datenschutzerklärung](https://www.aruba.it/documents/tc-files/it/21_informativa_privacy_aruba_spa_chatbot.pdf)). Für solche Anliegen wenden Sie sich bitte an den Support.\n\nManche Antworten sind vielleicht nicht perfekt, da ich noch lerne.\n\nWie kann ich Ihnen heute helfen?",
        "firstMessage-pec": "Hallo! 👋 Ich bin Ihr KI-Assistent und helfe Ihnen bei Fragen zur Webmail. Was benötigen Sie?\n\nBitte geben Sie keine personenbezogenen Daten oder vertraulichen Informationen ein: Die Daten werden gemäß DSGVO verarbeitet ([Datenschutzerklärung](https://www.pec.it/documents/tc-files/it/116_informativaprivacyarubapecchatbot.pdf))). Für solche Anliegen wenden Sie sich bitte an den Support.\n\nManche Antworten sind vielleicht nicht perfekt, da ich noch lerne.\n\nWie kann ich Ihnen heute helfen?",
        "pec-plus": {
          "first-question": "Kann ich mein Postfach auch ohne abgeschlossene Identitätsprüfung nutzen?",
          "second-question": "Die beigefügten Unterlagen wurden abgelehnt, weil der gesetzliche Vertreter nicht anerkannt ist. Was soll ich tun?",
          "third-question": "Warum muss ich ein Upgrade durchführen?"
        }
      }
    },
    "editor": {
      "format": "Format",
      "bold": "Fett",
      "italic": "Kursiv",
      "underline": "Unterstrichen",
      "strike": "Durchgestrichen",
      "colors": "Farben",
      "text-color": "Textfarbe",
      "bg-text-color": "Textmarker",
      "border-color": "Rahmenfarbe",
      "align": "Ausrichtung",
      "align-to-left": "Linksbündig",
      "align-to-right": "Rechtsbündig",
      "center": "Zentriert",
      "justify": "Blocksatz",
      "vertical-align": "Vertikale Ausrichtung",
      "horizontal-align": "Horizontale Ausrichtung",
      "font-size": "Schriftgröße",
      "very-small": "Winzig",
      "small": "Klein",
      "standard": "Normal",
      "big": "Groß",
      "very-big": "Sehr groß",
      "font-type": "Schriftart",
      "huge": "Sehr groß",
      "list": "Liste",
      "numeric-list": "Nummerierte Liste",
      "dot-list": "Aufzählung",
      "indent": "Einzug",
      "indented-left": "Einzug verkleinern",
      "indented-right": "Einzug vergrößern",
      "table": "Tabelle",
      "add-table": "Tabelle hinzufügen",
      "edit-table": "Tabelle bearbeiten",
      "delete-table": "Tabelle löschen",
      "add-row-up": "Zeile oberhalb einfügen",
      "add-row-down": "Zeile unterhalb einfügen",
      "delete-row": "Zeile löschen",
      "upload-image": "Bild hochladen",
      "insert-link": "Link einfügen",
      "more": "Mehr",
      "block-quote": "Zitat",
      "remove-format": "Formatierung entfernen",
      "colors-map": {
        "black": "Schwarz",
        "dark-grey": "Dunkelgrau",
        "grey": "Grau",
        "light-grey": "Hellgrau",
        "dark-red": "Dunkelrot",
        "red": "Rot",
        "light-red": "Hellrot",
        "dark-blue": "Dunkelblau",
        "blue": "Blau",
        "light-blue": "Hellblau",
        "dark-green": "Dunkelgrün",
        "green": "Grün",
        "light-green": "Hellgrün",
        "dark-yellow": "Dunkelgelb",
        "yellow": "Gelb",
        "light-yellow": "Hellgelb"
      }
    },
    "browser-not-supported": {
      "title": "Ihr Browser unterstützt die neue Webmail nicht",
      "sub-title": "Stellen Sie für den Zugriff sicher, dass Sie die neueste Version eines dieser Browser verwenden:",
      "go-to-guide": "Wenn Sie Hilfe benötigen, lesen Sie die <a href=\"https://guide.aruba.it/risorse/compatibilita/compatibilita-webmail-aruba\" target=\"_blank\">Anleitungen</a>.",
      "go-to-guide-pec": "Wenn Sie Hilfe benötigen, lesen Sie die <a href=\"https://guide.pec.it/posta-pec/webmail/requisiti-utilizzo/come-verificare-la-versione-utilizzata-del-browser.aspx\" target=\"_blank\">Anleitungen</a>.",
      "back-to-smart-pec": "Möchten Sie weiterhin die vorherige Version nutzen? Hier entlang: <span class=\"link\" onclick=\"redirectSmartPec()\">Webmail Smart</span>.",
      "google-chrome": "Google Chrome",
      "safari": "Safari",
      "mozilla": "Mozilla",
      "opera": "Opera",
      "microsoft-edge": "Microsoft Edge"
    },
    "errors": {
      "backend": {
        "120": "Konto konnte nicht erstellt werden.",
        "139": "Das Kontopasswort wurde geändert.",
        "140": "Passwort kann nicht geändert werden.",
        "142": "Keine Berechtigung.",
        "143": "Fehler bei Verzeichnisberechtigungen.",
        "148": "Ungültiger E-Mail-Kontoname.",
        "149": "Das letzte Element kann nicht gelöscht werden.",
        "150": "Dateifehler.",
        "153": "Benutzername existiert nicht.",
        "155": "Die Aktion ist ungültig.",
        "157": "Sie haben die maximale Anzahl an E-Mail-Adressen für Ihren Alias erreicht.",
        "158": "Sie haben die maximale Anzahl an Autorespondern erreicht.",
        "160": "Ungültiger Alias.",
        "161": "E-Mail-Adresse kann nicht zum Alias hinzugefügt werden. Bitte prüfen Sie die Eingabe.",
        "162": "Ungültige E-Mail-Adresse.",
        "163": "Ungültige reale E-Mail-Adresse.",
        "167": "Alias konnte nicht gelöscht werden.",
        "173": "Ein Konto, Alias oder eine Mailingliste mit diesem Namen existiert bereits.",
        "174": "Ungültige Autoresponder-E-Mail-Adresse.",
        "175": "Ein Postfach, Alias oder eine Mailingliste mit diesem Namen existiert bereits. Bitte ändern Sie ihn und versuchen Sie es erneut.",
        "176": "Ein Autoresponder-Name ist erforderlich.",
        "177": "Ungültige E-Mail-Adresse.",
        "178": "Bitte geben Sie einen Betreff ein.",
        "179": "Bitte geben Sie eine Nachricht ein.",
        "180": "Sie haben die Grenze von 32 Zeichen für das Feld <b>Name</b> überschritten.",
        "184": "Sie haben die maximale Anzahl an Mailinglisten erreicht.",
        "188": "Ungültige E-Mail-Adresse für Mailingliste.",
        "198": "Altes Passwort ist falsch.",
        "199": "Sie haben die maximale Anzahl an E-Mail-Konten erreicht.",
        "200": "Passwörter stimmen nicht überein. Bitte erneut versuchen.",
        "201": "Server hat keinen Speicher mehr. Programm kann nicht ausgeführt werden.",
        "215": "Sie müssen eine Weiterleitungsadresse angeben.",
        "216": "Die Nachricht muss einen Betreff haben.",
        "223": "Konto nicht gefunden.",
        "231": "Keine Mailinglisten vorhanden.",
        "232": "Keine Aliase vorhanden.",
        "234": "Passwort ist erforderlich.",
        "240": "Ein Passwort darf keinen Backslash enthalten.",
        "307": "Ungültiger Wert für den Kontospeicher.",
        "308": "Kontospeicher auf unbegrenzt gesetzt.",
        "309": "Speicherlimit des Kontos wurde festgelegt.",
        "314": "Speicherlimit des Kontos ungültig.",
        "315": "Postfach wurde gelöscht. Weiterleitung kann nicht eingerichtet werden.",
        "317": "Das Postmaster-Konto kann nicht gelöscht werden.",
        "318": "Bitte geben Sie den realen Kontonamen ein.",
        "319": "Das Postmaster-Konto kann nicht deaktiviert werden.",
        "321": "Konto konnte nicht deaktiviert werden. Bitte später erneut versuchen.",
        "322": "Konto konnte nicht erstellt werden. Bitte später erneut versuchen.",
        "329": "Neue Konten können nicht erstellt werden.",
        "330": "Konten können nicht erstellt werden.",
        "331": "Konten, die andere Konten verwalten, können nicht gelöscht werden.",
        "336": "Das Passwort muss mindestens 8 Zeichen enthalten.",
        "352": "Geben Sie einen gültigen Endtag für die automatische Antwort ein.",
        "353": "Geben Sie einen gültigen Endmonat für die automatische Antwort ein.",
        "354": "Geben Sie ein gültiges Endjahr für die automatische Antwort ein.",
        "356": "Das eingegebene Datum liegt in der Vergangenheit.",
        "400": "Das neue Passwort ist identisch mit dem alten.",
        "1000": "Sitzung ist ungültig.",
        "1001": "Sie haben keine Berechtigung, Ihr Passwort zu ändern.",
        "1002": "Konvertierungsfehler (iconv).",
        "1003": "Zugriff auf das Verzeichnis des Benutzerkontos nicht möglich.",
        "1004": "Ungültige E-Mail, das @-Zeichen fehlt.",
        "1005": "Sie haben keine Berechtigung, das Postmaster-Passwort zu ändern.",
        "1100": "Fehlende Informationen bei der Passwortprüfung.",
        "1101": "Ihr Passwort darf nicht mit Ihrem Anmeldenamen übereinstimmen.",
        "1102": "Ihr Passwort darf nicht mit dem Domainnamen übereinstimmen.",
        "1103": "Ihr Passwort darf nicht mit Ihrem Anmeldenamen oder dem Domainnamen übereinstimmen.",
        "1104": "Ihr Passwort darf nicht aus Ihrem Anmeldenamen oder Domainnamen oder einer Kombination daraus bestehen, es sei denn, davor oder danach stehen mehrere Zeichen (Buchstaben, Ziffern, Symbole). Fügen Sie Zeichen hinzu oder verwenden Sie Ihren Anmelde- bzw. Domainnamen nicht.",
        "1105": "Ihr Passwort darf nicht aus einem einzigen wiederholten Zeichen bestehen.",
        "1106": "Ihr Passwort darf keine geordnete Folge von Ziffern oder Zeichen enthalten.",
        "1107": "Ihr Passwort darf weder Ihren Anmeldenamen, Teile Ihres Domainnamens noch eine geordnete Zeichenfolge enthalten.",
        "1108": "Das Passwort enthält unzulässige Zeichen.",
        "1109": "Das Passwort ist zu lang.",
        "1110": "Die E-Mail-Adresse ist zu lang.",
        "1111": "Der Kontoname ist zu lang.",
        "1112": "Das Passwort erfüllt die Anforderungen nicht.",
        "1113": "Altes und neues Passwort sind identisch.",
        "2109": "Der Backup-Dienst ist vorübergehend nicht verfügbar.",
        "2119": "Backup-Status konnte nicht geändert werden. Bitte erneut versuchen.",
        "2129": "Beim Abrufen der Informationen ist ein Problem aufgetreten. Bitte erneut versuchen.",
        "2139": "Informationen konnten nicht gespeichert werden. Bitte erneut versuchen.",
        "3001": "Fehler beim Aufruf des Webdienstes.",
        "3002": "Einer der erforderlichen Parameter ist leer.",
        "3003": "Domain ungültig.",
        "3004": "Filterrichtlinie der Domain ist ungültig.",
        "3005": "Domain existiert nicht.",
        "3006": "Benutzer existiert bereits und kann nicht hinzugefügt werden.",
        "3007": "Benutzer wurde nicht gefunden und kann nicht gelöscht werden.",
        "3008": "Funktion nicht verfügbar.",
        "5006": "Sitzung abgelaufen",
        "5007": "Sitzung abgelaufen",
        "10000": "Ein Authentifizierungsfehler ist aufgetreten",
        "81009": "Sitzung abgelaufen",
        "100001": "Fehlender Parameter.",
        "100002": "Ungültiger Wert.",
        "100003": "Hochgeladene Datei kann nicht geöffnet werden.",
        "100004": "Der Dateiname hat nicht die Erweiterung .csv oder .CSV.",
        "100005": "Dateien können nicht hochgeladen werden.",
        "100006": "Sitzung abgelaufen. Bitte melden Sie sich erneut an.",
        "100007": "Ein Fehler ist aufgetreten. Bitte später erneut versuchen.",
        "100008": "Sie haben keine Berechtigung für diese Funktion.",
        "100050": "Die Datei ist zu groß.",
        "100100": "Sie haben keine Berechtigung, diese Mailingliste zu bearbeiten.",
        "100101": "Sie können Ihre eigenen Berechtigungen nicht ändern.",
        "100102": "Sie können die Berechtigungen von Administratoren nicht ändern.",
        "100103": "Administrator der Mailingliste wurde nicht gefunden.",
        "100104": "",
        "100201": "Die E-Mail-Adresse ist bereits in der Liste.",
        "100202": "Diese Adresse kann nicht gelöscht werden.",
        "100203": "Ungültiges E-Mail-Adressformat.",
        "100204": "E-Mail-Adresse kann nicht zur Blacklist hinzugefügt werden. Sie haben die maximale Anzahl unsicherer Adressen erreicht.",
        "100205": "Liste konnte nicht importiert werden. Mit den Adressen aus der Datei würde die maximale Anzahl an Absendern für die Blacklist überschritten.",
        "100206": "E-Mail-Adresse kann nicht zur Whitelist hinzugefügt werden. Sie haben die maximale Anzahl sicherer Absender und Empfänger erreicht.",
        "100207": "Liste konnte nicht importiert werden. Mit den Adressen aus der Datei würde die maximale Anzahl sicherer Absender und Empfänger überschritten.",
        "100300": "Vorlage nicht gefunden.",
        "100400": "Daten der Cookie-Richtlinie können nicht geladen werden.",
        "100401": "Sie haben keine Berechtigung für die Daten der Cookie-Richtlinie.",
        "100402": "Zugriff auf die Datenbank der Cookie-Richtlinie nicht möglich.",
        "100403": "Daten der Cookie-Richtlinie können nicht aktualisiert werden.",
        "100404": "Die ausgewählte Datei ist kein PDF.",
        "100500": "Regel nicht gefunden.",
        "100501": "Eine Regel mit diesem Namen existiert bereits.",
        "100502": "Regel kann nicht verschoben werden.",
        "100503": "Zum Erstellen einer Regel ist mindestens ein Kriterium erforderlich.",
        "100600": "Benutzer nicht gefunden.",
        "100650": "Willkommens-E-Mail konnte nicht erstellt werden.",
        "100701": "Verbindung zum LDAP-Server fehlgeschlagen.",
        "100702": "Dynamischer Speicher kann nicht zugewiesen werden.",
        "100703": "Beim Kodieren der Parameter für den LDAP-Server ist ein Fehler aufgetreten.",
        "100704": "Beim Dekodieren einer Antwort des LDAP-Servers ist ein Fehler aufgetreten.",
        "100705": "Sitzung abgelaufen. Bitte erneut versuchen.",
        "100706": "Unbekannte Authentifizierungsmethode angegeben.",
        "100707": "Der eingegebene Filter ist ungültig.",
        "100708": "Die LDAP-Suche enthält einen falschen Parameter.",
        "100709": "Speicherzuweisung in der LDAP-Bibliothek fehlgeschlagen.",
        "100710": "Der Vorgang wurde abgebrochen.",
        "100711": "Ein Verbindungsfehler ist aufgetreten.",
        "100712": "Funktion wird von der Bibliothek nicht unterstützt.",
        "100713": "LDAP-Controls nicht gefunden.",
        "100714": "Kein Ergebnis gefunden.",
        "100715": "Möglicherweise wurde mehr als ein Ergebnis gefunden.",
        "100716": "Die Bibliothek hat eine Schleife erkannt. Prüfen Sie die eingegebenen Parameter.",
        "100717": "Sitzung abgelaufen. Bitte erneut versuchen.",
        "100748": "Ungültige Authentifizierungsmethode.",
        "100749": "Falsche Anmeldedaten.",
        "100750": "Vorgang wegen unzureichender Berechtigungen nicht möglich.",
        "100800": "Fehler in der Admin-API. Bitte später erneut versuchen.<br> Wenn das Problem weiterhin besteht, eröffnen Sie bitte ein Support-Ticket mit der vollständigen Fehlermeldung und einer Beschreibung, was Sie gerade getan haben.",
        "100801": "Fehler in der Admin-API. Bitte später erneut versuchen.<br> Wenn das Problem weiterhin besteht, eröffnen Sie bitte ein Support-Ticket mit der vollständigen Fehlermeldung und einer Beschreibung, was Sie gerade getan haben.",
        "100802": "Fehler in der Admin-API. Bitte später erneut versuchen.<br> Wenn das Problem weiterhin besteht, eröffnen Sie bitte ein Support-Ticket mit der vollständigen Fehlermeldung und einer Beschreibung, was Sie gerade getan haben.",
        "100803": "Fehler in der Admin-API. Bitte später erneut versuchen.<br> Wenn das Problem weiterhin besteht, eröffnen Sie bitte ein Support-Ticket mit der vollständigen Fehlermeldung und einer Beschreibung, was Sie gerade getan haben.",
        "100804": "Fehler in der Admin-API. Bitte später erneut versuchen.<br> Wenn das Problem weiterhin besteht, eröffnen Sie bitte ein Support-Ticket mit der vollständigen Fehlermeldung und einer Beschreibung, was Sie gerade getan haben.",
        "100805": "Fehler in der Admin-API. Bitte später erneut versuchen.<br> Wenn das Problem weiterhin besteht, eröffnen Sie bitte ein Support-Ticket mit der vollständigen Fehlermeldung und einer Beschreibung, was Sie gerade getan haben.",
        "100806": "Fehler in der Admin-API. Bitte später erneut versuchen.<br> Wenn das Problem weiterhin besteht, eröffnen Sie bitte ein Support-Ticket mit der vollständigen Fehlermeldung und einer Beschreibung, was Sie gerade getan haben.",
        "100807": "Fehler in der Admin-API. Bitte später erneut versuchen.<br> Wenn das Problem weiterhin besteht, eröffnen Sie bitte ein Support-Ticket mit der vollständigen Fehlermeldung und einer Beschreibung, was Sie gerade getan haben.",
        "100808": "Ein Verbindungsfehler (Zeitüberschreitung) mit unseren Servern ist aufgetreten. Bitte später erneut versuchen; wenn das Problem weiterhin besteht, wenden Sie sich an den technischen Support.",
        "100809": "Ein Verbindungsfehler (Verbindung abgelehnt) mit unseren Servern ist aufgetreten. Bitte später erneut versuchen; wenn das Problem weiterhin besteht, wenden Sie sich an den technischen Support.",
        "100900": "Aruba Drive konnte nicht aktiviert werden. Stellen Sie sicher, dass die Aktivierung korrekt abgeschlossen wurde.",
        "100901": "Prüfen Sie, ob die Aruba-Drive-URL gültig ist und das Präfix „www“ enthält.",
        "100902": "Die Verbindung zu Aruba Drive wurde unterbrochen.",
        "101003": "Ihre Anfrage entspricht nicht unseren ethischen Richtlinien oder wird vom System nicht unterstützt.",
        "101016": "Sie haben das Tageslimit für Aruba AI erreicht. Versuchen Sie es morgen erneut",
        "101017": "Sie haben das Monatslimit für Aruba AI erreicht. Versuchen Sie es nächsten Monat erneut",
        "101103": "Bitte warten Sie 30 Sekunden, bevor Sie den Vorgang wiederholen.",
        "101104": "Telefonnummer ungültig.",
        "101105": "Fehler bei der Verarbeitung der Anfrage.",
        "200000": "Sitzung abgelaufen. Bitte melden Sie sich erneut an.",
        "200001": "Der Chat-Server unterstützt den angeforderten Vorgang nicht.",
        "200002": "Chat antwortet nicht.",
        "200003": "Fehlende HTTP-Parameter für die angeforderte Aktion.",
        "200004": "Der Chat hat eine ungültige Antwort zurückgegeben.",
        "200005": "Der Chat wurde nicht korrekt konfiguriert.",
        "300000": "Sitzung abgelaufen. Bitte melden Sie sich erneut an.",
        "300001": "Verbindung zum Mailserver fehlgeschlagen.",
        "300002": "Vorgang nicht möglich. Beim Melden von Spam ist ein unerwarteter Fehler aufgetreten.",
        "400001": "Leider ist die maximale Teilnehmerzahl für die Vorschau der Bestätigung in zwei Schritten erreicht.",
        "400135": "Nachricht aus Ihrem Postfach entfernt.",
        "500000": "Ein Verbindungsfehler (falsche Kodierung) mit unseren Servern ist aufgetreten. Bitte später erneut versuchen; wenn das Problem weiterhin besteht, wenden Sie sich an den technischen Support.",
        "500001": "Die ausgewählte Domain existiert nicht.",
        "500002": "Das Passwort ist zu lang.",
        "500003": "Das Passwort ist zu lang.",
        "500004": "Die verfügbaren E-Mail-Speicher sind weniger als die angewendeten.",
        "500005": "Die verfügbaren GigaMails sind weniger als die angewendeten.",
        "500006": "Einige Konfigurationen fehlen. Bitte später erneut versuchen; wenn das Problem weiterhin besteht, wenden Sie sich an den technischen Support.",
        "500007": "Ein Autoresponder mit diesem Namen existiert bereits.",
        "500008": "Der Autoresponder konnte nicht gespeichert werden. Prüfen Sie die Angaben.",
        "500009": "Der ausgewählte Autoresponder existiert nicht.",
        "500010": "Der Administrator konnte nicht gespeichert werden. Prüfen Sie die Angaben.",
        "500011": "Der ausgewählte Administrator existiert nicht.",
        "500012": "Ein Administrator mit diesem Namen existiert bereits.",
        "500013": "Der ausgewählte Benutzer existiert nicht.",
        "500014": "Der ausgewählte Alias existiert nicht.",
        "500015": "Alias existiert bereits.",
        "500016": "Der Alias konnte nicht gespeichert werden. Prüfen Sie die Angaben.",
        "500017": "Adresse nicht in der Blacklist enthalten.",
        "500018": "Adresse ist bereits in der Blacklist oder Whitelist.",
        "500019": "Adresse nicht in der Whitelist enthalten.",
        "500020": "Adresse ist bereits in der Blacklist oder Whitelist.",
        "500021": "Der Whitelist-Eintrag konnte nicht gespeichert werden. Prüfen Sie die Angaben und versuchen Sie es erneut.",
        "500022": "Ein Filter mit diesem Namen existiert bereits.",
        "500023": "Beim Speichern des Filters ist ein Fehler aufgetreten. Bitte prüfen Sie die Angaben.",
        "500024": "Filterordner nicht gefunden.",
        "500027": "Beim Speichern des Benutzers ist ein Fehler aufgetreten. Bitte prüfen Sie die Angaben.",
        "500028": "Ein Fehler ist aufgetreten. Bitte später erneut versuchen; wenn das Problem weiterhin besteht, wenden Sie sich an den Support.",
        "500029": "Ein Fehler ist aufgetreten. Bitte später erneut versuchen; wenn das Problem weiterhin besteht, wenden Sie sich an den Support.",
        "500030": "Ein Fehler ist aufgetreten. Bitte später erneut versuchen; wenn das Problem weiterhin besteht, wenden Sie sich an den Support.",
        "500031": "Ein Fehler ist aufgetreten. Bitte später erneut versuchen; wenn das Problem weiterhin besteht, wenden Sie sich an den Support.",
        "500032": "Ein Fehler ist aufgetreten. Bitte später erneut versuchen; wenn das Problem weiterhin besteht, wenden Sie sich an den Support.",
        "500033": "Ein Fehler ist aufgetreten. Bitte später erneut versuchen; wenn das Problem weiterhin besteht, wenden Sie sich an den Support.",
        "500034": "Beim Speichern der Domain ist ein Fehler aufgetreten. Bitte prüfen Sie die Angaben.",
        "500035": "Für diesen Ordner gibt es bereits ein aktives Archiv.",
        "500036": "Die Funktion Sicherheitsarchiv ist für dieses Postfach nicht aktiviert.",
        "500037": "GigaMail-Konfigurationen fehlen. Bitte später erneut versuchen; wenn das Problem weiterhin besteht, wenden Sie sich an den Support.",
        "500038": "Konfigurationen für E-Mail-Speicher fehlen. Bitte später erneut versuchen; wenn das Problem weiterhin besteht, wenden Sie sich an den Support.",
        "500039": "Beim Speichern eines Blacklist-Eintrags ist ein Fehler aufgetreten. Bitte prüfen Sie die Angaben.",
        "500040": "Bei der Konfiguration des Antispam ist ein Fehler aufgetreten. Bitte prüfen Sie die Angaben.",
        "500041": "Beim Speichern der Antispam-Einstellungen ist ein Fehler aufgetreten. Bitte prüfen Sie die Angaben.",
        "500042": "Ein Fehler ist aufgetreten. Bitte später erneut versuchen; wenn das Problem weiterhin besteht, wenden Sie sich an den Support.",
        "500048": "Der Ordner konnte nicht erstellt werden. Bitte später erneut versuchen; wenn das Problem weiterhin besteht, wenden Sie sich an den Support.",
        "500049": "In der Ordnerliste ist ein Fehler aufgetreten. Bitte später erneut versuchen; wenn das Problem weiterhin besteht, wenden Sie sich an den Support.",
        "500050": "Beim Lesen der Dateien ist ein Fehler aufgetreten. Bitte später erneut versuchen; wenn das Problem weiterhin besteht, wenden Sie sich an den Support.",
        "500051": "Beim Speichern des Archivs ist ein Fehler aufgetreten. Bitte prüfen Sie die Angaben.",
        "500052": "Zu viele GigaMails für die gekaufte Anzahl.",
        "500053": "Zu viele angewendete GigaMails für die verfügbare Anzahl.",
        "500054": "Unbegrenzter E-Mail-Speicher kann auf dieses Postfach nicht angewendet werden. Die maximale Anzahl an Postfächern mit unbegrenztem E-Mail-Speicher ist erreicht.",
        "500055": "Fehler beim Wert maxQuota. Bitte später erneut versuchen; wenn das Problem weiterhin besteht, wenden Sie sich an den Support.",
        "500056": "Fehler beim Wert maxQuota. Bitte später erneut versuchen; wenn das Problem weiterhin besteht, wenden Sie sich an den Support.",
        "500063": "Der ausgewählte Alias enthält nur eine Empfängeradresse.",
        "500064": "Ein Postfach, Alias oder eine Mailingliste mit diesem Namen existiert bereits. Bitte ändern Sie ihn und versuchen Sie es erneut.",
        "500065": "Sie haben die maximale Anzahl an Postfächern erreicht.",
        "500068": "In der Mailingliste ist bereits jemand mit diesem Namen eingetragen.",
        "500073": "In der Mailingliste gibt es bereits einen Moderator mit diesem Namen.",
        "500075": "Eine Mailingliste mit diesem Namen existiert bereits.",
        "500100": "Authentifizierungsfehler (OAuth2-Token falsch oder abgelaufen). Bitte später erneut versuchen; wenn das Problem weiterhin besteht, wenden Sie sich an den Support.",
        "500101": "Die ausgewählte Domain existiert nicht",
        "500102": "Archiv in dieser Installation nicht aktiviert. Bitte wenden Sie sich an den Support.",
        "500109": "Ein Alias, Autoresponder oder eine Mailingliste mit diesem Namen existiert bereits.",
        "500157": "Sie haben die maximale Anzahl an Adressen erreicht.",
        "082": "Fehler beim Öffnen von .qmail-default.",
        "default": "Ein Verarbeitungsfehler ist aufgetreten.",
        "default-with-error-code": "Ein Verarbeitungsfehler ist aufgetreten.{{errorCode}}"
      }
    },
    "submenu": {
      "models": {
        "title": "Vorlage eingeben...",
        "button": "Als neue Vorlage speichern"
      }
    },
    "pec-plus-transition": {
      "page": {
        "alerts": {
          "warning": {
            "title": "Ihr PEC-Postfach entspricht nicht den europäischen Standards",
            "text": "Bringen Sie Ihre PEC auf europäischen Standard und erhalten Sie kostenlos das blaue Häkchen. <br>Bestätigen Sie einfach Ihre Identität und aktivieren Sie die Bestätigung in zwei Schritten.",
            "action": "Warum ist das notwendig?"
          },
          "danger": {
            "title": "In {{days}} Tagen können Sie Ihre PEC nicht mehr nutzen.",
            "text": "Um sie weiter zu nutzen, bringen Sie Ihre PEC auf europäischen Standard und erhalten Sie kostenlos das <br>blaue Häkchen. Bestätigen Sie einfach Ihre Identität und aktivieren Sie die Bestätigung in zwei Schritten."
          }
        },
        "box": {
          "identity": {
            "title": "Identität",
            "status": {
              "NotIdentified": {
                "label": "Zu bestätigen",
                "message": "Anerkannter Inhaber werden",
                "items": {
                  "how-much-time": "<b>Wie lange dauert es?</b> 2 Minuten",
                  "needed": "<b>Was wird benötigt?</b> Ein gültiger, zertifizierter Identifizierungsdienst (z. B. CIE)"
                }
              },
              "OK": {
                "label": "Abgeschlossen",
                "message": "Sie sind jetzt anerkannter Inhaber des PEC-Postfachs"
              },
              "IdentificationInProgress": {
                "label": "Überprüfung läuft",
                "message": "<b>Wir überprüfen Ihre Identität</b><br><br>Die Überprüfung kann mehrere Stunden dauern. Sie werden per E-Mail über das Ergebnis informiert."
              },
              "LegalValidationFailed": {
                "label": "Dokumente fehlen",
                "message": "Wir haben Ihre Dokumente geprüft, es sind jedoch weitere Unterlagen erforderlich, um anerkannter Inhaber zu werden."
              },
              "DocumentsRequired": {
                "label": "Dokumente fehlen",
                "message": "Wir haben Ihre Dokumente geprüft, es sind jedoch weitere Unterlagen erforderlich, um anerkannter Inhaber zu werden."
              },
              "IdentificationPending": {
                "label": "Zu bestätigen",
                "items": {
                  "how-much-time": "<b>Fast geschafft.</b> Schließen Sie die Identifizierung bis {{ExpireDate}} ab"
                }
              },
              "TerritorioPending": {
                "label": "Zu bestätigen",
                "items": {
                  "how-much-time": "<b>Fast geschafft. </b>Gehen Sie bis {{ExpireDate}} zu einer autorisierten Stelle"
                }
              }
            }
          },
          "2fa": {
            "title": "Bestätigung in zwei Schritten",
            "status": {
              "not-active": {
                "label": "Nicht aktiviert",
                "message": "Machen Sie Ihre PEC noch sicherer",
                "items": {
                  "how-much-time": "<b>Wie lange dauert es?</b> 2 Minuten",
                  "needed": "<b>Was wird benötigt?</b> Die App Aruba PEC"
                }
              },
              "active": {
                "label": "Aktiviert",
                "message": "Ihre PEC ist jetzt noch sicherer"
              }
            }
          }
        },
        "actions": {
          "remind-me-later": "Später erinnern",
          "adjust-pec-now": {
            "all": "Machen Sie Ihre PEC jetzt konform",
            "confirm-identity": "Identität bestätigen",
            "activate-2fa": " Bestätigung in zwei Schritten aktivieren",
            "send-documentations": "Fehlende Unterlagen senden"
          }
        }
      },
      "banner": {
        "title": "Bringen Sie Ihre PEC auf europäischen Standard",
        "average-time": "Durchschnittliche Dauer 2 Minuten",
        "message": {
          "multi": "Erhalten Sie kostenlos das <b>blaue Häkchen</b> als Konformitätssymbol. <br>Bestätigen Sie einfach Ihre Identität und aktivieren Sie die Bestätigung in zwei Schritten.",
          "identity": "Erhalten Sie kostenlos das <b>blaue Häkchen</b> als Konformitätssymbol. <br>Bestätigen Sie einfach Ihre Identität.",
          "2fa": "Erhalten Sie kostenlos das <b>blaue Häkchen</b> als Konformitätssymbol. <br>Aktivieren Sie einfach die Bestätigung in zwei Schritten."
        },
        "actions": {
          "why-do": "Warum ist das notwendig?",
          "identity": "Identität bestätigen",
          "2fa": "Bestätigung in zwei Schritten aktivieren",
          "remind-me-later": "Später erinnern"
        }
      }
    },
    "settings": {
      "label": "Einstellungen",
      "home": {
        "title": "Einstellungen",
        "description": "Zugriff auf alle Einstellungen und Konfigurationsoptionen.",
        "keywords": "Einstellungen, Konfiguration, Optionen, Präferenzen, settings"
      },
      "mailbox": {
        "information": {
          "title": "Details",
          "description": "Postfach",
          "keywords": "Postfach, Info, Profil, Avatar, Bild, Name, E-Mail, email, Business",
          "pec": {
            "title": "Postfach",
            "description": "Details",
            "keywords": "Postfach, Info, Profil, Avatar, Bild, Name, E-Mail, email, Standard, Pro, Premium"
          },
          "pel": {
            "description": "Postfachdetails anzeigen"
          },
          "pec-mailbox": {
            "title": "PEC-Postfach",
            "description": "Details",
            "keywords": "Postfach, PEC, zertifizierte E-Mail, Status, Standard, europäisch, Häkchen, blau, Datum, Aktivierung, Ablauf, Abonnement, Verlängerung, automatisch, Zertifizierung"
          },
          "holder": {
            "title": "Inhaber",
            "description": "Details",
            "keywords": "Inhaber, Kontoinhaber, Eigentümer, Steuernummer, USt-IdNr., Daten, bearbeiten, Vorname, Nachname, Firmenname"
          },
          "holder-contact-details": {
            "title": "Kontaktdaten des Inhabers",
            "description": "Details",
            "keywords": "Inhaber, Kontoinhaber, Eigentümer, Daten, bearbeiten, E-Mail, email, Telefon, Handy, Mobil, Nummer, Kontakte"
          },
          "pec-account-contacts": {
            "title": "Kontakte des PEC-Kontos",
            "description": "Details",
            "keywords": "Daten, bearbeiten, E-Mail, email, Telefon, Mobil, Nummer, Kontakte, Konto, zertifizierte E-Mail, Panel, Verwaltung"
          }
        },
        "external-mailboxes": {
          "title": "Andere Postfächer",
          "description": "Postfach",
          "keywords": "andere, Postfächer, Konten, Yahoo, Mail, Hotmail, E-Mail, email, Domain"
        },
        "smtp-pop-imap": {
          "title": "SMTP/POP/IMAP",
          "description": "Postfach",
          "keywords": "smtp, smtps, pop, pop3, imap, imaps, Client, Port, Server, SSL, Outlook, Gmail, Programme, Mail, eingehend, ausgehend, synchronisieren, Konto",
          "pec": {
            "keywords": "smtp, smtps, pop, pop3, imap, imaps, Client, Port, Server, SSL, Outlook, Gmail, Programme, Mail, eingehend, ausgehend, Konto, Anmeldung, Anmeldungen, Einstellungen, Konfiguration"
          },
          "logins": {
            "title": "Anmeldungen",
            "description": "SMTP/POP/IMAP",
            "keywords": "smtp, smtps, pop, pop3, imap, imaps, Client, Outlook, Gmail, Programme, Mail, eingehend, ausgehend, Anmeldung, Anmeldungen"
          },
          "configuration-parameters": {
            "title": "Konfigurationseinstellungen",
            "description": "SMTP/POP/IMAP",
            "keywords": "smtp, smtps, pop, pop3, imap, imaps, Client, Port, Server, SSL, Outlook, Gmail, Programme, Mail, eingehend, ausgehend, Konto, Einstellungen, Konfiguration"
          }
        },
        "space": {
          "title": "Speicher",
          "description": "Postfach",
          "keywords": "Speicher, Nachrichten, Anhänge, Archiv, Dateien, Dokumente, E-Mail-Speicher, unbegrenzt, GigaMail, erweitern",
          "pec": {
            "keywords": "Speicher, Nachrichten, Anhänge, Archiv, Archivierung, erweitern"
          }
        },
        "pec-account-contacts": {
          "title": "Kontakte des PEC-Kontos",
          "description": "Details",
          "keywords": "Daten, bearbeiten, E-Mail, email, Telefon, Mobil, Nummer, Kontakte, Konto, zertifizierte E-Mail, Panel, Verwaltung"
        },
        "pec-mailbox": {
          "title": "PEC-Postfach",
          "description": "Details",
          "keywords": "Postfach, PEC, zertifizierte E-Mail, Status, Standard, europäisch, Häkchen, blau, Datum, Aktivierung, Ablauf, Abonnement, Verlängerung, automatisch, Zertifizierung"
        },
        "holder": {
          "title": "Inhaber",
          "description": "Details",
          "keywords": "Inhaber, Kontoinhaber, Eigentümer, Steuernummer, USt-IdNr., Daten, bearbeiten, Vorname, Nachname, Firmenname"
        },
        "holder-contact-details": {
          "title": "Kontaktdaten des Inhabers",
          "description": "Details",
          "keywords": "Inhaber, Kontoinhaber, Eigentümer, Daten, bearbeiten, E-Mail, email, Telefon, Handy, Mobil, Nummer, Kontakte"
        }
      },
      "look": {
        "title": "Darstellung",
        "keywords": "Darstellung, Design, Oberfläche, Layout, Stil, Grafik, Aufbau, Barrierefreiheit, anpassen",
        "customize-webmail": {
          "theme": {
            "label": "Design"
          },
          "language": "Sprache",
          "timezone": "Zeitzone",
          "ampm": "AM/PM-Format verwenden"
        },
        "customize-message-list": {
          "inbox-view-mode": {
            "label": "Listenansicht"
          },
          "messagePreview": "Nachrichtenvorschau in der Liste anzeigen",
          "folderInfoNewMessages": "Anzahl ungelesener Nachrichten in den Ordnern anzeigen",
          "refreshTime": "Automatische Aktualisierung",
          "title": "Nachrichtenliste anpassen"
        },
        "customize-message-detail": {
          "inbox-layout": {
            "label": "Lesebereich"
          },
          "inlineImages": "Angehängte Bilder anzeigen",
          "showOriginMessage": "Originalnachricht in Antworten anzeigen",
          "title": "Nachrichtendetail anpassen",
          "description": "Darstellung",
          "keywords": "anpassen, Anpassung, Detail, Nachricht, Bereich, Lesebereich, Bild, Bilder, Anhänge"
        },
        "customize-notifications": {
          "title": "Benachrichtigungen anpassen"
        },
        "theme": {
          "title": "Design",
          "description": "Darstellung",
          "keywords": "Design, hell, dunkel, Modus, Barrierefreiheit"
        },
        "language": {
          "title": "Sprache",
          "description": "Darstellung",
          "keywords": "Sprache, Italienisch, Englisch, Spanisch, Deutsch"
        },
        "time-zone": {
          "title": "Zeitzone",
          "description": "Darstellung",
          "keywords": "Zeitzone, Zeit, Uhrzeit"
        },
        "use-am/pm-format": {
          "title": "AM/PM-Format verwenden",
          "description": "Darstellung",
          "keywords": "Format, am, pm, Uhrzeit, Zeiten"
        },
        "customize-messages-list": {
          "title": "Nachrichtenliste anpassen",
          "description": "Darstellung",
          "keywords": "anpassen, Anpassung, Liste, Nachricht, Nachrichten, Layout, Oberfläche, Vorschau"
        },
        "view-list": {
          "title": "Listenansicht",
          "description": "Darstellung",
          "keywords": "Ansicht, Layout, Liste, komfortabel, kompakt, breit, schmal"
        },
        "show-preview-of-message-in-the-list": {
          "title": "Vorschau in der Nachrichtenliste anzeigen",
          "description": "Darstellung",
          "keywords": "anzeigen, Vorschau, Nachricht, Liste"
        },
        "show-number-of-unread-messages-in-folders": {
          "title": "Anzahl ungelesener Nachrichten in Ordnern anzeigen",
          "description": "Darstellung",
          "keywords": "anzeigen, Ordner, Anzahl, Nachrichten, ungelesen"
        },
        "automatic-update": {
          "title": "Automatische Aktualisierung",
          "description": "Darstellung",
          "keywords": "Aktualisierung, Aktualisierungen, automatisch"
        },
        "reading-pane": {
          "title": "Lesebereich",
          "description": "Darstellung",
          "keywords": "Bereich, Lesebereich, Detail, Nachricht"
        },
        "show-attached-images": {
          "title": "Angehängte Bilder anzeigen",
          "description": "Darstellung",
          "keywords": "anzeigen, Bild, Bilder, angehängt"
        },
        "show-original-message-in-replies": {
          "title": "Originalnachricht in Antworten anzeigen",
          "description": "Darstellung",
          "keywords": "anzeigen, Nachricht, Original, Antwort, Antworten"
        },
        "customize-notification-closure": {
          "title": "Schließen von Benachrichtigungen anpassen",
          "description": "Darstellung",
          "keywords": "anpassen, Anpassung, schließen, Benachrichtigung, Benachrichtigungen, Hinweis, Hinweise"
        }
      },
      "messages-writing": {
        "automatic-forwarding": {
          "title": "Automatische Weiterleitung",
          "description": "Nachrichten und Schreiben",
          "keywords": "Weiterleitung, weiterleiten, automatisch"
        },
        "signatures": {
          "title": "Signaturen",
          "description": "Nachrichten und Schreiben",
          "keywords": "Signatur, Signaturen, Fußzeile"
        },
        "message-rules": {
          "title": "Nachrichtenregeln",
          "description": "Nachrichten und Schreiben",
          "keywords": "Regel, Regeln, Nachricht, Nachrichten, verschieben, Filter"
        },
        "automatic-reply": {
          "title": "Automatische Antwort",
          "description": "Nachrichten und Schreiben",
          "keywords": "Antwort, automatisch, Urlaub, Abwesenheit, abwesend, außer Haus"
        },
        "empty-trash": {
          "title": "Papierkorb",
          "description": "Nachrichten und Schreiben",
          "keywords": "Papierkorb",
          "empty-bin-on-exiting-webmail": {
            "title": "Papierkorb beim Abmelden von der Webmail leeren",
            "description": "Papierkorb",
            "keywords": "leeren, Papierkorb, abmelden, Webmail"
          }
        },
        "non-pec-messages": {
          "title": "Nicht-PEC-Nachrichten",
          "description": "Nachrichten und Schreiben",
          "keywords": "Nachricht, Nachrichten, E-Mail, Mail, Nicht-PEC, nicht zertifiziert, normal, gewöhnlich, Standard",
          "desktop": {
            "form-title": "Nicht-PEC-Nachrichten",
            "subtitle": "Einstellungen für Nicht-PEC-Nachrichten konfigurieren"
          },
          "set-up-non-pec-receipt": {
            "title": "Empfang von Nicht-PEC-Nachrichten einrichten",
            "description": "Nicht-PEC-Nachrichten",
            "keywords": "konfigurieren, Empfang, Nachrichten, Nicht-PEC, nicht zertifiziert, normal, gewöhnlich"
          }
        },
        "alerts-reports": {
          "title": "Hinweise und Berichte",
          "description": "Hinweise und Berichte zum Empfang konfigurieren",
          "keywords": "Hinweise, Hinweis, Bericht, Empfang, per, E-Mail, SMS, Nachricht, Nachrichten, Benachrichtigung, Benachrichtigungen, PEC, zertifizierte E-Mail"
        },
        "send-messages": {
          "title": "Nachrichten senden",
          "description": "Nachrichten und Schreiben",
          "keywords": "Senden, senden, Nachricht, Nachrichten, anpassen, Schreiben, Editor"
        },
        "message-editor": {
          "keywords": "Nachricht, Schreiben, Editor, Zeichen, Schrift"
        },
        "different-reply-address": {
          "keywords": "Adresse, Antwort, abweichend"
        },
        "allow-cancel-sending": {
          "keywords": "Abbruch, absenden, Zustellung, senden"
        },
        "alternative-senders": {
          "keywords": "Adresse, alternativ, E-Mail, Adressen, Absender"
        },
        "replies": {
          "keywords": "Antwort, Antworten, Bestätigung, gelesen",
          "pec": {
            "keywords": "Antwort, Antworten"
          }
        },
        "forward": {
          "keywords": "weiterleiten, Weiterleitung"
        },
        "request-read-receipt": {
          "keywords": "anfordern, Bestätigung, gelesen"
        },
        "send-read-receipt": {
          "keywords": "gelesen, Bestätigung"
        },
        "default-font": {
          "keywords": "Zeichen, Schrift, Standard, Typ"
        },
        "default-size": {
          "keywords": "Größe, Standard"
        },
        "expand-editor": {
          "keywords": "erweitern, Nachricht, Editor, schreiben"
        },
        "keep-copy": {
          "keywords": "aufbewahren, Kopie, Nachricht, gesendet, speichern"
        },
        "add-recipients": {
          "keywords": "hinzufügen, Empfänger, Kontakte, neu"
        },
        "enable-bam": {
          "keywords": "BAM, Funktion, aktivieren"
        },
        "add-to-cc": {
          "keywords": "Cc, Kopie, Adresse, hinzufügen"
        },
        "add-separator-reply": {
          "keywords": "Trennlinie, Linie, Antwort, Original"
        },
        "add-header-reply": {
          "keywords": "Kopfzeile, Header, Antwort, Original"
        },
        "indent-original": {
          "keywords": "Einzug, einrücken, Nachricht, Original"
        },
        "add-separator-forward": {
          "keywords": "Trennlinie, Linie, weiterleiten, Original"
        },
        "add-header-forward": {
          "keywords": "Kopfzeile, Header, weiterleiten, Original"
        },
        "forwarding-mode": {
          "keywords": "Modus, weiterleiten, Anhang, Anhänge"
        },
        "pec-message-rules": {
          "description": "Regeln für PEC-Nachrichten verwalten",
          "keywords": "Regel, Regeln, Nachricht, Nachrichten, verschieben, Filter"
        },
        "message-sending": {
          "different-reply-address": {
            "title": "Abweichende Antwortadresse",
            "description": "Nachrichten senden",
            "keywords": "Adresse, Antwort, abweichend"
          },
          "allow-cancel-sending": {
            "title": "Senden abbrechen",
            "description": "Nachrichten senden",
            "keywords": "Abbruch, absenden, Zustellung, senden"
          },
          "title": "Nachrichten senden",
          "description": "Nachrichten und Schreiben",
          "keywords": "Senden, senden, Nachricht, Nachrichten, anpassen, Schreiben, Editor",
          "message-editor": {
            "title": "Nachrichteneditor",
            "description": "Nachrichten senden",
            "keywords": "Nachricht, Schreiben, Editor, Zeichen, Schrift"
          },
          "default-characters": {
            "title": "Standardschrift",
            "description": "Nachrichten senden",
            "keywords": "Zeichen, Schrift, Standard, Arial, Cambria, Comic Sans, Georgia, Tahoma, Times New Roman, Trebuchet, Verdana"
          },
          "default-size": {
            "title": "Standardgröße",
            "description": "Nachrichten senden",
            "keywords": "Größe, Text, klein, normal, groß, Lesbarkeit, Barrierefreiheit"
          },
          "always-expand-message-editor": {
            "title": "Nachrichteneditor immer erweitern",
            "description": "Nachrichten senden",
            "keywords": "erweitern, Nachricht, Editor, schreiben, Fenster, Text, Modal, Pop-up"
          },
          "save-a-copy-of-sent-message": {
            "title": "Kopie gesendeter Nachrichten speichern",
            "description": "Nachrichten senden",
            "keywords": "aufbewahren, Kopie, Nachricht, Nachrichten, gesendet"
          },
          "add-new-recipient-to-contacts": {
            "title": "Neue Empfänger zu Kontakten hinzufügen",
            "description": "Nachrichten senden",
            "keywords": "hinzufügen, neu, Empfänger, Adresse, Kontakt, Kontakte"
          },
          "always-request-read-receipt": {
            "title": "Immer Lesebestätigung anfordern",
            "description": "Nachrichten senden",
            "keywords": "anfordern, Bestätigung, gelesen, immer"
          },
          "enable-bam-big-attachment-message-function": {
            "title": "Funktion BAM (Big Attachment Message) aktivieren",
            "description": "Nachrichten senden",
            "keywords": "aktivieren, BAM, groß, Anhang, Nachricht"
          },
          "alternative-email-addresses-as-senders": {
            "title": "Alternative E-Mail-Adressen als Absender",
            "description": "Nachrichten senden",
            "keywords": "Adresse, alternativ, E-Mail, Adressen, Absender"
          },
          "replies": {
            "title": "Antworten",
            "description": "Nachrichten senden",
            "keywords": "Antwort, Antworten, Bestätigung, gelesen"
          },
          "add-your-address-to-recipients-in-cc": {
            "title": "Eigene Adresse als Cc-Empfänger hinzufügen",
            "description": "Nachrichten senden",
            "keywords": "hinzufügen, Adresse, E-Mail, Empfänger, Cc, Kopie"
          },
          "add-separator-line-before-original-message": {
            "title": "Trennlinie vor der Originalnachricht einfügen",
            "description": "Nachrichten senden",
            "keywords": "hinzufügen, Trennlinie, Linie, vor, Original, Nachricht"
          },
          "add-header-of-original-message": {
            "title": "Kopfzeile der Originalnachricht einfügen",
            "description": "Nachrichten senden",
            "keywords": "hinzufügen, Kopfzeile, Original, Nachricht"
          },
          "indent-original-message": {
            "title": "Originalnachricht einrücken",
            "description": "Nachrichten senden",
            "keywords": "hinzufügen, einrücken, Original, Nachricht"
          },
          "send-read-receipt": {
            "title": "Lesebestätigung senden",
            "description": "Nachrichten senden",
            "keywords": "senden, gelesen, Bestätigung"
          },
          "forward": {
            "title": "Weiterleiten",
            "description": "Nachrichten senden",
            "keywords": "weiterleiten, Weiterleitung"
          },
          "forwarding-mode": {
            "title": "Weiterleitungsmodus",
            "description": "Nachrichten senden",
            "keywords": "Weiterleitungsmodus"
          }
        },
        "notifications-and-reports": {
          "title": "Hinweise und Berichte",
          "description": "Nachrichten und Schreiben",
          "keywords": "Hinweise, Hinweis, Bericht, Empfang, per, E-Mail, SMS, Nachricht, Nachrichten, Benachrichtigung, Benachrichtigungen, PEC, zertifizierte E-Mail",
          "receipt-alerts": {
            "title": "Empfangshinweise",
            "description": "Hinweise und Berichte",
            "keywords": "Hinweise, Hinweis, Bericht, Empfang, empfangen, Bestätigungen, Nachricht, Nachrichten, E-Mail"
          },
          "report-via-email": {
            "title": "Berichte per E-Mail",
            "description": "Hinweise und Berichte",
            "keywords": "Hinweise, Hinweis, Bericht, Empfang, empfangen, Bestätigungen, E-Mail"
          },
          "report-via-sms": {
            "title": "Berichte per SMS",
            "description": "Hinweise und Berichte",
            "keywords": "Hinweise, Hinweis, Bericht, Empfang, per, SMS, Benachrichtigung, Benachrichtigungen, Zusammenfassung, Nachricht, Mobil"
          }
        }
      },
      "search": {
        "account-security": {
          "two-factor-password": {
            "title": "Passwort für E-Mail-Programme und Apps",
            "description": "Passwort für E-Mail-Programme und Apps konfigurieren",
            "keywords": "Passwörter, E-Mail-Programme, Apps, extern, Outlook, Gmail"
          }
        }
      },
      "account-security": {
        "password": {
          "title": "Passwort",
          "description": "Konto und Sicherheit",
          "keywords": "Passwort, ändern, bearbeiten",
          "recovery-email": {
            "title": "Wiederherstellungs-E-Mail",
            "description": "Passwort",
            "keywords": "E-Mail, Adresse, wiederherstellen, Passwort"
          }
        },
        "junk-mail": {
          "title": "Junk-Mail",
          "description": "Konto und Sicherheit",
          "keywords": "Mail, unerwünscht, Junk, Spam, Antispam, Phishing, Fälschung, Virus, Betrug",
          "pel": {
            "description": "Antispam-Filter verwalten"
          },
          "spam-or-safe-addresses": {
            "title": "Spam- oder sichere Adressen",
            "description": "Junk-Mail",
            "keywords": "Adressen, Spam, sicher"
          },
          "blocked-or-safe-addresses": {
            "title": "Blockierte oder sichere Adressen",
            "description": "Junk-Mail",
            "keywords": "Adressen, blockiert, sicher"
          }
        },
        "disconnection": {
          "title": "Automatische Abmeldung",
          "description": "Konto und Sicherheit",
          "keywords": "abmelden, trennen, getrennt, beenden, ausloggen"
        },
        "access-history": {
          "title": "Anmeldeverlauf",
          "description": "Konto und Sicherheit",
          "keywords": "Verlauf, Chronik, Anmeldung, Anmeldungen"
        },
        "security-notifications": {
          "title": "Sicherheitsbenachrichtigungen",
          "description": "Konto und Sicherheit",
          "keywords": "Mitteilungen, Mitteilung, Sicherheit, Hinweis, Hinweise, Benachrichtigung, Benachrichtigungen, Bericht, Anmeldung, Anmeldungen"
        },
        "2-step-verification": {
          "title": "Bestätigung in zwei Schritten",
          "description": "Konto und Sicherheit",
          "keywords": "Bestätigung, 2, zwei, Schritte, Faktor, App"
        },
        "smime": {
          "title": "S/MIME-Einstellungen",
          "description": "S/MIME-Zertifikate und Verschlüsselung konfigurieren",
          "keywords": "S/MIME, Zertifikat, Verschlüsselung, Sicherheit, digital, Signatur"
        },
        "email-cellphone": {
          "title": "Wiederherstellungs-E-Mail und Mobilnummer"
        },
        "two-factor-verification": {
          "title": "Bestätigung in zwei Schritten",
          "description": "Bestätigung in zwei Schritten einrichten",
          "keywords": "Bestätigung, 2, zwei, Schritte, Faktor, App"
        },
        "pec-log": {
          "title": "PEC-Protokoll",
          "description": "Konto und Sicherheit",
          "keywords": "PEC, Protokolle, Suche, Bestätigungen, Ereignisse"
        },
        "security-communications": {
          "title": "Sicherheitsbenachrichtigungen",
          "description": "Sicherheitsbenachrichtigungen verwalten",
          "keywords": "Mitteilungen, Mitteilung, Sicherheit, Hinweis, Hinweise, Benachrichtigung, Benachrichtigungen, Bericht, Anmeldung, Anmeldungen, Zusammenfassung"
        },
        "security-info": {
          "title": "Sicherheitsbenachrichtigungen",
          "sub-title": "Ihre Sicherheitsinformationen verwalten",
          "keywords": "Mitteilungen, Mitteilung, Sicherheit, Hinweis, Hinweise, Benachrichtigung, Benachrichtigungen, Bericht, Anmeldung, Anmeldungen",
          "description": "Konto und Sicherheit",
          "login-alerts": {
            "title": "Anmeldehinweise",
            "description": "Konto und Sicherheit",
            "keywords": "Hinweis, Hinweise, Anmeldung, Anmeldungen"
          },
          "login-report": {
            "title": "Anmeldebericht",
            "description": "Konto und Sicherheit",
            "keywords": "Bericht, Zusammenfassung, Anmeldung, Anmeldungen"
          }
        },
        "other-accounts": {
          "keywords": "Multiuser, Mehrbenutzer, Benutzer, Supervisor, zusammenarbeiten, Zusammenarbeit, zuweisen, autorisieren, Autorisierung, Berechtigung, Berechtigungen, teilen",
          "title": "Zugriff auf andere Konten",
          "description": "Konto und Sicherheit",
          "pec-multiuser": {
            "title": "PEC Multiuser",
            "description": "Zugriff auf andere Konten",
            "keywords": "Multiuser, Mehrbenutzer, Benutzer, zertifizierte E-Mail, PEC"
          },
          "supervisore360": {
            "title": "Supervisore360",
            "description": "Zugriff auf andere Konten",
            "keywords": "Supervisor, Supervisoren, 360"
          }
        },
        "two-step-verification": {
          "title": "Bestätigung in zwei Schritten",
          "description": "Konto und Sicherheit",
          "keywords": "Bestätigung, 2, zwei, Schritte, Faktor, App"
        },
        "email-mobile": {
          "title": "E-Mail und Mobilnummer",
          "description": "Konto und Sicherheit",
          "keywords": "E-Mail, Mail, Mobil, Telefon, Nummer, Kontakt, Kontakte, Kontaktdaten"
        }
      },
      "archive": {
        "title": "Archiv",
        "keywords": "Archiv, aufbewahren, Kopie, Archivierung"
      },
      "calendars": {
        "title": "Kalender",
        "keywords": "Kalender, Termin, Termine",
        "customization": {
          "title": "Anpassung",
          "description": "Kalender",
          "keywords": "Kalender, anpassen, Anpassung, Ansicht, Anzeige, Woche, Beginn, Arbeit, Arbeitszeit, Standard, Ort, Benachrichtigungen, Teilnehmer"
        },
        "synchronization": {
          "title": "Synchronisierung",
          "description": "Kalender",
          "keywords": "Kalender, Synchronisierung, synchronisieren, CalDAV, iCal, Geräte, Anwendungen, teilen, exportieren, importieren"
        },
        "week-start": {
          "label": "Wochenbeginn"
        },
        "work-hours": {
          "start": {
            "label": "Beginn des Arbeitstags"
          }
        },
        "default-view": {
          "label": "Standardansicht",
          "title": "Standardansicht",
          "description": "Kalender",
          "keywords": "Ansicht, Ansichten, Layout, Standard, Woche, Wochen, Tag, Tage, Monat, Monate, Liste"
        },
        "event-location": {
          "label": "Standardort für Termine"
        },
        "auto-notify": {
          "label": "Teilnehmer automatisch benachrichtigen"
        },
        "beginning-of-week": {
          "title": "Wochenbeginn",
          "description": "Kalender",
          "keywords": "Beginn, Woche, Tag, Kalender"
        },
        "beginning-of-working-day": {
          "title": "Beginn des Arbeitstags",
          "description": "Kalender",
          "keywords": "Beginn, Zeit, Arbeit, Arbeitstag"
        },
        "predefined-event-location": {
          "title": "Standardort für Termine",
          "description": "Kalender",
          "keywords": "Ort, Link, Raum, Termin, Termine, Standard"
        },
        "automatically-notify-participants-of-all-changes-made-to-events": {
          "title": "Teilnehmer automatisch über alle Änderungen an Terminen benachrichtigen",
          "description": "Kalender",
          "keywords": "Benachrichtigung, Hinweis, benachrichtigen, automatisch, Änderungen, Termine, Teilnehmer, Eingeladene"
        },
        "availability": {
          "title": "Verfügbarkeit",
          "description": "Kalender",
          "keywords": "Verfügbarkeit, verfügbar"
        },
        "read-and-write-caldav": {
          "title": "Lesen und Schreiben (CalDAV)",
          "description": "Kalender",
          "keywords": "lesen, schreiben, Cal, Dav, CalDAV"
        },
        "read-only-ical": {
          "title": "Nur Lesen (iCal)",
          "description": "Kalender",
          "keywords": "lesen, iCal"
        }
      },
      "digital-signature": {
        "title": "Aruba Digitale Signatur",
        "keywords": "Signatur, signieren, digital, elektronisch, Anhang, Anhänge, Dokument, Dokumente, PAdES, CAdES, PDF, P7M, XML, XAdES"
      },
      "aruba-drive": {
        "title": "Aruba Drive",
        "keywords": "Drive, Aruba, Datei, Speicher, Anhang, Anhänge, Cloud, Synchronisierung"
      },
      "footer": {
        "actions": {
          "save": "Speichern",
          "cancel": "Abbrechen"
        }
      },
      "sidebar": {
        "collapse-menu": "Minimieren",
        "expand-menu": "Erweitern",
        "goback-messages": "Zurück zu den Nachrichten",
        "settings": {
          "home": "Privat",
          "section": "Allgemeine Einstellungen",
          "mailbox": {
            "label": "Postfach",
            "label-pec": "PEC-Postfach",
            "information": "Details",
            "space": "Speicher",
            "smtp-pop-imap": "SMTP/POP/IMAP",
            "external-mailboxes": "Andere Postfächer"
          },
          "look": {
            "label": "Darstellung"
          },
          "messages-writing": {
            "label": "Nachrichten und Schreiben",
            "signatures": "Signaturen",
            "non-pec-messages": "Nicht-PEC-Nachrichten",
            "automatic-reply": "Automatische Antwort",
            "notifications-and-reports": "Hinweise und Berichte",
            "automatic-forwarding": "Automatische Weiterleitung",
            "folders": "Ordner",
            "message-rules": "Nachrichtenregeln",
            "pec-message-rules": "Nachrichtenregeln",
            "send-messages": "Nachrichten senden",
            "confirm-reading": "Lesebestätigung",
            "empty-trash": "Papierkorb"
          },
          "message-sending": {
            "title": "Nachrichten senden",
            "subtitle-hint": "<strong>Passen Sie</strong> das Verfassen Ihrer Nachrichten, Antworten und Weiterleitungen an.",
            "editor": {
              "label": "Nachrichteneditor",
              "editor-char-hint": "Schriftart und -größe gelten im Editor für Nachrichten, Kalender, Dateien und Notizen.",
              "font-size-opt": {
                "xs": "Winzig",
                "s": "Klein",
                "m": "Normal",
                "l": "Groß",
                "xl": "Sehr groß",
                "xxl": "Sehr groß"
              },
              "font-type-default": "Standardschrift",
              "font-size-default": "Standardgröße",
              "full-editor-flag": "Nachrichteneditor immer erweitern",
              "keep-copy": {
                "label": "Kopie gesendeter Nachrichten speichern",
                "never": "Nie",
                "always": "Immer",
                "on-request": "Auf Anfrage"
              },
              "ask-read-conf": "Immer Lesebestätigung anfordern",
              "enable-bam": "Funktion BAM (Big Attachment Message) aktivieren",
              "limit-bam-to-sent": "Anhänge als Link senden, wenn größer als",
              "add-recipients": {
                "label": "Neue Empfänger zu Kontakten hinzufügen",
                "auto": "Automatisch",
                "never": "Nie",
                "on-request": "Auf Anfrage"
              },
              "diff-answer-address": {
                "title": "Abweichende Antwortadresse",
                "hint": "Wählen Sie eine abweichende Antwortadresse, wenn Empfänger Ihrer Nachrichten an eine andere Adresse antworten sollen.",
                "add": "Antwortadresse hinzufügen",
                "reply-to-label": "Antwortadresse",
                "dialog": {
                  "header": "Abweichende Antwortadresse",
                  "email": "E-Mail-Adresse",
                  "email-not-valid": "Gültige Adresse eingeben",
                  "actions": {
                    "cancel": "Abbrechen",
                    "confirm": "Speichern"
                  },
                  "message": {
                    "email-not-valid": "E-Mail-Adresse eingeben"
                  }
                },
                "delete": {
                  "header": "Möchten Sie die Antwortadresse löschen?",
                  "question": "Nach dem Löschen werden Antworten nicht mehr an diese Adresse gesendet.",
                  "confirm": "Löschen",
                  "cancel": "Abbrechen"
                }
              },
              "allow-cancel-sending": {
                "title": "Senden abbrechen",
                "hint": "Ermöglicht es, eine Nachricht innerhalb von 5 Sekunden nach dem Senden zurückzuholen.",
                "enable-cancel": "Senden abbrechen aktivieren"
              },
              "alternative-senders": {
                "title": "Alternative E-Mail-Adressen als Absender",
                "hint": "Sie können Nachrichten von anderen E-Mail-Adressen als Ihrer eigenen senden. <br>Alternative Absender stehen in der Webmail und in E-Mail-Programmen zur Verfügung.",
                "add": "Absender hinzufügen",
                "empty": "Keine alternativen Absender gefunden",
                "delete": {
                  "header": "Möchten Sie den alternativen Absender löschen?",
                  "question": "Nach dem Löschen können Sie keine Nachrichten mehr mit dieser Adresse senden.",
                  "confirm": "Löschen",
                  "cancel": "Abbrechen"
                },
                "sender_address": "E-Mail-Adresse",
                "dialog": {
                  "header": "Alternativen Absender hinzufügen",
                  "step-mail": "E-Mail",
                  "step-mail-message": "Wir senden einen Bestätigungscode an die angegebene E-Mail. Stellen Sie sicher, dass Sie darauf zugreifen können, um den Vorgang abzuschließen.",
                  "step-verify": "Bestätigen",
                  "step-verify-message": "Wir haben einen Bestätigungscode an <strong>{{email}}</strong> gesendet. Geben Sie den erhaltenen Code ein.",
                  "email-address": "E-Mail-Adresse",
                  "code": "Bestätigungscode",
                  "error": {
                    "email-not-valid": "Gültige Adresse eingeben",
                    "wrong-code": "Prüfen Sie, ob der Code korrekt ist",
                    "code-not-valid": "Bestätigungscode eingeben"
                  },
                  "code-not-received": "Keinen Code erhalten?",
                  "actions": {
                    "send-again": "Erneut senden",
                    "proceed": "Weiter",
                    "save": "Speichern",
                    "cancel": "Abbrechen",
                    "go-back": "Zurück"
                  },
                  "toast-send-again": "Code an {{email}} gesendet"
                }
              },
              "mail-address": "E-Mail-Adresse",
              "mo-alternative-senders": "Keine alternativen Absender gefunden"
            },
            "answer": {
              "label": "Antworten",
              "add-to-cc-recipient": "Eigene Adresse als Cc-Empfänger hinzufügen",
              "add-line-separator": "Trennlinie vor der Originalnachricht einfügen",
              "include-original-header": "Kopfzeile der Originalnachricht einfügen",
              "indent-original": "Originalnachricht einrücken",
              "read-confirmation": {
                "label": "Lesebestätigung senden",
                "always": "Immer",
                "never": "Nie",
                "on-request": "Auf Anfrage"
              },
              "send-read-receipt": "Lesebestätigung senden"
            },
            "forward": {
              "label": "Weiterleiten",
              "fwdSep": "Trennlinie vor der Originalnachricht einfügen",
              "fwdHeader": "Kopfzeile der Originalnachricht einfügen",
              "fwdMode": {
                "label": "Weiterleitungsmodus",
                "description": {
                  "inline": "Der Text der Originalnachricht wird in den Text der weitergeleiteten E-Mail eingefügt, die Dateien werden als Anhänge gesendet.",
                  "attached": "Der Text der Originalnachricht wird als Textdatei an die weitergeleitete E-Mail angehängt, getrennt von den anderen Anhängen.",
                  "embedded": "Text und Dateien der Originalnachricht werden als eine eingebettete Nachricht an die weitergeleitete E-Mail angehängt.",
                  "fwdreply": "Der Text der Originalnachricht wird in den Text der weitergeleiteten E-Mail eingefügt, die Dateien werden nicht angehängt."
                },
                "inline": "Text im Nachrichtentext",
                "attached": "Nachricht als Textdatei angehängt",
                "embedded": "Nachricht eingebettet",
                "fwdreply": "Nur Text"
              }
            },
            "attachments": {
              "label": "",
              "bam-convert": {
                "label": "",
                "bam-convert-hint": "",
                "auto-convert": "",
                "limit-file-to-sent": ""
              },
              "limits": {
                "label": "",
                "max-number": "",
                "max-size": "",
                "max-total-size": ""
              }
            },
            "toasts": {
              "success": "Änderungen gespeichert."
            }
          },
          "account-security": {
            "label": "Konto und Sicherheit",
            "email-and-mobile": "E-Mail und Mobilnummer",
            "password-recovery": "Wiederherstellungs-E-Mail und Mobilnummer",
            "2-step-verification": "Bestätigung in zwei Schritten",
            "authorized-devices": "Autorisierte Geräte",
            "password": "Passwort",
            "junk-mail": "Junk-Mail",
            "access-history": "Anmeldeverlauf",
            "security-info": "Sicherheitsbenachrichtigungen",
            "multiuser": "Multiuser",
            "smime": "S/MIME",
            "disconnection": "Trennen",
            "pec-log": "PEC-Protokoll",
            "two-factor-password": "Passwort für E-Mail-Programme und Apps"
          },
          "security-info": {
            "access-info": {
              "label": "Anmeldehinweise"
            },
            "access-report": {
              "label": "Anmeldebericht"
            }
          },
          "multiuser": {
            "title": "Multiuser"
          },
          "app-aruba-pec": {
            "title": "App Aruba PEC",
            "description": "Zuverlässig, praktisch und einfach zu bedienen: Damit können Sie <strong>PEC-Nachrichten lesen, verwalten und senden</strong> – für ein oder mehrere Postfächer, die in der App eingerichtet werden können.",
            "card-title": "Lesen, schreiben und verwalten Sie Ihre Aruba PEC auf Smartphone oder Tablet",
            "card-subtitle": "mit der kostenlosen App Aruba PEC",
            "keywords": "App, Anwendung, PEC, zertifizierte E-Mail, Store, Google, Play, Gallery, Smartphone, Gerät, iOS, iPhone, Apple, Android, Tablet, iPad"
          },
          "pec-other-accounts": {
            "message-supervisor-request": {
              "title": "Ein Supervisore360-Konto hat die Berechtigung zur Verwaltung Ihres PEC-Postfachs angefordert.",
              "message": "Supervisore360 ist nur für PEC-Pro- und Premium-Postfächer verfügbar.<br>Führen Sie ein Upgrade auf eines davon durch, um die Anfrage zu erfüllen."
            },
            "label": "Zugriff auf andere Konten",
            "multiuser-pec": "PEC Multiuser",
            "supervisor": "Supervisore360",
            "overview": "Übersicht",
            "sub-title": "Dienste, mit denen andere Ihre PEC verwalten können",
            "first-paragraph": "<strong>PEC Multiuser</strong> und <strong>Supervisore360</strong> sind zwei verschiedene Lösungen, mit denen Sie Ihr PEC-Postfach für andere zugänglich machen.",
            "second-paragraph": "Sie können <strong>mehrere Konten erstellen und in Ihrem PEC-Postfach freigeben</strong> oder <strong> die Verwaltung Ihrer PEC an externe Fachleute übertragen</strong> und ihnen die gewünschten Berechtigungen erteilen.",
            "first-paragraph-multiuser": "Mit <strong>PEC Multiuser</strong> können Sie anderen Personen Zugriff auf Ihr PEC-Postfach gewähren.",
            "second-paragraph-multiuser": "<strong>Richten Sie Konten ein, die mit Ihnen in Ihrem PEC-Postfach arbeiten</strong>, und erteilen Sie ihnen die gewünschten Berechtigungen.",
            "partner-info": "Wenden Sie sich an Ihren Dienstanbieter",
            "feature-not-enabled": "PEC Multiuser und Supervisore360 sind <strong>nur für PEC-Pro- und Premium-Postfächer verfügbar.</strong>",
            "multiuser": {
              "sub-title": "PEC-Multiuser-Konto",
              "cta": "PEC-Multiuser-Konto verwalten",
              "paragraph": "Erstellen Sie ein <strong>PEC-Multiuser</strong>-Konto, damit andere Ihr Postfach gemäß den erteilten Berechtigungen verwalten können – Sie behalten in diesem Bereich die volle Kontrolle."
            },
            "delegate": {
              "sub-title": "Supervisore360-Berechtigungen",
              "cta": "Supervisore360-Berechtigungen verwalten",
              "paragraph": "Übertragen Sie die Verwaltung Ihres PEC-Postfachs an <strong>Supervisore360</strong> (z. B. Anwalt, Steuerberater). Dazu benötigen Sie den Benutzernamen des Supervisore360-Kontos, das Sie zur Verwaltung Ihrer PEC berechtigen."
            },
            "changePecTypeToProPremium": {
              "button": "Upgrade auf PEC Pro oder Premium"
            },
            "supervisor-tab": {
              "extra-column": {
                "title": "{{ffn}} <strong>hat zusätzliche Berechtigungen</strong> zur Verwaltung Ihres PEC-Postfachs angefordert.",
                "button": "Antworten"
              },
              "redirect-dialog": {
                "title": "Neue Anfragen von anderen Konten",
                "body": "Sie haben neue Anfragen, andere Personen Ihre PEC verwalten zu lassen. <br>Sie können sie jetzt oder später im Bereich <strong>Andere Konten</strong> in den Einstellungen der PEC-Webmail bearbeiten.",
                "button": "Anfragen verwalten"
              },
              "detail": {
                "save-edits": {
                  "title": "Möchten Sie die Änderungen bestätigen?",
                  "question": "Durch die Änderung der Berechtigungen autorisieren Sie <strong>{{usernamePu}}</strong>, das Postfach gemäß den angegebenen Berechtigungen in Ihrem Namen zu verwalten.",
                  "buttons": {
                    "confirm": "Bestätigen",
                    "cancel": "Abbrechen"
                  }
                },
                "message-pec-pro": {
                  "button-accordion": "Wenden Sie sich an Ihren Dienstanbieter",
                  "go-to-premium": "Upgrade auf PEC Pro oder Premium",
                  "message": "Supervisore360 ist nur für PEC-Pro- und Premium-Postfächer verfügbar. Wenden Sie sich an Ihren Dienstanbieter, um ein Upgrade durchzuführen und Supervisore360 kostenlos die Verwaltung Ihrer PEC-Postfächer zu ermöglichen."
                },
                "header": "{{ffn}} zuweisen",
                "header-to-accept": "Berechtigungsanfrage",
                "header-to-control": "Angeforderte Berechtigungen",
                "header-permission-to-accept": "Anfrage zur Änderung der Berechtigungen",
                "permissions-accordion": {
                  "accordion-permission": "Aktuelle Berechtigungen",
                  "wanted-permissions": "Angeforderte Berechtigungen",
                  "sub-title": "Das Supervisore360-Konto hat die Berechtigung zur Verwaltung Ihres PEC-Postfachs angefordert."
                },
                "accept-supervisor": "Das Supervisore360-Konto hat die Berechtigung angefordert, Ihr PEC-Postfach gemäß den folgenden Berechtigungen zu verwalten.",
                "accept-more-requests": "Mit der Annahme dieser Anfrage autorisieren Sie {{ffn}}, das Postfach gemäß den angegebenen Berechtigungen in Ihrem Namen zu verwalten.",
                "messages": {
                  "supervisor-suspended": "Dieses Supervisore360-Konto wurde gesperrt.",
                  "message": "Die Verwaltungsberechtigung ist ebenfalls ausgesetzt und kann vom Inhaber des PEC-Postfachs erst wieder aktiviert werden, wenn das Supervisore360-Konto wieder aktiv ist.",
                  "mailbox-suspended": "<strong>Die Verwaltungsberechtigung wurde ausgesetzt</strong>, da das PEC-Postfach derzeit deaktiviert ist. Sie wird wiederhergestellt, sobald das PEC-Postfach wieder aktiviert ist.",
                  "account-deleted": {
                    "title": "Dieses Supervisor-Konto wurde gelöscht.",
                    "message": "Die Berechtigung wurde automatisch widerrufen"
                  },
                  "refused-due-date": "Seit dem Senden der Supervisore360-Anfrage sind mehr als 90 Tage vergangen. <strong>Die Berechtigung wurde automatisch abgelehnt.</strong>",
                  "refused-downgrade": {
                    "title": "Die Einladung wurde automatisch abgelehnt.",
                    "message": "Dies ist ein Standardpostfach; der Dienst Supervisore360 ist nur für PEC-Pro- und Premium-Postfächer verfügbar."
                  },
                  "refused-client-suspended": "<strong>Die Einladung zur Übertragung der Verwaltung wurde automatisch abgelehnt</strong>, da das betreffende PEC-Postfach deaktiviert wurde.",
                  "refused-supervisor-suspended": "<strong>Die Einladung zur Übertragung der Verwaltung wurde automatisch abgelehnt</strong>, da das Supervisore360-Konto gesperrt wurde."
                },
                "grid": {
                  "permission-title": "Berechtigungen",
                  "labels": {
                    "name": "Name",
                    "username": "Supervisore360-Benutzername",
                    "state-delegation": "Berechtigungsstatus",
                    "invite-of": "Eingeladen am",
                    "refused-on": "Abgelehnt am",
                    "revocked-on": "Widerrufen am",
                    "accepted-on": "Angenommen am",
                    "active-from": "Aktiviert seit",
                    "suspended-on": "Gesperrt am"
                  },
                  "buttons": {
                    "refuse-request": "Anfrage ablehnen",
                    "revocke-request": "Berechtigung widerrufen",
                    "close": "Schließen",
                    "save": "Speichern",
                    "delete-from-list": "Aus Liste löschen",
                    "accept-permission": "Angeforderte Berechtigungen annehmen",
                    "will-do-later": "Später",
                    "refuse": "Ablehnen",
                    "accept": "Annehmen"
                  },
                  "revocke-dialog": {
                    "title": "Möchten Sie die Berechtigung widerrufen?",
                    "question": "Wenn Sie die Berechtigung für <strong>{{usernamePu}}</strong> widerrufen, kann dieser nicht mehr auf Ihr PEC-Postfach zugreifen und in Ihrem Namen handeln.",
                    "buttons": {
                      "confirm": "Berechtigung widerrufen",
                      "cancel": "Abbrechen"
                    },
                    "toast": {
                      "accept-more-permission": "Die neuen Berechtigungen für {{ffn}} wurden angenommen",
                      "permission-modified": "Änderungen gespeichert",
                      "revocked-real-request": "Die Berechtigung für {{usernamePu}} wurde widerrufen.",
                      "delete-delegation": "Die Berechtigung wurde aus der Liste entfernt.",
                      "accept-delegation": "Die Berechtigung für {{ffn}} wurde angenommen."
                    }
                  },
                  "refuse-dialog": {
                    "title": "Möchten Sie die Berechtigungsanfrage ablehnen?",
                    "question": "Wenn Sie die Berechtigungsanfrage von <strong>{{ffn}}</strong> ablehnen, wird die Einladung endgültig gelöscht.",
                    "buttons": {
                      "confirm": "Anfrage ablehnen",
                      "cancel": "Abbrechen"
                    },
                    "toast": {
                      "refuse-delegation": "Berechtigungsanfrage abgelehnt",
                      "refuse-request": "Berechtigungsanfrage abgelehnt",
                      "refuse-more-permission": "Die neuen Berechtigungen für {{ffn}} wurden abgelehnt."
                    }
                  }
                }
              },
              "title": "Supervisore360",
              "principal-button": "Supervisor zuweisen",
              "empty": {
                "title": "Kein Supervisor zugewiesen"
              },
              "messages": {
                "exceeded": {
                  "title": "Sie haben das Limit von 10 Supervisore360-Konten erreicht, denen Sie die Verwaltung Ihres PEC-Postfachs übertragen können.",
                  "content": "Um eine neue Berechtigung hinzuzufügen, müssen Sie zuerst mindestens eine der aktiven widerrufen."
                },
                "contact-service-owner": {
                  "title": "Ihre Verbindungen zu PEC Supervisore werden am 24.12.24 deaktiviert",
                  "message": "Der Dienst PEC Supervisore wurde aktualisiert und heißt jetzt Supervisore360, <strong> nur kompatibel mit PEC-Pro- und Premium-Postfächern.</strong>. \nWenden Sie sich an Ihren Dienstanbieter und <strong>fragen Sie, welches Postfach für Ihre Anforderungen empfohlen wird, um den Supervisor-Dienst weiter zu nutzen.</strong>",
                  "button": "Wenden Sie sich an Ihren Dienstanbieter"
                }
              },
              "tables": {
                "headers": {
                  "supervisor": "Supervisor",
                  "state-delegation": "Berechtigungsstatus",
                  "permissions": "Berechtigungen"
                },
                "body": {
                  "buttons": {
                    "label-detail": "Details"
                  }
                },
                "dialog": {
                  "new-supervisor": {
                    "modal-title": "Supervisor zuweisen",
                    "grants-title": "Berechtigungen auswählen",
                    "username-info": "Geben Sie den Benutzernamen des Supervisore360-Kontos ein, das Ihr Postfach verwalten soll, und wählen Sie die zu erteilenden Berechtigungen.",
                    "grants-info": "Mit dem Senden dieser Anfrage autorisieren Sie Supervisore360, das Postfach gemäß den angegebenen Berechtigungen in Ihrem Namen zu verwalten.",
                    "username-label": "Supervisore360-Benutzername",
                    "error": "Wir haben kein Supervisore360-Konto mit diesem Benutzernamen gefunden. Prüfen Sie die Angaben.",
                    "buttons": {
                      "invite": "Berechtigungsanfrage senden",
                      "cancel": "Abbrechen"
                    },
                    "toast": "Ist der Benutzername gültig, senden wir eine Anfrage an das angegebene Konto.",
                    "toast-error": "Fehler beim Senden der Anfrage",
                    "toast-error-exist": "Sie haben dieses Supervisore360-Konto bereits eingeladen oder die Berechtigung ist bereits aktiv"
                  }
                },
                "filters": {
                  "all": "Alle",
                  "to-accept": "Anzunehmen",
                  "active": "Aktiviert",
                  "waiting": "Ausstehend",
                  "suspended": "Gesperrt",
                  "revocked": "Widerrufen",
                  "refused": "Abgelehnt",
                  "text": "{{active}} von {{total}} Supervisoren aktiv"
                }
              }
            }
          },
          "password": {
            "title": "Passwort",
            "mail-recovery": {
              "title": "Wiederherstellungs-E-Mail",
              "subtitle": "Wählen Sie die E-Mail-Adresse, an die <strong>Sicherheitswarnungen</strong> und <strong>Anweisungen zum Zurücksetzen des Passworts</strong> gesendet werden, falls Sie es vergessen.",
              "buttons": {
                "insert-email": "E-Mail eingeben",
                "save": "Speichern",
                "cancel": "Abbrechen"
              },
              "warning": "Die Wiederherstellungs-E-Mail wurde nicht bestätigt. Denken Sie daran, sie zu bestätigen, um den Vorgang abzuschließen."
            },
            "change-password": {
              "banner": {
                "title": "Passwortänderung nicht verfügbar",
                "message": "Wenden Sie sich an Ihren <strong>Domain-Administrator</strong>"
              },
              "subtitle": "Passwort ändern",
              "fields": {
                "actual-password": "Aktuelles Passwort",
                "new-password": "Neues Passwort",
                "repeat-password": "Passwort wiederholen",
                "error-message": {
                  "actual-password-required": "Passwort eingeben",
                  "new-password-required": "Passwort eingeben",
                  "passwords-do-not-match": "Passwörter stimmen nicht überein."
                }
              },
              "rules": {
                "subtitle": "Anforderungen an das neue Passwort",
                "length-rule": "Zwischen 8 und {{max}} Zeichen lang",
                "case-rule": "Mindestens ein Groß- und ein Kleinbuchstabe",
                "number-rule": "Mindestens eine Ziffer",
                "one-symbol-rule": "Mindestens eines dieser Sonderzeichen: {{characters}}",
                "no-account-name-rule": "Darf nicht den vollständigen Kontonamen enthalten",
                "no-sequential-char": "Darf nicht mehr als zwei gleiche Zeichen hintereinander enthalten",
                "no-special-char-rule": "Darf folgende Zeichen nicht enthalten: Akzente, nicht-lateinische Zeichen, andere als die erlaubten Sonderzeichen",
                "info": "Muss sich vom zuletzt verwendeten Passwort unterscheiden"
              },
              "toast": {
                "password-saved": "Neues Passwort gespeichert"
              }
            }
          },
          "contacts": {
            "label": "Kontakte"
          },
          "calendars": {
            "label": "Kalender"
          },
          "file": {
            "label": "Datei"
          },
          "account-permissions": {
            "label": "Kontoberechtigungen"
          },
          "chat": {
            "title": "Chat",
            "keywords": "Chat"
          },
          "search-pec-address": {
            "title": "PEC-Adressen suchen",
            "keywords": "Suche, Adressen, PEC, zertifizierte E-Mail, Verzeichnis, Domizil, digital, Unternehmen, INAD, IPA, INI-PEC"
          },
          "pec-read-invoices": {
            "title": "Rechnungen lesen",
            "keywords": "lesen, Rechnungen, elektronisch, E-Rechnung, Rechnung"
          }
        },
        "additional-functions": {
          "section": "Diensteinstellungen",
          "aruba-drive": {
            "label": "Aruba Drive"
          },
          "digital-signature": {
            "label": "Aruba Digitale Signatur",
            "label-pec": "Digitale Signatur"
          },
          "chat": {
            "label": "Chat"
          },
          "dropbox": {
            "label": "Dropbox"
          },
          "app-aruba-pec": {
            "label": "App Aruba PEC"
          },
          "search-address-pec": {
            "label": "PEC-Adressen suchen"
          },
          "another-accounts": {
            "label": "Zugriff auf andere Konten"
          },
          "read-invoices": {
            "label": "Rechnungen lesen"
          },
          "archive": {
            "label": "Archiv"
          },
          "digital-preservation": {
            "label": "Digitale Archivierung"
          }
        },
        "list": {
          "account-security": {
            "multiuser": {
              "label": "Multiuser",
              "keywords": "Multiuser, Mehrbenutzer, Benutzer, Berechtigungen, zuweisen, Autorisierung, Mitarbeiter, zusammenarbeiten, Freigabe, teilen"
            },
            "archive": {
              "label": "Archiv"
            }
          },
          "aruba-electronic-invoicing-integration": {
            "keywords": "verbinden, Integration, Aruba, Rechnungsstellung, elektronisch",
            "label": "Aruba E-Rechnung verbinden"
          },
          "subscriptions": {
            "keywords": "Tarif, Info, Details, Abonnement",
            "label": "Tarifdetails"
          }
        },
        "navigation": {
          "discover": {
            "keywords": "Neuigkeiten, Webmail, entdecken, neu, Funktionen",
            "label": "Entdecken Sie die Neuigkeiten der Webmail"
          },
          "language": {
            "keywords": "Sprache, ändern, Italienisch, Englisch, Deutsch, Spanisch",
            "label": "Sprache ändern"
          },
          "switch-mailbox": {
            "description": "Sie melden sich vom aktuellen Postfach ab",
            "keywords": "trennen, beenden, abmelden, wechseln",
            "label": "Benutzer trennen"
          }
        }
      },
      "dialogs": {
        "new-rule": {
          "title": "Nachrichtenregeln",
          "title-create": "Regel erstellen",
          "title-edit": "Nachrichtenregeln",
          "steps": {
            "name": "Name",
            "conditions": "Bedingungen",
            "action": "Aktionen",
            "buttons": {
              "cancel": "Abbrechen",
              "next": "Weiter",
              "return": "Zurück"
            },
            "first-step": {
              "label": {
                "rule-name": "Regelname"
              }
            },
            "second-step": {
              "title": "Eine der folgenden Aktionen ausführen:"
            },
            "third-step": {
              "title": "Weiterleiten an"
            },
            "add-condition": "Bedingung hinzufügen",
            "condition-label": "Wenn",
            "condition-label-and": "",
            "action-label": "Dann"
          },
          "placeholders": {
            "name": "z. B. Regel1",
            "this-word": "Dieses Wort",
            "this-value": "Wert",
            "value": "Wert",
            "upper-lower": "Groß-/Kleinschreibung",
            "select": "Auswählen",
            "show-on-principal": "Im Hauptmenü anzeigen",
            "save-a-copy": "Kopie speichern",
            "mail-address": "E-Mail-Adresse",
            "save": "Speichern",
            "select-condition": "Bedingung auswählen",
            "select-action": "Aktion auswählen"
          },
          "operator": {
            "contains": "Enthält",
            "not-contains": "Enthält nicht",
            "equals": "Ist gleich",
            "not-equals": "Ist nicht gleich",
            "begin-with": "Beginnt mit",
            "ends-with": "Endet mit",
            "mb": "MB",
            "kb": "KB"
          },
          "form": {
            "ff_criteria_from": "",
            "ff_criteria_to": "",
            "ff_criteria_cc": "",
            "ff_criteria_subject": "",
            "ff_criteria_header": "",
            "ff_criteria_attachment": "",
            "ff_criteria_message": "",
            "ff_criteria_size": "Die Nachrichtengröße ist größer als",
            "ff_action_move": "Verschieben nach",
            "ff_action_forward": "Weiterleiten an",
            "ff_action_reject": "Nachricht ablehnen",
            "ff_action_delete": "Löschen",
            "case-sensitive": "(Groß-/Kleinschreibung beachten)",
            "ff_operator_contains": "enthält",
            "ff_operator_not_contains": "enthält nicht",
            "ff_operator_equal": "ist gleich",
            "ff_operator_not_equal": "ist nicht gleich",
            "ff_operator_begin_with": "beginnt mit",
            "ff_operator_end_with": "endet mit",
            "if": "Wenn",
            "keep-copy": "(Kopie speichern)"
          },
          "validation": {
            "name-max-length": "Der Regelname darf höchstens {{max}} Zeichen haben"
          }
        },
        "new-rule-pec": {
          "title": "Regeln für PEC-Nachrichten",
          "subtitle": "Richten Sie Regeln für den Empfang und die Verwaltung von PEC-Nachrichten ein.",
          "placeholders": {
            "name": "z. B. Regel1",
            "this-word": "Dieses Wort",
            "this-value": "Wert",
            "value": "Wert",
            "upper-lower": "Groß-/Kleinschreibung",
            "select": "Auswählen",
            "show-on-principal": "Im Hauptmenü anzeigen",
            "save-a-copy": "Kopie speichern",
            "mail-address": "E-Mail-Adresse",
            "save": "Speichern",
            "cc": "Der Empfänger in Cc (Kopie)",
            "hi": "Nachrichten mit hoher Priorität",
            "to": "Der PEC-Empfänger",
            "from": "Der PEC-Absender",
            "size": "Die Größe der Nachricht",
            "all": "Auf alle Nachrichten anwenden",
            "subject": "Der Betreff"
          },
          "errors": {
            "name-unique": "Der Regelname muss eindeutig sein",
            "invalid-email": "Geben Sie nur gültige E-Mail-Adressen ein",
            "max-destinations": "Sie können höchstens 5 Empfänger eingeben",
            "self-forward": "Sie können keine Nachrichten an Ihr PEC-Postfach weiterleiten"
          },
          "steps": {
            "name": "Name",
            "conditions": "Bedingungen",
            "action": "Aktionen",
            "add-condition": "Bedingung hinzufügen",
            "buttons": {
              "cancel": "Abbrechen",
              "next": "Weiter",
              "return": "Zurück"
            },
            "first-step": {
              "label": {
                "rule-name": "Regelname"
              }
            },
            "second-step": {
              "title": "Eine der folgenden Aktionen ausführen:"
            },
            "third-step": {
              "title": "Weiterleiten an"
            }
          },
          "header": {
            "title-and": "Wenn Sie die Regel ändern, ändert sich auch ihr Verhalten.",
            "message-and": "Wenn eine Einstellung mehrere Wörter enthält (z. B. „Wort1“ und „Wort2“ für den Betreff), wird die Regel angewendet, wenn der Betreff der Nachricht mindestens eines der angegebenen Wörter enthält.",
            "title-or": "„Mindestens eine der Bedingungen ist erfüllt“ wird schrittweise abgeschafft.",
            "message-or": "Wenn Sie mit „Alle Bedingungen sind erfüllt“ fortfahren, können Sie dies nicht mehr ändern."
          },
          "form": {
            "only-pec-email": "Die Regeln funktionieren nur mit PEC-E-Mail-Adressen",
            "dismiss-message": "Wenn Sie ohne diese Option fortfahren, steht sie künftig nicht mehr zur Verfügung.",
            "dismiss": "wird eingestellt",
            "and-radio-label": "Alle Bedingungen sind erfüllt",
            "or-radio-label": "Mindestens eine der Bedingungen ist erfüllt",
            "name": "Regelname",
            "all": "Alle Nachrichten",
            "from": "Von",
            "to": "An",
            "cc": "Cc",
            "hi": "Nachrichten mit hoher Priorität",
            "subject": "Betreff",
            "size": "Die Größe ist",
            "not_search": "Nicht suchen",
            "KB": "KB",
            "MB": "MB",
            "<": "ist kleiner als",
            ">": "ist größer als",
            "cp": "Kopieren nach",
            "mv": "Verschieben nach",
            "fwd": "Weiterleiten an",
            "AND": "und",
            "OR": "oder",
            "caseSensitive": "Groß-/Kleinschreibung beachten",
            "DEFAULT": "Standard",
            "contiene": "enthält",
            "non contiene": "enthält nicht",
            "e' uguale a": "ist gleich",
            "non e' uguale a": "ist nicht gleich",
            "inizia con": "beginnt mit",
            "non inizia con": "beginnt nicht mit",
            "finisce con": "endet mit",
            "non finisce con": "endet nicht mit",
            "e' minore di": "ist kleiner als",
            "e' maggiore di": "ist größer als",
            "if": "Wenn"
          },
          "toast": {
            "save": "Regel aktualisiert",
            "create": "Regel erstellt",
            "error": "Regel konnte nicht gespeichert werden"
          }
        },
        "add-forward": {
          "title": "Automatische Weiterleitung",
          "subtitle": "Weiterleiten an",
          "address": "E-Mail-Adresse",
          "keep-copy": "Originalnachricht im Posteingang behalten",
          "actions": {
            "save": "Speichern",
            "cancel": "Abbrechen"
          },
          "toast": {
            "success": "Änderungen gespeichert"
          },
          "form-warnings": {
            "email": "Gültige Adresse eingeben"
          }
        },
        "delete-forward": {
          "header": "Möchten Sie die automatische Weiterleitung löschen?",
          "question": "Nach dem Löschen erhalten Sie keine weitergeleiteten Nachrichten mehr an {{emailAddress}}",
          "actions": {
            "delete": "Löschen",
            "cancel": "Abbrechen"
          },
          "toast": {
            "success": "Änderungen gespeichert"
          }
        },
        "add-recovery-address": {
          "dialog-label": "Wiederherstellungs-E-Mail",
          "mail-insert-step": {
            "label": "E-Mail",
            "email-label": "E-Mail-Adresse",
            "password-label": "Postfach-Passwort",
            "step-hint": "Wir senden einen Bestätigungscode an die angegebene E-Mail. Stellen Sie sicher, dass Sie darauf zugreifen können, um den Vorgang abzuschließen.",
            "step-hint-password": "Geben Sie ein Wiederherstellungspostfach und aus Sicherheitsgründen das Passwort des verwendeten Postfachs ein.",
            "invalid-email": "Ungültige E-Mail",
            "invalid-current-email": "Das aktuell verwendete Postfach kann nicht eingegeben werden",
            "invalid-password": "Ungültiges Passwort"
          },
          "authorization": {
            "app-hint": "Um den Bestätigungscode an <strong>{{email}}</strong> zu senden, holen Sie sich den Code aus der App <strong>Aruba OTP</strong> (er wird alle 30 Sekunden aktualisiert).",
            "sms-code-hint": "Wir haben einen Bestätigungscode per SMS an die mit der Bestätigung in zwei Schritten verknüpfte Mobilnummer gesendet.",
            "sms-code-hint-number": "Wir haben einen Bestätigungscode per SMS an die Nummer <strong>{{number}}</strong> gesendet.",
            "sms-hint": "Zur Autorisierung des Vorgangs senden wir einen Bestätigungscode per SMS an die mit der Bestätigung in zwei Schritten verknüpfte Mobilnummer."
          },
          "mail-verification-step": {
            "sms-hint": "Wir haben einen Bestätigungscode per SMS an die mit der Bestätigung in zwei Schritten verknüpfte Mobilnummer gesendet.",
            "label": "Bestätigen",
            "input-label": "Bestätigungscode",
            "step-hint": "Wir haben einen Bestätigungscode an <b>{{mail}}</b> gesendet. Geben Sie den erhaltenen Code ein.",
            "success-toast": "Code an {{mail}} gesendet",
            "unsent": "Keinen Code erhalten?",
            "resend": "Erneut senden",
            "invalid-hint": "Prüfen Sie, ob der Code korrekt ist",
            "code-not-valid": "Bestätigungscode eingeben"
          },
          "save": "Speichern",
          "continue": "Weiter",
          "cancel": "Abbrechen",
          "go-back": "Zurück",
          "verify-email": "E-Mail bestätigen",
          "success-toast": "Wiederherstellungs-E-Mail gespeichert"
        },
        "add-recovery-mobile": {
          "title": "Wiederherstellungs-Mobilnummer",
          "steps": {
            "mobile": "Mobil",
            "authorize": "Senden autorisieren",
            "verify": "Mobilnummer bestätigen"
          },
          "mobile": {
            "hint": "Geben Sie die Wiederherstellungs-Mobilnummer ein, an die der Bestätigungscode <strong>per SMS</strong> gesendet werden soll.",
            "label": "Mobil",
            "error": "Geben Sie eine gültige Mobilnummer ein"
          },
          "authorization": {
            "password-hint": "Um den Bestätigungscode zu senden, geben Sie das <strong>Passwort für {{email}}</strong> ein.",
            "password-label": "Passwort für {{email}}",
            "password-error": "Falsches Passwort",
            "otp-hint": "Um den Bestätigungscode zu senden, geben Sie den von der App ArubaOTP generierten Code ein."
          },
          "verification": {
            "hint": "Wir haben einen Bestätigungscode per SMS an <strong>{{mobile}}</strong> gesendet.",
            "label": "Bestätigungscode",
            "invalid": "Prüfen Sie, ob der Code korrekt ist",
            "required": "Bestätigungscode eingeben",
            "unsent": "Keinen Code erhalten?",
            "resend": "Erneut senden"
          },
          "actions": {
            "continue": "Weiter",
            "save": "Speichern",
            "cancel": "Abbrechen",
            "back": "Zurück"
          },
          "success-toast": "Wiederherstellungs-Mobilnummer gespeichert"
        },
        "password-expiration-dialog": {
          "title": "Hinweis zum Passwortablauf",
          "paragraph": "Ihr Postfach-Passwort läuft in {{expirationDays}} Tagen ab. Möchten Sie es jetzt ändern?",
          "checkbox-text": "Diese Meldung nicht mehr anzeigen",
          "change-psw": "Passwort ändern",
          "not-now": "Nicht jetzt"
        },
        "pec-multiuser": {
          "detail": {
            "header": "Konto {{name}} {{surname}}",
            "fields": {
              "name": "Name",
              "email": "E-Mail",
              "username": "Benutzername",
              "state": "Kontostatus",
              "active-since": "Aktiviert seit",
              "deactive-since": "Deaktiviert seit",
              "invitation-of": "Eingeladen am",
              "suspended-on": "Gesperrt am",
              "accepted-on": "Angenommen am",
              "rejected-on": "Abgelehnt am",
              "state-values": {
                "1": "Aktiviert",
                "2": "Ausstehend",
                "3": "Gesperrt",
                "4": "Nicht aktiviert",
                "5": "Abgelehnt"
              }
            },
            "grants": {
              "title": "Berechtigungen",
              "read": {
                "label": "Gelesen",
                "text": "Zum Lesen von Nachrichten, Bestätigungen und Rechnungen und zum Verschieben zwischen Ordnern"
              },
              "write": {
                "label": "Schreiben",
                "text": "Zum Schreiben, Bearbeiten und Verschieben von Nachrichten zwischen Ordnern"
              },
              "send": {
                "label": "Senden",
                "text": "Zum Senden von PEC-Nachrichten"
              },
              "mail-app": {
                "label": "Auch in E-Mail-Programmen verwenden",
                "text": "Zum Senden und Empfangen von Nachrichten auch über E-Mail-Programme wie Outlook, Mail usw."
              },
              "settings": {
                "label": "Einstellungen verwalten",
                "text": "Zum Verwalten der Postfacheinstellungen"
              }
            },
            "mail-app-protocols": {
              "label": "Protokoll für eingehende Nachrichten {{protocol}}",
              "imap": {
                "label": "<b>IMAP</b> (empfohlen)",
                "text": "Eingehende Nachrichten auf dem Server speichern",
                "label-clean": "IMAP"
              },
              "pop3": {
                "label": "<b>POP3</b>",
                "text": "Eingehende Nachrichten auf Ihren Computer herunterladen",
                "label-clean": "POP3"
              }
            },
            "grant-status": {
              "active": "Aktiviert",
              "inactive": "Deaktiviert"
            },
            "account-status": {
              "suspended": {
                "title": "Dieses Konto wurde gesperrt.",
                "text": "Sie können nicht mehr mit {{name}}{{surname}} teilen, bis das Konto wieder aktiviert ist."
              },
              "suspended-reset-password": {
                "title": "Dieses Konto wurde gesperrt.",
                "text": "Sie können nicht mehr mit {{name}}{{surname}} teilen, bis das Passwort zurückgesetzt wurde.",
                "action": "E-Mail zum Zurücksetzen des Passworts erneut senden"
              },
              "suspended-inactive-account": {
                "title": "Dieses Konto wurde gesperrt.",
                "text": "Das PEC-Postfach, auf das Zugriff besteht, wurde deaktiviert.<br>Sobald es wieder aktiviert ist, wird der geteilte Zugriff wiederhergestellt."
              },
              "rejected-expiration": {
                "text": "Seit dem Senden der Anfrage sind mehr als 7 Tage vergangen, daher wurde sie <b>automatisch abgelehnt.</b>",
                "action": "Neue Einladung senden"
              }
            },
            "actions": {
              "reset-password": "Passwort zurücksetzen",
              "deactivate-account": "Konto deaktivieren",
              "cancel-reject": "Löschen und ablehnen",
              "resend-request": "Anfrage erneut senden",
              "remove-from-list": "Aus Liste löschen",
              "save": "Speichern",
              "close": "Schließen"
            }
          },
          "deactivate-account": {
            "header": "Möchten Sie das Konto deaktivieren?",
            "question": "Durch das Deaktivieren des Kontos entfernen Sie den geteilten Benutzer {{username}} <b>endgültig</b> aus Ihrem PEC-Postfach.",
            "confirm": "Endgültig deaktivieren",
            "cancel": "Abbrechen"
          },
          "cancel-reject-request": {
            "header": "Möchten Sie die Berechtigungsanfrage abbrechen und ablehnen?",
            "question": "Wenn Sie die Berechtigungsanfrage für <b>{{username}}</b> abbrechen, wird sie automatisch abgelehnt.",
            "confirm": "Löschen und ablehnen",
            "cancel": "Abbrechen"
          },
          "confirm-changes": {
            "header": "Möchten Sie die Änderungen bestätigen?",
            "question": "Durch die Änderung der Berechtigungen autorisieren Sie <b>{{username}}</b>, das Postfach gemäß den angegebenen Berechtigungen in Ihrem Namen zu verwalten.",
            "confirm": "Bestätigen",
            "cancel": "Abbrechen"
          },
          "reset-password": {
            "header": "Möchten Sie das Kontopasswort zurücksetzen?",
            "question": "Wenn Sie fortfahren, wird das Konto <b>{{username}}</b> gesperrt, bis ein neues Passwort festgelegt ist.",
            "confirm": "Passwort zurücksetzen",
            "cancel": "Abbrechen"
          },
          "new": {
            "header": "Neues PEC-Multiuser-Konto erstellen",
            "steps": {
              "collaborator": {
                "label": "Geteilter Benutzer",
                "title": "Benutzerdaten eingeben",
                "name": "Name",
                "surname": "Nachname",
                "email": "E-Mail",
                "username-title": "Wählen Sie einen Benutzernamen für das PEC-Multiuser-Konto",
                "username": "Benutzername",
                "username-proposal": "Unser Vorschlag:",
                "notes-title": "Persönliche Nachricht hinzufügen (optional)",
                "notes-placeholder": "Wir senden sie zusammen mit der Freigabeeinladung",
                "errors": {
                  "name-required": "Name eingeben",
                  "surname-required": "Nachname eingeben",
                  "email-required": "E-Mail-Adresse eingeben",
                  "email-invalid": "E-Mail prüfen",
                  "multiuser-account-email": "Diese Postfachadresse kann nicht eingegeben werden",
                  "certified-email": "Sie können nicht Ihre eigene PEC-Adresse hinzufügen",
                  "username-required": "Benutzernamen eingeben",
                  "username-invalid": "Prüfen Sie den Benutzernamen oder verwenden Sie einen der Vorschläge",
                  "username-exists": "Ein Konto mit diesem Benutzernamen existiert bereits"
                }
              },
              "grants": {
                "label": "Berechtigungen",
                "title": "Zu erteilende Berechtigungen auswählen",
                "read": {
                  "label": "Gelesen",
                  "text": "Zum Lesen von Nachrichten, Bestätigungen und Rechnungen und zum Verschieben zwischen Ordnern"
                },
                "write": {
                  "label": "Schreiben",
                  "text": "Zum Schreiben, Bearbeiten und Verschieben von Nachrichten zwischen Ordnern"
                },
                "send": {
                  "label": "Senden",
                  "text": "Zum Senden von PEC-Nachrichten"
                },
                "mail-app": {
                  "label": "Auch in E-Mail-Programmen verwenden",
                  "text": "Zum Senden und Empfangen von Nachrichten auch über E-Mail-Programme wie Outlook, Mail usw."
                },
                "settings": {
                  "label": "Einstellungen verwalten",
                  "text": "Zum Verwalten der Postfacheinstellungen"
                },
                "mail-app-protocols": {
                  "label": "Protokoll für eingehende Nachrichten {{protocol}}",
                  "imap": {
                    "label": "<b>IMAP</b> (empfohlen)",
                    "text": "Eingehende Nachrichten auf dem Server speichern",
                    "label-clean": "IMAP"
                  },
                  "pop3": {
                    "label": "<b>POP3</b>",
                    "text": "Eingehende Nachrichten auf Ihren Computer herunterladen",
                    "label-clean": "POP3"
                  }
                },
                "grant-status": {
                  "active": "Aktiviert",
                  "inactive": "Deaktiviert"
                },
                "info": "Durch das Erstellen des Kontos und Senden der Anfrage autorisieren Sie <b>{{username}}</b>, auf das PEC-Postfach <b>{{address}}</b> zuzugreifen und es gemäß den erteilten Berechtigungen zu verwalten."
              }
            },
            "actions": {
              "continue": "Weiter",
              "save": "Konto erstellen",
              "go-back": "Zurück"
            }
          }
        }
      },
      "toast": {
        "success-edit": "Änderungen gespeichert"
      },
      "pages": {
        "home": {
          "title": "Einstellungen",
          "reading-box": "Lesebereich",
          "vertical": "Rechts",
          "horizontal": "Unten",
          "full": "Immer erweitern",
          "all-customizations": "Alle Anpassungen",
          "most-used-functions": "Meistgenutzte Funktionen",
          "message-rules": {
            "title": "Nachrichtenregeln",
            "description": "Erstellt Regeln zum automatischen Verschieben oder Markieren von Nachrichten."
          },
          "pec-message-rules": {
            "title": "Nachrichtenregeln",
            "description": "Erstellen Sie Regeln, um Nachrichten automatisch zu verschieben, zu kopieren oder weiterzuleiten."
          },
          "sync-mail-calendars-or-contacts": {
            "title": "E-Mail, Kalender und Kontakte synchronisieren",
            "description": "Folgen Sie dem Einrichtungsassistenten, um die Dienste in Ihren E-Mail-Programmen oder auf dem Smartphone zu synchronisieren.",
            "action": "Synchronisierungsassistent für andere Geräte"
          },
          "sync-calendars-or-contacts": {
            "title": "Kalender und Kontakte synchronisieren",
            "description": "Folgen Sie dem Einrichtungsassistenten, um die Dienste in Ihren E-Mail-Programmen oder auf dem Smartphone zu synchronisieren.",
            "action": "Synchronisierungsassistent für andere Geräte"
          },
          "auto-reply": {
            "title": "Automatische Antwort",
            "description": "Sie können keine E-Mails beantworten? Richten Sie eine automatische Antwort für alle ein, die Ihnen schreiben."
          },
          "automatic-forwarding": {
            "title": "Automatische Weiterleitung",
            "description": "Möchten Sie Nachrichten auch an einer anderen E-Mail-Adresse empfangen? Aktivieren Sie die automatische Weiterleitung an ein beliebiges Postfach."
          },
          "no-pec-messages": {
            "title": "Nicht-PEC-Nachrichten",
            "description": "Ermöglichen Sie Ihrem Postfach, auch Nicht-PEC-Nachrichten zu empfangen."
          },
          "smtp-pop-imap": {
            "title": "SMTP/POP/IMAP",
            "description": "Verwalten Sie Ihr Postfach auch in anderen E-Mail-Programmen (Outlook, Mail usw.)."
          },
          "account-and-security": "Konto und Sicherheit",
          "password": "Passwort",
          "junk-email": "Junk-Mail",
          "email-and-mobile": "E-Mail-Adresse und Mobiltelefon",
          "password-pec": "Passwort",
          "2-step-verification": "Bestätigung in zwei Schritten",
          "access-history": "Anmeldeverlauf",
          "services-not-to-be-missed": "Dienste, die Sie nicht verpassen sollten",
          "multiuser": {
            "title": "Multiuser",
            "description": "Mit der Multiuser-Funktion können Sie anderen Personen Zugriff auf Ihr PEC-Postfach gewähren."
          },
          "aruba-drive": {
            "title": "Aruba Drive",
            "description": "Archivieren und teilen Sie alle gewünschten Dateien auf einer Plattform ohne Speicherbegrenzung."
          },
          "chat": {
            "title": "Chat",
            "description": "Wählen Sie Ihren Status, der anderen Postfächern Ihrer Domain angezeigt wird."
          },
          "app-aruba-pec": {
            "title": "App Aruba PEC",
            "description": "PEC-Postfächer mit der kostenlosen App auf Smartphone oder Tablet verwalten."
          },
          "search-pec-address": {
            "title": "PEC-Adressen suchen",
            "description": "Öffentliche Verzeichnisse über das digitale Domizil durchsuchen."
          },
          "pec-other-accounts": {
            "title": "Zugriff auf andere Konten",
            "description": "Mit PEC Multiuser und Supervisore360 können andere Personen auf Ihr PEC-Postfach zugreifen."
          },
          "pec-read-invoices": {
            "title": "Rechnungen lesen",
            "description": "E-Rechnungen zu Ihrem steuerlichen Postfach empfangen und anzeigen."
          },
          "pec-archive": {
            "title": "Archiv",
            "description": "Eine Kopie gesendeter und empfangener PEC-Nachrichten in einem eigenen Speicherbereich archivieren."
          },
          "smime": {
            "title": "S/MIME-Zertifikate",
            "description": "Senden Sie digital signierte Nachrichten, um deren Echtheit und Integrität sicherzustellen und die Sicherheit Ihrer E-Mails zu erhöhen."
          },
          "manage": "Verwalten",
          "edit": "Bearbeiten",
          "open": "Öffnen",
          "active-subscriptions": {
            "link": "Abonnements, aktiv, verwalten",
            "text": "Abonnements, aktiv, verwalten",
            "title": "Aktive Abonnements"
          },
          "discover": {
            "link": "Neuigkeiten, neu, Funktionen",
            "text": "Neuigkeiten ansehen",
            "title": "Neue Funktionen"
          },
          "for-domain-administrators": {
            "administrator": {
              "link": "Administrator, Administratoren, Domain, Verwaltung",
              "text": "für Domain-Administratoren",
              "title": "Domain-Administrator"
            },
            "business-mail-activation": {
              "link": "aktivieren, Aktivierung, Business, E-Mail, Postfach",
              "text": "Anzahl aktiver Postfächer",
              "title": "Aktivierung von Business-Mail-Postfächern"
            },
            "title": "Für Domain-Administratoren"
          },
          "other-accounts": {
            "link": "andere, Konten, verwalten",
            "text": "Andere Konten verwalten",
            "title": "Andere Konten"
          },
          "plans": {
            "link": "Tarife, Details, Tarif, Abonnement",
            "text": "Tarife, Details, Tarif, Abonnement",
            "title": "Tarife"
          },
          "service-subscriptions": {
            "aruba-business": {
              "text": "Aruba Business",
              "title": "Aruba Business"
            },
            "aruba-pec": {
              "text": "Aruba PEC",
              "title": "Aruba PEC"
            },
            "link": "Abonnements, Dienste, aktiv, Verwaltung",
            "text": "Abonnements, Dienste, aktiv, Verwaltung",
            "title": "Dienstabonnements"
          }
        },
        "mailbox": {
          "smtp-pop-imap": {
            "title": "SMTP/POP/IMAP",
            "subtitle": {
              "pec": "Verwalten Sie Ihr PEC-Postfach auch mit anderen <b>E-Mail-Programmen</b> (Outlook, Gmail usw.)",
              "pel": "Verwalten Sie Ihr Postfach auch mit anderen <b>E-Mail-Programmen</b> (Outlook, Gmail usw.)"
            },
            "feature-disabled": "<b>Dieses PEC-Postfach</b> kann nicht in E-Mail-Programmen (Outlook, Gmail usw.) verwaltet werden.",
            "config-parameters": {
              "title": "Konfigurationseinstellungen",
              "warning": "<b>Sie haben den Zugriff</b> über E-Mail-Programme deaktiviert.<br> Aktivieren Sie den Zugriff, um die Konfigurationseinstellungen zu sehen."
            },
            "side-content": {
              "pel-image-cta": "Lesen, schreiben und verwalten Sie <br>Ihr Aruba-Postfach<br> auf Smartphone oder Tablet",
              "pec-image-cta": "Lesen, schreiben und verwalten Sie <br>Ihre Aruba PEC<br> auf Smartphone oder Tablet",
              "pel-app-cta": "Mit der kostenlosen App Aruba Mail",
              "pec-app-cta": "Mit der kostenlosen App Aruba PEC",
              "faq": {
                "question": "Was passiert, wenn Sie den Zugriff deaktivieren?",
                "answer": "Bei deaktiviertem Zugriff kann <b>niemand</b> die Einstellungen verwenden und über {{mode}} auf Ihr Postfach zugreifen.",
                "cta": "Mehr dazu in der Anleitung"
              }
            },
            "accesses": {
              "title": "Anmeldungen",
              "inbox": {
                "title": "Posteingang",
                "imap": "Zugriff über IMAP aktivieren",
                "pop": "Zugriff über POP aktivieren"
              },
              "outbox": {
                "title": "Gesendet",
                "smtp": "Zugriff über SMTP aktivieren"
              }
            },
            "account": {
              "title": "Konto",
              "name": "Name",
              "email": "E-Mail-Adresse",
              "psw": "Passwort",
              "pec-mode": {
                "withApiKey": {
                  "psw-prefix": "Verwenden Sie das festgelegte Passwort für E-Mail-Programme (",
                  "psw-main": "PEC-Konto verwalten",
                  "psw-suffix": ")"
                }
              },
              "psw-suggest": "Postfach-Passwort verwenden",
              "psw-suggest-pec": "PEC-Postfach-Passwort verwenden",
              "psw-generate-pre": "Passwort für E-Mail-Programme generieren (",
              "psw-generate-link": "PEC-Konto verwalten",
              "psw-generate-post": ")"
            },
            "inbox": {
              "title": "Posteingang",
              "server": "Posteingang ({{selectedProtocol}})",
              "ssl": "SSL",
              "ssl-active": "Aktiviert",
              "ssl-not-active": "Deaktiviert",
              "port": "Server-Port",
              "options": {
                "IMAP": "IMAP (empfohlen)",
                "imap-tooltip": "Nachrichten online speichern: Sie können sie in verschiedenen Apps und E-Mail-Programmen lesen und verwalten",
                "POP": "POP",
                "pop-tooltip": "Nachrichten auf Ihren Computer herunterladen: Sie können sie nicht auf anderen Geräten lesen und verwalten",
                "smtp-tooltip": "Ermöglicht das Senden von Nachrichten aus verschiedenen Apps und E-Mail-Programmen."
              },
              "username": "Benutzername"
            },
            "outbox": {
              "title": "Gesendet",
              "server": "Ausgang (SMTP)",
              "ssl": "SSL",
              "port": "Server-Port",
              "username": "Benutzername"
            },
            "actions": {
              "sync-wizard": "Synchronisierungsassistent für andere Geräte"
            },
            "toast": {
              "success": "Änderungen gespeichert"
            }
          },
          "external-accounts": {
            "title": "Andere Postfächer",
            "header-message": "Sie können weitere Postfächer aus Ihrer Domain und externe (wie Yahoo, Hotmail usw.) hinzufügen, um alle Nachrichten in dieser Webmail zu sehen.",
            "add": "Postfach hinzufügen",
            "empty": "Keine Postfächer gefunden",
            "table-header": "Postfach",
            "dialog": {
              "header": {
                "add": "Neues Postfach hinzufügen",
                "edit": "Postfach bearbeiten"
              },
              "mail-address": "E-Mail-Adresse",
              "credentials": "Anmeldedaten",
              "form": {
                "email": "E-Mail-Adresse",
                "profile": "Kontoname",
                "password": "Passwort",
                "server": "Serveradresse",
                "server-info": "Diese Informationen finden Sie in der Regel in den Einstellungen Ihres Postfachs.",
                "server-type": {
                  "imap": "IMAP4",
                  "pop": "POP3",
                  "label": "Servertyp"
                },
                "port": "Port",
                "ssl": {
                  "label": "SSL",
                  "no-ssl": "Keine",
                  "tls": "STARTTLS",
                  "ssl": "SSL"
                },
                "error": {
                  "email-not-valid": "Gültige E-Mail-Adresse eingeben",
                  "error-dialog": {
                    "header": "Ein Fehler ist aufgetreten. Bitte später erneut versuchen",
                    "action": "OK"
                  }
                }
              },
              "success-toast": {
                "add": "Postfach hinzugefügt",
                "edit": "Änderungen gespeichert",
                "delete": "Adresse aus der Liste entfernt"
              },
              "actions": {
                "proceed": "Weiter",
                "save": "Speichern",
                "cancel": "Abbrechen"
              }
            },
            "maximum-accounts-reached": {
              "header": "Maximale Anzahl zusätzlicher Postfächer",
              "question": "Sie haben die maximale Anzahl zusätzlicher Postfächer für Ihre Webmail erreicht.",
              "close": "Schließen"
            },
            "delete": {
              "header": "Postfächer entfernen",
              "question": "Möchten Sie das ausgewählte Postfach wirklich aus der Webmail entfernen?",
              "confirm": "Entfernen",
              "cancel": "Abbrechen"
            },
            "banner": {
              "title": "Die eingegebenen Daten sind falsch. Bitte prüfen und erneut versuchen."
            },
            "pec-domain": {
              "message": "<strong>In dieser Webmail ist Ihr PEC-Postfach schreibgeschützt.</strong> <br/>Um zertifizierte Nachrichten zu senden, öffnen Sie die <a tabindex=\"-1\" href=\"https://webmail.pec.it\" target=\"_blank\">PEC-Webmail</a>."
            }
          },
          "information": {
            "title": "Details",
            "mailbox-type": "Postfach {{type}}",
            "profile": "Profilname",
            "attachments": {
              "title": "Anhänge",
              "attachMaxNb": "Maximale Anzahl Anhänge",
              "attachMaxFileSize": "Maximale Anhangsgröße",
              "attachMaxTotalSize": "Maximale Gesamtgröße der Anhänge"
            },
            "mailbox-status": {
              "title": "PEC-Postfach",
              "status": {
                "0": "Aktiviert",
                "1": "Blockiert",
                "2": "Abgelaufen",
                "3": "Wegen Spam gesperrt",
                "label": "Status"
              },
              "pec-plus": {
                "label": "Postfach",
                "value": "Konform mit europäischen Standards",
                "what-mean": "Was bedeutet das?"
              },
              "activation": {
                "label": "Aktivierung",
                "get-certification": "Zertifizierung per PEC erhalten",
                "success-toast": "Anfrage gesendet. Sie erhalten Ihre Zertifizierung in Kürze per PEC."
              },
              "renew": {
                "label": "Automatische Verlängerung",
                "enable": "Aktiviert",
                "not-enabled": "Nicht aktiviert",
                "action": "Verlängern"
              },
              "expire": {
                "label": "Ablaufdatum",
                "show_expiration": "Ablaufdatum anzeigen"
              }
            },
            "holder": {
              "title": "Inhaber",
              "accountholder": "Kontoinhaber",
              "tax-code": "USt-IdNr.",
              "fiscal-code": "Steuernummer",
              "help": {
                "title": "Wie kann ich die Inhaberdaten ändern?",
                "message": "Je nachdem, welche Daten Sie ändern möchten, gibt es verschiedene Möglichkeiten. <a href=\"https://guide.pec.it/modifica-dati.aspx\" target=\"_blank\">Zur Anleitung.</a>",
                "message-partner": "Melden Sie sich im Verwaltungsbereich des Dienstanbieters an oder wenden Sie sich für weitere Informationen an ihn."
              }
            },
            "holder-contacts": {
              "title": "Kontaktdaten des Inhabers",
              "message": "Daten, die benötigt werden, um Ihnen Ablaufhinweise, Mitteilungen und alle relevanten Informationen zu senden.",
              "email": "E-Mail",
              "phone": "Telefon",
              "help": {
                "title": "Wie kann ich die Kontaktdaten des Inhabers ändern?",
                "message": "Öffnen Sie Ihren <a href=\"{{url}}\" target=\"_blank\">Aruba-Kundenbereich</a> und melden Sie sich mit Ihrem @aruba.it-Benutzernamen an",
                "message-partner": "Melden Sie sich im Verwaltungsbereich des Dienstanbieters an oder wenden Sie sich für weitere Informationen an ihn."
              }
            },
            "contacts-pec": {
              "title": "Kontakte des PEC-Kontos",
              "message": "Daten, die benötigt werden, um Ihr Passwort zurückzusetzen, bestimmte Vorgänge zu bestätigen und weitere Aufgaben zu erledigen.",
              "action-edit": "Bearbeiten"
            }
          },
          "space": {
            "title": "Speicher",
            "module": {
              "messages": {
                "label": "Nachrichtenspeicher",
                "tooltip": "Der Speicherplatz, den E-Mails und Anhänge im Bereich Nachrichten belegen (Posteingang, Entwürfe, Gesendet, Spam, Papierkorb, Ihre Ordner)."
              },
              "files": {
                "label": "Dateispeicher",
                "tooltip": "Der Speicherplatz, den Dateien und Ordner im Bereich Dateien belegen."
              },
              "archive": {
                "label": "Archivspeicher",
                "tooltip": "Speicherplatz, den automatische Kopien gesendeter und empfangener Nachrichten seit Aktivierung des Sicherheitsarchivs belegen."
              },
              "preservation": {
                "label": "Speicher für digitale Langzeitarchivierung",
                "tooltip": "Speicher für digitale Langzeitarchivierung"
              }
            },
            "tag": {
              "warning": "Fast voll",
              "alert": "Fast voll",
              "full": "Voll",
              "not-active": "Nicht aktiviert",
              "active": "Aktiviert"
            },
            "space-usage": "<b>{{size}} {{unit}} belegt</b> von {{maxSize}} MB",
            "space-usage-unlimited": "<b>{{size}} {{unit}} belegt</b>",
            "unlimited": "Unbegrenzter E-Mail-Speicher",
            "unlimited-files": "",
            "archive-banner": "Aktivieren Sie Ihr Archiv durch Hinzufügen von <b>Business Mail</b>",
            "archive-banner-postmaster": "Wenden Sie sich an Ihren Domain-Administrator (Postmaster), um den Dienst zu erhalten",
            "actions": {
              "upgrade-pel": "Unbegrenzten E-Mail-Speicher holen",
              "upgrade": "Speicher erweitern",
              "changePecTypeToProPremium": "Upgrade auf PEC Pro oder Premium",
              "changePecTypeToPremium": "Upgrade auf PEC Premium",
              "buy-business-mail": "Business Mail holen"
            },
            "archive-retention": {
              "label": "Automatisch löschen",
              "not-active": "Wenden Sie sich an den Postfach-Administrator, um diese Einstellung zu aktivieren.",
              "active": "Archivierte Nachrichten, die vor mehr als {{retention}} Monaten empfangen wurden, werden endgültig gelöscht. <br>Wenden Sie sich an den Postfach-Administrator, um diese Einstellung zu deaktivieren."
            },
            "files-usage": "Sie haben {{count}} von {{max}} verfügbaren Dateien oder Ordnern erstellt.",
            "alert-messages-space": {
              "title": {
                "messages": {
                  "pel": {
                    "aruba": {
                      "warning": "Der Nachrichtenspeicher Ihres Postfachs ist fast voll.",
                      "alert": "Der Nachrichtenspeicher Ihres Postfachs ist fast voll.",
                      "full": "Der Nachrichtenspeicher Ihres Postfachs ist voll."
                    }
                  },
                  "pec": {
                    "aruba": {
                      "warning": "Ihr Postfachspeicher ist fast voll.",
                      "alert": "Ihr Postfachspeicher ist fast voll.",
                      "full": "Ihr Postfachspeicher ist voll."
                    },
                    "partner": {
                      "warning": "Ihr Postfachspeicher ist fast voll.",
                      "alert": "Ihr Postfachspeicher ist fast voll.",
                      "full": "Ihr Postfachspeicher ist voll."
                    },
                    "simple": {
                      "warning": "Ihr Postfachspeicher ist fast voll.",
                      "alert": "Ihr Postfachspeicher ist fast voll.",
                      "full": "Ihr Postfachspeicher ist voll."
                    }
                  }
                },
                "archive": {
                  "pel": {
                    "aruba": {
                      "warning": "Der Archivspeicher Ihres Postfachs ist fast voll.",
                      "alert": "Der Archivspeicher Ihres Postfachs ist fast voll.",
                      "full": "Der Archivspeicher Ihres Postfachs ist voll."
                    }
                  },
                  "pec": {
                    "aruba": {
                      "warning": "Archivspeicher fast voll",
                      "alert": "Archivspeicher fast voll",
                      "full": "Archivspeicher voll"
                    },
                    "partner": {
                      "warning": "Archivspeicher fast voll",
                      "alert": "Archivspeicher fast voll",
                      "full": "Archivspeicher voll"
                    },
                    "simple": {
                      "warning": "Archivspeicher fast voll",
                      "alert": "Archivspeicher fast voll",
                      "full": "Archivspeicher voll"
                    }
                  }
                },
                "files": {
                  "pel": {
                    "aruba": {
                      "warning": "Der Dateispeicher Ihres Postfachs ist fast voll.",
                      "alert": "Der Dateispeicher Ihres Postfachs ist fast voll.",
                      "full": "Der Dateispeicher Ihres Postfachs ist voll."
                    }
                  }
                },
                "preservation": {
                  "pec": {
                    "aruba": {
                      "warning": "Speicher für digitale Archivierung fast voll",
                      "alert": "Speicher für digitale Archivierung fast voll",
                      "full": "Speicher für digitale Archivierung voll"
                    },
                    "partner": {
                      "warning": "Speicher für digitale Archivierung fast voll",
                      "alert": "Speicher für digitale Archivierung fast voll",
                      "full": "Speicher für digitale Archivierung voll"
                    },
                    "simple": {
                      "warning": "Speicher für digitale Archivierung fast voll",
                      "alert": "Speicher für digitale Archivierung fast voll",
                      "full": "Speicher für digitale Archivierung voll"
                    }
                  }
                }
              },
              "message": {
                "messages": {
                  "pel": {
                    "aruba": {
                      "warning": "Belegter Nachrichtenspeicher: {{progress}} % <br>Sie benötigen mehr Speicherplatz, um weiterhin Nachrichten zu empfangen und Kopien gesendeter Nachrichten zu speichern: Fügen Sie GigaMail oder Unbegrenzten E-Mail-Speicher hinzu.",
                      "alert": "Belegter Nachrichtenspeicher: {{progress}} % <br>Sie benötigen mehr Speicherplatz, um weiterhin Nachrichten zu empfangen und Kopien gesendeter Nachrichten zu speichern: Fügen Sie GigaMail oder Unbegrenzten E-Mail-Speicher hinzu.",
                      "full": "Belegter Nachrichtenspeicher: {{progress}} % <br>Fügen Sie GigaMail oder Unbegrenzten E-Mail-Speicher hinzu, um weiterhin Nachrichten zu empfangen und Kopien gesendeter Nachrichten zu speichern."
                    }
                  },
                  "pec": {
                    "aruba": {
                      "warning": "Belegter Speicher {{progress}} % <br><b>Erweitern Sie Ihren Speicher</b> durch zusätzliche GB oder ein Upgrade auf ein höheres Postfach, damit Sie <b>keine wichtigen Funktionen verlieren</b>, wie das Senden von PEC-Nachrichten.",
                      "alert": "Belegter Speicher {{progress}} % <br><b>Erweitern Sie Ihren Speicher</b> durch zusätzliche GB oder ein Upgrade auf ein höheres Postfach, damit Sie <b>keine wichtigen Funktionen verlieren</b>, wie das Senden von PEC-Nachrichten.",
                      "full": "<b>Sie können keine PEC-Nachrichten mehr senden.</b><br><b>Erweitern Sie Ihren Speicher</b> durch zusätzliche GB oder ein Upgrade auf ein höheres Postfach, um alle Funktionen Ihres PEC-Postfachs wiederherzustellen."
                    },
                    "partner": {
                      "warning": "Belegter Speicher {{progress}} %.<br><b>Beantragen Sie eine Speichererweiterung</b> oder ein Upgrade auf ein höheres Postfach, um <b>keine wichtigen Funktionen zu verlieren</b>, wie das Senden von PEC-Nachrichten.<br> Wenden Sie sich an Ihren Dienstanbieter oder melden Sie sich, falls berechtigt, bei <a tabindex=\"-1\" href=\"https://areaclienti.arubapec.it\" target=\"_blank\">customerarea.arubapec.it</a> an und führen Sie das Upgrade online durch.",
                      "alert": "Belegter Speicher {{progress}} %.<br><b>Beantragen Sie eine Speichererweiterung</b> oder ein Upgrade auf ein höheres Postfach, um <b>keine wichtigen Funktionen zu verlieren</b>, wie das Senden von PEC-Nachrichten.<br> Wenden Sie sich an Ihren Dienstanbieter oder melden Sie sich, falls berechtigt, bei <a tabindex=\"-1\" href=\"https://areaclienti.arubapec.it\" target=\"_blank\">customerarea.arubapec.it</a> an und führen Sie das Upgrade online durch.",
                      "full": "<b>Sie können keine PEC-Nachrichten mehr senden.</b><br><b>Beantragen Sie eine Speichererweiterung</b> oder ein Upgrade auf ein höheres Postfach, um <b>keine wichtigen Funktionen zu verlieren</b>, wie das Senden von PEC-Nachrichten.<br> Wenden Sie sich an Ihren Dienstanbieter oder melden Sie sich, falls berechtigt, bei <a tabindex=\"-1\" href=\"https://areaclienti.arubapec.it\" target=\"_blank\">customerarea.arubapec.it</a> an und führen Sie das Upgrade online durch."
                    },
                    "simple": {
                      "warning": "Belegter Speicher {{progress}} %.<br><b>Geben Sie Postfachspeicher frei</b>, damit Sie <b>keine wichtigen Funktionen verlieren</b>, wie das Senden von PEC-Nachrichten.",
                      "alert": "Belegter Speicher {{progress}} %.<br><b>Geben Sie Postfachspeicher frei</b>, damit Sie <b>keine wichtigen Funktionen verlieren</b>, wie das Senden von PEC-Nachrichten.",
                      "full": "<b>Sie können keine PEC-Nachrichten mehr senden.</b><br><b>Geben Sie Postfachspeicher frei</b>, um alle Funktionen Ihres PEC-Postfachs wiederherzustellen."
                    }
                  }
                },
                "archive": {
                  "pel": {
                    "aruba": {
                      "warning": "Belegter Archivspeicher: {{progress}} % <br>Sie benötigen mehr Speicherplatz, um weiterhin automatisch Kopien Ihrer Nachrichten zu speichern: Fügen Sie GigaMail oder Unbegrenzten E-Mail-Speicher hinzu.",
                      "alert": "Belegter Archivspeicher: {{progress}} % <br>Sie benötigen mehr Speicherplatz, um weiterhin automatisch Kopien Ihrer Nachrichten zu speichern: Fügen Sie GigaMail oder Unbegrenzten E-Mail-Speicher hinzu.",
                      "full": "Belegter Archivspeicher: {{progress}} % <br>Fügen Sie GigaMail oder Unbegrenzten E-Mail-Speicher hinzu, um weiterhin automatisch Kopien Ihrer Nachrichten zu speichern."
                    }
                  },
                  "pec": {
                    "aruba": {
                      "warning": "Belegter Speicher {{progress}} %.<br><b>Erweitern Sie Ihren Speicher</b> durch zusätzliche GB für Ihr Archiv oder führen Sie, wenn Sie ein PEC-Pro-Postfach haben, ein <b>Upgrade auf Premium</b> durch, damit die Archivierung Ihrer wichtigen Nachrichten nicht stoppt.",
                      "alert": "Belegter Speicher {{progress}} %.<br><b>Erweitern Sie Ihren Speicher</b> durch zusätzliche GB für Ihr Archiv oder führen Sie, wenn Sie ein PEC-Pro-Postfach haben, ein <b>Upgrade auf Premium</b> durch, damit die Archivierung Ihrer wichtigen Nachrichten nicht stoppt.",
                      "full": "Belegter Speicher {{progress}} %.<br><b>Erweitern Sie Ihren Speicher</b> durch zusätzliche GB für Ihr Archiv oder führen Sie, wenn Sie ein PEC-Pro-Postfach haben, ein <b>Upgrade auf Premium</b> durch, damit die Archivierung Ihrer wichtigen Nachrichten nicht stoppt."
                    },
                    "partner": {
                      "warning": "Belegter Speicher {{progress}} %.<br><b>Beantragen Sie eine Erweiterung Ihres Archivspeichers</b> oder führen Sie, wenn Sie ein PEC-Pro-Postfach haben,<b> ein Upgrade auf Premium</b> durch, damit die Archivierung Ihrer wichtigen Nachrichten nicht stoppt.<br>Wenden Sie sich an Ihren Dienstanbieter oder melden Sie sich, falls berechtigt, bei <a tabindex=\"-1\" href=\"https://areaclienti.arubapec.it\" target=\"_blank\">customerarea.arubapec.it</a> an und führen Sie das Upgrade online durch.",
                      "alert": "Belegter Speicher {{progress}} %.<br><b>Beantragen Sie eine Erweiterung Ihres Archivspeichers</b> oder führen Sie, wenn Sie ein PEC-Pro-Postfach haben,<b> ein Upgrade auf Premium</b> durch, damit die Archivierung Ihrer wichtigen Nachrichten nicht stoppt.<br>Wenden Sie sich an Ihren Dienstanbieter oder melden Sie sich, falls berechtigt, bei <a tabindex=\"-1\" href=\"https://areaclienti.arubapec.it\" target=\"_blank\">customerarea.arubapec.it</a> an und führen Sie das Upgrade online durch.",
                      "full": "Belegter Speicher {{progress}} %.<br><b>Beantragen Sie eine Erweiterung Ihres Archivspeichers</b> oder führen Sie, wenn Sie ein PEC-Pro-Postfach haben,<b> ein Upgrade auf Premium</b> durch, damit die Archivierung Ihrer wichtigen Nachrichten nicht stoppt.<br>Wenden Sie sich an Ihren Dienstanbieter oder melden Sie sich, falls berechtigt, bei <a tabindex=\"-1\" href=\"https://areaclienti.arubapec.it\" target=\"_blank\">customerarea.arubapec.it</a> an und führen Sie das Upgrade online durch."
                    },
                    "simple": {
                      "warning": "Belegter Speicher {{progress}} %.<br><b>Erweitern Sie Ihren Speicher</b> durch zusätzliche GB für Ihr Archiv oder führen Sie, wenn Sie ein PEC-Pro-Postfach haben, ein <b>Upgrade auf Premium</b> durch, damit die Archivierung Ihrer wichtigen Nachrichten nicht stoppt.",
                      "alert": "Belegter Speicher {{progress}} %.<br><b>Erweitern Sie Ihren Speicher</b> durch zusätzliche GB für Ihr Archiv oder führen Sie, wenn Sie ein PEC-Pro-Postfach haben, ein <b>Upgrade auf Premium</b> durch, damit die Archivierung Ihrer wichtigen Nachrichten nicht stoppt.",
                      "full": "Belegter Speicher {{progress}} %.<br><b>Erweitern Sie Ihren Speicher</b> durch zusätzliche GB für Ihr Archiv oder führen Sie, wenn Sie ein PEC-Pro-Postfach haben, ein <b>Upgrade auf Premium</b> durch, damit die Archivierung Ihrer wichtigen Nachrichten nicht stoppt."
                    }
                  }
                },
                "files": {
                  "pel": {
                    "aruba": {
                      "warning": "",
                      "warning-unlimited": "",
                      "alert": "Belegter Speicher: {{progress}} %. <br>Sie müssen Speicherplatz freigeben, wenn Sie weiterhin Dateien hochladen und neue Ordner erstellen möchten.",
                      "full": "",
                      "full-unlimited": ""
                    }
                  }
                },
                "preservation": {
                  "pec": {
                    "aruba": {
                      "warning": "Belegter Speicher {{progress}} %.<br><b>Erweitern Sie Ihren Speicher</b>, um weiterhin neue Nachrichten speichern zu können.",
                      "alert": "Belegter Speicher {{progress}} %.<br><b>Erweitern Sie Ihren Speicher</b>, um weiterhin neue Nachrichten speichern zu können.",
                      "full": "Belegter Speicher {{progress}} %.<br><b>Erweitern Sie Ihren Speicher</b>, um weiterhin neue Nachrichten speichern zu können."
                    },
                    "partner": {
                      "warning": "Belegter Speicher {{progress}} %. <br>Wenn Sie weiterhin neue Nachrichten speichern möchten, beantragen Sie bei Ihrem Dienstanbieter eine Speichererweiterung oder melden Sie sich, falls Sie direkt kaufen dürfen, bei <a tabindex=\"-1\" href=\"https://areaclienti.arubapec.it\" target=\"_blank\">customerarea.arubapec.it</a> an und erweitern Sie Ihren Speicher.",
                      "alert": "Belegter Speicher {{progress}} %. <br>Wenn Sie weiterhin neue Nachrichten speichern möchten, beantragen Sie bei Ihrem Dienstanbieter eine Speichererweiterung oder melden Sie sich, falls Sie direkt kaufen dürfen, bei <a tabindex=\"-1\" href=\"https://areaclienti.arubapec.it\" target=\"_blank\">customerarea.arubapec.it</a> an und erweitern Sie Ihren Speicher.",
                      "full": "Belegter Speicher {{progress}} %. <br>Wenn Sie weiterhin neue Nachrichten speichern möchten, beantragen Sie bei Ihrem Dienstanbieter eine Speichererweiterung oder melden Sie sich, falls Sie direkt kaufen dürfen, bei <a tabindex=\"-1\" href=\"https://areaclienti.arubapec.it\" target=\"_blank\">customerarea.arubapec.it</a> an und erweitern Sie Ihren Speicher."
                    },
                    "simple": {
                      "warning": "Belegter Speicher {{progress}} %.<br><b>Erweitern Sie Ihren Speicher</b>, um weiterhin neue Nachrichten speichern zu können.",
                      "alert": "Belegter Speicher {{progress}} %.<br><b>Erweitern Sie Ihren Speicher</b>, um weiterhin neue Nachrichten speichern zu können.",
                      "full": "Belegter Speicher {{progress}} %.<br><b>Erweitern Sie Ihren Speicher</b>, um weiterhin neue Nachrichten speichern zu können."
                    }
                  }
                }
              }
            }
          }
        },
        "messages-writing": {
          "automatic-forwarding": {
            "title": "Automatische Weiterleitung",
            "subtitle": "Leiten Sie jede empfangene Nachricht automatisch <b>an eine E-Mail-Adresse</b> weiter.",
            "add": "Automatische Weiterleitung erstellen",
            "table": {
              "headers": {
                "address": "Weiterleiten an",
                "condition": "Bedingung"
              },
              "save-copy": "Originalnachricht trotzdem im Posteingang behalten"
            }
          },
          "message-rules": {
            "select-box-actions": {
              "delete": "Löschen",
              "edit": "Bearbeiten"
            },
            "drag-drop": {
              "move": "Regel verschieben",
              "move-rule": "{{number}} Regel verschieben"
            },
            "title": "Nachrichtenregeln",
            "button": {
              "new-rule": "Regel erstellen",
              "delete": "Löschen",
              "edit": "Bearbeiten"
            },
            "text": "Erstellen Sie Regeln zum automatischen <strong>Verschieben und Markieren</strong> von Nachrichten.<br><br> Regeln werden <strong>in der von Ihnen festgelegten Reihenfolge angewendet</strong>: Gibt es mehrere Regeln mit denselben Kriterien, wird die erste angewendet.",
            "table-header": {
              "name-rule": "Regelname",
              "state": "Status",
              "rule": "Regel"
            },
            "content-table": {
              "no-rule": "Keine Regel gefunden"
            },
            "placeholders": {
              "active": "Aktiviert",
              "deactive": "Deaktiviert"
            },
            "notification": {
              "update-rule": "Regel aktualisiert",
              "success": "Regel erstellt",
              "delete-single": "Regel gelöscht",
              "delete-multiple": "Regeln gelöscht.",
              "error": "Regel konnte nicht aktualisiert werden"
            },
            "dialog": {
              "delete": {
                "title": "Nachrichtenregeln löschen",
                "question": "Möchten Sie die ausgewählte Regel wirklich endgültig löschen?",
                "question-multiple": "Möchten Sie die ausgewählten Regeln wirklich endgültig löschen?",
                "confirm": "Bestätigen",
                "cancel": "Abbrechen"
              }
            }
          },
          "pec-message-rules": {
            "select-box-actions": {
              "delete": "Löschen",
              "edit": "Bearbeiten"
            },
            "placeholders": {
              "active": "Aktiviert",
              "deactive": "Deaktiviert"
            },
            "notification": {
              "update-rule": "Regel aktualisiert",
              "success": "Regel erstellt",
              "delete-single": "Regel gelöscht",
              "delete-multiple": "Regeln gelöscht."
            },
            "dialog": {
              "delete": {
                "title": "Nachrichtenregeln löschen",
                "question": "Möchten Sie die ausgewählte Regel wirklich endgültig löschen?",
                "question-multiple": "Möchten Sie die ausgewählten Regeln wirklich endgültig löschen?",
                "confirm": "Bestätigen",
                "cancel": "Abbrechen"
              }
            },
            "drag-drop": {
              "move": "Regel verschieben",
              "move-rule": "{{number}} Regel verschieben"
            },
            "title": "Nachrichtenregeln",
            "text": "Erstellen Sie Regeln, um <strong>Nachrichten automatisch zu verschieben, zu kopieren oder weiterzuleiten</strong>.<br/>Sie können die Reihenfolge der Regeln festlegen. Bei Konflikten wird die Regel angewendet, die in Ihrer Liste weiter oben steht.",
            "button": {
              "new-rule": "Regel erstellen",
              "delete": "Löschen",
              "edit": "Bearbeiten"
            },
            "content-table": {
              "no-rule": "Keine Regeln gefunden"
            },
            "table-header": {
              "name-rule": "Regelname",
              "state": "Status",
              "rule": "Regel"
            },
            "toast": {
              "enabled": "Regel aktiviert",
              "disabled": "Regel deaktiviert",
              "moved": "Regel verschoben",
              "deleted": "Regel gelöscht"
            }
          },
          "non-pec-messages": {
            "desktop": {
              "title": "Nicht-PEC-Nachrichten",
              "subtitle": "Sie können Ihr Postfach so einstellen, dass es auch <b>nicht zertifizierte E-Mails</b> empfängt.",
              "form-title": "Empfang von Nicht-PEC-Nachrichten einrichten",
              "form": {
                "enabled": "Nicht-PEC-Nachrichten",
                "delivery": "Nachrichten im ausgewählten Ordner empfangen",
                "forward": "Nachrichten automatisch an das angegebene Postfach senden",
                "folder": "Ordner",
                "forward-recipient": "E-Mail-Adresse"
              }
            },
            "mobile": {
              "title": "Nicht-PEC-Nachrichten empfangen",
              "subtitle": "Empfangen Sie zusätzlich zu den PEC-Nachrichten auch <b>Nicht-PEC-Nachrichten</b>.",
              "form-title": "Regeln für Nicht-PEC-Nachrichten",
              "form": {
                "enabled": "Nicht-PEC-Nachrichten empfangen",
                "delivery": "Nachrichten im ausgewählten Ordner empfangen",
                "forward": "Nachrichten automatisch an das angegebene Postfach senden",
                "folder": "Ordner",
                "forward-recipient": "E-Mail-Adresse"
              }
            },
            "save": {
              "toast": {
                "success": "Änderungen gespeichert",
                "error": "Fehler beim Speichern der Änderungen"
              }
            }
          }
        },
        "account-security": {
          "password-recovery": {
            "email": {
              "label": "E-Mail",
              "verified": "Bestätigt",
              "unverified": "Zu bestätigen",
              "edit": "Bearbeiten",
              "verify": "Bestätigen"
            },
            "mobile": {
              "label": "Mobil",
              "title": "Wiederherstellungs-Mobilnummer",
              "subtitle": "Die Mobilnummer wird verwendet, um <strong>bestimmte Vorgänge zu bestätigen und Zugriffe zu autorisieren</strong>.",
              "insert": "Mobilnummer eingeben",
              "edit": "Bearbeiten",
              "verified": "Bestätigt",
              "load-error": "Wiederherstellungs-Mobilnummer kann nicht geladen werden. Bitte später erneut versuchen."
            }
          },
          "two-factor-password": {
            "title": "Passwort für E-Mail-Programme und Apps",
            "description": "Passwort für E-Mail-Programme und Apps generieren und verwalten.",
            "usage": {
              "title": "Wo kann ich dieses Passwort verwenden?",
              "webmail-desktop": "Aruba Webmail Desktop",
              "webmail-mobile": "Aruba Webmail Mobil",
              "desktop-clients": "Desktop-E-Mail-Programme (Outlook, Mail usw.)",
              "mobile-apps": "Apps wie Gmail, Outlook, Mail, Aruba Sync DAV usw."
            },
            "status": {
              "label": "Status",
              "active": "Aktiviert",
              "expiring": "Läuft ab",
              "expired": "Abgelaufen"
            },
            "expiration": {
              "label": "Ablauf",
              "renew": "Ablaufdatum verschoben auf {{date}}",
              "notice": "Wir benachrichtigen Sie 2 Wochen vor Ablauf, und Sie können den Ablauf verschieben"
            },
            "actions": {
              "generate": "Passwort generieren",
              "generate-new": "Neues Passwort generieren",
              "renew": "Ablauf verschieben",
              "deactivate": "Deaktivieren"
            },
            "regenerate": {
              "title": "Sie müssen Ihr Passwort sehen? Generieren Sie ein neues",
              "description": "<p>Sie haben bereits ein Passwort für Ihre E-Mail-Programme und Apps generiert und eingerichtet, können es aber nicht mehr anzeigen oder kopieren. Wenn Sie es benötigen, <strong>müssen Sie ein neues generieren und in der Konfiguration Ihres E-Mail-Programms ersetzen.</strong></p> Das Generieren eines neuen Passworts <strong>macht das aktuelle ungültig</strong>.",
              "action": "Neues Passwort generieren"
            },
            "messages": {
              "expired": {
                "title": "Passwort abgelaufen",
                "description": "Generieren Sie ein neues Passwort, um E-Mail-Programme und Apps weiter zu nutzen."
              }
            },
            "side-content": {
              "title": "Benötigen Sie weitere Informationen zum Passwort für E-Mail-Programme?",
              "description": "Wenn Sie die Bestätigung in zwei Schritten aktiviert haben, müssen Sie ein eigenes Passwort generieren, um Ihr Postfach mit E-Mail-Programmen oder anderen Apps zu nutzen.",
              "link": "Mehr dazu in der Anleitung"
            },
            "dialog": {
              "generated": {
                "title": "Passwort für E-Mail-Programme generieren",
                "description": "Geben Sie dieses Passwort in den Einstellungen Ihres <strong>E-Mail-Programms<strong> oder Ihrer App ein.",
                "password-label": "Passwort",
                "copy": "Kopieren",
                "expiration": "Ablauf",
                "warning": "Nach dem Schließen dieses Fensters <strong>können Sie das Passwort nicht mehr abrufen.</strong></br> Wenn Sie es verlieren, müssen Sie ein neues generieren und die Konfiguration Ihrer E-Mail-Programme und Apps aktualisieren.",
                "close": "Schließen"
              },
              "regenerate-confirm": {
                "title": "Möchten Sie wirklich ein neues Passwort generieren?",
                "description": "<p>Das Generieren eines neuen Passworts <strong>macht das aktuelle ungültig</strong>.</p> Sie müssen die Konfiguration Ihrer E-Mail-Programme und Apps mit dem neuen Passwort aktualisieren, um sie weiter zu nutzen.",
                "confirm": "Bestätigen",
                "cancel": "Abbrechen"
              },
              "delete-confirm": {
                "title": "Möchten Sie das App-Passwort deaktivieren?",
                "description": "Nach dem Deaktivieren <strong>können Sie Ihr Postfach nicht mehr</strong> mit E-Mail-Programmen und Apps nutzen, bis Sie ein neues eigenes Passwort generieren und einrichten. Über die Webmail haben Sie weiterhin Zugriff.",
                "confirm": "Deaktivieren",
                "cancel": "Abbrechen"
              }
            },
            "toast": {
              "copy-success": "Passwort kopiert",
              "copy-error": "Passwort konnte nicht kopiert werden",
              "renew-success": "Passwortablauf um 3 Monate verschoben",
              "delete-success": "Passwort deaktiviert",
              "mutation-error": "Ein Fehler ist aufgetreten. Bitte später erneut versuchen."
            }
          },
          "junk-mail": {
            "title": "Junk-Mail",
            "pec-subtitle": "Aktivieren Sie die Antispam-Funktion und legen Sie fest, <b>wie unerwünschte Nachrichten behandelt werden</b>.<br>PEC-Nachrichten werden nie abgelehnt oder blockiert und immer im Posteingang angezeigt.",
            "pec-antispam-subtitle": "Hier legen Sie fest, wie unerwünschte E-Mails behandelt werden, mit unterschiedlichen Optionen für PEC-Nachrichten und nicht zertifizierte E-Mails.",
            "tabs": {
              "pec-messages": "PEC-Nachrichten",
              "non-pec-messages": "Nicht-PEC-Nachrichten"
            },
            "antispam": {
              "title": "Antispam",
              "pec-subtitle": "Diese Funktion gilt nur für Nicht-PEC-Nachrichten",
              "buy-message": "Aktivieren Sie Antivirus und Antispam und <b>schützen Sie Ihre Postfächer</b> vor infizierten oder unerwünschten Nachrichten.",
              "buy": "Antivirus und Antispam kaufen",
              "not-available": {
                "title": "Antispam nicht verfügbar",
                "message": "Unerwünschte E-Mails können Sie nur verwalten, wenn Ihr Postfach <b>auch für den Empfang von Nicht-PEC-Nachrichten</b> aktiviert ist.",
                "activate": "Empfang aktivieren"
              },
              "form": {
                "enabled": "Antispam aktivieren",
                "delivery-to-spam": "Nachrichten im Spam-Ordner empfangen",
                "delivery-to-spam-message": {
                  "pel": "Die Nachrichten werden in den Spam-Ordner zugestellt. <br/>Sie werden nach 30 Tagen automatisch gelöscht.",
                  "pec": "Um Nachrichten leichter zu erkennen, können Sie dem Betreff ein eigenes Kennzeichen hinzufügen."
                },
                "report": "Antispam-Bericht erhalten",
                "report-frequency": {
                  "1": "Täglich",
                  "2": "Wöchentlich",
                  "3": "Monatlich",
                  "label": "Wann"
                },
                "subject": "Z. B. #SPAM#",
                "subject-label": "Text, der dem E-Mail-Betreff hinzugefügt wird",
                "add-subject-prefix": "Nachrichten mit angepasstem Betreff im Posteingang empfangen",
                "add-subject-prefix-message": "Um Nachrichten leichter zu erkennen, können Sie dem Betreff ein eigenes Kennzeichen hinzufügen.",
                "add-subject-prefix-message-mailbox": "Als Spam markierte Nachrichten werden in den Posteingang zugestellt. Sie können dem Betreff Text hinzufügen, indem Sie ihn in das folgende Feld eingeben:",
                "reject": "Nachrichten automatisch ablehnen",
                "reject-message": {
                  "pel": "Nachrichten werden nicht zugestellt, sondern automatisch abgelehnt.",
                  "pec": "Als Spam erkannte Nachrichten werden nicht zugestellt."
                }
              }
            },
            "pec-antispam": {
              "title": "Antispam für PEC-Nachrichten",
              "pec-subtitle": "Junk-E-Mails im ausgewählten Ordner anzeigen",
              "folder-title": "Spam-Ordner",
              "folder-subtitle": "Alle als Junk markierten E-Mails werden in den ausgewählten Ordner verschoben",
              "archive-title": "Speicherung von Junk-E-Mails verwalten",
              "archive-message": "Sie können Ihre Präferenzen in den Speichereinstellungen anpassen.",
              "archive-button": "Speicher verwalten",
              "preservation-title": "Digitale Archivierung von Junk-E-Mails verwalten",
              "preservation-message": "Sie können Ihre Präferenzen in den Einstellungen der digitalen Archivierung anpassen.",
              "preservation-button": "Digitale Archivierung verwalten",
              "archive-preservation-title": "Speicherung und digitale Archivierung von Junk-E-Mails verwalten",
              "archive-preservation-message": "Sie können Ihre Präferenzen in den Einstellungen anpassen.",
              "archive-preservation-button-archive": "Archiv",
              "archive-preservation-button-preservation": "Digitale Archivierung"
            },
            "blocked-secure-addresses": {
              "title": {
                "pel": "Blockierte oder sichere Adressen",
                "pec": "Spam- oder sichere Adressen"
              },
              "subtitle": {
                "pel": "Blockieren Sie E-Mail-Adressen, von denen Sie keine E-Mails erhalten möchten, oder fügen Sie sichere Adressen hinzu, damit deren Nachrichten Sie immer erreichen.",
                "pec": "Geben Sie die E-Mail-Adressen an, <strong>auf die der Antispam-Filter angewendet werden soll</strong>, oder <strong>markieren Sie Adressen als sicher</strong>, von denen Sie immer Nachrichten erhalten möchten. Diese Funktion gilt nur für Nicht-PEC-Nachrichten."
              },
              "add": {
                "pel": "Hinzufügen",
                "pec": "Adresse hinzufügen",
                "postmaster": "Adresse hinzufügen"
              },
              "import": "Importieren",
              "postmaster": {
                "import": "Adressen aus Datei importieren",
                "addresses": {
                  "columns": {
                    "address": "E-Mail",
                    "type": "Status",
                    "action": ""
                  }
                }
              },
              "addresses": {
                "columns": {
                  "address": "Adresse",
                  "type": "Status",
                  "action": ""
                },
                "select-actions": "Aktion auswählen",
                "filter-description": "Elemente anzeigen mit:",
                "type": {
                  "blacklist_from": "Blockierter Absender",
                  "blacklist_from_pec": "Spam-Absender",
                  "whitelist_from": "Sicherer Absender",
                  "whitelist_to": "Sicherer Empfänger",
                  "all": "Alle"
                },
                "empty": "Keine Adressen gefunden",
                "delete-all": "Auswahl löschen",
                "dialog": {
                  "header": "Adresse hinzufügen",
                  "header-mailboxes": "E-Mail-Adresse oder Domain hinzufügen",
                  "save": "Speichern",
                  "cancel": "Abbrechen",
                  "placeholder": "Z. B. mario@example.com oder *@example.com",
                  "email-or-domain": "E-Mail-Adresse oder Domain",
                  "read-the-guide": "Anleitung ansehen",
                  "guide-link": "https://guide.hosting.aruba.it/nuova-webmail/altre-funzioni/bloccare-mittenti.aspx",
                  "email-not-valid": "Geben Sie eine E-Mail-Adresse oder Domain ein",
                  "mark-as": "Markieren als",
                  "type-message": {
                    "blacklist_from": {
                      "header": "Als blockiert markieren.",
                      "message": "Nachrichten von blockierten Absendern <b>werden nicht zugestellt, sondern automatisch abgelehnt.</b>"
                    },
                    "blacklist_from_pec": {
                      "header": "Als Spam markieren.",
                      "message": "Nachrichten von als Spam markierten Absendern <b>werden gemäß den Antispam-Regeln behandelt.</b>"
                    },
                    "whitelist_from": {
                      "header": "Als sicher markieren.",
                      "message": "Nachrichten von sicheren Absendern <b>durchlaufen keine Antispam-Filter.</b>"
                    },
                    "whitelist_to": {
                      "header": "Als sicher markieren.",
                      "message": "Nachrichten von sicheren Absendern <b>durchlaufen keine Antispam-Filter.</b>"
                    }
                  },
                  "blacklist_from": "blockierte Absender",
                  "blacklist_from_pec": "Spam-Absender",
                  "whitelist_from": "sichere Absender",
                  "whitelist_to": "sichere Empfänger",
                  "delete-address": {
                    "header": "Möchten Sie die Adresse löschen?",
                    "postmaster-header": "Auswahl löschen",
                    "question": "Wenn Sie bestätigen, wird die E-Mail-Adresse endgültig aus der <strong>Liste {{type}}</strong> entfernt.",
                    "postmaster-question": "Möchten Sie die ausgewählten Elemente wirklich endgültig löschen?",
                    "delete": "Löschen",
                    "cancel": "Abbrechen"
                  },
                  "delete-addresses": {
                    "header": "Möchten Sie {{numEmail}} Adressen löschen?",
                    "postmaster-header": "Auswahl löschen",
                    "question": "Wenn Sie bestätigen, werden die E-Mail-Adressen endgültig aus der <strong>Liste {{type}}</strong> entfernt.",
                    "postmaster-question": "Möchten Sie die ausgewählten Elemente wirklich endgültig löschen?",
                    "delete": "Löschen",
                    "cancel": "Abbrechen"
                  },
                  "import-addresses": {
                    "header": "E-Mail-Adressen aus Datei importieren",
                    "label": "Datei hochladen",
                    "label_select": "Die Datei muss im .csv-Format sein",
                    "max_size_message": "Maximale Dateigröße",
                    "max_number_files_message": "Maximale Anzahl Dateien",
                    "allowed_types_message": "Zulässige Formate",
                    "size_error_label": "Die Datei überschreitet die maximal zulässige Größe.",
                    "type_error_label": "Falsches Format.",
                    "number_files_error_label": "Sie haben die maximale Anzahl an Dateien überschritten.",
                    "generic_error_label": "Beim Laden ist ein Fehler aufgetreten.",
                    "address-types": "Zur Liste hinzufügen als:",
                    "upload-button": "Datei hochladen",
                    "actions": {
                      "cancel": "Abbrechen",
                      "import": "Importieren"
                    },
                    "toast": {
                      "success": "Adressliste importiert.",
                      "files_error_label": "Geben Sie eine .csv-Datei an"
                    }
                  }
                }
              }
            },
            "toast": {
              "save-success": "Änderungen gespeichert.",
              "bl-limit-exceeded": "E-Mail-Adresse kann nicht zur Blacklist hinzugefügt werden. Sie haben die maximale Anzahl unsicherer Adressen erreicht.",
              "bl-limit-exceeded-on-import": "Liste konnte nicht importiert werden. Mit den Adressen aus der Datei würde die maximale Anzahl an Absendern für die Blacklist überschritten.",
              "wl-limit-exceeded": "E-Mail-Adresse kann nicht zur Whitelist hinzugefügt werden. Sie haben die maximale Anzahl sicherer Absender und Empfänger erreicht.",
              "wl-limit-exceeded-on-import": "Liste konnte nicht importiert werden. Mit den Adressen aus der Datei würde die maximale Anzahl sicherer Absender und Empfänger überschritten."
            }
          },
          "access-history": {
            "title": "Anmeldeverlauf",
            "sub-title": "Prüfen und verwalten Sie die Anmeldungen der <strong>letzten 6 Monate.</strong>",
            "not-available": "Nicht verfügbar",
            "guide-link": "https://guide.hosting.aruba.it/email/sicurezza-email-phishing/storico-accessi-alla-casella-di-posta.aspx",
            "sideContent": {
              "title": "Was soll ich tun, wenn ich eine verdächtige Anmeldung sehe?",
              "sub-title": "Als <strong>nicht erkannte Anmeldung</strong> melden",
              "change-pwd": "Passwort ändern",
              "more": "Mehr dazu in der Anleitung"
            },
            "toast": {
              "save-success": "Änderungen gespeichert"
            },
            "filters": {
              "all-dates": "Beliebiges Datum",
              "today": "Heute",
              "last-week": "Letzte Woche",
              "last-month": "Letzter Monat",
              "last-three-months": "Letzte 3 Monate",
              "last-six-months": "Letzte 6 Monate",
              "all-access": "Alle Anmeldungen",
              "suspect-access": "Verdächtige Anmeldungen"
            },
            "table": {
              "header": "Filtern nach:",
              "fields": {
                "date-username": "Datum und Benutzer",
                "position": "Speicherort",
                "device": "Gerät",
                "platform": "Plattform",
                "access": "Anmeldung",
                "tags": {
                  "new-device": "Neues Gerät",
                  "accepted": "Bekannt",
                  "rejected": "Unbekannt",
                  "suspicious": "Verdächtig"
                }
              },
              "alert-message": {
                "unrecognized": "<strong>Einige Anmeldungen wurden nicht erkannt.</strong> Schützen Sie die Sicherheit Ihres Postfachs.",
                "change-password": "Passwort ändern"
              }
            },
            "export": {
              "buttons": {
                "export": "Exportieren",
                "cancel": "Abbrechen",
                "confirm": "Exportieren"
              },
              "dialog": {
                "title": "Anmeldeverlauf exportieren",
                "subtitle": "Der Export des Anmeldeverlaufs kann bis zu {{maxExportItemsCount}} Einträge umfassen. Wählen Sie zum Fortfahren einen Zeitraum.",
                "date-label": "Zu exportierenden Zeitraum auswählen"
              }
            },
            "dialog": {
              "not-available": "Nicht verfügbar",
              "title": "Anmeldung prüfen",
              "subtitle": "Anmeldedaten",
              "date": "Datum",
              "user": "Benutzer",
              "device": "Gerät",
              "platform": "Plattform",
              "position": "Speicherort",
              "access": "Anmeldung",
              "report-date": "Am {{reportDate}}",
              "position-info": "Der Standort wird anhand der IP-Adresse {{ipAddress}} ermittelt, ist aber möglicherweise ungenau",
              "question": "Erkennen Sie diese Anmeldung?",
              "enhance-security": "Erhöhen Sie die Sicherheit Ihres Postfachs",
              "security-risk": "Die Sicherheit Ihres Kontos könnte gefährdet sein",
              "unknown-position": "Anmeldung von einem unbekannten Standort",
              "guide": "Lesen Sie unsere Anleitung, um sicherzustellen, dass Sie alles zum Schutz Ihres Postfachs getan haben.",
              "buttons": {
                "yes": "Ja, das war ich",
                "no": "Nein, das war ich nicht",
                "go-to-guide": "Anleitung ansehen",
                "verify-email": "Kontakt-E-Mail bestätigen",
                "change-psw": "Passwort jetzt ändern"
              },
              "alert": {
                "psw-changed": "Das Postfach-Passwort <strong>wurde nach der folgenden Anmeldung geändert</strong>.",
                "accepted": "<strong>Sie haben diese Anmeldung erkannt.</strong>",
                "rejected": "<strong>Sie haben diese Anmeldung nicht erkannt.</strong>",
                "suspicious": "Diese Anmeldung gilt gemäß unseren <a href=\"https://guide.hosting.aruba.it/email/sicurezza-email-phishing/criteri-di-sicurezza-accessi-casella.aspx\" target=\"_blank\" class=\"access-history-link\">Sicherheitskriterien</a> als <strong>verdächtig</strong>."
              },
              "acknowledge": {
                "title": "Haben Sie diese Anmeldung durchgeführt?",
                "message": "Die Anmeldung wird als erkannt markiert.",
                "buttons": {
                  "confirm": "Anmeldung bestätigen",
                  "cancel": "Abbrechen"
                }
              },
              "disavow": {
                "title": "Bestätigen Sie, dass Sie diese Anmeldung nicht durchgeführt haben?",
                "message": "Die Anmeldung wird als nicht erkannt markiert und gemeldet.",
                "buttons": {
                  "confirm": "Anmeldung melden",
                  "cancel": "Abbrechen"
                }
              },
              "type": "Anmeldeart",
              "support": "Aruba-Kundensupport"
            }
          },
          "security-info": {
            "title": "Sicherheitsbenachrichtigungen",
            "sub-title": "Um automatische Hinweise und Berichte über Anmeldungen bei Ihrem Postfach zu erhalten",
            "access-report": {
              "mail-report": "Berichte per E-Mail erhalten",
              "disable-report": "Keine Berichte per E-Mail erhalten",
              "recurrence": {
                "twoWeeks": "Alle zwei Wochen",
                "oneMonth": "Monatlich",
                "threeMonths": "Alle drei Monate"
              }
            },
            "access-info": {
              "suspicius-access": "Hinweise zu verdächtigen Anmeldungen",
              "access-email": "Hinweise per E-Mail erhalten",
              "access-no-email": "Keine Hinweise per E-Mail erhalten",
              "new-device-access": "Hinweise zu Anmeldungen von neuen Geräten",
              "frequency": {
                "oneADay": "Höchstens 1 Hinweis pro Tag",
                "oneAWeek": "Höchstens 1 Hinweis pro Woche",
                "oneAMonth": "Höchstens 1 Hinweis pro Monat"
              }
            }
          }
        },
        "notifications-and-reports": {
          "title": "Hinweise und Berichte",
          "email": {
            "title": "Berichte per E-Mail",
            "description": {
              "p1": "Sie erhalten zu einer festgelegten Zeit an eine bestimmte E-Mail-Adresse eine Benachrichtigung mit der Anzahl der in den letzten 24 Stunden empfangenen, noch ungelesenen PEC-Nachrichten.",
              "p2": "Sie können ein Zeitfenster für den Empfang der E-Mail-Benachrichtigung festlegen.",
              "p3": "Die Benachrichtigung betrifft ungelesene PEC-Nachrichten und Bestätigungen (nicht angenommen, zugestellt, nicht zugestellt). Nicht zertifizierte Nachrichten sind nicht enthalten."
            },
            "table": {
              "fields": {
                "email-address": "E-Mail-Adresse"
              },
              "empty": {
                "message": "Sie haben noch keine E-Mail-Adresse angegeben.",
                "action": "E-Mail-Adresse zuweisen"
              }
            },
            "dialog": {
              "add-email": {
                "header": "Berichte per E-Mail",
                "fields": {
                  "email": "E-Mail-Benachrichtigung an:",
                  "email-placeholder": "E-Mail-Adresse"
                }
              },
              "delete-email": {
                "header": "E-Mail-Adresse löschen",
                "message": "Möchten Sie die als Empfänger angegebene E-Mail-Adresse wirklich löschen?"
              }
            }
          },
          "sms": {
            "title": "Berichte per SMS",
            "description": {
              "p1": "Sie erhalten zu einer festgelegten Zeit an eine bestimmte Telefonnummer eine SMS mit der Anzahl der in den letzten 24 Stunden empfangenen, noch ungelesenen PEC-Nachrichten.",
              "p2": "Sie können ein Zeitfenster für den Empfang der SMS-Benachrichtigung festlegen.",
              "p3": "Die Benachrichtigung betrifft ungelesene PEC-Nachrichten und Bestätigungen (nicht angenommen, zugestellt, nicht zugestellt). Nicht zertifizierte Nachrichten sind nicht enthalten."
            },
            "table": {
              "fields": {
                "phone-number": "Mobiltelefonnummer",
                "time-slot": "Zeitfenster"
              },
              "empty": {
                "message": "Sie haben keine Mobiltelefonnummer angegeben.",
                "action": "Mobiltelefonnummer hinzufügen"
              }
            },
            "dialog": {
              "add-phone-number": {
                "header": "Berichte per SMS",
                "fields": {
                  "phone": "SMS-Benachrichtigung senden an:"
                }
              },
              "delete-phone-number": {
                "header": "Mobiltelefonnummer löschen",
                "message": "Möchten Sie die als Empfänger angegebene Mobiltelefonnummer wirklich löschen?"
              }
            }
          },
          "reception-alerts": {
            "title": "Empfangshinweise",
            "description": {
              "p1": "Erhalten Sie bei jeder empfangenen PEC-Nachricht einen automatischen Hinweis."
            },
            "table": {
              "fields": {
                "email-address": "E-Mail-Adresse",
                "condition": "Bedingung"
              },
              "empty-table": {
                "message": "Keine Hinweise gefunden",
                "action": "Hinweis erstellen"
              },
              "condition": {
                "with-senders": "Jedes Mal, wenn ich eine PEC-Nachricht erhalte von <br/>{{senders}}",
                "without-senders": "Jedes Mal, wenn ich eine PEC-Nachricht erhalte"
              }
            },
            "dialog": {
              "delete": {
                "header": "Möchten Sie den Empfangshinweis löschen?",
                "message": "Wenn Sie fortfahren, werden Sie <b>nicht mehr</b> bei jeder empfangenen PEC-Nachricht per E-Mail benachrichtigt."
              },
              "new-edit": {
                "header": "Empfangshinweis",
                "message": "Geben Sie die Adressen ein, an die bei jeder empfangenen PEC-Nachricht ein Hinweis gesendet werden soll.",
                "form": {
                  "recipient": {
                    "title": "Absenderhinweis",
                    "email": "E-Mail-Adresse",
                    "email-optional": {
                      "label": "E-Mail-Adresse",
                      "sub-label": "(optional)"
                    }
                  },
                  "conditions": {
                    "title": "Hinweisbedingungen",
                    "all": "Jedes Mal, wenn ich eine PEC-Nachricht erhalte",
                    "defined": "Jedes Mal, wenn ich eine PEC-Nachricht von bestimmten Adressen erhalte",
                    "email": "E-Mail-Adresse",
                    "email-optional": {
                      "label": "E-Mail-Adresse",
                      "sub-label": "(optional)"
                    }
                  },
                  "errorValidation": {
                    "email": "Gültige Adresse eingeben"
                  }
                },
                "actions": {
                  "save": "Speichern",
                  "cancel": "Abbrechen"
                }
              }
            }
          },
          "common": {
            "time-slot": "Zeitfenster",
            "select-time-slot": "Zeitfenster auswählen",
            "toast": {
              "success": "Änderungen gespeichert.",
              "error": "Fehler beim Speichern der Änderungen"
            },
            "actions": {
              "add": "Speichern",
              "cancel": "Abbrechen",
              "delete": "Löschen",
              "confirm": "Bestätigen"
            },
            "empty-table": {
              "message": "Keine Berichte gefunden",
              "action": "Bericht erstellen"
            }
          },
          "banner": {
            "message": "Diese Funktion ist nur für PEC-Pro- und Premium-Postfächer verfügbar. Verpassen Sie nicht diesen und weitere Vorteile!",
            "action": "Upgrade auf PEC Pro oder Premium"
          }
        },
        "archive": {
          "title": "Archiv",
          "subtitle": "<b>Bewahren Sie automatisch eine Kopie</b> gesendeter und empfangener PEC-Nachrichten in einem eigenen Speicherbereich auf.",
          "banner": {
            "goto-pro-premium": {
              "message": {
                "desktop": "Diese Funktion <b>ist nur</b> für PEC-Pro- und Premium-Postfächer verfügbar. Erfahren Sie mehr über die Vorteile der anderen Versionen.",
                "mobile": "Vergrößern Sie Nachrichten- und Archivspeicher <b>durch ein Upgrade auf PEC Pro oder Premium.</b>"
              },
              "action": "Upgrade auf PEC Pro oder Premium"
            },
            "goto-premium": {
              "message": {
                "desktop": "Erhalten Sie mehr Nachrichten- und Archivspeicher <b>durch ein Upgrade auf PEC Premium</b>.",
                "mobile": "Erhalten Sie mehr Nachrichten- und Archivspeicher <b>durch ein Upgrade auf PEC Premium</b>."
              },
              "action": "Upgrade auf PEC Premium"
            }
          },
          "partner": {
            "info": "Wenden Sie sich an Ihren Dienstanbieter, um diese Funktion zu nutzen.",
            "service_not_available": "Einige Funktionen sind derzeit nicht verfügbar. Bitte später erneut versuchen."
          },
          "archive-config-title": "Archiveinstellungen",
          "form": {
            "enabled": "Archiv aktivieren",
            "email-type-list": {
              "allplus": "Alle vom PEC-Postfach gesendeten und empfangenen Nachrichten archivieren",
              "manual": "Wählen Sie, welche Nachrichten archiviert werden",
              "accettazione": "Alle Annahmebestätigungen archivieren",
              "consegna": "Alle Zustellbestätigungen archivieren",
              "trasporto": "Alle empfangenen zertifizierten E-Mails archivieren",
              "mailout": "Alle gesendeten zertifizierten E-Mails archivieren",
              "nonpec": "Alle empfangenen nicht zertifizierten E-Mails archivieren",
              "spam": "Bestimmte als Spam markierte PEC-E-Mails nicht speichern"
            },
            "readonly": "Manuelles Kopieren, Verschieben und Löschen von Nachrichten aktivieren",
            "enable-imap": "Speicherzugriff über IMAP aktivieren",
            "imap-configuration": {
              "title": "Konfigurationseinstellungen",
              "imap": "Posteingang (IMAP)",
              "username": "Benutzername",
              "password": "Passwort",
              "use-pec-password": "PEC-Postfach-Passwort verwenden",
              "generate-password-pre": "Passwort für E-Mail-Programme generieren (",
              "generate-password-link": "PEC-Konto verwalten",
              "generate-password-post": ")",
              "apikey-password-pre": "Passwort für E-Mail-Programme verwenden (",
              "apikey-password-link": "PEC-Konto verwalten",
              "apikey-password-post": ")"
            }
          },
          "space": {
            "title": "Archivspeicher",
            "tooltip": "Speicherplatz, den automatische Kopien gesendeter und empfangener Nachrichten seit Aktivierung des Sicherheitsarchivs belegen.",
            "usage": "{{used}} von {{max}} belegt",
            "increase": "Speicher erweitern",
            "tag": {
              "warning": "Fast voll",
              "alert": "Fast voll",
              "full": "Voll",
              "not-active": "Deaktiviert",
              "active": "Aktiviert"
            },
            "alert-messages-space": {
              "title": {
                "pel": {
                  "aruba": {
                    "warning": "Der Archivspeicher Ihres Postfachs ist fast voll.",
                    "alert": "Der Archivspeicher Ihres Postfachs ist fast voll.",
                    "full": "Der Archivspeicher Ihres Postfachs ist voll."
                  }
                },
                "pec": {
                  "aruba": {
                    "warning": "Archivspeicher fast voll",
                    "alert": "Archivspeicher fast voll",
                    "full": "Archivspeicher voll"
                  },
                  "partner": {
                    "warning": "Archivspeicher fast voll",
                    "alert": "Archivspeicher fast voll",
                    "full": "Archivspeicher voll"
                  },
                  "simple": {
                    "warning": "Archivspeicher fast voll",
                    "alert": "Archivspeicher fast voll",
                    "full": "Archivspeicher voll"
                  }
                }
              },
              "message": {
                "pel": {
                  "aruba": {
                    "warning": "Belegter Archivspeicher: {{progress}} % <br>Sie benötigen mehr Speicherplatz, um weiterhin automatisch Kopien Ihrer Nachrichten zu speichern: Fügen Sie GigaMail oder Unbegrenzten E-Mail-Speicher hinzu.",
                    "alert": "Belegter Archivspeicher: {{progress}} % <br>Sie benötigen mehr Speicherplatz, um weiterhin automatisch Kopien Ihrer Nachrichten zu speichern: Fügen Sie GigaMail oder Unbegrenzten E-Mail-Speicher hinzu.",
                    "full": "Belegter Archivspeicher: {{progress}} % <br>Fügen Sie GigaMail oder Unbegrenzten E-Mail-Speicher hinzu, um weiterhin automatisch Kopien Ihrer Nachrichten zu speichern."
                  }
                },
                "pec": {
                  "aruba": {
                    "warning": "Belegter Speicher {{progress}} %.<br><b>Erweitern Sie Ihren Speicher</b> durch zusätzliche GB für Ihr Archiv oder führen Sie, wenn Sie ein PEC-Pro-Postfach haben, ein <b>Upgrade auf Premium</b> durch, damit die Archivierung Ihrer wichtigen Nachrichten nicht stoppt.",
                    "alert": "Belegter Speicher {{progress}} %.<br><b>Erweitern Sie Ihren Speicher</b> durch zusätzliche GB für Ihr Archiv oder führen Sie, wenn Sie ein PEC-Pro-Postfach haben, ein <b>Upgrade auf Premium</b> durch, damit die Archivierung Ihrer wichtigen Nachrichten nicht stoppt.",
                    "full": "Belegter Speicher {{progress}} %.<br><b>Erweitern Sie Ihren Speicher</b> durch zusätzliche GB für Ihr Archiv oder führen Sie, wenn Sie ein PEC-Pro-Postfach haben, ein <b>Upgrade auf Premium</b> durch, damit die Archivierung Ihrer wichtigen Nachrichten nicht stoppt."
                  },
                  "partner": {
                    "warning": "Belegter Speicher {{progress}} %.<br><b>Beantragen Sie eine Erweiterung Ihres Archivspeichers</b> oder führen Sie, wenn Sie ein PEC-Pro-Postfach haben,<b> ein Upgrade auf Premium</b> durch, damit die Archivierung Ihrer wichtigen Nachrichten nicht stoppt.<br>Wenden Sie sich an Ihren Dienstanbieter oder melden Sie sich, falls berechtigt, bei <a tabindex=\"-1\" href=\"https://areaclienti.arubapec.it\" target=\"_blank\">customerarea.arubapec.it</a> an und führen Sie das Upgrade online durch.",
                    "alert": "Belegter Speicher {{progress}} %.<br><b>Beantragen Sie eine Erweiterung Ihres Archivspeichers</b> oder führen Sie, wenn Sie ein PEC-Pro-Postfach haben,<b> ein Upgrade auf Premium</b> durch, damit die Archivierung Ihrer wichtigen Nachrichten nicht stoppt.<br>Wenden Sie sich an Ihren Dienstanbieter oder melden Sie sich, falls berechtigt, bei <a tabindex=\"-1\" href=\"https://areaclienti.arubapec.it\" target=\"_blank\">customerarea.arubapec.it</a> an und führen Sie das Upgrade online durch.",
                    "full": "Belegter Speicher {{progress}} %.<br><b>Beantragen Sie eine Erweiterung Ihres Archivspeichers</b> oder führen Sie, wenn Sie ein PEC-Pro-Postfach haben,<b> ein Upgrade auf Premium</b> durch, damit die Archivierung Ihrer wichtigen Nachrichten nicht stoppt.<br>Wenden Sie sich an Ihren Dienstanbieter oder melden Sie sich, falls berechtigt, bei <a tabindex=\"-1\" href=\"https://areaclienti.arubapec.it\" target=\"_blank\">customerarea.arubapec.it</a> an und führen Sie das Upgrade online durch."
                  },
                  "simple": {
                    "warning": "Belegter Speicher {{progress}} %.<br><b>Erweitern Sie Ihren Speicher</b> durch zusätzliche GB für Ihr Archiv oder führen Sie, wenn Sie ein PEC-Pro-Postfach haben, ein <b>Upgrade auf Premium</b> durch, damit die Archivierung Ihrer wichtigen Nachrichten nicht stoppt.",
                    "alert": "Belegter Speicher {{progress}} %.<br><b>Erweitern Sie Ihren Speicher</b> durch zusätzliche GB für Ihr Archiv oder führen Sie, wenn Sie ein PEC-Pro-Postfach haben, ein <b>Upgrade auf Premium</b> durch, damit die Archivierung Ihrer wichtigen Nachrichten nicht stoppt.",
                    "full": "Belegter Speicher {{progress}} %.<br><b>Erweitern Sie Ihren Speicher</b> durch zusätzliche GB für Ihr Archiv oder führen Sie, wenn Sie ein PEC-Pro-Postfach haben, ein <b>Upgrade auf Premium</b> durch, damit die Archivierung Ihrer wichtigen Nachrichten nicht stoppt."
                  }
                }
              }
            }
          },
          "save": {
            "toast": {
              "success": "Änderungen gespeichert",
              "error": "Fehler beim Speichern der Änderungen"
            }
          }
        },
        "pec-read-invoices": {
          "title": "Rechnungen lesen",
          "sub-title": "E-Rechnungen von <strong>{{account}}</strong> in Nachrichten empfangen und lesen",
          "labels": {
            "active-invoices": "Rechnungen lesen aktivieren",
            "disable-invoices": "Rechnungen lesen deaktivieren"
          },
          "dialog": {
            "title": "Möchten Sie die Änderungen bestätigen?",
            "body": "Starten Sie die Webmail neu, um die Änderung zu übernehmen.",
            "confirm": "Bestätigen",
            "cancel": "Abbrechen"
          },
          "toast": {
            "success": "Änderungen gespeichert"
          }
        },
        "signatures": {
          "title": "Signaturen",
          "description-pel": "Erstellen Sie Ihre <strong>E-Mail-Signaturen</strong> für Nachrichten, die Sie über die Webmail senden.",
          "description-pec": "Erstellen Sie Ihre <strong>E-Mail-Signaturen</strong> für Nachrichten, die Sie über die PEC-Webmail senden.",
          "buttons": {
            "new-signature": "Signatur erstellen"
          },
          "new-signature": {
            "title": "Neue Signatur erstellen",
            "modify-title": "Signatur bearbeiten",
            "signature-name": "Signaturname",
            "signature-body": "Text",
            "limitations": "Die maximale Größe beträgt {{maxTextSize}} KB für Text und {{maxImageSize}} KB für Bilder",
            "save-success": "Die Signatur wurde erstellt.",
            "edit-success": "Die Signatur wurde gespeichert.",
            "message-error-image-toast": "Die Gesamtgröße aller Bilder darf {{maxImageSize}} KB nicht überschreiten.",
            "message-error-text-toast": "Die Gesamtgröße aller Bilder darf {{maxTextSize}} KB nicht überschreiten.",
            "tab-signature-html": "HTML",
            "tab-signature-text": "Vorschau",
            "buttons": {
              "save": "Speichern",
              "cancel": "Abbrechen"
            },
            "message": {
              "name-not-valid": "Name eingeben"
            }
          },
          "delete-signature": {
            "title": "Möchten Sie die Signatur löschen?",
            "question-pel": "Wenn Sie fortfahren, <strong>können Sie die Signatur nicht mehr</strong> in über die Webmail gesendeten Nachrichten verwenden.",
            "question-pec": "Wenn Sie fortfahren, <strong>können Sie die Signatur nicht mehr</strong> in über die Webmail und die App Aruba PEC gesendeten Nachrichten verwenden.",
            "delete": "Löschen",
            "cancel": "Abbrechen",
            "delete-success": "Die Signatur wurde gelöscht."
          },
          "default-signature": "Keine Signatur",
          "table": {
            "header": {
              "default": "Standard",
              "signature": "Signatur"
            }
          }
        },
        "auto-logout": {
          "title": "Automatische Abmeldung",
          "subtitle": "<strong>Anmeldedauer festlegen.</strong> So werden Sie automatisch von der Webmail abgemeldet, wenn Sie eine bestimmte Zeit lang inaktiv waren.",
          "time-field": {
            "label": "Abmelden nach",
            "placeholder": "Minuten Inaktivität",
            "exceeded-time-limit": "Sie haben das Maximum von 720 Minuten überschritten"
          }
        },
        "auto-empty-trash": {
          "title": "Papierkorb",
          "subtitle": "<b>Reduzieren Sie den belegten Speicher</b> gelöschter Dateien, indem Sie die Funktion „Papierkorb leeren“ aktivieren.<br>Nachrichten werden bei jedem Verlassen der Webmail gelöscht und können nicht wiederhergestellt werden.",
          "toggle-label": "Papierkorb beim Abmelden von der Webmail leeren",
          "toast": {
            "success": "Änderungen gespeichert"
          }
        },
        "auto-reply": {
          "title": "Automatische Antwort",
          "subtitle-hint": "Legen Sie eine Nachricht fest, die <strong>automatisch an alle gesendet wird, die Ihnen schreiben,</strong> wenn Sie keine E-Mails beantworten können.",
          "create-auto-reply": "Automatische Antwort",
          "always-reply": "Immer antworten",
          "temporal-reply": "Antwort für einen bestimmten Zeitraum senden",
          "same-sender-limit": "An denselben Absender",
          "send-max-limit": "höchstens senden",
          "every": "alle",
          "message": "Nachricht",
          "enable-custom-reply-external": "Eine andere Einstellung für <strong>externe Absender</strong> außerhalb von {{externalDomain}} aktivieren",
          "period": "Zeitraum",
          "condition": "Bedingung",
          "no-expiration": "Kein Ablauf",
          "external-domain-no-reply": "Externen Absendern nicht antworten",
          "external-domain": "Externen Absendern eine andere Nachricht senden",
          "max-reply-sender": "Höchstens {{numOfResponse}} Antworten an denselben Absender alle {{temporalGap}} Stunden",
          "save": "Speichern",
          "cancel": "Abbrechen",
          "date-from": "Startdatum",
          "date-to": "Enddatum",
          "limit-hours": "Stunden",
          "limit-answers": "Antworten",
          "external-senders-message": "Nachricht für externe Absender",
          "success-edit-settings": "Änderungen gespeichert",
          "error-edit-settings": "Änderungen konnten nicht gespeichert werden",
          "delete-dialog": {
            "header": "Möchten Sie die automatische Antwort löschen?",
            "message": "Wenn Sie fortfahren, <strong>erhalten</strong> Absender Ihre automatische Antwort <strong>nicht mehr</strong>."
          },
          "error": {
            "message-not-valid": "Nachricht eingeben"
          }
        },
        "look": {
          "title": "Darstellung",
          "sub-title": "<b>Passen Sie die Darstellung</b> Ihrer Webmail an – vom Design bis zum Fenster zum Verfassen von Nachrichten.",
          "customize-webmail": {
            "title": "Webmail anpassen",
            "language": "Sprache",
            "timezone": "Zeitzone",
            "ampm": "AM/PM-Format verwenden",
            "theme": {
              "label": "Design",
              "light": "Hell",
              "dark": "Dunkel",
              "info": {
                "title": "Designwechsel nicht verfügbar",
                "message": "Um ein helles oder dunkles Design zu wählen, bitten Sie den Postfach-Administrator, zum Standardstil der Webmail zurückzukehren."
              }
            }
          },
          "customize-message-list": {
            "title": "Nachrichtenliste anpassen",
            "description": "Anpassen, wie Nachrichten in der Liste angezeigt werden",
            "inbox-view-mode": {
              "label": "Listenansicht",
              "normal": "Normal",
              "compact": "Kompakt"
            },
            "messagePreview": "Nachrichtenvorschau in der Liste anzeigen",
            "folderInfoNewMessages": "Anzahl ungelesener Nachrichten in Ordnern anzeigen",
            "showMessageListDividers": "Trenner für Tage, Wochen und Monate anzeigen",
            "refreshTime": "Automatische Aktualisierung"
          },
          "customize-message-detail": {
            "title": "Nachrichtendetail anpassen",
            "description": "Anpassen, wie geöffnete Nachrichten angezeigt werden",
            "inbox-layout": {
              "label": "Lesebereich",
              "vertical": "Rechts",
              "horizontal": "Unten",
              "full": "Immer erweitern"
            },
            "inlineImages": "Angehängte Bilder anzeigen",
            "showOriginMessage": "Originalnachricht in Antworten anzeigen",
            "openNextMessageOnDelete": {
              "title": "Was soll passieren, wenn Sie das angezeigte Element löschen?",
              "openNext": "Nächstes Element öffnen",
              "backToList": "Zurück zur Nachrichtenliste"
            }
          },
          "success-edit": "Änderungen gespeichert.",
          "customize-notifications": {
            "title": "Schließen von Benachrichtigungen anpassen",
            "label": "Bestätigungsmeldungen nur manuell schließen"
          }
        },
        "calendars": {
          "title": "Kalender",
          "pec": {
            "subtitle": {
              "mobile": "Wählen Sie, wie Sie Ihre Kalender <b>anpassen</b>.",
              "desktop": "Wählen Sie, wie Sie Ihre Kalender <b>anpassen</b>."
            }
          },
          "pel": {
            "subtitle": {
              "mobile": "Wählen Sie, wie Sie Ihre Kalender <b>anpassen</b>.",
              "desktop": "Wählen Sie, wie Sie <b>Anzeige</b> und <b>Synchronisierung</b> Ihrer Kalender anpassen."
            },
            "tabs": {
              "customization": "Anpassung",
              "synchronization": "Synchronisierung"
            },
            "form": {
              "first-weekday": "Wochenbeginn",
              "start-workhour": "Beginn des Arbeitstags",
              "default-view": "Standardansicht",
              "default-view-items": {
                "1": "Tag",
                "2": "Woche",
                "3": "Monat",
                "4": "Liste"
              },
              "auto-invitations": "Teilnehmer automatisch über alle Änderungen an Terminen benachrichtigen",
              "location": "Standardort für Termine",
              "availability": {
                "title": "Verfügbarkeit",
                "subtitle": "Wählen Sie, ob andere Postfächer derselben Domain Ihre Verfügbarkeit sehen können.",
                "hide-availability": "Meine Verfügbarkeit ausblenden"
              },
              "synchronization": {
                "action": "Synchronisierungsassistent für andere Geräte",
                "enable-calendar": "{{calendar}} aktivieren",
                "caldav": {
                  "title": "Lesen und Schreiben (CalDAV)",
                  "subtitle": "Mit der Synchronisierung über <b>CalDAV</b> können Sie den Kalender <b>lesen</b> und <b>bearbeiten</b>. <br/>Aktivieren Sie die zu synchronisierenden Kalender."
                },
                "ical": {
                  "title": "Nur Lesen (iCal)",
                  "subtitle": "Mit der Synchronisierung über <b>iCal</b> können Sie den Kalender <b>nur lesen</b>. <br/>Aktivieren Sie die zu synchronisierenden Kalender.",
                  "action": "iCal-URL des Kalenders kopieren",
                  "url-copied": "Link in die Zwischenablage kopiert."
                },
                "loading": "Kalendersynchronisierung wird geladen..."
              },
              "loading-customization": "Kalenderanpassung wird geladen..."
            }
          },
          "save": {
            "toast": {
              "success": "Änderungen gespeichert",
              "error": "Fehler beim Speichern der Änderungen"
            }
          }
        },
        "search-pec-address": {
          "title": "PEC-Adressen suchen",
          "subtitle": "Durchsuchen Sie öffentliche Verzeichnisse über das <strong>digitale Domizil</strong>, d. h. die von Unternehmen, Freiberuflern und Privatpersonen registrierte PEC-Adresse.",
          "inad": {
            "title": "INAD – (INDICE NAZIONALE DEI DOMICILI DIGITALI) NATIONALES VERZEICHNIS DER DIGITALEN DOMIZILE",
            "description": "Über dieses Verzeichnis können Privatpersonen ihr eigenes digitales Domizil aktivieren und die anderer Personen mit registrierter PEC-Adresse suchen.",
            "action": "INAD durchsuchen"
          },
          "digital-domain": {
            "title": "Sind Sie Privatperson? Machen Sie die PEC zu Ihrem digitalen Domizil",
            "description": "Sie können <strong>sämtliche offizielle Korrespondenz</strong> der öffentlichen Verwaltung schnell, einfach und sicher empfangen.",
            "action": "Digitales Domizil aktivieren"
          },
          "ini-pec": {
            "title": "INI-PEC – (INDICE NAZIONALE DEGLI INDIRIZZI PEC DI IMPRESE E PROFESSIONISTI) NATIONALES VERZEICHNIS DER PEC-ADRESSEN VON UNTERNEHMEN UND FREIBERUFLERN",
            "description": "Über dieses Verzeichnis können Sie PEC-Adressen von Firmen, Unternehmen und Freiberuflern (Notare, Anwälte, Steuerberater usw.) suchen.",
            "action": "INI-PEC durchsuchen"
          },
          "ipa": {
            "title": "IPA – (INDICE DEI DOMICILI DIGITALI DELLA PA E DEI GESTORI DI PUBBLICI SERVIZI) VERZEICHNIS DER DIGITALEN DOMIZILE DER ÖFFENTLICHEN VERWALTUNG UND DER BETREIBER ÖFFENTLICHER DIENSTE",
            "description": "Über dieses Verzeichnis können Sie PEC-Adressen öffentlicher Verwaltungen und Betreiber öffentlicher Dienste suchen.",
            "action": "IPA durchsuchen"
          }
        },
        "account-permissions": {
          "title": "Kontoberechtigungen",
          "fields": {
            "username": {
              "label": "Benutzername"
            },
            "account-status": {
              "label": "Kontostatus",
              "active": "Aktiviert"
            },
            "created-at": {
              "label": "Erstellt am"
            },
            "active-since": {
              "label": "Aktiviert seit"
            },
            "name": {
              "label": "Name"
            },
            "email": {
              "label": "E-Mail-Adresse"
            }
          },
          "disable-account": "Konto deaktivieren",
          "delete-account": "Konto löschen",
          "info": {
            "pel": {
              "title": "Berechtigungen",
              "complete": "<b>Vollständig:</b> zur Verwaltung aller Postfachfunktionen.",
              "read-only": "<b>Nur Lesen:</b> zum Lesen von Nachrichten.",
              "read-write": "<b>Lesen und bearbeiten:</b> zum Lesen, Schreiben und Verschieben von Nachrichten, jedoch nicht zum Senden."
            },
            "pec": {
              "title": "Berechtigungen",
              "grant-status": {
                "active": "Aktiviert",
                "not-active": "Deaktiviert"
              },
              "grants": {
                "read": {
                  "label": "Gelesen",
                  "text": "Zum Lesen von Nachrichten, Bestätigungen und Rechnungen und zum Verschieben zwischen Ordnern"
                },
                "write": {
                  "label": "Schreiben",
                  "text": "Zum Schreiben, Bearbeiten und Verschieben von Nachrichten zwischen Ordnern"
                },
                "send": {
                  "label": "Senden",
                  "text": "Zum Senden von PEC-Nachrichten"
                },
                "mail-app": {
                  "label": "Auch in E-Mail-Programmen verwenden",
                  "text": "Zum Senden und Empfangen von Nachrichten auch über E-Mail-Programme wie Outlook, Mail usw."
                },
                "settings": {
                  "label": "Einstellungen verwalten",
                  "text": "Zum Verwalten der Postfacheinstellungen"
                }
              },
              "protocols": {
                "imap": "Protokoll für eingehende Nachrichten IMAP",
                "pop3": "Protokoll für eingehende Nachrichten POP3"
              }
            }
          },
          "delete-active": {
            "toast": {
              "success": "Das Konto {{username}} wurde deaktiviert"
            }
          }
        },
        "multiuser": {
          "title": "Multiuser",
          "sub-title": "Erstellen Sie ein <strong>Multiuser</strong>-Konto und lassen Sie andere <strong>Ihr Postfach verwalten</strong> – mit <strong>Berechtigungen</strong> „Nur Lesen“, „Lesen und bearbeiten“ oder „Vollständig“.",
          "title-disabled": "Andere Personen Ihr Postfach verwalten lassen",
          "sub-title-disabled": "Mit <strong>Multiuser</strong> können Sie <strong>die Verwaltung dieses Postfachs</strong> anderen Personen mit einem Postfach bei {{domain}} <strong>gemäß den von Ihnen gewählten Berechtigungen anvertrauen.</strong>",
          "hint-disabled": "<strong>Wenden Sie sich an den Administrator der Website {{domain}}</strong> und bitten Sie ihn, die Funktion „Multiuser“ zu aktivieren, damit <br>Sie diesen Dienst nutzen können.",
          "hint-not-business": "Die Multiuser-Funktion kann <b>nur mit Business Mail</b> verwendet werden",
          "buy-business-mail": "Business Mail holen",
          "table": {
            "account": "Konto",
            "account-status": "Kontostatus",
            "permits": "Berechtigungen",
            "no-multiuser-created": "Kein Multiuser-Konto erstellt",
            "create-multiuser": "Konto erstellen",
            "enabled-accounts": "Aktive Konten",
            "stand-by-accounts": "Ausstehende Konten",
            "active": "Aktiviert",
            "stand-by": "Ausstehende Konten",
            "all-records": "Alle",
            "details": "Details",
            "empty-label": "Kein Multiuser-Konto erstellt",
            "empty-search": "<b>Keine Elemente entsprechen den gesetzten Filtern.</b><br>Ändern oder entfernen Sie einige Filter.",
            "clear-filters": "Alle Filter entfernen",
            "grants": {
              "complete": "Voll",
              "readonly": "Nur Lesen",
              "read-and-edit": "Lesen und bearbeiten"
            }
          },
          "create-multiuser": "Konto erstellen",
          "active-multiuser": "Aktive Konten:",
          "add-account-dialog": {
            "header": "Neues Multiuser-Konto erstellen",
            "subtitle": "Geben Sie einen Benutzernamen ein, mit dem sich der geteilte Benutzer anmeldet, und senden Sie die Einladung.",
            "message": "Durch das Erstellen eines Multiuser-Kontos und Absenden der Anfrage autorisieren Sie das Multiuser-Konto, das Konto gemäß den angegebenen Berechtigungen in Ihrem Namen zu verwalten.",
            "username": "Benutzername",
            "permission": {
              "label": "Berechtigungen",
              "complete": "<strong>Vollständig:</strong> zur Verwaltung aller Postfachfunktionen.",
              "read_and_edit": "<strong>Lesen und bearbeiten:</strong> zum Lesen, Schreiben und Verschieben von Nachrichten, jedoch nicht zum Senden.",
              "readonly": "<strong>Nur Lesen:</strong> zum Lesen von Nachrichten."
            },
            "send-request": {
              "title": "Anfrage absenden",
              "email": "E-Mail, an die die Anfrage gesendet wird",
              "email-placeholder": "Mit der Domain verknüpfte E-Mail",
              "language": "Sprache der Anfrage",
              "message": "Persönliche Nachricht",
              "message-placeholder": "Wir senden sie zusammen mit der Freigabeanfrage",
              "optional": "Optional"
            },
            "errors": {
              "username-not-valid": "Benutzernamen eingeben",
              "email-not-valid": "Gültige E-Mail-Adresse eingeben",
              "account-not-exist": "E-Mail in der Domain nicht gefunden",
              "login-email-not-valid": "An die eigene E-Mail kann nicht gesendet werden"
            },
            "actions": {
              "confirm": "Konto erstellen",
              "cancel": "Abbrechen"
            },
            "success-toast": "Konto erstellt und Anfrage gesendet"
          },
          "detail-account-dialog": {
            "header": "Konto {{username}}",
            "username": "Benutzername",
            "email": "E-Mail-Adresse",
            "status": {
              "label": "Kontostatus",
              "activated": "Aktiviert",
              "invited": "Ausstehend"
            },
            "creation-date": "Erstellt am",
            "two-factor": {
              "label": "",
              "active": "",
              "reset": "",
              "success-toast": "",
              "reset-dialog": {
                "header": "",
                "question": "",
                "confirm": "",
                "cancel": ""
              }
            },
            "permission": {
              "label": "Berechtigungen",
              "complete": "<strong>Vollständig:</strong> zur Verwaltung aller Postfachfunktionen.",
              "read_and_edit": "<strong>Lesen und bearbeiten:</strong> zum Lesen, Schreiben und Verschieben von Nachrichten, jedoch nicht zum Senden.",
              "readonly": "<strong>Nur Lesen:</strong> zum Lesen von Nachrichten."
            },
            "actions": {
              "delete": "Konto löschen",
              "confirm": "Speichern",
              "close": "Schließen"
            },
            "delete": {
              "header": "Möchten Sie das Konto löschen?",
              "question": "Wenn das Konto <strong>{{username}}</strong> endgültig gelöscht wird, kann es nicht mehr auf <strong>{{email}}</strong> zugreifen",
              "confirm": "Endgültig löschen",
              "cancel": "Abbrechen",
              "success-delete": "Konto gelöscht"
            },
            "edit": {
              "header": "Möchten Sie die Änderungen bestätigen?",
              "question": "Durch die Änderung der Berechtigungen autorisieren Sie <strong>{{email}}</strong>, das Postfach gemäß den angegebenen Berechtigungen in Ihrem Namen zu verwalten.",
              "confirm": "Bestätigen",
              "cancel": "Abbrechen",
              "success-edit": "Kontoänderungen gespeichert"
            }
          }
        },
        "pec-multiuser": {
          "title": "PEC Multiuser",
          "create-multiuser": "Konto erstellen",
          "table": {
            "empty-label": "Kein PEC-Multiuser-Konto erstellt",
            "fields": {
              "usernameSubaccount": "Konto",
              "state": "Kontostatus",
              "grants": "Berechtigungen"
            },
            "details": "Details",
            "acitve-accounts": "{{active}} von {{total}} Konten aktiv",
            "state": {
              "all": "Alle",
              "delegated": "Aktiviert",
              "waiting": "Ausstehend",
              "suspended": "Gesperrt",
              "revoked": "Nicht aktiviert",
              "rejected": "Abgelehnt"
            },
            "grants": {
              "tooltips": {
                "view": "Gelesen",
                "edit": "Schreiben",
                "send": "Senden",
                "mail-app": "Auch in E-Mail-Programmen verwenden",
                "settings": "Einstellungen verwalten"
              }
            }
          },
          "banners": {
            "grace-period": {
              "title": "Ihre Freigaben für PEC-Multiuser-Konten werden am {{gracePeriodDate}} deaktiviert.",
              "text": "Der Dienst PEC Multiuser wird aktualisiert: Er ist künftig <b>nur mit PEC-Pro- und Premium-Postfächern kompatibel</b>. <br>Wenden Sie sich an Ihren Dienstanbieter und <b>fragen Sie, welches Postfach für Ihre Anforderungen empfohlen wird.</b>",
              "action": "Wenden Sie sich an Ihren Dienstanbieter"
            },
            "grace-period-expired": {
              "title": "Ihre Freigaben für PEC-Multiuser-Konten wurden endgültig deaktiviert.",
              "text": "Der Dienst PEC Multiuser kann nur mit Pro- und Premium-Postfächern genutzt werden.<br>Führen Sie ein Upgrade auf <b>PEC Pro</b> oder <b>PEC Premium</b> durch, um PEC Multiuser zu nutzen.<br> Wenden Sie sich an Ihren Dienstanbieter und <b>fragen Sie, welches Postfach für Ihre Anforderungen empfohlen wird.</b>",
              "action": "Wenden Sie sich an Ihren Dienstanbieter"
            },
            "pro-account-limit-reached": {
              "title": "Sie haben die maximale Anzahl an PEC-Multiuser-Konten in einem PEC-Pro-Konto erreicht.",
              "text": "Führen Sie ein Upgrade auf PEC Premium durch, um neue Konten hinzuzufügen.",
              "action": "Upgrade auf PEC Premium"
            },
            "premium-account-limit-reached": {
              "title": "PEC-Multiuser-Konto holen",
              "text": "Sie nutzen alle in einem PEC-Premium-Postfach enthaltenen PEC-Multiuser-Konten.<br>Kaufen Sie ein Zusatzpaket, um neue Konten hinzuzufügen.",
              "action": "Konto holen"
            },
            "account-limit-reached": {
              "title": "Sie haben das Maximum von 5 PEC-Multiuser-Konten erreicht",
              "text": "Um ein neues Konto zu erstellen, müssen Sie zuerst mindestens eines der bestehenden löschen."
            }
          },
          "toast": {
            "update-success": "Änderungen am Konto {{username}} gespeichert",
            "deactivate-success": "Das Konto {{username}} wurde deaktiviert",
            "reset-password-success": "E-Mail mit Anweisungen wurde gesendet",
            "reinvite-success": "E-Mail mit Anweisungen wurde gesendet",
            "remove-from-list-success": "Das Konto {{username}} wurde aus der Liste entfernt",
            "rejected-success": "Anfrage abgelehnt",
            "invite-success": "Konto erstellt und Anfrage gesendet",
            "error": "Ein Fehler ist aufgetreten. Bitte später erneut versuchen."
          }
        },
        "aruba-drive": {
          "title": "Aruba Drive",
          "step-1": "1",
          "step-2": "2",
          "step-3": "3",
          "sub-title-pel": "Nutzen Sie Ihre Dateien in Aruba Drive, <b>um sie an Nachrichten anzuhängen</b> und <b>empfangene Anhänge zu speichern</b>.",
          "sub-title-pec": "Verbinden Sie sich mit der Cloud-Plattform zum Archivieren und Teilen, um <b>Dateien an Nachrichten anzuhängen</b> und<b> empfangene Anhänge</b> in Ihrem Cloud-Speicher zu sichern.",
          "already-have-aruba-drive": "Haben Sie bereits Aruba Drive?",
          "description": "<b>Schließen Sie den Vorgang ab</b>, um Aruba Drive mit der Webmail zu verbinden und optimal zu nutzen.",
          "dont-have-aruba-drive": "Sie haben kein Aruba Drive?",
          "label-url-aruba-drive": "Aruba-Drive-URL",
          "placeholder": "z. B. www.mydrive.it",
          "error-message": "Prüfen Sie die URL. Sie muss mit Aruba Drive verknüpft sein",
          "connect-your-account": "Aruba-Drive-Konto verbinden",
          "connect": "Verbinden",
          "connection-finished": "Verbindung hergestellt",
          "reload-the-page": "Seite neu laden",
          "description-no-aruba-drive": "Nutzen Sie <b>ein Drive mit unbegrenztem Speicher</b>, um alle gewünschten Dokumente, Bilder und Videos zu archivieren, zu bearbeiten und zu teilen.",
          "discover-aruba-drive": "Mehr über Aruba Drive",
          "discover-aruba-drive-url": "https://hosting.aruba.it/aruba-drive.aspx",
          "account": "Konto",
          "username": "Benutzername",
          "connection-with-webmail": "Mit Webmail verbinden",
          "active": "Aktiviert",
          "disconnect-account": "Konto trennen",
          "changes-saved": "Änderungen gespeichert",
          "dialog-disconnect": {
            "cancel": "Abbrechen",
            "disconnect-account": "Konto trennen",
            "header": "Möchten Sie das Konto trennen?",
            "question": "Nach dem Trennen können Sie Aruba Drive nicht mehr in der Webmail nutzen."
          },
          "calendars-synchronization": {
            "title": "Kalender synchronisieren",
            "description": "Aktivieren Sie die Aruba-Drive-Kalender, die Sie zur Webmail hinzufügen möchten. Sie können Termine lesen und bearbeiten.",
            "enable-calendar": "{{calendar}} aktivieren",
            "toast": {
              "success": "Änderungen gespeichert."
            }
          },
          "address-books-synchronization": {
            "title": "Adressbücher synchronisieren",
            "description": "Aktivieren Sie die Aruba-Drive-Adressbücher, die Sie zur Webmail hinzufügen möchten. Sie können Kontakte lesen und bearbeiten.",
            "enable-address-book": "{{addressBook}} aktivieren",
            "toast": {
              "success": "Änderungen gespeichert."
            }
          }
        },
        "chat": {
          "title": "Chat",
          "subtitle": "Wählen Sie Ihren Status, der anderen Postfächern bei {{domain}} angezeigt wird",
          "banner": {
            "buy-business-mail": {
              "message": "Diese Funktion <b>ist nur</b> für Domains mit Business Mail verfügbar. Verpassen Sie nicht diesen und weitere Vorteile!",
              "button": "Business Mail holen"
            }
          },
          "not-available": {
            "title": "Chat nicht verfügbar",
            "message": "Wenden Sie sich an Ihren <b>Domain-Administrator</b><br><br>"
          },
          "status": {
            "label": "Status",
            "list": {
              "available": "Verfügbar",
              "away": "Abwesend",
              "dnd": "Nicht stören",
              "offline": "Nicht verbunden"
            }
          },
          "save": {
            "toast": {
              "success": "Änderungen gespeichert",
              "error": "Fehler beim Speichern der Änderungen"
            }
          }
        },
        "digital-signature": {
          "title": "Aruba Digitale Signatur",
          "title-pec": "Digitale Signatur",
          "sub-title": "<strong>Signieren</strong> Sie Anhänge digital und <strong>senden</strong> Sie eine Zusammenfassung direkt aus der Webmail.",
          "sub-title-pec": "<strong>Signieren</strong> Sie Anhänge digital und <strong>senden</strong> Sie eine Zusammenfassung direkt aus der Webmail.",
          "have-area": {
            "title": "Haben Sie bereits eine Aruba Digitale Signatur?",
            "title-pec": "Haben Sie bereits eine digitale Signatur?",
            "subtitle": "Wählen Sie Ihre Standard-Signaturmethode",
            "option-remote": {
              "title": "Fernsignatur",
              "subtitle": "App Aruba OTP auf Smartphone oder Tablet, OTP Display oder OTP USB verwenden",
              "username": {
                "label": "Benutzername",
                "forget": "Benutzernamen vergessen?"
              },
              "domain-optional": {
                "label": "Signatur-Domain",
                "sublabel": "(optional)",
                "placeholder": "@domain"
              }
            },
            "option-device": {
              "title": "Digitale Signatur mit Gerät",
              "title-pec": "Digitale Signatur eines beliebigen Anbieters",
              "subtitle": "ArubaKey, Smartcard oder Token verwenden"
            }
          },
          "no-have-area": {
            "title": "Sie haben keine digitale Signatur?",
            "box-label": "Kaufen Sie sie jetzt, um elektronische Dokumente von jedem Gerät aus schnell, einfach und rechtsgültig zu signieren. <b>Vereinfachen Sie Abläufe und sparen Sie Zeit.</b>",
            "box-label-reseller": "Holen Sie sie sich jetzt, um elektronische Dokumente von jedem Gerät aus schnell, einfach und rechtsgültig zu signieren. <b>Vereinfachen Sie Abläufe und sparen Sie Zeit.</b>",
            "label-reseller": "Fragen Sie Ihren Dienstanbieter <b>{{reseller}}</b>",
            "discover-aruba-signature": "Mehr über Aruba Digitale Signatur"
          },
          "format": {
            "title": "Standardformate",
            "pdf-title": "Format für .PDF-Dateien",
            "pdf-p7m": "P7M (CAdES)",
            "pdf-p7m-tooltip": "Das Signaturformat CAdES (CMS Advanced Electronic Signatures) ist der Standard für fortgeschrittene elektronische Signaturen, der Echtheit und Integrität digitaler Dokumente garantiert. Es basiert auf der Cryptographic Message Syntax (CMS).",
            "pdf-pdf": "PDF (PAdES)",
            "pdf-pdf-tooltip": "Das Signaturformat PAdES (PDF Advanced Electronic Signatures) ist der internationale Standard für fortgeschrittene elektronische Signaturen in PDF-Dokumenten.",
            "xml-title": "Format für .XML-Dateien",
            "xml-p7m": "P7M (CAdES)",
            "xml-p7m-tooltip": "Das Signaturformat CAdES (CMS Advanced Electronic Signatures) ist der Standard für fortgeschrittene elektronische Signaturen, der Echtheit und Integrität digitaler Dokumente garantiert. Es basiert auf der Cryptographic Message Syntax (CMS).",
            "xml-xml": "XML (XAdES)",
            "xml-xml-tooltip": "Das Signaturformat XAdES (XML Advanced Electronic Signatures) ist der internationale Standard für fortgeschrittene elektronische Signaturen in XML-Dokumenten."
          }
        },
        "digital-preservation": {
          "title": "Digitale Archivierung",
          "subtitle-hint": "Verbleibenden Speicher und automatische Archivierung von Nachrichten verwalten.",
          "information": {
            "label": "Details",
            "services": {
              "title": "Dienstdetails",
              "status": {
                "label": "Status",
                "active": "Aktiviert",
                "not-active": "Deaktiviert"
              },
              "activation-date": "Aktivierung",
              "responsible": "Verantwortlicher für die digitale Archivierung",
              "producer": "Ersteller der Übergabepakete",
              "details": "Mehr Details"
            },
            "space": {
              "title": "Speicher für digitale Langzeitarchivierung",
              "upgrade": "Speicher erweitern",
              "alert": {
                "warning-title": "Ihr Speicherplatz geht bald zur Neige.",
                "warning": "Erweitern Sie Ihren Speicher, um weiterhin neue Nachrichten speichern zu können.",
                "warning-partner": "<strong>Ihr Archivspeicher ist fast voll.</strong> Um weiterhin neue Nachrichten zu archivieren, beantragen Sie bei Ihrem Dienstanbieter eine Speichererweiterung oder melden Sie sich, falls Sie direkt kaufen dürfen, bei <a tabindex=\"-1\" href=\"https://areaclienti.arubapec.it\" target=\"_blank\">customerarea.arubapec.it</a> an und erweitern Sie Ihren Archivspeicher.",
                "danger-title": "Speicher voll.",
                "danger": "Erweitern Sie Ihren Speicher, um neue E-Mails zu speichern.",
                "danger-partner": "<strong>Speicher voll.</strong> Um weiterhin Nachrichten zu speichern, erweitern Sie den Speicher für digitale Archivierung über Ihren Dienstanbieter oder melden Sie sich, falls Sie direkt kaufen dürfen, bei <a tabindex=\"-1\" href=\"https://areaclienti.arubapec.it\" target=\"_blank\">areaclienti.arubapec.it</a> an und erweitern Sie ihn dort."
              }
            },
            "settings": {
              "title": "Einstellungen der digitalen Archivierung",
              "sub-title": "<strong>Die manuelle digitale Archivierung ist immer aktiv</strong> und ermöglicht es Ihnen, Nachrichten jederzeit in die digitale Archivierung zu verschieben oder zu kopieren. <strong>Sie können entscheiden, ob Sie zusätzlich die automatische digitale Archivierung aktivieren.</strong>",
              "automaticPreservation": "Automatische digitale Archivierung aktivieren",
              "emailTypeMode": {
                "label": "Was möchten Sie digital archivieren?",
                "all": "Alle Nachrichten (gesendet und empfangen) und Bestätigungen archivieren",
                "in_and_receipt": "Eingehende Nachrichten und Bestätigungen archivieren",
                "in_and_out": "Alle Nachrichten (gesendet und empfangen) archivieren",
                "in": "Empfangene Nachrichten archivieren"
              },
              "spam": "<strong>Junk-E-Mails</strong> ausschließen"
            },
            "details": {
              "responsible": {
                "title": "Verantwortlicher für die digitale Archivierung",
                "title-edit": "Verantwortlichen für die digitale Archivierung aktualisieren",
                "subtitle": "Daten der Person, die vollständig und eigenständig für Festlegung und Verwaltung der Archivierungsrichtlinien verantwortlich ist."
              },
              "producer": {
                "title": "Ersteller der Übergabepakete",
                "title-edit": "Ersteller der Übergabepakete aktualisieren",
                "subtitle": "Der Ersteller der Übergabepakete erstellt die Übergabepakete und übermittelt sie an das Archivierungssystem – in den im Archivierungshandbuch angegebenen und mit Aruba PEC vereinbarten Verfahren und Formaten."
              },
              "fields": {
                "type": "Typ",
                "person": "Natürliche Person",
                "business": "Juristische Person",
                "name": "Name",
                "surname": "Nachname",
                "taxcode": "Steuernummer",
                "email": "Persönliche E-Mail",
                "pec": "PEC-E-Mail",
                "business-name": "Firmenname",
                "vat": "USt-IdNr."
              },
              "actions": {
                "edit": "Bearbeiten",
                "save": "Speichern",
                "close": "Schließen"
              }
            }
          },
          "history": {
            "label": "Ereignisprotokoll",
            "title": "Protokoll der digitalen Archivierung",
            "sub-title": "Ereignisse zur digitalen Archivierung von Nachrichten suchen.",
            "fields": {
              "date": "Zeitraum wählen",
              "selectDate": "Daten auswählen",
              "type": "Ereignistyp"
            },
            "enum": {
              "types": {
                "All": "Alle",
                "ModeSetting": "Archivierungsmodus",
                "ShowRequest": "Herausgabeanfragen",
                "Overquota": "Speichergrenze erreicht"
              },
              "description": {
                "None": "-",
                "Overquota70": "Speicher erreicht: 70 %",
                "Overquota80": "Speicher erreicht: 80 %",
                "Overquota90": "Speicher erreicht: 90 %",
                "Overquota100": "Speicher erreicht: 100 %",
                "ManualMode": "Von automatischer zu manueller Archivierung",
                "AutoAll": "Alle Nachrichten (gesendet und empfangen) archivieren",
                "AutoAllAndReceipts": "Alle Nachrichten (gesendet und empfangen) und Bestätigungen archivieren",
                "AutoInbox": "Empfangene Nachrichten archivieren",
                "AutoInboxAndReceipts": "Eingehende Nachrichten und Bestätigungen archivieren",
                "Massive": "Vollständige Herausgabe"
              }
            },
            "search": "Suchen",
            "table": {
              "event": {
                "title": "Ereignis"
              },
              "detail": {
                "title": "Detail"
              },
              "eventDate": {
                "title": "Datum und Uhrzeit"
              },
              "user": {
                "title": "Benutzer"
              }
            },
            "empty": {
              "title": "Keine Protokolle entsprechen den gewählten Filtern.",
              "message": "Ändern oder entfernen Sie einige Filter"
            }
          },
          "toast": {
            "success": "Änderungen gespeichert"
          }
        },
        "smime": {
          "title": "S/MIME",
          "list-title": "Meine Zertifikate",
          "list-subtitle": "Überwachen, verwalten und konfigurieren Sie Ihre Zertifikate.",
          "explanation": "S/MIME-Zertifikate ermöglichen dank des gleichnamigen Protokolls das Lesen eingehender verschlüsselter Nachrichten und das Senden digital signierter Nachrichten und erhöhen so Sicherheit und Vertraulichkeit Ihrer Korrespondenz. Zuverlässigkeit und Integrität der Nachrichten werden garantiert und Sie sind vor Phishing, Malware und anderen Cyberbedrohungen geschützt.",
          "import-title": "Haben Sie ein S/MIME-Zertifikat?",
          "import-subtitle": "Importieren Sie Ihr Zertifikat und geben Sie das von der ausstellenden Stelle bereitgestellte Passwort ein.",
          "import-button": "S/MIME-Zertifikat importieren",
          "promo-title": "Sie haben noch kein S/MIME-Zertifikat?",
          "promo-text": "Fordern Sie es kostenlos auf der Website von Actalis an und sorgen Sie für maximale Sicherheit Ihrer Nachrichten.",
          "promo-button": "Zu Actalis",
          "default-toggle-title": "Standardeinstellungen für das Senden von Nachrichten",
          "default-toggle-label": "Signatur auf Nachrichten zertifizieren",
          "fields": {
            "name": "Zertifikatsname",
            "email": "Zugehörige E-Mail-Adresse",
            "issuer": "Aussteller",
            "date": "Ablaufdatum",
            "usage": "Verwendung",
            "serial": "Seriennummer",
            "version": "Version",
            "status": "Status",
            "default": "Standard"
          },
          "actions": {
            "details": "Details",
            "rename": "Zertifikatsnamen bearbeiten",
            "delete": "Zertifikat löschen"
          },
          "status": {
            "active": "Gültig",
            "expiring": "Läuft ab",
            "expired": "Ungültig",
            "unrecognized": "Unbekannt"
          },
          "warnings": {
            "expiring": "Ihr Zertifikat läuft bald ab. Importieren Sie ein neues oder wählen Sie ein anderes.",
            "expired": "<b>Zertifikat ungültig.</b> Importieren Sie ein neues Zertifikat oder wählen Sie ein gültiges."
          },
          "view-dialog": {
            "header": "Zertifikatsdetails",
            "default-title": "Standardzertifikat für:"
          },
          "default-pane": {
            "default-subtitle": "S/MIME-Signatur",
            "default-text": "Prüft die Identität des Absenders und garantiert, dass der Inhalt nicht verändert wurde.",
            "default-tag": "Standard",
            "default-button": "Als Standard verwenden"
          },
          "rename-dialog": {
            "header": "Zertifikatsnamen bearbeiten",
            "message": "Geben Sie einen neuen Namen für das S/MIME-Zertifikat ein.",
            "label": "Zertifikatsname",
            "save": "Speichern",
            "cancel": "Abbrechen"
          },
          "delete-dialog": {
            "header": "Zertifikat löschen",
            "message-last": "<p>Wenn Sie das Zertifikat <b>{{name}}</b> entfernen, können die zugehörigen verschlüsselten Nachrichten nicht mehr gelesen werden, und Sie haben kein weiteres Zertifikat zum Schutz Ihrer E-Mails.</p><p>Möchten Sie wirklich fortfahren?</p>",
            "message-default": "<p>Wenn Sie das Zertifikat <b>{{name}}</b> entfernen, können die zugehörigen verschlüsselten Nachrichten nicht mehr gelesen werden.</p> <p>Das Zertifikat mit dem spätesten Ablaufdatum wird automatisch als Standard festgelegt; Sie können dies jederzeit ändern.</p> <p>Möchten Sie wirklich fortfahren?</p>",
            "message": "<p>Wenn Sie das Zertifikat <b>{{name}}</b> entfernen, können die zugehörigen verschlüsselten Nachrichten nicht mehr gelesen werden.</p><p>Möchten Sie wirklich fortfahren?</p>",
            "delete": "Löschen",
            "cancel": "Abbrechen"
          },
          "import-dialog": {
            "header": "S/MIME-Konfiguration",
            "steps": {
              "name": "Zertifikatsname",
              "password": "Authentifizierung",
              "result": "Ergebnis"
            },
            "name-hint": "Geben Sie einen Namen für Ihr S/MIME-Zertifikat ein.",
            "name-label": "Zertifikatsname",
            "name-placeholder": "z. B. S/MIME-Signaturzertifikat",
            "name-error": "Name eingeben",
            "password-hint": "Geben Sie das Passwort ein, das Sie von Actalis oder einer anderen Stelle per E-Mail erhalten haben.",
            "password-label": "Passwort",
            "password-error": "Ungültiges Passwort",
            "result-success-title": "Konfiguration abgeschlossen",
            "result-success-subtitle": "Ihre Nachrichten werden geschützt und zertifiziert.",
            "result-default-title": "Möchten Sie dieses Zertifikat als Standard für Signaturen verwenden?",
            "result-error-title": "Ungültiges Zertifikat",
            "continue": "Weiter",
            "cancel": "Abbrechen",
            "close": "Schließen"
          },
          "toast": {
            "certificate-renamed": "Das Zertifikat wurde umbenannt.",
            "certificate-deleted": "Das Zertifikat wurde gelöscht.",
            "certificate-imported-default": "Das Zertifikat wurde importiert und als Standard konfiguriert.",
            "certificate-imported": "Zertifikat importiert.",
            "certificate-default": "Das Zertifikat wurde als Standard konfiguriert."
          }
        },
        "folders": {
          "dialog": {
            "delete-all-messages": {
              "dialog-header": "Nachrichten löschen",
              "confirm-question": "Möchten Sie die Nachrichten in den Ordnern wirklich <strong>endgültig löschen</strong>?",
              "actions": {
                "delete": "Löschen",
                "cancel": "Abbrechen"
              },
              "toast": {
                "delete-success": "Nachrichten gelöscht"
              }
            },
            "move-to-trash": {
              "dialog-header": "Ordner leeren",
              "confirm-question": "Möchten Sie die Nachrichten des Ordners wirklich in den Papierkorb verschieben?",
              "actions": {
                "delete": "Leeren",
                "cancel": "Abbrechen"
              },
              "toast": {
                "delete-success": "Nachrichten in den Papierkorb verschoben"
              }
            },
            "move-to-trash-multiple": {
              "dialog-header": "Ordner leeren",
              "confirm-question": "Möchten Sie die Nachrichten in den Ordnern wirklich in den Papierkorb verschieben?",
              "actions": {
                "delete": "Leeren",
                "cancel": "Abbrechen"
              }
            },
            "move-folder": {
              "dialog-header": "Ordner verschieben",
              "confirm-question": "Durch das Verschieben des Ordners <strong>{{folder}}</strong> nach <strong>{{newParent}}</strong> werden folgende Regeln aktualisiert:<br><ul>{{ rules }}</ul><br><strong>Möchten Sie fortfahren?</strong>",
              "actions": {
                "move": "Verschieben",
                "cancel": "Abbrechen"
              }
            },
            "edit-folder-with-rules": {
              "header": {
                "edit": "Ordner mit Regeln bearbeiten",
                "delete": "Ordner mit Regeln löschen"
              },
              "question": {
                "edit": "Durch das Ändern des Ordners <strong>{{folders}}</strong> werden folgende Regeln aktualisiert:",
                "delete": "Durch das Löschen des Ordners <strong>{{folders}}</strong> werden folgende Regeln gelöscht:"
              },
              "confirm-question": "Möchten Sie fortfahren?",
              "actions": {
                "confirm-edit": "Bearbeiten",
                "confirm-delete": "Löschen",
                "cancel": "Abbrechen"
              }
            }
          },
          "title": "Ordner",
          "sub-title": "Halten Sie Ihre E-Mails mit Ordnern organisiert",
          "actions": {
            "modify": "Ordner bearbeiten",
            "mark-all-as-read": "Alle als gelesen markieren",
            "move-to-trash": "Ordner leeren",
            "export": "Ordner exportieren",
            "empty": "Ordner leeren",
            "empty-folder": "Ordner leeren",
            "new-subfolder": "Neuer Unterordner",
            "new": "Ordner erstellen",
            "delete": "Ordner löschen",
            "delete-folder": "Ordner löschen",
            "delete-messages": "Nachrichten löschen",
            "empty-folder-trash": ""
          },
          "toast": {
            "move-success": "Ordner verschoben",
            "move-error": "Ordner konnte nicht verschoben werden",
            "move-to-trash": "Nachrichten in den Papierkorb verschoben"
          },
          "table": {
            "headers": {
              "folder": "Ordner",
              "messages": "Nachrichten",
              "size": "Speicher"
            },
            "select-element": "Element ausgewählt",
            "select-elements": "Elemente ausgewählt",
            "select-placeholder": "Aktion auswählen"
          },
          "empty-state": {
            "title": "Kein Ordner",
            "description": "Erstellen Sie einen Ordner, um Ihre Nachrichten zu organisieren."
          },
          "drag-preview": {
            "move": "Verschieben",
            "not-allowed-inbox": "Ordner konnte nicht in den „Posteingang“ verschoben werden"
          }
        }
      },
      "auto-empty-trash": {
        "toggle-label": "Papierkorb beim Abmelden von der Webmail leeren"
      },
      "alias": {
        "description": "Sie können die mit dem Postfach verbundenen Aliase einrichten",
        "keywords": "Alias, Konto, Domains, Domain, andere",
        "sub-title": "Alias verwalten",
        "title": "Alias"
      },
      "aruba-electronic-invoicing-integration": {
        "description": "Integration mit Aruba E-Rechnung verwalten",
        "keywords": "Rechnungen, Rechnung, Aruba, Rechnungsstellung, elektronisch, Integration",
        "title": "Integration Aruba E-Rechnung"
      },
      "aruba-electronic-invoicing": {
        "description": "E-Rechnungen verwalten",
        "keywords": "Daten, Rechnungen, verwalten, Aruba, Rechnungsstellung, elektronisch, Rechnung, senden, SDI",
        "title": "Aruba E-Rechnung"
      },
      "multiuser-supervisor": {
        "description": "Multiuser-Dienst verwalten",
        "keywords": "Multiuser, verwalten, Supervisor",
        "title": "Multiuser"
      },
      "subscriptions": {
        "description": "Details des aktuellen Abonnements anzeigen",
        "keywords": "Tarif, Abonnement, Details, Abrechnung",
        "title": "Tarifdetails"
      }
    },
    "management": {
      "label": "Postfächer und Domain verwalten",
      "sidebar": {
        "collapse-menu": "Minimieren",
        "expand-menu": "Erweitern",
        "home": "Privat",
        "mailboxes": "Postfächer",
        "domain-settings": "Domain-Einstellungen",
        "security": "Sicherheit",
        "meeting-rooms": "Büros und Besprechungsräume",
        "antispam-profile": "Antispam-Profil",
        "alias": "Alias",
        "autoresponders": "Autoresponder",
        "mailing-list": "Mailingliste",
        "chat": "Chat",
        "appearance": "Erscheinungsbild",
        "general": "Allgemein"
      },
      "pages": {
        "home": {
          "label": "Privat",
          "title": "Postfächer und Domain verwalten",
          "sub-title": "Dieser Bereich zeigt eine Zusammenfassung Ihres Profils und ermöglicht das Erstellen und Verwalten von Domain-Postfächern.",
          "info-profile": {
            "title": "Profilinformationen",
            "user": "Benutzername",
            "mailboxes": "Erstellte Postfächer",
            "mailboxes-created": "{{count}} Postfächer",
            "go-to-mailboxes": "Zu den Postfächern"
          },
          "mailboxes": {
            "title": "Postfächer erstellen und verwalten",
            "message": "Im Bereich Postfächer können Sie Ihre Postfächer verwalten oder neue erstellen.",
            "new-mailbox": "Neues Postfach erstellen"
          },
          "settings": {
            "title": "Häufig genutzte Einstellungen",
            "manage": "Verwalten",
            "mailing-list": {
              "title": "Mailingliste",
              "message": "Erstellen Sie eine Liste von E-Mail-Adressen, um Nachrichten zu gemeinsamen Themen und Interessen auszutauschen und Newsletter zu ausgewählten Themen zu erhalten."
            },
            "alias": {
              "title": "Alias",
              "message": "Erstellen Sie eine virtuelle E-Mail-Adresse, die auf ein bestehendes Postfach umleitet und Ihre echte E-Mail-Adresse privat hält."
            }
          },
          "services": {
            "title": "Zusatzdienste, die Sie nicht verpassen sollten",
            "buy-now": "Jetzt kaufen",
            "giga": {
              "title": "GigaMail",
              "message": "Erhöhen Sie den Nachrichten- oder Archivspeicher Ihres Postfachs um 5 GB pro gekaufter GigaMail."
            },
            "unlimited": {
              "title": "Unbegrenzter E-Mail-Speicher",
              "message": "Unbegrenzter Nachrichten- und Archivspeicher zum Teilen und Speichern aller gewünschten Dokumente, Bilder und Videos. Mit Business Mail wird auch Ihr Dateispeicher auf 50 GB erweitert.",
              "message-shared": "Unbegrenzter Nachrichten- und Archivspeicher zum Speichern und Teilen aller gewünschten Dokumente, Bilder und Videos."
            }
          }
        },
        "chat": {
          "title": "Chat",
          "description": "Mit diesem Dienst können die Postfächer Ihrer Domain per Chat miteinander kommunizieren. <br><br>Der Chat kann für alle Domain-Postfächer aktiviert oder deaktiviert werden. Die Einstellungen der einzelnen Postfächer ändern Sie im Bearbeitungsbereich unter Postfächer.",
          "button-active": "Für alle Postfächer aktivieren",
          "button-deactive": "Für alle Postfächer deaktivieren",
          "dialog": {
            "title": "Chat verwalten",
            "desc": "Möchten Sie den Chat-Dienst wirklich für alle Domain-Benutzer aktivieren?",
            "active": "Chat aktivieren",
            "cancel": "Abbrechen"
          },
          "toast-active-success": "Chat aktiviert.",
          "toast-deactive-success": "Chat deaktiviert."
        },
        "antispam-profile": {
          "title": "Antispam-Profile",
          "subtitle": "Verwalten Sie unerwünschte E-Mails, indem Sie ein oder mehrere Antispam-Profile für die Domain-Postfächer erstellen. Sie können Adressen blockieren und Listen sicherer Absender anlegen.",
          "add-profile": "Neues Antispam-Profil",
          "title-subtitle": "Liste der Antispam-Profile",
          "no-profile-created": "Kein Antispam-Profil erstellt",
          "table": {
            "header": {
              "name-profile": "Name des Antispam-Profils"
            },
            "sections": {
              "edit": "Bearbeiten",
              "apply": "Auf Domain anwenden",
              "export": "Alle exportieren",
              "delete": "Löschen"
            }
          },
          "detail": {
            "route": "Antispam-Profil",
            "title": "Antispam-Profil bearbeiten",
            "enable": "Antispam-Einstellungen beim Anwenden dieses Profils einbeziehen",
            "wl_enable": "Sichere Absender und Empfänger beim Anwenden dieses Profils einbeziehen",
            "bl_enable": "Blockierte Absender beim Anwenden dieses Profils einbeziehen",
            "select": {
              "header": "Antispam-Einstellungen",
              "active": "Aktiviert",
              "not-active": "Deaktiviert"
            },
            "subtitle": "Passen Sie die Einstellungen des Antispam-Profils für optimalen Postfachschutz an.",
            "buttons": {
              "apply": "Auf Domain anwenden"
            }
          },
          "general-settings": {
            "title": "Allgemein",
            "dialog": {
              "title": "Neuer Administrator",
              "title-modify": "Administrator bearbeiten",
              "email-label": "E-Mail-Adresse",
              "placeholder": "Z. B. name@example.com",
              "permissions": {
                "title": "Berechtigungen",
                "admin-panel-symbol-title": "Zugriff auf das Control Panel",
                "admin-panel": "Zugriff auf das Control Panel aktivieren",
                "admin-panel-info": "Dem neuen Administrator stehen nicht alle Funktionen zur Verfügung.",
                "address-book-aziendal": "Verwaltung des Firmenadressbuchs aktivieren",
                "address-book-aziendal-symbol-title": "Firmenadressbuch verwalten",
                "address-book-aziendal-info": "Der Administrator kann beliebige Kontakte im Adressbuch hinzufügen, bearbeiten und löschen.",
                "calendar-aziendal": "Verwaltung des Firmenkalenders aktivieren",
                "calendar-aziendal-symbol-title": "Firmenkalender verwalten",
                "calendar-aziendal-info": "Der Administrator kann beliebige Termine im Kalender hinzufügen, bearbeiten und löschen."
              },
              "no-admin-created": "Kein Administrator erstellt",
              "toast": {
                "no-found-mail": "Postfach in der Domain nicht gefunden",
                "admin-created": "Administrator erstellt.",
                "admin-modified": "Änderungen gespeichert.",
                "admin-removed": "Administrator gelöscht."
              },
              "error": {
                "email-not-valid": "Gültige E-Mail-Adresse eingeben"
              }
            },
            "table": {
              "headers": {
                "email": "E-Mail-Adresse",
                "permissions": "Berechtigungen"
              }
            },
            "subtitle": "Einstellungen der Domain @{{domain}} verwalten",
            "administration": {
              "title": "Domain-Administrator",
              "subtitle": "Sie können neue Domain-Administratoren hinzufügen und ihnen Zugriff auf Adressbuch, Firmenkalender und Control Panel gewähren."
            },
            "senders": {
              "title": "Nicht existierende Empfänger",
              "subtitle": "Legen Sie fest, wie mit Nachrichten an nicht existierende Domain-Postfächer verfahren wird. Diese Nachrichten können abgelehnt, gelöscht, an ein Postfach einer anderen Domain zugestellt oder an externe Postfächer weitergeleitet werden.",
              "choices": {
                "repel-messages": "Nachrichten ablehnen",
                "delete-messages": "Nachrichten löschen",
                "forward-messages": "Nachrichten an angegebenes Postfach weiterleiten",
                "forward-external": "Nachrichten an ein externes Postfach weiterleiten"
              },
              "not-existent-form": {
                "internal-label": "E-Mail",
                "external-label": "E-Mail"
              },
              "toast": {
                "not-existing-update": "Änderungen gespeichert."
              },
              "security": {
                "title": "Sicherheit",
                "switch-label": "Festlegung eines Passwort-Ablaufdatums für alle Domain-Postfächer aktivieren.",
                "secure-info-label": "Empfang von Sicherheitsbenachrichtigungen für alle Domain-Postfächer aktivieren.",
                "labels": {
                  "days": "Tage",
                  "day-before": "Tage vorher",
                  "due": "Läuft ab alle",
                  "advice": "Ablaufwarnung"
                },
                "toast": {
                  "success": "Änderungen gespeichert",
                  "reset-update": "Die Einstellungen zum Passwortablauf wurden gespeichert"
                }
              }
            },
            "buttons": {
              "add-administrator": "Neuer Administrator"
            }
          },
          "dialog": {
            "input-label": "Name",
            "message": "Geben Sie dem Profil einen Namen und speichern Sie es. Sie können es nach Ihren Anforderungen konfigurieren und auf alle Domain-Postfächer anwenden.",
            "input-placeholder": "Z. B. Antispam für Mario Rossi",
            "buttons": {
              "save": "Speichern",
              "cancel": "Abbrechen",
              "delete": {
                "singular": "Antispam-Profil löschen",
                "plural": "Antispam-Profile löschen"
              },
              "apply": "Antispam-Profil anwenden",
              "interrupt": "Unterbrechen"
            },
            "singular": {
              "delete": "Antispam-Profil löschen",
              "delete-question": "Möchten Sie das ausgewählte Antispam-Profil wirklich löschen?"
            },
            "plural": {
              "delete": "Antispam-Profile löschen",
              "delete-question": "Möchten Sie die ausgewählten Antispam-Profile wirklich löschen?"
            },
            "apply": {
              "header": "Antispam-Profil auf Domain anwenden",
              "message": "Sie wenden das Antispam-Profil „{{profileName}}“ auf alle Domain-Postfächer an. <br><br>Je nach Profilkonfiguration können Antispam-Einstellungen sowie blockierte und sichere Adressen unwiderruflich überschrieben werden. <br><br>Möchten Sie das Profil wirklich anwenden?"
            },
            "loading-apply": {
              "header": "Wird angewendet",
              "message": "Das Antispam-Profil „{{profileName}}“ wird auf alle Domain-Postfächer angewendet. Bitte warten Sie, bis der Vorgang abgeschlossen ist."
            }
          },
          "toast": {
            "creation-success": "Antispam-Profil wurde erstellt.",
            "changes-saved": "Änderungen gespeichert.",
            "deletion-success-singular": "Antispam-Profil wurde gelöscht.",
            "deletion-success-plural": "Antispam-Profile wurden gelöscht.",
            "apply-interrupt": "Sie haben den Vorgang unterbrochen. Das Antispam-Profil wurde auf {{percentage}} % der Postfächer angewendet.",
            "apply-success": "Antispam-Profil wurde angewendet.",
            "apply-async": "Wir bearbeiten Ihre Anfrage. Sie werden per E-Mail über das Ergebnis informiert.",
            "add-rule-success": "E-Mail-Adresse hinzugefügt.",
            "success-edit": "Änderungen gespeichert",
            "import-address-success": "Liste der E-Mail-Adressen wurde importiert."
          }
        },
        "mailboxes": {
          "title": "Postfächer",
          "optional": "Optional",
          "antispam": {
            "title": "Spam verwalten",
            "title-addresses": "Blockierte oder sichere Adressen",
            "toast": {
              "delete-addresses": "Die ausgewählten Adressen wurden entfernt"
            },
            "choices": {
              "active": "Antispam-Dienst aktivieren",
              "first": "In Spam-Ordner senden",
              "second": "Spam-Nachricht anpassen",
              "third": "Automatisch ablehnen"
            },
            "buttons": {
              "add": "Adresse hinzufügen",
              "import": "Adressen aus Datei importieren"
            },
            "subtitle": "Blockieren Sie E-Mail-Adressen, von denen Sie keine E-Mails erhalten möchten, oder fügen Sie sichere Adressen hinzu, damit deren Nachrichten Sie immer erreichen.",
            "autoresponders-subtitle": "Blockieren Sie E-Mail-Adressen, von denen Sie keine E-Mails erhalten möchten, oder fügen Sie sichere Adressen hinzu, damit deren Nachrichten Sie immer erreichen."
          },
          "banner": {
            "title": "Dienste zur Erweiterung der Speicherkapazität der Postfächer von {{domain}}",
            "tag-promo": "SEHR GEFRAGT",
            "buy-now": "Jetzt kaufen",
            "giga": {
              "max": "Verbleibende GigaMails:",
              "cur": "Verwendete GigaMails:"
            },
            "unlimited": {
              "max": "Verbleibender unbegrenzter E-Mail-Speicher:",
              "cur": "Verwendeter unbegrenzter E-Mail-Speicher:"
            },
            "space": {
              "giga": {
                "max": "Verfügbare GigaMails:",
                "cur": "Verwendete GigaMails:"
              },
              "unlimited": {
                "max": "Verfügbarer unbegrenzter E-Mail-Speicher:",
                "cur": "Verwendeter unbegrenzter E-Mail-Speicher:"
              }
            }
          },
          "table": {
            "email": "Postfach",
            "messages": "Nachrichtenspeicher",
            "messages-tooltip": "Der Speicherplatz, den E-Mails und Anhänge im Bereich Nachrichten belegen (Posteingang, Entwürfe, Gesendet, Spam, Papierkorb, Ihre Ordner).",
            "archive": "Archivspeicher",
            "archive-tooltip": "Speicherplatz, den automatische Kopien gesendeter und empfangener Nachrichten seit Aktivierung des Sicherheitsarchivs belegen.",
            "status": "Status",
            "space-usage": {
              "size": "{{size}} MB von {{maxSize}} MB",
              "size-unlimited": "{{size}} MB",
              "giga-slot": "{{slot}} GigaMail",
              "unlimited-label": "Unbegrenzter E-Mail-Speicher"
            },
            "status-tag": {
              "active": "Aktiviert",
              "inactive": "Deaktivieren"
            },
            "actions": {
              "export": "Exportieren",
              "select-all": "Alle auswählen ({{count}})",
              "cancel-select-all": "Auswahl aufheben"
            }
          },
          "actions": {
            "active-now": "Jetzt aktivieren",
            "new": "Neues Postfach erstellen",
            "details": "Details",
            "detail": "Postfachdetails",
            "manage-password": "Passwort verwalten",
            "apply-template": "Antispam-Profil anwenden",
            "export": "Exportieren",
            "delete": "Löschen"
          },
          "filter": {
            "label": "Filtern nach:",
            "all": "Alle Postfächer",
            "unlimited": "Unbegrenzter E-Mail-Speicher",
            "giga": "GigaMail",
            "clean": "Alle Filter entfernen",
            "active": "Aktive Postfächer",
            "inactive": "Deaktivierte Postfächer"
          },
          "sort": {
            "MessageAssignedSpace": "Verfügbarer Nachrichtenspeicher",
            "ArchiveAssignedSpace": "Verfügbarer Archivspeicher",
            "ActiveMultiUsers": "Anz. aktiver Multiuser",
            "NameAZ": "Alphabetisch sortieren (A–Z)",
            "NameZA": "Alphabetisch sortieren (Z–A)"
          },
          "delete": {
            "header": "Postfächer löschen",
            "message": "Möchten Sie die Postfächer wirklich endgültig löschen?",
            "confirm": "Löschen",
            "cancel": "Abbrechen",
            "success-delete": "Postfächer gelöscht."
          },
          "no-template": "Keine",
          "apply-template": {
            "header": "Antispam-Profil auf Postfach anwenden",
            "label": "Antispam-Profil",
            "placeholder": "Keine",
            "confirm": "Antispam-Profil anwenden",
            "cancel": "Abbrechen",
            "success-toast": "Antispam-Profil wurde angewendet."
          },
          "create-dialog": {
            "header": "Postfach erstellen",
            "optional": "optional",
            "allowed-chars": "Zulässige Zeichen: a-z A-Z 0-9 & + - _ .",
            "step-profile": {
              "label": "Profil",
              "email": "Postfachadresse",
              "email-placeholder": "",
              "description": "Profilname",
              "description-placeholder": "Z. B. Kollegin Andrea",
              "template": "Antispam-Profil anwenden",
              "template-placeholder": "Auswählen"
            },
            "step-password": {
              "label": "Passwort",
              "placeholder": "Neues Passwort eingeben",
              "rules": {
                "subtitle": "Voraussetzungen",
                "length-rule": "Zwischen 8 und {{max}} Zeichen lang",
                "case-rule": "Mindestens ein Groß- und ein Kleinbuchstabe",
                "number-rule": "Mindestens eine Ziffer",
                "one-symbol-rule": "Mindestens eines dieser Sonderzeichen: {{characters}}",
                "no-account-name-rule": "Darf nicht den vollständigen Kontonamen enthalten",
                "no-sequential-char": "Darf nicht mehr als zwei gleiche Zeichen hintereinander enthalten",
                "no-special-char-rule": "Darf folgende Zeichen nicht enthalten: Akzente, nicht-lateinische Zeichen, andere als die erlaubten Sonderzeichen"
              },
              "password-strength": {
                "medium": "Passwortstärke: mittel",
                "good": "Passwortstärke: gut"
              }
            },
            "step-configurations": {
              "label": "Einrichten",
              "archive": "Archiv",
              "archive-message": "Eigener Speicherbereich für Kopien gesendeter und empfangener Nachrichten und Anhänge, um Ihre gesamte Korrespondenz zu schützen und zu sichern.",
              "password-management": "Postfach-Passwort verwalten",
              "password-management-message": "Ermöglicht dem Postfachbenutzer, das Passwort selbst zurückzusetzen. Ist diese Funktion nicht aktiviert, muss sich der Benutzer an den Domain-Administrator (Postmaster) wenden.",
              "password-reset": "Passwort bei der ersten Anmeldung zurücksetzen.",
              "password-reset-message": "Bei der ersten Anmeldung am Postfach wird der Benutzer aufgefordert, ein neues Passwort festzulegen.",
              "send-welcome-email": "Willkommens-E-Mail senden",
              "send-welcome-email-message": "Senden Sie dem neu erstellten Postfach eine E-Mail mit Einrichtungsinformationen und den Kontaktdaten des Domain-Administrators – Postmaster (optional).",
              "welcome-language": "Sprache der Willkommens-E-Mail wählen",
              "postmaster-email": "Kontakt-E-Mail des Postmasters",
              "postmaster-email-placeholder": "E-Mail-Adresse eingeben",
              "postmaster-phone-number": "Telefonnummer"
            },
            "error": {
              "email-not-valid": "Gültige E-Mail-Adresse eingeben",
              "phone-not-valid": "Geben Sie eine gültige Telefonnummer ein"
            },
            "action": {
              "go-back": "Zurück",
              "cancel": "Abbrechen",
              "proceed": "Weiter",
              "confirm": "Postfach erstellen"
            },
            "success": "Postfach erstellt."
          },
          "manage-password-dialog": {
            "header": "Passwort verwalten",
            "actions": {
              "save": "Speichern",
              "cancel": "Abbrechen"
            },
            "label": "Passwort-Zurücksetzung für die ausgewählten Postfächer festlegen:",
            "options": {
              "required": "<strong>Erforderlich:</strong> Nach der Anmeldung am Postfach muss der Benutzer ein neues Passwort festlegen.",
              "enabled": "<strong>Aktiviert:</strong> Der Benutzer kann sein Postfach-Passwort selbst zurücksetzen.",
              "disabled": "<strong>Nicht aktiviert:</strong> Zum Zurücksetzen des Postfach-Passworts muss sich der Benutzer an den Domain-Administrator (Postmaster) wenden."
            },
            "confirm": {
              "header": "Passwort verwalten",
              "question": "Die Änderung wird auf die ausgewählten Postfächer angewendet.<br>Möchten Sie wirklich fortfahren?",
              "confirm": "Ja",
              "cancel": "Nein"
            }
          },
          "details": {
            "sub-title": "Postfacheinstellungen verwalten.",
            "tabs": {
              "general": "Allgemein",
              "space": "Speicher",
              "archive": "Archiv",
              "multiuser": "Multiuser",
              "forward": "Automatische Weiterleitung und Antwort",
              "antispam": "Junk-Mail"
            },
            "general": {
              "two-factor": {
                "title": "Bestätigung in zwei Schritten",
                "state": {
                  "enabled": "Bestätigung aktiviert",
                  "disabled": "Bestätigung nicht aktiviert",
                  "enable": "Bestätigung aktivieren",
                  "disable": "Bestätigung deaktivieren"
                },
                "enable-dialog": {
                  "header": "Möchten Sie die Bestätigung in zwei Schritten aktivieren?",
                  "message": "Mit aktivierter Bestätigung in zwei Schritten <strong>greifen Sie mit einer Smartcard oder einem per App generierten Einmalpasswort (OTP) auf die Webmail zu.</strong><br><br><strong>Alle Multiuser-Konten werden gelöscht.</strong>",
                  "confirm": "Aktivieren",
                  "cancel": "Abbrechen"
                },
                "disable-dialog": {
                  "header": "Möchten Sie die Bestätigung in zwei Schritten deaktivieren?",
                  "message": "Das Deaktivieren der Bestätigung in zwei Schritten führt zu einem <strong>niedrigeren Sicherheitsniveau</strong> Ihres Postfachs.",
                  "confirm": "Deaktivieren",
                  "cancel": "Abbrechen"
                },
                "toast": {
                  "enabled": "Bestätigung in zwei Schritten aktiviert",
                  "disabled": "Bestätigung in zwei Schritten deaktiviert"
                }
              },
              "base": {
                "title": "Grundinformationen",
                "profile-name": "Profilname",
                "add-antispam-template": "Antispam-Profil anwenden",
                "optional": "optional"
              },
              "state": {
                "title": "Postfachstatus",
                "enabled": "Postfach aktiviert",
                "disabled": "Postfach nicht aktiviert",
                "enable": "Aktivieren",
                "disable": "Deaktivieren",
                "confirm-dialog": {
                  "header": {
                    "enable": "Postfach aktivieren",
                    "disable": "Postfach deaktivieren",
                    "disable-default": "Standardpostfach deaktivieren"
                  },
                  "message": "<strong>Durch das Deaktivieren wird dieses Postfach gesperrt</strong>, d. h. es kann nicht mehr darauf zugegriffen und keine Nachrichten gesendet oder empfangen werden.",
                  "message-default": "Wenn Sie fortfahren,<strong> werden Nachrichten an nicht existierende Domain-Postfächer nicht mehr zugestellt</strong>. Möchten Sie wirklich fortfahren?",
                  "action": {
                    "disable": "Deaktivieren",
                    "enable": "Aktivieren",
                    "cancel": "Abbrechen"
                  }
                },
                "default-mailbox": "Standardpostfach",
                "default-mailbox-message": "Als Standardpostfach festlegen, um Nachrichten an nicht existierende Domain-Postfächer zu empfangen."
              },
              "password": {
                "title": "Passwort",
                "change": "Postfach-Passwort ändern",
                "header": "Passwort ändern",
                "password-placeholder": "Neues Passwort eingeben",
                "feedback": {
                  "title": "Passwort-Zurücksetzung bei der ersten Anmeldung wird deaktiviert",
                  "message": "Wenn Sie das Passwort ändern, kann bei der ersten Anmeldung kein neues mehr festgelegt werden. Um dem Benutzer das Zurücksetzen zu ermöglichen, müssen Sie die entsprechende Funktion erneut aktivieren."
                },
                "rules": {
                  "subtitle": "Voraussetzungen",
                  "length-rule": "Zwischen 8 und {{max}} Zeichen lang",
                  "case-rule": "Mindestens ein Groß- und ein Kleinbuchstabe",
                  "number-rule": "Mindestens eine Ziffer",
                  "one-symbol-rule": "Mindestens eines dieser Sonderzeichen: {{characters}}",
                  "no-account-name-rule": "Darf nicht den vollständigen Kontonamen enthalten",
                  "no-sequential-char": "Darf nicht mehr als zwei gleiche Zeichen hintereinander enthalten",
                  "no-special-char-rule": "Darf folgende Zeichen nicht enthalten: Akzente, nicht-lateinische Zeichen, andere als die erlaubten Sonderzeichen"
                },
                "password-strength": {
                  "medium": "Passwortstärke: mittel",
                  "good": "Passwortstärke: gut"
                },
                "actions": {
                  "save": "Speichern",
                  "cancel": "Abbrechen"
                }
              },
              "options": {
                "title": "Berechtigungen",
                "title-password": "Postfach-Passwort verwalten",
                "password-management": "Passwortänderung aktivieren",
                "password-management-message": "Ermöglicht dem Postfachbenutzer, das Passwort selbst zurückzusetzen. Ist diese Funktion nicht aktiviert, muss sich der Benutzer an den Domain-Administrator (Postmaster) wenden.",
                "password-management-multiuser": "Der aktivierte Multiuser erlaubt keine Änderung des Status der Passwortverwaltung des Postfachs.",
                "password-expire": "Passwortablauf aktivieren",
                "password-expire-message": "Legen Sie einen anderen Passwortablauf fest als den im Bereich „Allgemein“ für alle Domain-Postfächer verwendeten.",
                "password-reset": "Passwort-Zurücksetzung bei der ersten Anmeldung aktivieren.",
                "password-reset-message": "Bei der ersten Anmeldung am Postfach wird der Benutzer aufgefordert, ein neues Passwort festzulegen.",
                "password-reset-info": "Sie haben die Passwort-Zurücksetzung am <strong>{{date}} aktiviert. Der Hauptbenutzer hat das Passwort noch nicht geändert.</strong>",
                "expire-every": "Läuft ab alle",
                "alert-expire": "Ablaufwarnung",
                "days": "{{days}} Tage"
              },
              "im": {
                "title": "Chat",
                "status": "Chat aktivieren",
                "status-message": "Postfachbenutzern derselben Domain erlauben, per Chat miteinander zu kommunizieren."
              },
              "success-edit": "Änderungen gespeichert"
            },
            "space": {
              "promo-title": "Dienste zur Erweiterung Ihres Postfachspeichers",
              "space-usage": {
                "size": "{{size}} MB von {{maxSize}} MB",
                "size-unlimited": "{{size}} MB",
                "giga-slot": "<strong>({{slot}} GigaMail)</strong>",
                "unlimited-label": "Unbegrenzter E-Mail-Speicher"
              },
              "module": {
                "messages": "Nachrichtenspeicher",
                "archive": "Archivspeicher"
              },
              "features": {
                "most-chosen": "am beliebtesten",
                "gigamail": {
                  "title": "GigaMail",
                  "message": "Speicherkapazität um {{sizeInGiga}} GB erhöhen. Sie können bis zu {{max}} hinzufügen, insgesamt höchstens {{total}} GB.",
                  "buy-now": "GigaMail holen",
                  "apply": "GigaMail anwenden",
                  "remove": "Alle entfernen",
                  "counter": "{{count}} GigaMail"
                },
                "unlimited": {
                  "title": "Unbegrenzter E-Mail-Speicher",
                  "message": "Bietet Ihnen unbegrenzten Speicher für alle gewünschten E-Mails und Anhänge.",
                  "buy-now": "Unbegrenzten E-Mail-Speicher holen",
                  "apply": "Unbegrenzten E-Mail-Speicher anwenden",
                  "remove": "Unbegrenzten E-Mail-Speicher entfernen"
                }
              },
              "remove-gigamail-dialog": {
                "header": "Möchten Sie GigaMail entfernen?",
                "message-module": {
                  "messages": "Durch das Entfernen dieses Dienstes wird die Speicherkapazität wieder auf 1 GB reduziert. <p>Bereits im Nachrichtenspeicher vorhandene Nachrichten oder Anhänge werden nicht gelöscht.</p>",
                  "archive": "Durch das Entfernen dieses Dienstes wird die Speicherkapazität wieder auf 1 GB reduziert. <p>Bereits im Archivspeicher vorhandene Nachrichten oder Anhänge werden nicht gelöscht.</p>"
                },
                "confirm": "Entfernen",
                "cancel": "Abbrechen"
              },
              "apply-gigamail-dialog": {
                "header": "Möchten Sie GigaMail anwenden?",
                "message": "<p>Mit GigaMail</p> können Sie diesen Speicher auf {{sizeInGiga}} GB erhöhen. <0>Sie können später weitere hinzufügen, bis maximal {{total}} GB.</0>",
                "confirm": "Anwenden",
                "cancel": "Abbrechen"
              },
              "apply-unlimited-dialog": {
                "header": "Möchten Sie unbegrenzten E-Mail-Speicher anwenden?",
                "message": "Mit unbegrenztem E-Mail-Speicher erhalten Sie unbegrenzten Speicher für Ihr Postfach, ohne Nachrichten oder Anhänge löschen zu müssen.",
                "message-with-gigamail": "Wenn Sie bestätigen, werden die bereits angewendeten GigaMails durch unbegrenzten E-Mail-Speicher ersetzt und stehen wieder für andere Postfächer zur Verfügung.",
                "confirm": "Anwenden",
                "cancel": "Abbrechen"
              },
              "remove-unlimited-dialog": {
                "header": "Möchten Sie den unbegrenzten E-Mail-Speicher entfernen?",
                "message": "Durch das Entfernen dieses Dienstes wird die Kapazität dieses Speichers wieder auf 1 GB reduziert.",
                "confirm": "Entfernen",
                "cancel": "Abbrechen"
              }
            },
            "forward-reply": {
              "forward": {
                "title": "Automatische Weiterleitung",
                "enable": "Automatische Weiterleitung für alle eingehenden Nachrichten aktivieren",
                "options": {
                  "0": "Alle eingehenden Nachrichten ohne Warnung endgültig löschen",
                  "1": "Alle eingehenden Nachrichten automatisch weiterleiten an:"
                },
                "email-address": "E-Mail-Adresse",
                "email-address-placeholder": "Z. B. mario@{{domain}}",
                "keep-copy": "Eine Kopie gesendeter Nachrichten im Posteingang speichern.",
                "email-not-valid": "Gültige E-Mail-Adresse eingeben"
              },
              "reply": {
                "title": "Automatische Antwort",
                "enable": "Automatische Antwort aktivieren",
                "options": {
                  "0": "Immer automatisch antworten",
                  "1": "Für einen festgelegten Zeitraum automatisch antworten"
                },
                "start": "Startdatum",
                "end": "Enddatum",
                "notes": "Persönliche Nachricht hinzufügen",
                "notes-placeholder": "Nachricht eingeben",
                "ext": "Eingehende Nachrichten von Absendern außerhalb der Domain",
                "external": {
                  "different-choice": "Eine andere Einstellung für externe Absender an {{email}} aktivieren",
                  "options": {
                    "0": "Keine automatische Antwort senden",
                    "1": "Persönliche Nachricht senden"
                  }
                },
                "send-max-prefix": "Höchstens",
                "send-max-middle": "automatische Antworten an dieselbe Person alle",
                "send-max-suffix": "Stunden senden."
              },
              "toast": {
                "success-edit-settings": "Änderungen gespeichert",
                "error-edit-settings": "Änderungen konnten nicht gespeichert werden"
              }
            },
            "archive": {
              "upsale": {
                "title": "Schützen Sie Ihre E-Mails",
                "message": "<strong>Führen Sie ein Upgrade auf Business Mail durch</strong>, um <strong>das Sicherheitsarchiv zu erhalten</strong>, einen eigenen Speicherbereich, in dem automatisch Kopien aller Nachrichten und Anhänge gesichert werden.",
                "buy-business-mail": "Business Mail holen"
              },
              "activate": {
                "title": "Schützen Sie Ihre E-Mails",
                "message": "Das Sicherheitsarchiv ist ein Speicherbereich für Kopien gesendeter und empfangener Nachrichten und Anhänge, damit Ihre gesamte Korrespondenz geschützt ist. Dieser Speicher ist in Ihrem Tarif enthalten.",
                "action": "Archiv aktivieren"
              },
              "state": {
                "title": "Archivstatus",
                "enabled": "Archiv aktiviert",
                "disable": "Deaktivieren",
                "disable-message": "Wenn Sie fortfahren, gehen alle Nachrichten und Inhalte im Sicherheitsarchiv verloren."
              },
              "space": {
                "title": "Verbleibender Speicher",
                "manage": "Im Bereich Speicher verwalten",
                "space-usage": {
                  "title": "Archivspeicher",
                  "size": "{{size}} MB von {{maxSize}} MB",
                  "size-unlimited": "{{size}} MB",
                  "giga-slot": "<strong>({{slot}} GigaMail)</strong>",
                  "unlimited-label": "Unbegrenzter E-Mail-Speicher"
                }
              },
              "permissions": {
                "title": "Berechtigungen",
                "read-only": "Archiv schreibgeschützt",
                "read-only-message": "Kopierte Nachrichten können nicht verschoben oder gelöscht werden.",
                "write-access": "Archiv mit Schreibzugriff",
                "write-access-message": "Wird das Archiv im Schreibmodus aktiviert, können kopierte Nachrichten verschoben oder gelöscht werden.",
                "imap-access": "Zugriff auf das Archiv über IMAP",
                "imap-access-message": "Mit dieser Funktion können Sie mit E-Mail-Programmen (Outlook, Thunderbird usw.) auf das Sicherheitsarchiv zugreifen.",
                "disable-write-access-dialog": {
                  "header": "Möchten Sie den Schreibmodus des Archivs deaktivieren?",
                  "message": "Wenn Sie den Schreibmodus des Archivs deaktivieren, können keine Nachrichten mehr verschoben oder gelöscht werden.",
                  "confirm": "Deaktivieren",
                  "cancel": "Abbrechen"
                }
              },
              "settings": {
                "title": "Einstellungen",
                "retention": "Automatisch löschen",
                "retention-message": "Wenn Sie die Löscheinstellungen aktivieren, können Sie festlegen, wann Elemente im Sicherheitsarchiv automatisch gelöscht werden.",
                "retention-months": "Archivierte E-Mails löschen nach",
                "retention-months-item": "{{months}} Monaten",
                "enable-retention-dialog": {
                  "header": "Möchten Sie die Löscheinstellungen aktivieren?",
                  "message": "Wenn Sie die Löscheinstellungen aktivieren, wird der Inhalt des Archivspeichers im gewählten Intervall automatisch gelöscht.",
                  "confirm": "Aktivieren",
                  "cancel": "Abbrechen"
                }
              },
              "delete-dialog": {
                "header": "Möchten Sie das Sicherheitsarchiv wirklich deaktivieren?",
                "warning": "Beim Deaktivieren des Archivs werden alle darin gespeicherten Nachrichten gelöscht.",
                "message": "Ich bestätige, dass ich das Sicherheitsarchiv deaktivieren und gespeicherte Nachrichten und Anhänge endgültig löschen möchte.",
                "confirm": "Archiv deaktivieren",
                "cancel": "Abbrechen",
                "success-delete": "Archiv deaktiviert."
              }
            },
            "multiuser": {
              "two-factor-unavailable": {
                "title": "Multiuser kann nicht aktiviert werden.",
                "message": "Wenn <strong>für das Postfach die Bestätigung in zwei Schritten aktiviert ist</strong>, können Sie keine Multiuser-Konten erstellen."
              },
              "two-factor-active": {
                "title": "Für dieses Postfach ist die Bestätigung in zwei Schritten aktiviert",
                "message": "Alle zugehörigen Multiuser müssen sie aktivieren, um auf das Postfach zuzugreifen."
              },
              "title": "Multiuser",
              "message": "Erstellen Sie ein <strong>Multiuser</strong>-Konto und lassen Sie andere <strong>Ihr Postfach verwalten</strong> – mit <strong>Berechtigungen</strong> „Nur Lesen“, „Lesen und bearbeiten“ oder „Vollständig“.",
              "create-account": "Konto erstellen",
              "activate": {
                "title": "Multiuser aktivieren",
                "message": "Mit <strong>Multiuser</strong> können Sie <strong>die Verwaltung dieses Postfachs</strong> anderen Personen mit einem Postfach bei {{domain}} <strong>gemäß den von Ihnen gewählten Berechtigungen anvertrauen.</strong>",
                "action": "Multiuser aktivieren",
                "warning-require-passsword-manage": "Um die Multiuser-Funktion für dieses Postfach zu aktivieren, erlauben Sie dem Benutzer, sein Passwort selbst zu ändern.",
                "go-to-password-manage": "Zur Verwaltung des Postfach-Passworts"
              },
              "state": {
                "title": "Multiuser-Status",
                "enabled": "Aktiviert",
                "disable": "Deaktiviert",
                "disable-message": "Wenn Sie Multiuser deaktivieren, verlieren Sie alle erstellten Postfächer."
              },
              "disable-dialog": {
                "header": "Möchten Sie Multiuser deaktivieren?",
                "message": "Beim Deaktivieren verlieren Sie alle erstellten Postfächer.",
                "confirm": "Deaktivieren",
                "cancel": "Abbrechen"
              }
            }
          }
        },
        "meeting-rooms": {
          "title": "Büros und Besprechungsräume",
          "subtitle": "Erstellen Sie Büros und anschließend Besprechungsräume, die alle von Ihnen verwalteten Postfächer für Besprechungen reservieren können.",
          "add-office": "Neues Büro",
          "add-room": "Raum hinzufügen",
          "office": {
            "name": "Name des Büros",
            "address": "Adresse"
          },
          "room": {
            "name": "Name des Raums",
            "capacity": "Kapazität:",
            "resources": "Ausstattung:",
            "person": " Person",
            "people": " Personen"
          },
          "table": {
            "title": "Liste der Büros und Besprechungsräume",
            "open-detail-tooltip": "Details ansehen"
          },
          "empty-table": {
            "message": "Keine Büros und Besprechungsräume gefunden",
            "action": "Neues Büro"
          },
          "dialogs": {
            "create-office": {
              "header": "Neues Büro erstellen",
              "edit-header": "Büro bearbeiten",
              "name": "Name des Büros",
              "name_placeholder": "Z. B. Büro Florenz",
              "address": "Adresse",
              "address_placeholder": "Z. B. Viale Europa 22",
              "buttons": {
                "save": "Speichern",
                "cancel": "Abbrechen"
              },
              "errors": {
                "name-not-valid": "Name eingeben",
                "address-not-valid": "Adresse eingeben"
              },
              "toast": {
                "success": "Büro erstellt",
                "success-edit": "Büro geändert",
                "error": "Beim Erstellen des Büros ist ein Fehler aufgetreten"
              }
            },
            "create-room": {
              "header": "Besprechungsraum erstellen",
              "edit-header": "Besprechungsraum bearbeiten",
              "name": "Name des Raums",
              "name_placeholder": "Z. B. Raum im Erdgeschoss",
              "capacity": "Kapazität",
              "capacity_placeholder": "0",
              "optional": "optional",
              "resources": "Verfügbare Ausstattung",
              "resources_placeholder": "Z. B. Beamer, TV usw.",
              "buttons": {
                "save": "Speichern",
                "cancel": "Abbrechen"
              },
              "toast": {
                "success": "Besprechungsraum erstellt",
                "success-edit": "Besprechungsraum geändert",
                "error": "Besprechungsräume konnten nicht erstellt werden"
              }
            },
            "delete-office": {
              "header": "Büro löschen",
              "message": "Möchten Sie das Büro und alle zugehörigen Besprechungsräume wirklich löschen?",
              "buttons": {
                "delete": "Löschen",
                "cancel": "Abbrechen"
              },
              "toast": {
                "success": "Büro gelöscht",
                "error": "Beim Löschen des Büros ist ein Fehler aufgetreten"
              }
            },
            "delete-room": {
              "header": "Besprechungsraum löschen",
              "message": "Möchten Sie diesen Besprechungsraum wirklich löschen?",
              "buttons": {
                "delete": "Löschen",
                "cancel": "Abbrechen"
              },
              "toast": {
                "success": "Besprechungsraum gelöscht",
                "error": "Beim Löschen der Besprechungsräume ist ein Fehler aufgetreten"
              }
            }
          }
        },
        "appearance": {
          "title": "Erscheinungsbild",
          "subtitle": "Passen Sie die Darstellung Ihrer Webmail an – vom Logo bis zum Design.",
          "custom-warning": "Dunkles Design deaktivieren. Wenn Sie einen anderen als den Standardstil wählen, können alle Postfächer nur ein helles Design verwenden.",
          "logo": {
            "title": "Logo",
            "max-resolution": "Maximale Größe: 180 x 49 Pixel",
            "max-size": "Maximale Größe: 64 KB"
          },
          "actions": {
            "apply-to-domain": "Auf Domain anwenden",
            "reset-default": "Standard wiederherstellen"
          },
          "toast": {
            "max-size": "Die Größe darf 64 KB nicht überschreiten.",
            "success": "Änderungen gespeichert, aber nicht auf die Domain angewendet",
            "success-domain": "Erscheinungsbild auf die Domain angewendet"
          },
          "dialog": {
            "color-picker": {
              "header": {
                "title": "Eigenes Design erstellen"
              },
              "alert": {
                "title": "Wählen Sie eine dunkle Farbe",
                "message": "Wir empfehlen dunkle Farbtöne, da sie besser erkennbar sind. Bei zu hellen Farben sind manche Elemente schwer zu erkennen."
              },
              "confirm": "Bestätigen",
              "cancel": "Abbrechen"
            }
          },
          "themes": {
            "title": "Stil",
            "subtitle": "Wählen Sie einen der optimierten und barrierefreien Stile, die mögliche Sehschwierigkeiten berücksichtigen, oder erstellen Sie Ihre eigene Version.",
            "aruba": "Aruba",
            "nostalgic": "Nostalgisch",
            "carbon": "Carbon",
            "botanical": "Botanisch",
            "modern": "Modern",
            "custom": "Meine Version"
          }
        },
        "autoresponders": {
          "title": "Autoresponder",
          "subtitle": "Erstellen Sie eine oder mehrere virtuelle Adressen, die den Absendern von Nachrichten an ein bestimmtes reales Postfach eine Standardantwort senden.",
          "new-autoresponder": "Neuer Autoresponder",
          "autoresponders-list": "Liste der Autoresponder",
          "optional": "(optional)",
          "table": {
            "autoresponder-address": "Autoresponder-Adresse",
            "receiving-mailbox": "Empfängerpostfach",
            "empty-list": "Kein Autoresponder erstellt",
            "selection-action": {
              "delete": "Löschen",
              "export": "Alle exportieren",
              "edit": "Bearbeiten"
            },
            "delete-dialog": {
              "header": "Autoresponder löschen",
              "question": "Möchten Sie den Autoresponder wirklich endgültig löschen?",
              "question-multiple": "Möchten Sie die ausgewählten Autoresponder wirklich endgültig löschen?",
              "confirmButtonText": "Autoresponder löschen",
              "confirmButtonText-multiple": "Autoresponder löschen",
              "cancelButtonText": "Abbrechen",
              "success-toast": "Autoresponder gelöscht.",
              "success-toast-multiple": "Autoresponder gelöscht."
            },
            "create-dialog": {
              "title": "Neuer Autoresponder",
              "limit-exceeded": "Sie haben die maximale Anzahl an Autorespondern überschritten",
              "mail-autoresponder": "Autoresponder-E-Mail",
              "mail-autoresponder-placeholder": "Z. B. reservierungen",
              "mail-autoresponder-hint": "Virtuelles Postfach, das auf ein reales Postfach umleitet.",
              "auto-mex": "Autoresponder",
              "auto-mex-placeholder": "Nachricht eingeben...",
              "auto-mex-hint": "Antwort, die automatisch an jeden gesendet wird, der eine E-Mail an die virtuelle Adresse schickt.",
              "receiving-mailbox": "Empfängerpostfach (reales Postfach)",
              "receiving-mailbox-optional": "optional",
              "receiving-mailbox-placeholder": "Z. B. giulia@domainname.xx",
              "receiving-mailbox-hint": "Reales Postfach, an das die vom Autoresponder empfangenen Nachrichten gesendet werden",
              "success-toast": "Autoresponder erstellt."
            }
          },
          "details": {
            "title": "Autoresponder bearbeiten",
            "sub-title": "Wählen Sie die Einstellungen für den Autoresponder",
            "general": {
              "title": "Allgemein",
              "title-receiver": "Empfängerpostfach",
              "paragraph-receiver": "Alle an diesen Autoresponder gesendeten E-Mails gehen auch an das Empfängerpostfach. Bitte geben Sie eine gültige, aktuelle E-Mail-Adresse an.",
              "placeholder-receiver": "mario@domainname.it",
              "title-auto-answer": "Automatische Antwort",
              "paragraph-auto-answer": "Geben Sie unten die Nachricht ein, die automatisch an alle gesendet wird, die diesem Autoresponder schreiben.",
              "textarea-title-auto-answer": "Autoresponder",
              "placeholder-auto-answer": "Dies ist eine automatische Nachricht",
              "success-toast": " Autoresponder-Einstellungen gespeichert."
            },
            "anti-spam": {
              "title": "Antispam",
              "empty-secure-blocked-address": "Keine Adresse gefunden"
            },
            "delete": "Löschen"
          },
          "dialog": {
            "error": {
              "text-not-valid": "Nachricht eingeben",
              "email-not-valid": "E-Mail-Adresse eingeben"
            }
          }
        },
        "mailing-list": {
          "title": "Mailingliste",
          "sub-title": "Erstellen Sie eine Adressliste oder eine begrenzte Personengruppe, die bestimmte Informationen erhält oder in den E-Mail-Austausch zu gemeinsamen Themen einbezogen wird.",
          "actions": {
            "new": "Neue Mailingliste",
            "details": "Details",
            "add-subscriber": "Abonnenten hinzufügen",
            "edit": "Bearbeiten",
            "export": "Exportieren",
            "delete": "Löschen"
          },
          "table": {
            "title": "Mailinglisten",
            "email": "Name der Mailingliste",
            "state": "Status",
            "subscribers": "Abonnenten",
            "empty-message": "Keine Mailinglisten gefunden",
            "empty-message-subscribers": "Keine Abonnenten gefunden",
            "actions": {
              "select-all": "Alle auswählen ({{count}})",
              "cancel-select-all": "Auswahl aufheben"
            }
          },
          "create-mailing-list-dialog": {
            "header": "Neue Mailingliste",
            "limit-exceeded": "Sie haben die maximale Anzahl an Mailinglisten überschritten",
            "message": "Geben Sie eine Kontakt-E-Mail-Adresse an, speichern Sie und richten Sie dann die Parameter Ihrer Mailingliste über „Bearbeiten“ ein.",
            "label": "E-Mail-Adresse",
            "placeholder": "z. B. IT-Abteilung",
            "error": "Benutzernamen ohne @ eingeben",
            "error-spaces": "Der Name der Mailingliste darf keine Leerzeichen enthalten",
            "confirm": "Speichern",
            "cancel": "Abbrechen",
            "success-toast": "Mailingliste erstellt"
          },
          "delete-mailing-list-dialog": {
            "header": "Mailingliste löschen",
            "message": "Möchten Sie die ausgewählten Mailinglisten wirklich löschen?",
            "confirm": "Löschen",
            "cancel": "Abbrechen",
            "success-delete": "Mailingliste gelöscht",
            "success-multiple-delete": "Mailinglisten gelöscht",
            "error": "Mailingliste konnte nicht gelöscht werden"
          },
          "add-subscriber-dialog": {
            "header": "Adresse hinzufügen",
            "label": "E-Mail-Adresse",
            "placeholder": "Z. B. abonnent@domain.it",
            "email-not-valid": "Gültige E-Mail-Adresse eingeben",
            "confirm": "Speichern",
            "cancel": "Abbrechen",
            "success-toast": "E-Mail-Adresse hinzugefügt"
          },
          "details": {
            "delete": "Löschen",
            "export-all": "Alle exportieren",
            "tabs": {
              "subscribers": "Abonnenten",
              "subscribers-digest": "Digest-Abonnenten",
              "settings": "Einstellungen",
              "administrator": "Administratoren",
              "moderator": "Moderatoren",
              "antispam": "Antispam"
            },
            "administrator": {
              "title": "Administratoren",
              "subtitle": "Wählen Sie die Berechtigungen jedes Administrators für die Mailingliste",
              "button-navigate": "Unter Allgemein verwalten",
              "table": {
                "headers": {
                  "email": "E-Mail-Adresse",
                  "permissions": "Berechtigungen der Mailingliste"
                },
                "selctions": {
                  "only-read": "Nur Lesen",
                  "write-read": "Lesen und Schreiben"
                },
                "toast-update": "Einstellungen aktualisiert."
              }
            },
            "title": "Einstellungen der Mailingliste",
            "sub-title": "Wählen Sie, wie Sie Ihre Mailingliste anpassen.",
            "subscribers": {
              "title": "Abonnenten der Mailingliste",
              "title-digest": "Digest-Abonnenten",
              "message": "Geben Sie die E-Mail-Adressen ein, die die Mailingliste abonnieren sollen, oder importieren Sie sie",
              "message-digest": "Geben Sie E-Mail-Adressen für den Digest ein oder importieren Sie sie, damit sie regelmäßig eine Sammelnachricht mit mehreren Nachrichten erhalten.",
              "actions": {
                "create": "Adresse hinzufügen",
                "import": "Adressen importieren",
                "digest-settings": "Bedingungen in den Einstellungen verwalten"
              },
              "email": "E-Mail-Adressen",
              "delete-dialog": {
                "header": "Adressen löschen",
                "message": "Möchten Sie die ausgewählten Adressen wirklich löschen?",
                "confirm": "Löschen",
                "cancel": "Abbrechen"
              },
              "success-import": "E-Mail-Adressen importiert",
              "success-export": "E-Mail-Adressen exportiert",
              "success-delete": "E-Mail-Adresse gelöscht",
              "success-delete-multi": "E-Mail-Adressen gelöscht"
            },
            "settings": {
              "permission": {
                "title": "Berechtigungen",
                "writing": {
                  "title": "Schreiben",
                  "mailing-list-type": {
                    "label": "Wählen Sie, wer Nachrichten an die Mailingliste senden darf",
                    "ClosedWithRejection": "Nur registrierte Benutzer, andere werden abgelehnt.",
                    "DomainOpen": "Nur Absender innerhalb der Domain. Andere werden abgelehnt.",
                    "ModeratedWithRejection": "Nur der Moderator, andere werden abgelehnt.",
                    "ModeratedWithApproval": "Nur Moderatoren. Andere benötigen die Freigabe des Moderators.",
                    "ClosedWithApproval": "Nur Abonnenten und der Moderator. Andere benötigen die Freigabe des Moderators.",
                    "Open": "Alle"
                  },
                  "reply-to": {
                    "label": "Jeder kann antworten an",
                    "OriginalSender": "Ursprünglicher Absender (Moderator)",
                    "EntireList": "Mailingliste",
                    "EmailAddress": "Alternative Adresse",
                    "reply-address": "E-Mail-Adresse",
                    "reply-address-placeholder": "E-Mail-Adresse"
                  }
                },
                "administration-command": {
                  "title": "Admin-Befehle",
                  "remote-administration": {
                    "title": "Moderatorberechtigungen",
                    "label": "Senden von Admin-Befehlen aktivieren",
                    "limit-access": "Abonnement, Löschen und Erstellen von Digests nur für diese aktivieren",
                    "view-subscribers": "Abonnenten und Suchen das Einsehen der Liste erlauben",
                    "editing-files": "Bearbeiten von Textdateien aktivieren (Trailer, Nachrichten, Digest, Hilfe usw.)"
                  },
                  "options": {
                    "title": "Abonnentenberechtigungen, Domain-Postfächer, externe Postfächer",
                    "reg-unreg-options": "Abonnement, Löschen und Erstellen von Digests aktivieren",
                    "moderator-approval": "Freigabe durch einen Moderator für Abonnementanfragen verlangen",
                    "email-on-subscription": "Bestätigungs-E-Mail beim Abonnieren der Mailingliste senden",
                    "email-on-unsubscription": "Bestätigungs-E-Mail beim Abbestellen der Mailingliste senden",
                    "service-request": "Senden von Befehlen an {{mailingList}}-request aktivieren"
                  },
                  "help": {
                    "title": "Sie kennen die Admin-Befehle nicht?",
                    "message": "Admin-Befehle sind per E-Mail gesendete Anfragen, um bestimmte Aktionen wie Anmeldung, Löschung usw. auszuführen.",
                    "go-to-guide": "Mehr dazu in der Anleitung"
                  }
                }
              },
              "archive": {
                "title": "Nachrichtenarchiv",
                "enable": "Archivierung von Nachrichten der Liste aktivieren",
                "access-mode": {
                  "label": "Archivzugriff",
                  "OpenToAll": "Offen für alle",
                  "SubscribersOnly": "Nur Abonnenten",
                  "ModeratorsOnly": "Nur Moderatoren"
                }
              },
              "digest": {
                "title": "Digest",
                "enable": "Geplanten Versand an die Mailingliste aktivieren",
                "message": "Wählen Sie, wann Ihre Nachrichten an die Mailingliste gesendet werden.",
                "time": {
                  "label": "Senden alle",
                  "hours": "Stunden",
                  "days": "Tage",
                  "weeks": "Wochen"
                },
                "number": {
                  "label": "Senden alle",
                  "suffix": "Nachrichten"
                },
                "size": {
                  "label": "Senden, wenn die Nachrichtengröße erreicht"
                }
              },
              "other-options": {
                "title": "Weitere Optionen",
                "general": {
                  "title": "Allgemeine Einstellungen",
                  "list-owner": "E-Mail-Adresse des Mailinglisten-Administrators",
                  "optional": "optional",
                  "placeholder": "Z. B. name@nomedominio.it",
                  "message": "Wer E-Mails an namemailinglist-owner@domainname.ext erhält"
                },
                "custom-email-template": {
                  "title": "E-Mail-Vorlage anpassen",
                  "prefix": {
                    "list-owner": "Eigenes Kennzeichen in der Nachricht",
                    "optional": "optional",
                    "placeholder": "Text eingeben",
                    "message": "Der Text wird in eckige Klammern gesetzt"
                  },
                  "footer": {
                    "switch": "Fußnoten aktivieren",
                    "label": "Fußnoten",
                    "optional": "optional",
                    "message": "Zum Abbestellen schreiben Sie an: namemailinglist-unsubscribe@domainname.ext<br> Weitere Befehle erfahren Sie unter: namemailinglist-help@domainname.tld"
                  }
                }
              },
              "email-not-valid": "Gültige Adresse eingeben",
              "toast-success": "Änderungen gespeichert"
            },
            "moderators": {
              "title": "Moderatoren",
              "subtitle": "Erstellen oder importieren Sie eine Liste von Moderatoren, die an die Mailingliste senden, neue Abonnenten freigeben und vieles mehr können.",
              "go-to-settings": "Berechtigungen in den Einstellungen verwalten",
              "list-title": "Liste der Moderatoren",
              "actions": {
                "add": "Neuer Moderator",
                "import": "Adressen importieren",
                "delete": "Löschen"
              },
              "table": {
                "columns": {
                  "email": "E-Mail-Adresse",
                  "action": ""
                },
                "empty": "Keine Moderatoren gefunden"
              },
              "toast": {
                "success-add": "Moderator hinzugefügt",
                "success-import": "E-Mail-Adressen importiert",
                "success-delete": "E-Mail-Adresse gelöscht",
                "success-delete-multiple": "E-Mail-Adressen gelöscht",
                "success-export-multiple": "E-Mail-Adressen exportiert"
              },
              "dialogs": {
                "add-moderator": {
                  "title": "Moderator hinzufügen",
                  "email": {
                    "label": "E-Mail-Adresse",
                    "placeholder": "z. B. IT-Abteilung",
                    "not-valid": "Gültige E-Mail-Adresse eingeben"
                  },
                  "actions": {
                    "save": "Speichern",
                    "cancel": "Abbrechen"
                  },
                  "toast": {
                    "success": "Moderator hinzugefügt"
                  }
                },
                "delete-moderator": {
                  "header": "Möchten Sie den Moderator löschen?",
                  "question": "Möchten Sie die E-Mail-Adresse {{moderator}} wirklich aus der Liste der Moderatoren löschen?",
                  "delete": "Löschen",
                  "cancel": "Abbrechen"
                }
              }
            }
          },
          "notifications": {
            "update-state": {
              "success": "Der Status der Mailingliste wurde aktualisiert",
              "error": "Der Status der Mailingliste konnte nicht aktualisiert werden"
            }
          }
        },
        "alias": {
          "title": "Alias",
          "subtitle": "Erstellen Sie eine virtuelle E-Mail-Adresse, die auf ein bestehendes Postfach umleitet und Ihre echte E-Mail-Adresse privat hält.",
          "add-alias": "Neuer Alias",
          "title-subtitle": "Alias-Liste",
          "no-alias-created": "Kein Alias erstellt",
          "remove-email": "E-Mail entfernen",
          "banners": {
            "add-destination-failed": {
              "title": "Die E-Mail-Adresse kann nicht hinzugefügt werden",
              "message": "Sie haben die maximale Anzahl an Adressen erreicht"
            },
            "import-destinations-failed": {
              "title": "Die E-Mail-Adressen können nicht importiert werden",
              "message": "Sie haben die maximale Anzahl an Adressen erreicht"
            }
          },
          "table": {
            "download": "Alle exportieren",
            "header": {
              "alias-address": "Alias-Adresse",
              "real-address": "Bestehende E-Mail-Adresse"
            },
            "sections": {
              "edit": "Bearbeiten",
              "export": "Exportieren",
              "delete": "Löschen"
            }
          },
          "details": {
            "title": "Alias bearbeiten",
            "sub-title": "Wählen Sie die Einstellungen für den Alias",
            "tabs": {
              "real-email-address": "Bestehende E-Mail-Adresse",
              "antispam": "Antispam"
            }
          },
          "toast": {
            "creation-success": "Alias erstellt.",
            "destination": {
              "creation-success": "E-Mail-Adresse hinzugefügt",
              "creation-success-plural": "E-Mail-Adressen hinzugefügt",
              "deletion-success": "E-Mail-Adresse entfernt"
            },
            "deletion": {
              "singular": "Alias gelöscht",
              "plural": "Aliase gelöscht"
            },
            "limit-exceeded": "Sie haben die maximale Anzahl an Aliasen überschritten",
            "no-email-addresses": "Die ausgewählte Datei enthält keine E-Mail-Adressen."
          },
          "new-alias": {
            "title": "Neuer Alias",
            "alias-email": "Alias-E-Mail-Adresse",
            "alias-email-placeholder": "Z. B. 123",
            "real-address": "Bestehende E-Mail-Adresse",
            "real-address-placeholder": "Z. B. postfachname@example.com",
            "added-emails": "E-Mail-Adressen hinzugefügt",
            "add": "Einfügen",
            "import-address": "Adressen importieren",
            "general-hint": "Der Empfangsalias ist ein virtuelles Postfach, das auf das reale Postfach umleitet",
            "sub-hint": "Die realen E-Mail-Adressen sind ein oder mehrere tatsächliche Postfächer, an die die vom Alias empfangenen Nachrichten gesendet werden.",
            "buttons": {
              "save": "Speichern",
              "cancel": "Abbrechen"
            },
            "errorValidation": {
              "email": "E-Mail-Adresse eingeben",
              "duplicate": "Diese E-Mail-Adresse ist bereits in der Liste"
            }
          },
          "delete-alias": {
            "header": "Alias löschen",
            "question": {
              "singular": "Möchten Sie den Alias wirklich endgültig löschen?",
              "plural": "Möchten Sie die ausgewählten Aliase wirklich endgültig löschen?"
            },
            "buttons": {
              "delete": "Löschen",
              "cancel": "Abbrechen"
            }
          }
        }
      },
      "dialogs": {
        "limit-number-user": {
          "title": "Maximale Anzahl an Postfächern",
          "message": "Sie haben die maximale Anzahl an Postfächern in Ihrem Tarif erreicht. Um weitere zu aktivieren, kaufen Sie den Dienst Unbegrenzte E-Mail-Konten.",
          "confirm": "Zum Dienst",
          "cancel": "Abbrechen"
        }
      }
    },
    "task": {
      "drag-drop-move-messages": "{{number}} Aufgaben verschieben",
      "move-task": {
        "success-toast-move": "Die ausgewählte Aufgabe wurde verschoben",
        "success-toast-move-multiple": "Die ausgewählten Aufgaben wurden verschoben",
        "error-toast-move": "Aufgabe konnte nicht verschoben werden",
        "error-toast-move-multiple": "Aufgaben konnten nicht verschoben werden"
      },
      "search": {
        "placeholder": "Aufgabe suchen..."
      },
      "label": "Aufgabe",
      "list": {
        "my-activities": "Meine Aufgaben",
        "empty": {
          "title": "Keine Aufgaben gefunden",
          "subtitle": "Behalten Sie Ihre Aufgaben, Ihren Arbeitstag und Ihre Verpflichtungen besser im Blick!",
          "description": "Halten Sie Ihre To-do-Liste mit diesem Werkzeug griffbereit. Verfolgen Sie Startdatum, Fälligkeit, Priorität und Status Ihrer Aufgaben. Jetzt loslegen!"
        },
        "pagination": {
          "pages": "Seite {{currentPage}} von {{totalPages}}"
        },
        "header": {
          "choose-action": "Aktion auswählen",
          "actions": {
            "edit": "Bearbeiten",
            "duplicate": "Duplizieren",
            "move": "Verschieben",
            "delete": "Löschen",
            "set-priority": "Priorität",
            "set-status": "Status",
            "state": {
              "1": "Zu erledigen",
              "2": "In Bearbeitung",
              "3": "Erledigt",
              "4": "Verschoben",
              "5": "Ausstehend"
            },
            "priority": {
              "2": "Niedrig",
              "3": "Normal",
              "4": "Hoch"
            }
          }
        },
        "toast": {
          "generic-edit": "Änderungen gespeichert."
        }
      },
      "sidebar": {
        "collapse-menu": "Minimieren",
        "expand-menu": "Erweitern",
        "actions": {
          "folder": {
            "edit": "Bearbeiten",
            "share": "Teilen",
            "delete": "Löschen"
          }
        },
        "add": {
          "label": "Neue Aufgabe",
          "task": "Neue Aufgabe erstellen",
          "task-list": "Neue Liste erstellen"
        },
        "empty": {
          "shared-task-list": "Keine geteilte Liste"
        },
        "personal-task-list": "Persönlich",
        "task-list": "Meine Listen",
        "shared-task-list": "Weitere Listen",
        "new-list": "Neue Liste"
      },
      "columns": {
        "list": "Liste",
        "activity-name": "Aufgabenname",
        "priority": "Priorität",
        "state": "Status",
        "initial-date": "Startdatum",
        "due": "Ablaufdatum"
      },
      "filters": {
        "all": "Alle",
        "done": "Erledigt",
        "to-do": "Zu erledigen",
        "on-going": "In Bearbeitung",
        "on-waiting": "Ausstehend",
        "postponed": "Verschoben",
        "exclude-done": "Erledigte ausblenden"
      },
      "sorts": {
        "newer": "Startdatum (neueste)",
        "older": "Startdatum (früheste)",
        "due-soon": "Fälligkeitsdatum (neueste)",
        "due-late": "Fälligkeitsdatum (älteste)",
        "more-priority": "Priorität (höchste)",
        "less-priority": "Priorität (niedrigste)",
        "state-done": "Status (Erledigt)",
        "state-on-going": "Status (In Bearbeitung)",
        "name-a-z": "Name (A–Z)",
        "name-z-a": "Name (Z–A)"
      },
      "dialog": {
        "share": {
          "title": "Freigabe und Berechtigungen",
          "sub-title": "Aufgabenliste {{listName}}",
          "message": "Teilen Sie die Aufgabenliste per E-Mail-Einladung. Sie können festlegen, wer Zugriff hat, und die Einstellungen jederzeit ändern.",
          "domain_message": "Sie können die Aufgabenliste nur mit Mitgliedern Ihrer Domain {{domain}} teilen",
          "email": "Teilen mit",
          "edit_shared": {
            "message": "Möchten Sie {{email}} wirklich Lese- und Schreibzugriff auf die Aufgabenliste {{name}} gewähren?"
          },
          "delete_shared": {
            "message": "Möchten Sie den Zugriff für {{email}} wirklich widerrufen?"
          }
        }
      },
      "dialogs": {
        "create-task-list": {
          "message": {
            "name-not-valid": "Name eingeben"
          },
          "title": "Neue Aufgabenliste",
          "edit-title": "Aufgabenliste bearbeiten",
          "edit-shared-task-title": "Geteilte Liste bearbeiten",
          "name": "Name der Aufgabenliste",
          "information-card": {
            "owner": "Eigentümer",
            "rights": "Zugriffsrechte",
            "readonly": "Nur Lesen",
            "write-delete": "Lesen und Schreiben"
          },
          "toasts": {
            "success-create": "Aufgabenliste erstellt",
            "success-edit": "Änderungen gespeichert",
            "error-edit": "Aufgabenliste konnte nicht umbenannt werden",
            "error-create": "Aufgabenliste konnte nicht erstellt werden"
          },
          "actions": {
            "save": "Speichern",
            "edit": "Bearbeiten",
            "cancel": "Abbrechen"
          }
        },
        "delete-dialog": {
          "header-shared": "Möchten Sie die geteilte Liste löschen?",
          "header": "Aufgabenliste löschen",
          "message-shared": "Wenn Sie die geteilte Liste {{folderName}} löschen, haben Sie keinen Zugriff mehr auf die enthaltenen Elemente.",
          "message": "Möchten Sie die ausgewählte Liste mit allen enthaltenen Aufgaben wirklich löschen?",
          "buttons": {
            "delete-shared": "Entfernen",
            "delete": "Löschen",
            "cancel": "Abbrechen"
          },
          "toast": {
            "success": "Liste gelöscht",
            "success-shared": "Geteilte Liste gelöscht",
            "error": "Liste konnte nicht gelöscht werden",
            "error-shared": "Geteilte Liste konnte nicht gelöscht werden"
          }
        },
        "delete-task": {
          "confirm-header": "Aufgabe löschen",
          "confirm-question": "Möchten Sie die ausgewählte Aufgabe wirklich endgültig löschen?",
          "confirm-question-multiple": "Möchten Sie die ausgewählten Aufgaben wirklich endgültig löschen?",
          "confirm": "Löschen",
          "cancel": "Abbrechen",
          "success-toast": "Aufgabe gelöscht",
          "success-toast-multiple": "Die ausgewählten Aufgaben wurden gelöscht",
          "error-toast": "Beim Löschen der ausgewählten Aufgabe ist ein Fehler aufgetreten",
          "error-toast-multiple": "Ausgewählte Aufgaben konnten nicht gelöscht werden"
        }
      },
      "detail": {
        "label": "Details",
        "information-card": {
          "begin-date": "Startdatum",
          "end-date": "Ablaufdatum",
          "notes": "Notizen"
        }
      },
      "priorities": {
        "low": "Niedrig",
        "normal": "Normal",
        "high": "Hoch"
      },
      "validators-error": {
        "date-error": "Die Fälligkeit muss nach dem Startdatum liegen"
      },
      "status": {
        "to-do": "Zu erledigen",
        "on-going": "In Bearbeitung",
        "done": "Erledigt",
        "postponed": "Verschoben",
        "waiting": "Wartet auf jemand anderen"
      },
      "toast": {
        "edit": "Änderungen gespeichert.",
        "duplicate": "Aufgabe dupliziert",
        "new-task-success": "Aufgabe erstellt.",
        "duplicate-waring": "Sie versuchen, eine Aufgabe aus einer schreibgeschützten Liste zu bearbeiten. Eine Kopie dieser Aufgabe wird in Ihrer persönlichen Aufgabenliste gespeichert.",
        "task-list": {
          "share": {
            "success": "Aufgabenliste geteilt."
          }
        }
      },
      "action": {
        "task": "Neue Aufgabe erstellen",
        "task-list": "Neue Liste erstellen"
      },
      "new-task": {
        "message": {
          "name-not-valid": "Name eingeben"
        },
        "alert": {
          "title": "Aufgabe duplizieren",
          "message": "Sie duplizieren diese Aufgabe aus einer schreibgeschützten Liste. Wählen Sie eine der verfügbaren Listen, in der die Aufgabe gespeichert werden soll."
        },
        "title": "Neue Aufgabe",
        "name": "Aufgabenname",
        "dates-placeholder": "TT/MM/JJJJ",
        "begin-date": "Startdatum",
        "due-date": "Ablaufdatum",
        "priority": "Priorität",
        "state": "Status",
        "list": "Aufgabenliste",
        "placeholder-text-area": "Schreiben",
        "notes": "Notizen",
        "actions": {
          "save": "Speichern",
          "cancel": "Abbrechen"
        }
      },
      "edit-task": {
        "alert": {
          "title": "Aufgabe duplizieren",
          "message": "Sie duplizieren diese Aufgabe aus einer schreibgeschützten Liste. Wählen Sie eine der verfügbaren Listen, in der die Aufgabe gespeichert werden soll."
        },
        "title": "Aufgabe bearbeiten",
        "name": "Aufgabenname",
        "dates-placeholder": "TT/MM/JJJJ",
        "begin-date": "Startdatum",
        "due-date": "Ablaufdatum",
        "priority": "Priorität",
        "state": "Status",
        "list": "Aufgabenliste",
        "placeholder-text-area": "Schreiben",
        "notes": "Notizen",
        "actions": {
          "save": "Speichern",
          "cancel": "Abbrechen"
        }
      },
      "duplicate-task": {
        "alert": {
          "title": "Aufgabe duplizieren",
          "message": "Sie duplizieren diese Aufgabe aus einer schreibgeschützten Liste. Wählen Sie eine der verfügbaren Listen, in der die Aufgabe gespeichert werden soll."
        },
        "title": "Aufgabe bearbeiten",
        "name": "Aufgabenname",
        "dates-placeholder": "TT/MM/JJJJ",
        "begin-date": "Startdatum",
        "due-date": "Ablaufdatum",
        "priority": "Priorität",
        "state": "Status",
        "list": "Aufgabenliste",
        "placeholder-text-area": "Schreiben",
        "notes": "Notizen",
        "actions": {
          "save": "Duplizieren",
          "cancel": "Abbrechen"
        }
      },
      "modal-sheet": {
        "action": {
          "title": "Weitere Optionen"
        }
      }
    },
    "notes": {
      "label": "Notizen",
      "search": {
        "placeholder": "Notiz suchen..."
      },
      "first-header": {
        "sort-header": "Sortieren nach...",
        "sort": {
          "creation-date-asc": "Erstellungsdatum (neueste)",
          "creation-date-desc": "Erstellungsdatum (älteste)",
          "modified-date-desc": "Bearbeitungsdatum (neueste)",
          "modified-date-asc": "Bearbeitungsdatum (älteste)",
          "name-asc": "Name (A–Z)",
          "name-desc": "Name (Z–A)"
        }
      },
      "second-header": {
        "label": "Notizen"
      },
      "sidebar": {
        "my-notes": "Meine Notizen",
        "new": "Neue Notiz",
        "notepades": "Notizbücher",
        "notepades-shared": "Weitere Notizbücher",
        "add-notebook": "Neues Notizbuch",
        "add-note-menu-button": "Neue Notiz erstellen",
        "add-notebook-menu-button": "Neues Notizbuch erstellen",
        "notepades-shared-count-0": "Kein Notizbuch geteilt",
        "actions": {
          "edit": "Bearbeiten",
          "share": "Teilen",
          "delete": "Löschen",
          "remove": "Entfernen"
        }
      },
      "list": {
        "empty": {
          "title": "Keine Notizen gefunden",
          "text": "Nutzen Sie diesen Bereich, um schnell Ideen und To-dos festzuhalten, Erinnerungen zu notieren oder einfach Ihre Gedanken zu sammeln."
        },
        "search": "Suchergebnisse"
      },
      "dialog": {
        "note": {
          "delete": {
            "title": "Notiz löschen",
            "multi-notes-message": "Möchten Sie die ausgewählten Notizen wirklich endgültig löschen?",
            "one-note-message": "Möchten Sie die ausgewählte Notiz wirklich endgültig löschen?",
            "multi-notes-header": "Notizen löschen",
            "one-note-header": "Notiz löschen",
            "confirm": "Löschen",
            "cancel": "Abbrechen"
          },
          "create": {
            "title": "Neue Notiz",
            "labels": {
              "title": "Titel",
              "notebook": "Notizbuch",
              "select": "Auswählen"
            },
            "placeholder": "Notiz schreiben...",
            "buttons": {
              "create": "Erstellen"
            }
          },
          "edit": {
            "title": "Notiz bearbeiten",
            "buttons": {
              "modifica": "Speichern",
              "palette": "Farbe wählen",
              "send-mail-to-contact": "E-Mail verfassen",
              "delete": "Notiz löschen",
              "print": "Drucken"
            }
          },
          "message": {
            "title-not-valid": "Titel eingeben"
          },
          "duplicate": {
            "labels": {
              "title": "Notiz duplizieren",
              "message": "Sie kopieren diese Notiz aus einem schreibgeschützten Notizbuch. Wählen Sie ein bestehendes Notizbuch zum Speichern oder erstellen Sie ein neues."
            }
          }
        },
        "notebook": {
          "create": {
            "title": "Notizbuch erstellen",
            "name": "Name des Notizbuchs",
            "confirm": "Speichern",
            "cancel": "Abbrechen"
          },
          "edit": {
            "title": "Notizbuch bearbeiten",
            "confirm": "Bearbeiten"
          },
          "delete": {
            "title": "Notizbuch löschen",
            "message": "Möchten Sie das ausgewählte Notizbuch mit allen Notizen wirklich löschen?",
            "header": "Notizbuch löschen",
            "confirm": "Löschen",
            "cancel": "Abbrechen"
          },
          "message": {
            "name-not-valid": "Name eingeben"
          },
          "edit_shared": {
            "title": "Bearbeiten",
            "name_label": "Name des Notizbuchs",
            "user_label": "Eigentümer:",
            "right_label": "Zugriffsrechte:",
            "save": "Speichern",
            "cancel": "Abbrechen",
            "allow_full_access": "Vollzugriff",
            "allow_readonly": "nur Lesen"
          },
          "delete_shared": {
            "title": "Möchten Sie das geteilte Notizbuch löschen?",
            "message": "Wenn Sie das geteilte Notizbuch {{notebook}} löschen, haben Sie keinen Zugriff mehr auf die enthaltenen Notizen.",
            "confirm": "Entfernen",
            "cancel": "Abbrechen"
          }
        },
        "share": {
          "title": "Notizbuch teilen",
          "subtitle": "Notizbuch {{notebook}}",
          "message": "Teilen Sie das Notizbuch per E-Mail-Einladung. Sie können festlegen, wer Zugriff hat, und die Einstellungen jederzeit ändern.",
          "domain_message": "Sie können das Notizbuch nur mit Mitgliedern Ihrer Domain {{domain}} teilen",
          "email": "Teilen mit",
          "edit_shared": {
            "message": "Möchten Sie <b>{{email}}</b> wirklich Zugriff <b>{{rights}}</b> auf <b>{{name}}</b> gewähren?"
          },
          "delete_shared": {
            "message": "Möchten Sie die Freigabe von <b>{{name}}</b> für <b>{{email}}</b> wirklich beenden?"
          }
        }
      },
      "action": {
        "send-mail-to-contact": "E-Mail verfassen",
        "delete": "Notiz löschen",
        "duplicate": "Duplizieren",
        "edit": "Bearbeiten",
        "palette": "Farbe wählen",
        "move": "Verschieben",
        "addNote": "Neue Notiz erstellen",
        "addNotebook": "Neues Notizbuch erstellen",
        "dots-separator": "Mehr",
        "print": "Drucken"
      },
      "toast": {
        "note": {
          "create": {
            "success": "Notiz erstellt",
            "fail": "Beim Erstellen der Notizen ist ein Fehler aufgetreten"
          },
          "edit": {
            "success": "Änderungen gespeichert",
            "fail": "Beim Bearbeiten der Notiz ist ein Fehler aufgetreten"
          },
          "duplicate": {
            "success": "Notiz dupliziert",
            "fail": "Beim Duplizieren der Notizen ist ein Fehler aufgetreten"
          },
          "delete": {
            "one-success": "Die ausgewählte Notiz wurde gelöscht",
            "multi-success": "Die ausgewählten Notizen wurden gelöscht",
            "fail": "Beim Löschen der Notizen ist ein Fehler aufgetreten"
          },
          "move": {
            "one-success": "Die ausgewählte Notiz wurde verschoben",
            "multi-success": "Die ausgewählten Notizen wurden verschoben",
            "fail": "Beim Verschieben der Notizen ist ein Fehler aufgetreten"
          },
          "color": {
            "one-success": "Die ausgewählte Notiz wurde bearbeitet",
            "multi-success": "Die ausgewählten Notizen wurden bearbeitet",
            "fail": "Beim Bearbeiten der Notizen ist ein Fehler aufgetreten"
          }
        },
        "notebook": {
          "create": {
            "success": "Notizbuch erstellt",
            "fail": "Beim Erstellen des Notizbuchs ist ein Fehler aufgetreten"
          },
          "edit": {
            "success": "Notizbuch bearbeitet",
            "fail": "Beim Bearbeiten des Notizbuchs ist ein Fehler aufgetreten"
          },
          "delete": {
            "success": "Notizbuch gelöscht",
            "fail": "Beim Löschen des Notizbuchs ist ein Fehler aufgetreten"
          },
          "share": {
            "success": "Notizbuch geteilt"
          },
          "remove_shared": {
            "success": "Geteiltes Notizbuch gelöscht",
            "fail": "Beim Teilen der Notizbücher ist ein Fehler aufgetreten"
          },
          "edit_shared": {
            "success": "Notizbuch umbenannt",
            "fail": "Beim Umbenennen des geteilten Notizbuchs ist ein Fehler aufgetreten"
          }
        }
      },
      "drag-drop": {
        "move-notes": "{{number}} Notizen verschieben"
      }
    },
    "pec-business-deleted": {
      "banner": {
        "title": "Inhaber nicht gefunden",
        "message": {
          "aruba": "Leider können wir die automatische Überprüfung der Daten des PEC-Inhabers nicht abschließen.",
          "partner": "Leider können wir die automatische Überprüfung der Daten des PEC-Inhabers nicht abschließen. Bitte wenden Sie sich an den Dienstanbieter."
        }
      },
      "menu": {
        "title": "Inhaber nicht gefunden",
        "message": {
          "aruba": "Leider können wir die automatische Überprüfung der Daten des PEC-Inhabers nicht abschließen.",
          "partner": "Leider können wir die automatische Überprüfung der Daten des PEC-Inhabers nicht abschließen. Bitte wenden Sie sich an den Dienstanbieter."
        },
        "tag-label": "Identität",
        "tag-text": "Inhaber nicht gefunden",
        "guide-label": "Mehr Details"
      },
      "settings": {
        "title": "Inhaber nicht gefunden",
        "message": {
          "aruba": "Leider können wir die automatische Überprüfung der Daten des PEC-Inhabers nicht abschließen.",
          "partner": "Leider können wir die automatische Überprüfung der Daten des PEC-Inhabers nicht abschließen. Bitte wenden Sie sich an den Dienstanbieter."
        }
      },
      "action": "Beheben"
    },
    "bypass-block": {
      "skip-to-last-received-message": "Zur zuletzt empfangenen Nachricht",
      "skip-to-message-creation": "Zum Verfassen einer Nachricht",
      "skip-to-inbox-folder": "Zum Posteingang",
      "go-to-settings": "Zu den Einstellungen"
    },
    "page-search": {
      "placeholder": "Seiten durchsuchen"
    }
  },
  "override": {
    "application": {
      "title": "PEC-Webmail"
    },
    "generic": {
      "dialog": {
        "software-update": {
          "message": "Um die aktualisierten Funktionen und Neuerungen der PEC-Webmail zu nutzen, laden Sie die Seite neu."
        }
      }
    }
  }
};
