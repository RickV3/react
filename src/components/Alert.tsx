import { ReactNode, useEffect, useState } from "react";

interface Props {
    children: ReactNode;
    time?: number;
    color: string;
}

const Alert = ({ children, time = 3000, color }: Props) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(false), time);
        return () => clearTimeout(timer);
    }, [time]);

    if (!visible) return null;

    return (
        <div className={`alert alert-${color}`}>
            {children}
        </div>
    );
};

export default Alert;
