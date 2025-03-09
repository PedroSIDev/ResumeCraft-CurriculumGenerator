import {
    Tooltip as TooltipRoot,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "./primitive"
import { ReactNode } from "react";

type ToolTipProps = {
    children: React.ReactNode;
    content: string | number | React.ReactNode;
}

export const ToolTip = ({ children, content }: ToolTipProps) => {
    return (
        <TooltipProvider>
            <TooltipRoot>
                <TooltipTrigger asChild>{children}</TooltipTrigger>
                <TooltipContent>
                    <p>Add to library</p>
                </TooltipContent>
            </TooltipRoot>
        </TooltipProvider>
    )
}