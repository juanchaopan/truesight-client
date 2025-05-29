import { Application  } from "@pixi/react";

export default function Playground() {


    return (
        <Application width={800} height={600} resolution={4}>
            <pixiGraphics draw={(graphics) => {
                graphics.clear();
                graphics.setFillStyle({ color: 'green' });
                graphics.rect(0, 0, 100, 100);
                graphics.fill();
            }} />
        </Application>
    );
}