#version 450

layout(binding = 0) uniform UniformBufferObject {
    float numLayers; 
    vec2 frequency;
    mat2 rotation;
} ubo;

layout(location = 0) in vec2 inPos;
layout(location = 1) in vec3 inCol;

layout(location = 0) out mat2 cellRot;
//layout(location = 1) out vec2 frequency;
//layout(location = 2) out float numLayers;

// Pseudo-random unit vector based on integer coordinates
vec2 randomGradient(vec2 cell) {
    float angle = fract(sin(dot(cell, vec2(127.1, 311.7))) * 43758.5453) * 6.2831853;
    return vec2(cos(angle), sin(angle));
}


void main() {
    cellRot = ubo.rotation;
    //frequency = ubo.frequency;
    //numLayers = ubo.numLayers;

    gl_Position = vec4(inPos , 0.0, 0.5);
}
