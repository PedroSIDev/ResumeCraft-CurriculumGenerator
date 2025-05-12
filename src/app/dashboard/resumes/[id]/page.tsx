import { ResumePage } from "@/components/pages/dashboard/resume";
import { getResumeById } from "@/db/queries";
import { notFound } from "next/navigation";

type DashboardResumesPageProps = {
    params: { id: string };
}

export default async function DashboardResumePage({ params }: DashboardResumesPageProps) {
    const resumeId = params.id;

    const resume = await getResumeById(resumeId);

    if (!resume) return notFound();

    console.log("Resume: ", resume);

    return (
        <ResumePage />
    );
}