import { Plus } from "lucide-react"
import { ResumeCardButton } from "../resume-card"

export const AddResumeButton = () => {
    return (
        <ResumeCardButton
            title="Criar novo currículo"
            description="Comece do Zero"
            icon={<Plus size={50} />}
        />
    )
}