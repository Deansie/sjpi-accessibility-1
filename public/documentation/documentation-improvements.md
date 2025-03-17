    1. Läs noga genom koden och identifiera alla tillgänglighetsproblem.
    
    2. Testa kör lighthouse i devtools(Google chrome) och se vilka problem som finns.

    3. Skriv en kort sammanfattning av vad som är fel och hur det kan åtgärdas.

    4. Skriv om koden så att den följer tillgänglighetsstandarder.

    5. Skriv en kort sammanfattning av vad du har ändrat och varför.

    6. Testa din nya kod med andra verktyg för tillgänglighet.

    7. Skriv en kort reflektion över hur det var att göra uppgiften. Vad var svårt? Vad lärde du dig?


        HTML:
    -------------------

    Rad 1: Saknar META-description!

    Rad 29: Inget språk 
            - Skärmläsaren vet inte vilket språk den ska tolka


    Rad 39: Title-dubblett
            - Skärmläsaren läser upp två titlar och orsakar förvirring

    Rad 44: Dålig navigering
            - Väldigt svårnavigerat för personer med hjälpmedel
            - Span har id 1 på alla klasser vilket blir ogiltigt
            - Tabindex felaktigt

    Rad 53: Svåråtkomligt inputfält
            - Inputfält saknar <label> vilket förvirrar Skärmläsaren

    Rad 59: Dold text och klickbar div
            - Den dolda texten har för låg kontrast

    Rad 64: H1 taggar
            - Två h1-taggar förvirrar skärmläsaren

    Rad 68: Marquee 
            - Rullande text är distraherande

    Rad 76: Klickbar artikel
            - En klickbar artikel som inte gör någonting är onödigt och 
            skapar inget värde men är kanske inget direkt tillgänglighetsproblem 

    Rad 80: Bilder
            - Bilderna saknar alt-texten vilket gör dom otillgängliga för 
            skärmläsaren
            - Bilderna syns inte heller eftersom de inte existerar på sidan

    Rad 90: Stor bild
            - Laddar långsamt för användare med långsamma uppkopplingar

    Rad 96: Video
            - Laddar långsamt för användare med långsamma datorer/uppkopplingar
            - En gif som inte använder HTTPS

    Rad 103: Irriterande annons
            - Störande innehåll som inte kan pausas vilket gör sidan otillgänglig för personer med nedsatt kognitiv förmåga



        CSS:
    -------------------

    Rad 6: Font
            - Svårläst font försvårar för användare med nedsatt syn och möjligen även dyslexi

    Rad 11: Färger och textstil
            - Dålig kontrast på bakgrund och text
            - Svår läsbarhet som kan förvirra personer med nedsatt kognitiv förmåga

    Rad 28: Färger och fokusindikator
            - Dålig kontrast mellan bakgrund och text
            - Vilseleder användaren att knappen inte är tillgänglig med cursor: not-allowed

    Rad 39: Nästan osynlig spegelvänd text
            - Förvirrar användaren och gör det otydligt för personer med nedsatt synd och/eller nedsatt
            kognitiv förmåga

    Rad 64: Storlek på font
            - Överdriven storlek kan göra det svårläst för användaren
            - Låg vikt minskar kontrast och läsbarhet
            - Dålig kontrast på textfärg mot bakgrund
 
    Rad 120: Input-fält med låg kontrast
            - Låg kontrast mellan textfärg och bakgrund 

    Rad 130: Input-knapp
            - Låg kontrast mellan textfärg och bakgrund
            - Otydlig markör som saknar fokusindikation
            - Roterad text minskar läsbarheten och kan förvirra användaren

    Rad 150: Distraherande annons
            - Blinkande gradient är distraherande

    Rad 174: Krympande text vid hover
            - Hover som orsakar att texten krymper gör texten oläslig

    Rad 190: Roterande bild
            - Roterande innehåll distraherar användaren


        JavaScript:
    -------------------

    Ta bort att scriptfilen körs, det är bara nonsens däri ändå!


        Ändringar:
    -------------------

    HTML: 
        - Rättade till punkterna som nämnts ovan
        - La till bilderna som saknades i images
        - Ändrade den integrerade videon till en extern länk istället för att inte få varning
        om tredjeparts cookies

    CSS:
        - Rättade till punkterna som nämnts ovan
        - Gjorde många justeringar på padding, marging etc för att få sidan att se någorlunda OK ut

    JS
        - Eftersom all kod som fanns i js-filen var nonsens så valde jag helt enkelt att inte
        ladda in den från sidan.



        Reflektion:
     -------------------
    I denna uppgiften var det väldigt svårt att komma igång att leta felaktigheter eftersom det var så mycket som stal ens fokus.
    Började med att lusläsa koden för att sedan gå igenom DOMen med hjälp av inspektören i webbläsaren, det resulterade i att bland
    annat att all Javascript var tvungen att inaktiveras för att ens kunna fortsätta jobba utan att utveckla Epilepsi. Men det gick,
    och jag tror att resultatet talar för det även om det inte blev någon direkt altartavla!

    Verktyget W3 HTML-Validator tycker jag dessutom fångar upp en hel del som Lighthouse missar eftersom den fokuserar mer på själva 
    koden än användarupplevelsen. 