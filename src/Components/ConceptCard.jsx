export default function ConceptCard(props) {
    return (
        <article className="concept-card">
            <div className="cc-header">
                <h2>{props.title}</h2>
            </div>
            <div className="cc-body">
                <p>{props.desc}</p>
            </div>

        </article>
    )
}