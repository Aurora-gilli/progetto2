# progetto
```
> A Vue.js project
```
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Azioni possibili:

Registrazione al sito:
- Login con username
- Logout

### All'interno della navigazione
Nella pagina Discover:
- possibilità di visualizzare varie playlist di default
- ogni card rimanda ad una pagina dove sarà possibile visualizzare il contenuto di ogni singola playlist musicale, ogni canzone viene rappresentata tramite card
- ogni canzone rimanda alla rispettiva pagina di dettaglio dove vengono mostrate varie informazioni della rispettiva canzone
- è possibile salvare la singola canzone sia dalla card che la rappresenta nella pagina dove viene visualizzata la playlist sia all'interno della pagina di dettaglio della canzone stessa attraverso un bottone

Nella pagina Search:
- inserendo un titolo di una canzone esistente e il rispettivo artista la ricerca rimanderà alla pagina dove potrà vedere i dettagli della canzone ricercata
- qualora la ricerca non sia andata a buon fine comparirà un messaggio di errore sulla pagina stessa della ricerca

Nella pagina Favorites:
- in caso di assenza di canzoni sarà visualizzato un messaggio empy state
- se l'utente ha già salvato delle canzoni ritroverà in questa pagina le card rispettive

### API utilizzata
TheAudioDB
