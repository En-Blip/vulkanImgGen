#version 450

layout(location = 0) in mat2 cellRot;
//layout(location = 1) in vec2 frequency;
//layout(location = 2) in float numLayers;

layout(location = 0) out vec4 outColor;

// Constants
const vec2 resolution = vec2(800, 600);
const vec2 cellCount = vec2(8.0, 8.0);

// Fade function (smootherstep)
float fade(float t) {
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}

// Pseudo-random unit vector based on integer coordinates
vec2 randomGradient(vec2 cell) {
    float angle = fract(sin(dot(cell, vec2(127.1, 311.7))) * 43758.5453) * 6.2831853;
    return vec2(cos(angle), sin(angle));
}

// Dot product of distance and gradient vectors
float dotGridGradient(vec2 cell, vec2 pos) {
    vec2 gradient = cellRot * randomGradient(cell);
    vec2 diff = pos - cell;
    return dot(gradient, diff);
}

// Main Perlin noise function
float perlinNoise(vec2 uv) {
    vec2 pos = uv * cellCount;
    vec2 i = floor(pos);
    vec2 f = fract(pos);

    // Dot products at corners
    float a = dotGridGradient(i, pos);
    float b = dotGridGradient(i + vec2(1.0, 0.0), pos);
    float c = dotGridGradient(i + vec2(0.0, 1.0), pos);
    float d = dotGridGradient(i + vec2(1.0, 1.0), pos);

    // Interpolation
    vec2 u = vec2(fade(f.x), fade(f.y));
    float x1 = mix(a, b, u.x);
    float x2 = mix(c, d, u.x);
    return mix(x1, x2, u.y);
}

void main() {
    // Normalize coordinates to [0, 1]
    vec2 uv = gl_FragCoord.xy / resolution;

    // Calculate noise and normalize from [-1, 1] to [0, 1]
    float noise = perlinNoise(uv) * 0.5 + 0.5;
    if(noise >= 1) noise = 0;
    else if(noise < 0) noise = 255;

    outColor = vec4(vec3(noise, noise, noise), 1.0);
    //outColor = vec4(1.0, 0.0, 1.0, 1.0);
}

//#version 330 core
//
//out vec4 FragColor;
//
//
//void main() {
    //FragColor = vec4(vec3(noise), 1.0);
//}
