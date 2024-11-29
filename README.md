# FDND Project

Het programma van FDND is te bekijken op https://programma.fdnd.nl/. Hier is informatie te vinden over de semesters en de sprints die het curriculum van FDND vormen. Aan ons is nu de taak om deze website om te bouwen zodat deze beter past bij de studenten.

[![Netlify Status](https://api.netlify.com/api/v1/badges/f528383e-83eb-43c4-8b8e-f88b2e079608/deploy-status)](https://app.netlify.com/sites/hilarious-gumdrop-9fd223/deploys)

## Screenshot
De website live bekijken kan ook! Klik hiervoor op de link: [https://fdnd-programma.netlify.app/](https://fdnd-programma-s16.netlify.app/)  

![image](https://github.com/user-attachments/assets/8b02d733-98d2-45e9-83c6-6c7356bd148a)

## Beschrijving
De Programma pagina moet een rework krijgen, hierbij gaan wij een nieuw design toepassen en hierbij de code refactoren. Denk bij een grote refactor aan het maken van componenten, het opschonen van ongebruikte code etc. Ook wilt de opdrachtgever graag dat we de database switchen van Hygraph naar Directus. De FDND Programma pagina is bedoelt voor studenten, docenten, gastsprekers en partners van de studie FDND. Hier kunnen ze alle informatie vinden over het curriculum van FDND.

## Installatie
Mocht je dit project lokaal willen opzetten? Dat kan! Volg dan de volgende stappen: 
1. Clone de repository:
   ````
   git clone https://github.com/jouw-gebruikersnaam/jouw-repository-naam.git
   ````
2. Ga naar de projectmap:
   ````
   cd jouw-repository-naam
   ````
3. Installeer de vereiste dependencies:
   ````
   npm install
   ````
4. Voeg de environment-variables toe in een `.env` bestand: (vraag de benodigde info aan de product-owner)
   ````
   VITE_GITHUB_ENDPOINT = ''
   VITE_GITHUB_PERSONAL_ACCESS_TOKEN = ''
   VITE_HYPGRAPH_ENDPOINT = ''
   ````
5. Start de ontwikkelserver:
   ````
   npm run dev
   ````

## Bronnen
Projectboard: [Backlog](https://github.com/orgs/fdnd-agency/projects/39)

## Licentie
![GNU GPL V3](https://www.gnu.org/graphics/gplv3-127x51.png)
