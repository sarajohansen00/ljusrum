# Från Figma till webb

Bygg din första komponent på fotoworkshopens hemsida. Du får en fungerande sida med ett exempel att byta ut mot din egen design. Under **Admin** finns en plats för arrangörens vy.

## Starta din egen kopia

1. Installera [VS Code](https://code.visualstudio.com/download), [Git](https://git-scm.com/downloads) och [Node.js LTS](https://nodejs.org/en/download). Välj Node 24 LTS eller senare LTS. Öppna VS Code på nytt efter installationen.
2. Logga in på GitHub. Välj [Use this template → Create a new repository](https://github.com/new?template_name=ux26-figma-till-webb&template_owner=davidshore). Välj ditt konto som ägare och ge din kopia ett namn.
3. Öppna **din kopia** på GitHub. Välj **Code → HTTPS** och kopiera adressen. I VS Code, öppna kommandopaletten med **F1**, skriv **Git: Clone**, klistra in adressen, välj en mapp och klicka på **Open** när kopieringen är klar.
4. Välj **Terminal → New Terminal**. Terminalen är rutan där du skriver kommandon. Skriv första raden och tryck Enter. När den är klar, kör nästa rad.

```sh
npm ci
npm run dev
```

Öppna länken efter **Local** i terminalen. När du ser **Fotoworkshopen**, klicka på **Om workshopen** för att fälla ut texten. Låt terminalen vara öppen. Nästa gång räcker det att öppna projektmappen och köra `npm run dev`.

## Koppla Copilot till Figma

Öppna **Copilot Chat** i VS Code, logga in med ditt GitHub-konto och välj **Agent**. Du kan börja med Copilot Free medan du väntar på studentåtkomst. [Ansök om GitHub Education](https://github.com/settings/education/benefits).

Startprojektet innehåller anslutningen till Figmas MCP-server. Tryck **F1** och välj **MCP: List Servers**. Om du ser **figma**, välj den och sedan **Start Server**. När webbläsaren öppnas, logga in med det Figma-konto som kan öppna din design och godkänn anslutningen.

### Om figma saknas i listan

1. Tryck **F1** i VS Code, välj **MCP: Add Server** och sedan **HTTP**.
2. Klistra in `https://mcp.figma.com/mcp` som serveradress. Tryck **Enter**, ange `figma` som namn och välj **Workspace** för att spara anslutningen i ditt projekt.
3. Tryck **F1** och välj **MCP: List Servers → figma → Start Server**. Följ inloggningen i webbläsaren och ge VS Code tillgång till Figma. [Figmas installationsguide för VS Code](https://help.figma.com/hc/en-us/articles/39890361040535-VS-Code-and-Figma-Set-up-the-MCP-server)

### Testa anslutningen

Markera en ram som innehåller en rubrik i Figma. Högerklicka och välj **Copy link to selection**. Klistra in länken i den här frågan i Copilot Chat:

> Läs den här ramen med Figma MCP och berätta vilken rubrik den har: [klistra in länken].

Jämför svaret med rubriken i Figma. Om Copilot inte kan läsa ramen, kontrollera att servern körs och att du kan öppna länken med samma Figma-konto som du använde i VS Code.

## Bygg ett kort från Figma

Markera kortet i mobilramen och välj **Copy link to selection**. Gör samma sak i datorramen. Byt ut hakparenteserna i exemplet mot dina länkar och din layoutregel.

> Läs kortet via Figma MCP. Mobil: [länk]. Dator: [länk]. Bygg min version av WorkshopCard så att den visas på hemsidan. På mobil ska [min layoutregel]. Använd projektets CSS och behåll möjligheten att prova lång text i Storybook. Berätta vilka filer du ändrade.

Jämför webbsidan med Figma. Dra fönstret från smalt till brett och kontrollera text, mellanrum och läsordning. Prova en egen ändring i CSS och spara. Om Figma inte kan läsas, kontrollera att båda länkarna öppnas med samma Figma-konto. Du kan också bifoga exporterade PNG-bilder av kortet och skriva din layoutregel.

## Lägg till en sida från Figma

En sida har en egen adress. För att lägga till exempelvis `/bokning` skapar du en fil i `src/routes`. TanStack Router kopplar filen till adressen när du kör projektet. Återanvändbara delar, till exempel ett workshopkort, ligger i `src/components`.

Kopiera länkarna till sidans mobil- och datorram i Figma. Byt ut hakparenteserna och klistra in i Copilot:

> Läs mina två ramar via Figma MCP. Mobil: [länk]. Dator: [länk]. På sidan ska besökaren kunna [uppgift]. När bredden minskar ska [min layoutregel]. Beskriv först hur du tolkar läsordningen och layouten. Vänta på mitt svar.
>
> När jag godkänt tolkningen, skapa bokningssidan på `/bokning` i `src/routes/bokning.jsx`. Följ mönstret i `admin.jsx`. Lägg till en länk från hemsidan till bokningssidan och bygg den första sektionen med projektets komponenter och CSS.

Klicka på länken från hemsidan, ladda om bokningssidan och prova webbläsarens bakåtknapp. Dra fönstret från smalt till brett och jämför med Figma. Efter publicering, öppna Vercel-adressen med `/bokning` direkt i en ny flik och ladda om.

## Hitta i projektet

| Det du vill ändra | Öppna |
| --- | --- |
| Kortets innehåll och struktur | `src/components/WorkshopCard.jsx` |
| Kortets layout | `src/components/WorkshopCard.css` |
| Gemensamma färger, textstorlekar och avstånd | `src/styles.css` |
| Hemsidan och adminsidan | `src/routes/index.jsx` och `src/routes/admin.jsx` |

## Prova kortet i Storybook

Öppna en **andra** terminal i samma mapp och kör `npm run storybook`. I Storybook väljer du **Komponenter → Workshopkort → Standard**. Ändra **Rubrik** i panelen **Controls**. Välj sedan **Lång rubrik i smal vy** och kontrollera radbrytningen. Under **Stilguide** ser du projektets färger och textroller. Ändra en färg i `src/styles.css`, spara och jämför kortet på webbsidan och i Storybook.

## Spara och publicera när du är redo

I VS Code, öppna **Source Control**, skriv vad du ändrat och välj **Commit**. Om VS Code frågar om filerna ska inkluderas, välj **Yes**. Välj **Sync Changes** för att skicka ändringen till din egen GitHub-kopia.

Logga in på [Vercel](https://vercel.com/new), importera din kopia och välj **Deploy** med förvalet **Vite**. Öppna den publicerade hemsidan och gå sedan direkt till `/admin` och ladda om. Lämna in hemsidans länk när båda vyerna är färdiga.
