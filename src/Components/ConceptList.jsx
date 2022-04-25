import BacklogConcept from "./BacklogConcept";
import RoleConcept from "./RoleConcept";
import SprintConcept from "./SprintConcept";
import SprintPlanningConcept from "./SprintPlanningConcept";
import ArtifactConcept from "./ArtifactConcept";
import SprintReviewConcept from "./SprintReviewConcept";
import SprintRetrospectiveConcept from "./SprintRetrospectiveConcept";


export default function ConceptList() {
    return (
        <section className="concept-list">
            <RoleConcept />
            <BacklogConcept />
            <SprintConcept />
            <SprintPlanningConcept />
            <ArtifactConcept />
            <SprintReviewConcept />
            <SprintRetrospectiveConcept />
        </section>
    )
}