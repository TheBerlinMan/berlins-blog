import React from "react";
import { Github, Instagram, Mail } from "lucide-react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/app/components/tooltip";

interface IconTooltipProps {
  icon: React.ReactNode;
  content: string;
}

const IconTooltip = ({ icon, content }: IconTooltipProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>{icon}</TooltipTrigger>
        <TooltipContent>
          <p>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const Contact = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-3">
        <IconTooltip icon={<Github />} content="GitHub" />
        <a href="https://github.com/TheBerlinMan">@TheBerlinMan </a>
      </div>
      <div className="flex gap-3">
        <IconTooltip icon={<Instagram />} content="Instagram" />
        <a href="https://www.instagram.com/im.tnma/">@im.tnma</a>
      </div>
      <div className="flex gap-3">
        <IconTooltip icon={<Mail />} content="Email" />
        <p>tommyonik at gmail dot com</p>
      </div>
    </div>
  );
};

export default Contact;
