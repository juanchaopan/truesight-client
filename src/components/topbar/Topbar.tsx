import type {HTMLAttributes} from "react";
import "./Topbar.css";
import logo from "../../assets/logo-cropped-transparent.png";

type Props = HTMLAttributes<HTMLDivElement> & {}

export default function Topbar(props: Props) {
    return (
        <div className={`toolbar ${props.className}`}>
            <img className="toolbar-logo" src={logo} alt="logo"/>
            <div className="toolbar-subscription">
                <span className="toolbar-subscription-product">TrueSight</span>
                <span className="toolbar-subscription-status-upgrade">Get Premium</span>
            </div>
        </div>
    );
}