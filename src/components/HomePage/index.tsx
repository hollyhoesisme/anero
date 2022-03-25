import { useState, useCallback, useEffect, useReducer } from 'react';
import Image from 'next/image';
import {
    MouseParallaxContainer,
    MouseParallaxChild,
} from 'react-parallax-mouse';
import s from './HomePage.module.scss';

export default function HomePage() {
    return (
        <>
            <MouseParallaxContainer className={`${s.splash_container}`}>
                <MouseParallaxChild
                    className={`${s.splash_pieces} ${s.girl}`}
                    factorX={0.03}
                    factorY={0.05}
                >
                    <div
                        className={`${s.splash_pieces} ${s.girl}`}
                        style={{
                            backgroundImage: `url(/static/img/homepage/girl.png)`,
                        }}
                    ></div>
                </MouseParallaxChild>
                <MouseParallaxChild
                    className={`${s.splash_pieces} ${s.guy}`}
                    factorX={0.01}
                    factorY={0.03}
                >
                    <div
                        className={`${s.splash_pieces} ${s.guy}`}
                        style={{
                            backgroundImage: `url(/static/img/homepage/guy.png)`,
                        }}
                    ></div>
                </MouseParallaxChild>
                <MouseParallaxChild
                    className={`${s.splash_pieces} ${s.background}`}
                    factorX={0.02}
                    factorY={0.03}
                >
                    <div
                        className={`${s.splash_pieces} ${s.background}`}
                        style={{
                            backgroundImage: `url(/static/img/homepage/background.png)`,
                        }}
                    ></div>
                </MouseParallaxChild>
            </MouseParallaxContainer>
            {/* <div className={`${s.splash_container}`}>
                <div
                    className={`${s.splash_pieces} ${s.girl}`}
                    style={{
                        backgroundImage: `url(/static/img/homepage/girl.png)`,
                    }}
                ></div>
                <div
                    className={`${s.splash_pieces} ${s.guy}`}
                    style={{
                        backgroundImage: `url(/static/img/homepage/guy.png)`,
                    }}
                ></div>
                <div
                    className={`${s.splash_pieces} ${s.background}`}
                    style={{
                        backgroundImage: `url(/static/img/homepage/background.png)`,
                    }}
                ></div>
            </div> */}
        </>
    );
}
