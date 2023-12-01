import { FC } from "react";

import './test.css'

import DropDownLink from "./neo-design/testdropdown/dropdown";

const TestScreen: FC = () => {

    return <div style={{marginTop: 200, marginBottom: 200}}>
        <div className="test-container">
            <DropDownLink />
        </div>
    </div>
}

export default TestScreen;