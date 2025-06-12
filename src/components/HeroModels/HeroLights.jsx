import React from 'react';
import * as THREE from 'three';

const HeroLights = () => {
    return (
        <>
            <spotLight
                position={[2, 5, 6]}
                angle={0.15}
                penumbra={0.8}
                color="#F1F5F9"
                intensity={100}
            />

            <spotLight
                position={[4, 5, 4]}
                angle={0.3}
                penumbra={0.5}
                color="#38BDF8"
                intensity={40}
            />

            <spotLight
                position={[-3, 5, 5]}
                angle={0.4}
                penumbra={1}
                color="#3B82F6"
                intensity={60}
            />

            <primitive
                object={new THREE.RectAreaLight('#6366F1',8, 3, 2)}
                position={[1, 3, 4]}
                intensity={15}
                rotation={[-Math.PI / 4,Math.PI / 4, 0]}
            />

            <pointLight
                position={[0, 1, 0]}
                intensity={10}
                color="#1D4ED8"
            />

            <pointLight
                position={[1, 2, -2]}
                intensity={10}
                color="#0F172A"
            />
        </>
    );
};

export default HeroLights;