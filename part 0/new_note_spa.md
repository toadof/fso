```mermaid
sequenceDiagram
    participant browser
    participant server
    Note right of browser:Browser already rendered
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    Note over server: new note in json format
    server-->>browser: Note Created
    Note right of browser: The browser executes the event handler that dislplays the notes
```
