import ConceptCard from "./ConceptCard"

let concepts = [
    {
        title: "Roles",
        desc: `Team - Teamet är de som arbetar med de olika uppgifterna och man blir oftast delad en uppgift som är baserad på ens egna färdigheter och specialitetsområden. Detta gör att arbetet går smidigt genom att ha 'rätt man på rätt plats'.  Scrum Master Scrum Master har i uppgift att hjälpa teamet med att hantera information mellan teamet, men är inte direkt en ledare för Teamet. De ser till att underlätta interaktioner och utbyten av information mellan teamet. Samt att de håller koll på att alla följer de regler som är uppsatta för projektet. En Scrum Master ser till att teamet följer 'best practices' genom projektets gång. Produktägare - En produktägare är ansvarig för att maximera produktiviteten och resultatet från Teamet. Produktägaren skall tydligt kommunicera ut målen, skapa en tydlig backlog. Och även lägga till nya mål till backloggen. Produktägaren ser till att backlogen är transparent och tydlig så att den skall vara förstådd av alla inblandade. `
    },
    {
        title: "Backlog",
        desc: "Backlogen ägs av produktägaren och det är en TODO-lista där produktägaren bestämmer vad det är för saker som skall ingå i listan. Produktägaren markerar även ut värdet/viktigheten i de olika TODO-items (issues) och på så sätt får teamet som arbetar med det sen bedöma svårigheten/ungefärlig tidsram för respektive item. Och på så sätt bestämma vilken ordning/prioritering på dessa items och hur de skall hanteras. "
    },
    {
        title: "Sprint",
        desc: "En sprint är en tidsbestämd iteration av arbetscykeln. När man sätter upp en sprint så planerar man att vara klar med de items som placeras i sprinten inom en viss tid.Det är arbetssysslor som man hämtar från backlogen och man sätter då fokus på just dessa. Scrum projekt är uppdelade i sprintar, och för varje sprint så 'lägger man krut' på att fixa de utvalda delarna av projektet. Tidsramen för sprintar är dock inte satta i sten, de kan vara ett par dagar eller några veckor. Men rent generellt är de oftast inte längre än en månad. "
    },
    {
        title: "Sprint Planning",
        desc: "Innan en sprint påbörjas så görs det en planering för sprinten. Produktägaren ser till att lyfta fram de mest viktiga produkterna från backloggen och diskuterar det med teamet. "
    },
    {
        title: "Scrum artifacts",
        desc: ""
    },
    {
        title: "Sprint Review",
        desc: ""
    },
    {
        title: "Sprint retrospective",
        desc: ""
    },
    {
        title: "Agile estimation",
        desc: ""
    }
]


console.log(concepts)

export default function ConceptList() {
    return (
        concepts.map((concept) => (
            <ConceptCard title={concept.title} desc={concept.desc} />
        ))
    )
}