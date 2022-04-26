export default function Comparison() {
    return (
        <article className="comparison">
            <section className="c-header"><h3>Agil metodik VS Vattenfall</h3></section>
            <section className="c-body">
                Innan agila metoder brukade man använda sig utav Vattenfallsmetoden.
                Det som skiljer agila metoder från den gamla Vattenfall är att i agila metoder så har man vad som kallas för en "iterativ tillvägagångssätt".
                Dvs. att man gör uppgifterna i cyklar, och det går i "omlopp", exempelvis kan en uppgift göras om, ändras, förbättras och dylikt på det sättet.
                <br /><br />
                Medan i vattenfallsmetodiken så kör man ett uppifrån-och-ned sätt, problemet här blir då att om något går fel sedan när man kommit en bit så måste man börja om från scratch.
                <br /><br />
                Flödet i Vattenfall:<br />
                Insamling av data<br />
                Design<br />
                Implementering<br />
                Test<br />
                Leverans<br />
                Underhåll.<br /><br />

                Det är vid testningar som fel oftast upptäcks och då har man redan byggt hela grunden för det och då får hela projektet göras om.
                <br /><br />
                I agila metoder så delar man upp uppgifterna i delar och om något blir fel vid testning så kan just den biten skickas tillbaka i flödet och göras om.
                <br /><br />
                Fördelen med Vattenfall är att det görs en genomgående insamling av data innan någon form av utveckling sker.<br />
                Detta gör att det blir rikt på information och det finns då mycket data tillgängligt även för nya arbetare.<br />
                <br /><br />
                Nackdelen är att allt måste specificeras och nedskrivet innan någon form av utveckling kan ske.
                <br /><br />
                <hr />
                Fördelarna med Agila metoder är att det är enklare att göra förändringar,<br />
                testning görs vid varje del.<br />
                Det kan leverera snabbare och oftare.<br />

                Nackdelen är att om det inte är bra koordinerat så kan det sluta med ett projekt med ändlösa sprintar och kommer aldrig i mål.<br />
                Det har inte lika stort fokus på dokumentation som Vattenfall har.<br />



            </section>
        </article>
    )
}