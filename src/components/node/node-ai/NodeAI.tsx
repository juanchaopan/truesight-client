import {useContext, useEffect, useState} from "react";
import {Assets, Texture} from "pixi.js";
import {SettingsContext} from "../../../context/settings/Context.ts";
// import iconOpenai from "./openai.svg";
import iconOpenai from "./openai.svg";

type NodeAIProps = {
    x: number;
    y: number;
    width: number;
    input: string;
}

export default function NodeAI(props: NodeAIProps) {
    const [iconTexture, setIconTexture] = useState(Texture.EMPTY);
    const {settings} = useContext(SettingsContext);
    const icon = settings.aiProvider === "openai" ? iconOpenai : iconOpenai;
    const title = settings.aiProvider === "openai" ? "OpenAI" : "OpenAI";


    useEffect(() => {
        (async () => setIconTexture(await Assets.load(icon)))();
    }, [icon, iconTexture]);

    return (
        // <pixiSprite texture={iconTexture}/>
        //
        <pixiContainer x={props.x} y={props.y} layout={{
            flexDirection: "column",
            width: props.width,
            height: "auto",
            justifyContent: "flex-start",
            alignItems: "center",
        }}>
            <pixiContainer layout={{
                flexDirection: "row",
                width: "100%",
                height: 40,
                justifyContent: "flex-start",
                alignItems: "center",
            }}>
                <pixiSprite layout={{width: 'intrinsic', height: 'intrinsic'}} texture={iconTexture}/>
                <pixiText layout={{width: 'intrinsic', height: 'intrinsic'}} text={title} style={{fontSize: 32, fill: "#000000"}}/>
                <pixiGraphics draw={(g) => {
                    // graphics.clear();
                    // graphics.moveTo(10, 0);
                    // graphics.lineTo(props.width - 10, 0);
                    // graphics.arcTo(props.width, 0, props.width, 10, 10);
                    // graphics.lineTo(props.width, 40);
                    // graphics.lineTo(0, 40);
                    // graphics.lineTo(0, 10);
                    // graphics.arcTo(0, 0, 10, 0, 10);
                    // graphics.closePath();
                    // graphics.setFillStyle({color: '#e4e4e4'});
                    // graphics.fill();
                    // graphics.setStrokeStyle({color: '#dadada', width: 2});
                    // graphics.stroke();
                }}/>
            </pixiContainer>
        </pixiContainer>
    );
}
