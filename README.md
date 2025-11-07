```markdown
# uitdev-portfolio

Simple portfolio for UIT (Uthman Sayedi). Dansk single-page site med information om services, projekter og kontakt.

Indhold:
- index.html
- styles.css
- script.js
- README.md
- LICENSE (MIT)
- CNAME (valgfri, indeholder dit domæne: uitdev.dk)

Instruktioner for at oprette repository og uploade filer:

1) Opret et nyt repo på GitHub
   - Navn: `uitdev-portfolio`
   - Beskrivelse: "Portfolio for UIT / Uthman Sayedi"
   - Public (eller privat hvis du foretrækker det)

2) Lokalt (eksempel)
```bash
git init
git add .
git commit -m "Initial commit: simple UIT portfolio"
git branch -M main
git remote add origin https://github.com/UTHMAN_USERNAME/uitdev-portfolio.git
git push -u origin main
```
Erstat `UTHMAN_USERNAME` med dit GitHub-brugernavn (fx `uthman-s`).

3) Hosting på one.com
   - Login til one.com kontrolpanelet.
   - Hvis domænet (uitdev.dk) er hos one.com, tilføj det til dit webhotel og upload filerne til mappen `public_html` via File Manager eller FTP.
   - Hvis domænet er et andet sted, peg domænets nameservers eller A-record til one.com efter deres vejledning (brug de nameservere one.com angiver eller følg kontrolpanelets DNS-instruktioner).
   - Aktivér SSL gennem one.com kontrolpanelet (typisk gratis via deres Let's Encrypt-integration).

FTP (hvis du bruger FTP):
- Server: ftp.one.com (eller den server info one.com giver)
- Brugernavn: dit one.com brugernavn
- Adgangskode: din adgangskode fra one.com

Bemærk: one.com har detaljerede guides i deres hjælpecenter. Hvis du foretrækker at bruge GitHub Pages i stedet, kan jeg også tilpasse siden til det.

4) CNAME (valgfri)
Hvis du ønsker at bruge GitHub Pages (ikke nødvendigt for one.com), tilføj filen `CNAME` med `uitdev.dk`.

Kontakt:
- Email: kontakt@uitdev.dk
- LinkedIn: https://www.linkedin.com/in/uthman-sayedi-a48a2067/

Vil du have, at jeg:
- Opretter GitHub-repo'et for dig (jeg kan ikke oprette det direkte lige nu — jeg kan guide eller lave push-kommandoer)?
- Tilføjer en simpel kontaktformular med Formspree eller lignende (så emails kan sendes uden server)?
```