import {Application} from "@pixi/react";
import NodeAI from "../../components/node/node-ai/NodeAI.tsx";

export default function Playground3() {
    return (
        <Application width={1600} height={1600} backgroundColor={0xffffff} antialias={true}>
            <NodeAI x={20} y={20} width={720}
                    input={"Explain the term, long long long long long long long long long long long long long long long long \n 2nd 2nd 2nd 2nd 2nd 2nd 2nd 2nd 2nd 2nd 2nd 2nd 2nd  \n 3rd 3rd 3rd 3rd 3rd 3rd 3rd 3rd 3rd 3rd 3rd 3rd 3rd text"}/>
        </Application>
    );
}

