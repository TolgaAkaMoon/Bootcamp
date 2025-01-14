# Projektopgave HI-FI Corner

**Varighed:** 10 dage<br>
**Start:** Dato kommer <br>
**Slut:** Dato kommer

## Om opgaven
Denne opgave er omhandler opsætning, navigation og hentning af data. Læs hele opgavebeskrivelsen grundigt igennem inden du stiller spørgsmål.

## Opgavebeskrivelse

Du skal fremstille en webapplikation til en HI-FI webbutik, som præsenterer butikkens produkter inddelt efter kategori eller producent. Brugeren af sitet skal nemt og overskueligt kunne finde rundt i de forskellige produkter og evt.(ekstraopgave) kunne fremsøge produkter vha. søgeord. Der er udelukkende tale om præsentation af produkterne, man skal ikke kunne handle produkter på siden.

Opgaven varer ca. 2 uger og omhandler udarbejdelse af en projektplan (eksempelvis ved hjælp af GitHub Projects), designanalyse og datastruktur i en eller flere JSON-filer, samt produktionen af client-side produktet.

Det arbejde der forventes udført når projektet er slut, er en funktionel offentlig tilgængelig client-side som henter data og billeder fra en datakilde. Siden er sat op så den matcher det udleverede design.

Et HI-FI produkt består af et navn, en beskrivelse, en pris, et billede, samt hører til i en kategori og er knyttet til en producent. Du skal selv udtænke hvordan datastrukturen stilles op i JSON.
*(billederne findes i den medfølgende .zip fil, men alle andre produktdata finder du selv på noget, benyt evt https://lipsum.com/feed/html )*

### Tekniske krav

**Client-Side**
* Semantisk korrekt HTML
* Modulært opbygget CSS (Flere css filer)
* Hente data ved hjælp af fetch-api'et. (HTML/ JSON)
* Begrænset data udtræk ved hjælp af url parametre

### Design og layout
Du skal udarbejde en layoutanalyse, som redegør for hvordan elementerne på hjemmesiden er bygget op.<br>
Produktet skal designes efter mobile first princippet, men nødvendigvis ikke implementeret til begge medier *(prioriter desktop varianten som den primære der produceres. Breakpointet der arbejdes udfra er 1280px)*.

### Forslag til arbejdsprocess
* Projekt planlægning: Afklaring af opgavens indhold defineret i et Kanban bord
* Layout: Udarbejdelse af layoutanalyse
* Design datastrukturer i JSON
* GODKENDELSE AF OVENSTÅENDE inden arbjedet fortsættes
* Opsæt HTML sider med dummy-data (statisk site)
* Opret datafiler (JSON)
* Programmér funktioner til dataudtræk
* Byg alle nødvendige fetch, og udskriv data fra fetch

### Sider og indhold
* Forside
* Brand-liste
* Shop-kategorier
* Kategori-liste
* Enkelt produktvisning
 
### Forsiden 
* Forsidetekst og billeder af produkter
* Visning af minimum ét produktbillede (kan være det senest oprettede, et tilfældigt produkt eller andet du finder relevant)
 
### Produktsider
Der er flere forskellige funktioner under produkter:
* Visning af alle produkter inden for en bestemt kategori, uden produkt beskrivelse
* Visning af alle produkter der hører til en bestemt producent, uden produkt beskrivelse
* Visning af ét produkt ved klik på et produkt fra listerne
* Visning af produkter efter søgning 

Alle produkter hentes via et API og udskrives med fetch, alle produkter vises med deres billede.
 
### Alle sider 
* Menu 
* Footer med kontaktinfo 

### Github
* Projektet opsættes i et GitHub Classroom.
* Der skal committes ved væsentlige ændringer eller færdiggørelse af en funktionalitet - og altid inden fyraften.
* Alle commit tekster på GitHub skal kort beskrive ændringerne. **Der må ikke skrives ligegyldige beskrivelser!**.

### Billedfiler
Alle billeder ligger i en zippet fil fordelt i mapper.
Du vælger om alle billeder skal ligge i én mappe eller om du vil bevare mappestrukturen.
Brug følgende liste, hvis I er i tvivl om hvilke kategorier de forskellige billeder tilhører:

**CD Afspillere**

    * creek_classic_cd.jpg
    * creek_Destiny_CD.jpg
    * creek_evo_cd.jpg
    * Exp_2010S_CD.gif


**DVD Afspillere**

    * creek_classic.jpg
    * exposure_2010S.jpg
    * parasound_d200.jpg
    * parasound_halod3.jpg


**Effektforstærkere**

    * manley_mahi.jpg
    * manley_neoclassic300b.jpg
    * manley_snapper.jpg
    * parasound_haloa23.jpg


**Forforstærkere**

    * Creek_OBH_22_Passive_Preamp.jpg
    * parasound_classic7100.jpg
    * parasound_halop3.jpg
    * Project_prebox.jpg


**Int. Forstærkere**

    * creek_a50I.jpg
    * creek_classic5350SE.jpg
    * creek_destinyamp.jpg
    * manley_snapper.jpg
    * Manley_Stingray.jpg
   
   
**Rørforstærkere**

    * jolida_JD102b.jpg
    * jolida_JD202a.jpg
    * jolida_JD300b.jpg
    * jolida_JD302b.jpg
    * jolida_JD502b.jpg 
   
   
**Højtalere**

    * boesendorfer_vcs_wall.gif
    * epos_m5.gif
    * harbeth_hl7es2.jpg
    * harbeth_monitor30.jpg
    * harbeth_p3es2.jpg


**Pladespillere**

    * Pro_ject_Debut_3_bl.jpg
    * Pro_ject_Debut_III_red_1.jpg
    * Pro_ject_Debut_III_yellow_1.jpg
    * Pro_ject_rpm_5.jpg
    * Pro_ject_rpm10.jpg
 

<br><br>
## Ekstraopgaver
Hvis du er hurtigt færdig!

1. Udvikel et billedgalleri til forsiden som skifter mellem billederne på en af følgende måder:
* Automatisk (Timer)
* Manuelt (Ved tryk på pile ikonerne)
* Manuelt (Ved tryk på piletasterne)

2. Indsæt reklmebannere på hjemmesiden. Du skal selv beslutte hvor på siden reklamebannere vil passe ind. Find et API på nettet, som lader dig fetche bannere og indsæt vilkårlige bannere på hjemmesiden.

3. Fritekst-søgefunktion til produkter og producenter (visning på produktsiden)  

---

## **Refleksion efter opgaven**

Når tiden er gået, skal du kort **reflektere over, hvordan det gik**. Dette skal du gøre **skriftligt** i en **"Refleksioner" markdown-fil** i roden af dit repository.

Her er et **eksempel** på, hvordan indholdet af filen kunne se ud:<br>
[Skabeloner/Refleksioner.md](../Skabeloner/Refleksioner.md)

I "Refleksioner" markdown-filen skal der være en **overskrift til hver opgave** du ønsker at skrive om, som vist i ovenstående eksempel.

**Hvis du ikke blev færdig**, skriv kort om hvad der var af **forhindringer**. <br>
Føler du, at du koder for langsomt? <br>
Har du svært ved at finde kode du kan genbruge? <br>
Mister du overblikket?<br>
osv.

**Hvis du syntes det gik godt**, så skriv det. <br>Nævn specielt om du syntes opgaven var **nem** eller **tilpas** og fortæl hvad du synes om den type opgaver. Det er IKKE arrogant at sige, at opgaven er nem! Det er et tegn på, at du er rigtig godt med fagligt.
