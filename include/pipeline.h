#include "vulkan/vulkan_core.h"
#define GLFW_INCLUDE_VULKAN

#include <vector>

#ifndef PIPELINE_HELPER_LEARNING_VULKAN
#define PIPELINE_HELPER_LEARNING_VULKAN

VkShaderModule createShaderModule(const std::vector<char>& code, VkDevice device);

#endif
