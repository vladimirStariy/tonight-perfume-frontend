import { FC, useState } from "react";

interface IDropdownInterface {
    title: string;
    
}

const TonightDropdown: FC = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }

    return <>
        <div>
            asd
        </div>
    </>
}

export default TonightDropdown;