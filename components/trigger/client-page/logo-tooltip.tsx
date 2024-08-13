import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";

interface Props {
  image: { urL: string; width: number; height: number };
  title: string;
  onCLick: () => void;
}

const LogoTooltip: React.FC<Props> = ({ image, title, onCLick }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger onClick={onCLick}>
          <Image
            src={image.urL}
            alt={title}
            width={image.width}
            height={image.height}
          />
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>{title}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default LogoTooltip;
