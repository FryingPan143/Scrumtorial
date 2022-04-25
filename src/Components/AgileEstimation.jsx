export default function AgileEstimation() {
    return (

        <article className="concept-box">
            <section className="cb-header">
                <h3>Agile Estimation</h3>
            </section>
            <section className="cb-body">
                <p>
                    Vid en estimering gör både Produktägaren och Teamet en bedömning av de olika arbetsuppgifterna och hur de skall prioriteras baserat på tid/svårighet/viktighet/värde.
                    Produktägaren sätter prioriteringar i backloggen, och rangordnar uppgifterna efter värde och viktighet.
                    Men produktägaren har inte bättre koll än Teamet när det gäller tidsram för arbeten, svårigheter och dylikt.
                    Då sätter teamet en bedömning på uppgifterna baserat på svårighet och tidskrav.
                    <br /><br />
                    Sedan komman man då fram till en Story Point, dvs man tar prioritetspoängen som produktägaren har satt och delar det med svårighetspoängen som teamet har satt.
                    Resultatet är Story Point, och då räknar man in värdet på uppgiften baserat på hur viktig den är samt hur mycket arbete den kräver.
                    Och man skall då beta av de uppgifter med högst story points först.
                    <br /><br />
                    Hur poängsättningen sker är oftast genom en Fibonacciskala.<br />
                    0 1 2 3 5 6 13 21 34 55 89 144


                </p>
            </section>
        </article>
    )
}