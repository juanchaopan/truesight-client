import { Application, extend, useApplication } from '@pixi/react';
import { Assets } from 'pixi.js';

import {useEffect, useState} from 'react';

import {
    AnimatedSprite,
    GifSprite,
    Graphics,
    LayoutAnimatedSprite,
    LayoutContainer,
    LayoutGifSprite,
    LayoutGraphics,
    LayoutMesh,
    LayoutMeshPlane,
    LayoutMeshRope,
    LayoutMeshSimple,
    LayoutNineSliceSprite,
    LayoutPerspectiveMesh,
    LayoutSprite,
    LayoutTilingSprite,
    Mesh,
    MeshPlane,
    MeshRope,
    MeshSimple,
    NineSliceSprite,
    PerspectiveMesh,
    Sprite,
    TilingSprite,
} from '@pixi/layout/components';

// extend tells @pixi/react what PixiJS components are available
extend({
    GifSprite,
    Graphics,
    Mesh,
    PerspectiveMesh,
    MeshPlane,
    MeshRope,
    MeshSimple,
    Sprite,
    NineSliceSprite,
    TilingSprite,
    AnimatedSprite,
    LayoutContainer,
    LayoutGifSprite,
    LayoutGraphics,
    LayoutMesh,
    LayoutPerspectiveMesh,
    LayoutMeshPlane,
    LayoutMeshRope,
    LayoutMeshSimple,
    LayoutSprite,
    LayoutNineSliceSprite,
    LayoutTilingSprite,
    LayoutAnimatedSprite,
});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const LayoutResizer = ({ children }) => {
    const { app } = useApplication();

    useEffect(()=>{
        app.stage.layout = {
            width: 672,
            height: 841,
            justifyContent: 'center',
            alignItems: 'center',
        };

        // listen for resize events on the renderer
        app.renderer.on('resize', () => {
            app.stage.layout = {
                width: window.innerWidth,
                height: window.innerHeight,
            };
        });
    },[app.stage.layout, app.renderer, app.stage])

    return children;
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export default function App({ children, assets }) {
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        const start = async () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            assets ??= [];
            const parsedAssets = assets.map((asset: string) => {
                if (asset.startsWith('https://fakeimg.pl/')) {
                    return {
                        alias: asset,
                        src: asset,
                        loadParser: 'loadTextures',
                    };
                }

                return asset;
            });

            // Perform async initialization here
            await Assets.load(parsedAssets);
            setIsInitialized(true);
        };

        void start();
    }, []);

    if (!isInitialized) {
        return <div>Loading...</div>;
    }

    return (
        <Application resizeTo={window} background={'#1C1C1D'}>
            <LayoutResizer>{children}</LayoutResizer>
        </Application>
    );
}
