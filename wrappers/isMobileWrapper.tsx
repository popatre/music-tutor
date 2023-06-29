import MobileMessage from "@/components/MobileMessage";
import { useMediaQuery } from "react-responsive";
import { ReactNode } from "react";

interface IsMobileProviderProps {
    children: ReactNode;
}

export default function IsMobileProvider({ children }: IsMobileProviderProps) {
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1000px)" });
    return isTabletOrMobile ? <MobileMessage /> : <>{children}</>;
}
