#!/bin/bash

# Compile shaders
echo "Compiling shaders"

~/VulkanSDK/1.4.309.0/macOS/bin/glslc shaders/shader.vert -o shaders/vert.spv 
~/VulkanSDK/1.4.309.0/macOS/bin/glslc shaders/shader.frag -o shaders/frag.spv

# Compile and run C++ program
echo "Compiling and running C++ program..."
cd build
cmake ..
make 
cd ..
./build/shaderGraphics

rm ./shaders/*.spv
