cmake_minimum_required(VERSION 3.10)
project(shaderGraphics)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_EXPORT_COMPILE_COMMANDS ON)

# Set Vulkan SDK path if not auto-detected
if(NOT DEFINED ENV{VULKAN_SDK})
    message(FATAL_ERROR "VULKAN_SDK environment variable not set. Source your Vulkan SDK setup script.")
endif()

# Include paths
include_directories(
    ${CMAKE_SOURCE_DIR}/include
    /opt/homebrew/include
    $ENV{VULKAN_SDK}/include
)

# Link directories
link_directories(
    /opt/homebrew/lib
    $ENV{VULKAN_SDK}/lib
)

# Source files
file(GLOB SOURCES
    src/*.cpp
    main.cpp
)

message(STATUS "SOURCES: ${SOURCES}")

add_executable(shaderGraphics ${SOURCES})

# Link libraries
target_link_libraries(shaderGraphics
    glfw
    vulkan
)

