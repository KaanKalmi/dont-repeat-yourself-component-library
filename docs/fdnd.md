### FDND Sprint 16 - 17 - 18

## 17-11-2024 
De toggle button voor het vertonen van de volledige agenda naast de sprints, wordt amper gebruikt en is niet goed zichtbaar. 
We hebben de feedback gekregen een aantal weken geleden om de toggle weg te halen en de volledige agenda standaard te tonen. Ik heb dit namelijk geprobeerd, maar in mijn opininie ziet dit er niet professioneel uit. 

Om dit probleem weg te halen heb ik de toggle button een call-to-action kleur gegeven waardoor het een stuk meer opvalt. Zo hoop ik dat de gebruikers van de website de toggle button goed kunnen zien en vaken gebruiken.

```css
  input[type="checkbox"].toggle:checked + label::after {
    content: "";
    transform: translateX(1.5em);
    background: var(--call-to-action);
    color: var(--call-to-action);
  }

  input[type="checkbox"].toggle:hover + label::after,
  input[type="checkbox"].toggle:focus + label::after,
  input[type="checkbox"].toggle:checked:hover + label::after {
    background: var(--call-to-action);
    color: var(--call-to-action);
  }

  input[type="checkbox"].toggle:checked + label::before {
    background-color: var(--blueberry);
    opacity: 0.5;
    border-color: var(--call-to-action);
  }
  ```

  Voor de rest ben ik bezig geweest met een nieuw idee uitschetsen voor de nieuwe layout die ik gedesigned en gecodeerd heb voor de sprintlinks. Ik vind dat het grijs te erg opvalt en heel erg 'saai' overkomt onder de witte secties. Wellicht dat er een kleine achtergrond komt om de grijze vertoning uit de cancelen. 
