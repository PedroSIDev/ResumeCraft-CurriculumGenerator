import { Button } from "@/components/ui/button";
import { ToolTip } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils"
import { on } from "events";
import { Download, RotateCcw, ZoomIn, ZoomOut } from "lucide-react"
import { useControls } from "react-zoom-pan-pinch"

export const TransformControls = () => {
    const { zoomIn, zoomOut, centerView } = useControls();
    const controls = [
        {
            icon: ZoomIn,
            label: "Aumentar Zoom",
            onClick: () => zoomIn(0.2),
        },
        {
            icon: ZoomOut,
            label: "Diminuir Zoom",
            onClick: () => zoomOut(0.2),
        },
        {
            icon: RotateCcw,
            label: "Resetar Posição",
            onClick: () => centerView(0.5),
        },
        {
            icon: Download,
            label: "Baixar PDF",
            onClick: () => console.log("Download PDF"),
        }
    ];

    return (
        <div
            className={cn(
                "absolute left-1/2 -translate-x-1/2 bottom-4 z-10 bg-background border border-muted",
                "py-3 px-4 rounded-full flex items-center gap-2"
            )}
        >
            {controls.map((control) => (
                <ToolTip key={control.label} content={control.label}>
                    <Button
                        variant="secondary"
                        className="w-6 h-5 bg-transparent"
                        size="icon"
                        onClick={control.onClick}
                    >
                        <control.icon size={16} />
                    </Button>
                </ToolTip>
            ))}
        </div>
    )
}