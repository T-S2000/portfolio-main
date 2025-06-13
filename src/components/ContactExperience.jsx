import React from 'react';
import {Canvas} from "@react-three/fiber";
import {Computer} from "./Models/Computer-optimized.jsx";
import {OrbitControls} from "@react-three/drei";
import {Office} from "./Models/Netrunner_office.jsx";

const ContactExperience = () => {
    return (
        <Canvas camera={{position: [0, 3, 7], fov: 45}} shadows>
            <ambientLight intensity={0.5} color="#fff436" />
            <directionalLight position={[5, 5, 3]} intensity={2.5} color="#ffd9b3" />
            <directionalLight
                position={[5, 9, 1]}
                castShadow
                intensity={2.5}
                color="ffd9b3"
            />
            <OrbitControls
                enableZoom={false}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2}
            />
            <group scale={0.35} position={[-1, -1, -1]} castShadow>
                <Office />
            </group>
        </Canvas>
    );
};

export default ContactExperience;